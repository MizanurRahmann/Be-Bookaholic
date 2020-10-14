import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion';
import { auth } from '../../firebase/util';
import { useStateValue } from '../Context/StateProvider';

function Login(props) {
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(null);
    const [state, dispatch] = useStateValue();

    //Clear errors on load
    useEffect(() => {
        setErrors(null);
        return () => {
            setErrors(null);
        };
    }, []);

    //login logic
    const login = event => {
        event.preventDefault();
        dispatch({ type: 'SET_LOADING' });

        auth.signInWithEmailAndPassword(email, password)
            .then(res => {
                dispatch({
                    type: 'CREATE_USER',
                    user: { email: res.user.email, name: res.user.displayName }
                });
                dispatch({ type: 'SET_AUTHENTICATED' });
                dispatch({ type: 'CLEAR_LOADING' });
                history.push('/');
            })
            .catch(error => {
                dispatch({ type: 'CLEAR_LOADING' });
                setErrors(error.message);
            })
    }


return (
    <motion.div
        initial={{ x: '110%' }}
        animate={{ x: '0' }}
        transition={{ duration: .2, type: 'spring' }}
    >
        <form>
            <h2>WELCOME</h2>

            {/* input div for email */}
            <div className="input_div user">
                <div className="i">
                    <i className="far fa-envelope"></i>
                </div>
                <div className="inputDiv">
                    <input
                        type="email"
                        className="input"
                        placeholder="Email"
                        value={email}
                        onChange={event => setEmail(event.target.value)} />
                </div>
            </div>

            {/* input div for password */}
            <div className="input_div pass">
                <div className="i">
                    <i className="fas fa-lock"></i>
                </div>
                <div className="inputDiv">
                    <input
                        type="password"
                        className="input"
                        placeholder="Password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>
            </div>
            <div className="textError">
                {errors && <small>{errors}</small>}
            </div>


            <input type="submit" className="btn__submit" value="Login" onClick={login} />

            <div className="signup__link">
                <div onClick={props.changeRegister}>Haven't any account?</div>
                <div onClick={props.changeForgot}>Forget password?</div>
            </div>
        </form>
    </motion.div>
)
}

export default Login
