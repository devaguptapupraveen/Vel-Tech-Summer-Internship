export default function RecentProjects({

projects

}){

return(

<div>

<h2>

Recent Projects

</h2>

{

projects.map(project=>(

<p key={project.id}>

{project.name}

</p>

))

}

</div>

);

}