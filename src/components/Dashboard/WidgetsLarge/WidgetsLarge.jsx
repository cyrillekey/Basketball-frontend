import React from 'react'
const Button = ({ type }) => {
    return (
        <button className={"widgetLgButton " + type}>{type}</button>
    );
}
export const WidgetsLarge = (props) => {
    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">New Orders</h3>
            <table className="wigetLgTable">
                <thead>
                    <tr className="widgetLgTr">

                        <th className="widgetLgTh">
                            Date
                        </th>
                        <th className="widgetLgTh">
                            Name
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
                </thead>
                <tbody>
                    {
                        props.orders.map(order => (
                            <tr className="widgetLgTr" key={order.order_id}>
                                <td className="widgetLgUser">
                                    {order.orderDate}
                                </td>
                                <td className='widgetLgAmount'>
                                    {order.orderName}
                                </td>
                                <td className="widgetLgDate">
                                    {order.orderQuantity}
                                </td>
                                <td className="widgetLgAmount">
                                    KES {order.orderPrice}
                                </td>
                                <td className="widgetLgStatus">
                                    <Button type="approved" />
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}
