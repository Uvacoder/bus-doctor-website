import React, { Component } from "react";
import Slider from "react-slick";
import '../assets/style.css'
import 'swiper/swiper-bundle';
import '../../../node_modules/swiper/swiper-bundle.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/umd/popper.min';
import 'jquery/dist/jquery.min';

//images
import sOne from "../assets/img/specialities/specialities-01.png";
import sTwo from "../assets/img/specialities/specialities-02.png";
import sThree from "../assets/img/specialities/specialities-03.png";
import sFour from "../assets/img/specialities/specialities-04.png";
import sFive from "../assets/img/specialities/specialities-05.png";
import sSix from "../assets/img/specialities/specialities-06.png";
import sSeven from "../assets/img/specialities/specialities-07.png";

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1
    };
    return (
        <section className="section section-specialities">
        <div className="container">
                <div className="section-header text-center">
                    <h2>Clinics and Specialities</h2>
                    <p className="sub-title">Professionals With Over 10+ Years of Experience Across All Specialties. Book An In-Clinic Consultation with Just a Click!</p>
                </div>
        <Slider {...settings}>
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <img src={sOne} className="img-fluid" alt="Speciality"/>
          </div>
          <p>Urology</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <img src={sTwo} className="img-fluid" alt="Speciality"/>
          </div>
          <p>Neurology</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <img src={sThree} className="img-fluid" alt="Speciality"/>
          </div>
          <p>Orthopaedics</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <img src={sFour} className="img-fluid" alt="Speciality"/>
          </div>
          <p>Cardiologist</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <img src={sFive} className="img-fluid" alt="Speciality"/>
          </div>
          <p>Dentist</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <img src={sSix} className="img-fluid" alt="Speciality"/>
          </div>
          <p>Ophthalmologist</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <img src={sSeven} className="img-fluid" alt="Speciality"/>
          </div>
          <p>Paediatrics</p>
        </div>
        </Slider>
        </div>
        </section>
    );
  }
}