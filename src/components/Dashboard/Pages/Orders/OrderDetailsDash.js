import { Avatar } from '@material-ui/core'
import { CalendarToday, ShoppingBasket } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './OrderDetails.css'
import axios from 'axios'
const OrderDetailsDash = (props) => {
  const {id}=useParams();
  const [order,setOrder]=useState({
      order:[],
      products:[],
  });
  useEffect(()=>{
      let isMoutend=true;
    axios.get(`/order-info/${id}`).then(
      response=>{
          
        if (isMoutend)  setOrder(response.data)
          
      }
  ).catch(response=>{
  });
  return ()=>{isMoutend=false};
  },[])
  return (
    <div className="mainbodyOr">
      <h2>Order Details</h2>
        <div className="mainheader">
            <div className="orderHeader">
                <div className="orderId">
                    <h2>Order #{order.order.orderName}</h2>
                </div>
                <div className="delivered">
                    <span>Paid</span>
                </div>

                <div className="delivered">
                    <span>Paid</span>
                </div>
                <div className="orderDate">
                  <CalendarToday/>  {order.order.orderDate}
                </div>
            </div>
        </div>
        <div className="orderBody">
            <div className="leftadmin">
                <div className="leftIntro">
                    <div className="leftHeader">
                        <p>Order Details</p>
                    </div>
                    <div className="detailsRow">
                        <div className="leftrow">
                            <div className="leftHeading">
                                Order Note:
                            </div>
                        </div>
                        <div className="rightrow">
                            <div className="orderPay">
                                Payment Method: Cash on delivery
                            </div>
                            <div className="refrenceCode">
                                Reference Code: <a>Add</a>
                            </div>
                            <div className="orderType">
                                OrderType:
                            </div>
                        </div>
                    </div>
                </div>
                <div className="leftAdminBody">
                    {
                        order.products.map((item,index)=>(
                            <div className="orderDetailItem" key={item.product_id}>
                        <div className="ordImg">
                           <img src={item.imageUrl} alt="" />
                        </div>
                        <div className="bodydetails">
                            <div className="itemo">{item.productName}</div>
                            <div className="ordSpec">
                                <div className="p">Kes {item.productPrice}</div>
                                <div className="qu">Qty: {order.order.productsList[index].quantity}</div>
                                <div className="sizep">Size:{order.order.productsList[index].productOne.size.size_symbol} </div>
                                <div className="totaP">Kes 300</div>
                            </div>
                        </div>
                    </div>
                        ))
                    }
                    
                    

                    <div className="orderDetailSummary">
                        <div className="summaryTable">
                            <div className="summaryItem">
                                <div className="itemTitle">Item Price</div>
                                <div className="itemDetails">Kes 450</div>
                            </div>
                            <div className="summaryItem">
                                <div className="itemTitle">Item Price</div>
                                <div className="itemDetails">Kes 450</div>
                            </div>
                            <div className="summaryItem">
                                <div className="itemTitle">Item Price</div>
                                <div className="itemDetails">Kes 450</div>
                            </div>
                            <div className="summaryItem">
                                <div className="itemTitle">Item Price</div>
                                <div className="itemDetails final">Kes 450</div>
                            </div>
                            <div className="summaryItem">
                                <div className="itemTitle">Item Price</div>
                                <div className="itemDetails">Kes 450</div>
                            </div>
                        </div>
                    </div>
                    <div className="orderStatus">
                        <div className="change">
                            <label htmlFor="change">Change Status:</label>
                            <select name="" id="" >
                                <option value="">Mano</option>
                                <option value="">Mano</option>
                                <option value="">Mano</option>
                            </select>
                        </div>
                    </div>
                    

                </div>
            </div>

            <div className="rightadmin">
                <div className="rightHeader">
                    Customer
                </div>
                <div className="customerHeader">
                    <div className="avatarc">
                    <Avatar/>
                    </div>
                    <div className="cusNma">
                        Jojo rabits
                    </div>
                </div>
                <div className="customerHeader">
                    <div className="avatarc">
                      <ShoppingBasket/>
                    </div>
                    <div className="cusNma">
                        4 orders
                    </div>
                </div>
                <div className="contactInfo">
                    <h5 className="phead">Contact Info</h5>
                    <p>jojo @ mail.com</p>
                    <p>0700025555</p>
                </div>
            </div>
        </div>
    </div>
  )
}



export default OrderDetailsDash