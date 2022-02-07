import React,{useState,useEffect} from 'react'

import { useSelector ,useDispatch} from 'react-redux';
import './Checkout.css'
import axios from 'axios';
import Auth from '../../Auth';
import { Link ,Navigate,useNavigate} from 'react-router-dom';
import { saveAddress } from '../../actions';
import { getNextDayOfTheWeek } from '../../constants/functions';
const Checkout = () => {
    const auth=Auth
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const total=()=>{
        var total=0;
        orders.forEach(element => {
            total+=element.price*element.qty
        });
        return (total*1.00);
    }
    const qty=()=>{
        let qty=0;
        orders.forEach(element=>{
            qty+=element.qty
        })
        return qty
    }
    
    
    const orders=useSelector(state=>state.items);
    const shipping=useSelector(state=>state.shipping);
    const address=useSelector(state=>state.address);
    const packaging=useSelector(state=>state.packaging);
    let manifest="";
    
    
    const [status, setstatus] = useState("false");
    const [message, setmessage] = useState("Place order");
    const handleCashOnDelivery=(e)=>{
        e.preventDefault();
        orders.forEach(order => {
          
          manifest+=(order.sizeId+":"+order.qty+",")
        });
        
         let order=null;
         setmessage("Placing...");
         setstatus("border");
        let data = JSON.stringify({
            "orderPrice": total()+shipping+packaging,
            "orderQuantity": qty(),
            "mpesaRef": null,
            "transaction": null
          });
          var config = {
            method: 'post',
            url: '/save-order/'+localStorage.getItem("user"),
            headers: { 
              'Authorization': 'Bearer '+auth.getToken(), 
              'Content-Type': 'application/json', 
              
            },
            data : data
          };
          axios(config).then(response=>{
              order=response.data
              let data=new FormData();
              data.append('manifest',manifest);
              var config = {
                method: 'post',
                url: '/add-items-to-order/'+order,
                headers: { 
                  'Authorization': 'Bearer '+auth.getToken(), 
                  'Content-Type': 'application/json', 
                  
                },
                data : data
              };
              axios(config).then(response=>{
                axios({
                  method:'post',
                  url:'/create-shipping/'+parseInt(order)+'/'+address.addressid,
                  data:{
                    shippingCost:shipping,
                    shippingMethod:"Delivery",
                    packagingCost:packaging,
                    shippingDate:getNextDayOfTheWeek("sat")
                  },
                  
                  
              }).then(res=>{
                setmessage("Order placed!")
                navigate("/success/"+order);
              }).catch(error=>{
                console.log(response)
              });
                
                
              }).catch(response=>{
                // axios.get('/delete-order/'+order).then(response=>{
                  
                // }).catch(response=>{
                  
                // })
                console.log(response)
                //setmessage("error occured adding products");
                
              });
              
          }).catch(response=>{
              console.log(response)
              setmessage("Error occured placing order")
          })
          
    }
    
    return (
            <div className="checkout-body">
            <div className="left">
        <div className="adress">
          <div className="address-title">
            <div>
              <div className="completeicon"></div>
              <p>Adress Details</p>
            </div>
            <div className="change">
              <Link to="shipping" onClick={(e)=>{
                e.preventDefault()
                dispatch(saveAddress({address:[]}))
                navigate("/shipping")
                
              }}>Change</Link>
            </div>
          </div>
          <div className="address-details">
            <div className="address-item address-name">{address.firstName+","+address.secondName}</div>
            <div className="address-item">{address.town},{address.city}</div>
            <div className="address-item">{address.phoneNumber}</div>
          </div>
        </div>
        <div className="deliveryInfo">
            <div className="address-title">
                <div>
                  <div className="completeicon"></div>
                  <p>Delivery Info</p>
                </div>
                
              </div>
              <div className="delivery-info">
                <div className="address-item address-name">Pickup </div>
                <div className="address-item">Will be shipped on <b>{getNextDayOfTheWeek("sat").toString()}</b> and ready for pick up on <b>{getNextDayOfTheWeek("monday").toString()}</b> </div>
                <div className="address-item">
                    <div className="delivery-details">
                        <div className="delivery-title">Shipping to: {address.city}</div>
                        <div className="details-info">
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                </div>
                
              </div>
        </div>
        <div className="group">
        <div className="paymentInfo">
            <div className="address-title">
                <div>
                  <div className="completeicon"></div>
                  <p>Paymnet Method</p>
                </div>
              </div>
              <div className="payment-info">
              <div className="address-item address-name">How will you pay for the order</div>
              <div className="address-item">
                <div className="payment-choice">
                  <div className="payment-group">
                    <div className="payment-item">
                      <input type="radio" name="payment" className="choice" id="choice1" value="lipa na mpesa"/>
                    <label htmlFor="choice1">Paypal</label>
                    </div>
                    </div>
                  <div className="payment-group">
                    <div className="payment-item">
                      <input type="radio" name="payment" className="choice" id="choice2" value="lipa na mpesa"/>
                    <label htmlFor="choice2">Mpesa online</label>
                    </div>
                    
                    
                  </div>
                  <div className="payment-group">
                    <div className="payment-item">
                      <input type="radio" name="payment" className="choice" id="choice3" value="lipa na mpesa"/>
                    <label htmlFor="choice3">Pay on Delivery</label>
                    </div>
                    
                    
                  </div>
                </div>                  
            </div>
              </div>
              <div className="modify large" onClick={(e)=>{handleCashOnDelivery(e)}}>
                <span>{message}</span>
              </div>
        </div>
      </div>
      </div>
      <div className="right">
        <div className="orderTitle">Your Order ({orders.length} {orders.length<2?"Item":"Items"})</div>
        {
          orders.map(order=>(
            <div className="cart-item" key={order.id}>
            <div className="cart-img">
              <img
                src={order.url}
                alt=""
              />
            </div>
            <div className="cart-info">
              <div className="ptitle">{order.name}</div>
              <div className="p-price">
                <p>Size: {order.size}</p>
                <p>Ksh <span>{order.price}</span></p>
              </div>
              <div className="cart-qty">
                <p className="qty-n">Qty:<span>{order.qty}</span></p>
              </div>
            </div>
          </div>    
          ))
        }
        
        
        <div className="cartSummary">
          <div className="summaryItem">
            <p>Subtotal<span>Ksh {total()}</span></p>
          </div>
          <div className="summaryItem">
            <p>Shipping<span>Ksh {shipping}</span></p>
          </div>
          <div className="summaryItem last-item">
            <p>Packaging<span>Ksh {packaging}</span></p>
          </div>
          <div className="summary-total">
            <p>Total<span>Ksh {total()+shipping+packaging}</span></p>
          </div>
        </div>
        <div className="modify">
          <Link to="/cart" > Modify cart</Link>
        </div>
      </div>
      
    </div>
    )
}

export default Checkout
