import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ChicagoMainPage() {
  return (
    <div class="scrollable-list" id="destinationList">
      <div class="destination" onClick="selectDestination('Chicago')">
        <h2>All Chicago Tours & Excursions in 2025</h2>
      </div>
      <p>
        The windy city is one of the most popular midwest tourist destinations.
        From the many sports teams to enjoy, to the original deep dish pizza and
        chicago dog restaraunts, and beautiful architecture and sights along the
        river, Chicago is a one-of-a-kind place that can be perfect for anyone.
      </p>
      <Card>
        <Card.Header as="h3">Chicago Skyline</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Free Cancellation</p>
            <p>1 hour</p>
            <p>from $25</p>
          </Card.Text>
        </Card.Body>
        <img
          src="src/assets/chicago.jpg"
          alt="Chicago skyline."
          style={{ width: "500px", height: "300px" }}
        />
        <p></p>
        <Button variant="primary">Check Availabilty</Button>
      </Card>
      <Card>
        <Card.Header as="h3">Deep Dish Pizza</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Free Cancellation</p>
            <p>1 hour</p>
            <p>from $25</p>
          </Card.Text>
        </Card.Body>
        <img
          src="src/assets/deep-dish-pizza.jpg"
          alt="Deep dish pizza."
          style={{ width: "500px", height: "300px" }}
        />
        <p></p>
        <Button variant="primary">Check Availabilty</Button>
      </Card>
      <Card>
        <Card.Header as="h3">Chicago Games</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Free Cancellation</p>
            <p>1 hour</p>
            <p>from $25</p>
          </Card.Text>
        </Card.Body>
        <img
          src="src/assets/chicago-dog.jpg"
          alt="Chicago dog."
          style={{ width: "500px", height: "300px" }}
        />
        <p></p>
        <Button variant="primary">Check Availabilty</Button>
      </Card>
    </div>
  );
}

export default ChicagoMainPage;
