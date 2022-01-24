import React from "react";
import { useParams, Link } from "react-router-dom";
import campusData from "../DummyDATA/campusData.json";
import "../styles/campus.css";

export default function Campus({props}) {

	const {id} = useParams()
	console.log(id)

	const campusInfo = campusData.filter(ele => ele.id == id)
	console.log(campusInfo)

	return(
		<div className="container">
			<h1>Campus</h1>
			<h2> Name: {campusInfo[0].name}</h2>
			<h3> Description: {campusInfo[0].description}</h3>
			
			<h3>To return click me!</h3>		
			 <Link to="/AllCampusView"> <button className="campuses">Campuses</button> </Link> 
			
		</div>
		);
}