import {useEffect, useState} from "react"
const arrayNumber = [];
for (let i = 0; i < 21; i++){
    arrayNumber.push(Math.floor(Math.random()*9*10**i) + 1*10**i);
}

export default function NumberHero(props){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [display, setDisplay] = useState([123, "●●●", 123456, "●●●●●●", 123456789, "●●●●●●●●● ", 1234567890123, "●●●●●●●●●●●●"]);

    useEffect(() =>{
        setDisplay((prevState)=>{
            return([
                ...prevState,
                prevState[0] = Math.floor(Math.random()*900) + 100,
                prevState[2] = Math.floor(Math.random()*900000) + 100000,
                prevState[4] = Math.floor(Math.random()*900000000) + 100000000,
                prevState[6] = Math.floor(Math.random()*900000000000) + 100000000000
            ])
        })
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % display.length)
        }, 1000);
        //Cleaning up
        return () => clearInterval(interval)
    }, [])

    const currentDisplay = display[currentIndex]

    return(
        <div className="number-hero">
            <div className="number-hero-title">Number Memory Game</div>
            <div className="number-hero-display">{currentDisplay}</div>
            <div className="number-hero-text">
                Type the number you saw.
            </div>
            <div className="number-hero-text">Good Luck!</div>
            <button className="number-hero-button" onClick={props.toggle}>START</button>
        </div>
    )
}

export { arrayNumber };