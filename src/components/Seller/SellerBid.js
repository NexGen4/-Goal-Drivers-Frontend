import React, { useEffect, useState } from 'react'
import './seller.css'
import NavHome from '../NavBar/NavHome'
import Footer from '../Footer/Footer'
import axios from 'axios'

export default function SellerBid() {
    const [bidProducts , setBidProducts] = useState([])
    const [bids , setBids] = useState([])
    const [bidView , setBidView] = useState([])
    const [productsState , setProductState] = useState(true)
    const seller = {
        id : 2
      }
    useEffect(()=>{
        axios.get("http://localhost:3002/api/seller/get_bid_products/"+seller.id,{
    }).then((res)=>{
      console.log(res.data)
      for(let i=0; i<res.data.length; i++){
        res.data[i].view = false
      }
      setBidProducts(res.data)  
    }).catch((err)=>{
      alert(err)
    })
    },[])

   async function onClick(index , id){
        setProductState(false)
        let bidProducts_ = bidProducts
        for(let i=0; i<bidProducts_.length; i++){
            bidProducts_[i].view = false
          }
        bidProducts_[index].view = true
       await axios.get("http://localhost:3002/api/seller/get_bids/"+seller.id,{
    }).then((res)=>{
      console.log(res.data)
      setBids(res.data)  
    }).catch((err)=>{
      alert(err)
    })
    setBidProducts(bidProducts_)
    setTimeout(function() {
        setProductState(true)
      }, 1000);
    }

  return (<>
  <NavHome/>
    <div className='bg'>
        <>
        {bidProducts.length!=0&&productsState&&bidProducts.map((product , index)=>(
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
                                    <p className='text'>{product.product.name}</p>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <p className='text'>Product code</p>
                                </td>
                                <td>
                                    <p className='text'>00{product.product.product_id}</p>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <p className='text'>Base Value</p>
                                </td>
                                <td>
                                    <p className='text'>: RS {product.base_price}</p>
                                </td>
                            </tr>
                        </table>
                    </td>

                    {product.view?<>
                        <td rowSpan={5}>
                        <h3>Bid Details</h3>
                        <table border={1}>
                            <tr>
                                <th>Date</th>
                                <th>Customer</th>
                                <th>E-mail</th>
                                <th>Bid Value</th>
                                <th>Status</th>
                            </tr>
                            {bids.length!=0&&bids.map((bid)=>(
                                <>
                                <tr>
                                <td>10/052022</td>
                                <td>{bid.user.firstname}</td>
                                <td>{bid.user.email}</td>
                                <td>{bid.bid.bid}</td>
                                <td><input type="button" name="send" value="Send" className='yes'/></td>
                            </tr>
                                </>
                            ))}
                        </table>
                    </td>
                    </>:<>
                    <td><button onClick={()=>onClick(index , product.product.product_id)}>Show Bids</button></td>
                    </>}
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
        ))}
        </>
        <Footer/>
      
    </div>

    </>
  )
}
