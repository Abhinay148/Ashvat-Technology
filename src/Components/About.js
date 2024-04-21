import React from 'react';
import Header from './Header';
import '../css/about.css';
import image from '../image/strategy.jpg';
import image1 from '../image/design.jfif';
import image2 from '../image/engineering.jpg';
import TeamMember from './TeamMember';
import image3 from '../image/abhi.png';
import image9 from '../image/tarun.jpg';
import image10 from '../image/vvk.jpg';
import image11 from '../image/him.jpg';
import Footer from './Footer';
const About = () =>{
    return(
        <div className='about'>
            <Header />
            <div className='about-us'>
                <h3>We make a better web with finely crafted websites and tools for content creators. </h3>
                <p>We make the internet better with consultative creative and engineering services, innovative tools, and dependable products that take the pain out of content creation and management, in service of digital experiences that advance business and marketing objectives. We’re a group of people built to solve problems, made to create, wired to delight.</p>

                <p>A customer-centric service model that covers every base, unrivaled leadership and investment in open platforms and tools for digital makers and content creators, and a forward-looking remote work culture make for a refreshing agency experience.</p>

                <p>With ~200 experts in digital strategy and management, software engineering, user experience and interactive design, cloud infrastructure, and audience and revenue optimization, we’re big enough to conquer any challenge, and small enough to care. Cross-discipline teams of 6-8 specialists organize around qualified project and product managers, putting customer delivery front and center. Whether your ads are down, your visitor bounce rate is up, or your database server is sideways, we’re a partner who never says, “We don’t know how to help,” and can always say, “The President would be happy to speak with you.”</p>
                <button> Hire Us</button>
            </div>
            <div className='how'>
                <div className='boxes'>
                <img src={image} alt='strategy' />
                <div className="details">
                    <h3>Strategy</h3>
                    <p>Should I build an app or a responsive website? Am I maximizing my ad revenue? Why don’t my visitors click “sign up”? How many 10uppers does it take to screw in a website? We don’t just build: we figure out the plan.</p>
                </div>
                </div>
                <div className='boxes'>
                <img src={image1} alt='design' />
                <div className="details">
                    <h3>Design</h3>
                    <p>Inspiring design brings the functional and the beautiful; a delightful blend of art and engineering. We focus on the audience whimsy and relationship between brand and consumer, delivering design that works.</p>
                </div>
                </div>
                <div className='boxes'>
                <img src={image2} alt='engineering' />
                <div className="details">
                    <h3>Engineering</h3>
                    <p>Please. Look under the hood. Our team of sought after international speakers provides expert code review for enterprise platforms like WordPress.com VIP. Because the best website you have is the one that’s up.</p>
                </div>
                </div>
            </div>
            <div className='ceo-heading'>
            <h2>Message from Our CEO</h2>
            </div>
            <div className="ceo-section">
                <div className="ceo-image">
                    <img src={image3} alt="CEO" />
                </div>
                <div className="ceo-quote">
                    <blockquote>
                        "Don't wait for other's to give you dose, always be in overdose."
                    </blockquote>
                    <h2>CEO - Abhinay Mishra</h2>
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
                        image={image11}
                        name="Himanshu Mathpal"
                        designation="Senior Developer"
                    />
                    <TeamMember
                        image={image9}
                        name="Tarun Singh"
                        designation="Full Stack Developer"
                    />
                    <TeamMember
                        image={image10}
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
                <h3>Finely crafted websites & tools that make the web better</h3>
                <div>
                <button>Hire Us</button>
                <button>Apply</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default About;