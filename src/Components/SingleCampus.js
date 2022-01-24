import React, {useState} from "react";
import { Link } from "react-router-dom";
import campusData from "../DummyDATA/campusData.json"
import "../styles/students.css";

export default function SingleCampus({props}) {

	const [id, setId] = useState()
	const DeleteHandler = (id) => {
		
		const index = campusData.findIndex(ele => ele.id === id);
		const data2 = campusData.splice(index, 1)
		console.log(campusData);
		
	
}

	return(
		<div className="campusCard">
		<ul>
		<Link to={`/Campus/${props.id}`} ><li>{props.name} </li></Link> <li>{props.address}</li>
		<li>{props.description}</li>
		
		<button onClick={() => DeleteHandler(props.id)}> Delete</button>
		</ul>
		</div>

		);
}