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

    const handleConfirm = () => {

        navigate('/samplePayment')
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
                                    <button className="confirmBtn" onClick={handleConfirm}>
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