import React from 'react';
import { FaLinkedin, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <Link to="/privacy"><h5>PRIVACY</h5></Link>
                <Link to="/careers"><h5>CAREERS</h5></Link>
                <Link to="/contact"><h5>CONTACT</h5></Link>
            </div>
            <div className='social-icons'>
                <FaLinkedin />
                <FaFacebook />
                <FaGithub />
                <FaTwitter />
            </div>
        </div>
    );
}
export default Footer;
