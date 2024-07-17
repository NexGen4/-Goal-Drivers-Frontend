import React, { useEffect, useState } from 'react'
import './seller.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Seller() {
  const [products , setProducts] = useState([])
    const [bids , setBids] = useState([])
    const [bidView , setBidView] = useState([])
    const [productsState , setProductState] = useState(true)
    const seller = {
        id : 2
      }
    useEffect(()=>{
        axios.get("http://localhost:3002/api/seller/get_products/"+seller.id,{
            }).then((res)=>{
              console.log(res.data)
              setProducts(res.data)
            }).catch((err)=>{
              alert(err)
            })
    },[])

  return (
    <div className='bg'>
        <div>
          <Link to='/seller-bid'> <input type="button" name="addProduct" value="Add Product" className='add'/></Link> 
            <input type="button" name="requestReport" value="Request Report" className='report'/>
        </div>

        <div>
            <table className='frm'>
                {products.length!=0&&products.map((product)=>(
                  <>
                  <tr>
                    <th>Date</th>
                    <th>{product.name}</th>
                    <th>00{product.product_id}</th>
                    <th>{product.amount}</th>
                    <th>Status</th>
                </tr>
                  </>
                ))}

                <tr>
                    <td></td>
                </tr>
            </table>
        </div>
    </div>
  )
}
