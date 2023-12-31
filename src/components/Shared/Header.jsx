import home from '../../assets/home-icon.svg'

export default function Header({toggleLogin, toggleSignup, toggleHighScore}){

    return(
        <div className="header-main">
            <div className="header-scores" onClick={toggleHighScore}>
                High Scores
            </div>
            <div className="header-login">
                <p onClick={toggleSignup}>Sign Up</p>
                <p onClick={toggleLogin}>Log in</p>
                <a href="./index.html">
                    <img src={home} alt="" />
                </a>
            </div>
        </div>
    )
}