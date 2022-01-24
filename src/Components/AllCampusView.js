import React, {useState, useEffect} from "react";
import SingleCampus from "./SingleCampus";
import {Navigate, useNavigate} from "react-router-dom";
import campusData from "../DummyDATA/campusData.json";

export default function AllCampusView() {
	const [campus, setCampuses] = useState([]);

	useEffect(() => {

		// const options = {
		// 	method: 'GET',
		// 	headers: {
		// 	'Content-Type': 'application/json',
		// 	}
		// }
		const fetchStudents = () => {
		  fetch ("https://back-end-ttp.herokuapp.com/campuses/")
			.then(res =>{
			   return res.json()})
			.then(data => {
			  console.log(data)
			})
		  }
		return fetchStudents()
		})



	const navigate = useNavigate();

	return(
		<>
		<div>
			<h1>This is where the campuses will be displayed</h1>

		</div>
		<div>
		    <button className="addCampus-btn" onClick= {() => navigate('/CampusForm')}> Add Campus</button> 
			{
			campusData && campusData.map(singleCampus => <SingleCampus key={singleCampus.id} props={singleCampus} />)
			}
		</div>
		</>
		);
}