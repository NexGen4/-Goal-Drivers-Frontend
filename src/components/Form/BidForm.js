import axios from "axios";
import { useState } from "react"
import React from 'react'

export default function BidForm({params , pname}) {
  const[baseValue, setBaseValue] = useState(0);
  const[bidTime, setBidTime] = useState(0);
  const seller = {
    id : 2
  }
  function addProduct_(){
      axios.post("http://localhost:3002/api/seller/add_bid_product",{
          name:pname,
          description:params,
          amount:1,
          seller_id:seller.id,
          base_price:baseValue,
          duration:bidTime
      }).then((res)=>{
        console.log(res.data)
        alert(res.data)
      }).catch((err)=>{
        alert(err)
      })
  }

  function check_(){
    alert("hello")
    console.log(pname)
    console.log(params)
  }
  return (

    <div>
        
        <form method='get'>
        <table border="0" >
          <caption>Bid Details</caption>
          <tr>
          <th>Base Value (LKR)</th>
            <td>
              <input type="number" className='text' onChange={(e)=>{setBaseValue(e.target.value)}}/>
            </td>
          </tr>
          <tr>
            <th>Bid Time Duration</th>
            <td><input type="number" className='text' required onChange={(e)=>{setBidTime(e.target.value)}}/></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="reset" name="Cancel" value="Cancel" className='cancel'/>
              <input type="submit" name="Submit" value="Submit" className='submit' onClick={addProduct_}/>
            </td>
          </tr>
        </table>
      </form>
    </div>
  )
}
