/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Header.css";
import React, { useState } from "react";
import imgNav from "../Img/nav-icon/img.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleSetActive = () => {
    setActive(!active);
  };
  const handleClose = () => {
    setActive(false);
  };

  return (
    <>
      <header className="d-flex align-items-center justify-content-center header text-center ">
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary car">
        <div className="container-fluid ">
          <Link className="navbar-brand" to={"/"}>
            <img src={imgNav} alt="Logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleSetActive}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div
            className={`collapse navbar-collapse ${active ? "show car" : ""}`}
            id="navbarNav"
            style={{ justifyContent: "end", paddingRight: "1rem" }}
          >
            {active && (
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  zIndex: "1000",
                }}
              ></button>
            )}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className={`nav-link `}
                  aria-current="page"
                  href="#"
                  // Toggle active state on link click
                >
                  Find Doctors
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/apoinment"}>
                  Hospitals
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Medicines
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Surgeries
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Software for Provider
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Facilities
                </a>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-primary"
                  href="/booking"
                  style={{
                    backgroundColor: "rgba(42, 168, 255, 1)",
                    border: "none",
                  }}
                >
                  <Link
                    to="/booking"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    My Bookings
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
