import React, {useEffect} from 'react';
import './Product.css';
//import NavHome from '../../components/NavBar/NavHome';
//import Footer from '../../components/Footer/Footer';
import { Link,useNavigate } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import axios from "axios";

function Product({ id, title, price, rating, image , type}) {
    // Ensure rating is between 0 and 5
    const validRating = Math.max(0, Math.min(rating, 5));
    const emptyStars = 5 - validRating;

    const navigate = useNavigate();

    useEffect(()=>{
        console.log(type)
    })


    const ratingChanged = (newRating) => {
        axios.put("http://localhost:3002/api/buyer/rate/"+newRating+"/"+id,{
        }).then((res)=>{
            alert(res.data)
        }).catch((err)=>{
            alert(err)
        })
    };

    const handleBuyProduct=()=>{

    }

    return (
        <div className="product">
            <div className="product_information">
                <p>{title}</p>
                <p className="product_price">
                    <small>LKR </small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array.from({ length: rating }, (_, i) => (
                        <AiFillStar
                            key={`filled-${i}`}
                            style={{ height: "2rem", width: "2rem", color: "yellow" }}
                        />
                    ))}
                    {Array.from({ length: 5 - rating }, (_, i) => (
                        <AiOutlineStar
                            key={`outline-${i}`}
                            style={{ height: "2rem", width: "2rem" }}
                        />
                    ))}
                </div>
            </div>
            <Link to={`/productDetail/${id}`} style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                <img src={image} alt="" style={{ height: '180px', width: '200px',cursor:'pointer' }} />
            </Link>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
                <Link to={`/productDetail/${id}`}><button className='AddToCart' style={{ width: '8rem', height: '3rem' }}>Add to Cart</button></Link>
                {type  === 'bid' ? <Link to={''}><button className='BuyNow' style={{ width: '7rem', height: '3rem', borderRadius: '5px' }} onClick={handleBuyProduct}>Buy Now</button></Link>:''}
            </div>
        </div>
    );
}

export default Product;
