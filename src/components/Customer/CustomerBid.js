import React, { useEffect, useState } from 'react'
import './Customer.css'
import lap from './Laptop.png'
import NavHome from '../NavBar/NavHome'
import Footer from '../Footer/Footer'
import axios from 'axios'

export default function CustomerBid() {
    const [bid_products , setBidProduct] = useState([])
    const [bid , setBid] = useState(0)
    const [seller , setSeller] = useState({})
    const [productsState , setProductState] = useState(true)
    const buyer = {
        id : 3
    }
    useEffect(()=>{
        axios.get("http://localhost:3002/api/buyer/get_products",{

        }).then((res)=>{
            console.log(res.data)
            const result = res.data.filter(checkAdult);
            for(let i=0; i<result.length; i++){
                result[i].view = false
              }
            function checkAdult(product) {
                return product.product.type==="bid";
              }
              console.log(result)
            setBidProduct(result)
        }).catch((err)=>{
            alert(err)
        })
    },[])

    function addBid(id){
        axios.post("http://localhost:3002/api/buyer/add_bid",{
                buyer_id:buyer.id,
                product_id:id,
                bid:bid
        }).then((res)=>{
            console.log(res.data)
            alert(res.data)
            window.location.reload()
        }).catch((err)=>{
            alert(err)
        })
    }

    async function onClick(index , id){
        setProductState(false)
        let bidProducts_ = bid_products
        for(let i=0; i<bidProducts_.length; i++){
            bidProducts_[i].view = false
          }
        bidProducts_[index].view = true
       await axios.get("http://localhost:3002/api/buyer/get_seller/"+id,{
    }).then((res)=>{
      console.log(res.data)
      setSeller(res.data[0])  
    }).catch((err)=>{
      alert(err)
    })
    setBidProduct(bidProducts_)
    setTimeout(function() {
        setProductState(true)
      }, 1000);
    }

  return (<>
  <NavHome/>
    <div className='bg'>
        <div>
                {bid_products.length!=0&&productsState&&bid_products.map((product , index)=>(
                    <>
                    <div className='bg'>
                                <table className='frm'>
                                  <tr>
                    <td>
                        <h3>Bid Details</h3>
                        <p> Base Value  :  Rs.{product.base_price}</p>
                    </td>

                    <td rowSpan={5}>
                        <h3>Product Details</h3>
                        <table>
                            <tr>
                                
                                <td>
                                    <p>{product.product.name}</p>
                                </td>
                            </tr>
                                <td><img src={lap} /></td>
                                <td></td>
                            {/* <tr>
                                <td>This is a Laptop</td>
                            </tr> */}
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
                        <h3>  Place Your Bid Here</h3>
                        <td> <input type="text" className='text'  value={bid} onChange={(e)=>setBid(e.target.value)}/></td>
                        <input type="submit" name="submit" value="Submit" className='submit' onClick={()=>{addBid(product.product.product_id)}}/>
                    </td>
                </tr>
                {product.view?<>
                    <tr>
                    <td>
                        <h3>Seller"`"s Details</h3>
                        <table>
                            <tr>
                                <td>Name</td>
                                <td>:{seller.firstname} {seller.lastname}</td>
                            </tr>

                            <tr>
                                <td>Address</td>
                                <td>: Colombo 05</td>
                            </tr>

                            <tr>
                                <td>Contact</td>
                                <td>: +94 123 456 789</td>
                            </tr> 
                            <tr>
                                <td>email</td>
                                <td>{seller.email}</td>
                            </tr>
                            <tr>
                                <td>Click Here to View More</td>
                            </tr> 
                        </table>    
                    </td>
                </tr>
                </>:<>
                <td></td>
                <td><button onClick={()=>onClick(index , product.product.seller_id)}>Show Seller</button></td>
                </>}
                </table>
                </div>
                    </>
                ))}
        </div>
        <Footer/>
    </div>
    </>
  )
}
