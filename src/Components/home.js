import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

export default function home() {
  return (
    <div className="homecontainer">
      
      <h1> Welcome! Click below to see the campuses, or to see the students and their information </h1>
     <Link to="/AllStudentsView"> <button className="students"> Students </button> </Link>
     <Link to="/AllCampusView"> <button className="campuses">Campuses</button> </Link>
      <h3> Here you will be able to do a variety of things, you will find out as soon as you click one of the buttons! <br/>
      or simply click on the navigation bar!
      </h3>
    </div>
  );
}
