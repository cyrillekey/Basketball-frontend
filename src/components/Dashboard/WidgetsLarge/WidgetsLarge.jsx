import React from 'react'
const Button=({type})=>{
    return(
        <button className={"widgetLgButton "+type}>{type}</button>
    );
}
export const WidgetsLarge = () => {
    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">New Orders</h3>
            <table className="wigetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">
                        Date
                    </th>
                    <th className="widgetLgTh">
                        Units
                    </th>
                    <th className="widgetLgTh">
                        Amount
                    </th>
                    <th className="widgetLgTh">
                        Status                    </th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        12/12/2015
                    </td>
                    <td className="widgetLgDate">
                        12
                    </td>
                    <td className="widgetLgAmount">
                        KES 4500 
                    </td>
                    <td className="widgetLgStatus">
                        <Button type="approved"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}
