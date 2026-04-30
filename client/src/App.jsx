import { useState } from 'react'
import './App.css'

const [planeInfo, setPlaneInfo] = useState({
  planetype: "",
  location: "",
  date: "",
});

function Input() {
  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            name="planetype"
            placeholder="Plane type"
            value={planeInfo.planetype}
          />
        </div>
        <div>
          <input
            type="location"
            name="location"
            placeholder="Location"
            value={planeInfo.location}
          />
        </div>
        <div>
          <input
            type="date"
            name="date"
            placeholder="Date spotted"
            value={planeInfo.date}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
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