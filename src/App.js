import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "App">
          <h1 className = "title"> Jason Cabrera</h1>
           <h2 className = "below-title"> Sophomore at University of California, San Diego: B.S Mathematics - Computer Science </h2>
           <img className = "front-logo" src = "https://cdn.dribbble.com/users/109649/screenshots/954354/lightningbolt.png" />
           <h1 className = "next-picture"> About Me</h1>
           <h2 className = "description"> Hello I'm Jason and welcome to my website! Im a programmer, sports enthusiast, and nature lover currently living in Baldwin Park, California. On my free time 
           I tackle LeetCode challenges and look for more ways to gain programming experience. I find a lot of joy in full stack development and I'm always up for new challenges in coding and in life. My other hobbies consist
           of spending time with friends and family, playing soccer, and watching tv shows. </h2>
        <h2 className = "description">
        "You can't cross the sea merely by standing and staring at the water." - Rabindranath Tagore 
        </h2>

      </div>

    );
  }
}

export default App;
