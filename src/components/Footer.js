import "./FooterStyles.css"
import React from 'react'
import { FaGithub, FaHome,FaLinkedin,FaMailBulk,FaPhone, FaTwitter} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <div>
                <p>G-1064 Gaur Green City.</p>
                <p>vaibhav khand indirapuram Ghaziabad</p>
                </div>
            </div>
            <div className="Phone">
            <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>+91 9650604230</h4>
            </div>
            <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>dhruv64verma@gmail.com</h4>
            </div>
        </div>
        <div className="right">
        <h4>About Me</h4>
        <p>i am Dhruv Verma, i am a final year computer science engineering student at IIIT Guwahati. I enjoy discussing new projects and design Challenges</p>
            <div className="social">
            <a href="https://github.com/Dhruvverma2020">
            <FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            </a>
            <a href="https://twitter.com/dhruv_12_verma">
            <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            </a>
            <a href="https://www.linkedin.com/in/dhruvverma2024/">
            <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            </a>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
