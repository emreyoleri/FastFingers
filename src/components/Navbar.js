import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav
        cla
        className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3 mb-3"
      >
        <div className="container-fluid">
          <NavLink exact className="navbar-brand" to="/">
            Yazı Test
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink exact className="nav-link" to="/">
                Ana sayfa
              </NavLink>
              <NavLink exact className="nav-link" to="/results">
                Sonuçlarım
              </NavLink>
              <NavLink exact className="nav-link" to="/challenges">
                Metinler
              </NavLink>
            </div>
          </div>
        </div>
      </nav>{" "}
    </div>
  );
};

export default Navbar;
