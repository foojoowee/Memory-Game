import Header from "./components/Shared/Header"
import Footer from "./components/Shared/Footer"
import SequenceMain from "./components/Sequence/SequenceMain"
import SequenceHero from "./components/Sequence/SequenceHero"
import { useState } from "react"
import audioStart from './assets/sound2.mp3';

export default function Sequence(){
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
                <div className="sequence-main-container">
                {!gameStarted && (
                    <SequenceHero
                        toggle={toggle}
                    />
                )}
                {gameStarted &&(
                    <SequenceMain
                        toggle={toggle}
                    />
                )}
                </div>
            <Footer/>
        </div>
    )
}