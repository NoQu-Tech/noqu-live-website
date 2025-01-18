import React from 'react'
import "./Lp.css"
import ScheduleAdemolp from '../../Containers/RegForms/ScheduleAdemolp';
import lp_background2 from '../../assets/lp_background2.png';
import LP_Vector1 from '../../assets/LP_Vector1.png';
import LP_Vector2 from '../../assets/LP_Vector2.png';
import LP_Vector3 from '../../assets/LP_Vector3.png';
import { Link } from 'react-router-dom';
import ScheduleAdemolp3 from '../../Containers/RegForms/ScheduleAdemolp3';

const Lp3 = () => {
  return (
    <>
      <div className='lp'>
        <div className="lp_head">
          <div className="lp-content">
            <div className="lp-content-section">
              <p>Welcome to <span>No QU</span></p>
              <p>Attendance Management</p>
              <p>App</p>
              <div className="lp-content-head">
                <p>Just &nbsp; from</p>
                <h1 className='TAM_h1'>₹ 0.50</h1>
                <p>Per Employee</p>
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
          <ScheduleAdemolp3 />
        </div>
      </div>
    </>
  )
}

export default Lp3