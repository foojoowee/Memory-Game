import home from '../../assets/home-icon.svg'

export default function Header(){
    return(
        <div className="header-main">
            <div className="header-scores">
                High Scores
            </div>
            <div className="header-login">
                <p>Sign Up</p>
                <p>Log In</p>
                <a href="./index.html">
                    <img src={home} alt="" />
                </a>
            </div>
        </div>

    )
}