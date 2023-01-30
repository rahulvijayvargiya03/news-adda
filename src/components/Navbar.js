import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class Navbar extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
        <a className="nav-link" href="/"> <span className="sr-only"><b>NewsAdda</b></span></a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auhref">
        <li className="nav-item active">
          <a className="nav-link" href="/"> <span className="sr-only">Home</span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/Business"> <span className="sr-only">Business</span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/Entertainment"> <span className="sr-only">Entertainment</span></a>
        </li>
        
        <li className="nav-item active">
          <a className="nav-link" href="/Health"> <span className="sr-only">Health</span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/Science"> <span className="sr-only">Science</span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/Sports"> <span className="sr-only">Sports</span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/Technology"> <span className="sr-only">Technology</span></a>
        </li>
   
    </ul>
  
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
