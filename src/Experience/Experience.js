import React from "react";
import './Experience.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import cts from '../images/cts.png';
import nlcil from '../images/NLC.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FaBookOpen } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';


const Experience = () => {
    
  return (
    <div className="edu-container">
        <br /><br /><br /><br /><br /><br />
    <VerticalTimeline className="vertical-timeline--top">
      <VerticalTimelineElement
        contentStyle={{ background: '#afb4ba', color: '#fff' ,fontFamily:  'Times'}}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="AUG 2020- Jul 2022"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faBriefcase} color=""/>}
       
       
      >
        <div className="desribe-block">
        <img src={cts} alt="cts" className="cts" height={100} />
        {/* <h2 className="vertical-timeline-element-title">Master's</h2><br /> */}<br /><br />
        <h2 className="head-content">Programmer Analyst - Full Time</h2> <br />
        <h2>Cognizant, Chennai, Tamil Nadu, India</h2><br />
        <h3>As a Software Engineer I worked in Data Migration and Data Archival team </h3>
        <ul className="body-content"><br />
          <li>Successfully managed Data Migration and Data Archival project following Software Development life 
 cycle, including scoping, mapping and importing specifications of the project </li><br />
          <li>Utilized SQL scripts for data transformation and data loading operations using Migration-Center tool</li><br />
          <li>Worked with cloud Enterprise management systems like Veeva vault during data migration and archival 
 phases</li><br />
          <li>Collaborated closely with cross-functional teams, including business owners, developers, infrastructure 
 teams, to ensure clear communication and alignment throughout the project </li><br />
          <li>Met project timelines and budget requirements while delivering high-quality results</li><br />
          <li>Continuously monitored and provided maintenance support for the implemented data migration and 
 archival solutions, ensuring long-term data integrity and system performance</li><br />
        </ul>
        </div>
      </VerticalTimelineElement>
     
      <VerticalTimelineElement
        contentStyle={{ background: '#afb4ba', color: '#fff' ,fontFamily:  'Times'}}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Jan 2020- May 2020"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaBookOpen />} 
        
       
        
      >
        <div className="desribe-block" >
        <img src={cts} alt="cts" className="cts" height={100} />
       <br /><br />
        <h2 className="head-content">Graduate Engineer - Internship</h2> <br />
        <h2>Cognizant, Chennai, Tamil Nadu, India</h2><br />
        <h3>As a Graduate Engineer I designed and developed a fully functioning website using spring </h3>
        <ul className="body-content"><br />
          <li>Learned Core Java, mysql and spring boot</li><br />
          <li>Designed a web application on the theme party planning management using spring</li><br />
        </ul>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: '#afb4ba', color: '#fff' ,fontFamily:  'Times'}}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Jun 2019- Jul 2019"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaBook />} 
       
        
      >
        <div className="desribe-block" >
        <img src={nlcil} alt="nlcil" className="nlcil" height={100} />
        <br /><br />
        <h2 className="head-content">Web developer - Internship</h2> <br />
        <h2>NLCIL, Neyveli, Tamil Nadu, India</h2><br />
        <h3>As a Intern I designed a web application using PHP and mysql </h3>
        <ul className="body-content"><br />
          <li>As a Intern I learned and developed front end for employee payment system using PHP</li><br />
          <li>Used mysql for backend to support the data transactions</li><br />
        </ul>
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
  );
};

export default Experience;
