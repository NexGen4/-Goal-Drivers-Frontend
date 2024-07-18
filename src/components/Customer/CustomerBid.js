import React, { useEffect, useState } from 'react';
import './Customer.css';
import lap from './Laptop.png';
import NavHome from '../NavBar/NavHome';
import axios from 'axios';

export default function CustomerBid() {
    const [bidProducts, setBidProducts] = useState([]);
    const [bid, setBid] = useState(0);
    const [seller, setSeller] = useState({});
    const [productsState, setProductsState] = useState(true);
    // const [buyer, setBuyer] = useState({ id: null });
    const [buyer, setBuyer] = useState({ id: 2 });
    const [photoUrls, setPhotoUrls] = useState([]);

    useEffect(() => {
      // Fetch buyer details - no API found
      /*axios.get("http://localhost:3002/api/buyer/details")
        .then((res) => {
          setBuyer(res.data);
        }).catch((err) => {
          alert(err);
        });*/

      // Fetch bid products
      axios.get("http://localhost:3002/api/buyer/get_products")
        .then((res) => {
          const result = res.data.filter(product => product.product.type === "bid");
          result.forEach(product => product.view = false);
          setBidProducts(result);
        }).catch((err) => {
          alert(err);
        });
    }, []);

    function addBid(id) {
      axios.post("http://localhost:3002/api/buyer/add_bid", {
        buyer_id: buyer.id,
        product_id: id,
        bid: bid
      }).then((res) => {
        alert(res.data);
        // window.location.reload();
      }).catch((err) => {
        alert(err);
      });
    }

    async function hideSeller(index, id) {
        const bidProducts_ = [...bidProducts];
        bidProducts_.forEach(product => product.view = true);
        bidProducts_[index].view = false;
        setBidProducts(bidProducts_);
    }

    async function showSeller(index, id) {
      setProductsState(false);
      const bidProducts_ = [...bidProducts];
      bidProducts_.forEach(product => product.view = false);
      bidProducts_[index].view = true;

      await axios.get(`http://localhost:3002/api/buyer/get_seller/${id}`)
        .then((res) => {
          setSeller(res.data[0]);
        }).catch((err) => {
          alert(err);
        });

      setBidProducts(bidProducts_);
      setProductsState(true);

    }

    async function convertBlobToBase64(blobUrl) {
        const response = await fetch(blobUrl);
        const blob = await response.blob();

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve(reader.result);
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }

    return (
      <>
        <NavHome />
        <div className='bg'>
          <div>
            {bidProducts.length !== 0 && productsState && bidProducts.map((product, index) => {

                return(
                  <div className='bg' key={index}>
                    <table className='frm'>
                      <tbody>
                        <tr>
                          <td>
                            <h3>Bid Details</h3>
                            <p> Base Value  :  Rs.{product.base_price}</p>
                          </td>
                          <td rowSpan={5}>
                            <h3>Product Details</h3>
                            <table>
                              <tbody>
                                <tr>
                                  <td>
                                    <p>{product.product.name}</p>
                                  </td>
                                </tr>
                                <tr key={index}>
                                    <td><img src={product.product.image} alt={`Product ${index}`} style={{ width: '100px', height: '100px' }} /></td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h3>Count Down</h3>
                            <h4>End At</h4>
                            <p>{product.end_time}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h3>Place Your Bid Here</h3>
                            <input type="number" className='text' value={bid} onChange={(e) => setBid(e.target.value)} />
                            <input type="button" name="submit" value="Submit" className='submit' onClick={() => addBid(product.product.product_id)} />
                          </td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        {product.view ? (
                            <>
                          <tr>
                            <td>
                              <h3>Seller's Details</h3>
                              <table>
                                <tbody>
                                  <tr>
                                    <td>Name</td>
                                    <td>:{seller.firstname} {seller.lastname}</td>
                                  </tr>
                                  <tr>
                                    <td>Email</td>
                                    <td>{seller.email}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                            <tr>
                            <td></td>
                            <td><button onClick={() => hideSeller(index, product.product.seller_id)}>Hide Seller Details</button></td>
                            </tr>
                        </>
                        ) : (
                          <tr>
                            <td></td>
                            <td><button onClick={() => showSeller(index, product.product.seller_id)}>Show Seller Details</button></td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )
            })}
          </div>
        </div>
      </>
    );
  }
