import React, { useEffect, useState } from 'react'
import './seller.css'
import {useLocation} from 'react-router-dom'
import NavHome from '../NavBar/NavHome'
import Footer from '../Footer/Footer'
import axios from 'axios'

export default function SellerBid() {
    const [bidProducts, setBidProducts] = useState([])
    const [bids, setBids] = useState([])
    const [bidView, setBidView] = useState(false)
    const [productsState, setProductState] = useState(true)
    const location = useLocation()
    const seller = {
        id: 1
    }
    useEffect(() => {

        axios.get("http://localhost:3002/api/seller/get_bid_product/" + location.state.id, {}).then((res) => {
            console.log(res.data[0])
            // for(let i=0; i<res.data.length; i++){
            //   res.data[i].view = false
            // }
            setBidProducts(res.data[0])
        }).catch((err) => {
            alert(err)
        })

        onClick(location.state.id)
    }, [])


    const onClick = (id)=>{
        console.log(id)

        setProductState(false)
        setBidView(true)
        axios.get("http://localhost:3002/api/seller/get_bids/" + id, {}).then((res) => {
            console.log(res.data)
            setBids(res.data)
        }).catch((err) => {
            alert(err)
        })
        //
        // setTimeout(function () {
        //     setProductState(true)
        // }, 1000);
    }

    const handleSendNotification=(winner_id, email, product_id)=>{
        console.log('bid win')
        console.log(winner_id)

        axios.put("http://localhost:3002/api/buyer/confirm-winner/" + winner_id+"/"+product_id+"/"+email, {}).then((res) => {

            alert(res.data)
        }).catch((err) => {
            alert(err)
        })
    }


    return (<>
            <NavHome/>
            <div className='bg'>
                <>

                    <div style={{display:"flex",justifyContent:"space-center"}}>

                        <div>
                            <table className='frm'>
                                <tr>
                                    <td>
                                        <h3>Product Details</h3>
                                        <table>
                                            <tr>
                                                <td>
                                                    <p className='text'>Product name </p>
                                                </td>
                                                <td>
                                                    <p className='text'>{bidProducts.name}</p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className='text'>Product code</p>
                                                </td>
                                                <td>
                                                    <p className='text'>00{bidProducts.product_id}</p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className='text'>Base Value</p>
                                                </td>
                                                <td>
                                                    <p className='text'>: RS {bidProducts.base_price}</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>

                                    {/*{!bidView ? <td><button type='button' onClick={()=>onClick(bidProducts.product_id)}>Show Bids</button></td>:''}*/}
                                </tr>

                                <tr>
                                    <td>
                                        <h3>Count Down</h3>
                                        <h4>Clock</h4>
                                        <p className='text'>DD     HH    MM     SS</p>
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
                                        <input type="button" name="update" value="Update Bid Value" className='yes'/>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <h3>End your product bid</h3>
                                        <input type="button" name="end" value="End & Sell" className='yes'/>
                                        <input type="button" name="cancel" value="Cancel" className='yes'/>
                                    </td>
                                </tr>

                            </table>
                        </div>

                        <div>
                            {/*{bidView?*/}
                            <table className='frm'>
                                <td rowSpan={5}>
                                    <h3>Bid Details</h3>
                                    <table border={1}>
                                        <tr>
                                            <th style={{paddingRight:5}}>Date</th>
                                            <th style={{paddingRight:5}}>Customer</th>
                                            <th style={{paddingRight:5}}>E-mail</th>
                                            <th style={{paddingRight:5}}>Bid Value</th>
                                            <th style={{paddingRight:5}}>Status</th>
                                        </tr>
                                        {bids.length !=0 && bids.map((bid)=>(
                                            <>
                                                <tr>
                                                    <td className='tbl_row' style={{paddingRight:5}}>10/052022</td>
                                                    <td className='tbl_row' style={{paddingRight:5}}>{bid.user.firstname}</td>
                                                    <td className='tbl_row' style={{paddingRight:5}}>{bid.user.email}</td>
                                                    <td className='tbl_row' style={{paddingRight:5}}>{bid.bid.bid}</td>
                                                    <td className='tbl_row' style={{paddingRight:5}}>
                                                        <button type="button" name="send" value="Send" className='yes'
                                                                onClick={()=>{handleSendNotification(bid.user.user_id, bid.user.email,bidProducts.product_id)}}
                                                        >
                                                            Accept
                                                        </button>
                                                    </td>
                                                </tr>
                                            </>
                                        ))}
                                    </table>
                                </td>
                            </table>
                            {/*:''}*/}
                        </div>

                    </div>

                </>
                <Footer/>

            </div>

        </>
    )
}
