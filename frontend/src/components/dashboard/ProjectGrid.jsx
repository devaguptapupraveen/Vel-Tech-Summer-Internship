import ProjectCard from "./ProjectCard";

export default function ProjectGrid({

projects,

deleteProject

}){

return(

<div>

{

projects.map(project=>(

<ProjectCard

key={project.id}

project={project}

onDelete={deleteProject}

/>

))

}

</div>

);

}