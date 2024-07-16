import React, { useEffect, useState } from 'react'
import './OrderConfirm.css';
//import productImg from './Pictures/RAM.jpg'
import NavHome from '../components/NavBar/NavHome';
import Footer from '../components/Footer/Footer';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

//Display product details
function OrderConfirm({id,title,image,price,rating}){
    const [cart , setCart] = useState([])
    const{amount} = useParams()
    const buyer = {
        id:3,
        email:"medirider2023@gmail.com"
    }
    useEffect(()=>{
        axios.get("http://localhost:3002/api/buyer/get_cart/"+buyer.id,{

        }).then((res)=>{
            console.log(res.data)
            setCart(res.data)
        }).catch((err)=>{
            alert(err)
        })
    },[])
    return(<>
        <NavHome/>
        <div className="order" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div className='Product1'>
                <div className="product_information">
                    <p>{title}</p>
                    <p className="product_price">
                        <small>LKR</small>
                        <strong>{price}</strong>
                    </p>
                    
                </div>
                    <img src={image} alt=""/>

                    <Link to='/samplePayment'><button className='BuyNow'>Buy Now</button></Link>
            </div> 

            {cart.length!=0&&cart.map((crt, index)=>(
                <div className='Product2'>
                <div className="product_information">
                    <p>{crt.product.name}</p>
                    <p className="product_price">
                        <small>LKR</small>
                        <strong>{crt.product.amount*amount}</strong>
                    </p>  
                    
                </div>
                    {/* <img src={productImg} alt="" style={{height:'200px', width:'220px'}}/> */}
                    <br/> <br/>
                    <Link to='/samplePayment'><button className='Confirm' style={{width:'10rem', backgroundColor:'blue'}}>Confirm</button></Link>
                    
                    <Link to='/product'> <button className='Cancel' style={{width:'10rem', marginLeft:'1rem', border: '2px solid red', backgroundColor:'transparent', color:'red'}}>Cancel</button></Link>
            </div>
            ))}
        </div>
        <div style={{height:'4rem'}}></div>
        <Footer/>
        </>
    )
}

export default OrderConfirm;