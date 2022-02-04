import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import Auxi from '../hos/Auxi';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from './ProductCard'
import { addToCart } from '../../actions';

const SingleProduct = () => {
    const dispatch = useDispatch();
    const add=(e)=>{
        
        dispatch(addToCart({id:e.target.id,url:'',price:'',qty:parseInt(qty),size:size,sizeId:sizeid}))
    }

    const product=useParams("productId").productId
    const [singleProduct,setSingleProduct]=useState([]);
    const [mainImage,setMainImage]=useState();
    const [qty,setQty]=useState(1);
    const [sizeid, setsize] = useState(1);
    const [size,setSizeName]=useState("M");
    let images=singleProduct.images?singleProduct.images.map(image=>(<img src={image.name} key={image.name} className="img" alt="#"/>)):null
    useEffect(()=>{
        axios.get("/get-product-by-id/"+product).then(response=>{
            setSingleProduct(response.data)
            setMainImage(response.data.imageUrl)
        }).catch(response=>{
            console.log(response)
        })
    },[])
    const handleImageChange=(e)=>{
        setMainImage(e.target.src)
    }
    let sizes=singleProduct.list_sizes?singleProduct.list_sizes.map(size=>(<option key={size.product_sizes_id} value={size.product_sizes_id}>{size.size.size_symbol}</option>)):null
     const handleSizeChange=(e)=>{
         setsize(e.target.value)
         setSizeName(e.target.innerText)
     }
    return (
        <Auxi>
            
            <section className="item-details section" style={{marginBottom:"80px"}}>
        <div className="container" >
            <div className="top-area" >
              <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="product-images">
                            <main id="gallery">
                                <div className="main-img">
                                    <img src={mainImage} id="current" alt="#" style={{objectFit:"contain"}} effect='blur' />
                                </div>
                                <div className="images" onClick={(e)=>handleImageChange(e)}>
                                    {
                                        images
                                        }
                                    
                                </div>
                            </main>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="product-info">

        

                            <h2 className="title">{singleProduct.productName}</h2>
                            <p className="category"><i className="lni lni-tag"></i> Type<a href="">{singleProduct.category}</a></p>
                            <h3 className="price">KES {singleProduct.productPrice}<span>KES {singleProduct.productPrice*1.25}</span></h3>
                            <p className="info-text">{singleProduct.productDesc}</p>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="form-group color-option">
                                        <label className="title-label" htmlFor="size">Choose color</label>
                                        <div className="single-checkbox checkbox-style-1">
                                            <input type="checkbox" id="checkbox-1"/>
                                            <label htmlFor="checkbox-1"><span></span></label>
                                        </div>
                                        <div className="single-checkbox checkbox-style-2">
                                            <input type="checkbox" id="checkbox-2"/>
                                            <label htmlFor="checkbox-2"><span></span></label>
                                        </div>
                                        <div className="single-checkbox checkbox-style-3">
                                            <input type="checkbox" id="checkbox-3"/>
                                            <label htmlFor="checkbox-3"><span></span></label>
                                        </div>
                                        <div className="single-checkbox checkbox-style-4">
                                            <input type="checkbox" id="checkbox-4"/>
                                            <label htmlFor="checkbox-4"><span></span></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="form-group">
                                        <label htmlFor="color">Size</label>
                                        
                                        <select className="form-control" id="color" onChange={(e)=>handleSizeChange(e)}>
                                            {
                                                sizes
                                            }
                                            
                                            
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="form-group quantity">
                                        <label htmlFor="color">Quantity</label>
                                        <select className="form-control" onChange={(e)=>setQty(e.target.value)}>
                                            
                                            <option value={1} >1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-content">
                                <div className="row align-items-end">
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="button cart-button">
                                            <button id={singleProduct.product_id} className="btn add-cart" onClick={(e)=>add(e)} style={{width: "100%"}}>Add to Cart</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="wish-button">
                                            <button className="btn"><i className="lni lni-reload"></i> Compare</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="wish-button">
                                            <button className="btn"><i className="lni lni-heart"></i> To Wishlist</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-details-info">
                <div className="single-block">
                    <div className="row">
                        
                        <div className="col-lg-6 col-12">
                            <div className="info-body">
                                
                                <h4>Shipping Options:</h4>
                                <ul className="normal-list">
                                    <li><span>Courier:</span> 2 - 4 days, $22.50</li>
                                    <li><span>Local Shipping:</span> up to one week, $10.00</li>
                                    <li><span>UPS Ground Shipping:</span> 4 - 6 days, $18.00</li>
                                    <li><span>Unishop Global Export:</span> 3 - 4 days, $25.00</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h2 style={{flex:1,textAlign:'center'}}>Similar products</h2>
        <div className="similarProducts">
        <ProductCard name={singleProduct.productName} pid={singleProduct.product_id} price={singleProduct.productPrice} category={singleProduct.category} url={singleProduct.imageUrl} />
        </div>
    </section>
        </Auxi>
            
        
    )
}


export default SingleProduct;

