import React, { useEffect } from 'react'
import "./Award3.css"
import News2 from '../../../assets/News2.jpeg'
import { Link } from 'react-router-dom'
const Award3 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className='Newspage2'>
        <h1 className='TAM_h1'>DPIIT</h1>
        <h5 className='TAM_h5'>Department for Promotion of Industry and Internal Trade</h5>
        <div className="Newspage2-content">
            <div>
                <img src={News2} alt="" />
            </div>
            <div className="Newspage2-text">
                <p>In a moment of pride, NoQu announces the acquisition of DPIIT recognition, a prestigious acknowledgment that solidifies its standing as a promising startup. As a dynamic and vibrant company, NoQu is celebrated for its significant contributions to innovation, playing a pivotal role in driving economic development and fostering job creation within its industry.</p>
                <p>The DPIIT recognition serves as a testament to NoQu's commitment to excellence and its dedication to pushing the boundaries of innovation. This milestone not only validates the company's current achievements but also propels it forward as a key player in the technology solutions sector. With a focus on shaping the future, NoQu anticipates leveraging this recognition to further fuel its trajectory of success, making lasting contributions to the industry and beyond</p>
            </div>
        </div>
        <div className="Newspage2_button">
            <Link to="/Awards"><button>Back</button></Link>
        </div>
    </div>
  )
}

export default Award3