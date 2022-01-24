import { useState, useEffect } from "react"
import Axios from "axios"
import data from "../DummyDATA/data.json"
import "../styles/students.css";

export default function StudentForm(){
  const [names, setNames] = useState("")
  const [age, setAge] = useState("")
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [gpa, setgpa] = useState("");

  async function SubmitHandler(e){
    e.preventDefault()

	console.log("Student name ",names )
	console.log("Student name ",age )

	console.log("data before push ", data)
	data.push({names, age})

	console.log(data)

	useEffect (() => {
		 Axios.post(`https://addStudent/`, {names:names,age:age}).
		 then(res =>  {
			 setSuccess(true)
		 })
	})
    

  }

  
   
  return (
    <div className="StudentContainer">
      <h1>Add a Student</h1>
      <form onSubmit={SubmitHandler}>
        <label>
          First Name: <br/>
          <input type="text" name="first" value={names} onChange={(e) =>setNames(e.target.value)}/>
        </label> <br/>
         <label>
          Last Name: <br/>
          <input type="text" name="last" value={names} onChange={(e) =>setNames(e.target.value)}/>
        </label> <br/>
        <label>
          Age:<br/>
          <input type="text" name="age" value={age} onChange={(e) => setAge(e.target.value)}/>
        </label> <br/>
         <label>
          Email: <br/>
          <input type="text" name="email" value={names} onChange={(e) =>setNames(e.target.value)}/>
        </label> <br/>
        <label>
          GPA:<br/>
          <input type="text" name="age" value={age} onChange={(e) => setAge(e.target.value)}/>
        </label> <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}	
