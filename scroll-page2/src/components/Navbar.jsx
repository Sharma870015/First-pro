import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='main-h'>
      <nav className='first-h'>
        <h1>On-demand <br></br>UX/UI design<br></br>that works.</h1>
      </nav>
      <div className='sub-h'>
        <p className='para'>design as a subscription</p>
        <h5 className='second-h'>A design subscription with unlimited requests.</h5>
        <button className='h-btn' style={{fontSize:19}}>Get started</button>
      </div>
    </div>
  );
}

export default Navbar;
