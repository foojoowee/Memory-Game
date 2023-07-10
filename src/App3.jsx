import Header from "./components/Shared/Header"
import Footer from "./components/Shared/Footer"
import Login from "./components/Shared/Login"
import HighScore from "./components/Shared/HighScore"
import NumberMain from "./components/Number/NumberMain"
import NumberHero from "./components/Number/NumberHero"
import { useState, useEffect } from "react"
import audioStart from './assets/sound2.mp3';
import './index.css'

export default function Number(){

    // function addItem(item){
    //     fetch('http://localhost:3000/api/items',{
    //       method: 'POST',
    //       headers: {
    //         'Content-Type' : 'application/json'
    //       },
    //       body: JSON.stringify({
    //         item: item,
    //         scoreType: "Numbers"
    //     })
    //     })
    //       .then (response => response.json())
    //       .then (data => {
    //         console.log('Item added: ', data)
    //       })
    //       .catch(error =>{
    //         console.error('Error adding item: ', error)
    //       })
    // }

    
    // const [numberData, setNumberData] = useState([])
    // const [sequenceData, setSequenceData] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:3000/api/connect')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Received data:', data);
    //         setNumberData((data[0]));
    //         setSequenceData((data[1]));
    //         // Process the received data here
    //     })
    //     .catch(error => {
    //         console.error('Error fetching data:', error);
    //     });
    // }, []);
    function newSet(){
        let arrayNumber = [];
        for (let i = 0; i < 20; i++){
            arrayNumber.push(Math.floor(Math.random()*9*10**i) + 1*10**i);
        }
        return arrayNumber
    }

    const [arrayNumber, setArrayNumber] = useState(() => {
        return newSet()
        }
    )

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
        setArrayNumber(() => {
            return newSet();
        })
        setTimeout(()=>{
            setGameStarted((prevState) => !prevState);
        }, 500)
    }

    return (
        <div className="number-main-container">
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
                // numberData={numberData}
                // sequenceData={sequenceData}
            />}

                {!gameStarted && (
                    <NumberHero
                        toggle={toggle}
                        setPlayerName={setPlayerName}
                        playerName={playerName}
                    />
                )}
                {gameStarted &&(
                    <NumberMain
                        toggle={toggle}
                        playerName={playerName}
                        arrayNumber={arrayNumber}
                        // addItem={addItem}
                    />
                )}

            <Footer/>
        </div>
    )
}