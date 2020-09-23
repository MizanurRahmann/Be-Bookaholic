import React, { useState } from 'react';
import '../../styles/css/Profile.css';
import defaultAvatar from '../../styles/images/avatar.svg';

function Profile() {
    const [editMode, setEditMode] = useState(false);

    return (
        <div className="userProfile">
            <div className="userProfile__user">
                <div className="user__image">
                    <img src={defaultAvatar} alt="user avatar"/>
                    <div className="user__name"><h1>Md. Mizanur Rahman</h1></div>
                    <div className="edit" onClick={() => setEditMode(!editMode)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                        Edit
                    </div>
                </div>
            </div>
            <div className="userProfile__profile">
                <h1>User Information</h1>
                <form>
                    <div className="profile__info-block">
                        {
                            editMode
                                ? <div className="profile__info">
                                    <label>Name</label><br/>
                                    <input className="profile__info-field" type="text" value="Md. Mizanur Rahman"/>
                                  </div>
                                : null
                        }
                        <div className="profile__info">
                            <label>Email</label><br/>
                            <div className="profile__info-field">mr926560@gmail.com</div>
                        </div>
                    </div>
                    <div className="profile__info-block">
                        <div className="profile__info">
                            <label>Village</label><br/>
                            {!editMode
                                ? <div className="profile__info-field">Thon Thonia</div>
                                : <input className="profile__info-field" type="text" value="Thon Thonia"/>
                            }
                        </div>
                        <div className="profile__info">
                            <label>Thana</label><br/>
                            {!editMode
                                ? <div className="profile__info-field">Bogra Sadar</div>
                                : <input className="profile__info-field" type="text" value="Bogra Sadar"/>
                            }
                        </div>
                    </div>
                    <div className="profile__info-block">
                        <div className="profile__info">
                            <label>District</label><br/>
                            {!editMode
                                ? <div className="profile__info-field">Bogra</div>
                                : <input className="profile__info-field" type="text" value="Bogra"/>
                            }
                        </div>
                        <div className="profile__info">
                            <label>Division</label><br/>
                            {!editMode
                                ? <div className="profile__info-field">Rajshahi</div>
                                : <input className="profile__info-field" type="text" value="Rajshahi"/>
                            }
                        </div>
                    </div>
                    <div className="profile__info-block">
                        <div className="profile__info phone">
                            <label>Phone</label><br/>
                            {!editMode
                                ? <div className="profile__info-field">+880 1531709712</div>
                                : <input className="profile__info-field" type="text" value="01531709712"/>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile
