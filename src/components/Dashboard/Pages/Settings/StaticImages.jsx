import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './StaticImages.css'
import axios from 'axios';
import Auth from '../../../../Auth';
const StaticImages = () => {
  const [image,setImage]=useState([]);
  const [imageUrls,setImageUrls]=useState(null);
  useEffect(()=>{
    if (image.length <1) return;
    setImageUrls(URL.createObjectURL(image[0]))
  },[image]);
  const saveImage=(e,type)=>{
    e.preventDefault()
    let data = new FormData()
    data.append('file',image[0])
    axios({
      method:'post',
      url:`/admin/uploadimage/${type}`,
      headers:{
        'Authorization':`Bearer ${Auth.getToken()}`
      },
      data:data

    }).then(res=>{
      console.log(res)
    }).catch(res=>{
      console.log(res)
    })
  }
  return (
    <div className='staticImages'>
      <div>
      <h2>Upload Banner Image</h2>
      <form id="file-upload-form" className="uploader">
        <input id="file-upload" type="file" name="fileUpload" accept="image/*"  onChange={(e)=>setImage(e.target.files)} />

        <label htmlFor="file-upload" id="file-drag">
          <img id="file-image" src={imageUrls} alt="Preview" className="" />
          <div id="start">
            <i className="fa fa-download" aria-hidden="true"></i>
            <div>Select a file or drag here</div>
            <div id="notimage" className="hidden">Please select an image</div>
            <span id="file-upload-btn" className="btn btn-primary">Select a file</span>
          </div>
          <div id="response" className="">
            <div id="messages"></div>
            
          </div>
          
        </label>
        <input type="submit" value="Upload" className="btn btn-primary show" onClick={(e)=>saveImage(e,"banner_url")} />
      </form>
      
      </div>
    </div>
  )
}

export default StaticImages