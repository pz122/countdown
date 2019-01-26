import React, { Component } from 'react';
import './App.css';
import Countdown from './Countdown.js';

class App extends Component {

  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 3 && currentDate.getDate() > 15) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div className="App" >
        <h2 >New Website Coming Soon!</h2>
        <p >For any business enquiries please email at
        <a href="mailto:zeniadesign@hotmail.com"> zeniadesign@hotmail.com</a> </p>
        <div className="Clock">
          <Countdown date={`${year}-03-15T00:00:00`} />

        </div>
      </div>
    )
  }

}

export default App;
