import React, { useEffect, useState } from 'react';
import { FaRegBell, FaRegEnvelope, FaUserCircle, FaRegComment, FaRegMoneyBillAlt, FaDatabase } from 'react-icons/fa'
import axios from 'axios';

const ProductDetails = () => {

    const [products , setProducts] = useState([])
    const seller = {
        id:2,
        email:"didevindi1999@gmail.com"
    }
    useEffect(()=>{
        axios.get("http://localhost:3002/api/seller/get_products/"+seller.id,{

        }).then((res)=>{

            setProducts(res.data)
        }).catch((err)=>{
            alert(err)
        })
    },[])

    function get_report(id){
        axios.get(`http://localhost:3002/api/seller/get_report/${id}/${seller.email}`,{

        }).then((res)=>{

            alert(res.data)
            window.location.reload()
        }).catch((err)=>{
            alert(err)
        })
    }
    
    return (<div style={{display:'flex'}}>
    <div style={{width:'90%'}}>
        <div>
            <nav class="navbar navbar-light bg-info">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">Seller Dashboard</span>
                    <div class="my-2 my-lg-0"><a href=""><span class="navbar-brand mb-4 nav-icons "><FaRegEnvelope /></span></a>
                        <a href=""><span class="navbar-brand mb-4 nav-icons "><FaRegBell /></span></a></div>
                </div>
            </nav>
        
            {/* <button type="button" class="btn btn-success">Submit</button>
            <button type="button" class="btn btn-warning">Save Draft</button>
            <button type="button" class="btn btn-danger">Delete</button> */}

        </div>
        <div class="card w-100 mt-5">
                <div class="card-body">
                    <h5 class="card-title">Your Products</h5>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">Description</th>
                                <th scope="co1">Amount</th>
                                <th scope="co1"></th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {products.length!=0&&products.map((product , index)=>(
                                <>
                                <tr>
                                <th scope="row">{index+1}</th>
                                <td>{product.name}</td>
                                <td>{product.type}</td>
                                <td>{product.discription}</td>
                                <td>{product.amount}</td>
                                <td><button type="button" class="btn btn-success" onClick={()=>get_report(product.product_id)}>Generate Report</button></td>
                            </tr>
                            </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProductDetails;
