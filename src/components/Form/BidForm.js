import axios from "axios";
import { useState } from "react"
import React from 'react'

export default function BidForm({params , pname ,seller_id}) {
  const[baseValue, setBaseValue] = useState(0);
  const[bidTime, setBidTime] = useState(0);
  
  function addProduct_(){
    console.log("ddfsfg")

      console.log(params)
      console.log(pname)
      console.log(baseValue)
      console.log(bidTime)
      console.log(seller_id)

      // axios.post("http://localhost:3002/api/seller/add_bid_product",{
      //     name:pname,
      //     description:params,
      //     amount:1,
      //     seller_id:seller_id,
      //     base_price:baseValue,
      //     duration:bidTime
      // }).then((res)=>{
      //   console.log(res.data)
      //   alert(res.data)
      // }).catch((err)=>{
      //   alert(err)
      // })
  }

  function check_(){
    alert("hello")
    console.log(pname)
    console.log(params)
  }
  return (
    <div className="form-container">
      <form className="form">
        <table className="table">
          <caption className="caption">Bid Details</caption>
          <tbody>
            <tr className="table-row">
              <th>Base Value (LKR)</th>
              <td className="table-cell">
                <input 
                  type="number" 
                  className="input" 
                  onChange={(e) => setBaseValue(e.target.value)} 
                  required 
                />
              </td>
            </tr>
            <tr className="table-row">
              <th>Bid Time Duration</th>
              <td className="table-cell">
                <input 
                  type="number" 
                  className="input" 
                  onChange={(e) => setBidTime(e.target.value)} 
                  required 
                />
              </td>
            </tr>
            <tr className="table-row">
              <td className="table-cell" colSpan="2" align="right">
                <input type="reset" value="Cancel" className="button" />
                <input type="button" value="Submit" className="button" onClick={addProduct_} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
