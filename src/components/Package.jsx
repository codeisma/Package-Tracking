//Npm Packages
import React from "react";

export default function Package({data}) {
    const { 
        eta,
        location_name,
        sender,
        status,
        parcel_id}=data

    return (
        <div className="package">
          <h2> Parcel id: {parcel_id}</h2>
          <p>Estimated time of arrival: {eta}</p>
          <p>Pick up location: {location_name}</p>
          <p>Sender: {sender}</p>
          <p>Status: {status}</p>
        </div>
    );
}
