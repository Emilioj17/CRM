import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand mb-1 h1">
            <img
              src="#"
              width="70"
              height="auto"
              className="d-inline-block align-top"
              alt=""
            />


          </span>
        <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/log-in" className="nav-link active">Somewhere</Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-up" className="nav-link active">Somewhere</Link>
          </li>
          <li className="nav-item">
            <Link to="/remind" className="nav-link active">Somwhere</Link>
          </li>      
        </ul>
        </div>

      </nav>
    </>
  );
}

export default Navbar;