import React from 'react'
import "./about.css"


const About = () => {
    const PF = "http://localhost:5000/images/"
    return (
        <div className="about">
            <span className="aboutTitle">About Me</span>
            <img src={`${PF}DSC01276.JPG`} alt="" className="aboutImg" />
            <p className="aboutText">My name is Roy Wang. I work in Finance industry and I am also a self-taught programmer.</p>
        </div>
    )
}

export default About
