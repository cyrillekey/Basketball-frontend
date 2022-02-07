import React,{useState,useEffect} from "react";
import Auxi from '../hos/Auxi';
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import ModalB from '../ModalBoxes/Modal'
import Auth from "../../Auth";
import { Facebook, Instagram, Twitter,Mail,RemoveRedEyeRounded } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { saveUser } from "../../actions";
const Login=(props)=>{
	const auth=Auth
	const [errorModal,SetErrorModal]=useState({
		show:false,
		title:"",
		body:" ",
		message:"Login"
	});
	const Navigate=useNavigate();
	const dispatch=useDispatch();
	
    useEffect(() => {
        
    if(auth.isAuthenticated()){
        Navigate("/")
    }
        
    }, [])
	const handleLogin=(e)=>{
		e.preventDefault()
		SetErrorModal({...errorModal,message:"Loging in"})
		var data = JSON.stringify({
			"email": loginForm.email,
			"password": loginForm.password
		  });
		  var config = {
			method: 'POST',
			url: '/login',
			headers: { 
			  
			  'Content-Type': 'application/json', 
			},
			data : data
		  };
		  axios(config)
.then(response=> {
	const d=new Date();
	d.setTime(d.getTime()+(10*60*60*1000))
  document.cookie=("token="+response.data.token+";expires="+d.toUTCString());
  localStorage.setItem("user",response.data.userid)
  dispatch(saveUser({user:response.data.user}))
  Navigate(-1)
})
.catch(response=>{
	if (response.response){
   let code=(response.response.status)
   if(code=="405"){
	errorModal.show="true";
	SetErrorModal({show:true,title:"Login Error",body:"User Does not Exist!",message:"Login"})
	console.log(errorModal);
   }else if(code===400){
	
	SetErrorModal({show:true,title:"Login Error!",body:"Wrong Credentials!",message:"Login"})
	console.log(errorModal);	
}
   else{
	SetErrorModal({show:true,title:"Login Error",body:"Something Went very wrong",message:"Login"})
	console.log(errorModal);   
}}else{
	SetErrorModal({show:true,title:"Server Error",body:"Something Went very wrong",message:"Login"})
   }

   
});

	}
	const [loginForm,setLoginFrom]=useState({
		email:"",
		password:"",
		emailValid:false,
		passwordValid:false,
		ready:true
	});
	const [toggle, setToggle] = useState(true);
	const [error,setError]=useState({
		emailError:"",
		passwordError:"",
	});
	const handleFormLogin=(e)=>{
		checkValidity(e.target.name,e.target.value)
		
		 if(loginForm.emailValid && loginForm.passwordValid){
			setLoginFrom({...loginForm,[e.target.name]:e.target.value,ready:false})
		 }else{
			setLoginFrom({...loginForm,[e.target.name]:e.target.value,ready:true})
		 }


	}
	const checkValidity=(name,value)=>{
		switch (name) {
			case 'email':
				let pattern=/[a-z0-9!#$%&'*+/=?^_~{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9]*[a-z0-9])?/;
				if(pattern.test(value)){
					loginForm.emailValid=true
					error.emailError=""
				}else{
					loginForm.emailValid=false
				error.emailError="Invalid email address"
				
				}
				break;
			case 'password':
				if(value.length>=6)
				{
					loginForm.passwordValid=true
					error.passwordError=""
				}else{
					loginForm.passwordValid=false
					error.passwordError="Password is to short"
				}
				break;
			default:
				break;
		}
	}
	
    return(
		<Auxi>
			<ModalB title={errorModal.title} show={errorModal.show} body={errorModal.body} handleClose={()=>{SetErrorModal({...errorModal,show:false}) 	}}/>
			<div className="login-fg">

				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-8 col-lg-7 col-md-12 bg" style={{backgroundImage:'url(https://github.com/cyrillekey/basketball-django/blob/main/static/project-290-P9xpYfUpoZI-unsplash.jpg?raw=true)'}}>
							<div className="info">
								<h1>SportsJersey</h1>
								<p>Your number one spot for quality NBA merch.</p>
							</div>
						</div>
						<div className="col-xl-4 col-lg-5 col-md-12 login">
							<div className="login-section">
								<div className="logo clearfix">
									<a href="/e" >Welcome</a>
								</div>
								<h3>Sign in to your account</h3>
								<ul className="social">
									<li><a href="/oauth2/authorization/google" className="facebook"><Facebook/> Facebook</a></li>
									<li><a href="/fed" className="twitter"><Twitter/> Twitter</a></li>
									<li><a href="/fre" className="google"><Instagram/> Instagram</a></li>
								</ul>
								<div className="or-login clearfix">
									<span>Or</span>
								</div>
								<div className="form-container">
									<form method="POST">
										<div className="form-group form-fg">
											<input type="email" name="email" value={loginForm.email} className="input-text" placeholder="Email address" onChange={(e)=>handleFormLogin(e)} autoComplete="off"/>
											<i className="fa fa-envelope"> <Mail/> </i>
										</div>
										<div className="form-group form-fg">
											<input type={toggle ? "password":"Text"} name="password" value={loginForm.password} className="input-text" placeholder="Password" onChange={(e)=>handleFormLogin(e)}/>
											<i className="fa fa-envelope"><RemoveRedEyeRounded onClick={()=>setToggle(!toggle)}/></i>	
										</div>
										<div className="checkbox clearfix">
											<div className="form-check checkbox-fg">
												<input type="checkbox" name="" id="" className="form-check-input" />
												<label htmlFor="" className="form-check-label">Remember me</label>
											</div>
											<a href="s">Forgot password</a>
										</div>
										<div className="form-group mt-2">
											<button type="submit" className="btn-md btn-fg btn-block" disabled={loginForm.ready} onClick={(e)=>handleLogin(e)}>{errorModal.message}</button>
										</div>
									</form>
								</div>
								<p>Dont have an account? <Link to="/signup" className="linkButton"> Register</Link></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Auxi>

);
}
export default Login;