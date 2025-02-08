import { create } from 'zustand';


interface AppState
{
    userEmail: string;
    
}

interface AppstateActions
{
    setUserEmail: (email : string) => void;

}

export const useAppStore = create<AppState&AppstateActions>((set) =>(
    
{

     userEmail: localStorage.getItem('userEmail') ||'',
     
    setUserEmail:(email)=>
    {
        set({userEmail: email});
        localStorage.setItem('userEmail',email)//key "userEmail" value "email"
    }
 
}

))


interface TravelProfile{
    hotels:string;
    car: boolean;
    bus: boolean;
    airbnb: boolean;

}

interface TravelActions{
    setTravelOptions:(options: TravelProfile)=>void;    //
    resetTravelOptions:()=>void;                        //since im just setting values i dont have to take any parameters
}




export const useTravelOptions = create<TravelProfile&TravelActions>((set)=>({

   
    hotels:'',
    car: false,
    bus: false,
    airbnb: false,

    setTravelOptions:(options)=>{
        set({
           hotels: options.hotels,
            car: options.car,
            bus: options.bus,
            airbnb: options.airbnb,
        });
    },
 
    resetTravelOptions:()=>{
        set({
            hotels: '',
            car: false,
            bus: false,
            airbnb: false,
        });
    }




}))