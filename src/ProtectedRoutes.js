import React from "react";
import { Navigate} from "react-router-dom";
import Auth from "./Auth";
export const ProtectedRoute=({children})=>{
    const auth=Auth
    return auth.isAuthenticated() ? children:<Navigate to={{pathname:"/login"}}/>
}