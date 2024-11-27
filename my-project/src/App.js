import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const toggleNavbar = () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");
  };

  return (
    <div className="App">
      <header>
        <div className="logo">Clothing</div>
        <div className="hamburger" onClick={toggleNavbar}>&#9776;</div>
      </header>

      <div className="main-holder">
        <div className="navbar" id="navbar">
          <h2>MENU</h2>
          <dl>
            <dt>New Arrivals</dt>
            <dd>- Women</dd>
            <dd>- Men</dd>
            <dd>- Kids</dd>

            <dt>Men’s Clothing</dt>
            <dd>- Tops</dd>
            <dd>- Bottoms</dd>
            <dd>- Outerwear</dd>
            <dd>- Activewear</dd>
            <dd>- Accessories</dd>

            <dt>Women’s Clothing</dt>
            <dd>- Tops</dd>
            <dd>- Bottoms</dd>
            <dd>- Dresses</dd>
            <dd>- Outerwear</dd>
            <dd>- Activewear</dd>
            <dd>- Accessories</dd>

            <dt>Kids’ Clothing</dt>
            <dd>- Boys</dd>
            <dd>- Girls</dd>
            <dd>- Baby</dd>
            <dd>- Accessories</dd>
          </dl>
        </div>

        <div className="grid-container">
          <div className="grid-item1"><img src="./image/2149154654.jpg" alt="item1" /></div>
          <div className="grid-item2"><img src="./image/29270.jpg" alt="item2" /></div>
          <div className="grid-item3"><img src="./image/4091.jpg" alt="item3" /></div>
          <div className="grid-item4"><img src="./image/2148884321.jpg" alt="item4" /></div>
          <div className="grid-item5"><img src="./image/2148884342.jpg" alt="item5" /></div>
          <div className="grid-item6"><img src="./image/2150204454.jpg" alt="item6" /></div>
          <div className="grid-item7"><img src="./image/2150932937.jpg" alt="item7" /></div>
          <div className="grid-item8"><img src="./image/2151428234.jpg" alt="item8" /></div>
          <div className="grid-item9"><img src="./image/2148221951.jpg" alt="item9" /></div>
          <div className="grid-item10"><img src="./image/medium-shot-man-with-braids-portrait.jpg" alt="item10" /></div>
        </div>
      </div>

      <footer className="footer-container">
        <div className="footer-left logo">Clothing</div>
        <div className="footer-right">
          <dl>
            <dt>about us</dt>
            <hr />
            <dd>Location</dd>
            <dd>Head office</dd>
            <dd>ABCD Clothing Co.</dd>
          </dl>
        </div>
      </footer>
    </div>
  );
}


export default App;
