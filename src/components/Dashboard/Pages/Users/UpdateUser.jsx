import { AirplanemodeActive, CalendarToday, Email, PermIdentity, PhoneAndroid,Publish } from '@material-ui/icons'
import React,{useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import Auth from '../../../../Auth'
import axios from 'axios'
export const UpdateUser = () => {
    const {userId}=useParams();
    const [user,setUser]=useState([]);
    useEffect(()=>{
       let isMounted=true;
        let config={
            method:'get',
            url:`/find-user-by-id/${userId}`,
            headers:{
                'Authorization':`Bearer ${Auth.getToken()}`
            }
        }
        axios(config).then(response=>{
            if(isMounted) setUser(response.data)
        }).catch(response=>{
            console.log(response.response)
        })
        return ()=>{isMounted=false}
    },
    []);
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">
                    Edit user
                </h1>
                <Link to="/newUser">
                <button className="createUser">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="" alt="" className="userShowImage" />
                        <div className="userShowTopTitle">
                            <div className="userShowUserName">{user.username}</div>
                            <br/>
                            <div className="userShowStatus">{user.accountTypes}</div>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">
                           Account Details 
                        </span>
                        <div className="userShowInfo">
                        <Email className="userShowIcon"/>
                        <span className="userShowInfoName">Email: {user.email}</span>
                        </div>
                        <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoName">Tel: {user.phoneNumber}</span>
                        </div>
                        <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoName">Last login: {new Date(user.lasLogin).toLocaleDateString}</span>
                        </div>
                        <div className="userShowInfo">
                        <AirplanemodeActive className="userShowIcon"/>
                        <span className="userShowInfoName">Status: {user.accountStatus}</span>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="userCreate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="updateForm">
                        
                        <div className="updateRight">
                            
                            <button className="updateButton">Make Admin </button>
                            <button className="updateButton">View Orders </button>
                            <button className="updateButton">View Transactions </button>
                            <button className="updateButton">Delete user </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
