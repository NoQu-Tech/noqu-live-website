import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Scan_Features3.css';

import scan_f1_icon from '../../assets/Scan/scan_f1_icon.png'
import scan_f2_icon from '../../assets/Scan/scan_f2_icon.png'
import scan_f3_icon from '../../assets/Scan/scan_f3_icon.png'
import scan_f4_icon from '../../assets/Scan/scan_f4_icon.png'
import scan_f5_icon from '../../assets/Scan/scan_f5_icon.png'
import scan_f6_icon from '../../assets/Scan/scan_f6_icon.png'

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const ScanFeatureCard = ({img, h1, p1, p2, p3, zIndex}) => {

    return(
        <div className="ScanFeatureCard" style={{zIndex : {zIndex}}}>
            <div className="ScanFeatureCard_img">
                <img src={img} alt="" />
            </div>
            <div className="ScanFeatureCard_content">
                <h5>{h1}</h5>
                <ul>
                    <li><span>●</span>  <p>{p1}</p></li>
                    <li><span>●</span>  <p>{p2}</p></li>
                    <li><span>●</span>  <p>{p3}</p></li>
                </ul>
            </div>
        </div>
    )
}

export default function Scan_Features3() {

    const features = [
        {id:1,img:scan_f1_icon,h1:"Face Recognition-Based Onboarding",p1:"AI facial recognition system", p2:"offline and online platforms", p3: "Multiple gate entry authorization."},
        {id:2,img:scan_f2_icon,h1:"Web-based Regularization",p1:"Real-time update", p2:"Authorized personnel authentication", p3: "Accessibility and compatibility"},
        {id:3,img:scan_f3_icon,h1:"Offline Attendance",p1:"Timestamping",p2:"Offline storage", p3:"Data synchronization"},
        {id:4,img:scan_f4_icon,h1:"Multiple Gate Attendance Marking",p1:"Mark attendance at multiple entry points", p2:"Flexible for organizations", p3:"Customizable gate settings"},
        {id:5,img:scan_f5_icon,h1:"Centralized Control",p1:"All-in-one Admin dashboard", p2:"Oversee and manage attendance data", p3:"360-degree Attendance monitoring"},
        {id:6,img:scan_f6_icon,h1:"Payroll & HRMS Integration",p1:"Seamlessly integrates", p2:"Ensuring secure and reliable authentication", p3:"Transparent and efficiency"}
    ]

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={2}
        loop={true}
        autoplay={{
        delay: 10000,
        disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={ {pagination:true, clickable: true} }
        modules={[EffectCoverflow, Pagination, Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="ScanSwiper"
      >
        <SwiperSlide>
        < ScanFeatureCard         
                img={features[0].img} 
                h1={features[0].h1} 
                p1={features[0].p1}
                p2={features[0].p2}
                p3={features[0].p3} />
        </SwiperSlide>
        <SwiperSlide>
        < ScanFeatureCard         
                img={features[1].img} 
                h1={features[1].h1} 
                p1={features[1].p1}
                p2={features[1].p2}
                p3={features[1].p3} />
        </SwiperSlide>
        <SwiperSlide>
        < ScanFeatureCard         
                img={features[2].img} 
                h1={features[2].h1} 
                p1={features[2].p1}
                p2={features[2].p2}
                p3={features[2].p3} />
        </SwiperSlide>
        <SwiperSlide>
        < ScanFeatureCard         
                img={features[3].img} 
                h1={features[3].h1} 
                p1={features[3].p1}
                p2={features[3].p2}
                p3={features[3].p3} />
        </SwiperSlide>
        <SwiperSlide>
        < ScanFeatureCard         
                img={features[4].img} 
                h1={features[4].h1} 
                p1={features[4].p1}
                p2={features[4].p2}
                p3={features[4].p3} />
        </SwiperSlide>
        <SwiperSlide>
        < ScanFeatureCard         
                img={features[5].img} 
                h1={features[5].h1} 
                p1={features[5].p1}
                p2={features[5].p2}
                p3={features[5].p3}/>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
