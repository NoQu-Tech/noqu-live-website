import React, { useEffect } from 'react'
import './Contact.css'
import phone1 from '../../../assets/phone1.svg'
import email1 from '../../../assets/email1.svg'
import whatsup1 from '../../../assets/whatsup1.svg'
import callcenter1 from '../../../assets/callcenter1.svg'
import mail1 from '../../../assets/mail1.png'
import ContactFrom from '../../../Containers/RegForms/ContactFrom'
const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className='Contact'>
        <h1></h1>
        <div className="Contact_types">
            <div className="Contact_types-1">
                  < ContactFrom />
            </div>
            <div className="Contact_types-2">
                  <div className="Contact_types-box1">
                     <div className="Contact_types-box1-container">
                        <div>
                            <a href="tel:+91 7401600600">
                                <img src={phone1} alt="" />
                            </a>
                            <h5>Sales</h5>
                        </div>
                        <div>
                            <a href="https://api.whatsapp.com/send?phone=917401600600&text=Hello NoQu">
                                <img src={whatsup1} alt="" />
                            </a>
                            <h5>Whatsapp</h5>
                        </div>
                     </div>
                     <div className="Contact_types-box1-container">
                        <div>
                            <a href="mailto:support@noqu.in">
                            <img src={email1} alt="" />
                            </a>
                            <h5>Email</h5>
                        </div>
                        <div>
                            <a href="tel:+91 7401600600"><img src={callcenter1} alt="" /></a>
                            <h5>Call Center</h5>
                        </div>
                     </div>
                  </div>
                  <div className="Contact_types-box2">
                    <a href="mailto:support@noqu.in">
                        <div className='Contact_types-box2-div'>
                                <img src={mail1} alt="" />
                                <div className="Contact_types-box2-container">
                                    <h5>SUPPORT</h5>
                                    <p>support@noqu.in</p>
                                </div>
                            </div>
                    </a>
                    <a href="mailto:sales@noqu.in">
                        <div className='Contact_types-box2-div'>
                                <img src={mail1} alt="" /> 
                                <div className="Contact_types-box2-container">
                                    <h5>SALES</h5>
                                    <p>sales@noqu.in</p>
                                </div>
                            </div>
                    </a>
                    <a href="mailto:info@noqu.in">
                        <div className='Contact_types-box2-div'>
                                <img src={mail1} alt="" /> 
                                <div className="Contact_types-box2-container">
                                    <h5>COMPANY</h5>
                                    <p>info@noqu.in</p>
                                </div>
                            </div>
                    </a>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Contact