import React, { useEffect } from 'react'
import "./Awards.css"
import awards1 from '../../../assets/awards1.jpg'
import awards2 from '../../../assets/awards2.jpeg'
import awards3 from '../../../assets/awards3.jpeg'
import { Link } from 'react-router-dom'

const Awards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='awards'>
        <h1>Awards</h1>
        <div className="award_section">
            <Link to="/Award1">            
                <div className="award_1">
                      <img src={awards1} alt="" />
                      <h5>ISO / IEC 27001: 2022</h5>
                </div>
            </Link>
            <Link to="/Award3">
                <div className="award_1">
                  <img src={awards2} alt="" />
                  <h5>DPIIT</h5>
                </div>
            </Link>
            <Link to="/Award2">
              <div className="award_1">
                  <img src={awards3} alt="" />
                  <h5>StartupTN</h5>
              </div>  
            </Link>
            <a href='https://www.softwaresuggest.com/noqu' target='_blank'>
            <div className="award_1">
                  <img src='https://www.softwaresuggest.com/award_logo/highly-recommended-winter-2024.png' alt="" />
                  <h5>Software Suggest</h5>
              </div> 
            </a>


        </div>
    </div>
  )
}

export default Awards