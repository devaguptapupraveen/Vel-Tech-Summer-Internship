import { Link } from "react-router-dom";

export default function Sidebar(){

    return(

        <div className="sidebar">

            <h2>

                JimAI

            </h2>

            <Link to="/dashboard">Dashboard</Link>

            <Link to="/builder">AI Builder</Link>

            <Link to="/preview">Preview</Link>


            <Link to="/publish">Publish</Link>

            <Link to="/profile">Profile</Link>

            <Link to="/settings">Settings</Link>

        </div>

    );

}