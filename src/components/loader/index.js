import React from 'react';
import logo from './logo.svg';
import './style.css';

function Loader(){
  return (
    <div className="loader-wrp">
      <img src={logo} className="loader-logo" alt="logo" />
    </div>
  );
}

export default Loader;