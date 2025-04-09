function NewYorkCityMainPage() {
return (
    <>
    <h1>New York City Main Page</h1>
    <p>Welcome to the New York City Main Page!</p>
    <p>"The city that never sleeps, New York City is a bustling metropolis with iconic landmarks and diverse neighborhoods."</p>
    <div class="scrollable-list" id="destinationList">
        <div class="destination" onClick="selectDestination('New York City')">New York City</div>
        <img src="src/assets/new-york-city.jpg" alt="New York City skyline." style={{width:"500px",height:"300px"}}/>
        <img src="src/assets/statue-of-liberty.jpg" alt="Statue of Liberty." style={{width:"500px",height:"300px"}}/>
        <img src="src/assets/times-square.jpg" alt="Times Square at night." style={{width:"500px",height:"300px"}}/>

        </div>
        </>
);
}
export default NewYorkCityMainPage