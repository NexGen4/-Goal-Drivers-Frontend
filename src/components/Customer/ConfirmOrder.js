import React, {useEffect, useState} from 'react'
import './Customer.css'

import NavHome from '../NavBar/NavHome'
import Footer from '../Footer/Footer'
import { useParams } from 'react-router-dom';
import axios from "axios";

export default function ConfirmOrder() {

    const params = useParams();

    const [bidProduct , setBidProducts] = useState('');
    const [bid , setBid] = useState('');

    useEffect(()=>{

        axios.get("http://localhost:3002/api/seller/get_bid_product/" + params.id, {}).then((res) => {

            setBidProducts(res.data[0])

            axios.get("http://localhost:3002/api/seller/get_bid/" + res.data[0].winner_id, {}).then((res) => {

                setBid(res.data[0])
            }).catch((err) => {
                alert(err)
            })
        }).catch((err) => {
            alert(err)
        })
    },[])

    const handleSendNotification=(text,id)=>{
        axios.get("http://localhost:3002/api/seller/notify/" +id+"/"+ text, {}).then((res) => {
            alert(res.data)
        }).catch((err) => {
            alert(err)
        })
    }

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

  return (<>
   <NavHome/>
    <div className='bg'>
        <div style={{display:'flex', justifyContent:'space-around'}}>

                    <table style={{backgroundColor:'#EDFFF8', borderRadius:'8px', margin:'2rem'}}>
                        <tr>
                            <td>
                                <h3>Product Details</h3>
                            </td>
                        </tr>
                        <tr>
                            <td className='text'>
                                Product Name : {bidProduct.name}
                            </td>
                        </tr>
                        <tr>
                            <td className='text'>
                                <img src={bidProduct.image} alt="product image" style={{width:100, height:100}}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <input type="button" name="viewmore" value="View More >>" className='view'/>
                            </td>
                        </tr>
                    </table>

                    <table  style={{backgroundColor:'#EDFFF8', borderRadius:'8px', margin:'2rem'}}>
                        <tr>
                            <td>
                                <h3>Confirm your order</h3>
                            </td>
                        </tr>
                            <tr>
                                <td>
                                    <p className='text'>Product Name </p>
                                </td>
                                <td>
                                    <p className='text'>{bidProduct.name}</p>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <p className='text'>Bidded Date</p>
                                </td>
                                <td>
                                    <p className='text'>{formatDate(bidProduct.date)}</p>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <p className='text'>Base Value (LKR)</p>
                                </td>
                                <td>
                                    <p className='text'>Rs.{bidProduct.base_price}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='text'>You Bidded Price (LKR)</p>
                                </td>
                                <td>
                                    <p className='text'>Rs.{bid.bid}</p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <input type="cancel" name="cancel" value="Cancel Order" className='no' onClick={()=>{handleSendNotification("Customer cancel the order",bidProduct.product_id)}}/>
                                    <input type="submit" name="confirm" value="Confirm Order" className='yes' onClick={()=>{handleSendNotification("Customer confirm the order",bidProduct.product_id)}}/>
                                </td>
                            </tr>
                        </table>
                    
                </div><br/><br/>
                <br/>             
                   
       
           
        <Footer/>
    </div>
    </>
  )
}
