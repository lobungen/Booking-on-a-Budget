import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function LosAngelesMainPage() {
  return (
    <div class="scrollable-list" id="destinationList">
      <div class="destination" onClick="selectDestination('Los Angeles')">
        <h2>All Los Angeles Tours & Excursions in 2025</h2>
      </div>
      <p>
        "One of the biggest cities in the United States-spanning from the
        beaches to the amazing trails Los Angeles has a plethora of amazing
        places to visit on a budget."
      </p>
      <Card>
        <Card.Header as="h3">Runyon Canyon</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Free Cancellation</p>
            <p>1 hour</p>
            <p>from $25</p>
          </Card.Text>
        </Card.Body>
        <img
          src="src/assets/runyon-canyon-featured.jpg"
          alt="Runyon Canyon hiking trail."
          style={{ width: "500px", height: "300px" }}
        />
        <p></p>
        <Button variant="primary">Check Availabilty</Button>
      </Card>
      <Card>
        <Card.Header as="h3">Venice Beach</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Free Cancellation</p>
            <p>1 hour</p>
            <p>from $25</p>
          </Card.Text>
        </Card.Body>
        <img
          src="src/assets/Venice-Beach-in-Los-Angeles.jpg"
          alt="Venice Beach portraying the waves hitting the white sand with palm trees."
          style={{ width: "500px", height: "300px" }}
        />
        <p></p>
        <Button variant="primary">Check Availabilty</Button>
      </Card>
      <Card>
        <Card.Header as="h3">Restaurants</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Free Cancellation</p>
            <p>1 hour</p>
            <p>from $25</p>
          </Card.Text>
        </Card.Body>
        <img
          src="src/assets/in-N-out.jpg"
          alt="In N Out restaurant a cheap burger place only located on the west coast."
          style={{ width: "500px", height: "300px" }}
        />
        <p></p>
        <Button variant="primary">Check Availabilty</Button>
      </Card>
    </div>
  );
}
export default LosAngelesMainPage;
