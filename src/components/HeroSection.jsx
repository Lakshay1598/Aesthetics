import React from 'react'
import './herosection.css'
import mountains from '../assets/mountains.jpg'
import citylights from '../assets/citylights.jpg'
import river from '../assets/rivers.jpg'
import street from '../assets/street.jpg'


const HeroSection = () => {
    const mouseHover = (event) =>{
        event.target.style.visibility = "inherit";
    }

    return (
        <div className='hero-container'>
            <div className="vidHouse" onMouseOver={mouseHover}>
                <img className="vid1" src={mountains} alt="Mountains" />
            </div>
            <div className="vidHouse" onMouseOver={mouseHover}>
                <img className="vid2" src={river} alt="River" />
            </div>
            <div className="vidHouse" onMouseOver={mouseHover}>
                <img className="vid3" src={citylights} alt="City Lights" />
            </div>
            <div className="vidHouse" onMouseOver={mouseHover}>
                <img className="vid4" src={street} alt="Street" />
            </div>

        </div>
    )
}

export default HeroSection