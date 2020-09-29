import React, { useState, useEffect, Children } from 'react';
import { useStateValue } from '../Context/StateProvider';
import { auth, db, storage } from '../../firebase/util';
import '../../styles/css/Profile.css';
import defaultAvatar from '../../styles/images/avatar.svg';

function Profile() {
    const [state, dispatch] = useStateValue();
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(false)

    const [Name, setName] = useState(auth.currentUser.displayName);
    const [preview, setPreview] = useState(auth.currentUser.photoURL);
    const [ImageUrl, setImageUrl] = useState(auth.currentUser.photoURL);
    
    const [Village, setVillage] = useState('');
    const [Thana, setThana] = useState('');
    const [District, setDistrict] = useState('');
    const [Division, setDivision] = useState('');
    const [Phone, setPhone] = useState('');

    const selectProfileImage = event => { event.target.parentNode.firstChild.click(); }
    const previewImage = event => {
        const reader = new FileReader();
        //preview in UI
        reader.onload = () => {
            if(reader.readyState === 2)
                setPreview(reader.result);
        }
        reader.readAsDataURL(event.target.files[0]);
        setImageUrl(event.target.files[0])
    }
    
    const updateProfile = event => {
        event.preventDefault();

        //update user inf(in firebase)
        auth.currentUser.updateProfile({
            displayName: Name,
        }).then(() => {
            console.log("Name-Update sccesfull");
        }).catch(error => {
            console.log("Error: ", error.message);
        })
        //Save profile pic ture to the storage after save it in context API
        if(preview){
            const uploadRef = storage.ref(`ProfilePictures/${auth.currentUser.uid}`);
            const task = uploadRef.put(ImageUrl);
            task.on(
                'state_changed',
                snapshot => {},
                error => {
                    console.log(error);
                },
                () => {
                    storage.ref(`ProfilePictures`).child(auth.currentUser.uid).getDownloadURL()
                        .then( url => {
                            auth.currentUser.updateProfile({
                                photoURL: url
                            }).then(() => {
                                console.log("Profile-Update sccesfull");
                            })

                            dispatch({type: 'CREATE_USER', user: { imageURL: preview}})
                        })
            })
        }

        //update user info(in context API)
        dispatch({
            type: 'CREATE_USER',
            user: { 
                name: Name,
                imageURL: preview
              }
        })

        //setup user profile(in context API)
        dispatch({
            type: 'SET_USER_PROFILE',
            address: {
                District: District,
                Division: Division,
                Phone: Phone,
                Thana: Thana,
                Village: Village,
            }
        })
        
        //setup user profile(in database)
        db.collection("Users").doc(auth.currentUser.uid).set({
            District: District,
            Division: Division,
            Phone: Phone,
            Thana: Thana,
            Village: Village,
        })
        .then(() => { console.log("Document successfully written!") })
        .catch(error => { console.error("Error writing document: ", error); });
        
        setEditMode(false)
    }
    
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            db.collection('Users').doc(auth.currentUser.uid).get()
            .then(doc => {
                dispatch({ type: 'SET_USER_PROFILE', address: doc.data() });
                setDistrict(doc.data().District);
                setDivision(doc.data().Division);
                setPhone(doc.data().Phone);
                setThana(doc.data().Thana);
                setVillage(doc.data().Village);
                setLoading(false);
            })
            .catch(error => { console.error("Error writing document: ", error); })
        }, 1500);
    }, [])

    
     if(loading)
        return <div>Loading</div>
    return (
        <div className="userProfile">
            <div className="userProfile__user">
                <div className="user__image">
                    {
                        preview
                        ? <img src={preview} alt="user avatar"/>
                        : <img src={defaultAvatar} alt="user avatar"/>
                    }
                    <div className="user__name"><h1>{state.user.name}</h1></div>
                    <div className="edit" onClick={() => setEditMode(!editMode)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                        <span>Edit</span>
                    </div>
                    {
                        editMode
                            ? <div className="update-image" onClick={selectProfileImage}>
                                <input type="file" hidden="hidden" onChange={previewImage}/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                            </div>
                            : null
                    }
                </div>
            </div>
            <div className="userProfile__profile">
                <h1>User Information</h1>
                <form onSubmit={updateProfile}>
                    <div className="profile__info-block">
                        {
                            editMode
                                ? <div className="profile__info">
                                    <label>Name</label><br />
                                    <input
                                        className="profile__info-field"
                                        type="text"
                                        value={Name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                : null
                        }
                        <div className="profile__info">
                            <label>Email</label><br />
                            <div className="profile__info-field">{auth.currentUser.email}</div>
                        </div>
                    </div>
                    <div className="profile__info-block">
                        <div className="profile__info">
                            <label>Village</label><br />
                            {!editMode
                                ? <div className="profile__info-field">{state.userAddress.Village}</div>
                                : <input
                                    className="profile__info-field"
                                    type="text"
                                    value={Village || ''}
                                    onChange={e => setVillage(e.target.value)}
                                />
                            }
                        </div>
                        <div className="profile__info">
                            <label>Thana</label><br />
                            {!editMode
                                ? <div className="profile__info-field">{state.userAddress.Thana}</div>
                                : <input
                                    className="profile__info-field"
                                    type="text"
                                    value={Thana || ''}
                                    onChange={e => setThana(e.target.value)}
                                />
                            }
                        </div>
                    </div>
                    <div className="profile__info-block">
                        <div className="profile__info">
                            <label>District</label><br />
                            {!editMode
                                ? <div className="profile__info-field">{state.userAddress.District}</div>
                                : <input
                                    className="profile__info-field"
                                    type="text"
                                    value={District || ''}
                                    onChange={e => setDistrict(e.target.value)}
                                />
                            }
                        </div>
                        <div className="profile__info">
                            <label>Division</label><br />
                            {!editMode
                                ? <div className="profile__info-field">{state.userAddress.Division}</div>
                                : <input
                                    className="profile__info-field"
                                    type="text"
                                    value={Division || ''}
                                    onChange={e => setDivision(e.target.value)}
                                />
                            }
                        </div>
                    </div>
                    <div className="profile__info-block">
                        <div className="profile__info phone">
                            <label>Phone</label><br />
                            {!editMode
                                ? <div className="profile__info-field">{state.userAddress.Phone}</div>
                                : <input
                                    className="profile__info-field"
                                    type="text"
                                    value={Phone || ''}
                                    onChange={e => setPhone(e.target.value)}
                                />
                            }
                        </div>
                    </div>
                    {
                        editMode
                            ? <button type="submit" className="update__btn">Update profile</button>
                            : null
                    }
                </form>
            </div>
        </div>
    )
}

export default Profile
