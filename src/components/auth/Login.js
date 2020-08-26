import React from 'react';
import { motion } from 'framer-motion';

function Login(props) {
    return (
        <motion.div 
            initial={{x: '110%'}} 
            animate={{x: '0'}} 
            transition={{ duration: .2, type: 'spring'}}
        >
            <form>
                {/* <img class="avatar" src="style/img/avatar.svg" /> */}
                <h2>WELCOME</h2>
                
                {/* input div for email */}
                <div class="input_div user">
                    <div class="i">
                    <i class="far fa-envelope"></i>
                    </div>
                    <div>
                        <input type="email" class="input" placeholder="Email" />
                    </div>
                </div>

                {/* input div for password */}
                <div class="input_div pass">
                    <div class="i">
                        <i class="fas fa-lock"></i>
                    </div>
                    <div>
                        <input type="password" class="input" placeholder="Password" />
                    </div>
                </div>


                <p className="forget__pass" href="#">Forget Password?</p>
                <input type="submit" class="btn__submit" value="Login" />
                
                <div  onClick={props.typeChange} className="signup__link">
                    Have an account? Signup here.
                </div>
            </form>
        </motion.div>
    )
}

export default Login
