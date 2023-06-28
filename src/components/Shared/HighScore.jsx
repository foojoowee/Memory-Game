import closeIcon from '../../assets/close-icon.svg'
import goldTrophy from '../../assets/gold-icon.svg'
import silverTrophy from '../../assets/silver-icon.svg'
import bronzeTrophy from '../../assets/bronze-icon.svg'
import {useState} from 'react'

export default function HighScore({toggleHighScore, initializeScore}){
    
    const [selectedTab, setSelectedTab] = useState(true)

    function toggle(input){
        return(
            setSelectedTab(input)
        )
    }

    function clearStorage(){
        sessionStorage.clear();
        initializeScore();
    }
    
    function printStorage(){
        const sequenceScores = JSON.parse(sessionStorage.getItem('sequenceScores'))
        const numberScores = JSON.parse(sessionStorage.getItem('numberScores'))
        console.log(sequenceScores)
        console.log(sequenceScores[0].playerName)
        console.log(numberScores)
        console.log("Storage Printed")
    }

    const sequenceScores = JSON.parse(sessionStorage.getItem('sequenceScores'))
    const numberScores = JSON.parse(sessionStorage.getItem('numberScores'))

    return(
        <div className="highscore-main">
            <div className="highscore-title">
                <p>LEADERBOARD</p>
                <img onClick={toggleHighScore} className="highscore-close" src={closeIcon} alt="" />
            </div>
            <div className="highscore-tabs">
                <p onClick={()=>toggle(true)} className={`highscore-tab-1 ${selectedTab ? "selected-tab" : ""}`}>Sequence Game </p>
                <p onClick={()=>toggle(false)} className={`highscore-tab-2 ${selectedTab ? "" : "selected-tab"}`}>Number Game</p>
            </div>
            <div className="highscore-table">
                {selectedTab &&
                    <table>
                        <tbody>
                            <tr>
                                <td>No.</td>
                                <td>Player</td>
                                <td>Level</td>
                                <td>Date</td>
                            </tr>
                            <tr>
                                <td>
                                    1
                                    <img src={goldTrophy} alt="" />
                                </td>
                                <td>{sequenceScores[0].playerName}</td>
                                <td>{sequenceScores[0].level}</td>
                                <td>{sequenceScores[0].date}</td>
                            </tr>
                            <tr>
                                <td>
                                    2
                                    <img src={silverTrophy} alt="" />
                                </td>
                                <td>{sequenceScores[1].playerName}</td>
                                <td>{sequenceScores[1].level}</td>
                                <td>{sequenceScores[1].date}</td>
                            </tr>
                            <tr>
                                <td>
                                    3
                                    <img src={bronzeTrophy} alt="" />
                                </td>
                                <td>{sequenceScores[2].playerName}</td>
                                <td>{sequenceScores[2].level}</td>
                                <td>{sequenceScores[2].date}</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>{sequenceScores[3].playerName}</td>
                                <td>{sequenceScores[3].level}</td>
                                <td>{sequenceScores[3].date}</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>{sequenceScores[4].playerName}</td>
                                <td>{sequenceScores[4].level}</td>
                                <td>{sequenceScores[4].date}</td>
                            </tr>
                        </tbody>
                    </table>
                }
                {!selectedTab &&
                    <table>
                        <tbody>
                            <tr>
                                <td>No.</td>
                                <td>Player</td>
                                <td>Level</td>
                                <td>Date</td>
                            </tr>
                            <tr>
                                <td>
                                    1
                                    <img src={goldTrophy} alt="" />
                                </td>
                                <td>{numberScores[0].playerName}</td>
                                <td>{numberScores[0].level}</td>
                                <td>{numberScores[0].date}</td>
                            </tr>
                            <tr>
                                <td>
                                    2
                                    <img src={silverTrophy} alt="" />
                                </td>
                                <td>{numberScores[1].playerName}</td>
                                <td>{numberScores[1].level}</td>
                                <td>{numberScores[1].date}</td>
                            </tr>
                            <tr>
                                <td>
                                    3
                                    <img src={bronzeTrophy} alt="" />
                                </td>
                                <td>{numberScores[2].playerName}</td>
                                <td>{numberScores[2].level}</td>
                                <td>{numberScores[2].date}</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>{numberScores[3].playerName}</td>
                                <td>{numberScores[3].level}</td>
                                <td>{numberScores[3].date}</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>{numberScores[4].playerName}</td>
                                <td>{numberScores[4].level}</td>
                                <td>{numberScores[4].date}</td>
                            </tr>
                        </tbody>
                    </table>
                }
            </div>
            <div className="highscore-buttons">
                <button onClick={clearStorage}>Clear Storage</button>
                <button onClick={printStorage}>Print Storage</button>
            </div>
        </div>
    )
}