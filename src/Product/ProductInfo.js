import React, { useState, useEffect } from "react";
import "./ProductInfo.css";
import NavHome from "../components/NavBar/NavHome";
import Footer from "../components/Footer/Footer";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";

const ProductInfo = () => {
    const [product, setProduct] = useState({
        product_id: 1,
        name: " HP DeskJet 2722 All-in-One Printer with Wireless Printing",
        price: 1233,
        rate: 1,
    });

    const {id} = useParams()

    // Ensure rating is between 0 and 5
    const validRating = Math.max(0, Math.min(product.rate, 5));
    const emptyStars = 5 - validRating;

    const [qty, setQty] = useState(1);

    //APIto fetch product details
    useEffect(()=>{
        /*axios.get("http://localhost:3002/api/seller/get_products/"+seller.id,{

        }).then((res)=>{
            console.log(res.data)
            setProduct(res.data)
        }).catch((err)=>{
            alert(err)
        })*/

        axios.get("http://localhost:3002/api/buyer/get_product/"+id,{
        }).then((res)=>{
            console.log(res.data)
            setProduct(res.data)
        }).catch((err)=>{
            alert(err)
        })
    },[])

    const handleIncrement = () => {
        setQty(qty + 1);
    };

    const handleDecrement = () => {
        if (qty - 1 > 0) {
            setQty(qty - 1);
        } else {
            alert("The minimum quantity is one.");
        }
    };

    const handleBuyNow = () => {

    };

    const handleAddToCart = () => {
       console.log(product)
       console.log(qty)
        axios.post("http://localhost:3002/api/buyer/add_to_cart",{
            product_ids:[product.product_id],
            buyer_id:2,
            seller_id:product.seller_id,
            quantity:qty,
        }).then((res)=>{
            console.log(res.data)
            alert(res.data)
        }).catch((err)=>{
            alert(err)
        })
    };

    return (
        <>
            <NavHome />
            <div className="flex-center">
                <div className="card">
                    <h5>{product.name}</h5>
                    <div className="flex">
                        <img
                            src="https://picsum.photos/200/300"
                            alt="product_image"
                            className="img"
                        />
                        <div className="flex column">
                            <h6>{product.name}</h6>
                            <div className="rating">
                                {Array.from({ length: validRating }, (_, i) => (
                                    <AiFillStar
                                        key={`filled-${i}`}
                                        style={{ height: "2rem", width: "2rem", color: "yellow" }}
                                    />
                                ))}
                                {Array.from({ length: emptyStars }, (_, i) => (
                                    <AiOutlineStar
                                        key={`outline-${i}`}
                                        style={{ height: "2rem", width: "2rem" }}
                                    />
                                ))}
                            </div>
                            <h3>LKR {product.price}</h3>
                            <div className="flex center">
                                <p>Quantity</p>
                                <div className="flex center">
                                    <button className="qtyBtn" onClick={handleDecrement}>
                                        -
                                    </button>
                                    <p>{qty}</p>
                                    <button className="qtyBtn" onClick={handleIncrement}>
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="flex center">
                                <button className="buyBtn" onClick={handleBuyNow}>Buy Noww</button>
                                <button className="addBtn" onClick={handleAddToCart}> Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductInfo;