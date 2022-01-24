import React, {useState, useEffect} from "react";
import Axios from 'axios'
import campusData from "../DummyDATA/campusData.json"


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
		<div>
      <h1>Add a Campus</h1>
      <form onSubmit={SubmitHandler}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(e) =>setName(e.target.value)}/>
        </label>
        <label>
          Description:
          <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </label>
		<label>
          Address:
          <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
	);
}