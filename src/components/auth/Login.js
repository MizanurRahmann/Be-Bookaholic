import React from 'react'

function Login() {
    return (
        <div class="login__container-container">
            <form>
                {/* <img class="avatar" src="style/img/avatar.svg" /> */}
                <h2>WELCOME</h2>
                <div class="input_div user">
                    <div class="i">
                        <i class="fas fa-user"></i>
                    </div>
                    <div>
                        <h5>Username</h5>
                        <input type="text" class="input" />
                    </div>
                </div>
                <div class="input_div pass">
                    <div class="i">
                        <i class="fas fa-lock"></i>
                    </div>
                    <div>
                        <h5>Password</h5>
                        <input type="password" class="input" />
                    </div>
                </div>
                <a href="#">Forget Password?</a>
                <input type="submit" class="btn" value="Login" />
            </form>
        </div>
    )
}

export default Login
