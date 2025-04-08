import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Booking on a Budget</h1>

    <button class="openModal" data-destination="Los Angeles">Los Angeles</button>
    <button class="openModal" data-destination="New York City">New York City</button>
    <button class="openModal" data-destination="Myrtle Beach">Myrtle Beach</button>
    <button class="openModal" data-destination="Orlando">Orlando</button>
    <button class="openModal" data-destination="Chicago">Chicago</button>
    <button class="openModal" data-destination="Las Vegas">Las Vegas</button>

    <p>Many of us have dream vacations that we want to save money for, or are already planning for. 
      However, the task of planning a trip in itself can be quite the Herculean feat. Specifically 
      for those in their 20's and 30's who may have never been on a vacation without their parents. 
      This site helps navigate the excursion side of these dream vacations. Many can find a hotel or 
      a flight that is affordable for them, but what happens when they arrive at their destination. 
      That is where we step in helping anyone find activites and/or landmarks to explore. With a few 
      clicks any person can visualize their dream vacation with less worry. That is booking on a Budget.</p>

    <App />
  </StrictMode>,
)
