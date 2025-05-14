import React, { useEffect, useLayoutEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import call from '../../assets/call.png'
import { Link } from 'react-router-dom';
import Navbar_mobile from './Navbar_mobile';
import TAM_mobile_nav from './TAM_mobile_nav';
import { useLocation } from 'react-router-dom';

const Navbar = () => {

  const [navbar, setNavbar] = useState(<Navbar_mobile />);
  const location = useLocation();

  const navbarComponents = {
    '/tam-time-and-attendance-management': <TAM_mobile_nav />,
    '/tam-support': <TAM_mobile_nav />,
    '/tam-caseStudies': <TAM_mobile_nav />,
    '/tam-pricing': <TAM_mobile_nav />,
    '/health-care-industry': <TAM_mobile_nav />,
    '/financial-institutions': <TAM_mobile_nav />,
    '/supply-chain-and-logistics-industry': <TAM_mobile_nav />,
    '/construction-industry': <TAM_mobile_nav />,
    '/manpower-and-staffing-industry': <TAM_mobile_nav />,
    '/retail-chain': <TAM_mobile_nav />,
    '/manufacturing-industry': <TAM_mobile_nav />,
  };

  useLayoutEffect(() => {
    const currentPath = location.pathname;
    const navbarComponent = navbarComponents[currentPath] || <Navbar_mobile />;
    setNavbar(navbarComponent);
  }, [location.pathname]);


  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className='navbar-links_logo'>
          <Link to="/home" ><img src={logo} alt="logo" /></Link>

        </div>
        <div className="nav_link_box1">
          <div className='navbar-links_container'>
            <ul>
              <li><p><Link to="/home" >Home</Link></p></li>
              <li className='Navbar_product'>
                <p><Link to="#" >Products</Link></p>
                <div className='Navbar_product_list'>
                  <ul className="Navbar_product_list_dropdown">
                    <li style={{marginLeft:"0px"}}>
                      <Link to="#">NoQu Office</Link>
                      <ul className="Navbar_product_dropdown">
                        <li><Link to="/tam-time-and-attendance-management">TAM(Time And Attendence Management)</Link></li>
                        {/* <li><Link to="/scan-homepage">NoQu Scan</Link></li> */}
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='Navbar_company'>
                
                <p><Link to="#" >Company</Link></p>
                <ul className="Navbar_company_dropdown">
                
                  <Link to="/about-us"><li>AboutUs</li></Link>
                  <Link to="/news"><li>News</li></Link>
                  <Link to="/awards"><li>Awards</li></Link>
                  <Link to="/career"><li>Career</li></Link>
                  <Link to="/contact"> <li>Contact</li></Link>
                </ul>
              </li>
              <li><p><Link to="/channel-partner" >Channel Partner</Link></p></li>
            </ul>
          </div>
          <div className="navbar-demo scale-hover">
            <a href="callto:+91 7401600600"><button><img src={call} width={25} /><p>+91 7401 600 600</p></button></a>
          </div>
        </div>
      </div>
      <div className="navbar-menu-wraper">
        <div className="navbar-menu">
          {navbar}
        </div>
      </div>
    </div>
  )
}

export default Navbar