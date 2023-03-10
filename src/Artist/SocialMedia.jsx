import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import ArtistProfile from "./ArtistProfile";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { RxCross2 } from "react-icons/rx";
import Expert from '../assets/images/like-img.png';

const SocialMedia = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <ArtistProfile>
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
                        <Link to="/personalinfodetail">
                        <button type="button" className="l-b wbtnn back-btn btn btn-primary">Back</button>
                        </Link>
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
        </ArtistProfile>
    </>
  )
}

export default SocialMedia