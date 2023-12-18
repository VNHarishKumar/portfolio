import React from 'react';
import './Projects.css'; 
import githubcard from '../images/github.png';
import webapp from '../images/webapp.png';
import port from '../images/port.png';
import fakenews from '../images/fakenews.png';
import eatery from '../images/eatery.png';
import carrental from '../images/carrental.png';
import utube from '../images/utube.png';
import expense from '../images/expense.png';

const projects = [
  {
    id: 1,
    title: 'Portfolio',
    description: [
     'Developed a porfolio in react',
     'Fully customisable and dynamic,easily change data and images'
    ],
    imageUrl: port, 
    githubUrls: 'https://github.com/VNHarishKumar/portfolio',
    skills: ['Node.js', 'MYSQL', 'Packer','Pulumi','Typescript','AWS','GCP'], 


  },
  {
    id: 2,
    title: 'Web-App',
    description: [
      'Designed a backend for cloud application using Node.js and Mysql',
      'Implemented CI/CD pipeline using Github actions ',
      'Create an AMI using packer',
      'Used pulumi to deploy the application in AWS and GCP',
      'Used VPC, LoadBalancer, AutoScaling, SNS, SES, DynamoDB in AWS',
      'Utilized Lambda function for triggering mail',
      'Registered a domain in Route53',
      'Used GCP bucket for storage',
      'Automated continious deployment for timely update',
    ],
    imageUrl: webapp, 
    githubUrls: 'https://github.com/VNHarishKumar/Web-app', 
    skills: ['Node.js', 'MYSQL', 'Packer','Pulumi','Typescript','AWS','GCP'], 


  },
  {
    id: 3,
    title: 'Youtube Clone',
    description: [
        'Designed a MERN stack application',
        'Created a dynamic interface with using React',
        'Built API with Node.js and utilized NOSQL mongodb for storage',
        'User can create profile and login to exisiting one',
        'Can do basic CRUD operations according to there functionality'
    ],
    imageUrl: utube, 
    githubUrls: 'https://github.com/VNHarishKumar/Web_project-Youtube-Clone', 
    skills: ['React', 'Node.js', 'MongoDB', 'Javascript','SASS'], 


  },
  {
    id: 4,
    title: 'Car Rental System',
    description: [
        'Implemented a feature rich car rental system using PL/SQL',
        'Designed robust user management system, ensuring secure access control and optimized data retrival',
        'Applied Normalization techniques to the database schema ensuring adherence to standard database rule'
        
    ],
    imageUrl: carrental,
    githubUrls: 'https://github.com/VNHarishKumar/Car-Rental-System', 
    skills: ['PL/SQL', 'MYSQL'], 

  },
  {
    id: 5,
    title: 'Eatery',
    description: [
        'Implemented a feature rich delivery system using Java Swing',
        'Integrated a database to manage user profile, restaurant details and order details',
        'User can create account as resteraunt owner or user to order foods',
        'Delivery boys assigned to the order according to there availability'
        
    ],
    imageUrl: eatery, 
    githubUrls: 'https://github.com/VNHarishKumar/Car-Rental-System',
    skills: ['JAVA', 'MYSQL','JAVA Swing'], 

  },
  {
    id: 6,
    title: 'Expense Tracker',
    description: [
        'Designed and developed a visually striking and highly interactive Expense Tracker using React',
        'Demonstrated expertise in integrating various hooks for component lifecycle, and state synchronization',
        'Implemented a thoughtful blend of functional and stateful components, optimizing the application',
        
    ],
    imageUrl: expense, 
    githubUrls: 'https://github.com/VNHarishKumar/ExpenseTracker', 
    skills: ['React', 'SASS'], 

  },
  {
    id: 7,
    title: 'Fake News Detection',
    description: [
        'Implemented a fake news detection using python',
        'Trained the dataset to detect the news is fake or not',
        'Compared with other algorithm to find best for detection',
        'Documented the entire project',
        
    ],
    imageUrl: fakenews, 
    githubUrls: 'https://github.com/VNHarishKumar/FakeNewsDetection', 
    skills: ['Python', 'Machine Learning'], 

  },
  
];

const Projects = () => {
    return (
      <div className="portfolio">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <ul>
              {Array.isArray(project.description) ? (
                project.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))
              ) : (
                <li>{project.description}</li>
              )}
            </ul><br />
            <div className="github-button">
              <a href={project.githubUrls} target="_blank" rel="noopener noreferrer">
              <img src={githubcard} alt="github" className='github' />
              </a>
            </div><br />
            <div className="skills-footer">
            {project.skills.map((skill, index) => (
              <button key={index} className="skill-button" onClick={() => console.log(skill)}>
                {skill}
              </button>
            ))}
          </div><br />
          </div>
        ))}
      </div>
      
    );
  };
export default Projects;
