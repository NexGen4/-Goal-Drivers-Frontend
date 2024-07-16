import React from 'react';
import './Product.css';
//import NavHome from '../../components/NavBar/NavHome';
//import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Product({ id, title, image, price, rating }) {
    // Ensure rating is between 0 and 5
    const validRating = Math.max(0, Math.min(rating, 5));
    const emptyStars = 5 - validRating;

    return (
        <div className="product">
            <div className="product_information">
                <p>{title}</p>
                <p className="product_price">
                    <small>LKR </small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array.from({ length: validRating }, (_, i) => (
                        <AiFillStar key={`filled-${i}`} style={{ height: '2rem', width: '2rem', color: 'yellow' }} />
                    ))}
                    {Array.from({ length: emptyStars }, (_, i) => (
                        <AiOutlineStar key={`outline-${i}`} style={{ height: '2rem', width: '2rem' }} />
                    ))}
                </div>
            </div>
            <Link to={`/productDetail/${id}`}><img src={image} alt="" style={{ height: '180px', width: '200px' }} /></Link>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
                <Link to={`/addToCart/${id}`}><button className='AddToCart' style={{ width: '8rem', height: '3rem' }}>Add to Cart</button></Link>
                <Link to='/samplePayment'><button className='BuyNow' style={{ width: '7rem', height: '3rem', borderRadius: '5px' }}>Buy Now</button></Link>
            </div>
        </div>
    );
}

export default Product;
