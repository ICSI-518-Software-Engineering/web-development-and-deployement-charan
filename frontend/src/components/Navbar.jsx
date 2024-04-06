import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <nav
      className="navbar bg-dark navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand">
          <span className="badge bg-light text-dark">MyApp</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div>
          <div className="navbar-nav">
            <a className="nav-link" href="/profile">
              Profile
            </a>
            <a className="nav-link" href="/calculator">
              Calculator
            </a>
            <a className="nav-link" href="/data-fetching">
              API
            </a>
            <a className="nav-link" href="/inventory-app">
              InventoryApp
            </a>
            <a className="nav-link" href="/loginuser">
              loginuserDetails
            </a>
          </div>
        </div>
        <div className="flex gap-4">
          {user ? (
            <button
              onClick={handleLogout}
              className="btn badge bg-light text-dark"
            >
              logout
            </button>
          ) : (
            <button className="btn badge bg-light text-dark">
              <a href="/login">Login</a>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
