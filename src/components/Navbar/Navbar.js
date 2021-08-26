import React from 'react';
import '../assets/style.css'
import 'swiper/swiper-bundle';
import '../../../node_modules/swiper/swiper-bundle.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel';
import '@popperjs/core/dist/umd/popper.min';
import 'jquery/dist/jquery.min';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';

//links 
import Diagnostics from '../Diagnostics/Diagnostics'

//images 
import logo from "../assets/img/logo.png"

const Navbar = () => {
    return ( 
<header className="header header-trans">
<nav className="navbar navbar-expand-lg header-nav">
    <div className="navbar-header">
        <a id="mobile_btn" href={() => false}>
            <span className="bar-icon">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </a>
        <a href="index.html" className="navbar-br/and logo">
            <img src={logo} className="img-fluid" alt="Logo"/>
        </a>
    </div>
    <div className="main-menu-wrapper">
        <div className="menu-header">
            <a href="index.html" className="menu-logo">
                <img src={logo} className="img-fluid" alt="Logo"/>
            </a>
            <a id="menu_close" className="menu-close" href={() => false}>
                <FontAwesomeIcon icon={faTimes} />
            </a>
        </div>
        <ul className="main-nav" >
            
            <li className="has-submenu">
                <a href="#/">Pharmacy</a>
            </li>
            <li className="has-submenu">
                <a href={Diagnostics}>Diagnostics</a>
            </li>
            <li className="has-submenu">
                <a href="#/">Hospitals</a>
            </li>
            <li className="has-submenu">
                <a href="#/">Maternity</a>
            </li>
            <li className="has-submenu">
                <a href="#/">More&nbsp;<FontAwesomeIcon icon={faChevronDown}/></a>  
                <ul className="submenu">
                    <li><a href="pharmacy-index.html">Health Insurance</a></li>
                    <li><a href="pharmacy-details.html">Medical Tourism</a></li>
                </ul>
            </li>
            
        </ul>		 
    </div>		 
    <ul className="nav header-navbar-rht">
        <li className="nav-item contact-item">
        </li>
        <li className="nav-item">
            <a className="nav-link header-login" href="#/">login / Signup </a>
        </li>
    </ul>
</nav>
</header>
     );
}
 
export default Navbar;

