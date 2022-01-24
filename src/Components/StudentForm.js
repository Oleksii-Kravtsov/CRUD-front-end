import { useState, useEffect } from "react"
import Axios from "axios"
import data from "../DummyDATA/data.json"


export default function StudentForm(){
  const [names, setNames] = useState("")
  const [age, setAge] = useState("")
  const [success, setSuccess] = useState(false);

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
    <div>
      <h1>Add a Student</h1>
      <form onSubmit={SubmitHandler}>
        <label>
          Name:
          <input type="text" name="name" value={names} onChange={(e) =>setNames(e.target.value)}/>
        </label>
        <label>
          Age:
          <input type="text" name="age" value={age} onChange={(e) => setAge(e.target.value)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}	
