import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { FaArrowRight } from "react-icons/fa";
import image from '../image/web.jpg';
import image2 from '../image/app.jpg';
import TeamMember from './TeamMember';
import image3 from '../image/abhi.png';

const Home = () => {
    return (
        <div>
            <Header />
            <div className='home'>
                <div className='home-content'>
                    <h1>Digitalaise Your Business</h1>
                    <p>Empowering businesses with visionary technology and trailblazing software solutions.</p>
                    <p>Crafting digital experiences that transcend the ordinary, we redefine the web with bespoke websites and transformative tools tailored for content creators.</p>
                    <h4>
                        Get Started Now <FaArrowRight style={{ verticalAlign: 'middle' }} />
                    </h4>
                </div>
            </div>
            <div className='services-container'>
                <h2 className="services-heading">Services Provided By Us</h2>
                <div className='card-container'>
                    <div className='card'>
                        <img src={image} alt="Card 1" />
                        <div className='card-content'>
                            <h2>Web Development</h2>
                            <p>Crafting your digital Pesence</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={image2} alt="Card 2" />
                        <div className='card-content'>
                            <h2>App Development</h2>
                            <p>Crafting your digital identities</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={image2} alt="Card 2" />
                        <div className='card-content'>
                            <h2>Software Solution</h2>
                            <p>Mkae Your work easy With Technology</p>
                        </div>
                    </div>
                </div>
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
                <div className='project-links'>
                        <h2>Check Out Our Projects <FaArrowRight style={{ verticalAlign: 'middle' }} /></h2>
                </div>
            </div>
            <div className='team'>
                <h2>Our Team</h2>
                <div className="team-members">
                    <TeamMember
                        image={image3}
                        name="Abhinay Mishra"
                        designation="CEO & Founder"
                    />
                    <TeamMember
                        image={image}
                        name="Himanshu Mathpal"
                        designation="Senior Developer"
                    />
                    <TeamMember
                        image={image}
                        name="Tarun Singh"
                        designation="Full Stack Developer"
                    />
                    <TeamMember
                        image={image}
                        name="Vivek Jha"
                        designation="Backend Developer"
                    />
                    <TeamMember
                        image={image}
                        name="Shrikant Singh"
                        designation="Kuch nhi krta"
                    />
                </div>
            </div>
            <div className='bottom'>
                <h3>Let's build something great</h3>
                <div>
                <button>Hire Us</button>
                <button>Apply</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
