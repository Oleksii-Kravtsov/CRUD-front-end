import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../DummyDATA/data.json"
import AllStudentsView from "./AllStudentsView";

export default function Students({props}) {

	//let params = useParams()
	const {id} = useParams()
	console.log(id)

	const [stu, setStud] = useState({});

	// const studentInfo = data.filter(ele => ele.id == id);
	// console.log(studentInfo)

	useEffect(() => {
		
		const fetchStudents = () => {
		  fetch (`https://back-end-ttp.herokuapp.com/students/${id}`)
			.then(res =>{
			   return res.json()})
			.then(data => {
			  //console.log(data)
			  setStud(data[0]);
			})
			
		}	

		 return fetchStudents()

		},[])

	return(
		<div>
			<div> This is my student info</div>
			<h3>FirstName: {stu.firstName} </h3>
			<h3>LastName: {stu.lastName}</h3>
		</div>
		);
}