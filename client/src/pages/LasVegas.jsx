import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function LasVegasMainPage() {
  return (
    <div>
      <div class="scrollable-list" id="destinationList">
        <div class="destination" onClick="selectDestination('Las Vegas')">
          <h2>All Las Vegas Tours & Excursions in 2025</h2>
        </div>
        <p>
          Las Vegas, known for its vibrant nightlife, casinos, and
          entertainment, is a city that never sleeps. Whether you're looking to
          try your luck at the slots, catch a world-class show, or indulge in
          gourmet dining, Las Vegas has something for everyone. From the iconic
          Las Vegas Strip to the stunning desert landscapes surrounding the
          city, Las Vegas is a destination that offers excitement and adventure!
        </p>
        <Card>
          <Card.Header as="h3">Las Vegas Skyline</Card.Header>
          <Card.Body>
            <Card.Text>
              <p>Free Cancellation</p>
              <p>1 hour</p>
              <p>from $25</p>
            </Card.Text>
          </Card.Body>
          <img
            src="src/assets/las-vegas.jpg"
            alt="Las Vegas skyline"
            style={{ width: "500px", height: "300px" }}
          />
          <p></p>
          <Button variant="primary">Check Availabilty</Button>
        </Card>
        <Card>
          <Card.Header as="h3">Casino</Card.Header>
          <Card.Body>
            <Card.Text>
              <p>Free Cancellation</p>
              <p>1 hour</p>
              <p>from $25</p>
            </Card.Text>
          </Card.Body>
          <img
            src="src/assets/casino.jpg"
            alt="Casino."
            style={{ width: "500px", height: "300px" }}
          />
          <p></p>
          <Button variant="primary">Check Availabilty</Button>
        </Card>
        <Card>
          <Card.Header as="h3">Entertainment</Card.Header>
          <Card.Body>
            <Card.Text>
              <p>Free Cancellation</p>
              <p>1 hour</p>
              <p>from $25</p>
            </Card.Text>
          </Card.Body>
          <img
            src="src/assets/entertainment.jpg"
            alt="Entertainment."
            style={{ width: "500px", height: "300px" }}
          />
          <p></p>
          <Button variant="primary">Check Availabilty</Button>
        </Card>
      </div>
    </div>
  );
}

export default LasVegasMainPage;
