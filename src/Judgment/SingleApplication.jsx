import React from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Singleart from '../assets/images/single-art.png';
import Fb from '../assets/images/fb.png';
import Youtube from '../assets/images/youtube.png';
import Instagram from '../assets/images/instagram.png';
import { FiDownload } from "react-icons/fi";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoList from "./VideoList";
import { Link } from "react-router-dom";

const SingleApplication = () => {
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
                  <div className="main-artists-list">
                    <div className="main-single-app-sec">
                      <div className="single-client-app-sec">
                        <h4 className="l-b mb-3">Applications</h4>
                        <hr/>
                        <Stack direction="horizontal" gap={4}>
                          <div className="img-single">
                            <img src={Singleart} alt="" className="" />
                          </div>
                          <div>
                            <h2>Rajesh Kumar</h2>
                            <p className="l-r fs-5">Mumbai, Maharashtra</p>
                          </div>
                        </Stack>
                        <div className="download-review-btn-sec">
                          <Stack direction="horizontal" gap={4}>
                            <button className="l-m filter-denld-btn red-color cursor-pointer ms-auto">Download <FiDownload/></button>
                            <Link to="/review">
                            <button className="l-m filter-denld-btn red-color cursor-pointer">Review</button>
                            </Link>
                          </Stack>
                          <hr/>
                        </div>
                      </div>  
                      <div className="video-list-sec">
                        <VideoList/>
                      </div>
                      <div className="info-performance-details">
                        <Row>
                          <Col lg={6} xl={5}>
                            <h2 className="red-color fs-4 mb-4">Personal Information</h2>
                            <Row className="mb-4">
                              <Col lg={7}>
                                <div className="">
                                  <p className="heading-text mb-0 l-r">E-mail</p>
                                  <p className="sub-heading-text l-r">xyz@gmail.com</p>
                                </div>
                              </Col>
                              <Col lg={5}>
                                <div className=" ms-auto">
                                  <p className="heading-text mb-0 l-r">Contact No.</p>
                                  <p className="sub-heading-text l-r">+91-943553433</p>
                                </div>
                              </Col>
                            </Row>  
                            <Row className="mb-4">
                              <Col lg={7}>
                                <div className="">
                                  <p className="heading-text mb-0 l-r">D.O.B</p>
                                  <p className="sub-heading-text l-r">16-05-1994</p>
                                </div>
                              </Col>
                              <Col lg={5}>
                                <div className=" ms-auto">
                                  <p className="heading-text mb-0 l-r">Gender</p>
                                  <p className="sub-heading-text l-r">Male</p>
                                </div>
                              </Col>
                            </Row>
                            <Row className="mb-4">
                              <Col lg={12}>
                                <div className="">
                                  <p className="heading-text mb-0 l-r">Address</p>
                                  <p className="sub-heading-text l-r">1101, Bhumika heights, Sector 18 Kharghar,Mumbai,Maharashtra 440015</p>
                                </div>
                              </Col>
                            </Row>
                            <Row className="mb-4">
                              <Col lg={12}>
                                <div className="">
                                  <p className="heading-text mb-2 l-r">Social media links</p>
                                  <p className="social-img-text l-r"><a href=""><img src={Fb} alt="" className="" /> Facebook.com/username</a></p>
                                  <p className="social-img-text l-r"><a href=""><img src={Instagram} alt="" className="" /> Instagram.com/username</a></p>
                                  <p className="social-img-text l-r"><a href=""><img src={Youtube} alt="" className="" /> YouTube.com/username</a></p>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={6} xl={5}>
                            <h2 className="red-color fs-4 mb-4">Performance details</h2>
                            <Row className="mb-4">
                              <Col lg={7}>
                                <div className="">
                                  <p className="heading-text mb-0 l-sb">Artist Category</p>
                                  <p className="sub-heading-text l-r">Singer, Guitarist, Keyboard</p>
                                </div>
                              </Col>
                            </Row>  
                            <Row className="mb-4">
                              <Col lg={7}>
                                <div className="">
                                  <p className="heading-text mb-0 l-sb">Performance experience</p>
                                  <p className="sub-heading-text l-r">5 years</p>
                                </div>
                              </Col>
                            </Row>
                            <Row className="mb-4">
                              <Col lg={7}>
                                <div className="">
                                  <p className="heading-text mb-0 l-sb">Available for Virtual events</p>
                                  <p className="sub-heading-text l-r">Yes</p>
                                </div>
                              </Col>
                            </Row>
                            <Row className="mb-4">
                              <Col lg={7}>
                                <div className="">
                                  <p className="heading-text mb-0 l-sb">Preferred performance duration</p>
                                  <p className="sub-heading-text l-r">more than 2 hrs (3 Hrs Maximum)</p>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                      <div className="info-performance-details">
                        <Row>
                          <Col lg={6} xl={5}>
                            <Row className="mb-4">
                              <Col lg={7}>
                                <div className="">
                                  <p className="heading-text mb-0 l-sb">Performance Gerne</p>
                                  <p className="sub-heading-text l-r">Bollywood, classical, retro, Bhajans, Rock, Jazz.</p>
                                </div>
                              </Col>
                            </Row>  
                            <Row className="mb-4">
                              <Col lg={7}>
                                <div className="">
                                  <p className="heading-text mb-0 l-sb">Preferred events</p>
                                  <p className="sub-heading-text l-r">Weddings events, Religious, Café, private events, music festivals.</p>
                                </div>
                              </Col>
                            </Row>
                            <Row className="mb-4">
                              <Col lg={7}>
                                <div className="">
                                  <p className="heading-text mb-0 l-sb">Available for ptivate events</p>
                                  <p className="sub-heading-text l-r">Yes</p>
                                </div>
                              </Col>
                            </Row>
                            <Row className="mb-4">
                              <Col lg={7}>
                                <div className="">
                                  <p className="heading-text mb-0 l-sb">Performance price range (Per show)</p>
                                  <p className="sub-heading-text l-r">Rs. 25,000 to Rs. 40,000</p>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={6} xl={5}>
                            <Row className="mb-4">
                              <Col lg={7}>
                                <div className="">
                                  <p className="heading-text mb-0 l-sb">Performance Languages</p>
                                  <p className="sub-heading-text l-r">Hindi, English, Marathi</p>
                                </div>
                              </Col>
                            </Row>  
                            <Row className="mb-4">
                              <Col lg={7}>
                                <div className="">
                                  <p className="heading-text mb-0 l-sb">About you</p>
                                  <p className="sub-heading-text l-r">Have opened for various singers, who had live events across India, some of them were Sonu Nigam, Shaan etc.</p>
                                </div>
                              </Col>
                            </Row>
                            <Row className="mb-4">
                              <Col lg={7}>
                                <div className="">
                                  <p className="heading-text mb-0 l-sb">Willing to travel for events</p>
                                  <p className="sub-heading-text l-r">Yes</p>
                                </div>
                              </Col>
                            </Row>
                            <Row className="mb-4">
                              <Col lg={7}>
                                <div className="">
                                  <p className="heading-text mb-0 l-sb">Performance price range (Per hour)</p>
                                  <p className="sub-heading-text l-r">Rs. 2,000 to Rs. 6,000</p>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                    </div>  
                  </div>    
                </Container>
            </div>
            </div>
          </div>
    </>
  )
}

export default SingleApplication