import React from 'react';
import { useState,useEffect } from "react";
import {useAppStore, useTravelOptions} from '../Store/store';

export function HomeScreen(){

const setMode = useTravelOptions((state)=>state.setTravelOptions);
const { hotels, car, bus, airbnb } = useTravelOptions();
const [fourwheels,setFour]=useState(false);


useEffect(() => {
  
  console.log('someValue changed:', { hotels, car, bus, airbnb });

}, [hotels, car, bus, airbnb ]);

const handleSub = (event: React.FormEvent) => {
  event.preventDefault();
    
    setMode({

    hotels: 'a fancy place',
    car: true,
    bus: false,
    airbnb: true,
  
  });
  
  if(car===true){ 
    setFour(!fourwheels); //toggle car text

}

 
};





return(
    <header className = "HomeScreen">



<div>
<div>
      <button onClick={handleSub}>Submit</button>
      {fourwheels && <p>Check out local car rentals!</p>}
<button onClick = {handleSub}>setprofile</button>

    <h1>{hotels}</h1>
    
    <menu type = "list">
        <ul>
        <li><a >sign up</a></li> {/* add a href to make these functional */}
        
        <li><a>log in</a></li> {/* add a href to make these functional */}
        </ul>
    </menu>
  
<div id = "card">
   <h2>Sign up for our flight plan</h2>
   
    <p>Here to help you enjoy your next trip. Earn points and enjoy special deals with our flights card.</p>
    
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste magni cum hic fugiat repellendus consectetur dolore quasi tenetur, est ratione, vitae consequuntur reprehenderit deserunt, fugit doloribus laudantium? Dicta, impedit a?</p>
    

    </div>
</div>

    
</div>
</header>
);    
}


export function Login() {
 
    const [localemail, setlocalEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
  
    const setEmail = useAppStore((state)=>state.setUserEmail);

    const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
   
    console.log("Email:", localemail);//making sure my stuff is working
    

    setEmail(localemail);
    localStorage.setItem('userEmail',localemail);

    
   
  };

 

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label >Email</label>
          <input
            value={localemail}
            onChange={(e) => setlocalEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input

            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

 
