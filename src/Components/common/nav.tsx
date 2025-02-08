import react from 'react'
import {Outlet,Link} from 'react-router-dom'

export function Nav(){

    return(
       <div>
        <nav>
        <ul>
          {/* <li><Link to="/home">Home</Link></li> */}
          <li><Link to="/">Home</Link></li> 
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
          <li><Link to="/Plan">Plan</Link></li> 
          <li><Link to="/user-profile">UserProfile</Link></li>
          <li><Link to="/Bookings">Bookings</Link></li>
          <li><Link to="/Support">Support</Link></li>
        </ul>
      </nav>
      <Outlet/>
      </div> 
    )
}
{/* <Route path="/" element = {<Nav/>}>
<Route index element = {<Home/>}/>
<Route path="/about" element={<About />} />
<Route path="/blog" element={<Blog />} />
<Route path="/Plan" element={< Plan/>} />
<Route path="/user-profile" element={<UserProfile />} />
<Route path="/Bookings" element={<Bookings/>} />
<Route path="/Support" element={<Support />} /> */}