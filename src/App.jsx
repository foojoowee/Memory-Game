import Header from "./components/Shared/Header"
import Footer from "./components/Shared/Footer"
import Login from "./components/Shared/Login"
import HighScore from "./components/Shared/HighScore"
import Hero from "./components/Main/Hero"
import Games from "./components/Main/Games"
import './index.css'
import {useEffect, useState} from 'react'

export default function App() {
  const [loginPopup, setLoginPopup] = useState(false)
  const [signupPopup, setSignupPopUp] = useState(false);
  const [scorePopup, setScorePopup] = useState(false);

  // useEffect(()=> {
  //   function start(){
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: ""
  //     })
  //   }

  //   gapi.load('client:auth2',start);
  // })

  function initializeScore(){
    const defaultSequenceScores = [
        {playerName: "SKT T1 Faker", level: 15, date: "27/06/2023"},
        {playerName: "100T Doublelift", level: 14, date: "27/06/2023"},
        {playerName: "Daniel Negs", level: 12, date: "27/06/2023"},
        {playerName: "Wolfey VGC", level: 12, date: "27/06/2023"},
        {playerName: "Lelouch Vi Britannia", level: 1, date: "27/06/2023"},
    ]

    const stringDefaultSequenceScores = JSON.stringify(defaultSequenceScores)

    sessionStorage.setItem('sequenceScores', stringDefaultSequenceScores )

    const defaultNumberScores = [
        {playerName: "Hikaru Nakamura", level: 16, date: "27/06/2023"},
        {playerName: "Magnus Carlsen", level: 16, date: "27/06/2023"},
        {playerName: "Drxx", level: 14, date: "27/06/2023"},
        {playerName: "JW", level: 12, date: "27/06/2023"},
        {playerName: "Jue Viole Grace", level: 1, date: "27/06/2023"},
    ]
    
    const stringDefaultNumberScores = JSON.stringify(defaultNumberScores)
    
    sessionStorage.setItem('numberScores', stringDefaultNumberScores )
    console.log("Store initialized")
  }

  useEffect(() => {
    initializeScore();
  }, [])

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

  return (
    <div>
      {/* <GoogleLoginComp/>
      <GoogleLogoutComp/> */}
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
        initializeScore = {initializeScore}
      />}
      <div className="main-container">
        <Hero/>
        <Games/>
      </div>
      <Footer/>
    </div>
  )
}
