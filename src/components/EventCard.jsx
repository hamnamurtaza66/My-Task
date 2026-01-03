import { Card, Button } from "react-bootstrap";

const EventCard = ({ event }) => {
  return (
    <Card className="event-card h-100 shadow-sm border-0">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold mb-3">
          {event.name}
        </Card.Title>
        <Card.Subtitle className="text-muted mb-2 small">
          {event.date} • {event.time}
        </Card.Subtitle>
        <Card.Text className="text-muted small mb-3">
          {event.location}
        </Card.Text>
        <Card.Text className="flex-grow-1">
          {event.description}
        </Card.Text>
        <Button className="register-btn mt-auto">
          Register
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
