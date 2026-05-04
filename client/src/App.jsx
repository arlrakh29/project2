import { useState } from 'react'
import './App.css'

function Input() {
  const [planeInfo, setPlaneInfo] = useState({
    planetype: "",
    location: "",
    date: "",
  });

  const [spots, setSpots] = useState([]);

  const handleChange = (event) => {
    setPlaneInfo({ 
      ...planeInfo,   
      [event.target.name]:event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSpots(prev => [...prev, planeInfo]);
    console.log(planeInfo);
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="planetype"
            placeholder="Plane type"
            value={planeInfo.planetype}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={planeInfo.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="date"
            name="date"
            placeholder="Date spotted"
            value={planeInfo.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
      <ul>
        {spots.map((spot, index) => (
          <li key={index}>
            {spot.planetype} — {spot.location} — {spot.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>AIRPLANE SPOTTING TRACKER</h1>
      <Input />
    </>
  )
}

export default App;