import Header from "./components/Shared/Header"
import Footer from "./components/Shared/Footer"
import Hero from "./components/Main/Hero"
import Games from "./components/Main/Games"
import './index.css'
import {useState} from 'react'

export default function App() {
  const [level, setLevel] = useState(1)
  return (
    <div>
      <Header/>
      <div className="main-container">
        <Hero/>
        <Games/>
      </div>
      <Footer/>
    </div>
  )
}
