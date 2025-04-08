import { useState } from 'react'
//import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import DestinationPage from './DestinationPage'; // Import the DestinationPage component
import { Outlet } from 'react-router-dom';

function App() {
const [count, setCount] = useState(0); // Add state for count
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedDestination, setSelectedDestination] = useState(null);
  
  const destinations = [
    { name: 'Los Angeles', description: 'One of the biggest cities in the United States-spanning from the beaches to the amazing trails Los Angeles has a plethora of amazing places to visit on a budget.' },
    { name: 'New York City', description: 'The city that never sleeps, New York City is a bustling metropolis with something for everyone. From the iconic Statue of Liberty to the bright lights of Times Square, NYC is a must-visit destination. From high-end to the more affordable, New york City has it for you in food, entertainment, sports and much more.' },
    { name: "Myrtle Beach", description: 'A popular beach destination on the East Coast, Myrtle Beach is known for its beautiful sandy beaches, golf courses, and family-friendly attractions. The natural beauty of this coastal city is one to awe at with their lush hiking trails, public beaches to swim and walk on.' },
    { name: "Orlando", description: 'The center of one of the biggest states in the United States, Orlando has a multitude of attractions to visit. From higher end locations like Disney World and Universal Studios, to affordable restaurants, outlet malls, spring training parks and more, Orlando is a place for anyone to travel to.' },
    { name: "Chicago", description: 'The "windy city" is one of the most popular midwest tourist destinations. From the many sports teams to enjoy, to the original deep dish pizza and chicago dog restaraunts, and beautiful architecture and sights along the river, Chicago is a one-of-a-kind place that can be perfect for anyone.' },
    { name: "Las vegas", description: 'A destination that is sought after by many, Las Vegas has many different avenues for anyone to enjoy. The casinos range from the small-stakes experiences to the high-roller tables. Restaraunts and food trucks galore, plus wonderful hiking trails, it might be harder to do nothing while in Las Vegas.' },
    ];

  return (
    <div>
    <h1> Booking on a Budget </h1>
    < Outlet />
    </div>
    // <Router>
    // <h1>Destination Picker</h1>
    // <h2>Pick a Place to Visit</h2>
    // <div className="scrollable-list">
    //   {destinations.map((destination, index) => (
    //     <Link to={`/destination/${index}`} key={index} className="destination">
    //       {destination.name}
    //     </Link>
    //   ))}
    // </div>

    // {/*} React Router v6 uses Routes instead of Switch */}  
    //   <Routes>
    //     {destinations.map((destination, index) => (
    //       <Route
    //         key={index}
    //         path={`/destination/${index}`}
    //         element={<DestinationPage destination={destination} />}
    //         />
    //     ))}
    //   </Routes>

    //   <div className="card">
    //       <button onClick={() => setCount(count + 1)}>
    //         count is {count}
    //       </button>
    //       <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    //     </div>

    //     {/*Uncomment to show the Vite and React logos */}
    //     <div>
    //       <a href="https://vite.dev" target="_blank">
    //         <img src={viteLogo} className="logo" alt="Vite logo" />
    //       </a>
    //       <a href="https://react.dev" target="_blank">
    //         <img src={reactLogo} className="logo react" alt="React logo" />
    //       </a>
    //     </div>
    // </Router>
  );
}

export default App;