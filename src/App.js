import React from 'react';
import './style.css';
// import { Greet } from './Components/Greet';
import {ClickHandler} from './Components/ClickHandler'
export default function App() {
  return (
    <div className="App">
      {/* {
      <Greet name="React" company="Atos-Pune"/>
      <Greet name="Angular" company="Atos-Banglore">
      <button>Click Me</button>
      </Greet>
      <Greet name="View" company="Atos-Chennai">Do Your Job Properly & get paid</Greet>

} */ <ClickHandler/>}

    </div>
  );
}
