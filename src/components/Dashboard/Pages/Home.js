import React from "react";
import Chart from "../Charts/Chart";
import Info from "../FeaturedInfo/Info";
import data from "../Charts/Dummy";
import { WidgetSmall } from "../WidgetsSmall/WidgetSmall";
import { WidgetsLarge } from "../WidgetsLarge/WidgetsLarge";
const Home=()=>{
    return(
        <div className="home">
            <Info/>
            <Chart data={data} title="Sales analytics" dataKey="sales"/>
            <div className="homeWidgets">
                <WidgetSmall/>
                <WidgetsLarge/>
            </div>
        </div>
    );
}
export default Home;