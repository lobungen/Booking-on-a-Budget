function MyrtleBeachMainPage() {
    return (
        <>
        <h1>Myrtle beach Main Page</h1>
        <p>Welcome to the Myrtle beach Main Page!</p>
        <p>"Myrtle Beach is a popular vacation destination known for its beautiful beaches, golf courses, and family-friendly attractions."</p>
        <div class="scrollable-list" id="destinationList">
            <div class="destination" onClick="selectDestination('Myrtle Beach')">Myrtle Beach</div>
            <img src="src/assets/myrtle-beach.jpg" alt="Myrtle Beach skyline." style={{width:"500px",height:"300px"}}/>
            <img src="src/assets/golf-course.jpg" alt="Golf course." style={{width:"500px",height:"300px"}}/>
            <img src="src/assets/family-friendly.jpg" alt="Family friendly attractions." style={{width:"500px",height:"300px"}}/>
            </div>
            </>
        );
    }

export default MyrtleBeachMainPage;

