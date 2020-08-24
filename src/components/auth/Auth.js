import React from 'react';
import Login from './Login';
import '../../styles/css/Auth.css';
import loginImage from '../../styles/images/authImages/focused.png'

function Auth() {
    return (
        <div>
            {/* <img src="style/img/wave.png" className="wave" /> */}
            <div className="login__container">
                <div className="img">
                    <img src={loginImage} alt="" />
                </div>
                <Login />
            </div>
        </div>
    )
}

export default Auth
