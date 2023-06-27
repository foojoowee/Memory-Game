import Header from "./components/Shared/Header"
import Footer from "./components/Shared/Footer"
import Login from "./components/Shared/Login"
import HighScore from "./components/Shared/HighScore"
import SequenceMain from "./components/Sequence/SequenceMain"
import SequenceHero from "./components/Sequence/SequenceHero"
import { useState } from "react"
import audioStart from './assets/sound2.mp3';

export default function Sequence(){
    const [loginPopup, setLoginPopup] = useState(false)
    const [signupPopup, setSignupPopUp] = useState(false);
    const [scorePopup, setScorePopup] = useState(false);
    const [playerName, setPlayerName] = useState("Guest");

    function toggleHighScore(){
        setScorePopup((prevState) => !prevState)
    }
  
    function toggleLogin(){
      setLoginPopup(true)
      setSignupPopUp(false)
    }
  
    function toggleSignup(){
      setSignupPopUp(true)
      setLoginPopup(false)
    }
  
    function closeToggle(){
      setLoginPopup(false)
      setSignupPopUp(false)
    }

    const [gameStarted, setGameStarted] = useState(false)

    function toggle(){
        const audio = new Audio(audioStart);
        audio.play();
        setTimeout(()=>{
            setGameStarted((prevState) => !prevState);
        }, 500)
    }
    
    return (
        <div>
            <Header
                toggleLogin={toggleLogin}
                toggleSignup={toggleSignup}
                toggleHighScore={toggleHighScore}
            />
            <Login
                closeToggle={closeToggle}
                loginPopup = {loginPopup}
                signupPopup = {signupPopup}
                toggleLogin = {toggleLogin}
                toggleSignup = {toggleSignup}
            />
            {scorePopup && 
            <HighScore
                toggleHighScore={toggleHighScore}
            />}
            <div className="sequence-main-container">
            {!gameStarted && (
                <SequenceHero
                    toggle={toggle}
                />
            )}
            {gameStarted &&(
                <SequenceMain
                    toggle={toggle}
                    playerName={playerName}
                />
            )}
            </div>
            <Footer/>
        </div>
    )
}