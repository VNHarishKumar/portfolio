import React from "react";
import './Skills.css';
import nodejs from '../images/nodejs.png';
import reactjs from '../images/react.png';
import python from '../images/python.png';
import js from '../images/javascript.png';
import ts from '../images/typescript.png';
import mysql from '../images/mysql.png';
import nosql from '../images/mongodb.png';
import aws from '../images/aws.png';
import gcp from '../images/google-cloud.png';
import git from '../images/git.png';
import cicd from '../images/GitHub Actions.png';
import java from '../images/java.png';

const Skills = () => {
    return (
        <div className="skills-container">
           <div className="skill-text"> 
           <p>I love to learn new technologies and play with them</p>
            <p>
                I have expertise in various technologies and tools. Below are some of the key skills I possess:
            </p>
            </div><br /><br />
            <div className="icons-container">
               
                <div className="icon1">
                <img src={nodejs} alt="nodejs" className="nodejs"  />
                </div>
                <div className="icon2">
                <img src={reactjs} alt="reactjs" className="reactjs"  />
                </div>
                
                <div className="icon3">
                <img src={python} alt="python" className="python"  />
                </div>
                <div className="icon4">
                <img src={js} alt="js" className="js"  />
                </div>
                <div className="icon5">
                <img src={ts} alt="ts" className="ts"  />
                </div>
                <div className="icon6">
                <img src={mysql} alt="mysql" className="mysql"  />
                </div><br /><br />
            
            </div><br /><br />
            <div className="icons-container"><br />
                <div className="icon7">
                    <img src={nosql} alt="nosql" className="nosql"  />
                </div>
                <div className="icon8">
                    <img src={aws} alt="aws" className="aws"  />
                </div>
                <div className="icon9">
                    <img src={gcp} alt="gcp" className="gcp"  />
                </div>
                <div className="icon10">
                    <img src={git} alt="git" className="git"  />
                </div>
                <div className="icon11">
                    <img src={cicd} alt="cicd" className="cicd"  />
                </div>
                <div className="icon12">
                    <img src={java} alt="java" className="java"  />
                </div>
            </div>
        </div>
    );
};

export default Skills;
