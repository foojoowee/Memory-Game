import Header from "./components/Shared/Header"
import Footer from "./components/Shared/Footer"
import Login from "./components/Shared/Login"
import HighScore from "./components/Shared/HighScore"
import SequenceMain from "./components/Sequence/SequenceMain"
import SequenceHero from "./components/Sequence/SequenceHero"
import { useState, useEffect } from "react"
import audioStart from './assets/sound2.mp3';

export default function Sequence(){

    // function addItem(item){
    //     fetch('http://localhost:3000/api/items',{
    //       method: 'POST',
    //       headers: {
    //         'Content-Type' : 'application/json'
    //       },
    //       body: JSON.stringify({
    //         item: item,
    //         scoreType: "Sequence"
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
        let arraySequence = [];
        for(let i = 0; i <30; i++){
            arraySequence.push(Math.floor(Math.random()*9)+1);
        }
        return arraySequence
    }

    const [arraySequence, setArraySequence] = useState(() => {
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
        setArraySequence(() => {
            return newSet();
        })
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
                // numberData={numberData}
                // sequenceData={sequenceData}
            />}
            <div className="sequence-main-container">
            {!gameStarted && (
                <SequenceHero
                    toggle={toggle}
                    setPlayerName={setPlayerName}
                    playerName={playerName}
                />
            )}
            {gameStarted &&(
                <SequenceMain
                    toggle={toggle}
                    playerName={playerName}
                    arraySequence={arraySequence}
                    // addItem={addItem}
                />
            )}
            </div>
            {/* <button onClick={() => addItem(newNumberScore)}>
                Add Item
            </button> */}
            <Footer/>
        </div>
    )
}