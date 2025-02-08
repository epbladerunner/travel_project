import React from 'react';


interface TravelProfile{
    hotels:string;
    car: boolean;
    bus: boolean;
    airbnb: boolean;

}

interface TravelActions{
    setTravelOptions:(options: TravelProfile)=>void

}