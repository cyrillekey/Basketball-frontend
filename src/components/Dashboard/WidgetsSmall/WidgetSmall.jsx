import { Visibility } from '@material-ui/icons'
import React from 'react'

export const WidgetSmall = () => {
    return (
        <div className='widgetsm'>
            <span className="widgetSmTitle">New members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">John jones</span>
                        <span className="widgetSmUserDate">12/12/2021</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">John jones</span>
                        <span className="widgetSmUserDate">12/12/2021</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">John jones</span>
                        <span className="widgetSmUserDate">12/12/2021</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
