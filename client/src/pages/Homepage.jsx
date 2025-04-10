// import Card from "react-bootstrap/Card";

function HomePage() {
  return (
    <div>
      <main>
        <p></p>
        <img
          src=".\src\assets\oia-santorini-greece-cr-alamy.jpg"
          style={{ width: "500px", height: "300px" }}
        />
        <p></p>
        Many of us have dream vacations that we want to save money for, or are
        already planning for. However, the task of planning a trip in itself can
        be quite the Herculean feat. Specifically for those in their 20's and
        30's who may have never been on a vacation without their parents. This
        site helps navigate the excursion side of these dream vacations. Many
        can find a hotel or a flight that is affordable for them, but what
        happens when they arrive at their destination. That is where we step in
        helping anyone find activites and/or landmarks to explore. With a few
        clicks any person can visualize their dream vacation with less worry.
        That is booking on a Budget.
        <p></p>
        <h2>Top Attractions</h2>
        <nav>
          <button class="openModal" data-destination="Los Angeles">
            <a href="/LosAngelesMainPage">Los Angeles</a>
          </button>
          <button class="openModal" data-destination="New York City">
            <a href="/NewYorkCityMainPage">New York City</a>
          </button>
          <button class="openModal" data-destination="Myrtle Beach">
            <a href="MyrtleBeachMainPage">Myrtle Beach</a>
          </button>
          <button class="openModal" data-destination="Orlando">
            <a href="OrlandoMainPage">Orlando</a>
          </button>
          <button class="openModal" data-destination="Chicago">
            <a href="ChicagoMainPage">Chicago</a>
          </button>
          <button class="openModal" data-destination="Las Vegas">
            <a href="LasVegasMainPage">Las Vegas</a>
          </button>
        </nav>
        <p></p>
        <h2>Pick a Place to Visit</h2>
        <p></p>
        {/* <Card>
          <Card.Header as="h3">Hawaii</Card.Header>
          <Card.Body></Card.Body> */}
          <img
            src=".\src\assets\beautiful.jpg"
            style={{ width: "166px", height: "100px" }}
          />
        {/* </Card>
        <Card>
          <Card.Header as="h3">Bruges</Card.Header>
          <Card.Body></Card.Body> */}
          <img
            src=".\src\assets\most-beautiful-cities-bruges-cr-alamy.jpg"
            style={{ width: "166px", height: "100px" }}
          />
        {/* </Card>
        <Card>
          <Card.Header as="h3">India</Card.Header>
          <Card.Body></Card.Body> */}
          <img
            src=".\src\assets\India-Famous-Tourist-Places-Tajmahal.jpg"
            style={{ width: "166px", height: "100px" }}
          />
        {/* </Card> */}
        <p></p>
      </main>
    </div>
  );
}
export default HomePage;
