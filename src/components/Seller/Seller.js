import React, { useEffect, useState } from 'react'
import './seller.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Seller() {
  const [products, setProducts] = useState([]);
  // const [seller, setSeller] = useState({ id: null });
  const [seller, setSeller] = useState({ id:1  });
  const [product, setProduct] = useState({ id:1  });
  const [userEmail, setUserEmail] = useState('');
  const [type, setType] = useState('bid');

  useEffect(() => {
    // Fetch seller details
    // axios.get("http://localhost:3002/api/seller/details")
    //   .then((res) => {
    //     setSeller(res.data);
    //   }).catch((err) => {
    //     alert(err);
    //   });

    // Fetch products when seller ID is available
    if (seller.id) {
      axios.get(`http://localhost:3002/api/seller/get_products/${type}/${seller.id}`)
        .then((res) => {
          setProducts(res.data);
        }).catch((err) => {
          alert(err);
        });
    }
  }, [seller.id,type]);

    const handleChange = () => {
        var selectElement = document.getElementById("type");
        var selectedValue = selectElement.value;
        setType(selectedValue);
    };

  const handleSendEmail=()=>{
      axios.get(`http://localhost:3002/api/admin/get_user/${seller.id}`)
          .then((res) => {
              setUserEmail(res.data.email);
              axios.get(`http://localhost:3002/api/seller/get_report/${product.id}/${res.data[0].email}`)
                  .then((res) => {
                      console.log(res.data)
                  }).catch((err) => {
                  alert(err);
              });
          }).catch((err) => {
          alert(err);
      });
  }

  return (
      <div className='bg'>
        <div className='btn-group'>
          <Link to='/seller-bid'>
            <input type="button" name="addProduct" value="Add Product" className='btn'/>
          </Link>
          <input type="button" name="requestReport" value="Request Report" className="btn" onClick={handleSendEmail}/>
        </div>

        <div>
          <h5>Details of Added products</h5>

            <select id="type" onChange={handleChange}>
                <option value="bid">Bid Sell Products</option>
                <option value="selling">Direct Sell Products</option>
            </select>

          <table className='table'>
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
                <td>{product.admin_status}</td>
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
