import React, { useEffect } from 'react'
import "./BlogPage.css"
import BlogPage3 from '../../assets/BlogPage3.png'
import { Link } from 'react-router-dom'

const Blog3 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='blog1'>
    <h1 className='TAM_h1'>NoQu TAM - Hassle Free & Queue free
    Time and Attendance system</h1>
    <img src={BlogPage3} alt="" />
    <div>
        <p>Running a business can feel like juggling numerous tasks, but managing employee attendance shouldn’t be overwhelming. That's where NoQu TAM steps in, revolutionizing attendance management with its seamless solution.</p>
        <p>Gone are the days of long queues and piles of paperwork. NoQu TAM brings cutting-edge features like facial recognition and QR code scanning, allowing employees to clock in with a simple swipe. This frees them from the frustration of waiting in line but makes attendance tracking a smooth and effortless process.</p>
        <p>Yet, NoQu TAM goes beyond mere attendance management. Its integrated system offers features like live tracking, geo-fencing, and notifications. This means managers can stay informed about their workforce's movements in real-time, ensuring compliance with designated areas and eliminating concerns about unauthorized access or missed shifts.</p>
        <p>Furthermore, NoQu TAM seamlessly integrates with existing systems like payroll and HR software, streamlining the entire workforce management process. With data entry and reducing administrative burden, businesses can redirect their focus toward enhancing productivity and fostering growth by automating.</p>
        <p>NoQu TAM redefines attendance management, offering a hassle-free solution that empowers businesses to streamline operations and maximize efficiency. Bid farewell to the frustrations of long queues and paperwork and welcome a new era of productivity with NoQu TAM leading the way.</p>
        <p>NoQu TAM achieves with the following features, AI-based Facial Recognition system, Live Location Tracking, Geo-Fencing, API Integration, Reports & Dashboards, Access Control, Organizational Charts, Access Control, Roles/Permissions, and Notifications.</p>
    </div>

    <Link to = "/Blog"><button>back</button></Link> 
    </div>
  )
}

export default Blog3