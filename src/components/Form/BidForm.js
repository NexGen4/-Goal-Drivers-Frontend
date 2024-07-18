import axios from "axios";
import { useState } from "react"
import React from 'react'

export default function BidForm({params , pname ,seller_id, files}) {
    const[baseValue, setBaseValue] = useState(0);
    const[bidTime, setBidTime] = useState(0);

    function addProduct_(){

        const seller = {
            id : 1
        }

        const formData = new FormData();
        Array.from(files).forEach(file => {
            formData.append('images', file);
        });

        formData.append("name", pname);
        formData.append("description", params);
        formData.append("amount", 1);
        formData.append("seller_id", seller.id);
        formData.append("base_price", baseValue);
        formData.append("duration", bidTime);

        axios.post(
            "http://localhost:3002/api/seller/add_bid_product",
            formData,
        ).then((res)=>{
            alert(res.data)

        }).catch((err)=>{
            alert(err)
        })
    }

    return (
        <div className="form-container">
            <form className="form" >
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
