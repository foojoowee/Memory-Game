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
      />}
      <div className="main-container">
        <Hero/>
        <Games/>
      </div>
      <Footer/>
    </div>
  )
}
