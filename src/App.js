import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/app.css"

//importing components here
import Navbar from "./Components/Navbar";
import Home from "./Components/home";
import AllCampusView from "./Components/AllCampusView";
import AllStudentsView from "./Components/AllStudentsView";
import StudentForm from "./Components/StudentForm";
import CampusForm from "./Components/CampusForm";
import SingleStudent from "./Components/SingleStudent";
import Students from "./Components/Students"
import Campus from "./Components/Campus"
import data from "./DummyDATA/data.json"

function App() {
  

  const [students, setStudents] = useState([]);
  const [campuses, setCampuses] = useState([]);
    
    useEffect(() => {
    const fetchStudents = () => {
      fetch ("enter the url here to get from the database")
        .then(res =>
           res.json())
        .then(data => {
          setStudents(data.data);
        })
      }
    const fetchCampuses = () => {
      fetch ("enter the url here to get from the database")
        .then(res =>
           res.json())
        .then(data => {
          setCampuses(data.data);
        })
      }
      fetchStudents();
      fetchCampuses();
    },[]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path= "/Home" element={<Home />}/> 
        <Route path= "/AllCampusView" element={<AllCampusView />}/>
        <Route path= "/StudentForm"  element={<StudentForm/>} />
        <Route path= "/AllStudentsView" element={<AllStudentsView />}/>
        <Route path= "/SingleStudent" element={<SingleStudent />}/>
        <Route path= "/CampusForm"  element={<CampusForm/>} />
        <Route path= "/Student/:id"  element={<Students />} />
        <Route path= "/Campus/:id"  element={<Campus/>} />

      </Routes>
    </div>
  );
}

export default App;
