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

  // const [visible, setVisible] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // const handleScroll = () => {
  //      const currentScrollY = window.scrollY;

  //      if (currentScrollY > lastScrollY && currentScrollY > 50) {
  //        // Scrolling down
  //        setVisible(false);
  //      } else {
  //        // Scrolling up
  //        setVisible(true);
  //      }

  //      setLastScrollY(currentScrollY);
  //    };

  //    useEffect(() => {
  //      window.addEventListener('scroll', handleScroll);

  //      return () => {
  //        window.removeEventListener('scroll', handleScroll);
  //      };
  //    }, [lastScrollY]);

  const navbarComponents = {
    '/TAM_home_page': <TAM_mobile_nav />,
    '/TAM_Support': <TAM_mobile_nav />,
    '/TAM_CaseStudies': <TAM_mobile_nav />,
    '/tam-pricing': <TAM_mobile_nav />,
    '/TAM_cs1': <TAM_mobile_nav />,
    '/TAM_cs2': <TAM_mobile_nav />,
    '/TAM_cs3': <TAM_mobile_nav />,
    '/TAM_cs4': <TAM_mobile_nav />,
    '/TAM_cs5': <TAM_mobile_nav />,
    '/TAM_cs6': <TAM_mobile_nav />,
    '/TAM_cs7': <TAM_mobile_nav />,
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
          <Link to="/Home" ><img src={logo} alt="logo" /></Link>

        </div>
        <div className="nav_link_box1">
          <div className='navbar-links_container'>
            <ul>
              <li><p><Link to="/Home" >Home</Link></p></li>
              <li className='Navbar_product'>
                <p><Link to="#" >Products</Link></p>
                <div className='Navbar_product_list'>
                  <ul className="Navbar_product_list_dropdown">
                    <li style={{marginLeft:"0px"}}>
                      <Link to="#">NoQu Office</Link>
                      <ul className="Navbar_product_dropdown">
                        <li><Link to="/TAM_home_page">TAM(Time And Attendence Management)</Link></li>
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
                  <Link to="/News"><li>News</li></Link>
                  <Link to="/Awards"><li>Awards</li></Link>
                  <Link to="/Career"><li>Career</li></Link>
                  <Link to="/Contact"> <li>Contact</li></Link>
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