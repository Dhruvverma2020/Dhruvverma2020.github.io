import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/intro-bg.jpeg"
import {Link} from "react-router-dom"
const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>hi, I'M Dhruv, I am a</p>
            <h1>React devloper</h1>
            <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contacts" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
