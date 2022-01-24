import React, {useState, useEffect} from "react";
import SingleCampus from "./SingleCampus";
import {Navigate, useNavigate} from "react-router-dom";
import campusData from "../DummyDATA/campusData.json";
import "../styles/campus.css";

export default function AllCampusView() {
	const [campus, setCampuses] = useState([]);

	useEffect(() => {

		// const options = {
		// 	method: 'GET',
		// 	headers: {
		// 	'Content-Type': 'application/json',
		// 	}
		// }
		const fetchCampuses = () => {
		  fetch ("https://back-end-ttp.herokuapp.com/campuses/")
			.then(res =>{
			   return res.json()})
			.then(data => {
			  setCampuses(data)
			})
		  }
		return fetchCampuses()
		})



	const navigate = useNavigate();

	return(
		<div className="CampusContainer">
		<div>
			<h1>Welcome to the Campus Area, Take a look at all the campuses!</h1>

		</div>
		
		    <button className="addCampus" onClick= {() => navigate('/CampusForm')}> Add Campus</button> 
		    <div className="displayCampus">
			{
			campus && campus.map(singleCampus => <SingleCampus key={singleCampus.id} props={singleCampus} />)
			}
		</div>
		</div>
		);
}