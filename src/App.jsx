import Header from "./components/Shared/Header"
import Footer from "./components/Shared/Footer"
import Login from "./components/Shared/Login"
import Hero from "./components/Main/Hero"
import Games from "./components/Main/Games"
import './index.css'
import {useState} from 'react'

export default function App() {
  const [loginPopup, setLoginPopup] = useState(false)
  const [signupPopup, setSignupPopUp] = useState(false);

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
      <Header
        toggleLogin={toggleLogin}
        toggleSignup={toggleSignup}
      />
      <Login
          closeToggle={closeToggle}
          loginPopup = {loginPopup}
          signupPopup = {signupPopup}
          toggleLogin = {toggleLogin}
          toggleSignup = {toggleSignup}
      />
      <div className="main-container">
        <Hero/>
        <Games/>
      </div>
      <Footer/>
    </div>
  )
}
