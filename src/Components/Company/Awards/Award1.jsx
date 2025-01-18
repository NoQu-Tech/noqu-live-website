import React, { useEffect } from 'react'
import "./Award1.css"
import News4 from '../../../assets/News4.jpg'
import { Link } from 'react-router-dom'

const Award1 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className='Newspage4'>
        <h1 className='TAM_h1'>ISO Certificate</h1>
        <div className="Newspage4-content1">
            <img src={News4} alt="" />
            <div className="Newspage4-content1-text">
                    <p>In a significant stride towards ensuring top-notch information security, NoQu proudly announces its certification under the globally acclaimed ISO/IEC 27001:2022 standard. This certification isn't just a badge; it's a testament to our commitment to safeguarding your data in an ever-evolving digital landscape</p>
                    <p>ISO/IEC 27001:2022 is like a security handbook for handling digital information. It's a guide that helps companies, like NoQu , set up and continuously improve a system to keep their data safe. No matter the size or sector, this certification provides a blueprint for companies to manage risks associated with their data securely</p>
                    <p>This is like a stamp of approval, showing that we're not just putting a quick fix on data security; we have built a strong and reliable system. It means we're experts at managing risks and using the best methods recommended in this global standard to protect your data</p>
            </div>
        </div>
        <div className="Newspage4-content2">
            <h2 className='TAM_h1'>Why should you care?</h2>
            <div className="Newspage4-content2-text">
                <p>Well, with the ever-growing threat of cyber-crime and new dangers lurking around every digital corner, managing cyber-risks is no walk in the park. ISO/IEC 27001:2022 empowers organizations to be cybersavvy, helping them spot and tackle weaknesses before they become a headache.</p>
                <p>NoQu isn't just about tech; we are about being proactive in addressing risks and championing a holistic approach to information security. From vetting people and policies to the latest in technology, our ISO/IEC 27001:2022 certified information security management system is your shield against cyber threats. It's not just a certification;it's a tool for managing risks, ensuring cyber-resilience, and achieving operational excellence.</p>
                <p>In a world where data is king, trust NoQu –where ISO/IEC 27001:2022 certification isn't just a milestone; it's our commitment to keeping your information safe, always</p>
            </div>
        </div>
        <div className="Newspage4_button">
            <Link to="/Awards"><button>Back</button></Link>
        </div>
    </div>
  )
}

export default Award1