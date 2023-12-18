import React,{useState,useEffect} from "react";
import './Home.css';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import emaillogo from '../images/email.png';

const Home = () => {
    const githubUrl = "https://github.com/VNHarishKumar";
  const linkedinUrl = "https://www.linkedin.com/in/harish-kumar-vaithyan-nandhagopu/";
  const email = "vaithyannandhagopu.h@northeastern.edu";

  const [typedText, setTypedText] = useState("");
  const [showCursor] = useState(true);
  const descriptionText = "I'm a Full Stack Developer";
  const typingSpeed = 100; 
  const pauseDuration = 5000; 


  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i <= descriptionText.length; i++) {
        setTypedText(descriptionText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, typingSpeed));
      }
  
      await new Promise(resolve => setTimeout(resolve, pauseDuration));
  
      for (let i = descriptionText.length; i >= 0; i--) {
        setTypedText(descriptionText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, typingSpeed));
      }
  
     
      typeText();
    };
  
    typeText();
  
   
    return () => {
      clearTimeout();
    };
  }, [descriptionText, typingSpeed, pauseDuration]);
  

  return (
    <div className="home-container">
      <h1 className="name">Harish Kumar Vaithyan Nandhagopu</h1><br />
      <p className="description">{typedText}{showCursor && <span className="cursor">_</span>}</p><br />
      <div className="icon-container">
        <a href={githubUrl} className="icon-link" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="github" className='github' />
        </a>
        <a href={linkedinUrl} className="icon-link" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="linkedin" className='linkedin' />
        </a>
        <a href={`mailto:${email}`} className="icon-link">
        <img src={emaillogo} alt="emaillogo" className='emaillogo' />
        </a>
      </div>
    </div>
  );
};
export default Home;
