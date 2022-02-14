import { AirplanemodeActive, CalendarToday, Email, PermIdentity, PhoneAndroid,Publish } from '@material-ui/icons'
import React from 'react'
import { useParams,Link } from 'react-router-dom'
export const UpdateUser = () => {
    const {userId}=useParams();
    return (
        <div class="user">
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
                            <div className="userShowUserName">John doe</div>
                            <div className="userShowStatus">Active</div>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">
                           Account Details 
                        </span>
                        <div className="userShowInfo">
                        <Email className="userShowIcon"/>
                        <span className="userShowInfoName">Email: john@mail.com</span>
                        </div>
                        <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoName">Tel: +254708073370</span>
                        </div>
                        <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoName">Last login: 12/12/2015</span>
                        </div>
                        <div className="userShowInfo">
                        <AirplanemodeActive className="userShowIcon"/>
                        <span className="userShowInfoName">Status: Active</span>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="userCreate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="updateForm">
                        <div className="updateLeft">
                            <div className="updateItem">
                                <label htmlFor="username">Username</label>
                                <input type="name" placeholder='enterName' />
                            </div>
                        
                        
                            <div className="updateItem">
                                <label htmlFor="username">Email</label>
                                <input type="email" placeholder='enterName' />
                            </div>
                        
                        
                            <div className="updateItem">
                                <label htmlFor="username">Phone number</label>
                                <input type="name" placeholder='enterName' />
                            </div>
                            </div>
                        <div className="updateRight">
                            <div className="updateUpload">
                                <img src="" alt="" />
                                <label htmlFor="file">
                                    <Publish className="updateIcon"/>
                                </label>
                                <input type="file" id="file" style={{display:'none',cursor:'pointer'}} />
                            </div>
                            <button className="updateButton">Update </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
