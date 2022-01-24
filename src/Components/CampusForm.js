import React, {useState, useEffect} from "react";
import Axios from 'axios'
import campusData from "../DummyDATA/campusData.json"
import "../styles/campus.css";

export default function CampusForm() {

	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [address, setAddress] = useState("")
	const [success, setSuccess] = useState()

	async function SubmitHandler(e){
		e.preventDefault()
	
		console.log("Campus name ",name )
		console.log("Campus description ", description )
		console.log("Campus address", address)
	
		console.log("data before push ", campusData)

		campusData.push({name, description,address})
	
		console.log(campusData)
	
		useEffect (() => {
			 Axios.post(`https://addStudent/`, {names:name,description:description, address:address}).
			 then(res =>  {
				 setSuccess(true)
			 })
		})
		
	
	  }

	return(
		<div className="container">
      <h1>Add a New Campus</h1>
      <div>
      <form onSubmit={SubmitHandler}>
        <label className="labelform">
          Name:<br/>
          <input type="text" name="name" value={name} onChange={(e) =>setName(e.target.value)} className="nameform"/>
        </label><br/>
        <label>
          Description:<br/>
          <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </label><br/>
		<label>
          Address:<br/>
          <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
        </label><br/>
        <input type="submit" value="Submit" />
      </form>
      </div>
    </div>
	);
}