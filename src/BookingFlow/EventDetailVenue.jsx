import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import { IoLocationSharp } from "react-icons/io5";
import { FiEdit3 } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import { MdMyLocation } from "react-icons/md";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { RxCross2 } from "react-icons/rx";
import Lmark from '../assets/images/l-mark.png';
import Lottie from "lottie-react";
import Sademoji from "../components/sademoji.json";

const EventDetailVenue = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

  return (
    <>
        <section>
            <Form>
            <h4 className="l-b mb-4">Please Fill the event details</h4>
            <Row>
                <Col lg={6} md="12" className="mb-4">
                    <Form.Select aria-label="Default select example" className="form-control">
                        <option>House party</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>
                <Col lg={6} md="12" className="mb-4">
                <Form.Control placeholder="Event date - " type="date"/>
                </Col>
                <Col lg={6} md="12" className="mb-4">
                <Form.Control placeholder="Event time - " type="time"/>
                </Col>
                <Col lg={6} md="12" className="mb-4">
                    <Form.Select aria-label="Default select example" className="form-control">
                        <option>Event duration</option>
                        <option value="1">1hr</option>
                        <option value="2">2hr</option>
                        <option value="3">3hr</option>
                    </Form.Select>
                </Col>
            </Row>

            <div className="venue-sec">
                <Row>
                    <Col lg={5}><h4 className="l-b">Event venue</h4></Col>
                    <Col lg={7} className="d-flex main-left-location-sec">
                        <Stack direction="horizontal" className="left-location-sec">
                            <div className="location-text l-r" onClick={handleShow}><span className="me-2 green-color"><IoLocationSharp/></span><span>Locate venue on map</span></div>
                            <div className="location-edit"><FiEdit3/></div>
                        </Stack>
                    </Col>
                </Row>
            </div>
            
            <Row className="align-items-center">
                <Col lg={12} md="12" className="mb-4">
                <Form.Control placeholder="Add Event address (Line 1)" type="text"/>
                </Col>
                <Col lg={6} md="12" className="mb-4">
                <Form.Control placeholder="Add Event address (Line 2)" type="text"/>
                </Col>
                <Col lg={6} md="12" className="mb-4">
                <Form.Control placeholder="Landmark" type="text"/>
                </Col>
                <Col lg={4} md="12" className="mb-4">
                    <Form.Select aria-label="Default select example" className="form-control">
                        <option>Select city</option>
                        <option value="1">Nagpur</option>
                        <option value="2">Mumbai</option>
                        <option value="3">Pune</option>
                    </Form.Select>
                </Col>
                <Col lg={4} md="12" className="mb-4">
                    <Form.Control placeholder="Pincode" type="text"/>
                </Col>
                <Col lg={4} md="12" className="mb-4">
                    <Form.Select aria-label="Default select example" className="form-control">
                        <option>Select state</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Group className="l-r" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Additional travel, food and stay charges may be applicable according to the venue location" />
                    </Form.Group>
                </Col>
            </Row>
            <section className="event-check-button-sec">
                <Row>
                    <Col lg="12">
                        <button type="button" className="l-b btnn btn btn-primary w-100" onClick={handleShow2}>Check Availability</button>
                        {/* onClick={handleShow2} */}
                    </Col>
                </Row>
                <Row>
                    <Col lg="6">
                        <Link to="/checkavailability">
                        <button type="button" className="l-b wbtnn back-btn btn btn-primary w-100">Back</button>
                        </Link>
                    </Col>
                    <Col lg="6">
                        <Link to="/cart">
                        <button type="button" className="l-b btnn btn btn-primary w-100">Proceed to book</button>
                        </Link>
                    </Col>
                </Row>
            </section>
            </Form>
        </section>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
            size="lg"
            className="reward-model-sec"
        >
            
            <div className="closeButtonr" onClick={handleClose}>
                <RxCross2/>
            </div>
            <Modal.Body>
                <div className="inner-map-location-sec">
                    <Row>
                        <Col lg={6}>
                        <Form className="coupons-search-sec postion-r mb-4">
                            <Form.Control
                                type="search"
                                placeholder="Use current location"
                                className="me-2"
                                aria-label="Search"
                                />
                            <div type="button" className="l-b apl-btn red-color"><MdMyLocation/></div>
                        </Form>
                        <Form className="coupons-search-sec postion-r">
                            <Form.Control
                                type="search"
                                placeholder="Input cupon name"
                                className="me-2"
                                aria-label="Search"
                                />
                            <div type="button" className="l-b apl-btn red-color"><HiOutlineSearch/></div>
                        </Form>
                        <div className="nearest-location-sec-list">
                            <p className="l-m main-head">Landmarks nearest to pinned location</p>
                            <div className="inner-nearest-location-sec-list">
                                <div className="d-flex">
                                    <div className="landmark-img">
                                        <img src={Lmark} alt="" className="w-100" />
                                    </div>
                                    <div className="right-text-sec postion-r">
                                        <p className="l-r head">Pheonix Marketcity</p>
                                        <p className="l-r sub-head">500M from the venue</p>
                                        <div type="button" className="l-r lmark-btn red-color">Select as a Landmark</div>
                                    </div>
                                </div>
                            </div>
                            <div className="inner-nearest-location-sec-list">
                                <div className="d-flex">
                                    <div className="landmark-img">
                                        <img src={Lmark} alt="" className="w-100" />
                                    </div>
                                    <div className="right-text-sec postion-r">
                                        <p className="l-r head">LTT Station</p>
                                        <p className="l-r sub-head">2KM from the venue</p>
                                        <div type="button" className="l-r lmark-btn red-color">Select as a Landmark</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="select-btn-sec">
                            <button type="button" className="l-b select-btn btnn btn btn-primary w-100">Select location</button>
                        </div>
                        </Col>
                        <Col lg={6}>
                            <div className="map-loco-box">
                                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15272027.669187387!2d73.72888197555253!3d20.850984767574634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1674543089151!5m2!1sen!2sin" ></iframe>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Modal.Body>
        </Modal>



        <Modal
            show={show2}
            onHide={handleClose2}
            backdrop="static"
            keyboard={false}
            centered
            size="lg"
            className=""
        >
            
            <div className="closeButtonr" onClick={handleClose2}>
                <RxCross2/>
            </div>
            <Modal.Body>
                <div className="inner-map-location-sec">
                    <Row>
                        <Col>
                            <div className="text-center availability-not-found">
                                <div className="lottie-sademoji">
                                    <Lottie animationData={Sademoji} loop={true} />
                                </div>
                                <h1 className="l-bl red-color head">We are Sorry!</h1>
                                <p className="l-r sub-head">Artist is not available for the selected date. Please select some other artist or Change the dates if you can. Extremely sorry for your inconvenience.</p>
                                <button type="button" className="l-sb btnn  btn btn-primary" onClick={handleClose2}>OK</button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Modal.Body>
        </Modal>


    </>
  )
}

export default EventDetailVenue