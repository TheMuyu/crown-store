import React from 'react'
import { withRouter } from 'react-router'
import './MenuItem.scss'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <div onClick={() => history.push(`${match.url}${linkUrl}`)}
        className={`${size} menu-item`}>
            <div style={{backgroundImage: `url(${imageUrl})`}} className="background-image"></div>
            <div className="content">
            
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOW NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)
