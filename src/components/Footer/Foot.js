import React from 'react'
import './Foot.css'
import logo from './BudgetPos.jpeg'
import fb from './facebook.png'
import yt from './youtube.png'
import lin from './linkedin.png'

export default function Foot() {
  return (
    <div>
        <bt/>
       
        <div className="foot">
        <table className='table'>
            <tr>
                <td colSpan={6}><img src={logo} alt="LOGO" className='logo' /></td>
            </tr>
            <tr>
                <th>Primary Menu</th>
                <th>Portal Login</th>
                <th>More Links</th>
                <th>Modules</th>
                <th>Contact Us</th>
                <th>Social Media</th>
            </tr>
            <tr>
                <td>Home</td>
                <td>As a Seller</td>
                <td>General Terms & Conditions</td>
                <td>E-Commerce</td>
                <td>Hotline: (+94) 77 31 34 034</td>
                <td><img src = {fb} className='icon'/>Facebook</td>
            </tr>
            <tr>
                <td>Products</td>
                <td>As a Customer</td>
                <td>Privacy Policy</td>
                <td>Cash on Delivary</td>
                <td>Hotline: (+94) 77 31 34 034</td>
                <td><img src = {yt} className='icon'/>Youtube</td>
            </tr>
            <tr>
                <td>About Us</td>
                <td></td>
                <td>POS Hardware</td>
                <td>Repair & Services</td>
                <td>Email: sales@budgetpos.lk</td>
                <td><img src = {lin} className='icon'/>LinkedIn</td>
            </tr>
            <tr>
                <td>Contact Us</td>
                <td></td>
                <td>Our Customers</td>
                <td>Manufacturing</td>
                <td>Address</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Restaurant</td>
                <td></td>
                <td></td>
            </tr>
        </table>
        </div>
    </div>
  )
}
