import { CardGiftcard, LocalShipping,PersonAdd, StoreMallDirectory } from '@material-ui/icons'
import React from 'react'
import Auxi from '../hos/Auxi'
const Tracking = () => {
    return (
        <Auxi>
            <div className="tracking">
                
                <div className="tracking-product mt-60 mb-60">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 text-center">
                                <h2>Your Tracking Number</h2>
                                <form action="#">
                                    <input type="text" placeholder="Eg:#0.325FHJU658745EGU" required/>
                                    <button type="submit"><i className="fa fa-binoculars"></i> Track now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-area  mt-60">
                    <div className="container">
                      
                    
                        <div className="row justify-content-center">
                        <p></p>
                        
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div className="single-feature-2 bottom-after">
                                    <i><StoreMallDirectory/></i>
                                    <h4>Seller Shipped Your order</h4>
                                    <p>Certainty listening no no behaviour existence assurance situation is. Because add why</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div className="single-feature-2 bottom-before">
                                    <div className="animation">
                                        <i><LocalShipping/></i>
                                    </div>
                                    <h4>Depert from original Country</h4>
                                    <p>Certainty listening no no behaviour existence assurance situation is. Because add why</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div className="single-feature-2 bottom-after disabled">
                                   <i><PersonAdd/></i>
                                    <h4>Arrived at destination country</h4>
                                    <p>Certainty listening no no behaviour existence assurance situation is. Because add why</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div className="single-feature-2 disabled">
                                    <i className=""><CardGiftcard/></i>
                                    <h4>Product Delivered</h4>
                                    <p>Certainty listening no no behaviour existence assurance situation is. Because add why</p>
                                </div>
                            </div>
                        </div>
                    </div>
              
            
                </div>
            
                    </div>
        </Auxi>
    )
}

export default Tracking

