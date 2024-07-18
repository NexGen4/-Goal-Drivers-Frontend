import React, {useEffect, useState} from "react";
import "./OrderConfirm.css";
import NavHome from "../components/NavBar/NavHome";
import Footer from "../components/Footer/Footer";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

const OrderConfirm = () => {
    const [product, setProduct] = useState('');

    const {id,qty} = useParams()
    const navigate= useNavigate()

    //APIto fetch product details
    useEffect(()=>{
        axios.get("http://localhost:3002/api/buyer/get_product/"+id,{
        }).then((res)=>{
            console.log(res.data)
            setProduct(res.data)
        }).catch((err)=>{
            alert(err)
        })
    },[])

    const handleConfirm = (text,id,total) => {
        axios.get("http://localhost:3002/api/seller/notify/" +id+"/"+ text, {}).then((res) => {
            console.log(res.data)
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
            <div className="flex-center">
                <div className="card">
                    <div style={{display:"flex", justifyContent:"space-evenly"}}>
                        <div>
                            <img src={product.image} alt="product_image" style={{width:300, height:300}} />
                        </div>
                        <div className="flex column">
                            <div className="flex column">
                                <h6>{product.name}</h6>
                                <div className="flex center">
                                    <p>Rs. {product.price}</p>
                                    <p>Qty: {qty}</p>
                                </div>
                            </div>

                            <div className="flex column">
                                <h5>Total : {product.price * qty}</h5>
                                <div className="flex center">
                                    <button className="confirmBtn" onClick={()=>{handleConfirm("A buyer has purchased Product id : "+product.product_id,product.product_id,product.price*qty)}}>
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
            </div>
            <Footer />
        </>
    );
};

export default OrderConfirm;