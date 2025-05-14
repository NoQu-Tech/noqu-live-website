import React, { useEffect } from 'react'
import "./TAM_CaseStudies.css"
import casestudybanner from '../../../assets/TAM/casestudybanner.png'
import TAM_Casestudy from '../../../Containers/TAM_Casestudy/TAM_Casestudy'
import cs_head1 from '../../../assets/TAM/cs_head1.svg'
import cs_head2 from '../../../assets/TAM/cs_head2.svg'
import cs_head3 from '../../../assets/TAM/cs_head3.svg'
import cs_head4 from '../../../assets/TAM/cs_head4.svg'
import cs_head5 from '../../../assets/TAM/cs_head5.svg'
import cs_head6 from '../../../assets/TAM/cs_head6.svg'
import cs_head7 from '../../../assets/TAM/cs_head7.svg'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'

const TAM_CaseStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Helmet>
            <title>"Explore Case Studies: Employee Tracking & Time Attendance Management"</title>
            <meta name="description" content="Discover how NoQu's employee live tracking software and time attendance management system boost efficiency. Our technology eliminates queue time, improving productivity across sectors." />
            <meta property="og:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
            <meta property="og:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
            <meta property="og:image" content="https://noqu.in/logo.png" />
            <meta property="og:url" content="https://noqu.in/" />
            <meta name="twitter:card" content="NoQu" />
            <meta name="twitter:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
            <meta name="twitter:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
            <meta name="twitter:image" content="https://noqu.in/logo.png" />
        </Helmet>

      <div className='TAM_CaseStudies'>
          <div className="TAM_CaseStudies_head">
              <div className="TAM_CaseStudies_head">
                  <h5>Time and Attendance Management (TAM)</h5>
                  <h1 className='TAM_h1'>CASE STUDIES</h1>
                  <img src={casestudybanner} alt=""/>
              </div>
              <div className="TAM_CaseStudies_container">
              <Link to="/health-care-industry"><TAM_Casestudy img ={cs_head1} heading="Healthcare" text="The client's commitment to provide 24/7 medical services, faced workforce management challenges due to diverse departments and varying shifts. The existing practices resulted in delays, and errors, impacting patient care."/></Link>
              <Link to="/financial-institutions"><TAM_Casestudy img ={cs_head2} heading="Financial Institutions" text="The optimization of collection staff efficiency, in-house monitoring, and ensuring timely customer service across various business units became a pressing concern."/></Link>
              <Link to="/supply-chain-and-logistics-industry"><TAM_Casestudy img ={cs_head3} heading="Supply Chain and Logistics" text="Grappling with workforce management challenges, delayed deliveries, and operational disruptions, the dynamic and extensive logistics network required a transformative solution to optimize operations."/></Link>
              <Link to="/construction-industry"><TAM_Casestudy img ={cs_head4} heading="Construction" text="Faced with the unique challenges of orchestrating a multitude of tasks, personnel, and timelines in the dynamic construction environment, our client needed a transformative change."/></Link>
              <Link to="/manpower-and-staffing-industry"><TAM_Casestudy img ={cs_head5} heading="Manpower and Staffing" text="Faced with the challenges of diverse staffing needs, timely placements, and ensuring client satisfaction, our clients sought a comprehensive tool to revolutionize their operations."/></Link>
              <Link to="/retail-chain"><TAM_Casestudy img ={cs_head6} heading="Retail Chain" text="In the busy world of retail, where every sale matters, Rishwant Traders aimed to make their operations and customer service better."/></Link>   
              <Link to="/manufacturing-industry"><TAM_Casestudy img ={cs_head7} heading="Manufacturing" text="Manual processes and a lack of real-time visibility led to operational bottlenecks, delays, and difficulties in coordinating a diverse workforce in a dynamic manufacturing environment."/></Link>                                                                                                </div>
          </div>
      </div>
    </>
  )
}

export default TAM_CaseStudies