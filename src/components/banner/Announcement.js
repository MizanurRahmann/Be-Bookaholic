import React from 'react'
import Banner from './Banner'
import Offers from './Offers'
import '../../styles/css/Announcement.css'

function Announcement() {
    return (
        <div className="announcement">
            <Banner />
            <Offers />
        </div>
    )
}

export default Announcement
