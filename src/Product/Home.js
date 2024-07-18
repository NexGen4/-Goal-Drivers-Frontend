import React, {Products, useEffect, useState} from 'react'
import Product from './Product'
import './Home.css'
import heading from '../Pictures/heading.jpg';
import NavHome from '../components/NavBar/NavHome';
import Footer from '../components/Footer/Footer';
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';

function Home() {

    const params = useParams();
    const [products , setProducts] = useState([])

    useEffect(()=>{

        if (params.type === 'selling') {
            axios.get("http://localhost:3002/api/buyer/get_selling_products/", {}).then((res) => {

                setProducts(res.data)
            }).catch((err) => {
                alert(err)
            })

        }else {
            axios.get("http://localhost:3002/api/buyer/get_bid_products/", {}).then((res) => {

                setProducts(res.data)
            }).catch((err) => {
                alert(err)
            })
        }
    },[params.type])

  return (
        <>
            <NavHome/>

            <div className="home">

                <img className="home_picture" src={heading} alt="Home picture" />

                    <div className='home_pinfo'>
                        {products.length!=0 ? products.map((product , index)=> {
                            return (
                                <Product
                                    id = {product.product_id}
                                    title = {product.name}
                                    price = {product.price}
                                    rating = {product.rate}
                                    type={params.type}
                                    image = {product.image.split(', ')[0]}
                                />
                            )
                        }) : <h6>No product found</h6>}}

                    </div>

                {/* <div className='home_pinfo'>
                    <Product
                        id="1234"
                        title="Key Board"
                        price={15000.00}
                        rating={4}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMgiB5nidJ058pK8fBf7ySD6XhvQ5-S7nVQ&usqp=CAU"
                    />

                    <Product
                        id="1235"
                        title="Key board"
                        price={8500.00}
                        rating={4}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMgiB5nidJ058pK8fBf7ySD6XhvQ5-S7nVQ&usqp=CAU"
                    />

                    <Product
                        id="1236"
                        title="Key Board"
                        price={3500.00}
                        rating={4}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMgiB5nidJ058pK8fBf7ySD6XhvQ5-S7nVQ&usqp=CAU"
                    />

                    <Product
                        id="1236"
                        title="Key Board"
                        price={3500.00}
                        rating={4}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMgiB5nidJ058pK8fBf7ySD6XhvQ5-S7nVQ&usqp=CAU"
                    />


                </div> */}

                <Footer/>

            </div>
        </>
    )
}

export default Home;