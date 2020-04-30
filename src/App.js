import React, { Component } from 'react';
// import logo from './logo.svg';
import Basic from './Basic';
import './App.css';
import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';
import Certification from './Certification';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component
{
  render()
  {
    return(
      <div className="frst">
        <div className="bsc"><Basic></Basic></div>
        <div className="sk"><Skills></Skills></div>
        <div><Experience></Experience></div>
        <div className="ed"><Education></Education></div>
        <div className="crt"><Certification></Certification></div>
      </div>
    );
  }
}

export default App;
