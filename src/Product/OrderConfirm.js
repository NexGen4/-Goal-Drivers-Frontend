import React, {useEffect, useState} from "react";
import "./OrderConfirm.css";
import NavHome from "../components/NavBar/NavHome";
import Footer from "../components/Footer/Footer";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

const OrderConfirm = () => {
    const [products, setProducts] = useState([]);
    const [buyer, setBuyer] = useState(2);

    const {id,qty} = useParams()
    const navigate= useNavigate()

    //APIto fetch product details
    useEffect(()=>{
        loadCart();
    },[])

    const loadCart=()=>{
        axios.get("http://localhost:3002/api/buyer/get_cart/"+buyer,{
        }).then((res)=>{
            setProducts(res.data)
        }).catch((err)=>{
            alert(err)
        })
    }

    const handleConfirm = (text,id,total, cartId) => {
        axios.delete("http://localhost:3002/api/buyer/remove_cart/" +cartId, {}).then((res) => {

            axios.get("http://localhost:3002/api/seller/notify/" +id+"/"+ text, {}).then((res) => {

                alert(res.data)

                let membership = '';
                let discount = 0;

                if (total >= 100000) {
                    membership = "platinum";
                    discount = 20;
                } else if (total >= 50000) {
                    membership = "gold";
                    discount = 15;
                } else if (total >= 10000) {
                    membership = "silver";
                    discount = 10;
                }

                if (membership && discount) {
                    alert(`Congratulations! You have received ${membership} Membership and ${discount}% discount for your order. Thank you.`);
                    navigate('/samplePayment')
                }

                loadCart()
            }).catch((err) => {
                alert(err)
            })
        }).catch((err) => {
            alert(err)
        })
    };

    const handleCancel = () => {
        navigate('/')
    };

    return (
        <>
            <NavHome />

            <div className='flex-center' style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
                {products.map((cart,index)=>(
                    <div className="card" key={index}>
                        <div style={{display:"flex", justifyContent:"space-evenly"}}>
                            <div>
                                <img src={cart.product.image} alt="product_image" style={{width:300, height:300}} />
                            </div>

                            <div className="flex column">
                            <div className="flex column">
                                <h6>{cart.product.name}</h6>
                                <div className="flex center">
                                    <p>Rs. {cart.product.price}</p>
                                    <p>Qty: {cart.qty}</p>
                                </div>
                            </div>

                            <div className="flex column">
                                <h5>Total : {cart.product.price * qty}</h5>
                                <div className="flex center">
                                    <button className="confirmBtn" onClick={()=>{handleConfirm("A buyer has purchased Product id : "+cart.product.product_id,cart.product.product_id,cart.product.price*cart.qty, cart.cart_id)}}>
                                        Confirm
                                    </button>
                                    <button className="cancelBtn" onClick={handleCancel}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </>
);
};

export default OrderConfirm;