import { AirplanemodeActive, CalendarToday, Email, PermIdentity, PhoneAndroid,Publish, PublishOutlined } from '@material-ui/icons'
import React,{useEffect,useState} from 'react'
import Chart from '../../Charts/Chart'
import { useParams } from 'react-router-dom'
import data from '../../Charts/Dummy'
import axios from 'axios'
export const SingleProduct = () => {
    const {product}=useParams();
    console.log(product);
    const [SingleProduct, setSingleProduct] = useState([]);
    useEffect(() => {
        axios.get("/get-product-by-id/"+product).then(response=>{
            setSingleProduct(response.data)
            
        }).catch(response=>{
            console.log(response)
        })
      
    }, [])
    
    return (
        <div className="productDashboard">
            <div className="productTitleContainer">
                <h1>Product</h1>
                
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                <Chart data={data} title="Sales performance" dataKey={"sales"}/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={SingleProduct.imageUrl} alt="" className="productInfoImage" />
                        <span className="productName">{SingleProduct.productName}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{SingleProduct.product_id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Upload date</span>
                            <span className="productInfoValue">{new Date(SingleProduct.uploadDate).toLocaleDateString()}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Price</span>
                            <span className="productInfoValue">Kes {SingleProduct.productPrice}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Category</span>
                            <span className="productInfoValue">{SingleProduct.category}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Last purchase</span>
                            <span className="productInfoValue">{SingleProduct.lastPurchase}</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form action="" className="productForm">
                    <div className="productFormLeft">
                        <label htmlFor="">ProductName</label>
                        <input type="text" placeholder='Apple pie' />
                        <label htmlFor="">Stock</label>
                        <input type="text" placeholder='145' />
                        <label htmlFor="">Price</label>
                        <input type="text" placeholder='Kes 1450' />
                        <label htmlFor="">Price</label>
                        <input type="text" placeholder='Kes 1450' />
                        <label htmlFor="">Price</label>
                        <input type="text" placeholder='Kes 1450' />

                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            
                            <label htmlFor="file">Image file
                            <PublishOutlined/>
                            </label>
                            <input type="file"  id="file" style={{display:"none"}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
