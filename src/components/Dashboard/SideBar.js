import React from "react";
import {Link} from 'react-router-dom'
import{Storefront,AccountBox, LineStyle,MonetizationOn,Timeline,TrendingUp, Receipt, LocalShipping, Category, Money, AttachMoney, Email, Message, Feedback, Lock, Image, DeveloperBoard, Code, PieChart, Assessment, Report} from '@material-ui/icons'
const SideBar=()=>{
    return(
        <div className="sideBar">
            <div className="sideBarWrapper">
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Quick Links</h3>
                    <ul className="sidebarList">
                        <li className="sideBarListName active">
                            <Link to="/admin/dashboard">
                            <LineStyle className="sideBarIcon"/>
                            Home
                            </Link>
                        </li>
                        <li className="sideBarListName ">
                            <Timeline className="sideBarIcon"/>
                            Analytics
                        </li>
                        <li className="sideBarListName">
                            <MonetizationOn className="sideBarIcon"/>
                           <Link to="/admin/users"> Sales</Link>
                        </li>
                    </ul>
                    
                </div>
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Main Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sideBarListName">
                           <Link to='/admin/userslist'>
                            <AccountBox className="sideBarIcon"/>
                            Users
                            </Link>
                        </li>
                        <li className="sideBarListName ">
                            <Link to="/admin/listproducts">
                            <Storefront className="sideBarIcon"/>
                            Products
                            </Link>
                        </li>
                        <li className="sideBarListName">
                            <Link to="/admin/orderslist"><Receipt className="sideBarIcon"/>
                            Orders
                            </Link>
                        </li>
                        <li className="sideBarListName">
                            <LocalShipping className="sideBarIcon"/>
                            Shipping
                        </li>
                        <li className="sideBarListName">
                            <Category className="sideBarIcon"/>
                            Categories
                        </li>
                        <li className="sideBarListName">
                            <AttachMoney className="sideBarIcon"/>
                            Transaction
                        </li>
                    </ul>
                    
                </div>
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Communication</h3>
                    <ul className="sidebarList">
                        <li className="sideBarListName">
                            <Email className="sideBarIcon"/>
                            Email
                        </li>
                        <li className="sideBarListName ">
                            <Message className="sideBarIcon"/>
                            Messages
                        </li>
                        <li className="sideBarListName">
                            <Feedback className="sideBarIcon"/>
                            Feedback
                        </li>
                    </ul>
                    
                </div>
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Setup</h3>
                    <ul className="sidebarList">
                        <li className="sideBarListName">
                            <Lock className="sideBarIcon"/>
                            Credentials
                        </li>
                        <Link to="/admin/staticImages">
                        <li className="sideBarListName ">
                            <Image className="sideBarIcon"/>
                            Static Images
                        </li>
                        </Link>
                        <li className="sideBarListName">
                            <Code className="sideBarIcon"/>
                            Maintenance mode
                        </li>
                    </ul>
                    
                </div>
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Reports</h3>
                    <ul className="sidebarList">
                        <li className="sideBarListName">
                            <PieChart className="sideBarIcon"/>
                            Charts
                        </li>
                        <li className="sideBarListName ">
                            <Assessment className="sideBarIcon"/>
                            Reports
                        </li>
                        <li className="sideBarListName">
                            <Report className="sideBarIcon"/>
                            Logs
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}
export default SideBar;