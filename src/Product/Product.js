import React, {useEffect} from 'react';
import './Product.css';
//import NavHome from '../../components/NavBar/NavHome';
//import Footer from '../../components/Footer/Footer';
import { Link,useNavigate } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import axios from "axios";

function Product({ id, title, image, price, rating }) {
    // Ensure rating is between 0 and 5
    const validRating = Math.max(0, Math.min(rating, 5));
    const emptyStars = 5 - validRating;

    const navigate = useNavigate();

    useEffect(()=>{

    },[])

    const ratingChanged = (newRating) => {
        axios.put("http://localhost:3002/api/buyer/rate/"+newRating+"/"+id,{
        }).then((res)=>{
            alert(res.data)
        }).catch((err)=>{
            alert(err)
        })
    };

    return (
        <div className="product">
            <div className="product_information">
                <p>{title}</p>
                <p className="product_price">
                    <small>LKR </small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={30}
                        activeColor="#ffd700"
                        value={rating}
                    />,
                </div>
            </div>
            <Link to={`/productDetail/${id}`} style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                <img src={image} alt="" style={{ height: '180px', width: '200px' }} />
            </Link>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
                <Link to={`/productDetail/${id}`}><button className='AddToCart' style={{ width: '8rem', height: '3rem' }}>Add to Cart</button></Link>
                <Link to={`/productDetail/${id}`}><button className='BuyNow' style={{ width: '7rem', height: '3rem', borderRadius: '5px' }}>Buy Now</button></Link>
            </div>
        </div>
    );
}

export default Product;
