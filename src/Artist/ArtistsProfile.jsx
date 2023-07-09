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
import PerformanceDetails from "./PerformanceDetails";
import Multiselect from 'multiselect-react-dropdown';
import Expert from '../assets/images/like-img.png';
import Modal from 'react-bootstrap/Modal';
import { RxCross2 } from "react-icons/rx";

const ArtistsProfile = (props) => {
    const [currentStep, setCurrentStep] = useState(1);
    console.log(currentStep)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [options] =useState(['Singer','Guitarist','Tabla player','Drummer','Keyboard player']) ;
    const [options2] =useState(['Classical','Bollywood','Jazz','Bhajan','Rock']) ;
    const [options3] =useState(['English','Hindi','Panjabi','Gujrati','Tamil','Bangali','Malyalam','Nepali']) ;
    const [options4] =useState(['Weddings','Religious','Café Gigs','Music Festivals','Private Parties']) ;
    const [options5] =useState(['Valentines day','Mothers day','Fathers day','Propasal special','Independence day']) ;
    const [options6] =useState(['Google meets','zoom','discord']) ;

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
                                                <button onClick={() => setCurrentStep(2)} type="button" className="l-b btnn btn btn-primary ">NEXT</button>
                                                </div>
                                            </Stack>
                                        </Col>
                                    </Row>
                                </div>
                                )}
                                {currentStep == 2 && (
                                      <>
                                      <div className="profile-text-sec artist-profile-text-sec">
                                          <div className="head">
                                              <h2>Hi, Please fill your performance details</h2>
                                          </div>
                              
                                          <Row className="align-items-center select-multi">
                                          <Col lg={6} md="12" className="mb-4">
                                              <Form.Label className="l-sb">Willing to travel to other states for live events*</Form.Label>
                                              <div className="profile-gender mb-3">
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                      Yes
                                                      </label>
                                                  </div>
                              
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                      No
                                                      </label>
                                                  </div>
                              
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                                      <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                      Yes, except
                                                      </label>
                                                  </div>
                                              </div>
                                              <Form.Select aria-label="Default select example" className="form-control">
                                                  <option>Specify State</option>
                                                  <option value="1">Nagpur</option>
                                                  <option value="2">Mumbai</option>
                                                  <option value="3">Pune</option>
                                              </Form.Select>
                                              </Col>
                              
                                              <Col lg={6} md="12" className="mb-4">
                                              <Form.Label className="l-sb">Preferred performance duration*</Form.Label>
                                              <div className="profile-gender mb-3">
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                                      <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                      1Hr
                                                      </label>
                                                  </div>
                              
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                                                      <label className="form-check-label" htmlFor="flexRadioDefault5">
                                                      2Hrs
                                                      </label>
                                                  </div>
                              
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" />
                                                      <label className="form-check-label" htmlFor="flexRadioDefault6">
                                                      more than 2 hrs
                                                      </label>
                                                  </div>
                                              </div>
                                              <Form.Control placeholder="Specify duration if more than 2 hrs" type="text"/>
                                              </Col>
                                      
                                              <Col lg={6} md="12" className="mb-4">
                                              <Form.Label className="l-sb">Performance charges (set you charges)*</Form.Label>
                                              <div className="profile-gender mb-3">
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="checkbox" name="flexCheckboxDefault" id="flexCheckboxDefault1" />
                                                      <label className="form-check-label" htmlFor="flexCheckboxDefault1">
                                                      per show
                                                      </label>
                                                  </div>
                              
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="checkbox" name="flexCheckboxDefault" id="flexCheckboxDefault2" />
                                                      <label className="form-check-label" htmlFor="flexCheckboxDefault2">
                                                      Per hour
                                                      </label>
                                                  </div>
                                              </div>
                                              <Stack direction="horizontal" gap={3}>
                                              <Form.Control placeholder="From ₹/show" type="text"/>
                                              <Form.Control placeholder="To ₹/hour" type="text"/>
                                              </Stack>
                                              </Col>
                              
                                              <Col lg={6} md="12" className="mb-4">
                                              <Form.Label className="l-sb">Available for Private surprise events</Form.Label>
                                              <div className="profile-gender mb-3">
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault9" />
                                                      <label className="form-check-label" htmlFor="flexRadioDefault9">
                                                      Yes
                                                      </label>
                                                  </div>
                              
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault10" />
                                                      <label className="form-check-label" htmlFor="flexRadioDefault10">
                                                      No
                                                      </label>
                                                  </div>
                                              </div>
                                              <Multiselect
                                              isObject={false}
                                              options= { options5  }
                                              showCheckbox
                                              showArrow
                                              className='l-l'
                                              placeholder="Select event type"
                                              
                                              />
                                              </Col>
                              
                                              <Col lg={6} md="12" className="mb-4">
                                              <Form.Label className="l-sb">Available for virtual events</Form.Label>
                                              <div className="profile-gender mb-3">
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault7" />
                                                      <label className="form-check-label" htmlFor="flexRadioDefault7">
                                                      Yes
                                                      </label>
                                                  </div>
                              
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault8" />
                                                      <label className="form-check-label" htmlFor="flexRadioDefault8">
                                                      No
                                                      </label>
                                                  </div>
                                              </div>
                                              <Multiselect
                                              isObject={false}
                                              options= { options4 }
                                              showCheckbox
                                              showArrow
                                              className='l-l'
                                              placeholder="Select prefered mode"
                                              
                                              />
                                              </Col>
                              
                                              <Col lg={6} md="12" className="mb-4">
                                              <Form.Label className="l-sb">About you (Your bio, any achievements,etc)</Form.Label>
                                              <Form.Control as="textarea" placeholder="Opened for a Luck ali Live concert, held in Nagpur" style={{ height: '90px' }}        />
                                              </Col>
                              
                              
                                              <Col lg={12} md="12" className="mt-4">
                                                  <Stack direction="horizontal" gap={3}>
                                                      <div>
                                                      <button onClick={() => setCurrentStep(1)} type="button" className="l-b wbtnn back-btn btn btn-primary">Back</button>
                                                      </div>
                                                      <div className="ms-auto">
                                                      <button onClick={() => setCurrentStep(3)} type="button" className="l-b btnn btn btn-primary ">NEXT</button>
                                                      </div>
                                                  </Stack>
                                              </Col>
                              
                                          </Row>
                                      </div>
                                  </>
                                )}
                                {currentStep == 3 && (
                                     <>
                                     <div className="profile-text-sec artist-profile-text-sec">
            <div className="head">  
                <Stack direction="horizontal" gap={3}>
                <h2>Please, connect with your social media.</h2>
                <h2 className="fs-6 ms-auto cursor-pointer">Skip</h2>
                </Stack>
            </div>

            <Row className="align-items-center">
                <Col lg={6} md="12" className="mb-4">
                <Form.Label className="l-sb">Fackbook</Form.Label>
                <Form.Control placeholder="" type="text"/>
                </Col>
                <Col lg={6} md="12" className="mb-4">
                <Form.Label className="l-sb">Instagram</Form.Label>
                <Form.Control placeholder="" type="text"/>
                </Col>

                <Col lg={6} md="12" className="mb-4">
                <Form.Label className="l-sb">Youtube</Form.Label>
                <Form.Control placeholder="" type="text"/>
                </Col>
                <Col lg={6} md="12" className="mb-4">
                <Form.Label className="l-sb">Others (websites/account)</Form.Label>
                <Form.Control placeholder="" type="text"/>
                </Col>

                <Col lg={12} md="12" className="mb2">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="flexCheckboxDefault" id="flexCheckboxDefault11" />
                    <label className="form-check-label" htmlFor="flexCheckboxDefault11">
                    I agree, to give livetune the permission to fetch my social media information
                    </label>
                </div>
                </Col>

                <Col lg={12} md="12" className="mt-4">
                    <Stack direction="horizontal" gap={3}>
                        <div>
                        
                        <button onClick={() => setCurrentStep(2)}  type="button" className="l-b wbtnn back-btn btn btn-primary">Back</button>
                      
                        </div>
                        <div className="ms-auto">
                        <button type="button" className="l-b btnn btn btn-primary "  onClick={handleShow}>FINISH</button>
                        </div>
                    </Stack>
                </Col>

            </Row>

            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
            size="lg"
            className="artist-model-sec"
            >
                
                <div className="closeButtonr" onClick={handleClose}>
                    <RxCross2/>
                </div>
                <Modal.Body>
                    <div className="head-sec text-center white-color">
                        <h2>Hi <span>Rahul Roy</span>,</h2>
                        <p className="l-r fs-4 mb-1">Profile Application form Submitted Successfully</p>
                        <p className="l-r fs-4 mb-1">Your profile will be shared with our Music expert panel</p>
                    </div>
                    <div className="expert-panel-sec">
                        <p className="text-center l-r black-color fs-5">Our expert panel consists of</p>
                        <Row>
                            <Col lg={4} sm={6} className="mb-3">
                                <div className="inner-expert-panel-sec">
                                    <div className="img-sec">
                                        <img src={Expert} alt="img" className="w-100" />
                                    </div>
                                    <h2 className="fs-5">Sonu Nigam</h2>
                                    <ul>
                                        <li>Bollywood Playback singer</li>
                                        <li>Judge Indian Idol</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4} sm={6} className="mb-3">
                                <div className="inner-expert-panel-sec">
                                    <div className="img-sec">
                                        <img src={Expert} alt="img" className="w-100" />
                                    </div>
                                    <h2 className="fs-5">Sonu Nigam</h2>
                                    <ul>
                                        <li>Bollywood Playback singer</li>
                                        <li>Judge Indian Idol</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4} sm={6} className="mb-3">
                                <div className="inner-expert-panel-sec">
                                    <div className="img-sec">
                                        <img src={Expert} alt="img" className="w-100" />
                                    </div>
                                    <h2 className="fs-5">Sonu Nigam</h2>
                                    <ul>
                                        <li>Bollywood Playback singer</li>
                                        <li>Judge Indian Idol</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <p className="text-center l-r red-color fs-5 mt-2">You can expect to hear form our team within 2 weeks via email provided</p>
                    </div>
                </Modal.Body>
            </Modal>

        </div>
                                     </>
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
