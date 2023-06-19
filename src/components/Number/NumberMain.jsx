import {useEffect, useState} from "react"
import heart from '../../assets/heart.png';
import {arrayNumber} from './NumberHero'
import audio3 from '../../assets/sound3.mp3';
import {images} from '../Main/Hero'

export default function NumberMain(props){
    const [numberDisplay, setNumberDisplay] = useState(arrayNumber[0]);
    const [currentLevel, setCurrentLevel] = useState(1);
    const [lives, setLives] = useState(3);
    const [answerMode, setAnswerMode] = useState(true);
    const [correctAns, setCorrectAns] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [flickerState, setFlickerState] = useState("false");

    function levelUp(){
        setAnswerMode(false);
        setCorrectAns(false);
        setInputValue("");
        setCurrentLevel((prevLevel) => prevLevel+1);
    }

    useEffect(()=>{
        setFlickerState(true);
        setNumberDisplay(arrayNumber[currentLevel - 1])
        console.log("Current Level is " + currentLevel)
        setTimeout(() =>{
            setNumberDisplay("●".repeat(currentLevel))
            setAnswerMode(true);
            setFlickerState(false);
        }, 1000 + currentLevel*250
        )
    },[currentLevel])

    function flicker(){
        setFlickerState(true);
        setNumberDisplay(arrayNumber[currentLevel - 1]);
        setTimeout(() =>{
            setNumberDisplay("●".repeat(currentLevel))
            setAnswerMode(true);
            setFlickerState(false);
        }, 1000 + currentLevel*150
        )
    }

    function retry(){
        setInputValue("");
        flicker();
    }

    function checkAnswer(){
        setAnswerMode(false);
        const submitAudio = new Audio(audio3);
        submitAudio.play();
        console.log(inputValue);
        console.log(arrayNumber[currentLevel-1]);
        if(inputValue == arrayNumber[currentLevel-1]){
            setCorrectAns(true);
        } else{
            setCorrectAns(false);
            setAnswerMode(false);
            setFlickerState(false);
            setTimeout(() => {
                setLives((prevCount)=> prevCount-1);;
            }, 400);
        }
    }

    const handleInputChange = (event) =>{
        setInputValue(event.target.value)
    }

    const [endImage, setEndImage] = useState(images[1])
    const [flavourText, setFlavourText] = useState("Are you even trying?")

    function resultsClose(){
        setLives(-1)
    }

    useEffect(() =>{
        if(currentLevel > 5 && currentLevel <= 8){
            setEndImage(images[2])
            setFlavourText("I guess you are pretty below average. Try harder next time!")
        }
        if(currentLevel > 8 && currentLevel <= 12){
            setEndImage(images[3])
            setFlavourText("This is where most cognitive abilities stay within. You could be doing slightly better")
        }
        if(currentLevel > 12 && currentLevel <= 16){
            setEndImage(images[4])
            setFlavourText("Alright I get it, you have a decently good memory")
        }
        if(currentLevel > 16){
            setEndImage(images[5])
            setFlavourText("Good job, you should consider trying a harder game to test your limits")
        }
    },[currentLevel])

    return(
        <>
        <div className={`number-main ${lives == 0 ? "half-opacity" : ""} `}>
            <div className="number-level">Level {currentLevel}</div>
            <div className="number-lives">
                Lives : 
                {lives > 0 && <img src={heart} alt="" />}
                {lives > 1 && <img src={heart} alt="" />}
                {lives > 2 && <img src={heart} alt="" />}
            </div>
            <div className="number-main-display">{numberDisplay}</div>

            {answerMode && 
            <>
                <div className="number-input-text">
                    Enter Number:
                </div>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <button className="number-hero-submit" onClick={()=>checkAnswer()} >
                    SUBMIT
                </button>
            </>
            }

            {lives > 0 && !answerMode && !correctAns && !flickerState &&
            <>
                <div className="number-input-text">
                    Wrong, please try again.
                </div>
                <button className="number-hero-next-level" onClick={()=>retry()}>
                    RETRY
                </button>
            </>
            }

            {lives < 0 &&
            <div className="number-game-over">
                <div className="number-input-text">
                    Game Over. Please press Restart
                </div>
                <button className="number-hero-button" onClick={props.toggle}>RESTART</button>
            </div>
            }

            {!answerMode && correctAns &&
            <>
                <div className="number-input-text">
                    Correct, please proceed
                </div>
                <button className="number-hero-next-level" onClick={()=>levelUp()}>
                    NEXT LEVEL
                </button>
            </>
            }   

        </div>
        {lives == 0 &&
                <div className="game-over">
                    <div className="game-over-title">Your Results:</div>
                    <img className="game-over-image" src={endImage} alt="" />
                    <div className="game-over-text">You got to Level {currentLevel}</div>
                    <div className="game-over-flavour-text">{flavourText}</div>
                    <button onClick={() => resultsClose()}>X</button>
                </div>
            } 
        </>

    )
}