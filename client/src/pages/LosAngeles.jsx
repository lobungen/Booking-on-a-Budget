import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function LosAngelesMainPage() {
  return (
    <div class="scrollable-list" id="destinationList">
      <div class="destination" onClick="selectDestination('Los Angeles')">
        <h1>All Los Angeles Tours & Excursions in 2025</h1>
      </div>
      <p>
        One of the biggest cities in the United States-spanning from the beaches
        to the amazing trails Los Angeles has a plethora of amazing places to
        visit on a budget.
      </p>
      <Card>
        <Card.Header as="h3">Runyon Canyon Hiking Tour</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Free Cancellation</p>
            <p>2 hour</p>
            <p>from $149</p>
          </Card.Text>
        </Card.Body>
        <img
          src="src/assets/runyon-canyon-featured.jpg"
          alt="Runyon Canyon hiking trail."
          style={{ width: "500px", height: "300px" }}
        />
        <p></p>
        <Button variant="primary">Check Availabilty</Button>
        <Button variant="secondary">Add to Plan</Button>
      </Card>
      <Card>
        <Card.Header as="h3">Venice Beach Bike Tour</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Free Cancellation</p>
            <p>3 hour</p>
            <p>from $89</p>
          </Card.Text>
        </Card.Body>
        <img
          src="src/assets/Venice-Beach-in-Los-Angeles.jpg"
          alt="Venice Beach portraying the waves hitting the white sand with palm trees."
          style={{ width: "500px", height: "300px" }}
        />
        <p></p>
        <Button variant="primary">Check Availabilty</Button>
        <Button variant="secondary">Add to Plan</Button>
      </Card>
      <Card>
        <Card.Header as="h3">Warner Bros Studio Tour</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Free Cancellation</p>
            <p>3 hour</p>
            <p>from $73</p>
          </Card.Text>
        </Card.Body>
        <img
          src="src/assets/WarnerBrosTour.jpg"
          alt="Warner Bros Studio Tour."
          style={{ width: "500px", height: "300px" }}
        />
        <p></p>
        <Button variant="primary">Check Availabilty</Button>
        <Button variant="secondary">Add to Plan</Button>
      </Card>
    </div>
  );
}
export default LosAngelesMainPage;
