import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import Auxi from '../hos/Auxi';
import ProductCard from '../Products/ProductCard';
import {useSelector} from 'react-redux'
import { Carousel } from 'react-bootstrap';
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Auth from '../../Auth';
import axios from 'axios';
const Homepage=(props)=>{
    const auth=Auth
    const products=useSelector(state=>state.products);
    const [home, sethome] = useState({
        banner_url:"",
        banner_small:"",
        carousel_image:[],
        categories:[]
    });
    useEffect(() => {
      axios.get("/home-page").then(reponse=>{
          sethome(reponse.data)
      }).catch(error=>{
          console.log("error")
      })
        
    
    }, [products]);
    
    
        return(
            <Auxi>
                
                <div className="main_slider" style={{backgroundImage:`url(${home.banner_url})`}}>
<div className="container fill_hight">
    <div className="row align-items-center fill_hight">
        <div className="col">
            <div className="main_slider_content">
                <h6>Spring/summer collections</h6>
                <h1>Get upto 30%of on new arrivals</h1>
                <div className="red_button shop_now_button"><Link to="/products">Shop now</Link ></div>
            </div>
        </div>
    </div>
</div>
</div>
<div className="new_arrivals">
    <h2>new arrivals</h2>
</div>


    <section className="hero-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-12 custom-padding-right">
                    <div className="slider-head">
                    
                        <Carousel className="hero-slider" indicators={false}>
                            {
                                home.carousel_image.map(item=>(
                                    <Carousel.Item className="single-slider"
                                style={{backgroundImage:`url(${item.imageUrl})`}} key={item.product_id}>
                                <div className="content">
                                    <h2><span>No restocking fee </span>
                                        
                                        <Link to={"/product/"+ item.product_id}  
                                        >{item.productName}</Link>
                                    </h2>
                                    <p style={{color:"white",textTransform:"capitalize"}}>{item.productDesc}</p>
                                    <h3><span>Now Only</span> Ksh {item.productPrice}</h3>
                                    <div className="button" onClick={(e)=>{
                                        e.preventDefault();
                                    }}>
                                        <Link to={"/product/"+ item.product_id} className="btn" 
                                        >Shop Now</Link>
                                        
                                    </div>
                                </div>
                            </Carousel.Item>
                                ))
                            }
                            
                            
                            
                        </Carousel>
                        
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="row">
                        <div className="col-lg-12 col-md-6 col-12 md-custom-padding">

                            <div className="hero-small-banner"
                                style={{backgroundImage:`url(${home.banner_small})`}}>
                                <div className="content">
                                    <h2>
                                        <span>New line required</span>
                                        iPhone 12 Pro Max
                                    </h2>
                                    <h3>ksh 1259.99</h3>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-12 col-md-6 col-12">

                            <div className="hero-small-banner style2">
                                <div className="content">
                                    <h2>Weekly Sale!</h2>
                                    <p>Saving up to 50% off all online store items this week.</p>
                                    <div className="button">
                                        <a className="btn" href="product-grids.html">Shop Now</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


        <section className ="feature-products">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center feature-title">
                        <h2>FEATURED PRODUCTS</h2>
                        <a className="feature-active" href="/">BEST SELLER</a> | <a href="/">NEW ARRIVAL</a> | <a href="/">MOST WANTED</a> 
                    </div>

                </div>
            </div>           
            </section>
  <div className="container " >
    <div className="row homep" >

            {
                products.slice(0,4).map(product=>(
                    
                    <ProductCard key={product.product_id} name={product.productName} pid={product.product_id} price={product.productPrice} category={product.category} url={product.imageUrl}
                    sizeId={product.list_sizes[0].product_sizes_id} sizeName={product.list_sizes[0].size.size_symbol}
                    />
                    
                ))
                
            }
            
    
    </div>
</div>
    <div className="more_div">
        <Link to="/products" className='more'>More Product</Link>
    </div>
    <div className="container" style={{marginBottom:'60px'}}>
    
    <div className="d-flex justify-content-center align-items-center mt-8"> <h1 className="" style={{fontWeight:600,fontSize:'36px',textAlign:'center'}}>OUR CATEGORIES</h1> </div>
    <div className="d-flex justify-content-center mt-3"> <span className="text text-center" style={{fontSize:'18px'}}>Finding Best Products Now<br/> in Your Fingertips</span> </div>
    <div className="row mt-2 g-4">
        {
            
            home.categories.map(item=>(
                <div className="col-md-3" key={item}>
                <div className="card p-2">
                    <div className="d-flex justify-content-between align-items-center p-2">
                        <div className="flex-column lh-1 imagename"> {item} </div>
                        <div> <LazyLoadImage src="https://i.imgur.com/2gvGwbh.png" height="100" width="100" alt="product" effect='blur'/> </div>
                    </div>
                </div>
            </div>
                    
            ))
        }
        
        
        
        
    </div>
</div>
        <div id="hot-deal" className="section">

			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="hot-deal">
							<ul className="hot-deal-countdown">
								<li>
									<div>
										<h3>02</h3>
										<span>Days</span>
									</div>
								</li>
								<li>
									<div>
										<h3>10</h3>
										<span>Hours</span>
									</div>
								</li>
								<li>
									<div>
										<h3>34</h3>
										<span>Mins</span>
									</div>
								</li>
								<li>
									<div>
										<h3>60</h3>
										<span>Secs</span>
									</div>
								</li>
							</ul>
							<h2 className="text-uppercase">hot deal this week</h2>
							<p>New Collection Up to 50% OFF</p>
							<Link className="primary-btn cta-btn" to="/products">Shop now</Link>
						</div>
					</div>
				</div>

			</div>

		</div>
        
            

        <h1 style={{flex:1,textAlign:'center',margin:'40px'}}>Why Shop with us</h1>
        <section className="shipping-info">
            
            <div className="container">
                <ul>
                  
                    <li>
                        <div className="media-icon">
                            <i className="lni lni-delivery"></i>
                        </div>
                        <div className="media-body">
                            <h5>Free Shipping</h5>
                            <span>On orders Ksh 5000</span>
                        </div>
                    </li>
                  
                    <li>
                        <div className="media-icon">
                            <i className="lni lni-support"></i>
                        </div>
                        <div className="media-body">
                            <h5>24/7 Support.</h5>
                            <span>Live Chat Or Call.</span>
                        </div>
                    </li>
                  
                    <li>
                        <div className="media-icon">
                            <i className="lni lni-credit-cards"></i>
                        </div>
                        <div className="media-body">
                            <h5>Online Payment.</h5>
                            <span>Secure Payment.  </span>
                        </div>
                    </li>
                  
                    <li>
                        <div className="media-icon">
                            <i className="lni lni-reload"></i>
                        </div>
                        <div className="media-body">
                            <h5>Easy Return.</h5>
                            <span>Hassle Free Shopping.</span>
                        </div>
                    </li>
                </ul>
            </div>

            
        </section>
        <h2 style={{flex:1,textAlign:"center",}}>Size Chart</h2>

        <div className="size-chart">
            <div className="page">
	<div className="chart inches">
		<table className="layout display responsive-table">
			<colgroup className=""></colgroup>
			<colgroup className=""></colgroup>
			<colgroup className=""></colgroup>
			<colgroup className=""></colgroup>
			<colgroup className=""></colgroup>
			<colgroup className=""></colgroup>
			<colgroup className=""></colgroup>
			<thead>
				<tr>
					<th className="empty">
                    </th>
					<th>S</th>
					<th>M</th>
					<th>L</th>
					<th>XL</th>
					<th>XXL</th>
					<th>3XL</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="bodypart">Numeric</td>
					<td className="measurement">40</td>
					<td className="measurement">44</td>
					<td className="measurement">48</td>
					<td className="measurement">52</td>
					<td className="measurement">56</td>
					<td className="measurement">58</td>
				</tr>

				<tr className="zebra">
					<td className="zebra bodypart">Chest(in.)</td>
					<td className="measurement">35-37.5</td>
					<td className="measurement">37.5-51</td>
					<td className="measurement">41-44</td>
					<td className="measurement">44-48.5</td>
					<td className="measurement">48.5-53.5</td>
					<td className="measurement">53.5-58</td>
				</tr>
				<tr className="zebra">
					<td className="bodypart">Length(in.)</td>
					<td className="measurement">27.7</td>
					<td className="measurement">28.1</td>
					<td className="measurement">28.9</td>
					<td className="measurement">29.6</td>
					<td className="measurement">30.4</td>
					<td className="measurement">31.2</td>
				</tr>

			</tbody>
		</table>
	</div>
</div>
{
               //console.log(typeof(products[0])=='undefined'?"mango":"apple")
                  
            }

            </div>
            </Auxi>
        );
}
export default Homepage;

    
    
    
