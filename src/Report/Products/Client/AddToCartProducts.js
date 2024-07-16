import React, { useState } from 'react';
import './AddToCartProducts.css';


const ProductDetails = ({ match }) => {
  const [quantity, setQuantity] = useState(1);
  const { productId } = match.params;

  // Fetch product details based on the productId using an API or data source
  const product = {
    id: 1, // Replace with actual product ID
    name: 'Printer', // Replace with actual product name
    price: 10000, // Replace with actual product price
    image: './Pictures/PRINTER.jpeg', // Replace with actual product image URL
    description: 'A printer is a device that produces a hard copy (permanent readable text and/or graphics) of documents stored in electronic form on a computer or other digital device.' // Replace with actual product description
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  }

  const handleAddToCart = () => {
    // Implement add to cart functionality
    // You can use localStorage or a state management library (such as Redux) to manage the cart
    // For example:
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    cart[productId] = {
      product,
      quantity
    };
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const handleBuyNow = () => {
    // Implement buy now functionality
    // You can redirect the user to a checkout page or show a modal to complete the purchase
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Price: LKR{product.price}</p>
      <p>Description: {product.description}</p>
      <label htmlFor="quantity">Quantity:</label>
      <input type="number" id="quantity" name="quantity" value={quantity} onChange={handleQuantityChange} />
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
};

export default ProductDetails;
