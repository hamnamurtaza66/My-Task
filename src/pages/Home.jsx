import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import MainNavbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import EventList from "../components/EventList";
import Footer from "../components/Footer";
import Contact from "./Contact"; // Contact section imported
import eventsData from "../data/eventsData";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  // simulate API fetch
  useEffect(() => {
    setTimeout(() => {
      setEvents(eventsData);
    }, 500);
  }, []);

  // filter events by search input
  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <MainNavbar />
      <section id="home">
        <Hero />
      </section>
      <section id="events">
        <Container className="my-5">
          <h2 className="mb-4 featured-heading text-center">Featured Events</h2>
          <SearchBar search={search} setSearch={setSearch} />
          <EventList events={filteredEvents} />
        </Container>
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default Home;
