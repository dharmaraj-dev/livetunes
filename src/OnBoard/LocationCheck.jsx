import React from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import citym from '../assets/images/citym.png';
import city2 from '../assets/images/city2.png';
import city3 from '../assets/images/city3.png';
import city4 from '../assets/images/city4.png';
import city5 from '../assets/images/city5.png';
import SelectCity from "./SelectCity";
import { Link } from "react-router-dom";

const LocationCheck = () => {
  return (
    <>
    
        <div className="wrapper">
            <div className="sidebar">
            <SideNavBar />
            </div>
            <div className="main">
            <div className="header">
                <NavBar />
            </div>
            <div className="main-content">
                <Container fluid>
                    <section className="main-location-sec">
                        
                        <div className="">
                            <Row>
                                <Col md={12} lg={5} xl={4}>
                                    <div class="heading-sec">
                                        <p class="l-bl head">Our Delivery Circumference</p>
                                        <p class="l-l sub-head">Check For Your Location</p>
                                    </div>
                                    <div className="map-box">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15272027.669187387!2d73.72888197555253!3d20.850984767574634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1674543089151!5m2!1sen!2sin" ></iframe>
                                    </div>
                                </Col>
                                <Col md={12} lg={7} xl={7}>
                                    <div className="location-right-sec select-multi">
                                         <div className="head-loco-img">
                                            <h1>Are You From Our Top Trending Cities?</h1>
                                            <div className="loco-box">
                                                <div className="text-center">
                                                    <img src={citym} alt="" />
                                                    <p className="l-m city-name">MUMBAI</p>
                                                </div>
                                                <div className="text-center">
                                                    <img src={city2} alt="" />
                                                    <p className="l-m city-name">PUNE</p>
                                                </div>
                                                <div className="text-center">
                                                    <img src={city3} alt="" />
                                                    <p className="l-m city-name">HYDERABAD</p>
                                                </div>
                                                <div className="text-center">
                                                    <img src={city4} alt="" />
                                                    <p className="l-m city-name">BANGALORE</p>
                                                </div>
                                                <div className="text-center">
                                                    <img src={city5} alt="" />
                                                    <p className="l-m city-name">LUCKNOW</p>
                                                </div>
                                            </div>
                                         </div>
                                         <div>
                                            <h1>Don’t See Your City</h1>
                                            <p class="l-l sub-head">Then Make It One Of Them</p>
                                            <SelectCity/>
                                         </div> 
                                    </div>
                                </Col>
                            </Row>
                            <Link to="/budgetmusictype">
                            <Button variant="primary" className="l-sb btnn next-btn">Next</Button>
                            </Link>
                        </div>
                    </section>
                </Container>
            </div>
            </div>
        </div>

    </>
  )
}

export default LocationCheck