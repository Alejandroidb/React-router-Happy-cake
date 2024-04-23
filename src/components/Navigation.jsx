import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-danger">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                <img src="home.ico" alt="" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contacto"
                className="nav-link active text-light"
                href="#"
              >
                {" "}
                <img src="phonebook.ico" alt="" />
                contacto
              </Link>
            </li>
          </ul>

          <Link to="/home" className="navbar-brand text-light ms-auto" href="#">
            Happy Cake
          </Link>
          <img src="cake.png" className="logo" alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
