function OrlandoMainPage() {
    return (
        <>
        <h1>Orlando Main Page</h1>
        <p>Welcome to the Orlando Main Page!</p>
        <p>"Orlando, known for its theme parks and warm weather, offers a variety of attractions and activities for visitors of all ages."</p>
        <div class="scrollable-list" id="destinationList">
            <div class="destination" onClick="selectDestination('Orlando')">Orlando</div>
            <img src="src/assets/orlando.jpg" alt="Orlando skyline." style={{width:"500px",height:"300px"}}/>
            <img src="src/assets/universal-studios.jpg" alt="Universal Studios." style={{width:"500px",height:"300px"}}/>
            <img src="src/assets/disney-world.jpg" alt="Disney World." style={{width:"500px",height:"300px"}}/>
        </div>
        </>
    );
}

export default OrlandoMainPage;