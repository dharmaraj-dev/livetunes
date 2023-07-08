import React, { useState } from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Upload from "./Upload";
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";

const ArtistsProfile = (props) => {
    const [currentStep, setCurrentStep] = useState(1);

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
                    <section className="steps-progressbar">
                        <ol className="steps l-b">
                            <li className={`step ${currentStep > 1 ? 'is-active' : ''} ${currentStep === 1 ? 'active' : ''}`} data-step="1">
                             Personal Info
                            </li>
                            <li className={`step ${currentStep > 2 ? 'is-active' : ''} ${currentStep === 2 ? 'active' : ''}`} data-step="2">
                              Performance details
                            </li>
                            <li className={`step ${currentStep === 3 ? 'is-active' : ''}`} data-step="3">
                              Social media details
                            </li>
                        </ol>
                    </section>
                        <Row>
                            <Col lg={4}>
                                <Upload/>
                            </Col>
                            <Col lg={8}>
                                {currentStep == 1 && (
                                <div className="profile-text-sec artist-profile-text-sec">
                                    <div className="head">
                                        <h2>Hi, complete your profile to be more discoverable.</h2>
                                    </div>
                                    <Row className="align-items-center">
                                        <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">First Name</Form.Label>
                                        <Form.Control placeholder="" type="text"/>
                                        </Col>
                                        <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">Last Name</Form.Label>
                                        <Form.Control placeholder="" type="text"/>
                                        </Col>

                                        <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">Contact no.</Form.Label>
                                        <Form.Control placeholder="" type="text"/>
                                        </Col>
                                        <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">Email</Form.Label>
                                        <Form.Control placeholder="" type="email"/>
                                        </Col>

                                        <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">City*</Form.Label>
                                        <Form.Select aria-label="Default select example" className="form-control">
                                            <option>Select city</option>
                                            <option value="1">Nagpur</option>
                                            <option value="2">Mumbai</option>
                                            <option value="3">Pune</option>
                                        </Form.Select>
                                        </Col>
                                        <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">State*</Form.Label>
                                        <Form.Select aria-label="Default select example" className="form-control">
                                            <option>Select state</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                        </Col>


                                        <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">Date of birth</Form.Label>
                                        <Form.Control placeholder="" type="text"/>
                                        </Col>
                                        <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">Gender</Form.Label>
                                        <div className="profile-gender mb-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault9" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault9">
                                                Male
                                                </label>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault10" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault10">
                                                Female
                                                </label>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault11" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault11">
                                                Other
                                                </label>
                                            </div>

                                        </div>
                                        </Col>
                                        <Col lg={12} md="12" className="mt-4">
                                            <Stack direction="horizontal" gap={3}>
                                                <div>
                                                {/* <button type="button" className="l-b wbtnn back-btn btn btn-primary">Back</button> */}
                                                </div>
                                                <div className="ms-auto">
                                                <Link to="/personalinfodetail">
                                                <button type="button" className="l-b btnn btn btn-primary ">NEXT</button>
                                                </Link>
                                                </div>
                                            </Stack>
                                        </Col>
                                    </Row>
                                </div>
                                )}
                                {currentStep == 2 && (
                                    <p>Copy step 2 code here </p>
                                )}
                                {currentStep == 3 && (
                                     <p>Copy step 3 code here </p>
                                )}
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            </div>
        </div>
    </>
  )
}

export default ArtistsProfile
