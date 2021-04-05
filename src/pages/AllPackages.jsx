//Npm Packages
import React from "react";
import { Link } from "react-router-dom";

//Components
import Package from "../components/Package";
import Header from "../components/Header";

//Style
import "../styles/AllPackages.css";

export default function AllPackages({ information }) {
  const Packages = information.map((item) => {
    return <Package key={item.id} data={item} />;
  });

  return (
    <div>
      <Link className="button" to="/">
        Back to home
      </Link>

      {Packages}
    </div>
  );
}
