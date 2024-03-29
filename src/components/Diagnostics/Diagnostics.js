import React from 'react';
import '../assets/style.css'
import SimpleSlider from './caroussel';
import '../../../node_modules/swiper/swiper-bundle.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/umd/popper.min';
import 'jquery/dist/jquery.min';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

//images
import iconOne from "../assets/img/specialities/svg/1.svg";
import iconTwo from "../assets/img/specialities/svg/2.svg";
import iconThree from "../assets/img/specialities/svg/3.svg";
import blogOne from "../assets/img/blog/blog-01.jpg"
import blogTwo from "../assets/img/blog/blog-02.jpg"
import blogThree from "../assets/img/blog/blog-03.jpg"
import specialityIcon from '../assets/img/specialities/specialities-01.png'
import topOne from "../assets/img/specialities/specialities-01.png"
import Feedback from './feedback';

const Diagnostics = () => {
	return ( 
<>
<section className="section section-search">
        <div className="container-fluid">
            <div className="banner-wrapper">
                <div className="banner-header text-center">
            
                <div className="search-box">
                    <form action="search.html">
                        <div className="form-group search-location">
                            <input type="text" className="form-control" placeholder="Search Location"/>
                        </div>
                        <div className="form-group search-info">
                            <input type="text" className="form-control" placeholder="Find a test"/>
                        </div>
                        <button type="submit" className="btn btn-primary search-btn mt-0"><FontAwesomeIcon icon={faSearch}/><span>Search</span></button>
                    </form>
                </div>
            
                </div>
            </div>
           
        </div>
    </section>
  
  <SimpleSlider/>


		  <section className="work-section">
		  <div className=" text-center container">
			<h2>How does Home Sample Pickup Work?</h2>
			<div className="row">
				<div className="col-lg-4">
					<img src={iconOne} alt=""/>
					<h6> To book a home visit, simply add your convenient time and location. Our certified professional from Medatu will be at your doorstep.</h6>
				</div>
				<div className="col-lg-4">
					<img src={iconTwo} alt=""/>
					<h6>Get your lab reports online within 24 hours.</h6>
				</div>
				<div className="col-lg-4">
					<img src={iconThree} alt=""/>
					<h6> Our certified professionals will treat you with utmost safety and follow strict hygiene protocols while collecting samples from you.</h6>
				</div>
			</div>
		  </div>
		  </section>

			<section className="section section-blogs" id="aff-blogs">
				<div className="container">
				
			
					<div className="section-header text-center">
						<h2>Affordable health Packages</h2>
						<p className="sub-title">Every time you book a test with Medatu, we connect you with the most leading and certified labs located near you.</p>
					</div>
					<div>
					<div style={{marginTop: "2rem"}} className="row blog-grid-row">
						<div className="col-md-6 col-lg-4 col-sm-12">
							<div className="blog-image">
								<a href="blog-details.html"><img className="img-fluid" src={blogOne} alt="Poster"/></a>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 col-sm-12">
							<div className="blog-image">
								<a href="blog-details.html"><img className="img-fluid" src={blogTwo} alt="Poster"/></a>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 col-sm-12">
							<div className="blog-image">
								<a href="blog-details.html"><img className="img-fluid" src={blogThree} alt="Poster"/></a>
							</div>
						</div>
					</div>
					</div>
					</div>
			
					<div className="container text-center"> 
						<a href="blog-list.html" className="btn view-btn">View All</a>
					</div>
			</section>

           
			<section id="browse-section">
				<div className="container-fluid">
					<div className="section-header text-center">
						<h2>Popular Categories</h2><br/><br/>
					</div>
					<div className="row">
						<div className="col-lg-2 col-md-3">
							<div className="brower-box">
								<div>
									<div className="brower-img">
										<img src={specialityIcon} alt=""/>
									</div>
									<h4>COVID-19</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-3">
							<div className="brower-box">
								<div>
									<div className="brower-img">
										<img src={specialityIcon} alt=""/>
									</div>
									<h4>Full Body Checkup</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-3">
							<div className="brower-box">
								<div>
									<div className="brower-img">
										<img src={specialityIcon} alt=""/>
									</div>
									<h4>Fever</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-3">
							<div className="brower-box">
								<div>
									<div className="brower-img">
										<img src={specialityIcon} alt=""/>
									</div>
									<h4>Diabetes</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-3">
							<div className="brower-box">
								<div>
									<div className="brower-img">
										<img src={specialityIcon} alt=""/>
									</div>
									<h4>Joint Pain</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-3">
							<div className="brower-box">
								<div>
									<div className="brower-img">
										<img src={specialityIcon} alt=""/>
									</div>
									<h4>Women’s Health</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-3">
							<div className="brower-box">
								<div>
									<div className="brower-img">
										<img src={specialityIcon} alt=""/>
									</div>
									<h4>Men’s Health</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-3">
							<div className="brower-box">
								<div>
									<div className="brower-img">
										<img src={specialityIcon} alt=""/>
									</div>
									<h4>Hormone</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-3">
							<div className="brower-box">
								<div>
									<div className="brower-img">
										<img src={specialityIcon} alt=""/>
									</div>
									<h4>Cancer</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-3">
							<div className="brower-box">
								<div>
									<div className="brower-img">
										<img src={specialityIcon} alt=""/>
									</div>
									<h4>Heart</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-3">
							<div className="brower-box">
								<div>
									<div className="brower-img">
										<img src={specialityIcon} alt=""/>
									</div>
									<h4>Liver</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-3">
							<div className="brower-box">
								<div>
									<div className="brower-img">
										<img src={specialityIcon} alt=""/>
									</div>
									<h4>Lungs</h4>
								</div>
							</div>
						</div>
					</div>
					<div className="container text-center"> 
						<a href="blog-list.html" className="btn view-btn">View All</a>
					</div>
				</div>
			</section>
	
			<section id="top-tests">
				<div className="section-header text-center">
					<h2>Top Rated-tests</h2>
				</div>
				<article className="top-test-sec">
					<div className="container">
						<div className="row">
							<div className="col-lg-4" id="top-test-col">
								<div className="top-test">
									<div className="top-test-1">
										<img className="top-test-img" src={topOne} alt=""/>
										<h4>Lorem, ipsum.</h4>
									</div>
									<h5>lorem ipsum doro</h5>
									<p>Lorem, ipsum dolor Lorem ipsum dolor sit.</p>
								</div>
								<div className="top-test">
									<h5>lorem ipsum doro</h5>
									<p>Lorem, ipsum dolor Lorem ipsum dolor sit.</p>
								</div>
								<div className="top-test">
									<h5>lorem ipsum doro</h5>
									<p>Lorem, ipsum dolor Lorem ipsum dolor sit.</p>
								</div>
								<div className="top-test">
									<h5>lorem ipsum doro</h5>
									<p>Lorem, ipsum dolor Lorem ipsum dolor sit.</p>
								</div>
								<div className="top-test">
									<h5>lorem ipsum doro</h5>
									<p>Lorem, ipsum dolor Lorem ipsum dolor sit.</p>
									<button type="button" className="btn btn-success">Know More</button>
								</div>
							</div>
							<div className="col-lg-4" id="top-test-col">
								<div className="top-test">
									<div className="top-test-1">
										<img className="top-test-img" src={topOne} alt=""/>
										<h4>Lorem, ipsum.</h4>
									</div>
									<h5>lorem ipsum doro</h5>
									<p>Lorem, ipsum dolor Lorem ipsum dolor sit.</p>
								</div>
								<div className="top-test">
									<h5>lorem ipsum doro</h5>
									<p>Lorem, ipsum dolor Lorem ipsum dolor sit.</p>
								</div>
								<div className="top-test">
									<h5>lorem ipsum doro</h5>
									<p>Lorem, ipsum dolor Lorem ipsum dolor sit.</p>
								</div>
								<div className="top-test">
									<h5>lorem ipsum doro</h5>
									<p>Lorem, ipsum dolor Lorem ipsum dolor sit.</p>
								</div>
								<div className="top-test">
									<h5>lorem ipsum doro</h5>
									<p>Lorem, ipsum dolor Lorem ipsum dolor sit.</p>
									<button type="button" className="btn btn-success">Know More</button>
								</div>
							</div>
							<div className="col-lg-4" id="top-test-col">
								<div className="top-test">
									<div className="top-test-1">
										<img className="top-test-img" src={topOne} alt=""/>
										<h4>Lorem, ipsum.</h4>
									</div>
									<h5>lorem ipsum doro</h5>
									<p>Lorem, ipsum dolor Lorem ipsum dolor sit.</p>
								</div>
								<div className="top-test">
									<h5>lorem ipsum doro</h5>
									<p>Lorem, ipsum dolor Lorem ipsum dolor sit.</p>
								</div>
								<div className="top-test">
									<h5>lorem ipsum doro</h5>
									<p>Lorem, ipsum dolor Lorem ipsum dolor sit.</p>
								</div>
								<div className="top-test">
									<h5>lorem ipsum doro</h5>
									<p>Lorem, ipsum dolor Lorem ipsum dolor sit.</p>
								</div>
								<div className="top-test">
									<h5>lorem ipsum doro</h5>
									<p>Lorem, ipsum dolor Lorem ipsum dolor sit.</p>
									<button type="button" className="btn btn-success">Know More</button>
								</div>
							</div>
						</div>
					</div>
				</article>
				
			</section>

			<section className="section section-blogs">
				<div className="container">
				
			
					<div className="section-header text-center">
						<h2>Featured Labs</h2>
						<p className="sub-title">Every time you book a test with Medatu, we connect you with the most leading and certified labs located near you.</p>
					</div>
			
					<div>
					<div style={{marginTop: "2rem"}} className="row blog-grid-row">
						<div className="col-md-6 col-lg-4 col-sm-12">
							<div className="blog-image">
								<a href="blog-details.html"><img className="img-fluid" src={blogOne} alt="Poster"/></a>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 col-sm-12">
							<div className="blog-image">
								<a href="blog-details.html"><img className="img-fluid" src={blogTwo} alt="Poster"/></a>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 col-sm-12">
							<div className="blog-image">
								<a href="blog-details.html"><img className="img-fluid" src={blogThree} alt="Poster"/></a>
							</div>
						</div>
					</div>
					</div>
					</div>
			
					<div className="container text-center"> 
						<a href="blog-list.html" className="btn view-btn">View All</a>
					</div>
				
			</section>
<Feedback/>

		
</>
	 );
}
 
export default Diagnostics;

   