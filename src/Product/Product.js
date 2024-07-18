import React, {useEffect} from 'react';
import './Product.css';
//import NavHome from '../../components/NavBar/NavHome';
//import Footer from '../../components/Footer/Footer';
import { Link,useNavigate } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import axios from "axios";

function Product({ id, title, price, rating, image , type}) {
    const navigate = useNavigate();
    // Ensure rating is between 0 and 5
    const validRating = Math.max(0, Math.min(rating, 5));
    const emptyStars = 5 - validRating;


    const handleBuyProduct=(text,id,total)=>{

        if (type === 'bid'){
            navigate(`/customer-bid/${id}`)
        }else {

            axios.get("http://localhost:3002/api/seller/notify/" + id + "/" + text, {}).then((res) => {
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
                }


            }).catch((err) => {
                alert(err)
            })
        }
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
                {type  !== 'bid' ? <Link to={`/productDetail/${id}`}><button className='AddToCart' style={{ width: '8rem', height: '3rem' }}>Add to Cart</button></Link>:''}
                <button className='BuyNow' style={{ width: '7rem', height: '3rem', borderRadius: '5px' }} onClick={()=>{handleBuyProduct("A buyer has purchased Product id : "+id,id,price*1)}}>Buy Now</button>
            </div>
        </div>
    );
}

export default Product;
