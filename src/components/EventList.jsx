import { Row, Col } from "react-bootstrap";
import EventCard from "./EventCard";

const EventList = ({ events }) => {
  return (
    <Row className="g-4">
      {events.map((event) => (
        <Col key={event.id} xs={12} md={6} lg={4}>
          <EventCard event={event} />
        </Col>
      ))}
    </Row>
  );
};

export default EventList;
