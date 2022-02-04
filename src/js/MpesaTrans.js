import axios from 'axios'
;

class MpesaTrans{

    getAccessToken(){
        axios.defaults.baseURL="";
        let encoded=btoa(process.env.REACT_APP_MPESA_CONSUMER_KEY+":"+process.env.REACT_APP_MPESA_CONSUMER_SECRET);
        
        let config={
            url:"https://cors-anywhere-herokuapp.com/https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
            method:"get",
            headers:{
                "Authorization": "Basic "+encoded,
                "Content-Type":"application/json"
            }
        };
        axios(config)
    .then(result => console.log(result))
    .catch(error => console.log(error));
    }
}

export default new MpesaTrans;