import reacts from "react";
const Account=()=>{
    return(
        <div className="account" >
            <div id="page-content-wrapper" className="p-9">
                <div className="container" style={{marginBottom:'40px'}}>
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <div className="myaccount-page-wrapper">
                                
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="myaccount-tab-menu nav" role="tablist">
                                            <a href="#dashboad" className="active" data-toggle="tab"><i className="fa fa-dashboard"></i>
                                                Dashboard</a>
            
                                            <a href="#orders" data-toggle="tab"><i className="fa fa-cart-arrow-down"></i> Orders</a>
            
            
                                            <a href="#address" data-toggle="tab"><i className="fa fa-map-marker"></i> address</a>
            
                                            <a href="#account-info" data-toggle="tab"><i className="fa fa-user"></i> Account Details</a>
            
                                            <a href="{% url 'logout'%}"><i className="fa fa-sign-out"></i> Logout</a>
                                        </div>
                                    </div>

                                    <div className="col-lg-9 mt-5 mt-lg-0">
                                        <div className="tab-content" id="myaccountContent">
                                            
                                            <div className="tab-pane fade show active" id="dashboad" role="tabpanel">
                                                <div className="myaccount-content">
                                                    <h3>Dashboard</h3>
            
                                                    <div className="welcome">
                                                        <p>Hello, <strong>user.username</strong> (If Not <strong>user.username !</strong><a
                                                                href="{% url 'logout'%}" className="logout"> Logout</a>)</p>
                                                    </div>
            
                                                    <p className="mb-0">From your account dashboard. you can easily check & view your
                                                        recent orders, manage your shipping and billing addresses and edit your
                                                        password and account details.</p>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="orders" role="tabpanel">
                                                <div className="myaccount-content">
                                                    <h3>Orders</h3>
            
                                                    <div className="myaccount-table table-responsive text-center">
                                                        <table className="table table-bordered">
                                                            <thead className="thead-light">
                                                            <tr>
                                                                <th>Order Key</th>
                                                                <th>Date</th>
                                                                <th>Status</th>
                                                                <th>Total</th>
                                                                <th>Action</th>
                                                            </tr>
                                                            </thead>
                                                                
                                                            <tbody>
                                                            
                                                                    
                                                                
                                                            <tr>
                                                                <td>order.order_key</td>
                                                                <td>order.created</td>
                                                                <td>order.order_status</td>
                                                                <td>Kesorder.total_paid</td>
                                                                <td><a href="cart.html" className="btn-add-to-cart">View</a></td>
                                                            </tr>
                                                            
                                                            
                                                            
                                                            
                                                            
                                                            
                                                            
                                                            
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="payment-method" role="tabpanel">
                                                <div className="myaccount-content">
                                                    <h3>Payment Method</h3>
            
                                                    <p className="saved-message">You Can't Saved Your Payment Method yet.</p>
                                                </div>
                                            </div>
                                            
            
                                            
                                            <div className="tab-pane fade" id="address" role="tabpanel">
                                                <div className="myaccount-content">
                                                    <h3>Billing Address</h3>
                                                        
                                                    <address> 
                                                        <p><strong>address.fullnames</strong></p>
                                                        <p>address.county , address.city<br/>
                                                            address.area</p>
                                                        <p>Mobile: address.phone_number</p>
                                                    </address>
                                                    
            
                                                    <a href="#" className="btn-add-to-cart d-inline-block"><i className="fa fa-edit"></i>
                                                        Edit Address</a>
                                                </div>
                                            </div>
                                            
            
                                            
                                            <div className="tab-pane fade" id="account-info" role="tabpanel">
                                                <div className="myaccount-content">
                                                    <h3>Account Details</h3>
            
                                                    <div className="account-details-form">
                                                        <form action="#">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <div className="single-input-item">
                                                                        <label htmlFor="first-name" className="required">First Name</label>
                                                                        <input type="text" id="first-name"
                                                                               placeholder="First Name"/>
                                                                    </div>
                                                                </div>
            
                                                                <div className="col-lg-6">
                                                                    <div className="single-input-item">
                                                                        <label htmlFor="last-name" className="required">Last Name</label>
                                                                        <input type="text" id="last-name" placeholder="Last Name"/>
                                                                    </div>
                                                                </div>
                                                            </div>
            
                                                            <div className="single-input-item">
                                                                <label htmlFor="display-name" className="required">Display Name</label>
                                                                <input type="text" id="display-name" placeholder="Display Name"/>
                                                            </div>
            
                                                            <div className="single-input-item">
                                                                <label htmlFor="email" className="required">Email Addres</label>
                                                                <input type="email" id="email" placeholder="Email Address"/>
                                                            </div>
            
                                                            <fieldset>
                                                                <legend>Password change</legend>
                                                                <div className="single-input-item">
                                                                    <label htmlFor="current-pwd" className="required">Current
                                                                        Password</label>
                                                                    <input type="password" id="current-pwd"
                                                                           placeholder="Current Password"/>
                                                                </div>
            
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="single-input-item">
                                                                            <label htmlFor="new-pwd" className="required">New
                                                                                Password</label>
                                                                            <input type="password" id="new-pwd"
                                                                                   placeholder="New Password"/>
                                                                        </div>
                                                                    </div>
            
                                                                    <div className="col-lg-6">
                                                                        <div className="single-input-item">
                                                                            <label htmlFor="confirm-pwd" className="required">Confirm
                                                                                Password</label>
                                                                            <input type="password" id="confirm-pwd"
                                                                                   placeholder="Confirm Password"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </fieldset>
            
                                                            <div className="single-input-item">
                                                                <button className="btn-add-to-cart">Save Changes</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
          </div>
    );
}
export default Account;