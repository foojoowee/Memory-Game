import closeIcon from '../../assets/close-icon.svg'
import googleIcon from '../../assets/google-icon.svg'

export default function Login({closeToggle, loginPopup, signupPopup, toggleSignup, toggleLogin}){
    
    return(
        <div className={`login-wrapper ${loginPopup || signupPopup ? 'appear': ''}`}>
            <img onClick={closeToggle} className="login-close-icon" src={closeIcon} alt="" />
            <div className={`login-main ${signupPopup ? 'login-signup-active': ''}`}>
                <div className="login-header">
                    <h2>Log In</h2>
                </div>
                <form action="#">
                    <div className="input-box">
                        <input type="email" placeholder=" " required/>
                        <label> Email : </label>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder=" " required/>
                        <label> Password : </label>
                    </div>
                    <div className="remember-me">
                        <input type="checkbox"/>
                        <label>Remember Me</label>
                    </div>
                    <button type="submit" className="btn-submit">
                        Log In
                    </button>
                    <div className="login-register">
                        <a href="#" className="register-link" onClick={toggleSignup}> Sign Up </a>
                        <br/>
                        <a href="#" className="password-link"> Forgot Password?</a>
                    </div>
                </form>
            </div>

            <div className={`signup-main ${signupPopup ? 'signup-active': ''}`}>
                <div className="signup-header">
                    <h2>Sign Up</h2>
                </div>
                <form action="#">
                    <div className="input-box">
                            <input type="email" placeholder=" " required/>
                            <label> Username : </label>
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder=" " required/>
                        <label> Email : </label>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder=" " required/>
                        <label> Password : </label>
                    </div>
                    <div className="remember-me">
                        <input type="checkbox"/>
                        <label>I agree to the T&C</label>
                    </div>
                    <div className="signup-buttons">
                        <button type="submit" className="btn-submit">
                            Sign Up
                        </button>
                        <button type="submit" className="btn-submit">
                            <img src={googleIcon} alt="" />
                            Google
                        </button>
                    </div>
                    <div className="login-register">
                        <a href="#" className="register-link" onClick={toggleLogin}> Log In </a>
                        <br/>
                        <a href="#" className="password-link"> Forgot Password?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}