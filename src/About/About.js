import React,{useState} from "react";
import './About.css';
import harish from '../images/harish6.jpeg';

const About = () =>{

    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleImageClick = () => {
      setIsFullScreen(!isFullScreen);
    };

    return(
        <div className={`about-container ${isFullScreen ? "full-screen" : ""}`}>
        <div className="text-container">
          <p>
          Hi, I'm Harish Kumar Vaithyan Nandhagopu, a self motivated graduate student with strong Web Development and cloud expertise
          </p>
          <br />
          <p>
           I have 2 years of professionals experience as a Software Engineer. My area of expertise include Nodejs, React, AWS and Python
          </p>
          <br />
        </div>
          <div className={`image-container ${isFullScreen ? "full-screen" : ""}`}>
        <img
          src={harish}
          alt="harish"
          className={`harish ${isFullScreen ? "full-screen" : ""}`}
          onClick={handleImageClick}
        />
        </div>
      </div>
    );
}

export default About;