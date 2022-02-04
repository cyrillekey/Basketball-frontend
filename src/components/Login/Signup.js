import React,{useState,useEffect} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Auxi from '../hos/Auxi';
import axios from 'axios';
import ModalB from '../ModalBoxes/Modal';
import ReactGA from 'react-ga' 
import Auth from '../../Auth';
import { Facebook, Instagram, Mail, RemoveRedEye, Twitter } from "@material-ui/icons";
const Signup = (props) => {
    const auth=Auth
    const navigate=useNavigate();
    useEffect(() => {
        
    if(auth.isAuthenticated()){
        navigate("/")
    }
        
    }, [])
    
        const [loginForm,setLoginFrom]=useState({
            email:"",
            password:"",
            password2:"",
            emailValid:false,
            passwordValid:false,
            ready:true,
            passwordMatch:false,
            username:"",
            usernameValid:false
        });
        const [status,setStatus]=useState({
            status:"Sign in",
            show:false,
            title:"",
            body:""
        });
        const [error,setError]=useState({
            emailError:"",
            passwordError:"",
            matchError:""
        });
        const handleFormLogin=(e)=>{
            checkValidity(e.target.name,e.target.value)
            
             if(loginForm.emailValid && loginForm.passwordValid && loginForm.passwordMatch && loginForm.usernameValid ){
                 console.log("here")
                setLoginFrom({...loginForm,[e.target.name]:e.target.value,ready:false})
             }else{
                setLoginFrom({...loginForm,[e.target.name]:e.target.value,ready:true})
             }
    
    
        }
        const [toggle, setToggle] = useState(true);
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
                        loginForm.password=false
                        error.passwordError="Password is to short"
                    }
                    break;
                    case 'password2':
                        if(value!=loginForm.password){
                            loginForm.passwordMatch=false
                        error.matchError="Passwords do not match"
                        }else{

                            loginForm.passwordMatch=true
                            error.matchError=""
                        }
                        break
                    case 'username':
                        if(value.length>=4){
                            loginForm.usernameValid=true
                        }else{
                            loginForm.usernameValid=false
                        }
                        break;
                default:
                    break;
            }
        }
        const submitSignup=(e)=>{
            e.preventDefault()
            setStatus({...status,status:"Signing up..."})
            var data = JSON.stringify({
                "username": loginForm.username,
                "email": loginForm.email,
                "password": loginForm.password,
                "accountTypes": "CUSTOMER",
              });
              var config = {
                method: 'post',
                url: '/register-user',
                headers: {  
                  'Content-Type': 'application/json', 
                },
                data : data
              };
              axios(config).then(response=>{
                  navigate("/login")
                  setStatus({...status,show:true,body:"Proceed to login",title:"Success!",status:"Sign in"})

              }).catch(response=>{
                  if(response.response){
                      let code=response.response.status
                      if(code=="405"){
                      setStatus({...status,show:true,body:response.response.data.message+" already Registered!",title:"Signup Error!",status:"Sign in"})

                      }
                  }else{
                      setStatus({...status,show:true,body:"Something went wrong!",title:"Server Error!",status:"Sign in"})
                  }
              })
        }
        return(
            <Auxi>
			<ModalB title={status.title} show={status.show} body={status.body} handleClose={()=>{setStatus({...status,show:false}) 	}}/>
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
									<li><a href="/fe" className="facebook"><Facebook/> Facebook</a></li>
									<li><a href="/fed" className="twitter"><Twitter/> Twitter</a></li>
									<li><a href="/fre" className="google"><Instagram/> Instagram</a></li>
								</ul>
								<div className="or-login clearfix">
									<span>Or</span>
								</div>
								<div className="form-container">
									<form method="POST">
                                    <div className="form-group form-fg">
											<input type="text" name="username" value={loginForm.username} className="input-text" placeholder="User name" onChange={(e)=>handleFormLogin(e)} autoComplete="off"/>
											<i className="fa fa-envelope"></i>
										</div>
										<div className="form-group form-fg">
											<input type="email" name="email" value={loginForm.email} className="input-text" placeholder="Email address" onChange={(e)=>handleFormLogin(e)} autoComplete="off"/>
											<i className="fa fa-envelope"><Mail/></i>
										</div>
										<div className="form-group form-fg">
											<input type={toggle ? "password":"Text"} name="password" value={loginForm.password} className="input-text" placeholder="Password" onChange={(e)=>handleFormLogin(e)}/>
											<i className="fa fa-envelope"><RemoveRedEye onClick={()=>setToggle(!toggle)}/></i>
										</div>
                                        <div className="form-group form-fg">
											<input type={toggle ? "password":"Text"} name="password2" value={loginForm.password2} className="input-text" placeholder="Repeat Password" onChange={(e)=>handleFormLogin(e)}/>
											<i className="fa fa-envelope"><RemoveRedEye onClick={()=>setToggle(!toggle)}/></i>
										</div>
										<div className="checkbox clearfix">
											<div className="form-check checkbox-fg">
												<input type="checkbox" name="" id="" className="form-check-input" />
												<label htmlFor="" className="form-check-label">Remember me</label>
											</div>
											<a href="s">Forgot password</a>
										</div>
										<div className="form-group mt-2">
											<button type="submit" className="btn-md btn-fg btn-block" disabled={loginForm.ready} onClick={(e)=>submitSignup(e)}>{status.status}</button>
										</div>
									</form>
								</div>
								<p>Already have an account? <Link to="/login" className="linkButton"> Login</Link></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Auxi>
        );
    
}
export default Signup;