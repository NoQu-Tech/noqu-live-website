import React, { useEffect } from 'react'
import './TAM_cs.css'
import caseStudy2 from '../../../assets/TAM/caseStudy2.jpeg'
import { Link } from 'react-router-dom'

const TAM_cs2 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      const handleClick = () => {
        const pdfUrl = 'src/assets/cs2.pdf';
        const mimeType = 'application/pdf';
        window.open(pdfUrl, '_newtab', `mime=${mimeType}`);
    };
  return (
    <div className='TAM_cases'>
        <div className="TAM_cases-img">
            <img src={caseStudy2} alt="" />
        </div>
        <h1 className='TAM_h1'>Financial Institutions</h1>
        <div className="TAM_cases-content">
            <h5>Background</h5>
            <p>Our Finance is a significant player in the financial industry, found itself grappling with operational challenges. The optimization of collection staff efficiency, in-house monitoring, and ensuring timely customer service across various business units became a pressing concern. The reliance on manual processes led to inefficiencies, delayed services, and challenges with staff management.</p>
            <h5>Challenges</h5>
            <p>Inefficient manual procedures harmed the efficiency of operations as a whole, and the incapacity to guarantee the timely deployment of collection agents impeded the provision of timely customer service. The inability to monitor in real-time makes it difficult for internal teams to make well-informed decisions. Security risks were associated with manual access control, particularly when handling sensitive financial data.</p>
            <h5>Solutions Proposed by NoQu</h5>
            <p>To address operational challenges in our industry, NoQu TAM implemented tailored solutions for financial institutions. Real-time tracking of collection agents optimized deployment and resource allocation, ensuring efficiency in operations. Geo-fencing created virtual boundaries, enhancing security and monitoring, while API integration streamlined data flow with existing systems, such as CRM and payment processing. Workflow integration prevented disruptions, aligning attendance tracking with daily operations. Robust reporting features and dashboards provided comprehensive insights, aiding quick decision-making. Access control measures and customization of roles ensured data security, limiting access to sensitive information.</p>
            <h5>Results</h5>
            <p>The implementation of NoQu TAM in our industry yielded transformative outcomes. Streamlining collection operations, improved staff efficiency and resource allocation. Real- time tracking empowered in-house teams, leading to enhanced operational control and efficiency. The deployment of collection agents became more punctual, ensuring prompt customer service. Automation and integration significantly reduced manual errors, resulting in a more accurate and reliable operational system. Access control and roles/permissions collectively improved security, safeguarding sensitive financial areas and customer information. Detailed reports and dashboards provided actionable insights, contributing to better overall financial operations management. NoQu TAM emerged as a game-changer, positioning our industry for sustained success and customer satisfaction in the dynamic financial sector.</p>
            <h5>Key Factors</h5>
            <ul>
                <li>• Real-time tracking for optimized resource allocation.</li>
                <li>• Geo-fencing for enhanced security.</li>
                <li>• Seamless API integration for streamlined data flow.</li>
                <li>• Workflow alignment for preventing disruptions.</li>
                <li>• Access control and customisable roles for data security.</li>
            </ul>
            <div className="TAM_cases-content-buttons">
                <Link to="/TAM_CaseStudies"><button>back</button></Link>
                <button onClick={handleClick}>download</button>
            </div>
        </div>
    </div>
  )
}

export default TAM_cs2