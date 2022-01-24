import React, { useState, useEffect } from "react";
import SingleStudent from "./SingleStudent";
import {Navigate, useNavigate} from "react-router-dom";
import data from "../DummyDATA/data.json"
import axios from "react"
import "../styles/students.css";


export default function AllStudentsView() {

	const [students, setStudents] = useState([]);
	// const dummyStudents = [
	// 	{id: 1, names: "Joe" , age: 14},
	// 	{id: 2, names:"Jack" , age: 14},
	// 	{id: 3, names: "Issa" , age: 15},
	// 	{id: 4, names: "Tan" , age: 17}
	//   ]
	  useEffect(() => {

		// const options = {
		// 	method: 'GET',
		// 	headers: {
		// 	'Content-Type': 'application/json',
		// 	}
		// }
		
		const fetchStudents = () => {
		  fetch ("https://back-end-ttp.herokuapp.com/students/")
			.then(res =>{
			   return res.json()})
			.then(data => {
			  //console.log(data)
			  setStudents(data)
			})
			
		}	

		 return fetchStudents()

		},[])
		
		console.log(students)

		const navigate = useNavigate()
	return(
		<div >
		<div className="StudentContainer">
		<h1>Here are all the Students!</h1>
		
		    <button className="addStudents" onClick= {() => navigate('/StudentForm')}> Add Student</button> 
		    </div>
		    <div className="displayStudents">

			{
			students && students.map(singleStudent => <SingleStudent key={singleStudent.id}  props={singleStudent} />)
			}
			
		</div>
		</div>
	 		
		);
}