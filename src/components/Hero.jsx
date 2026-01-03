import { Container, Button } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll"; 

const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center text-center">
      <Container>
        <h1 className="fw-bold mb-3">
          Discover Events Near You
        </h1>

        <p className="hero-text mb-4">
          Explore workshops, meetups, and experiences happening around you.
          Stay connected and never miss an opportunity.
        </p>

        <ScrollLink
          to="events"
          smooth={true}
          duration={600}
          offset={-70} 
        >
          <Button size="lg" className="hero-btn">
            Explore Events
          </Button>
        </ScrollLink>
      </Container>
    </section>
  );
};

export default Hero;
