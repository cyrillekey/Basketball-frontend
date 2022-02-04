import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import Auxi from '../hos/Auxi'
import './bootstrap.min.css'
import '../../App.css'
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom'
import axios from 'axios';
import {addProducts, saveAddress} from '../../actions'
import { AccountCircle, Close, Facebook, Home, Instagram, Search,  ShoppingCart, Twitter,AccountCircleRounded, ExitToApp, Favorite, Store, LocalShipping, FavoriteBorderOutlined, InputOutlined } from '@material-ui/icons'
import { GridMenuIcon } from '@material-ui/data-grid'
import Auth from '../../Auth';

let Layout=(props)=>{
    const auth=Auth
    let signedin=false;
    
    

    if(auth.getCookie()){
        signedin=true;
    }
    const [hide, sethide] = useState(false);
    
    const dispatch = useDispatch();
    const total=useSelector(state=>state.total)
    const getData=()=>{
        axios.get("/for-sale").then(response=>{
            let data=response.data
                dispatch(addProducts({data:data}));
        }).catch(response=>{
            console.log("error when fetching address")
        })
    }
    const getAddress=()=>{
        axios.get("/adress-by-user/"+localStorage.getItem("user")).then(
            response=>{
                dispatch(saveAddress({address:response.data[0]}))
                
            }
            
        ).catch(response=>{
            dispatch(saveAddress({address:[]}))
        })
    }
    useEffect(()=>{
        getData();
        if(localStorage.getItem("accept")){
            sethide(true);
        }

    },[])
     const [toggle, settoggle] = useState({
         type:"",
         index:1,
         indexClose:-1
     })
    
    return(
        <Auxi>
            {/* <Modal/> */}
            <div className="super_container">
        <header className="header trans_300">
           
            <div className="main_nav_container">
                <div className="container">
                    <div className="row navitems">
                        <div className="col-lg-12 text-right">
                            <div className="logo-container">
                                <Link to="/">Sports<span>Jerseys</span></Link>
                            </div>
                            <nav className="navbar">
                                <ul className="navbar_menu">
                                    <li>
                                        <Link to="/" className='link'>Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='link'>Singlets</Link>
                                    </li>
                                    <li>
                                        <Link to="/login" className='link'>Shorts</Link>
                                    </li>
                                    <li>
                                        <a to="" className='link'>Bundles</a>
                                    </li>
                                    {!signedin?
                                    <Auxi>
                                    <li>
                                        <Link to="/signup" className='link' style={{color:"red"}}>Signup</Link>
                                    </li>
                                    <li>
                                        <Link to="/login" className='link' style={{color:"purple"}}>Login</Link>
                                    </li></Auxi>
                                    :""}

                                </ul>
                                <ul className="navbar_user">
                                    <li id="search"><a href="/"><i arial-hidden="true"><Search/></i></a></li>
                                    <li className="checkout">
                                        <Link to="/cart" id="cart" >
                                            <i ><ShoppingCart/></i> <span id="checkout_items" className="checkout_items">
                                            { total }
                                            </span>
                                        </Link>
                                    </li>
                                    {signedin?<li><Link to="/account"><i><AccountCircleRounded/></i></Link></li>:""}
                                </ul>
                                <div className="hamburger_container"  >
                                    <i className="" aria-hidden="true" id="bars" ><GridMenuIcon className="grid" onClick={()=>settoggle({indexClose:999,type:'active'})}/></i>
                                </div>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>

        </header>


        <div className="fs_menu_overlay" style={{zIndex:toggle.indexClose}}>
            <div className={" hamburger_menu "+toggle.type} >
                <div className="hamburger_close"  >
                       <Close onClick={()=>settoggle({index:-1,type:""})}/>
                      
                </div>
                <div className="hamburger_menu_content text-right" onClick={()=>settoggle({index:-1,type:""})}>
                    {
                        signedin?
                    <ul className="menu_top_nav">
                        <li className={"menu_item"}><Link to="/" className='link'> <Home/> home</Link></li>
                        <li className="menu_item"><Link to="/products" className='link'><Store/> All products</Link></li>
                        <li className="menu_item"><Link to="" className='link'><FavoriteBorderOutlined/> Saved Products</Link></li>
                        <li className="menu_item"><Link to="" className='link'><LocalShipping/> Orders</Link></li>
                        <li className="menu_item"><Link to="/account" className='link'><AccountCircle/> account</Link></li>
                        <li className="menu_item"><Link to="/"className='link' onClick={(e)=>{e.preventDefault();auth.logout()}}><ExitToApp/>Logout </Link></li>    
                    </ul>:
                    <ul className="menu_top_nav">
                    <li className={"menu_item"}><Link to="/" className='link'> <Home/> Home</Link></li>
                    <li className="menu_item"><Link to="/products" className='link'><Store/> All products</Link></li>
                    <li className="menu_item"><Link to="/tracking" className='link'><LocalShipping/> Track Order</Link></li>
                    <li className="menu_item"><Link to="/login"className='link' ><InputOutlined/> Login</Link></li>    
                    </ul>
                    }
                </div>
            </div>
        </div>
        <div className='mainbody'>
          
        {props.children}
        </div>

        <footer className="footer-section">
            <div className="container">
                <div className="footer-cta pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="cta-text">
                                    <h4>Find us</h4>
                                    <span>8615,30100 Eldoret</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-phone"></i>
                                <div className="cta-text">
                                    <h4>Call us</h4>
                                    <span>+254708073370</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="far fa-envelope-open"></i>
                                <div className="cta-text">
                                    <h4>Mail us</h4>
                                    <a href="mailto:cyrilleotieno7@gmail.com"><span>cyrilleotieno7@gmail.com</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                <Link to="/">Sports<span>Jerseys</span></Link>
                                </div>
                                <div className="footer-text">
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                    elit,Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <a href="#"><Facebook/></a>
                                    <a href="#"><Twitter/></a>
                                    <a href="#"><Instagram /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/signup">Signup</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/tracking">Track Order</Link></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Our Services</a></li>
                                    <li><a href="#">Expert Team</a></li>
                                    <li><a href="#">Contact us</a></li>
                                    <li><Link to="/faq">Frequently Asked Questions</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address"/>
                                        <button><i className="fab fa-telegram-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className="copyright-text">
                                <p>Copyright &copy; {new Date().getFullYear()}, All Right Reserved <a href="">Cyrille</a></p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <div className="footer-menu">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><a href="#">Terms</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><Link to="/faq">Faq</Link></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className={hide?"cookie_box hide":"cookie_box"} id="cookie_box">
      <img src="https://www.svgrepo.com/show/30963/cookie.svg"/>
      <h3>Cookie Policy</h3>
      <p>This site can store cookies on your website and disclose information in accrdance with our cookie policy <a href="#">Learn more</a></p>
      <button id="activeBtn"  onClick={()=>{
          localStorage.setItem("accept",true);
          sethide(!hide);
      }} >Accept</button>
    </div>
    </div>
            
        </Auxi>
    );
}
export default Layout;