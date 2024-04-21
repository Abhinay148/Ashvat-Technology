import React, { useState, useEffect } from 'react'; // Import useEffect
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [mobileMenuOpen]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prevState => !prevState);
    }

    return (
      <header className="header">
          <nav className={`navbar ${isMobile && 'mobile'}`}>
              <div className="navbar-left">
                  {"< Ashvat Technologies />"}
              </div>
              <div className="navbar-right">
                  <div id="menu-btn" className="menu-icon" onClick={toggleMobileMenu}>
                      {mobileMenuOpen ? <RxCross1 /> : <IoMenu />}
                  </div>
                  <ul className={`navbar-links ${isMobile && mobileMenuOpen ? 'active' : ''}`}>
                      <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
                      <li><Link to="/about" onClick={toggleMobileMenu}>About</Link></li>
                      <li><Link to="/portfolio" onClick={toggleMobileMenu}>Portfolio</Link></li>
                      <li><Link to="/careers" onClick={toggleMobileMenu}>Careers</Link></li>
                      <li><Link to="/contact" onClick={toggleMobileMenu}>Contact Us</Link></li>
                  </ul>
              </div>
          </nav>
      </header>
  );
}

export default Header;
