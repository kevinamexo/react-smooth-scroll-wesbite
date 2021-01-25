import React from 'react'
import './HeroSection.css'


function HeroSection({
    heading,
    descr,
    alt,
    src,
}) {
    return (
        <div className="hero-section">
          <div className="row-container">
            <div className="column1">
                <div className="home-text-wrapper">
                    <p className="heading">{heading}</p>   
                    <p className="text-descr">{descr}</p>
                    <button className="home-signup">Get Started</button>

                </div>
            </div>
            <div className="column2">
                <img src={src} alt={alt} className="home-img"></img>
            </div>

          </div>
        </div>
    )
}
export default HeroSection
