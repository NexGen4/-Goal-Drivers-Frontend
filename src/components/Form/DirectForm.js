import axios from 'axios';
import React, {useState} from 'react'

export default function DirectForm({params , pname, files}) {
    const[unitPrice, setUnitPrice] = useState(0);
    const[quantity, setQuantity] = useState(0);

    const seller = {
        id : 1
    }

    function addProduct_(){
        const formData = new FormData();
        Array.from(files).forEach(file => {
            formData.append('images', file);
        });

        formData.append("name", pname);
        formData.append("description", params);
        formData.append("amount", 1);
        formData.append("seller_id", seller.id);
        formData.append("price", unitPrice);

        axios.post("http://localhost:3002/api/seller/add_selling_product",formData,

        ).then((res)=>{
            alert(res.data)

        }).catch((err)=>{
            alert(err)
        })
    }

    return (
        <div>
            <form method='get'>
                <table border="0" className='frm'>
                    <caption>Direct Selling Details</caption>
                    <tr>
                        <th>Unit Price (LKR)</th>
                        <td>
                            <input type="number" className='text' onChange={(e)=>{setUnitPrice(e.target.value)}}/>
                        </td>
                    </tr>
                    <tr>
                        <th>Quantity</th>
                        <td><input type="number" className='text' required onChange={(e)=>{setQuantity(e.target.value)}}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="reset" name="Cancel" value="Cancel" className='cancel'/>
                            <input type="button" name="Submit" value="Submit" className='submit' onClick={addProduct_}/>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}
