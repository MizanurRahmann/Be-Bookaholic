import React from 'react'
import { motion } from 'framer-motion';

function Register(props) {
    return (
        <motion.div initial={{x: '110%'}} animate={{x: '0'}} transition={{ duration: .3, type: 'spring' }}>
            <form>
                {/* <img class="avatar" src="style/img/avatar.svg" /> */}
                <h2>Start your Journey</h2>
                
                {/* input div for username */}
                <div class="input_div">
                    <div class="i">
                        <i class="fas fa-user"></i>
                    </div>
                    <div>
                        <h5>Username</h5>
                        <input type="text" class="input" />
                    </div>
                </div>

                {/* input div for email */}
                <div class="input_div">
                    <div class="i">
                        <i class="far fa-envelope"></i>
                    </div>
                    <div>
                        <h5>Email</h5>
                        <input type="email" class="input" />
                    </div>
                </div>

                {/* input div for password */}
                <div class="input_div">
                    <div class="i">
                        <i class="fas fa-lock"></i>
                    </div>
                    <div>
                        <h5>Password</h5>
                        <input type="password" class="input" />
                    </div>
                </div>

                <input type="submit" class="btn__submit" value="Register" />
                
                <div  onClick={props.typeChange} className="signup__link">
                    Already Have an account? Signin here.
                </div>
            </form>
        </motion.div>
    )
}

export default Register
