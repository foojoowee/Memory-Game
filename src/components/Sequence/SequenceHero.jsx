import {useState, useEffect} from 'react'

export default function SequenceHero(props){
    const initialStates = ["grid-box","grid-box","grid-box","grid-box toggle-box"]
    const [states, setStates] = useState(initialStates)

    useEffect(() =>{
        const interval = setInterval(() => {
            setStates((prevState) => {
                const rotated = [...prevState]
                rotated.push(rotated.shift());
                return rotated;
            })
        }, 2000);
        //Cleaning up
        return () => clearInterval(interval)
    }, [])

    return(
        <div className="sequence-hero">
            <div className="sequence-hero-title">Sequence Memory Game</div>
            <div className="hero-grid">
                <div className={states[0]}></div>
                <div className={states[2]}></div>
                <div className={states[1]}></div>
                <div className={states[3]}></div>
            </div>
            <div className="sequence-hero-text">
                Click the boxes in order.
            </div>
            <div className="sequence-hero-text">Good Luck!</div>
            <div className="name-input">
                <input onChange={(e) => props.setPlayerName(e.target.value)} className="name-input-input" type="text" placeholder="Enter your Name" value={props.playerName === "Guest" ? "": props.playerName}/>
                <p>(Name for High Scores)</p>
            </div>
            <button className="sequence-hero-button" onClick={props.toggle}>START</button>
        </div>
    )
}