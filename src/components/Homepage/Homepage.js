import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import Auxi from '../hos/Auxi';
import ProductCard from '../Products/ProductCard';
import {useSelector} from 'react-redux'
import { Carousel } from 'react-bootstrap';
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import axios from 'axios';
import snapback from '../../images/snap.jpg';
import singlet from '../../images/singlet.png';
import short from '../../images/short.png';
import jersey from '../../images/jersey.jpeg';
import small from '../../images/singlet.jpeg';
const Homepage=(props)=>{
    
    const products=useSelector(state=>state.products);
    const [expiryTime, setExpiryTime] = useState("12 may 2022 15:30:25");
    const [countdownTime, setCountdownTime]= useState(
        {
            countdownDays:'',
            countdownHours:'',
            countdownMinutes:'',
            countdownSeconds:''
        }
    );
     const countdownTimer=()=>{
     
         const timeInterval= setInterval(() => {
           const countdownDateTime = new Date(expiryTime).getTime(); 
           const currentTime = new Date().getTime();
           const remainingDayTime = countdownDateTime - currentTime;
           const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
           const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
           const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
           const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);
      
           const runningCountdownTime={
              countdownDays: totalDays,
              countdownHours: totalHours,
              countdownMinutes: totalMinutes,
              countdownSeconds: totalSeconds
           }
        
           setCountdownTime(runningCountdownTime);
      
           if (remainingDayTime < 0) {
              clearInterval(timeInterval);
              setExpiryTime(false);
             }
      
          }, 1000);
     }
      
     useEffect(() => {
         countdownTimer();
     });
    const [home, sethome] = useState({

        banner_url:"https://placeholder.pics/svg/1920",
        banner_small:"https://placeholder.pics/svg/1920",
        carousel_image:[],
        categories:[]
    });
    useEffect(() => {
        let isMounted=true
      axios.get("/home-page").then(reponse=>{
        if (isMounted)  sethome(reponse.data)
      }).catch(error=>{
          console.log("error")
      })
        
    return (()=>{isMounted=false})
    }, [products]);
    
    
        return(
            <Auxi>
                
                <div className="main_slider" style={{backgroundImage:`url(${'https://res.cloudinary.com/dftgy3yfd/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1650882314/project-290-P9xpYfUpoZI-unsplash_ftxsmf.webp'})`}}>
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
                                style={{backgroundImage:`url(${small})`}}>
                                <div className="content">
                                    <h2>
                                        <span style={{
                                            
                                            fontWeight:'600'
                                        }}>Hall of Famers</span>
                                        Hardwood classic jerseys
                                    </h2>
                                    <h3>ksh 1500</h3>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-12 col-md-6 col-12">

                            <div className="hero-small-banner style2">
                                <div className="content">
                                    <h2>Clearance Sale!</h2>
                                    <p>Saving up to 50% off all Clearance sales.</p>
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
                    
                    <ProductCard key={product.product_id} name={product.productName} player={product.playerName} pid={product.product_id} price={product.productPrice} category={product.category} url={product.imageUrl}
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
            
            home.categories.map((item)=>{
                var picture="";
                if(item==="SNAPBACK"){
                    picture=snapback;
                }else if(item==="SINGLET"){
                    picture=singlet;
                }else if(item==="SHORT"){
                    picture=short;
                }else{
                    picture=jersey;
                }
                return(
                <div className="col-md-3" key={item}>
                <div className="card p-2">
                    <div className="d-flex justify-content-between align-items-center p-2">
                        <div className="flex-column lh-1 imagename"> {item} </div>
                        <div> <LazyLoadImage src={picture} height="120" width="120" alt={item} effect='blur'/> </div>
                    </div>
                </div>
            </div>
                );
            })
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
										<h3>{countdownTime.countdownDays}</h3>
										<span>Days</span>
									</div>
								</li>
								<li>
									<div>
										<h3>{countdownTime.countdownHours}</h3>
										<span>Hours</span>
									</div>
								</li>
								<li>
									<div>
										<h3>{countdownTime.countdownMinutes}</h3>
										<span>Mins</span>
									</div>
								</li>
								<li>
									<div>
										<h3>{countdownTime.countdownSeconds}</h3>
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

    
    
    
