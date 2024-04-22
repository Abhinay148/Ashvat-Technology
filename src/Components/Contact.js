import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Header from './Header';
import Image from '../image/touch.jpg';
import Image1 from '../image/map.svg';
import Footer from "./Footer";
import '../css/contact.css';
import { FaLocationDot } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("https://portfolio-api-two-mu.vercel.app/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <>
    <Header />
    <div className="content">
      <h2>Let's Build Something Great</h2>
      <p>Seeking a partner to help conceptualize, refine, execute, and/or support your digital strategy? We’re always looking for new opportunities to apply our white glove service, craftsmanship, and creativity.</p>
      <p>Looking to join our team? Check out our careers page.</p>
      <p>For press inquiries, email mishraabhinay814@gmail.com.</p>
    </div>
    <section className="contact" id="connect">
      <Container>
        <h2>Let's Connect</h2>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={Image} alt="Contact Us" style={{ maxWidth: "80%",margin:"30px", height: "auto",mixBlendMode:"multiply" }}/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    <div className="location">
      <h2>Where is Ashvat Technology?</h2>
      <div className="address">
        <div className="address-box">
        <div className="address-data">
          <div><FaLocationDot /></div>
          <div>
            <h3>Address</h3>
            <p>159 A Jawahar Nagar Near Police Line</p>
          </div>
        </div>
        <div className="address-data">
          <div><MdAddCall /></div>
          <div>
            <h3>Call Us</h3>
            <p>+91-9996848046</p>
          </div>
        </div>
        <div className="address-data">
          <div><IoMdMail /></div>
          <div>
            <h3>Mail Us At</h3>
            <p>mishraabhinay814@gmail.com</p>
          </div>
        </div>
        </div>
        <div className="map">
            <img src={Image1} alt="map" />
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact;