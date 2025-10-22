import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>DEV@Deakin</h1>
      <div className="search-container">
        <input type="text" placeholder="Search ..." className="search-input" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Articles</a></li>
        <li><a href="#">Tutorials</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </header>
  );
}

export default Header;