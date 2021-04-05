//Npm Packages
import React from "react";

// Styles
import "../styles/Header.css";

export default function Header() {
  // Render
  return (
    <div>
      <header className={"header"}>
        <h1>Track your Parcel!</h1>
        <h3>
          Here you can track letters, packages and pallets using a parcel ID
        </h3>
      </header>
    </div>
  );
}
