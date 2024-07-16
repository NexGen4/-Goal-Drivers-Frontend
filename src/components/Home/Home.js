import React from 'react'
import { Link } from 'react-router-dom';
import NavHome from '../NavBar/NavHome';
import Foot from '../Footer/Foot';

export default function Home() {
  return (
    <div>
      <div><NavHome/></div>
      <div style={{height:'39.65vh'}}>
        <Link to='/customer-bid'><button>Customer</button></Link>
        <Link to='/seller'> <button>Seller</button></Link>
        </div> 
      <div><Foot/></div>
    </div>
  );
}




