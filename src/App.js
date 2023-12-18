import React,{useEffect} from 'react';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './NavBar/NavBar';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';


function App() {
 
  useEffect(() => {
    document.title = 'Harish Kumar Vaithyan Nandhagopu'; 
  }, []);



  return (
    
   <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        </Routes>
  </Router>   
 
  );
}

export default App;
