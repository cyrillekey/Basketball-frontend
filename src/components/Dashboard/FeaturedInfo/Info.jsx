import React from 'react';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
const Info = () => {
    return (
        <div className='featured'>
            
                <div className="featuredItem">
                    <div className='featuredTitle'>Revenue</div>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">KES 450</span>
                        <span className="featuredMoneyRate">KES -450 <ArrowDownward className='featuredIcon negative'/> </span>

                    </div>
                    <span className="featuredSub">Compared to last month</span>
                </div>
            
            
                <div className="featuredItem">
                    <div className='featuredTitle'>Sales</div>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">KES 450</span>
                        <span className="featuredMoneyRate">KES -450 <ArrowDownward className='featuredIcon negative'/> </span>

                    </div>
                    <span className="featuredSub">Compared to last month</span>
                
            </div>
            
                <div className="featuredItem">
                    <div className='featuredTitle'>Orders</div>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">KES 450</span>
                        <span className="featuredMoneyRate">KES -450 <ArrowUpward className='featuredIcon positive'/> </span>

                    </div>
                    <span className="featuredSub">Compared to last month</span>
                </div>
            </div>
        
    );
}

export default Info;
