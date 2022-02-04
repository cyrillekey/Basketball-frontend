import React from "react";
import {Language, NotificationsNone, Settings } from '@material-ui/icons'
import Auxi from "../hos/Auxi";
const Topbar=()=>{
    return(
        <Auxi>
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo-d">Dashboard</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                        
                    </div>
                    <img src='' className="topAvatar"/>
                </div>
            </div>
        </div>
        </Auxi>
    );
}
export default Topbar;