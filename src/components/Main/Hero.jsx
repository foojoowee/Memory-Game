import brainPicture from '../../assets/brain.png'
import brainPicture2 from '../../assets/brain-1.png'
import brainPicture3 from '../../assets/brain-2.png'
import brainPicture4 from '../../assets/brain-3.png'
import brainPicture5 from '../../assets/brain-4.png'
import brainPicture6 from '../../assets/brain-5.png'
import {useState, useEffect} from 'react'

export const images = [brainPicture, brainPicture2, brainPicture3, brainPicture4, brainPicture5, brainPicture6]

export default function Hero(){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() =>{
        const interval = setInterval(() => {
            setCurrentImageIndex((prevImageIndex) => (prevImageIndex + 1) % images.length)
        }, 3000);
        //Cleaning up
        return () => clearInterval(interval)
    }, [])

    const currentImage = images[currentImageIndex]

    return(
    <div className="hero-content">
        <div>
            <img 
                src={currentImage} 
                alt=""
            />
        </div>
        <div className="hero-text">
            <p>MEMORY TEST</p>
            <p>Take the test and challenge your cognitive abilities!</p>
        </div>

    </div>
    )
}

