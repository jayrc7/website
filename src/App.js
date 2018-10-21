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
           <h2 className = "description"> Hello I'm Jason and I'm a programmer, sports enthusiast, and nature lover currently living in Baldwin Park, California. I spend my free time playing soccer, watching tv shows, and looking for more ways to gain programming experience. I'm always up for new challenges and I find a lot of joy in full stack development. </h2>
            
           <div className = "contain">
           <div className = "for-nav">
             <table>
          <tr>
                <th>
                               <a href = "mailto:jrcabrer@ucsd.edu" title = "Email"target = "_blank"><img className = "email" src = "https://ubisafe.org/images/email-vector.png" /> </a>
                </th>

                <th>
                <a href= "https://github.com/jayrc7" target = "_blank" title = "GitHub"><img className = "git"src="https://4.bp.blogspot.com/--omgjr2n6eg/WyN-i8kG6PI/AAAAAAAASGc/4rW8yeCYWPogpTdE9Y50ry2vcFy_l4rjQCLcBGAs/s320/github.jpg"/></a>
                </th>
                <a href = "https://www.linkedin.com/in/jason-cabrera-b45522167/" target = "_blank" title = "LinkedIn"> <img className = "linked" src = "https://2.bp.blogspot.com/-RDbj7QYLEog/WyODFhyIcBI/AAAAAAAASGo/Q3UFQ8u-RlQhhOkY8843Z6i1Xks1ywU8gCLcBGAs/s320/linkedin.png" /> </a>
                <th>
                 <a href = "https://docs.google.com/document/d/1QS9l3O1V1auV03aBINOeANODck8z9lPR6S0G3Mwr2_M/edit?usp=sharing" target = "_blank" title = "Resume"> <img className = "resume" src = "https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Menu2-2-512.png" /> </a>
                 </th>
           </tr>
           </table>

         </div>

          <div className = "for-mobile">
          <table>
          <tr>
                <th>
                               <a href = "mailto:jrcabrer@ucsd.edu" title = "Email"target = "_blank"><img className = "email" src = "https://ubisafe.org/images/email-vector.png" /> </a>
                </th>

                <th>
                <a href= "https://github.com/jayrc7" target = "_blank" title = "GitHub"><img className = "git"src="https://4.bp.blogspot.com/--omgjr2n6eg/WyN-i8kG6PI/AAAAAAAASGc/4rW8yeCYWPogpTdE9Y50ry2vcFy_l4rjQCLcBGAs/s320/github.jpg"/></a>
                </th>
                <a href = "https://www.linkedin.com/in/jason-cabrera-b45522167/" target = "_blank" title = "LinkedIn"> <img className = "linked" src = "https://2.bp.blogspot.com/-RDbj7QYLEog/WyODFhyIcBI/AAAAAAAASGo/Q3UFQ8u-RlQhhOkY8843Z6i1Xks1ywU8gCLcBGAs/s320/linkedin.png" /> </a>
                <th>
                 <a href = "https://docs.google.com/document/d/1QS9l3O1V1auV03aBINOeANODck8z9lPR6S0G3Mwr2_M/edit?usp=sharing" target = "_blank" title = "Resume"> <img className = "resume" src = "https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Menu2-2-512.png" /> </a>
                 </th>
           </tr>
           </table>

           </div>
            

           </div>

           <br />


      </div>

    );
  }
}

export default App;
