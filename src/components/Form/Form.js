import React, { useState, useEffect } from 'react'
import './Form.css'
import './Button/Button.css'
import BidForm from './BidForm'
import DirectForm from './DirectForm'
import NavHome from '../NavBar/NavHome'

export default function FormBid() {
  const [showBidForm, setShowBidForm] = useState(false);
  const [showDirectForm, setShowDirectForm] = useState(false);
  const [photos, setPhotos] = useState([]);

  const [productName, setProductName] = useState("")
  const [productCategory, setProductCategory] = useState("")
  const [productDescription, setProductDescription] = useState("")

  const handleYesClick = () => {
    setShowBidForm(true);
    setShowDirectForm(false);
  };

  const handleNoClick = () => {
    setShowBidForm(false);
    setShowDirectForm(true);
  };

  const handleFileChange = (e) => {
    if (photos.length >= 5) {
      alert('You can upload up to 5 photos only');
      return;
    }

      const selectedFiles = Array.from(e.target.files);

      const container = document.getElementById('imageContainer');
      selectedFiles.forEach(file => {
          const reader = new FileReader();
          reader.onload = function(e) {
              const img = document.createElement('img');
              img.src = e.target.result;
              container.appendChild(img);
          };
          reader.readAsDataURL(file);
      });
      setPhotos([...photos, ...selectedFiles]);
  };

  function addProduct(){
    alert("hello")
  }

  return (<>
        <NavHome/>
        <div className='bg'>
          <form method='get' id='productform'>
            <table border="0" className='frm'>
              <tr>
                <th>Product Name</th>
                <td> <input type="text" className='text' id="name" required onChange={(e)=>{setProductName(e.target.value)}}/></td>
              </tr>
              <tr>
                <th>Description </th>
                <td><textarea className='text' id="description" required onChange={(e)=>{setProductDescription(e.target.value)}}></textarea></td>
              </tr>
              <tr>
                <th>Insert Photos of product
                </th>
                <td>
                  <input
                      type="file"
                      accept="image/*"
                      multiple
                      max={5}
                      onChange={handleFileChange}
                  />
                  {/* Display the selected photos */}
                    <div id="imageContainer" className='img-grid'></div>
                </td>
              </tr>
              <tr>
                <th>
                  Do you want to bid your product?
                </th>
                <td>
                  <input
                      type='button'
                      name='Yes'
                      value='Yes'
                      className='yes'
                      onClick={handleYesClick}
                  />
                  <input
                      type='button'
                      name='No'
                      value='No'
                      className='no'
                      onClick={handleNoClick}
                  />
                </td>
              </tr>

              {showBidForm && (
                  <tr>
                    <td colSpan={2}>
                      <BidForm params={productDescription} pname={productName} seller_id={1} files={photos}/>
                    </td>
                  </tr>
              )}
              {showDirectForm && (
                  <tr>
                    <td colSpan={2}>
                      <DirectForm params={productDescription} pname={productName} files={photos}/>
                    </td>
                  </tr>
              )}

            </table>
          </form>
        </div>
      </>
  )
}
