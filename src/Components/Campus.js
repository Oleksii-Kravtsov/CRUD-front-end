import React, { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import campusData from "../DummyDATA/campusData.json";


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
		<div>
			<div>this is where the campuses stuff is</div>
			<h3> Name: {camp.name}</h3>
			<h3> Description: {camp.description || "N/A"}</h3>
		</div>
		);
}