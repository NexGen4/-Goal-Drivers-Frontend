import React, { useEffect, useState } from 'react';
import './seller.css';
import NavHome from '../NavBar/NavHome';
import Footer from '../Footer/Footer';
import axios from 'axios';

export default function SellerBid() {
  const [bidProducts, setBidProducts] = useState([]);
  const [bids, setBids] = useState([]);
  const [bidView, setBidView] = useState([]);
  const [productsState, setProductState] = useState(true);
  // const [seller, setSeller] = useState({ id: null });
  const [seller, setSeller] = useState({ id: 1 });

  useEffect(() => {
    // Fetch seller details
    // axios.get("http://localhost:3002/api/seller/details")
    //   .then((res) => {
    //     setSeller(res.data);
    //   }).catch((err) => {
    //     alert(err);
    //   });

    // Fetch bid products
    axios.get(`http://localhost:3002/api/seller/get_bid_products/${seller.id}`)
      .then((res) => {

        const updatedProducts = res.data.map(product => ({
          ...product,
          view: false
        }));
        setBidProducts(updatedProducts);
      }).catch((err) => {
        alert(err);
      });
  }, [seller.id]);

  async function handleShowBid(index, productId) {
    setProductState(false);
    // const updatedProducts = bidProducts.map((product, i) => ({
    //   ...product,
    //   view: i === index
    // }));
    // setBidProducts(updatedProducts);

    await axios.get(`http://localhost:3002/api/seller/get_bids/${productId}`)
      .then((res) => {
          console.log(res.data)
        setBids(res.data);
      }).catch((err) => {
        alert(err);
      });

    setTimeout(() => {
      setProductState(true);
    }, 1000);
  }

  return (
    <>
      <NavHome />
      <div className='bg'>
        {bidProducts.length !== 0 && productsState && bidProducts.map((product, index) => (
          <div key={index}>
            <table className='frm'>
              <tbody>
                <tr>
                  <td>
                    <h3>Product Details</h3>
                    <table>
                      <tbody>S
                        <tr>
                          <td><p className='text'>Product name</p></td>
                          <td><p className='text'>{product.product.name}</p></td>
                        </tr>
                        <tr>
                          <td><p className='text'>Product code</p></td>
                          <td><p className='text'>00{product.product.product_id}</p></td>
                        </tr>
                        <tr>
                          <td><p className='text'>Base Value</p></td>
                          <td><p className='text'>: RS {product.base_price}</p></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  {product.view ? (
                    <td rowSpan={5}>
                      <h3>Bid Details</h3>
                      <table border={1}>
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Customer</th>
                            <th>E-mail</th>
                            <th>Bid Value</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {bids.length !== 0 && bids.map((bid, bidIndex) => (
                            <tr key={bidIndex}>
                              <td>{new Date(bid.bid.date).toLocaleDateString()}</td>
                              <td>{bid.user.firstname}</td>
                              <td>{bid.user.email}</td>
                              <td>{bid.bid.bid}</td>
                              <td><input type="button" name="send" value="Send" className='yes' /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  ) : (
                    <td><button type='button' onClick={() => handleShowBid(index, product.product.product_id)}>Show Bids</button></td>
                  )}
                </tr>
                <tr>
                  <td>
                    <h3>Count Down</h3>
                    <h4>Clock</h4>
                    <p className='text'>DD HH MM SS</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Bid Count</h3>
                    <p className='text'>count</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Edit Product</h3>
                    <input type="button" name="update" value="Update Bid Value" className='yes' />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>End your product bid</h3>
                    <input type="button" name="end" value="End & Sell" className='yes' />
                    <input type="button" name="cancel" value="Cancel" className='yes' />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
        <Footer />
      </div>
    </>
  );
}
