import { Visibility } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

export const WidgetSmall = (props) => {
    return (
        <div className='widgetsm'>
            <span className="widgetSmTitle">New members</span>
            <ul className="widgetSmList">
                {
                    
                    props.users.map((user)=>(
                        <li className="widgetSmListItem" key={user.user_id}>
                
                    <span className="widgetSmImg">{user.username}</span>
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">{user.email}</span>
                        <span className="widgetSmUserDate">{user.joinDate}</span>
                    </div>
                    <Link to={`/admin/users/${user.user_id}`} className="widgetSmButton" >
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </Link>
                </li>
                    ))
                }
                
                
                
                
            </ul>
        </div>
    )
}
