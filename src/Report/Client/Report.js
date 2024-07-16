import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Report.css';
import logo from './Logo.jpeg';

function Report() {
  const [data, setData] = useState({});

  useEffect(() => {
    // Make an API request using Axios
    axios.get('YOUR_API_ENDPOINT')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='SellerReport'>
      <img className='Logo' src={logo} alt='logo' />
      <h4 className='Heading'>Budget Pos, Kaduwela, Sri Lanka <br />Telephone No:0716020480<br />Email:budgetpos@gmail.com</h4>
      <hr />
      <table className='Table'>
        <h3 className='Table_caption' style={{ textAlign: 'center' }}>Seller Report</h3>
        <tr>
          <td>Product ID</td>
          <td>{data.id}</td>
        </tr>

        <tr>
          <td>Product Name</td>
          <td>{data.title}</td>
        </tr>

        <tr>
          <td>Price</td>
          <td>{data.price}</td>
        </tr>

        <tr>
          <td>Quantity</td>
          <td>{data.quantity}</td>
        </tr>

        <tr>
          <td>No of Product sold last week</td>
          <td>{data.soldLastWeek}</td>
        </tr>

        <tr>
          <td>Ratings</td>
          <td>{data.rating}</td>
        </tr>

        <tr>
          <td>Feedback for the product</td>
          <td>{data.feedback}</td>
        </tr>

        <tr></tr>

        <tr>
          <td></td>
          <td>
            <button className='print'>Print</button>
            <button className='cancel' style={{ marginLeft: '2rem', borderRadius: '4px', height: '2.7rem', color: 'black' }}>Cancel</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Report;

