import Auxi from '../hos/Auxi'
import { destination } from '../../constants/shipping';
import { useState ,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { saveAddress,chooseShipping } from '../../actions';
import axios from 'axios';
import Auth from '../../Auth';
//import '../Layout/Menu.js'
const Shipping=(props)=>{
  const auth=Auth
  const savedAddress=useSelector(state=>state.address)
  const history=useNavigate();
  useEffect(() => {
    if(savedAddress){
      if(savedAddress.addressid){
      history("/checkout")
      }
    }
  }, [])
  const dispatch = useDispatch();
  const [ready, setReady] = useState(true)
  const destinations=destination;
  const county=Object.keys(destinations[0].des)
  const [ship,setShip]=useState("Nairobi");
  const town=Object.keys(destination[0].des[ship]);
  const [status, setStatus] = useState("Proceed to checkout")
  const [address,setAddress]=useState({
    firstname:"",
    lastname:"",
    phone:"",
    county:"Nairobi",
    town:"CBD",
    info:""
  });

  const switchValue=(name,value)=>{
    switch(name){
      case 'county':
        setShip(value)
        break;
      case 'town':
        let data=value.split(";")
        value=data[1]
        dispatch(chooseShipping({shipping:data[0]}))
        break; 
      default:
        break;  
    }
    
    setAddress({...address,[name]:value});
    
  }
  const changeValue=(name,value)=>{
    switchValue(name,value)
    let phone=address.phone;
    if(name=="phone"){
      phone=value;
    }
    if(address.lastname.length>0 && address.firstname.length>0 && phone.length>=10 && address.county.length>0 && address.town.length>0){
      setReady(false)
    }else{
      setReady(true)
    }
  }
  const handleSubmit=()=>{
    setStatus("Submitting...")
    
    let data = JSON.stringify({
      "firstName": address.firstname,
      "secondName": address.lastname,
      "city": address.county,
      "town": address.town,
      "phoneNumber": address.phone
    });
    let userid=localStorage.getItem("user")
    let config = {
      method: 'post',
      url: '/create-new-address/'+userid,
      headers: { 
        'Authorization': 'Bearer '+auth.getToken(), 
        'Content-Type': 'application/json', 
        
      },
      data : data
    };
    axios(config)
    .then(response=> {
      dispatch(saveAddress({address:response.data}))
      history("/checkout")
    }).catch(response=>{
      alert("an error occured"+response.response.status);
    })
    
    
  }
    return(
    <Auxi>
        <div className="container-1">
  <h1>Shipping</h1>
  <p>Please enter your shipping details.</p>
  <hr />
  <div className="form">
    
  <div className="fields fields--2">
    <label className="field">
      <span className="field__label" htmlFor="firstname">First name</span>
      <input className="field__input" type="text" name="firstname" placeholder='John' value={address.firstname} onChange={(e)=>changeValue(e.target.name,e.target.value)} />
    </label>
    <label className="field">
      <span className="field__label" htmlFor="lastname">Last name</span>
      <input className="field__input" type="text" name="lastname" placeholder='Doe' value={address.lastname} onChange={(e)=>changeValue(e.target.name,e.target.value)}/>
    </label>
  </div>
  <label className="field">
    <span className="field__label" htmlFor="address">Phone Number</span>
    <input className="field__input" type="text" name="phone" placeholder='0712345678' value={address.address} onChange={(e)=>changeValue(e.target.name,e.target.value)}/>
  </label>
  <label className="field">
    <span className="field__label" htmlFor="country">County</span>
    <select className="field__input" id="country" name="county" onChange={(e)=>changeValue(e.target.name,e.target.value)}>
      
    {
         county.map(cou=>(
           <option key={cou} value={cou}>{cou}</option>
         ))
        
        
       
      }
    </select>
  </label>
  <label className="field">
    <span className="field__label" htmlFor="Town">Town</span>
    <select className="field__input" id="country" name="town" onChange={(e)=>changeValue(e.target.name,e.target.value)}>
    
      {
        town.map(t=>(
          <option key={t} place={t} value={destinations[0].des[ship][t]+";"+t}>{t}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KES&nbsp; {destinations[0].des[ship][t]}</option>
        ))
      }
      
    </select>
  </label>
  <label className="field">
    <span className="field__label" htmlFor="address">Additional Info</span>
    <input className="field__input" type="text" name="info" placeholder='Deliver on ...' value={address.info} onChange={(e)=>changeValue(e.target.name,e.target.value)}/>
  </label>
  
  </div>
  <hr/>
  <button className="button" disabled={ready} onClick={()=>handleSubmit()}>{status}</button>
</div>
    </Auxi>
    );
}
export default Shipping;