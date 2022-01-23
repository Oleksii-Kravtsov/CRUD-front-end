import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link className="home" to="/">
        Home
      </Link>
      <Link className="campus" to="/Campus">
        Campuses
      </Link>
      <Link className="student" to="/Students">
        Students
      </Link>
    </nav>
  );
}
