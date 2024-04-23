import React, { useEffect } from 'react';
import { FaLinkedin, FaGithub,FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const handleMailClick = () => {
        window.location.href = 'mailto:mishraabhinay814@example.com';
    };
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
    }, [location.pathname]);
    return (
        <div className='footer'>
            <div className='footer-content'>
                <Link to="/privacy"><h5>PRIVACY</h5></Link>
                <Link to="/careers"><h5>CAREERS</h5></Link>
                <Link to="/contact"><h5>CONTACT</h5></Link>
            </div>
            <div className='social-icons'>
                    <a href='https://www.instagram.com/abhinay_mishra?igsh=dXNiend0MXgxNnAx' target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <div onClick={handleMailClick} ><IoIosMail /></div>
                    <a href='https://github.com/Abhinay148' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href='https://www.linkedin.com/in/abhinay-mishra-32bb38241/' target="_blank" rel="noopener noreferrer" ><FaLinkedin /></a>
            </div>
        </div>
    );
}
export default Footer;
