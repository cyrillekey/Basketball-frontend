import React from 'react'
import Auxi from '../hos/Auxi';
import './Dashboard.css'
import SideBar from './SideBar';
import Topbar from './Topbar';
import Home from './Pages/Home'
import { UserList } from './Pages/Users/UserList';
const DashBoard=(props)=> {
    return (
        <Auxi>
            <Topbar/> 
            <div className='container-d'>
            <SideBar/>
           
           {props.children}
            </div> 
        </Auxi>
    )
}
export default DashBoard;