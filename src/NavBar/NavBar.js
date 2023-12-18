// Navbar.jsx
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import your CSS file for styling
import logo from '../images/download2.png';

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked((prevClicked) => !prevClicked);
      };

      const navbarClass = isClicked ? '#navbar active' : '#navbar';



  return (
    <div className='Headnavbar' >
    <nav>
    <Link to="/home"> 
    <img src={logo} alt="Logo" className='logo' />
    </Link>
    <div>
    <ul id="navbar" className={navbarClass}>
            <li><Link to="/home">Home</Link></li> 
            <li><Link to="/About">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><a href="https://drive.google.com/file/d/1qyn8ROttHVpY0v78SX4ohNZ3aY4oVWPv/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a></li>
         
    </ul>
    </div>
    <div id="mobile">
    <i id="bar" className={isClicked ? "fas fa-times" : "fas fa-bars"} onClick={handleClick}></i>
       
    </div>
    </nav>
     </div>
  );
};

export default Navbar;
