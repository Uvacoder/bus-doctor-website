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
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAngleDoubleRight, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

//images 
import google from '../assets/img/app/googleplay.png';
import appStore from '../assets/img/app/appstore.png';
import footerLogo from "../assets/img/footer-logo.png"

const Footer = () => {
    return ( 
        <footer className="footer">
        
        <div className="footer-top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                    
                        <div className="footer-widget footer-about">
                            <div className="footer-logo">
                                <img src={footerLogo} alt="logo"/>
                            </div>
                            <div className="footer-about-content">
                                <h5>Medatu Solutions Private Limited</h5>
                                <h5>
                                    <FontAwesomeIcon icon={faPhoneAlt} />&nbsp;
                                    +91 XXXXXXXXXX
                                </h5>
                                <h5>
                                    <FontAwesomeIcon icon={faEnvelope} />&nbsp;
                                    care@medatu.com
                                </h5>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="col-lg-2 col-md-6">
                    <div className="footer-widget footer-menu">
                        <h2 className="footer-title">Company</h2>
                        <ul>
                                <li><FontAwesomeIcon icon={faAngleDoubleRight}/><a href="search.html">About Us</a>
                            </li>
                                <li><FontAwesomeIcon icon={faAngleDoubleRight}/><a href="login.html">Our Services</a>
                            </li>
                                <li><FontAwesomeIcon icon={faAngleDoubleRight}/><a href="register.html">How It Works</a>
                            </li>
                                <li><FontAwesomeIcon icon={faAngleDoubleRight}/><a href="booking.html">Blog</a>
                            </li>
                                <li><FontAwesomeIcon icon={faAngleDoubleRight}/><a href="patient-dashboard.html">FAQs</a>
                            </li>
                            <li><FontAwesomeIcon icon={faAngleDoubleRight}/><a href="register.html">Careers</a>
                            </li>
                                <li><FontAwesomeIcon icon={faAngleDoubleRight}/><a href="booking.html">Terms of Use</a>
                            </li>
                                <li><FontAwesomeIcon icon={faAngleDoubleRight}/><a href="patient-dashboard.html">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                    <div className="footer-widget footer-menu">
                        <h2 className="footer-title">For Patients</h2>
                        <ul>
                                <li><FontAwesomeIcon icon={faAngleDoubleRight}/><a href="search.html">Language</a>
                            </li>
                                <li><FontAwesomeIcon icon={faAngleDoubleRight}/><a href="login.html">Speciality</a>
                            </li>
                                <li><FontAwesomeIcon icon={faAngleDoubleRight}/><a href="register.html">Ayurvedic Doctors</a>
                            </li>
                                <li><FontAwesomeIcon icon={faAngleDoubleRight}/><a href="booking.html">Homeopathy Doctors</a>
                            </li>
                                <li><FontAwesomeIcon icon={faAngleDoubleRight}/><a href="patient-dashboard.html">Book Lab Test</a>
                            </li>
                            <li><FontAwesomeIcon icon={faAngleDoubleRight}/><a href="register.html">Health Insurance</a>
                            </li>
                                <li><FontAwesomeIcon icon={faAngleDoubleRight}/><a href="booking.html">Maternity</a>
                            </li>
                                <li><FontAwesomeIcon icon={faAngleDoubleRight}/><a href="patient-dashboard.html">Help Center</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                    <div className="footer-widget footer-menu">
                        <h2 className="footer-title">For Professionals</h2>
                        <ul>
                                <li><FontAwesomeIcon icon={faAngleDoubleRight}/><a href="search.html">Doctor’s Profile</a>
                            </li>
                                <li><FontAwesomeIcon icon={faAngleDoubleRight}/><a href="login.html">Hospital</a>
                            </li>
                                <li><FontAwesomeIcon icon={faAngleDoubleRight}/><a href="register.html">Diagnostic Labs</a>
                            </li>
                                <li><FontAwesomeIcon icon={faAngleDoubleRight}/><a href="booking.html">Booking</a>
                            </li>
                                <li><FontAwesomeIcon icon={faAngleDoubleRight}/><a href="patient-dashboard.html">Insurance carriers</a>
                            </li>
                        </ul>
                    </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                    
                    <div className="footer-widget text-left footer-menu">
                        <h5>Get the Medatu App, now!</h5>
                        <img src={google} alt="" width={140} height={40} style={{marginRight: "1rem"}}/><img src={appStore} alt="" width={140} height={40}/>
                    </div>
                        <br /><div className="social-icon">
                                    <ul>
                                        <li>
                                            <a href="#/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                                        </li>
                                        <li>
                                            <a href="#/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                                        </li>
                                        <li>
                                            <a href="#/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                                        </li>
                                        <li>
                                            <a href="#/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                                        </li>
                                    </ul>
                                </div>
                    </div>
                    </div>
                    
            </div>
        </div>
    
        <div className="footer-bottom">
            <div className="container-fluid">
            
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <div className="copyright-text">
                                <p className="mb-0">&copy; 2021 Medatu. All rights reserved.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                        
                            <div className="copyright-menu">
                                <ul className="policy-menu">
                                    <li><a href="term-condition.html">Terms and Conditions</a></li>
                                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;