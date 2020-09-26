import React, { useState, useEffect } from 'react';
import { useStateValue } from '../Context/StateProvider';
import { auth, db } from '../../firebase/util';
import '../../styles/css/Profile.css';
import defaultAvatar from '../../styles/images/avatar.svg';

function Profile() {
    const [state, dispatch] = useStateValue();
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(false)

    const [Name, setName] = useState(auth.currentUser.displayName);
    const [ImageUrl, setImageUrl] = useState(auth.currentUser.photoURL);
    const [Village, setVillage] = useState('');
    const [Thana, setThana] = useState('');
    const [District, setDistrict] = useState('');
    const [Division, setDivision] = useState('');
    const [Phone, setPhone] = useState('');
    
    const updateProfile = event => {
        event.preventDefault();
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
        //update user info(in context API)
        dispatch({
            type: 'CREATE_USER',
            user: { 
                name: Name,
                imageURL: ImageUrl
              }
        })

        //update user inf(in firebase)
        auth.currentUser.updateProfile({
            displayName: Name,
            photoURL: ImageUrl
        }).then(() => {
            console.log("Update sccesfull");
        }).catch(error => {
            console.log("Error: ", error.message);
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
                    <img src={defaultAvatar} alt="user avatar" />
                    <div className="user__name"><h1>{state.user.name}</h1></div>
                    <div className="edit" onClick={() => setEditMode(!editMode)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                        Edit
                    </div>
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
