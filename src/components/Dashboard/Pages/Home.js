import React,{useEffect,useState} from "react";
import Chart from "../Charts/Chart";
import Info from "../FeaturedInfo/Info";
import data from "../Charts/Dummy";
import { WidgetSmall } from "../WidgetsSmall/WidgetSmall";
import { WidgetsLarge } from "../WidgetsLarge/WidgetsLarge";

import Auth from "../../../Auth";
import axios from 'axios';
const Home=()=>{
    const [data, setdata] = useState({
        users:[],
        orders:[]
    })
    const auth=Auth;
    useEffect(()=>{
        var config = {
            method: 'get',
            url: '/admin/dash-summary',
            headers: { 
              'Authorization': `Bearer ${auth.getToken()}`, 
            }
          };
          
          axios(config)
          .then(function (response) {
            setdata(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });

    },[]
    );
    return(
        <div className="home">
            <Info/>
            <Chart data={data} title="Sales analytics" dataKey="sales"/>
            <div className="homeWidgets">
                <WidgetSmall users={data.users}/>
                <WidgetsLarge orders={data.orders}/>
            </div>
        </div>
    );
}
export default Home;