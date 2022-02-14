import React from "react";
import { useSelector } from "react-redux";
class Auth{
    constructor(){
        this.authenticated=false

    }
    getCookie(){
        return document.cookie.split(';').some(c=>{
            return c.trim().startsWith("token=")
        })
    }
    getToken(){
        let cookie={}
        document.cookie.split(';').forEach(function(el){
            let[key,value]=el.split("=");
            cookie[key.trim()]=value;

        })
        
        return cookie["token"]
    }
    getUserId(){
        let userid="";
        userid=localStorage.getItem("user")
        if(typeof userid ==='undefined' && userid ==null){
            this.authenticated=false;
            this.logout()
        }
        return userid;
    }
    login(cb){
        this.authenticated=true
        cb()
    }
    logout(){
        localStorage.setItem("user",null)
        if(this.getCookie()){
            document.cookie="token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            
        }
        window.location.href="#/"
        this.authenticated=false
        
        
    }
    isAuthenticated(){
        if(this.getToken()!==undefined)
        {
            this.authenticated=true;
        }
        return this.authenticated
    }
    
}
export default new Auth();