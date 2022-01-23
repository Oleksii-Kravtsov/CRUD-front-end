import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

export default function home() {
  return (
    <div className="homeBack">
      <div className="btn-holder" >

     <button className="students-btn">Students</button> 
      <button className="campuses-btn">Campuses</button>
      </div>
    </div>
  );
}