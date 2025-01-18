import React, { useEffect } from 'react'
import "./TAM_Pricing.css"
import price1 from '../../../assets/TAM/price1.png'
import price2 from '../../../assets/TAM/price2.png'
import price3 from '../../../assets/TAM/price3.png'
import banner_img from '../../../assets/TAM/banner_img.png'
import TAM_bg from '../../../assets/TAM/TAM_bg.svg'
import { Link } from 'react-router-dom'


const TamPricing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className='TAM_Pricing'>
        <div className="TAM_Pricing_head">
            <h5>Time and Attendance Management (TAM)</h5>
            <h1 className='TAM_h1'>PRICING</h1>
            <img src={banner_img} alt=""/>
        </div>
        <div className="TAM_Pricing_list">
            <h1 className='TAM_h1'>Power of creation. Pocket-friendly price.</h1>
            <p>Revolutionize your approach to Time and Attendance – choose NoQu and elevate your workforce management game. Our cost-effective plans cater to businesses of all sizes, ensuring you pay only for the features you need</p>
            <div className="TAM_Pricing_list_container">
                <div className="TAM_Pricing_list_container-box1">
                    <div className="box1_head">
                        <h1>STANDARD</h1>    
                    </div>
                    <div className="TAM_Pricing_avd">   
                        <ul>
                            <li>Button and QR Based Attendance</li>
                            <li>Multiple Time Attendance</li>
                            <li>Multiple Location Attendance</li>
                            <li>Geo Fencing</li>
                            <li>Basic Reports</li>
                        </ul>
                    </div>
                </div>
                <div className="TAM_Pricing_list_container-box2">
                    <div className="box2_head">
                        <h1>PREMIUM</h1>    
                    </div>
                    <div className="TAM_Pricing_avd">
                        <ul>
                            <li>Includes Standard Edition Features</li>
                            <li>Face Recognition Attendance</li>
                            <li>Offline Attendance</li>
                            <li>Proxy Attendance</li>
                            <li>Work Flow ( Leave and Permission )</li>
                            <li>Regularization</li>
                            <li>Roles and Permission</li>
                            <li>Organization Chart</li>
                            <li>Random /Scheduled Selfie Verification</li>
                            <li>Notification and Alerts</li>
                            <li>QR Wizard</li>
                            <li>Custom Privacy Setting Reports And Dashboard</li>
                        </ul>
                    </div>
                </div>
                <div className="TAM_Pricing_list_container-box3">
                    <div className="box2_head">
                        <h1>ADD ONS</h1>    
                    </div>
                    <div className="TAM_Pricing_avd">
                        <ul>
                            <li>Real Time Live Tracking</li>
                            <li>AI Features</li>
                            <li>Kiosk / Tab Attendance</li>
                            <li>Dynamic QR Attendance</li>
                            <li>API Integration</li>
                            <li>Access Control Integration</li>
                            <li>WhatsApp, SMS Message Services</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Link to="https://appnoqu.com/#/login"><button>Review Plans</button></Link> 
        </div>
    </div>
  )
}

export default TamPricing