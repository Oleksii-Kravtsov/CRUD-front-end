import React from "react";
import { useParams } from "react-router-dom";
import campusData from "../DummyDATA/campusData.json";


export default function Campus({props}) {

	const {id} = useParams()
	console.log(id)

	const campusInfo = campusData.filter(ele => ele.id == id)
	console.log(campusInfo)

	return(
		<div>
			<div>this is where the campuses stuff is</div>
			<h3> Name: {campusInfo[0].name}</h3>
			<h3> Description: {campusInfo[0].description}</h3>
		</div>
		);
}