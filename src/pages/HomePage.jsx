//Npm Packages
import React, { useState } from "react";
import { Link } from "react-router-dom";


// Component
import Header from "../components/Header.jsx";

//Styles
import "../styles/HomePage.css";



export default function HomePage() {

  //reactive data
  const [query, setQuery] = useState("");
    return (
    <div className="home-page">
        <Header />
         <div className="search-bar">
        
        <input placeholder="Parcel ID" 
        value ={query} 
        onChange ={(event)=> setQuery(event.target.value)}
        />
        <Link className="search" to={`/ResultsPage/${query}`}>Search </Link>
        <Link className="all" to ="/AllPackages">See all packages</Link>
        </div>
     
    </div>
  );
}
