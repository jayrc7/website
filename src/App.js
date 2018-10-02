import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
class App extends Component {
  render() {
    return (
      <div className = "App">
          <h1 className = "title"> Jason Cabrera</h1>
           <h2 className = "below-title"> Sophomore at University of California, San Diego: B.S Mathematics - Computer Science </h2>
           <img className = "front-logo" src = "https://cdn.dribbble.com/users/109649/screenshots/954354/lightningbolt.png" />
           <h1 className = "next-picture"> About Me</h1>
           <h2 className = "description"> Hello I'm Jason and welcome to my website! Im a programmer, sports enthusiast, and nature lover currently living in Baldwin Park, California. On my free time 
           I spend time with friends and family, play soccer, watch tv shows, and look for more ways to gain programming experience. I find a lot of joy in full stack development and I'm always up for new challenges in coding and in life. </h2>
            
           <div className = "contain">
           <div className = "for-nav">
               <a href = "mailto:jrcabrer@ucsd.edu" title = "Email"target = "_blank"><img className = "email" src = "https://ubisafe.org/images/email-vector.png" /> </a>
                <a href= "https://github.com/jayrc7" target = "_blank" title = "GitHub"><img className = "git"src="https://4.bp.blogspot.com/--omgjr2n6eg/WyN-i8kG6PI/AAAAAAAASGc/4rW8yeCYWPogpTdE9Y50ry2vcFy_l4rjQCLcBGAs/s320/github.jpg"/></a>
                <a href = "https://www.linkedin.com/in/jason-cabrera-b45522167/" target = "_blank" title = "LinkedIn"> <img className = "linked" src = "https://2.bp.blogspot.com/-RDbj7QYLEog/WyODFhyIcBI/AAAAAAAASGo/Q3UFQ8u-RlQhhOkY8843Z6i1Xks1ywU8gCLcBGAs/s320/linkedin.png" /> </a>

                 <a href = "https://docs.google.com/document/d/1QS9l3O1V1auV03aBINOeANODck8z9lPR6S0G3Mwr2_M/edit?usp=sharing" target = "_blank" title = "Resume"> <img className = "resume" src = "https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Menu2-2-512.png" /> </a>

         </div>

          <div className = "for-mobile">
                               <a href = "mailto:jrcabrer@ucsd.edu" title = "Email"target = "_blank"><img className = "email" src = "https://ubisafe.org/images/email-vector.png" /> </a>
                <a href= "https://github.com/jayrc7" target = "_blank" title = "GitHub"><img className = "git"src="https://4.bp.blogspot.com/--omgjr2n6eg/WyN-i8kG6PI/AAAAAAAASGc/4rW8yeCYWPogpTdE9Y50ry2vcFy_l4rjQCLcBGAs/s320/github.jpg"/></a>
                <a href = "https://www.linkedin.com/in/jason-cabrera-b45522167/" target = "_blank" title = "LinkedIn"> <img className = "linked" src = "https://2.bp.blogspot.com/-RDbj7QYLEog/WyODFhyIcBI/AAAAAAAASGo/Q3UFQ8u-RlQhhOkY8843Z6i1Xks1ywU8gCLcBGAs/s320/linkedin.png" /> </a>

                 <a href = "https://docs.google.com/document/d/1QS9l3O1V1auV03aBINOeANODck8z9lPR6S0G3Mwr2_M/edit?usp=sharing" target = "_blank" title = "Resume"> <img className = "resume" src = "https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Menu2-2-512.png" /> </a>
           </div>


           </div> 


      </div>

    );
  }
}

export default App;
