function LosAngelesMainPage() {
  return (
    <>
      <h1>Los Angeles Main Page</h1>
      <p>Welcome to the Los Angeles Main Page!</p>
        <p>"One of the biggest cities in the United States-spanning from the beaches to the amazing trails Los Angeles has a plethora of amazing places to visit on a budget."</p>
        <div class="scrollable-list" id="destinationList">
        <div class="destination" onclick="selectDestination('Los Angeles')">Los Angeles</div>
        <img src="src/assets/runyon-canyon-featured.jpg" alt="Runyon Canyon hiking trail." style="width:500px;height:300px;"/>
        <img src="src/assets/Venice-Beach-in-Los-Angeles.jpg" alt="Venice Beach portraying the waves hitting the white sand with palm trees." style="width:500px;height:300px;"/>
        <img src="src/assets/in-N-out.jpg" alt="In N Out restaurant a cheap burger place only located on the west coast." style="width:500px;height:300px;"/>
    </div>
    </>
  );
}
export default LosAngelesMainPage;