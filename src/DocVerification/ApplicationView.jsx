import React, { useState } from 'react';
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Singleart from '../assets/images/single-art.png';
import Row from 'react-bootstrap/Row';
import { FiDownload } from "react-icons/fi";
import { FaPassport } from "react-icons/fa";
import { MdOutlineElectricalServices } from "react-icons/md";
import { FaPiggyBank } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import { RxCross2 } from "react-icons/rx";

const ApplicationView = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                        <Stack direction="horizontal" gap={4}>
                          <div className="img-single">
                            <img src={Singleart} alt="" className="" />
                          </div>
                          <div>
                            <h2>Rajesh Kumar</h2>
                            <p className="l-r fs-5">Mumbai, Maharashtra</p>
                            <p className="l-m selected-category"><span>Singer</span> <span>Guitarist</span> <span>keyboardist</span></p>
                          </div>
                        </Stack>
                        <div className="download-review-btn-sec">
                          <Stack direction="horizontal" gap={4}>
                            <button className="l-m filter-denld-btn red-color cursor-pointer ms-auto"> <FiDownload/></button>
                            <button className="l-m btn rj-btn cursor-pointer">Reject</button>
                            <button className="l-m btn appro-btn cursor-pointer">Approve</button>
                          </Stack>
                          <hr/>
                        </div>
                      </div>
                      <div className="info-performance-details">
                        <Row>
                          <Col lg={12} xl={12}>
                            <h2 className="fs-4 mb-4">Personal Information</h2>
                            <Row className="mb-4">
                              <Col lg={2}>
                                <div className="">
                                  <p className="heading-text mb-0 l-r">E-mail</p>
                                  <p className="sub-heading-text l-sb">xyz@gmail.com</p>
                                </div>
                              </Col>
                              <Col lg={2}>
                                <div className=" ms-auto">
                                  <p className="heading-text mb-0 l-r">Contact No.</p>
                                  <p className="sub-heading-text l-sb">+91-943553433</p>
                                </div>
                              </Col>
                              <Col lg={2}>
                                <div className="">
                                  <p className="heading-text mb-0 l-r">D.O.B</p>
                                  <p className="sub-heading-text l-sb">16-05-1994</p>
                                </div>
                              </Col>
                              <Col lg={2}>
                                <div className=" ms-auto">
                                  <p className="heading-text mb-0 l-r">Gender</p>
                                  <p className="sub-heading-text l-sb">Male</p>
                                </div>
                              </Col>
                              <Col lg={4}>
                                <div className="">
                                  <p className="heading-text mb-0 l-r">Address</p>
                                  <p className="sub-heading-text l-sb">1101, Bhumika heights, Sector 18 Kharghar,Mumbai,Maharashtra 440015</p>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                      <hr />
                      <div className="info-performance-details">
                        <Row>
                          <Col lg={12} xl={12}>
                            <h2 className="fs-5 mb-4">Bank details</h2>
                            <Row className="mb-4">
                              <Col lg={2}>
                                <div className="">
                                  <p className="heading-text mb-0 l-r">Account no.</p>
                                  <p className="sub-heading-text l-sb">1234567890123456</p>
                                </div>
                              </Col>
                              <Col lg={2}>
                                <div className=" ms-auto">
                                  <p className="heading-text mb-0 l-r">Bank name</p>
                                  <p className="sub-heading-text l-sb">State Bank of India</p>
                                </div>
                              </Col>
                              <Col lg={2}>
                                <div className="">
                                  <p className="heading-text mb-0 l-r">IFSC Code</p>
                                  <p className="sub-heading-text l-sb">SBIN123455</p>
                                </div>
                              </Col>
                              <Col lg={2}>
                                <div className=" ms-auto">
                                  <p className="heading-text mb-0 l-r">Branch name</p>
                                  <p className="sub-heading-text l-sb">Kharghar, Sector 12</p>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                      <hr />
                      <div className="info-performance-details">
                        <Row>
                          <Col lg={12} xl={12}>
                            <h2 className="fs-5 mb-4">Attached documents</h2>
                            <Row className="mb-4">
                              <Col lg={3} xl={2} sm={4}>
                                <div className="attach-doc-sec text-center postion-r cursor-pointer" onClick={handleShow}>
                                    <div>
                                    <FaPassport/>
                                    <p className="doc-text l-r">Passport</p>
                                    </div>
                                  <p className="att-vari-text m-0 l-r">verified</p>
                                </div>
                              </Col>
                              <Col lg={3} xl={2} sm={4}>
                                <div className="attach-doc-sec text-center postion-r cursor-pointer">
                                    <div>
                                    <MdOutlineElectricalServices/>
                                    <p className="doc-text l-r">Electricity Bill</p>
                                    </div>
                                  <p className="att-vari-text m-0 l-r">verified</p>
                                </div>
                              </Col>
                              <Col lg={3} xl={2} sm={4}>
                                <div className="attach-doc-sec text-center postion-r cursor-pointer">
                                    <div>
                                    <FaPiggyBank/>
                                    <p className="doc-text l-r">Bank Passbook</p>
                                    </div>
                                  <p className="att-vari-text m-0 l-r">verified</p>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </Row>

                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                            centered
                            size="lg"
                            className=""
                        >
                            
                            <div className="closeButtonr" onClick={handleClose}>
                                <RxCross2/>
                            </div>
                            <Modal.Body>
                                
                            </Modal.Body>
                        </Modal>

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

export default ApplicationView