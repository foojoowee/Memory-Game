import Header from "./components/Shared/Header"
import Footer from "./components/Shared/Footer"
import NumberMain from "./components/Number/NumberMain"
import NumberHero from "./components/Number/NumberHero"
import { useState } from "react"
import audioStart from './assets/start.mp3';

export default function Number(){
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
            <Header/>
                <div className="number-main-container">
                {!gameStarted && (
                    <NumberHero
                        toggle={toggle}
                    />
                )}
                {gameStarted &&(
                    <NumberMain
                        toggle={toggle}
                    />
                )}
                </div>
            <Footer/>
        </div>
    )
}