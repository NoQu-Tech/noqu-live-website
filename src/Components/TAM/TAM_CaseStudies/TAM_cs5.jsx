import React, { useEffect } from 'react'
import './TAM_cs.css'
import caseStudy5 from '../../../assets/TAM/caseStudy5.jpeg'
import { Link } from 'react-router-dom'

const TAM_cs5 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      const handleClick = () => {
        const pdfUrl = 'src/assets/cs5.pdf';
        const mimeType = 'application/pdf';
        window.open(pdfUrl, '_newtab', `mime=${mimeType}`);
    };
  return (
    <div className='TAM_cases'>
        <div className="TAM_cases-img">
            <img src={caseStudy5} alt="" />
        </div>
        <h1 className='TAM_h1'>Manpower and Staffing Industry</h1>
        <div className="TAM_cases-content">
            <h5>Background</h5>
            <p>Manpower and Staffing Industry Challenged by the complexities of diverse staffing requirements, timely placements, and the imperative of ensuring client satisfaction, our clients in the manpower industry sought a transformative tool to modernize their operations. Faced with limitations in manual processes to meet the evolving demands of the industry, the need for an innovative solution became apparent.</p>
            <h5>Challenges</h5>
            <p>The client grappled with the management of diverse staffing needs, struggled to ensure timely placements, and encountered difficulties in consistently meeting client satisfaction benchmarks. Manual processes proved insufficient for the dynamic nature of the manpower industry.</p>
            <h5>Solutions Proposed by NoQu</h5>
            <p>The integration of NoQu TAM catalysed a transformative shift in the client’s operations. Staffing efficiency witnessed a significant improvement with real-time tracking, and Geo- Fencing enhanced security measures at client locations. Timely placements became a hallmark of the client's service, contributing to heightened client satisfaction. Data-driven decision-making was empowered through detailed reports and dashboards, offering insights into industry trends and operational metrics. The client experienced a reduction in manual errors, ensuring smoother operations and improved overall efficiency in meeting the diverse staffing needs of their clients.</p>
            <h5>Results</h5>
            <p>The integration of NoQu TAM yielded optimized construction coordination, ensuring efficiency in tasks and personnel deployment. Real-time tracking contributed to timely project completion, reducing delays and enhancing operational precision. Safety measures were enhanced through geo-fencing, access control, and roles/permissions features. Real-time visibility improved coordination, and detailed reports empowered construction managers with actionable insights, contributing to data-driven decision-making.</p>
            <h5>Key Factors</h5>
            <ul>
                <li>• Real-time tracking for optimized staffing deployment.</li>
                <li>• Geo-fencing for enhanced security.</li>
                <li>• Seamless API integration for accurate data flow.</li>
                <li>• Workflow alignment for timely and efficient placements.</li>
                <li>• Access control and customizable roles for secure data management.</li>
            </ul>
            <div className="TAM_cases-content-buttons">
                <Link to="/TAM_CaseStudies"><button>back</button></Link>
                <button onClick={handleClick}>download</button>
            </div>
        </div>
    </div>
  )
}

export default TAM_cs5