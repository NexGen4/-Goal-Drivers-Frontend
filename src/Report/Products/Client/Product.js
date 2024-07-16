import React from 'react'
import './Product.css'


//Display product details
function Product({id,title,image,price,rating}){
    return(
        <div className="product">
            <div className="product_information">
                <p>{title}</p>
                <p className="product_price">
                    <small>LKR</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>{
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>*</p>
                    ))
                }  
                </div>
            </div>
                <img src={image} alt=""/>
                /*<button className='AddToCart'>Add to Cart</button>
                
                    
                
                <button className='BuyNow'>Buy Now</button>
        </div>
    )
}

export default Product;