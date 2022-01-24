
import React, { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import campusData from "../DummyDATA/campusData.json";
import "../styles/campus.css";

export default function Campus({props}) {

	const [camp, setCamp] = useState({});

	const {id} = useParams()
	console.log(id)

	// const campusInfo = campusData.filter(ele => ele.id == id)
	// console.log(campusInfo)

	useEffect(() => {
		
		const fetchCampuses = () => {
		  fetch (`https://back-end-ttp.herokuapp.com/campuses/${id}`)
			.then(res =>{
			   return res.json()})
			.then(data => {
			  console.log(data[0])
			  setCamp(data[0]);
			})
			
		}	

		 return fetchCampuses()

		},[])

	return(
		<div className="container">
			<h1>Campus</h1>
			<h2> Name: {campusInfo[0].name}</h2>
			<h3> Description: {campusInfo[0].description}</h3>
			
			<h3>To return click me!</h3>		
			 <Link to="/AllCampusView"> <button className="campuses">Campuses</button> </Link> 
			

		<div>
			<div>this is where the campuses stuff is</div>
			<h3> Name: {camp.name}</h3>
			<h3> Description: {camp.description || "N/A"}</h3>

		</div>
		);
}