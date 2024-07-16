import React, { useEffect, useState } from 'react';
import './AddToCartProd.css';
import NavHome from '../components/NavBar/NavHome';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import axios from 'axios';


const AddToCartProducts = ({ match }) => {
  const [quantity, setQuantity] = useState(1);
  const [product , setProduct] = useState({})
  const {productId} = 1;

  const{id} = useParams()
  const buyer = {
    id:3,
    email:"medirider2023@gmail.com"
}

useEffect(()=>{
    alert(id)
    axios.get("http://localhost:3002/api/buyer/get_product/"+id,{
    }).then((res)=>{
        console.log(res.data)
        setProduct(res.data)
    }).catch((err)=>{
        alert(err)
    })
},[])

  function addToCart(){
    alert(id)
    axios.post("http://localhost:3002/api/buyer/add_to_cart",{
            "product_ids":[id.id],
            "buyer_id":buyer.id
    }).then((res)=>{
        console.log(res.data)
        alert(res.data)
    }).catch((err)=>{
        alert(err)
    })
}
  // Fetch product details based on the productId using an API or data source
  // const product = {
  //   id: 1, // Replace with actual product ID
  //   name: 'Printer', // Replace with actual product name
  //   price: 10000, // Replace with actual product price
  //   image: './Pictures/PRINTER.jpeg', // Replace with actual product image URL
  //   description: 'A printer is a device that produces a hard copy (permanent readable text and/or graphics) of documents stored in electronic form on a computer or other digital device.' // Replace with actual product description
  // };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  }


  const handleBuyNow = () => {
    // Implement buy now functionality
    // You can redirect the user to a checkout page or show a modal to complete the purchase
  }

  return (<>
  <NavHome/>
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Price: LKR{product.price}</p>
      <p style={{maxWidth:'500px'}}>Description: {product.discription}</p>
      <label htmlFor="quantity">Quantity:</label>
      <input type="number" id="quantity" name="quantity" value={quantity} onChange={handleQuantityChange} />
      <div style={{display:'flex', justifyContent:'space-around', width:'300px', marginTop:'3rem'}}>
      <Link to={`/confirm-order/${quantity}`}> <button onClick={addToCart}>Add to Cart</button></Link>
      <Link to='/samplePayment'> <button onClick={handleBuyNow}>Buy Now</button></Link> 
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AddToCartProducts;
