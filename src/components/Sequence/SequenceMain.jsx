import { useState, useEffect } from "react";
import audio1 from '../../assets/sound.mp3';
import audio2 from '../../assets/sound2.mp3';
import audio3 from '../../assets/sound3.mp3';
import heart from '../../assets/heart.png';
import {images} from '../Main/Hero'

const randomNumbers = [];
for(let i = 0; i <30; i++){
    randomNumbers.push(Math.floor(Math.random()*9)+1);
}

export default function SequenceMain(props){
    const [currentLevel, setCurrentLevel] = useState(1);
    const [gameState, setGameState] = useState(false);
    const [answer, setAnswer] = useState([]);
    const [solution, setSolution] = useState([]);
    
    function levelUp(){
        setTimeout(() => {
            const background = document.getElementsByClassName("sequence-main")[0];
            background.style.backgroundColor = "#4885c2";
            setTimeout(() =>{
                setCurrentLevel((prevLevel)=> prevLevel + 1);
                background.style.backgroundColor = "#216bb4";
            },100);
        }, 400);
        console.log("You have passed the level");
        setAnswer([]);
        setDisplayText("");
    }
    
    useEffect(() =>{
        if(currentLevel > 5 && currentLevel <= 10){
            setEndImage(images[2])
            setFlavourText("I guess you are pretty below average. Try harder next time!")
        }
        if(currentLevel > 10 && currentLevel <= 18){
            setEndImage(images[3])
            setFlavourText("This is where most cognitive abilities stay within. You could be doing slightly better")
        }
        if(currentLevel > 18 && currentLevel <= 25){
            setEndImage(images[4])
            setFlavourText("Alright I get it, you have a decently good memory")
        }
        if(currentLevel > 25){
            setEndImage(images[5])
            setFlavourText("Good job, you should consider trying a harder game to test your limits")
        }
        let temp = randomNumbers.slice();
        temp.splice(currentLevel)
        setSolution(temp);
        setGameState(false);
        // console.log("Flicker is running");
        setTimeout(() => {
            flicker();
        }, 200);
    },[currentLevel])

    // useEffect(()=>{
    //     console.log("solution is " + solution)
    // },[solution])

    function flicker() {
        for (let i = 0; i < currentLevel; i++) {
          let boxId = randomNumbers[i];
          setTimeout(() => {
            const boxElement = document.getElementById(`box${boxId}`);
            boxElement.classList.add('main-grid-box-selected');
            if (boxId <= 3){
                newAudio3.currentTime = 0;
                newAudio3.play();
            } else if (boxId >6) {
                newAudio3.currentTime = 0;
                newAudio3.play();
            } else{
                newAudio3.currentTime = 0;
                newAudio3.play();
            }
            setTimeout(() => {
              boxElement.classList.remove('main-grid-box-selected');
            }, 500-currentLevel*10);
          }, i * 750-currentLevel*10);
        }
        setTimeout(() => {
            setGameState(true);
            // console.log("Flicker is no longer running");
        }, (currentLevel-1) * 750-currentLevel*10);
      }

    const newAudio1 = new Audio(audio1);
    const newAudio2 = new Audio(audio2);
    const newAudio3 = new Audio(audio3);

    function toggle(event){
        event.target.classList.add('main-grid-box-selected');
        setTimeout(() => {
            event.target.classList.remove('main-grid-box-selected');
        }, 300);
        const curId = parseInt(event.target.id.slice(3));
        if (curId <= 3){
            newAudio3.currentTime = 0;
            newAudio3.play();
        } else if (curId >6) {
            newAudio3.currentTime = 0;
            newAudio3.play();
        } else{
            newAudio3.currentTime = 0;
            newAudio3.play();
        }
        if (gameState){
            setAnswer((prevAnswer)=> 
                [...prevAnswer,
                curId]
            )
        }
    }

    function wrongAns(){
        setGameState(false);
        setTimeout(() => {
            setLives((prevCount)=> prevCount-1);
            const background = document.getElementsByClassName("sequence-main")[0];
            background.style.backgroundColor = "#4885c2";
            setTimeout(() =>{
                background.style.backgroundColor = "#216bb4";
            },100);
        }, 400);
        setDisplayText("You lost a life. Please try again")
        if (lives > 1){
        setTimeout(() =>{
            setAnswer([]);
            flicker();
        },1500);
        }
    }

    useEffect (()=>{
        console.log("The answer is " + answer)
        console.log("The solution is " + solution)
        if (answer.length > 0){
            if (solution.length == 1){
                if (solution[0] == answer[0]){
                    levelUp();
                }
            }
            for (let i = 0; i < answer.length; i++) {
                if (answer[i] === solution[i]){
                    // console.log("Continue checking")
                    console.log("Answer[i] is " + answer[i])
                    console.log("Solution[i] is " + solution[i])
                }else{
                    wrongAns();
                    return
                }
            }
            if (answer.length == solution.length && answer.length > 1){
                setTimeout(() => {
                    levelUp();
                }, 500);
            }
        }
    }, [answer])

    const [lives, setLives] = useState(3)
    const [displayText, setDisplayText] = useState("")
    const [flavourText, setFlavourText] = useState("Are you even trying?")
    const [endImage, setEndImage] = useState(images[1])

    function resultsClose(){
        setLives(-1)
        setDisplayText("You lost all lives. Please restart game.")
    }

    return(
        <div>
            <div className={`sequence-main ${lives == 0 ? "half-opacity" : ""} `}>
                <div className="sequence-main-text">
                    Click the boxes in order.
                </div>
                <div className="sequence-main-hero-grid">
                    <div id="box1" className="main-grid-box" onClick={gameState ? toggle : null}></div>
                    <div id="box2" className="main-grid-box" onClick={gameState ? toggle : null}></div>
                    <div id="box3" className="main-grid-box" onClick={gameState ? toggle : null}></div>
                    <div id="box4" className="main-grid-box" onClick={gameState ? toggle : null}></div>
                    <div id="box5" className="main-grid-box" onClick={gameState ? toggle : null}></div>
                    <div id="box6" className="main-grid-box" onClick={gameState ? toggle : null}></div>
                    <div id="box7" className="main-grid-box" onClick={gameState ? toggle : null}></div>
                    <div id="box8" className="main-grid-box" onClick={gameState ? toggle : null}></div>
                    <div id="box9" className="main-grid-box" onClick={gameState ? toggle : null}></div>
                </div>
                <div className="sequence-level">Level {currentLevel}</div>
                <div className="sequence-lives">
                    Lives : 
                    {lives > 0 && <img src={heart} alt="" />}
                    {lives > 1 && <img src={heart} alt="" />}
                    {lives > 2 && <img src={heart} alt="" />}
                </div>
                {displayText && <div className="sequence-main-display-text">
                    {displayText}
                </div>}
                <button className="sequence-hero-button" onClick={props.toggle}>RESTART</button>
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
        </div>
    )
}