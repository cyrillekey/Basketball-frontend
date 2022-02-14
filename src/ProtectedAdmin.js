import React from "react";
import {  useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Auth from "./Auth";
export const ProtectedAdmin=({children})=>{
    const user=useSelector(state=>state.user)
    const auth=Auth;
    return auth.isAuthenticated() && user.accountTypes=="ADMIN" ? children : <Navigate to={{pathname:"/"}}/>;

    
}