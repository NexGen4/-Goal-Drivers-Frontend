import React, {useEffect, useState} from 'react';
import './NavHome.css';
import { FaHome } from "react-icons/fa"; // import the home icon from react-icons/fa
import bduget  from "../../assets/images/bduget pos.jpg"; // import the company logo image
import { Link } from 'react-router-dom';


function NavHome() {

  return (
    <div className='nav-container'> 
      <nav>
        <div>
          <img src={bduget} alt='navigation' style={{height:"50px"}} ></img> {/* Display the company logo image */}
        </div>
        <ul>
          <Link to='/'><li><a href='#'>Home</a></li> </Link>  
          <li><Link to="/aboutus">About us</Link></li>
          <li><a href='#'>services</a></li>
          <Link to='/product/selling'> <li><a href='#' >Direct Sell</a></li></Link>
          <Link to='/product/bid'> <li><a href='#'>Bid products</a></li></Link>
          <li><a href='#'>contact us</a></li>
          <input type={"search"} placeholder={"Search on budget pos"}></input> {/* Display a search input */}
        </ul>
        
        <button type='button'>Request Demo</button> {/* Display "Request Demo" button */}
        <p style={{color:"white" }}>sign in <span>register</span></p> {/* Display a "sign in/register" text */}
        <p style={{color:"white"}} className='hfar'><FaHome/></p> {/* Display the home icon */}
      </nav>

    </div>
  );
}

export default NavHome;

