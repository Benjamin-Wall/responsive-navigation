import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <nav className="navbar">
        <a className="nav-logo" href="#">Benwall.dev</a>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
        </ul>

        <div onClick={handleClick} className={`hamburger ${isOpen ? "active" : ""}`}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default App;
