import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../DummyDATA/data.json"
import AllStudentsView from "./AllStudentsView";

export default function Students({props}) {

	//let params = useParams()
	const {id} = useParams()
	console.log(id)

	const studentInfo = data.filter(ele => ele.id == id);
	console.log(studentInfo)

	return(
		<div>
			<div> This is the student info</div>
			<h3>Name: {studentInfo[0].names} </h3>
			<h3>Age: {studentInfo[0].age}</h3>
		</div>
		);
}