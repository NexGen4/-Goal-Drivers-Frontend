import React from 'react'
import { Link } from 'react-router-dom';
import NavHome from '../NavBar/NavHome';
import Footer from '../Footer/Footer';

export default function Home() {
  return (
    <div>
      <div><NavHome/></div>
      <div style={{height:'39.65vh'}}>
        <Link to='/product'><button>Customer</button></Link>
        <Link to='/seller'> <button>Seller</button></Link>
        </div> 
      <div><Footer/></div>
    </div>
  );
}




