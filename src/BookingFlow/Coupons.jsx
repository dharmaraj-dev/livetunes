import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Modal from 'react-bootstrap/Modal';
import Lottie from "lottie-react";
import { RxCross2 } from "react-icons/rx";
import Offerimg from '../assets/images/offer-img.png';
import Form from 'react-bootstrap/Form';
import Suce from "../components/suce.json";

const Coupons = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  return (
    <>
        <div className="coupons-check-sec">
          <Stack direction="horizontal" gap={3}>
            <div className="l-b coupons-text">Offers/coupons</div>
            <div className="l-b red-color ms-auto check-text" onClick={handleShow}>CHECK</div>
          </Stack>
        </div>

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
                <div className="main-coupons-sec">
                  <div className="inner-coupons-sec">
                    <div className="head-sec d-flex align-items-center">
                      <img src={Offerimg} alt="" />
                      <h2 className="l-b ms-4">OFFERS AND coupons</h2>
                    </div>
                    <Form className="coupons-search-sec postion-r">
                      <Form.Control
                        type="search"
                        placeholder="Input cupon name"
                        className="me-2"
                        aria-label="Search"
                        />
                      <div type="button" className="l-b apl-btn" onClick={handleShow2}>APPLY</div>
                    </Form>
                  </div>
                  <div className="avail-coupons-text">
                    <h2 className="mb-0">Available coupons</h2>
                  </div>
                  <div className="coupons-box">
                    <h2 className="mb-0">Get <span className="red-color">20% OFF</span> upto Rs. 2000</h2>
                    <p className="l-r text-sec">Valid for 1st Time user <span className="l-sb ms-3"><a className="cursor-pointer">view details</a> </span></p>
                    <div class="d-flex">
                      <div class="me-auto code-text green-color l-b">LIVETUNENEW</div>
                      <div class=""><button type="button" class="l-r btnn code-apply-btn btn btn-primary">APPLY</button></div>
                    </div>
                  </div>
                  <div className="coupons-box">
                    <h2 className="mb-0">Get <span className="red-color">20% OFF</span> upto Rs. 2000</h2>
                    <p className="l-r text-sec">Valid for 1st Time user <span className="l-sb ms-3"><a className="cursor-pointer">view details</a> </span></p>
                    <div class="d-flex">
                      <div class="me-auto code-text green-color l-b">LIVETUNENEW</div>
                      <div class=""><button type="button" class="l-r btnn code-apply-btn btn btn-primary">APPLY</button></div>
                    </div>
                  </div>
                </div>
            </Modal.Body>
        </Modal>




        <Modal
            show={show2}
            onHide={handleClose2}
            backdrop="static"
            keyboard={false}
            centered
            className="main-coupons-sucess-sec"
        >
            
            <div className="closeButtonr" onClick={handleClose2}>
                <RxCross2/>
            </div>
            <Modal.Body>
               <div className="main-coupons-sucess-msg d-flex align-items-center">
                <div className="ani-suc">
                  <Lottie animationData={Suce} loop={true} />
                </div>
                <div className="right-text-sec">
                  <p className="code-suc-text red-color l-bl">LIVETUNENEW</p>
                  <h2>Coupon applied Sucessfully</h2>
                  <p className="l-r para">You got <span className="l-b red-color">Rs.2000 OFF</span>  on your current booking with Artist name</p>
                </div>
               </div>
            </Modal.Body>
        </Modal>
    </>
  )
}

export default Coupons