import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams ,Link} from 'react-router-dom'
import Auxi from '../hos/Auxi'
const OrderConfrim = () => {
    const address=useSelector(state=>state.address)
    const user=useSelector(state=>state.user)
    const [order, setOrder] = useState({
        order:{
            orderShipping:[]
        },
        products:[]
    });
    const{id}=useParams()
    
    useEffect(()=>{
        axios.get(`/order-info/${id}`).then(
            response=>{
                
                setOrder(response.data)
                
            }
        ).catch(response=>{
        });
    },[]);
    return (
        <Auxi>{
            
            }
            <div className="container mt-5 mb-5">
    <div className="row d-flex justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="text-left logo p-2 px-5"> 
                <div className="logo-container confirm-logo">
                                <Link to="/">Sports<span>Jerseys</span></Link>
                            </div>
                </div>
                <div className="invoice p-5">
                    <h5>Your order Confirmed!</h5> <span className="font-weight-bold d-block mt-4">Hello, {user.username}</span> <span>You order has been confirmed and will be shipped on {Date(order.order.orderShipping.shippingDate).toString()}</span>
                    <div className="payment border-top mt-3 mb-3 border-bottom table-responsive">
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="py-2"> <span className="d-block text-muted">Order Date</span> <span>{order.order.orderDate}</span> </div>
                                    </td>
                                    <td>
                                        <div className="py-2"> <span className="d-block text-muted">Order No</span> <span>{order.order.orderName}</span> </div>
                                    </td>
                                    <td>
                                        <div className="py-2"> <span className="d-block text-muted">Payment</span> <span></span> </div>
                                    </td>
                                    <td>
                                        <div className="py-2"> <span className="d-block text-muted">Shiping Address</span> <span> {address.town},{address.city}</span> </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="product border-bottom table-responsive">
                        <table className="table table-borderless">
                            <tbody>
                                {
                                    order.products.map(item=>(
                                        <tr key={item.product_id}>
                                    <td width="20%"> <img src={item.imageUrl} width="90"/> </td>
                                    <td width="60%"> <span className="font-weight-bold">{item.productName}</span>
                                        <div className="product-qty"> <span className="d-block">Quantity:1</span> <span></span> </div>
                                    </td>
                                    <td width="20%">
                                        <div className="text-right"> <span className="font-weight-bold">Kes{item.productPrice}</span> </div>
                                    </td>
                                </tr>
                                    ))
                                }
                                
                                
                            </tbody>
                        </table>
                    </div>
                    <div className="row d-flex justify-content-end">
                        <div className="col-md-5">
                            <table className="table table-borderless">
                                <tbody className="totals">
                                    <tr>
                                        <td>
                                            <div className="text-left"> <span className="text-muted">Subtotal</span> </div>
                                        </td>
                                        <td>
                                            <div className="text-right"> <span>$168.50</span> </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="text-left"> <span className="text-muted">Shipping Fee</span> </div>
                                        </td>
                                        <td>
                                            <div className="text-right"> <span>{
                                            `Kes ${order.order.orderShipping.shippingCost}`
                                            }</span> </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="text-left"> <span className="text-muted">Packaging Fee</span> </div>
                                        </td>
                                        <td>
                                            <div className="text-right"> <span>{
                                            `Kes ${order.order.orderShipping.packagingCost}`
                                            }</span> </div>
                                        </td>
                                    </tr>
                                    {/* <tr>
                                        <td>
                                            <div className="text-left"> <span className="text-muted">Discount</span> </div>
                                        </td>
                                        <td>
                                            <div className="text-right"> <span className="text-success">$168.50</span> </div>
                                        </td>
                                    </tr> */}
                                    <tr className="border-top border-bottom">
                                        <td>
                                            <div className="text-left"> <span className="font-weight-bold">Subtotal</span> </div>
                                        </td>
                                        <td>
                                            <div className="text-right"> <span className="font-weight-bold">Kes{order.order.orderPrice}</span> </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p>We will be sending shipping confirmation email when the item shipped successfully!</p>
                    <p className="font-weight-bold mb-0">Thanks for shopping with us!</p> <span>Nike Team</span>
                </div>
                <div className="d-flex justify-content-between footer p-3"> <span>Need Help? visit our <a href="#"> help center</a></span> <span>{new Date(Date.now()).toLocaleDateString()}</span> </div>
            </div>
        </div>
    </div>
</div>
        </Auxi>
    )
}

export default OrderConfrim;