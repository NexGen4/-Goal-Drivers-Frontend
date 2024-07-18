import React, { useState, useEffect } from "react";
import "./ProductInfo.css";
import NavHome from "../components/NavBar/NavHome";
import Footer from "../components/Footer/Footer";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link, useParams,useNavigate } from 'react-router-dom';
import axios from "axios";
import ReactStars from "react-rating-stars-component";

const ProductInfo = () => {
    const [buyer, setBuyer]=useState(2)
    const [product, setProduct] = useState({
        product_id: 1,
        name: " HP DeskJet 2722 All-in-One Printer with Wireless Printing",
        price: 1233,
        rate: 1,
    });

    const params = useParams()

    const navigate = useNavigate();

    // Ensure rating is between 0 and 5
    const validRating = Math.max(0, Math.min(product.rate, 5));
    const emptyStars = 5 - validRating;

    const [qty, setQty] = useState(1);
    const [rate, setRate] = useState(0);

    //APIto fetch product details
    useEffect(()=>{

        axios.get("http://localhost:3002/api/buyer/get_product/"+params.id,{
        }).then((res)=>{
            console.log(res.data)
            setProduct(res.data)
            axios.get("http://localhost:3002/api/buyer/rate/"+params.id,{}).then((res)=>{
                    console.log(res.data.rating)
                    setRate(res.data.rating)
                }).catch((err)=>{
                    alert(err)
                })
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

    const handleOnClick = () => {
        navigate(`/confirm-order/${product.product_id}/${qty}`);
    };


    const handleAddToCart = () => {
       console.log(product)
       console.log(qty)
        axios.post("http://localhost:3002/api/buyer/add_to_cart",{
            product_ids:[product.product_id],
            buyer_id:buyer,
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
                    <div style={{display:"flex", justifyContent:"space-evenly"}}>
                        <div>
                            <img
                                src={product.image}
                                alt="product_image"
                                style={{width:300, height:300}}
                            />
                        </div>
                        <div className="flex column">
                            <h6>{product.name}</h6>
                            <div style={{marginBottom:5}}>

                                {Array.from({ length: rate }, (_, i) => (
                                    <AiFillStar
                                        key={`filled-${i}`}
                                        style={{ height: "2rem", width: "2rem", color: "yellow" }}
                                    />
                                ))}
                                {Array.from({ length: 5 - rate }, (_, i) => (
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
                                <button className="buyBtn">Buy Now</button>
                                <button className="addBtn" onClick={handleOnClick}> Add to Cart</button>
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