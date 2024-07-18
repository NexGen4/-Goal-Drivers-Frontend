import React, { useEffect, useState } from 'react';
import './Customer.css';
import NavHome from '../NavBar/NavHome';
import axios from 'axios';
import {useParams} from 'react-router-dom'

export default function CustomerBid() {
    const [bidProducts, setBidProducts] = useState('');
    const [bid, setBid] = useState(0);
    const [seller, setSeller] = useState({});
    const [productsState, setProductsState] = useState(false);
    const [buyer, setBuyer] = useState({ id: 2 });

    const params = useParams();

    useEffect(() => {
        // Fetch bid products
        axios.get("http://localhost:3002/api/buyer/get_product/"+params.id,{
        }).then((res)=>{
            setBidProducts(res.data)
        }).catch((err)=>{
            alert(err)
        })
    }, []);

    function addBid(id) {
        axios.post("http://localhost:3002/api/buyer/add_bid", {
            buyer_id: buyer.id,
            product_id: id,
            bid: bid
        }).then((res) => {
            alert(res.data);
        }).catch((err) => {
            alert(err);
        });
    }

    async function hideSeller(index, id) {
        setProductsState(false)
    }

    async function showSeller(id) {
        setProductsState(true);

        await axios.get(`http://localhost:3002/api/buyer/get_seller/${id}`)
            .then((res) => {
                setSeller(res.data[0]);
            }).catch((err) => {
                alert(err);
            });

        setProductsState(true);

    }

    return (
        <>
            <NavHome />
            <div className='bg'>
                <div>

                    <div className='bg' >
                                <table className='frm'>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <h3>Bid Details</h3>
                                            <p> Base Value  :  Rs.{bidProducts.price}</p>
                                        </td>
                                        <td rowSpan={5}>
                                            <h3>Product Details</h3>
                                            <table>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <p>{bidProducts.name}</p>
                                                    </td>
                                                </tr>
                                                <tr >
                                                    <td><img src={bidProducts.image} alt={`Product`} style={{ width: '100px', height: '100px' }} /></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h3>Count Down</h3>
                                            <h4>End At</h4>
                                            <p>{bidProducts.end_time}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h3>Place Your Bid Here</h3>
                                            <input type="number" className='text' value={bid} onChange={(e) => setBid(e.target.value)} />
                                            <input type="button" name="submit" value="Submit" className='submit' onClick={() => addBid(bidProducts.product_id)} />
                                        </td>
                                    </tr>
                                    <tr></tr>
                                    <tr></tr>
                                    <tr></tr>
                                    {productsState ? (
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
                                                <td><button onClick={() => hideSeller(bidProducts.seller_id)}>Hide Seller Details</button></td>
                                            </tr>
                                        </>
                                    ) : (
                                        <tr>
                                            <td></td>
                                            <td><button onClick={() => showSeller(bidProducts.seller_id)}>Show Seller Details</button></td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>

                </div>
            </div>
        </>
    );
}
