import icon1 from '../../assets/brain-icon.svg'
import icon2 from '../../assets/telephone-icon.svg'
import icon3 from '../../assets/pair-icon.png'
import coming from '../../assets/coming.png'
import { useState } from 'react'

export default function Games(){
    const [popup, setPopup] = useState(false)

    function togglePopup(){
        setPopup((prevState)=> !prevState)
    }

    return(
        <div className="games-container">
            <div className="games-main">
                <a href='sequence.html'>
                    <div className="games-box">
                        <img src={icon1} alt="" className="brain-icon"/>
                        <p>Sequences</p>
                    </div>
                </a>
                <a href="numbers.html">
                    <div className="games-box">
                        <img src={icon2} alt="" className="telephone-icon"/>
                        <p>Numbers</p>
                    </div>
                </a>
                {/* <div href="" onClick={togglePopup}>
                    <div className="games-box-coming">
                        <img src={icon3} alt="" className="pair-icon" />
                        <p>Card Pairs</p>
                    </div>
                </div> */}
                {popup &&
                    <div className="coming-soon">
                        <div className="coming-soon-title">Sorry this game is still in development</div>
                        <img className="coming-soon-image" src={coming} alt="" />
                        <div className="coming-soon-text">Please check back in a while!</div>
                        <button onClick={togglePopup}>X</button>
                    </div>
                }

            </div>
        </div>

    )
}