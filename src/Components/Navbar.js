import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid navbarbg">
          <div className="brandahead"></div>
          <a className="navbar-brand colorWhite" href="#">
            Medical Darpan
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse linkwhite"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav navmiddlemargin mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link colorWhite" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link colorWhite" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link colorWhite" to="/distributors">
                  Distributors
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link colorWhite" to="/manufactures">
                  Manufactors
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link colorWhite" to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link colorWhite" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="loginuser">
            <button className="loginbutton">Login</button>
            <div>
              <span>
                <i className="fa-regular fa-circle-user user"></i>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
