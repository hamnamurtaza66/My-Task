import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section pt-5 pb-3 mt-5">
      <Container>
        <Row className="mb-4">
        
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold">Eventify</h5>
            <p className="footer-about-text">
              Connecting you to the best local events, workshops, and meetups.
            </p>
            <div className="social-icons mt-3">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </Col>

       
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>

          
          <Col md={4}>
            <h5 className="fw-bold">Contact Us</h5>
            <p className="footer-contact-text">
              <FaEnvelope className="me-2" /> info@eventify.com <br />
              <FaPhone className="me-2" /> +92 300 1234567
            </p>
          </Col>

        </Row>

        <Row>
          <Col className="text-center text-light">
            © 2026 Eventify. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
