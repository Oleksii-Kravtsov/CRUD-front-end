import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link className="home" to="/Home">
        Home
      </Link>
      <Link className="Allcampus" to="/AllCampusView">
        Campuses
      </Link>
      <Link className="Allstudents" to="/AllStudentsView">
        Students
      </Link>
    </nav>
  );
}
