import React, { useEffect } from 'react'
import './TAM_cs.css'
import caseStudy4 from '../../../assets/TAM/caseStudy4.jpeg'
import { Link } from 'react-router-dom'
const TAM_cs4 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      const handleClick = () => {
        const pdfUrl = 'src/assets/cs4.pdf';
        const mimeType = 'application/pdf';
        window.open(pdfUrl, '_newtab', `mime=${mimeType}`);
    };
  return (
    <div className='TAM_cases'>
        <div className="TAM_cases-img">
            <img src={caseStudy4} alt="" />
        </div>
        <h1 className='TAM_h1'>Construction Industry</h1>
        <div className="TAM_cases-content">
            <h5>Background</h5>
            <p>Facing the unique challenges of orchestrating tasks, personnel, and timelines in the dynamic construction environment, our industry sought a transformative solution to elevate its operations to unprecedented heights.</p>
            <h5>Challenges</h5>
            <p>The complexities of construction coordination, timely deployment of personnel, manual processes leading to delays, and the critical need for safety posed significant challenges for Olympia Housing.</p>
            <h5>Solutions Proposed by NoQu</h5>
            <p>NoQu TAM addressed challenges with AI-enabled Facial Recognition for precise personnel tracking. Real-time personnel tracking improved deployment efficiency. Geo-fencing enhanced security, ensuring safety. API Integration streamlined operations and Workflow Integration prevented disruptions. Detailed Reports and Dashboards provided actionable insights. Access control and customizable roles ensured data security.</p>
            <h5>Results</h5>
            <p>The integration of NoQu TAM yielded optimized construction coordination, ensuring efficiency in tasks and personnel deployment. Real-time tracking contributed to timely project completion, reducing delays and enhancing operational precision. Safety measures were enhanced through geo-fencing, access control, and roles/permissions features. Real-time visibility improved coordination, and detailed reports empowered construction managers with actionable insights, contributing to data-driven decision-making.

NoQu TAM's real-time visibility across the logistics network enabled better coordination and minimized disruptions. Detailed reports and dashboards empowered logistics managers with actionable insights, facilitating data-driven decision-making.</p>
            <h5>Key Factors</h5>
            <ul>
                <li>• Real-time personnel tracking for efficient deployment.</li>
                <li>• Geo-fencing for enhanced security.</li>
                <li>• Seamless API integration with existing systems.</li>
                <li>• Workflow integration for preventing disruptions.</li>
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

export default TAM_cs4