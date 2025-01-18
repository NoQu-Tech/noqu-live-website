import React, { useEffect, useState } from 'react'
import "./TAM_Support.css"
import Help1 from '../../../assets/TAM/Help1.svg'
import VideoMaterials1 from '../../../assets/TAM/VideoMaterials1.svg'
import FAQs1 from '../../../assets/TAM/FAQs1.svg'
import TAM_Help from './TAM_Help'
import TAM_Video from './TAM_Video'
import TAM_FAQ from './TAM_FAQ'

const TAM_Support = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const [data, setData] = useState(0)
    const content = [< TAM_Help />,
                     < TAM_Video />,
                     < TAM_FAQ />]
  return (
    <div className='TAM_Support'>
            <div className="TAM_Support_head">
                <div className='TAM_Support_head-h5'>
                    <h5>Time and Attendance Management (TAM)</h5>
                </div>
                <h1 className='TAM_h1'>SUPPORT</h1>
                <div className="TAM_Support_head-container">
                    <div className="TAM_Support_head_box" onClick={() =>  setData(0)} >
                        <img src={Help1} alt="" />
                        <h5>Help Documentation</h5>
                    </div>
                    <div className="TAM_Support_head_box" onClick={() =>  setData(1)} >
                        <img src={VideoMaterials1} alt=""/>
                        <h5>Video Materials</h5>
                    </div>
                    <div className="TAM_Support_head_box" onClick={() =>  setData(2)} >
                        <img src={FAQs1} alt="" />
                        <h5>FAQs</h5>
                    </div>
                </div>
                <div className="TAM_Support_content">
                    {content[data]}
                </div>
            </div>
    </div>
  )
}

export default TAM_Support