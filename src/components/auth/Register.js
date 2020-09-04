import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion';
import { auth } from '../../firebase/util';
import { useStateValue } from '../Context/StateProvider';

function Register(props) {

    const history = useHistory()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [state, dispatch] = useStateValue();

    //Clear errors on load
    useEffect(() => {
        setErrors({});
        return () => {
            setErrors({});
        };
    }, []);

    //Registration logic
    const register = event => {
        event.preventDefault();
        let Errors = {};
        dispatch({ type: 'SET_LOADING' });

        auth.createUserWithEmailAndPassword(email, password)
            .then(res => {
                return res.user.updateProfile({ displayName: username })
                    .then(() => {
                        dispatch({
                            type: 'CREATE_USER',
                            user: { email: res.user.email, name: res.user.displayName }
                        });
                        dispatch({ type: 'SET_AUTHENTICATED' });
                        dispatch({ type: 'CLEAR_LOADING' });
                    })
                    .then(() => {
                        history.push('/');
                    })
            })
            .catch(error => {
                dispatch({ type: 'CLEAR_LOADING' });
                if (error.code === "auth/invalid-email")
                    Errors.email = error.message;
                if (error.code === "auth/email-already-in-use")
                    Errors.email = error.message;
                setErrors(Errors);
            });
}

return (
    <motion.div initial={{ x: '110%' }} animate={{ x: '0' }} transition={{ duration: .3, type: 'spring' }}>
        <form>
            <h2>Start your Journey</h2>

            {/* input div for username */}
            <div className="input_div">
                <div className="i">
                    <i className="fas fa-user"></i>
                </div>
                <div>
                    <input
                        type="text"
                        className="input"
                        placeholder="Username"
                        value={username}
                        onChange={event => { setUsername(event.target.value) }} 
                    />
                </div>
            </div>

            {/* input div for email */}
            <div className="input_div">
                <div className="i">
                    <i className="far fa-envelope"></i>
                </div>
                <div>
                    <input
                        type="email"
                        className="input"
                        placeholder="Email" 
                        value={email}
                        onChange={event => setEmail(event.target.value)} 
                    />
                    {errors.email && (<small className="textError">{errors.email}</small>)}
                </div>
            </div>

            {/* input div for password */}
            <div className="input_div">
                <div className="i">
                    <i className="fas fa-lock"></i>
                </div>
                <div>
                    <input
                        type="password"
                        className="input"
                        placeholder="Password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>
            </div>

            <input type="submit" className="btn__submit" value="Register" onClick={register} />

            <div onClick={props.changeLogin} className="signup__link">
                Already Have an account? Login here.
            </div>
        </form>
    </motion.div>
)
}

export default Register
