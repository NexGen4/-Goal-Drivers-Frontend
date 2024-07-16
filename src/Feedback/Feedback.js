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
    id : 8
  }

  const user = {
    id : 3
  }

  function addFeedback(){
    axios.post("http://localhost:3002/api/buyer/addFeedback",{
      product_id:product.id,
      comment:feedback,
      user_id:user.id
    }).then((res)=>{
      alert(res.data)
    }).catch((err)=>{
      alert(err)
    })
  }

  function rate(){
    let rateCount = 0
     rateCount+= isClickedStar1?1:0
     rateCount+= isClickedStar2?1:0
     rateCount+= isClickedStar3?1:0
     rateCount+= isClickedStar4?1:0
     rateCount+= isClickedStar5?1:0
     alert(rateCount)
    axios.get("http://localhost:3002/api/buyer/rate/4/"+product.id,{
    }).then((res)=>{
      if(feedback!=""){
        addFeedback()
      }
      else{
        alert(res.data)
      }
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
            <FaStar size={40} className={`rating-star ${isClickedStar3 ? 'clicked' : ''}`}onClick={()=>setIsClickedStar3(!isClickedStar3)}/> 
            <FaStar size={40} className={`rating-star ${isClickedStar4 ? 'clicked' : ''}`} onClick={()=>setIsClickedStar4(!isClickedStar4)}/> 
            <FaStar size={40} className={`rating-star ${isClickedStar5 ? 'clicked' : ''}`} onClick={()=>setIsClickedStar5(!isClickedStar5)}/>
            {/* <p>Did you find what you were wants?</p>
            <input type={'radio'} name="yes" value="Yes"/> Yes
            <input type={'radio'} name="no"value="no"/> No */}
            <br/>
            <textarea value={feedback} onChange={e=>setFeedback(e.target.value)} style={{minWidth:'20rem'}}></textarea>
            <br/>
            <input type="submit" name="Submit" value="Submit" className='submit' style={{backgroundColor:'#030640', padding:'1rem', minWidth:'8rem'}} onClick={rate}/>
        </form>
    </div>
  )
}
