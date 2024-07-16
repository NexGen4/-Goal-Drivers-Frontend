import React from 'react'
import './OrderConfirm.css';


//Display product details
function Product({id,title,image,price,rating}){
    return(
        <div className="OrderConfirm">
            <div className='Product1'>
                <div className="product_information">
                    <p>{title}</p>
                    <p className="product_price">
                        <small>LKR</small>
                        <strong>{price}</strong>
                    </p>
                    
                </div>
                    <img src={image} alt=""/>

                    <button className='Confirm'>Confirm</button>
                    
                    <button className='Cancel'>Cancel</button>
            </div>

            <div className='Product2'>
                <div className="product_information">
                    <p>{title}</p>
                    <p className="product_price">
                        <small>LKR</small>
                        <strong>{price}</strong>
                    </p>  
                    
                </div>
                    <img src={image} alt=""/>

                    <button className='Confirm'>Add to Cart</button>
                    
                    <button className='Cancel'>Buy Now</button>
            </div>
        </div>
    )
}

export default AddToCart;