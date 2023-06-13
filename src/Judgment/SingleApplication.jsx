import React from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Singleart from '../assets/images/single-art.png';
import { FiDownload } from "react-icons/fi";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoList from "./VideoList";

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
                            <div className="l-m filter-denld-btn red-color cursor-pointer ms-auto">Download <FiDownload/></div>
                            <div className="l-m filter-denld-btn red-color cursor-pointer">Review</div>
                          </Stack>
                          <hr/>
                        </div>
                      </div>  
                      <div className="video-list-sec">
                        <VideoList/>
                      </div>
                      <div className="info-performance-details">
                        <Row>
                          <Col lg={5}>
                            <h2 className="red-color fs-4 mb-4">Personal Information</h2>
                            <Row>
                              <Col lg={7}>
                                <div className="">
                                  <p className="heading-text mb-0">E-mail</p>
                                  <p className="sub-heading-text">xyz@gmail.com</p>
                                </div>
                              </Col>
                              <Col lg={5}>
                                <div className=" ms-auto">
                                  <p className="heading-text mb-0">Contact No.</p>
                                  <p className="sub-heading-text">+91-943553433</p>
                                </div>
                              </Col>
                            </Row>  
                            <Row>
                              <Col lg={7}>
                                <div className="">
                                  <p className="heading-text mb-0">D.O.B</p>
                                  <p className="sub-heading-text">16-05-1994</p>
                                </div>
                              </Col>
                              <Col lg={5}>
                                <div className=" ms-auto">
                                  <p className="heading-text mb-0">Gender</p>
                                  <p className="sub-heading-text">Male</p>
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