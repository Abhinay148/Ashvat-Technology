import React from 'react';
import { FaLinkedin, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <h5>PRIVACY</h5>
                <h5>CAREERS</h5>
                <h5>CONTACT</h5>
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
