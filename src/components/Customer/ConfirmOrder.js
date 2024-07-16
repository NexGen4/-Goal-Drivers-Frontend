import React from 'react'
import './Customer.css'
import NavHome from '../NavBar/NavHome'
import Footer from '../Footer/Footer'

export default function ConfirmOrder() {
  return (<>
   <NavHome/>
    <div className='bg'>
        <div style={{display:'flex', justifyContent:'space-around'}}>

                    <table style={{backgroundColor:'#EDFFF8', borderRadius:'8px', margin:'2rem'}}>
                        <tr>
                            <td>
                                <h3>Product Details</h3>
                            </td>
                        </tr>
                        <tr>
                            <td className='text'>
                                name of the product
                            </td>
                        </tr>
                        <tr>
                            <td className='text'>
                                photo
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <input type="button" name="viewmore" value="View More >>" className='view'/>
                            </td>
                        </tr>
                    </table>

                    <table  style={{backgroundColor:'#EDFFF8', borderRadius:'8px', margin:'2rem'}}>
                        <tr>
                            <td>
                                <h3>Confirm your order</h3>
                            </td>
                        </tr>
                            <tr>
                                <td>
                                    <p className='text'>Product Name </p>
                                </td>
                                <td>
                                    <p className='text'>Laptop</p>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <p className='text'>Bidded Date</p>
                                </td>
                                <td>
                                    <p className='text'>22 / 01 / 2022</p>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <p className='text'>Base Value (LKR)</p>
                                </td>
                                <td>
                                    <p className='text'>Rs.6 000.00</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='text'>You Bidded Price (LKR)</p>
                                </td>
                                <td>
                                    <p className='text'>Rs.6 500.00</p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <input type="cancel" name="cancel" value="Cancel Order" className='no'/>
                                    <input type="submit" name="confirm" value="Confirm Order" className='yes'/>     
                                </td>
                            </tr>
                        </table>
                    
                </div><br/><br/>
                <br/>             
                   
       
           
        <Footer/>
    </div>
    </>
  )
}
