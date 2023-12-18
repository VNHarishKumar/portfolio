import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import neu from '../images/neu.svg';
import sastra from '../images/sastra3.png';
import {FaGraduationCap} from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';


const Education = () => {
  return (
    <div className="edu-container">
        <br /><br /><br /><br /><br /><br />
    <VerticalTimeline className="vertical-timeline--top">
      <VerticalTimelineElement
        contentStyle={{ background: '#afb4ba', color: '#fff' ,fontFamily:  'Times'}}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="SEP 2022- May 2024 (Expected)"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaGraduationCap />} 
       
       
      >
        <div className="desribe-block">
        <img src={neu} alt="neu" className="neu" height={100} />
       <br /><br />
        <h2>Master's in Information Systems</h2> <br />
        <h2>Northeastern University, Boston</h2><br />
        <h2>GPA:3.6</h2>
        </div>
      </VerticalTimelineElement>
     
      <VerticalTimelineElement
        contentStyle={{ background: '#afb4ba', color: '#fff',fontFamily:  'Times' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Jun 2016- May 2020"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<IoMdSchool />}
        
      >
        <div className="desribe-block2" >
         <img src={sastra} alt="sastra" className="sastra" height={100}  /><br /> <br />
        <h2>B.Tech in Computer Science</h2> <br />
        <h2>SASTRA University, Tamil Nadu, India</h2><br />
        <h2>GPA:3.5</h2>
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
  );
};

export default Education;
