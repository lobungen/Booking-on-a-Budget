function LasVegasMainPage() {
    return (
        <>
        <h1>Las Vegas Main Page</h1>
        <p>Welcome to the Las Vegas Main Page!</p>
        <p>"Las Vegas, known for its vibrant nightlife, casinos, and entertainment, is a city that never sleeps."</p>
        <div class="scrollable-list" id="destinationList">
            <div class="destination" onclick="selectDestination('Las Vegas')">Las Vegas</div>
            <img src="src/assets/las-vegas.jpg" alt="Las Vegas skyline." style="width:500px;height:300px;"/>
            <img src="src/assets/casino.jpg" alt="Casino." style="width:500px;height:300px;"/>
            <img src="src/assets/entertainment.jpg" alt="Entertainment." style="width:500px;height:300px;"/>
        </div>
        </>
    );
}

export default LasVegasMainPage;
    