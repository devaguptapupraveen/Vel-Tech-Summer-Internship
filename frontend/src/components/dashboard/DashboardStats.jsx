import StatsCard from "./StatsCard";

export default function DashboardStats({

projects

}){

return(

<div
style={{
display:"flex",
gap:"20px",
marginBottom:"20px"
}}
>

<StatsCard

title="Projects"

value={projects.length}

/>

<StatsCard

title="AI Credits"

value="100"

/>

<StatsCard

title="Published"

value="0"

/>

</div>

);

}