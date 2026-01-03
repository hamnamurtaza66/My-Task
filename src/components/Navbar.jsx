import { Navbar, Nav, Container } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll"; 

const MainNavbar = () => {
  return (
    <Navbar expand="lg" sticky="top" className="main-navbar shadow-sm py-3">
      <Container>
        <Navbar.Brand className="fw-bold navbar-brand">
          <span className="brand-e">E</span>ventify
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <ScrollLink
              to="home"
              smooth={true}
              duration={600}
              className="nav-link-custom"
            >
              Home
            </ScrollLink>

            <ScrollLink
              to="events"
              smooth={true}
              duration={600}
              className="nav-link-custom"
            >
              Events
            </ScrollLink>

            <ScrollLink
              to="contact"
              smooth={true}
              duration={600}
              className="nav-link-custom"
            >
              Contact
            </ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
