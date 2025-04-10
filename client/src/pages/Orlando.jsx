import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function OrlandoMainPage() {
  return (
    <div class="scrollable-list" id="destinationList">
      <div class="destination" onClick="selectDestination('Orlando')">
        <h2>All Orlando Tours & Excursions in 2025</h2>
      </div>
      <p>
        Orlando, known for its theme parks and warm weather, offers a variety of
        attractions and activities for visitors of all ages. Whether you're
        looking to experience the magic of Disney, explore the wonders of
        Universal Studios, or relax by the pool, Orlando has something for
        everyone. With its family-friendly atmosphere, vibrant nightlife, and
        diverse dining options, Orlando is a top destination for travelers
        seeking fun and adventure.
      </p>
      <Card>
        <Card.Header as="h3">Private Orlando Helicopter Tour</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Free Cancellation</p>
            <p>45 minutes to 1 hour</p>
            <p>from $155</p>
          </Card.Text>
        </Card.Body>
        <img
          src="src/assets/orlando.jpg"
          alt="Orlando skyline."
          style={{ width: "500px", height: "300px" }}
        />
        <p></p>
        <Button variant="primary">Check Availabilty</Button>
        <Button variant="secondary">Add to Plan</Button>
      </Card>
      <Card>
        <Card.Header as="h3">Universal Studios</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Free Cancellation</p>
            <p>11 hour</p>
            <p>from $58</p>
          </Card.Text>
        </Card.Body>
        <img
          src="src/assets/universal-studios.jpg"
          alt="Universal Studios."
          style={{ width: "500px", height: "300px" }}
        />
        <p></p>
        <Button variant="primary">Check Availabilty</Button>
        <Button variant="secondary">Add to Plan</Button>
      </Card>
      <Card>
        <Card.Header as="h3">Disney World</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Free Cancellation</p>
            <p>11 hour</p>
            <p>from $58</p>
          </Card.Text>
        </Card.Body>
        <img
          src="src/assets/disney-world.jpg"
          alt="Disney World."
          style={{ width: "500px", height: "300px" }}
        />
        <p></p>
        <Button variant="primary">Check Availabilty</Button>
        <Button variant="secondary">Add to Plan</Button>
      </Card>
    </div>
  );
}

export default OrlandoMainPage;
