import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Login from './Login';
import Register from './Register';
import '../../styles/css/Auth.css';
import ResetPassword from './ResetPassword';

import loginImage from '../../styles/images/authImages/focused.png';
import startImage from '../../styles/images/authImages/start.png';
import resetImage from '../../styles/images/authImages/reset.png';

function Auth() {
    const [authType, setAuthType] = useState('login');
    
    const changeLogin = () => { setAuthType('login'); }
    const changeRegister = () => { setAuthType('register'); }
    const changeResetPassword = () => { setAuthType('resetPassword'); }
    

    return (
        <div className="auth">
            <div className="auth__container auth__container-image">
                <div className="auth__image">
                    {
                        authType === 'login'
                        ? <motion.img 
                            initial={{y: '100vh'}}
                            animate={{y: '0'}}
                            src={loginImage} 
                            alt="Login" 
                            width="100%" />
                        : authType == 'register'
                            ? <motion.img 
                                initial={{y: '100vh'}}
                                animate={{y: '0'}}
                                src={startImage} 
                                alt="Register" 
                                width="100%" />
                            : <motion.img 
                                initial={{y: '100vh'}}
                                animate={{y: '0'}}
                                src={resetImage} 
                                alt="Reset" 
                                width="100%" />

                    }
                </div>
            </div>
            <div className="auth__container">
                <div className="auth_function">
                    {
                        authType === 'login'
                        ? <Login changeRegister={changeRegister} changeForgot={changeResetPassword}/>
                        : authType === 'register'
                            ? <Register changeLogin={changeLogin} />
                            : <ResetPassword changeRegister={changeRegister} ChangeLogin={changeLogin}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Auth
