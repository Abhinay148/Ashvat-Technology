import React from 'react';
import Header from '../Components/Header';
import Footer from './Footer';
import image from '../image/Careers-1.png';
const Careers = () =>{
    return (
        <>
        <Header />
        <div className='careers'>
            <h2>Careers</h2>
            <p>What makes Ashvat a great place to work? Challenging projects, great clients, and a team that is truly better together.</p>
        </div>
        <div className='dibba'>
            <div className='bo'>
            <img src={image} alt='career'/></div>
            <div className='box'>
            <h2>Challenge yourself</h2>
            <p>We’re not known because our team is big—we’re known because our team thinks big. We’re constantly challenging ourselves to grow and exceed our own expectations, individually and collectively. Nothing is more satisfying than finding the solution to a complex problem and then making it happen.</p>
            </div>
        </div>
        <div className='dibba'>
            <div className='box'>
            <h2>Culture and community</h2>
            <p>With teamwork as our foundation, we inspire and challenge each other over Slack, video calls, and even good old-fashioned phone calls. We also know that we are a part of something bigger: you’ll find us contributing to open source projects and speaking at conferences and meet-ups around the globe.</p>
            </div>
            <div className='bo'>
            <img src={image} alt='career'/></div>
        </div>
        <div className='dibba'>
            <div className='bo'>
            <img src={image} alt='career'/></div>
            <div className='box'>
            <h2>A focus on service</h2>
            <p>The most important user experience at 10up is the way others experience us. We are motivated by helping our clients, colleagues, and community achieve success through a culture built on empathy and teamwork.</p>
            </div>
        </div>
        <div className='help'>
            <h2>Help Us To Make a Better Web</h2>
            <p>We’re always on the lookout for self-starters who thrive on delivering great client experiences built with creative thinking, expertise, and fine craftsmanship. Open positions are listed below. All of our positions are remote and are open to candidates all around the globe (unless otherwise specified). If one of them sounds like a fit and you’re motivated to grow with a diverse team in a fast-paced, remote work environment, we’d love for you to apply!</p>
            <h2>Benifits</h2>
            <div className="privacy-list">
                    <ul>
                        <li>Paid time off & holidays</li>
                        <li>Annual all-team Summit!</li>
                        <li>Professional development budget</li>
                        <li>Paid parental leave</li>
                        <li>Flexible work schedule</li>
                        <li>Health Insurance</li>
                    </ul>
                </div>
        </div>
        <div className='position'>
            <h1>Look For the Suitable position.</h1>
            <h2>Sorry Currently We Are Not Hiring!</h2>
            <h2>Check After Some Days.</h2>
        </div>
        <div className='bottom'>
                <h3>Let's build something great</h3>
                <div>
                <button>Hire Us</button>
                <button>Apply</button>
                </div>
            </div>
        <Footer />
        </>
    );
}
export default Careers;