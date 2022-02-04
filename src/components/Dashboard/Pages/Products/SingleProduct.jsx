import { AirplanemodeActive, CalendarToday, Email, PermIdentity, PhoneAndroid,Publish, PublishOutlined } from '@material-ui/icons'
import React from 'react'
import Chart from '../../Charts/Chart'
import { useParams,Link } from 'react-router-dom'
import data from '../../Charts/Dummy'
export const SingleProduct = () => {
    const {userId}=useParams();
    return (
        <div className="productDashboard">
            <div className="productTitleContainer">
                <h1>Product</h1>
                <Link to="/newProduct">
                <button className="productAdd">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                <Chart data={data} title="Sales performance" dataKey={"sales"}/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4375000/ff_4375583-dc0fb54e7b3d14c59776_full.jpg&w=340" alt="" className="productInfoImage" />
                        <span className="productName">Lakers Jersey</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">12</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Stock</span>
                            <span className="productInfoValue">1544</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Price</span>
                            <span className="productInfoValue">Kes 450</span>
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

                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="" alt="" className="productUploadImage" />
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
