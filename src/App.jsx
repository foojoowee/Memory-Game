import Header from "./components/Shared/Header"
import Footer from "./components/Shared/Footer"
import Login from "./components/Shared/Login"
import HighScore from "./components/Shared/HighScore"
import Hero from "./components/Main/Hero"
import Games from "./components/Main/Games"
import './index.css'
import {useEffect, useState} from 'react'

export default function App() {

//   const [numberData, setNumberData] = useState([])
//   const [sequenceData, setSequenceData] = useState([])

//   useEffect(() => {
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


//   useEffect(() =>{
//     console.log("Database has changed")
//   }, [numberData])

  const [loginPopup, setLoginPopup] = useState(false)
  const [signupPopup, setSignupPopUp] = useState(false);
  const [scorePopup, setScorePopup] = useState(false);

  //Below is the code to store in local/session storage
  function initializeScore(){
    const defaultSequenceScores = [
        {playerName: "SKT T1 Faker", level: 15, date: "27/06/2023"},
        {playerName: "100T Doublelift", level: 14, date: "27/06/2023"},
        {playerName: "Daniel Negs", level: 12, date: "27/06/2023"},
        {playerName: "Wolfey VGC", level: 12, date: "27/06/2023"},
        {playerName: "Lelouch Vi Britannia", level: 1, date: "27/06/2023"},
    ]

    const stringDefaultSequenceScores = JSON.stringify(defaultSequenceScores)

    localStorage.setItem('sequenceScores', stringDefaultSequenceScores )

    const defaultNumberScores = [
        {playerName: "Hikaru Nakamura", level: 16, date: "27/06/2023"},
        {playerName: "Magnus Carlsen", level: 16, date: "27/06/2023"},
        {playerName: "Drxx", level: 14, date: "27/06/2023"},
        {playerName: "JW", level: 12, date: "27/06/2023"},
        {playerName: "Jue Viole Grace", level: 1, date: "27/06/2023"},
    ]
    
    const stringDefaultNumberScores = JSON.stringify(defaultNumberScores)
    
    localStorage.setItem('numberScores', stringDefaultNumberScores )
    console.log("Store initialized")
  }

  useEffect(() => {
    initializeScore();
  }, [])

  function toggleHighScore(){
    setScorePopup((prevState) => !prevState)
    setSignupPopUp(false)
    setLoginPopup(false)
  }

  function toggleLogin(){
    setLoginPopup((prevState) => !prevState)
    setSignupPopUp(false)
    setScorePopup(false)
  }

  function toggleSignup(){
    setSignupPopUp((prevState) => !prevState)
    setLoginPopup(false)
    setScorePopup(false)
  }

  function closeToggle(){
    setLoginPopup(false)
    setSignupPopUp(false)
  }

  return (
    <div className="home-main-container">
      <Header
        toggleLogin={toggleLogin}
        toggleSignup={toggleSignup}
        toggleHighScore={toggleHighScore}
      />
      <div className="home-main-container-content">
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
          initializeScore = {initializeScore}
          // numberData={numberData}
          // sequenceData={sequenceData}
        />}
        <div className="main-container">
          <Hero/>
          <Games/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
