import { Container, Form, Button } from "react-bootstrap";


const Contact = () => {
  return (
    <section id="contact">
        <Container className="my-5">
          <h2 className="mb-4 text-center featured-heading">Contact Us</h2>
          <p className="text-center mb-4">
            Have questions or want to collaborate? Send us a message!
          </p>
          <form className="contact-form mx-auto" style={{ maxWidth: "600px" }}>
            <input type="text" placeholder="Your Name" className="form-control mb-3" />
            <input type="email" placeholder="Your Email" className="form-control mb-3" />
            <textarea placeholder="Message" className="form-control mb-3" rows={4}></textarea>
            <button type="submit" className="register-btn w-100">Send Message</button>
          </form>
        </Container>
      </section>


  );
};

export default Contact;
