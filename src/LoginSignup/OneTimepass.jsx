import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import SignUpContainer from "./SignUpContainer";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Backarrow from '../assets/images/back-arrow.png';
import Invalidimg from '../assets/images/invalid-img.png';
import ModelSucces from '../assets/images/model-succes.svg';

const OneTimepass = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <SignUpContainer>
        <div className="d-flex align-items-center justify-content-center main-inner-sign-white-sec">
          <div className="col-lg-9 col-xxl-8">
            <p className="top-back-link">
            <Link to="/signup" className=" l-r black-color fnt-18 text-decoration-none"> <img src={Backarrow} alt="" /> Back</Link>
            </p>
            <div className="inner-sign-white-sec shadow">
              <h3 className="l-b form-head">
              <span className="red-color">OTP</span> verification
              </h3>
              <p className="form-sub-head l-r">Enter OTP Code sent to XXXXXX9854</p>

              <div>
                 <Form className="otp-field"> {/*otp-invalid class */}
                  <div className="otp-box d-flex">   
                    <Form.Control size="lg" type="text" className="l-b active" /> {/*active class */}
                    <Form.Control size="lg" type="text" className="l-b" />
                    <Form.Control size="lg" type="text" className="l-b" />
                    <Form.Control size="lg" type="text" className="l-b" />
                  </div>
                  <div className="invalid-expire-text clearfix">
                    <span className="invalid-text float-start red-color l-sb d-none"><img src={Invalidimg} alt="" /> Invalid OTP Entered</span>
                    <span className="expire-text float-end l-r">Expire in 00:25</span> {/*red-color class */}
                  </div>
                  <div className="receive-resend-text clearfix">
                    <span className="float-start l-r">Didn't receive OTP code ?</span>
                    <span className="float-end l-sb red-color cursor-pointer">Resend OTP</span>
                  </div>
                  <div className="terms-use-text">
                    <p className="l-r">By clicking Continue I agree that I have read and<br/>accepted the Terms of Use.</p>
                  </div>
                    <Button
                      variant="primary"
                      className="btn w-100 sign-btn white-color l-sb btnn"
                      onClick={handleShow}
                    >
                      Continue
                    </Button>

                    <Modal
                      show={show}
                      onHide={handleClose}
                      backdrop="static"
                      keyboard={false}
                      centered
                      className="otp-field-modal-dialog"
                    >
                     
                      <Modal.Body>
                        <div className="d-flex">
                          <div className='model-succes-img'>
                            <img src={ModelSucces} alt="" />
                          </div>
                          <div className='model-succes-text'>
                            <h2 className="l-b head">Successfully</h2>
                            <p className="l-b sub-head">Registered to Livetunes</p>
                            <Link to="/helloscreen">
                            <Button variant="secondary" className='otp-done l-sb btnn' onClick={handleClose}>
                             Done
                            </Button>
                            </Link>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>

                </Form>
              </div>
            </div>
          </div>
        </div>
      </SignUpContainer>
    </>
  );
};
export default OneTimepass;
