import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/app.css"

//importing components here
import Navbar from "./Components/Navbar";
import Home from "./Components/home";
import Campus from "./Components/Campus";
import Students from "./Components/Students";


function App() {

  const [students, setStudents] = useState([]);
  const [campuses, setCampuses] = useState([]);
    
    useEffect(() => {
    const fetchStudents = () => {
      fetch (enter the url here to get from the database)
        .then(res =>
           res.json())
        .then(data => {
          setStudents(data.data);
        })
      }
    const fetchCampuses = () => {
      fetch (enter the url here to get from the database)
        .then(res =>
           res.json())
        .then(data => {
          setCampuses(data.data);
        })
      }
      fetchStudent();
      fetchCampuses();
    },[]);











  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path= "/" element={<Home />}/> 
        <Route path= "/Campus" element={<Campus />}/>
        <Route path= "/Students" element={<Students />}/>
      </Routes>
    </div>
  );
}

export default App;
