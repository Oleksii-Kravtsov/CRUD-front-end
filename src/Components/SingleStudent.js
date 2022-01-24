import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../DummyDATA/data.json"

export default function SingleStudent({props}) {

	const [id, setId] = useState();
	const DeleteHandler = (id) => {
		
			const index = data.findIndex(ele => ele.id === id);
			const data1 = data.splice(index, 1)
			console.log(data);
			setId(id);
		
	}

	// create: get the info of the selectred student 

	return(
		<div className="studentCard">
			
			<ul >
				<Link to={`/Student/${props.id}`} ><li>{props.firstName} {props.lastName} {props.email} {props.gpa}  </li></Link>
				<button onClick={() => DeleteHandler(props.id)}> Delete</button>
			</ul>
		</div>
	);
}