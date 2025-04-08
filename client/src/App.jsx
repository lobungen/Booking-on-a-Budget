import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './Modal'; // Import the Modal component 

function App() {
  const [count, setCount] = useState(0)
  const [selectedDestination, setSelectedDestination] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const destinations = [
    { name: 'Los Angeles', description: 'One of the biggest cities in the United States-spanning from the beaches to the amazing trails Los Angeles has a plethora of amazing places to visit on a budget.' },
    { name: 'New York City', description: 'The city that never sleeps, New York City is a bustling metropolis with something for everyone. From the iconic Statue of Liberty to the bright lights of Times Square, NYC is a must-visit destination. From high-end to the more affordable, New york City has it for you in food, entertainment, sports and much more.' },
    { name: "Myrtle Beach", description: 'A popular beach destination on the East Coast, Myrtle Beach is known for its beautiful sandy beaches, golf courses, and family-friendly attractions. The natural beauty of this coastal city is one to awe at with their lush hiking trails, public beaches to swim and walk on.' },
    { name: "Orlando", description: 'The center of one of the biggest states in the United States, Orlando has a multitude of attractions to visit. From higher end locations like Disney World and Universal Studios, to affordable restaurants, outlet malls, spring training parks and more, Orlando is a place for anyone to travel to.' },
    { name: "Chicago", description: 'The "windy city" is one of the most popular midwest tourist destinations. From the many sports teams to enjoy, to the original deep dish pizza and chicago dog restaraunts, and beautiful architecture and sights along the river, Chicago is a one-of-a-kind place that can be perfect for anyone.' },
    { name: "Las vegas", description: 'A destination that is sought after by many, Las Vegas has many different avenues for anyone to enjoy. The casinos range from the small-stakes experiences to the high-roller tables. Restaraunts and food trucks galore, plus wonderful hiking trails, it might be harder to do nothing while in Las Vegas.' },
    ];

  const selectDestination = (destination) => {
    setSelectedDestination(destination);
    setIsModalOpen(true); // Open the modal when a destination is selected
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDestination(null); // Clear the selected destination when closing the modal
  };

  return (
    <>
    <h1>Destination Picker</h1>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      {/* Destination Picker Section */}
        <h2>Pick a Place to Visit</h2>
        <div className="scrollable-list">
          {destinations.map((destination, index) => (
            <div 
              key={index} 
              className="destination" 
              onClick={() => selectDestination(destination)}
          >
            {destination.name}
          </div>
        ))}
      </div>

      {/* Modal Component */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        destination={selectedDestination}
      />
        <div id="selectedDestination">
        {selectedDestination && `You selected: ${selectedDestination}`}
      </div>
    </>
  );
}

export default App
