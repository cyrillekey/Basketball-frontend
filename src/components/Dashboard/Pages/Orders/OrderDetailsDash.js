import { Avatar } from '@material-ui/core'
import { CalendarToday, ShoppingBasket } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './OrderDetails.css'
import axios from 'axios'
const OrderDetailsDash = (props) => {
  const {id}=useParams();
  const [order,setOrder]=useState([]);
  useEffect(()=>{
    axios.get(`/order-info/${id}`).then(
      response=>{
          console.log(response)
          setOrder(response.data)
          
      }
  ).catch(response=>{
  });
  },[])
  return (
    <div class="mainbodyOr">
      <h2>Order Details</h2>
        <div class="mainheader">
            <div class="orderHeader">
                <div class="orderId">
                    <h2>Order #{order.order.orderName}</h2>
                </div>
                <div class="delivered">
                    <span>Paid</span>
                </div>

                <div class="delivered">
                    <span>Paid</span>
                </div>
                <div class="orderDate">
                  <CalendarToday/>  {order.order.orderDate}
                </div>
            </div>
        </div>
        <div class="orderBody">
            <div class="leftadmin">
                <div class="leftIntro">
                    <div class="leftHeader">
                        <p>Order Details</p>
                    </div>
                    <div class="detailsRow">
                        <div class="leftrow">
                            <div class="leftHeading">
                                Order Note:
                            </div>
                        </div>
                        <div class="rightrow">
                            <div class="orderPay">
                                Payment Method: Cash on delivery
                            </div>
                            <div class="refrenceCode">
                                Reference Code: <a>Add</a>
                            </div>
                            <div class="orderType">
                                OrderType:
                            </div>
                        </div>
                    </div>
                </div>
                <div class="leftAdminBody">

                    <div class="orderDetailItem">
                        <div class="ordImg">
                           <img src="https://logistics.palsagri.com/storage/app/public/product/2021-09-16-61433491dabf4.png" alt="" srcset=""/>
                        </div>
                        <div class="bodydetails">
                            <div class="itemo">Sukuma Wiki</div>
                            <div class="ordSpec">
                                <div class="p">Kes 150</div>
                                <div class="qu">2</div>
                                <div class="sizep">M</div>
                                <div class="totaP">Kes 300</div>
                            </div>
                        </div>
                    </div>
                    <div class="orderDetailItem">
                        <div class="ordImg">
                            Image goes here
                        </div>
                        <div class="bodydetails">
                            <div class="itemo">Sukuma Wiki</div>
                            <div class="ordSpec">
                                <div class="p">Kes 150</div>
                                <div class="qu">2</div>
                                <div class="sizep">M</div>
                                <div class="totaP">Kes 300</div>
                            </div>
                        </div>
                    </div>

                    <div class="orderDetailSummary">
                        <div class="summaryTable">
                            <div class="summaryItem">
                                <div class="itemTitle">Item Price</div>
                                <div class="itemDetails">Kes 450</div>
                            </div>
                            <div class="summaryItem">
                                <div class="itemTitle">Item Price</div>
                                <div class="itemDetails">Kes 450</div>
                            </div>
                            <div class="summaryItem">
                                <div class="itemTitle">Item Price</div>
                                <div class="itemDetails">Kes 450</div>
                            </div>
                            <div class="summaryItem">
                                <div class="itemTitle">Item Price</div>
                                <div class="itemDetails final">Kes 450</div>
                            </div>
                            <div class="summaryItem">
                                <div class="itemTitle">Item Price</div>
                                <div class="itemDetails">Kes 450</div>
                            </div>
                        </div>
                    </div>
                    <div class="orderStatus">
                        <div class="change">
                            <label for="change">Change Status:</label>
                            <select name="" id="" >
                                <option value="">Mano</option>
                                <option value="">Mano</option>
                                <option value="">Mano</option>
                            </select>
                        </div>
                    </div>
                    

                </div>
            </div>

            <div class="rightadmin">
                <div class="rightHeader">
                    Customer
                </div>
                <div class="customerHeader">
                    <div class="avatarc">
                    <Avatar/>
                    </div>
                    <div class="cusNma">
                        Jojo rabits
                    </div>
                </div>
                <div class="customerHeader">
                    <div class="avatarc">
                      <ShoppingBasket/>
                    </div>
                    <div class="cusNma">
                        4 orders
                    </div>
                </div>
                <div class="contactInfo">
                    <h5 class="phead">Contact Info</h5>
                    <p>jojo @ mail.com</p>
                    <p>0700025555</p>
                </div>
            </div>
        </div>
    </div>
  )
}



export default OrderDetailsDash