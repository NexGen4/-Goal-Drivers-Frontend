import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './FeedbackStyles.css';
import axios from 'axios';

export default function Feedback() {

    const[isClickedStar1, setIsClickedStar1] = useState(false);
    const[isClickedStar2, setIsClickedStar2] = useState(false);
    const[isClickedStar3, setIsClickedStar3] = useState(false);
    const[isClickedStar4, setIsClickedStar4] = useState(false);
    const[isClickedStar5, setIsClickedStar5] = useState(false);
    const[feedback , setFeedback] = useState("")

    const product = {
        id : 10
    }

    const user = {
        id : 2
    }

    const submit=()=>{

        let rate = 0
        if (isClickedStar1) {
            rate += 1
        }
        if (isClickedStar2) {
            rate += 1
        }
        if (isClickedStar3) {
            rate += 1
        }
        if (isClickedStar4) {
            rate += 1
        }
        if (isClickedStar5) {
            rate += 1
        }

        axios.put("http://localhost:3002/api/buyer/rate/"+rate+"/"+product.id,{
        }).then((res)=>{

            axios.post("http://localhost:3002/api/buyer/addFeedback",{
                product_id:product.id,
                comment:feedback,
                user_id:user.id
            }).then((res)=>{
                alert(res.data)
            }).catch((err)=>{
                alert(err)
            })
        }).catch((err)=>{
            alert(err)
        })
    }

    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <form method='get' id='productorm'>
                <h2>How was your experience?</h2>
                <br/>
                <p>How satisfied are you with the overall experience on our product?</p>
                <br/>

                <FaStar size={40} className={`rating-star ${isClickedStar1 ? 'clicked' : ''}`} onClick={()=>setIsClickedStar1(!isClickedStar1)}/>
                <FaStar size={40} className={`rating-star ${isClickedStar2 ? 'clicked' : ''}`} onClick={()=>setIsClickedStar2(!isClickedStar2)}/>
                <FaStar size={40} className={`rating-star ${isClickedStar3 ? 'clicked' : ''}`} onClick={()=>setIsClickedStar3(!isClickedStar3)}/>
                <FaStar size={40} className={`rating-star ${isClickedStar4 ? 'clicked' : ''}`} onClick={()=>setIsClickedStar4(!isClickedStar4)}/>
                <FaStar size={40} className={`rating-star ${isClickedStar5 ? 'clicked' : ''}`} onClick={()=>setIsClickedStar5(!isClickedStar5)}/>

                <br/>
                <textarea value={feedback} onChange={e=>setFeedback(e.target.value)} style={{minWidth:'20rem'}}></textarea>
                <br/>
                <input type="button" name="Submit" value="Submit" className='submit' style={{backgroundColor:'#030640', padding:'1rem', minWidth:'8rem'}} onClick={submit}/>
            </form>
        </div>
    )
}
