import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function NewYorkCityMainPage() {
  return (
    <div class="scrollable-list" id="destinationList">
      <div class="destination" onClick="selectDestination('New York City')">
        <h1>All New York City Tours & Excursions in 2025</h1>
      </div>
      <p>
        The city that never sleeps, New York City is a bustling metropolis with
        iconic landmarks and diverse neighborhoods. From the bright lights of
        Times Square to the serene beauty of Central Park, NYC offers a unique
        blend of culture, history, and entertainment. Whether you're exploring
        world-class museums, enjoying Broadway shows, or savoring diverse
        cuisines, New York City has something for everyone. Don't miss the
        chance to visit the Statue of Liberty, take a stroll across the Brooklyn
        Bridge, or enjoy panoramic views from the Empire State Building.
      </p>
      <Card>
        <Card.Header as="h3">New York City Skyline</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Free Cancellation</p>
            <p>1 hour</p>
            <p>from $25</p>
          </Card.Text>
        </Card.Body>
        <img
          src="src/assets/new-york-city.jpg"
          alt="New York City skyline."
          style={{ width: "500px", height: "300px" }}
        />
        <p></p>
        <Button variant="primary">Check Availabilty</Button>
        <Button variant="secondary">Add to Plan</Button>
      </Card>
      <Card>
        <Card.Header as="h3">Statue of Liberty Helicopter Tour</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Free Cancellation</p>
            <p>20 minutes</p>
            <p>from $279</p>
          </Card.Text>
        </Card.Body>
        <img
          src="src/assets/statue-of-liberty.jpg"
          alt="Statue of Liberty"
          style={{ width: "500px", height: "300px" }}
        />
        <p></p>
        <Button variant="primary">Check Availabilty</Button>
        <Button variant="secondary">Add to Plan</Button>
      </Card>
      <Card>
        <Card.Header as="h3">Private Time Square Walking Tour</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Free Cancellation</p>
            <p>1 hour</p>
            <p>from $12</p>
          </Card.Text>
        </Card.Body>
        <img
          src="src/assets/times-square.jpg"
          alt="Times Square at night."
          style={{ width: "500px", height: "300px" }}
        />
        <p></p>
        <Button variant="primary">Check Availabilty</Button>
        <Button variant="secondary">Add to Plan</Button>
      </Card>
    </div>
  );
}

export default NewYorkCityMainPage;
