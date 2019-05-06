import React from 'react';
import logo from './logo.svg';
import './style.css';

function Header(){
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}

export default Header;