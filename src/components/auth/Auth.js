import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Login from './Login';
import Register from './Register';
import '../../styles/css/Auth.css';
import loginImage from '../../styles/images/authImages/focused.png';
import startImage from '../../styles/images/authImages/start.png';

// import { auth } from 'firebase';

function Auth() {
    const [authType, setAuthType] = useState(true);
    const changeAuthType = () => {
        setAuthType(!authType);
    }

    return (
        <div className="auth">
            <div className="auth__container">
                <div className="auth__image">
                    {
                        authType 
                        ? <motion.img 
                            initial={{y: '100vh'}}
                            animate={{y: '0'}}
                            src={loginImage} 
                            alt="Login" 
                            width="100%" />
                        : <motion.img 
                            initial={{y: '100vh'}}
                            animate={{y: '0'}}
                            src={startImage} 
                            alt="Login" 
                            width="100%" />
                    }
                </div>
            </div>
            <div className="auth__container">
                <div className="auth_function">
                    {
                        authType
                        ? <Login typeChange={changeAuthType} />
                        : <Register typeChange={changeAuthType} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Auth
