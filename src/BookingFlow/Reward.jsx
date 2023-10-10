import React, { useState } from 'react';
import Lottie from "lottie-react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsExclamationCircleFill } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Gift from "../components/gift.json";
import Gift2 from "../components/gift2.json";
import Rupee from "../components/rupee.json";
import Thumb from "../components/thumb.json";
import Clap from "../components/clap.json";
import Straremoji from "../components/straremoji.json";
import Modal from 'react-bootstrap/Modal';
import { RxCross2 } from "react-icons/rx";

const Reward = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <div className="reward-sec">
            <div className="d-flex justify-content-between align-items-center">
                <div className="lottie-gift"><Lottie animationData={Gift} loop={true} /></div>
                <h2>Goodwill & Gratitude Reward</h2>
                <div className="ico red-color"><BsExclamationCircleFill onClick={handleShow} /></div>
            </div>
            {/*<Form className="d-flex reward-search">
                <Form.Control
                type="search"
                placeholder="Reward Code"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success" className="btnn l-b">Apply</Button>
            </Form>*/}
        </div>

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
                <div className="inner-reward-sec">
                    <div className="lottie-gift2 mx-auto"><Lottie animationData={Gift2} loop={true} /></div>
                    <div className="reward-text-sec text-center">
                        <div className="head d-flex align-items-center justify-content-center">
                            <div className="rupee-class"><Lottie animationData={Rupee} loop={true} /></div><h2>Goodwill & Gratitude Reward</h2><div className="rupee-class"><Lottie animationData={Rupee} loop={true} /></div>
                        </div>
                        <p className="l-r para">The Artist's recommendation Voucher will be given to you by the artist on the basis of his experience with you during the event. the rewards are divided into three categories as follows</p>
                    </div>
                    <div className="reward-card-sec">
                        <Row>
                            <Col lg={4} md={4}>
                                <div className="inner-reward-card-sec text-center">
                                    <div className="lottie-inner-card mx-auto">
                                         <Lottie animationData={Thumb} loop={true} />
                                    </div>
                                    <h2>Excellent</h2>
                                    <p className="l-r text-sec">If the artist gives you excellent rating. Then you get</p>
                                    <div className="rcard-value l-b">
                                        <span>₹</span> <span>3,000</span> 
                                    </div>
                                    <small>on your next booking</small>
                                </div>
                            </Col>
                            <Col lg={4} md={4}>
                                <div className="inner-reward-card-sec text-center cilver">
                                    <div className="lottie-inner-card mx-auto">
                                         <Lottie animationData={Clap} loop={true} />
                                    </div>
                                    <h2>Marvellous</h2>
                                    <p className="l-r text-sec">If the artist gives you excellent rating. Then you get</p>
                                    <div className="rcard-value l-b">
                                        <span>₹</span> <span>5,000</span> 
                                    </div>
                                    <small>on your next booking</small>
                                </div>
                            </Col>
                            <Col lg={4} md={4}>
                                <div className="inner-reward-card-sec text-center gold">
                                    <div className="lottie-inner-card mx-auto">
                                         <Lottie animationData={Straremoji} loop={true} />
                                    </div>
                                    <h2>Fantabulous</h2>
                                    <p className="l-r text-sec">If the artist gives you excellent rating. Then you get</p>
                                    <div className="rcard-value l-b">
                                        <span>₹</span> <span>10,000</span> 
                                    </div>
                                    <small>discount on your next booking</small>
                                </div>
                            </Col>
                        </Row>
                        <div className="footer-reward red-color l-sb text-center">
                            Note: You can pass this coupon to your loved ones or you can use it on your next booking
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>

    </>
  )
}

export default Reward