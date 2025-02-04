 import React from "react";


interface Props {
    hotel: string;
    flights: string;
    carRentals: string;

}

export const Travel = (props: Props) => {
    return (
        <div className="travel-section">
            <h2>{props.hotel}</h2>
            <h2>{props.flights}</h2>
            <h2>{props.carRentals}</h2>

        </div>
    )
 }

 export default Travel; 
