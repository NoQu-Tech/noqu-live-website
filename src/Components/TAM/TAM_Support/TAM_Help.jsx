import React from 'react'
import "./TAM_Help.css"
import { Link } from 'react-router-dom'

const TAM_Help = () => {
  return (
    <div className='TAM_Help'>
        <h1 className='TAM_h1'>Help Documentation</h1>
        <p>NoQu TAM User Manual: Navigating to Workforce efficiency</p>
        <div className="TAM_Help-content">
            <p>Our User Manual is your compass for unlocking the full potential of our comprehensive end-to-end attendance management solution. Whether you're a new user exploring the features or a seasoned pro looking for advanced tips, this comprehensive guide is designed to enhance your experience</p>
            <Link to="https://appnoqu.com/#/login"><button>Log on</button></Link>
        </div>
    </div>
  )
}

export default TAM_Help