import React, { useState, useEffect } from 'react';
import { useStateValue } from '../Context/StateProvider';
import { auth, db } from '../../firebase/util';
import '../../styles/css/Profile.css';
import defaultAvatar from '../../styles/images/avatar.svg';

function Profile() {
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(false)
    const [state, dispatch] = useStateValue();

    const [Name, setName] = useState(state.user.name);
    const [District, setDistrict] = useState(state.userAddress.District || '');
    const [Division, setDivision] = useState(state.userAddress.Division || '');
    const [Thana, setThana] = useState(state.userAddress.Thana || '');
    const [Village, setVillage] = useState(state.userAddress.Village || '');
    const [Phone, setPhone] = useState(state.userAddress.Phone || '');
    
    
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
        console.log(state.userAddress);
        //setup user profile(in database)
        db.collection("Users").doc(state.user.id).set({
            District: District,
            Division: Division,
            Phone: Phone,
            Thana: Thana,
            Village: Village,
            Wishlist: state.wishlist,
            Basket: state.basket
        })
        .then(() => { console.log("Document successfully written!") })
        .catch(error => { console.error("Error writing document: ", error); });
        
        setEditMode(false)
    }



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
                            <div className="profile__info-field">{state.user.email}</div>
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
