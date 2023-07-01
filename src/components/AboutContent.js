import "./AboutContentStyles.css"
import React from 'react'
import {Link} from 'react-router-dom'
import react1 from "../assets/react1.jpeg"
import react2 from "../assets/react2.webp"
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>I am  a React Front-end Devloper. I love to create responsive secure websites. I always might not be the most qualified or skilled candidate for a certain role or an position, but I compensate for my lack of experience with enthusiasm and hardwork.

        I am always keen and excited to learn new things and meet new people
        and I believe any new tech stack or skill can be picked up easily and quickly
        if you have your basics clear and your heart at the right place.
        </p>
        <Link to="/contact">
        <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
           <div className="img-stack-top">
             <img src={react1} className="img" alt="true" />
           </div>
           <div className="img-stack-bottom">
             <img src={react2} className="img" alt="true" />
           </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
