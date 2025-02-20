import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="hero-title">
          Professional Services <br />
          <span className="text-primary">At Your Doorstep</span>
        </h1>
        <p className="hero-description">
          Find trusted professionals for all your home services. Book appointments easily and get the job done right.
        </p>
        <div className="search-bar">
          <input type="text" className="search-input" placeholder="What service do you need?" />
          <button className="search-button">Search</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
