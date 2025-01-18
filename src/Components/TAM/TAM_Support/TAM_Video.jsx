import React from 'react'
import "./TAM_Video.css"
import ReactPlayer from 'react-player';
import TAM_English1 from "../../../assets/TAM/TAM_English1.mp4";
import NoQu_Attendance from "../../../assets/TAM/NoQu_Attendance.mp4";
import noquapp from "../../../assets/TAM/noquapp.mp4";
import { Link } from 'react-router-dom';

const TAM_Video = () => {
  return (
    <div className='TAM_Video'>
        <h1 className='TAM_h1'>Video Materials</h1>
        <div className="TAM_Video-content">
            <div className="TAM_Video-container">
                <div className="TAM_Video-box">
                        <h5>NoQu TAM application</h5>
                        <div className="TAM_Video-box-videomaterial">
                            <ReactPlayer url={TAM_English1} controls={true} muted={true} width={280} height={250}/>
                        </div>
                </div>
                <div className="TAM_Video-box">
                        <h5>NoQu TAM QR Attendance workflow</h5>
                        <div className="TAM_Video-box-videomaterial">
                            <ReactPlayer url={NoQu_Attendance} controls={true} muted={true} width={280} height={250}/>
                        </div>
                </div>
                <div className="TAM_Video-box">
                        <h5>NoQu TAM Live Location Tracking</h5>
                        <div className="TAM_Video-box-videomaterial">
                            <ReactPlayer url={noquapp} controls={true} muted={true} width={280} height={250}/>
                        </div>
                </div>
            </div>
            <Link to="https://appnoqu.com/#/login"><button>Log on</button></Link>
        </div>
    </div>
  )
}

export default TAM_Video