import React, { useEffect } from 'react'
import './TAM_cs.css'
import caseStudy3 from '../../../assets/TAM/caseStudy3.jpeg'
import { Link } from 'react-router-dom'
const TAM_cs3 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      const handleClick = () => {
        const pdfUrl = 'src/assets/cs3.pdf';
        const mimeType = 'application/pdf';
        window.open(pdfUrl, '_newtab', `mime=${mimeType}`);
    };
  return (
    <div className='TAM_cases'>
        <div className="TAM_cases-img">
            <img src={caseStudy3} alt="" />
        </div>
        <h1 className='TAM_h1'>Supply Chain and Logistics Industry</h1>
        <div className="TAM_cases-content">
            <h5>Background</h5>
            <p>A prominent player in the supply chain and logistics sector grappled with workforce management challenges, delayed deliveries, and operational disruptions due to manual processes. The dynamic and extensive logistics network required a transformative solution to optimize operations.</p>
            <h5>Challenges</h5>
            <p>The challenges included inefficient workforce management, delays impacting customer satisfaction, manual processes leading to errors, and a lack of real-time visibility across the logistics network.</p>
            <h5>Solutions Proposed by NoQu</h5>
            <p>NoQu TAM introduced AI-enabled Facial Recognition for precise workforce tracking, Live workforce tracking optimized logistics operations, Geo-Fencing ensured heightened security, and Seamless API Integration facilitated accurate data flow. Workflow Alignment pre- emptively prevented disruptions in logistics operations.</p>
            <h5>Results</h5>
            <p>The implementation of NoQu TAM resulted in improved efficiency in workforce management, ensuring timely deliveries through real-time tracking and predictive analytics. This integration into their system significantly reduced errors, enhancing operational accuracy. Security measures, including geo-fencing and access control, collectively improved security within logistics zones.

NoQu TAM's real-time visibility across the logistics network enabled better coordination and minimized disruptions. Detailed reports and dashboards empowered logistics managers with actionable insights, facilitating data-driven decision-making.</p>
            <h5>Key Factors</h5>
            <ul>
                <li>• Live workforce tracking for efficient logistics.</li>
                <li>• Geo-fencing for improved security.</li>
                <li>• Seamless API integration for accurate data flow.</li>
                <li>• Workflow alignment for preventing disruptions.</li>
                <li>• Detailed reports and dashboards for actionable insights.</li>
            </ul>
            <div className="TAM_cases-content-buttons">
                <Link to="/TAM_CaseStudies"><button>back</button></Link>
                <button onClick={handleClick}>download</button>
            </div>
        </div>
    </div>
  )
}

export default TAM_cs3