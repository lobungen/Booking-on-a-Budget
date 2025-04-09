function ChicagoMainPage() {
    return (
        <>
        <h1>Chicago Main Page</h1>
        <p>Welcome to the Chicago Main Page!</p>
        <p>"The windy city is one of the most popular midwest tourist destinations. From the many sports teams to enjoy, to the original deep dish pizza and chicago dog restaraunts, and beautiful architecture and sights along the river, Chicago is a one-of-a-kind place that can be perfect for anyone."</p>
        <div class="scrollable-list" id="destinationList">
            <div class="destination" onclick="selectDestination('Chicago')">Chicago</div>
            <img src="src/assets/chicago.jpg" alt="Chicago skyline." style="width:500px;height:300px;"/>
            <img src="src/assets/deep-dish-pizza.jpg" alt="Deep dish pizza." style="width:500px;height:300px;"/>
            <img src="src/assets/chicago-dog.jpg" alt="Chicago dog." style="width:500px;height:300px;"/>

            </div>
        </>
    );
}

export default ChicagoMainPage;
