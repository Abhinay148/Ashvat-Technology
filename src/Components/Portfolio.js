import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../css/Port.css';
import image8 from '../image/company.png';
import image4 from '../image/port.png';
import image5 from '../image/andr.jpg';
import image6 from '../image/ios.jpg';
import image7 from '../image/softw.jpg';

const Portfolio = () =>{

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
    }, [location.pathname]);
    
    return(
        <>
        <Header />
        <div className='Port'>
            <h1>OUR WORK</h1>
        </div>
        <div className='project'>
                <h2 className="project-heading">Projects Completed By Us</h2>
                <div className="project-info">
                    <div className="subheading">
                        <h3>Projects Completed</h3>
                        <p>5+ projects</p>
                    </div>
                    <div className="subheading">
                        <h3>Our Clients</h3>
                        <p>10+ clients</p>
                    </div>
                </div>
                {/* projects we work on */}
                <div className="projects-container" id='project'>
                    <h1 className="projects-heading">Projects We Work On</h1>
                    <div className="projects-grid">
                        <div className="project-card">
                        <img src={image8} alt="Project 1" className="project-image" />
                        <div className="project-content">
                            <h2 className="project-title">Doctor Website</h2>
                        </div>
                        </div>
                        <div className="project-card">
                        <img src={image4} alt="Project 1" className="project-image" />
                        <div className="project-content">
                            <h2 className="project-title">Students Portfolio</h2>
                        </div>
                        </div>
                        <div className="project-card">
                        <img src={image5} alt="Project 1" className="project-image" />
                        <div className="project-content">
                            <h2 className="project-title">Chatting Application</h2>
                        </div>
                        </div>
                        <div className="project-card">
                        <img src={image6} alt="Project 1" className="project-image" />
                        <div className="project-content">
                            <h2 className="project-title">Application for Employee</h2>
                        </div>
                        </div>
                        <div className="project-card">
                        <img src={image7} alt="Project 1" className="project-image" />
                        <div className="project-content">
                            <h2 className="project-title">Comapany Task Management</h2>
                        </div>
                        </div>
                        
                        
                        </div>
                    </div>
                {/* projects we work on */}
            </div>
        <div className='bottom'>
                <h3>Finely crafted websites & tools that make the web better</h3>
                <div>
                <Link to="/contact"><button>Hire Us</button></Link>
                <Link to="/careers"><button>Apply</button></Link>
                </div>
        </div>
        <Footer />
        </>
    );
}
export default Portfolio;