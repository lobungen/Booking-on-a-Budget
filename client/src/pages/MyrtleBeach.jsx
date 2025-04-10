import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MyrtleBeachMainPage() {
  return (
    <div class="scrollable-list" id="destinationList">
      <div class="destination" onClick="selectDestination('Myrtle Beach')">
        <h2>All Myrtle Beach Tours & Excursions in 2025</h2>
      </div>
      <p>
        Myrtle Beach is a popular vacation destination known for its beautiful
        beaches, golf courses, and family-friendly attractions. With its warm
        weather and sunny skies, Myrtle Beach offers a variety of outdoor
        activities, including water sports, fishing, and hiking. Visitors can
        also enjoy a vibrant nightlife scene, with numerous bars, restaurants,
        and entertainment options. Whether you're looking to relax on the beach,
        play a round of golf, or explore the local attractions, Myrtle Beach has
        something for everyone.
      </p>
      <Card>
        <Card.Header as="h3">Surf Lessons in Myrtle Beach</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Free Cancellation</p>
            <p>2 hour</p>
            <p>from $65</p>
          </Card.Text>
        </Card.Body>
        <img
          src="src/assets/myrtle-beach.jpg"
          alt="Myrtle Beach skyline."
          style={{ width: "500px", height: "300px" }}
        />
        <p></p>
        <Button variant="primary">Check Availabilty</Button>
        <Button variant="secondary">Add to Plan</Button>
      </Card>
      <Card>
        <Card.Header as="h3">Providenciales Grace Bay Golf Cart Tour </Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Free Cancellation</p>
            <p>1 hour</p>
            <p>from $155</p>
          </Card.Text>
        </Card.Body>
        <img
          src="src/assets/golf-course.jpg"
          alt="Golf course."
          style={{ width: "500px", height: "300px" }}
        />
        <p></p>
        <Button variant="primary">Check Availabilty</Button>
        <Button variant="secondary">Add to Plan</Button>
      </Card>
      <Card>
        <Card.Header as="h3">Polynesian Fire Luau and Dinner in Myrtle Beach</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Free Cancellation</p>
            <p>1 hour</p>
            <p>from $25</p>
          </Card.Text>
        </Card.Body>
        <img
          src="src/assets/fireLuau.jpg"
          alt="Family friendly attractions."
          style={{ width: "500px", height: "300px" }}
        />
        <p></p>
        <Button variant="primary">Check Availabilty</Button>
        <Button variant="secondary">Add to Plan</Button>
      </Card>
    </div>
  );
}

export default MyrtleBeachMainPage;
