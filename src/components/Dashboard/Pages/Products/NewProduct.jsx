import React, { useState } from 'react'
import axios from 'axios';
import Auth from '../../../../Auth';
const NewProduct = props => {
    const auth = Auth
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        desc: "",
        category: "",
        Lstock: 0,
        Mstock: 0,
        XLstock: 0,
        isFeature: "false",
        Image: null,
        Image1: null,
        Image2: null,
        Image1Url:null,
        Image2Url:null,
        Image3Url:null,
        player:""
    });
    const [status, setstatus] = useState("Create");
    const changeData = (e) => {

        switch (e.target.name) {
            case "Image":

                setFormData({ ...formData, [e.target.name]: e.target.files[0] ,Image1Url:URL.createObjectURL(e.target.files[0])})

                break;
            case "Image1":
                setFormData({ ...formData, [e.target.name]: e.target.files[0],Image2Url:URL.createObjectURL(e.target.files[0]) })

                break;
            case "Image2":
                setFormData({ ...formData, [e.target.name]: e.target.files[0] ,Image3Url:URL.createObjectURL(e.target.files[0])})

                break;
            default:
                setFormData({ ...formData, [e.target.name]: e.target.value })

        }
    }
    const handleSumbit = (e) => {
        setstatus("Creating...")
        e.preventDefault()
        console.log(formData)
        let productId = null;
        var data = JSON.stringify({
            "playerName":formData.player,
            "productName": formData.name,
            "productPrice": formData.price,
            "productDesc": formData.desc,
            "isFeature": formData.isFeature,
            "category": formData.category,
        });
        var config = {
            method: 'post',
            url: '/save-new-product',
            headers: {
                'Authorization': 'Bearer ' + auth.getToken(),
                'Content-Type': 'application/json',

            },
            data: data
        };

        axios(config)
            .then(function (response) {
                productId = (response.data);
                data = new FormData();
                data.append('mainImage', (formData.Image));
                data.append('image1', (formData.Image1))
                data.append('image2', (formData.Image2))
                config = {
                    method: 'post',
                    url: '/upload-image/' + productId,
                    headers: {
                        'Authorization': 'Bearer ' + auth.getToken(),
                        'Content-Type': 'application/json',
                    },
                    data: data
                };

                axios(config)
                    .then(function (response) {
                        var axios = require('axios');

                        var data = new FormData();
                        data.append('XL', formData.XLstock);
                        data.append('M', formData.Mstock);
                        data.append('L', formData.Lstock);

                        var config = {
                            method: 'post',
                            url: '/create-product-size/'+productId,
                            headers: {
                                'Authorization': 'Bearer ' + auth.getToken(),
                                
                            },
                            data: data
                        };
                        
                        axios(config)
                            .then(function (response) {
                                setstatus("Product created")
                            })
                            .catch( error=> {
                                console.log(error.response.data);
                            });

                    })
                    .catch(error=> {
                        console.log(error);
                        axios.get("/delete/product/" + productId).then(response=>{
                            setstatus("An error occured")
                        }).catch(response => {
                            console.log(response)
                        })
                    });
            })
            .catch(function (error) {
                console.log(error);
            });


    }
    return (
        <div className='newProduct'>
            <h1 className="newTitle">New product</h1>
            <form className="newForm">
                <div className="newItem">
                    <label htmlFor="">Product Name</label>
                    <input type="text" placeholder='Lakers Jersey' name="name" value={formData.name} onChange={(e) => changeData(e)} />
                </div>
                <div className="newItem">
                    <label htmlFor="">Player Name</label>
                    <input type="text" placeholder='Lebron James' name="player" value={formData.player} onChange={(e) => changeData(e)} />
                </div>
                <div className="newItem">
                    <label htmlFor="">Product Price</label>
                    <input type="number" placeholder='Kes 1500' name="price" value={formData.price} onChange={(e) => changeData(e)} required />
                </div>
                <div className="newItem">
                    <label htmlFor="">Description</label>
                    <input name="desc" id="" type="text" placeholder='A lakers home singlet 2021' value={formData.desc} onChange={(e) => changeData(e)} />
                </div>

                <div className="newItem">
                    <label htmlFor="">Category</label>
                    <select name="category" id="" className='userselect' onChange={(e) => changeData(e)}>
                        <option value=""></option>
                        <option value="SINGLET">Singlet</option>
                    </select>
                </div>
                <div className="newItem">
                    <label htmlFor="">Extra Large Stock</label>
                    <input type="number" placeholder='0' name="XLstock" value={formData.XLstock} onChange={(e) => changeData(e)} />
                </div>
                <div className="newItem">
                    <label htmlFor="">Large Size stock count</label>
                    <input type="number" placeholder='12' name="Lstock" value={formData.Lstock} onChange={(e) => changeData(e)} />
                </div>
                <div className="newItem">
                    <label htmlFor="">Medium Size stock</label>
                    <input type="number" placeholder='10' name="Mstock" value={formData.Mstock} onChange={(e) => changeData(e)} />
                </div>



                <div className="newItem">
                    <label htmlFor="">Feature</label>
                    <select name="isFeature" id="" className='userselect' onChange={(e) => changeData(e)} >
                        <option value="false">False</option>
                        <option value="true">True</option>
                    </select>
                </div>

                <div className="newItem">
                    <label htmlFor="mainImage">Main Image</label>
                    <img src={formData.Image1Url} alt="imagepreview" width={40}  />    
                    <input type="file" name="Image" onChange={(e) => changeData(e)} />
                    <label htmlFor="">Image 1</label>
                    <img src={formData.Image2Url} alt="imagepreview" width={40}  />  
                    <input type="file" name="Image1" id="" onChange={(e) => changeData(e)} />
                    <label htmlFor="">Image 2</label>
                    <img src={formData.Image3Url} alt="imagepreview" width={40}  />  
                    <input type="file" name="Image2" id="" onChange={(e) => changeData(e)} />
                </div>

                <button className="createNew" onClick={(e) => handleSumbit(e)}>{status}</button>
            </form>
        </div>
    )
}



export default NewProduct
