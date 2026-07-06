import { useState } from "react";

export default function CreateProjectModal({

createProject

}){

const[name,setName]=useState("");

const[description,setDescription]=useState("");

return(

<form

onSubmit={(e)=>{

e.preventDefault();

createProject(name,description);

}}

>

<input

placeholder="Project Name"

value={name}

onChange={(e)=>setName(e.target.value)}

/>

<br/>

<br/>

<textarea

placeholder="Description"

value={description}

onChange={(e)=>setDescription(e.target.value)}

/>

<br/>

<br/>

<button>

Create Project

</button>

</form>

);

}