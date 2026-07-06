export default function ProjectCard({

project,

onDelete

}){

return(

<div className="project">

<h2>

{project.name}

</h2>

<p>

{project.description}

</p>

<br/>

<button

className="primary-btn"

onClick={()=>onDelete(project.id)}

>

Delete

</button>

</div>

);

}