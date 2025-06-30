import React from 'react'
import "./Lp.css"
import ScheduleAdemolp from '../../Containers/RegForms/ScheduleAdemolp';
import lp_background2 from '../../assets/lp_background2.png';
import LP_Vector1 from '../../assets/LP_Vector1.png';
import LP_Vector2 from '../../assets/LP_Vector2.png';
import LP_Vector3 from '../../assets/LP_Vector3.png';
import mark1 from '../../assets/mark1.png';
import { Link } from 'react-router-dom';
import ScheduleAdemolp2 from '../../Containers/RegForms/ScheduleAdemolp2';

const Lp2 = () => {
  return (
    <>
      <div className='lp'>
        <div className="lp_head">
          <div className="lp-content">
            <div className="lp-content-section">
              <div className="lp-content-section-topic">
                <div className="lp-content-section-topic-span">
                  <p>Welcome to <span>No Qu</span></p>
                </div>
                <p>Attendance Management App</p>
             
              </div>
              <div className="lp-content-section-features">
                <ul>
                  <li> <span><img src={mark1} width={15} /></span> Face Recognition</li>
                  <li> <span><img src={mark1} width={15} /></span> Live Tracking</li>
                  <li> <span><img src={mark1} width={15} /></span> Leave Managemant</li>
                  <li> <span><img src={mark1} width={15} /></span> Easy Reports</li>
                  <li> <span><img src={mark1} width={15} /></span> Biometric Integration</li>
                </ul>
                <div className="lp-content-section-price">
                  <p>Starts &nbsp; from</p>
                  <h1><span>₹</span> 0.5</h1>
                  <p>Per Employee</p>
                  <p>Per day</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lp_base_img">
            <img src={LP_Vector1} alt="" />
            <img src={LP_Vector2} alt="" />
            <img src={LP_Vector3} alt="" />
          </div>
        </div>
        <div className="lp-form">
          <ScheduleAdemolp2 />
        </div>
      </div>
    </>
  )
}

export default Lp2