import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Modal from 'react-bootstrap/Modal';
import Lottie from "lottie-react";
import { RxCross2 } from "react-icons/rx";
import Offerimg from '../assets/images/offer-img.png';
import Form from 'react-bootstrap/Form';
import Suce from "../components/suce.json";
import { Tabs, Tab} from "react-bootstrap";

const Coupons = (props) => {
  console.log(props)
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [selectedCouponData, setSelectedCouponData] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const checkCouponSelected = (type, couponData) => {
    props.selectCoupon(type, couponData);
    setSelectedCouponData(couponData);
    setShow(false);
    handleShow2();
  }

  const closePopups = () => {
    setShow2(false);
  }

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
                      <h2 className="l-b ms-4">Offers, Coupons & Rewards</h2>
                    </div>
                  </div>
                  <Tabs defaultActiveKey="coupons" id="uncontrolled-tab-example" className="mb-1 justify-content-start">
                      <Tab eventKey="coupons" title="Coupons">
                         {props.data.filter((cpn) => {return cpn.VoucherStackDetails === "COUPONS"}).length == 0 && !props.loading ? (
                            <div className="avail-coupons-text">
                              <h2 className="mb-0">No coupons available</h2>
                            </div>
                          ):(
                            <>
                               <div className="avail-coupons-text">
                                <h2 className="mb-0">Available coupons</h2>
                              </div>
                              {props.data.filter((cpn) => {return cpn.VoucherStackDetails === "COUPONS"}).map((coup,index) => {
                                return (
                                  <div key={`coupon_${index}`} className="coupons-box">
                                    <h2 className="mb-0 red-color">{coup.VoucherStackDesc}</h2>
                                    <p className="l-r text-sec">{coup.VoucherStackADesc}</p>
                                    <div className="d-flex">
                                      <div className="me-auto code-text green-color l-b">{coup.VoucherStackCode}</div>
                                      <div className=""><button type="button" className="l-r btnn code-apply-btn btn btn-primary" onClick={() => {checkCouponSelected('coupons', coup)}} >APPLY</button></div>
                                    </div>
                                  </div>
                                )
                              })}
                            </>
                            )}
                      </Tab>
                      <Tab eventKey="rewards" title="Rewards">
                          {props.data.filter((cpn) => {return cpn.VoucherStackDetails === "REWARDS"}).length == 0 && !props.loading ? (
                            <div className="avail-coupons-text">
                              <h2 className="mb-0">No rewards available</h2>
                            </div>
                          ):(
                            <>
                               <div className="avail-coupons-text">
                                <h2 className="mb-0">Available rewards</h2>
                              </div>
                              {props.data.filter((cpn) => {return cpn.VoucherStackDetails === "REWARDS"}).map((coup,index) => {
                                return (
                                  <div key={`reward_${index}`} className="coupons-box">
                                    <h2 className="mb-0 red-color">{coup.VoucherStackDesc}</h2>
                                    <p className="l-r text-sec">{coup.VoucherStackADesc}</p>
                                    <div className="d-flex">
                                      <div className="me-auto code-text green-color l-b">{coup.VoucherStackCode}</div>
                                      <div className=""><button type="button" className="l-r btnn code-apply-btn btn btn-primary" onClick={() => {checkCouponSelected('rewards', coup)}} >APPLY</button></div>
                                    </div>
                                  </div>
                                )
                              })}
                            </>
                            )}
                      </Tab>
                  </Tabs>
                </div>
            </Modal.Body>
        </Modal>




        <Modal
            show={show2}
            onHide={() => {closePopups();}}
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
                  <p className="code-suc-text red-color l-bl">{selectedCouponData.VoucherStackCode}</p>
                  <h2>Coupon applied Sucessfully</h2>
                  <p className="l-r para">{selectedCouponData.VoucherStackDesc}</p>
                </div>
               </div>
            </Modal.Body>
        </Modal>
    </>
  )
}

export default Coupons