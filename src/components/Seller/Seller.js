import React, { useEffect, useState } from 'react'
import './seller.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Seller() {
  const [products, setProducts] = useState([]);
  const [seller, setSeller] = useState({ id: null });

  useEffect(() => {
    // Fetch seller details
    axios.get("http://localhost:3002/api/seller/details")
      .then((res) => {
        setSeller(res.data);
      }).catch((err) => {
        alert(err);
      });

    // Fetch products when seller ID is available
    if (seller.id) {
      axios.get(`http://localhost:3002/api/seller/get_products/${seller.id}`)
        .then((res) => {
          setProducts(res.data);
        }).catch((err) => {
          alert(err);
        });
    }
  }, [seller.id]);

  return (
    <div className='bg'>
      <div>
        <Link to='/seller-bid'>
          <input type="button" name="addProduct" value="Add Product" className='add'/>
        </Link> 
        <input type="button" name="requestReport" value="Request Report" className='report'/>
      </div>

      <div>
        <table className='frm'>
          {products.length !== 0 && (
            <thead>
              <tr>
                <th>Date</th>
                <th>Product Name</th>
                <th>Product ID</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
          )}
          <tbody>
            {products.length !== 0 && products.map((product) => (
              <tr key={product.product_id}>
                <td>{new Date(product.date).toLocaleDateString()}</td>
                <td>{product.name}</td>
                <td>00{product.product_id}</td>
                <td>{product.amount}</td>
                <td>{product.status}</td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="5">No products available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
