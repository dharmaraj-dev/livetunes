import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import SignUpContainer from "./SignUpContainer";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Backarrow from '../assets/images/back-arrow.png';
import Invalidimg from '../assets/images/invalid-img.png';
import ModelSucces from '../assets/images/model-succes.svg';
import { useDispatch, useSelector } from "react-redux";
import { successToast, errorToast } from "../services/toast-service";
import { validateOtp, resendOtp } from "../actions/auth";
import { Navigate, useNavigate  } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect } from 'react';
import { logout } from '../actions/auth';

const OneTimepass = () => {
  const dispatch = useDispatch();
  const continueButton = useRef();
  let navigate = useNavigate();

  const { isLoggedIn, otpSentTo, joiningType } = useSelector(state => state.userAuth);
  const {isSettingsSaved} = useSelector(state => state.userSettings);

  const [show, setShow] = useState(false);
  const [isOtpValid, setIsOtpValid] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [canResendOtp, setCanResendOtp] = useState(true);
  const [otpTimer, setOtpTimer] = useState(30);
  const [loading, setLoading] = useState(false);
  const [otpVerifyLoading, setOtpVerifyLoading] = useState(false);
  const [agreeTerms, setAgreTerms] = useState("");

  useEffect(()=>{
    const inputfield = document.querySelector(
      `input[name=field-1]`
    );
    inputfield.focus();
  },[]);

  if (isLoggedIn && joiningType==="Artist") {
    return <Navigate to="/artists-profile" />;
  }
  else if(isLoggedIn && joiningType === "User"){
    if(isSettingsSaved) {
      <Navigate to="/dashboard" />
    } else {
      <Navigate to="/preferred-languages" />
    }
  } else if(isLoggedIn && joiningType === "Admin"){
    <Navigate to="/admin-dashboard" />
  }

  if(otpSentTo == undefined) {
    return <Navigate to="/login" />;
  }


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const verifyOtp = () => {
    if(input1 !== "" && input2 !== "" && input3 !== "" && input4 !== "" && input5 !== "") {
      if(!agreeTerms) {
        errorToast("Check terms & conditions first. ");
        return false;
      }
      setOtpVerifyLoading(true);
      setIsOtpValid("");
      const usersOtp = input1+''+input2+''+input3+''+input4+''+input5;
      dispatch(validateOtp(otpSentTo,usersOtp))
      .then((res) => {
        if(res.ProfileType === null){
          errorToast("Invalid joining type");
          dispatch(logout());
          return;
        }
        setOtpVerifyLoading(false);
        if(res.IsSuccess) {
          successToast("OTP verified successfully.");
          setIsOtpValid("");
          //handleShow();
          navigate("/")
        } else {
          setIsOtpValid(res.Message);
          errorToast(res.Message);
        }
      })
      .catch((err) => {
        setOtpVerifyLoading(false);
        errorToast(err.message);
      });
    } else {
      setIsOtpValid("Invalid/Missing OTP value entered.");
    }
  }

  const resendOtpToUser = () => {
    setLoading(true);
    setOtpTimer(30);

    dispatch(resendOtp(otpSentTo))
    .then((res) => {
      if(res.IsSuccess) {
        setInput1("");
        setInput2("");
        setInput3("");
        setInput4("");
        setInput5("");
        successToast("OTP resend successfully.");
      } else {
        errorToast(res.Message);
      }
      startTimer();
      setLoading(false);
    })
    .catch((err) => {
      errorToast(err.message);
      setLoading(false);
    });
  }

  const startTimer = () => {
    setCanResendOtp(false);
    let countDown = 30;
    const resetOtpTimer = setInterval(() => {
      countDown -= 1;
      if(countDown > 0) {
        setOtpTimer(countDown)
      } else {
        clearInterval(resetOtpTimer);
        setCanResendOtp(true);
        
      }
    },1000)
  }

  const handleClick = (e) => {
    const {value,name} = e.target
    if(name !== 'field-1' && e.keyCode === 8 && value === '') {
      e.target.classList.remove('active');
      const prevField = document.querySelector(
        `input[name=field-${parseInt(name.split("-")[1], 10) - 1}]`
      );
      if (prevField !== null) {
        prevField.focus();
      }
    }
  }

  const handleChange = (e) => {
      const { maxLength, value, name } = e.target;
      const [fieldName, fieldIndex] = name.split("-");

      let fieldIntIndex = parseInt(fieldIndex, 10);
      // Check if no of char in field == maxlength
      if (value.length >= maxLength) {
          // It should not be last input field
          if (fieldIntIndex <= 5) {
              e.target.classList.add('active');
              // Get the next input field using it's name
              const nextfield = document.querySelector(
                  `input[name=field-${fieldIntIndex + 1}]`
              );
              // If found, focus the next field
              if (nextfield !== null) {
                  nextfield.focus();
              }
              else{
                continueButton.current.focus();
              }
          }
      }
  };


  return (
    <>
      <SignUpContainer>
        <div className="d-flex align-items-center justify-content-center main-inner-sign-white-sec">
          <div className="col-lg-9 col-xxl-8">
            <p className="top-back-link">
            <Link to="/login" className=" l-r black-color fnt-18 text-decoration-none" tabIndex={"-1"}> <img src={Backarrow} alt="" /> Back</Link>
            </p>
            <div className="inner-sign-white-sec shadow">
              <h3 className="l-b form-head">
              <span className="red-color">OTP</span> verification
              </h3>
              <p className="form-sub-head l-r">Enter OTP Code sent to {`${otpSentTo !== '' ? '+'+otpSentTo : ''}`}</p>

              <div>
                 <Form className="otp-field"> {/*otp-invalid class */}
                  <div className="otp-box d-flex">   
                    <Form.Control size="lg" type="tel" pattern="[0-9]" maxLength="1" className="l-b active" name="field-1" value={input1} onKeyDown={(e)=>handleClick(e)} onChange = { (event) => { setInput1(event.target.value); handleChange(event) } } /> 
                    <Form.Control size="lg" type="tel" pattern="[0-9]" maxLength="1" className="l-b" name="field-2" value={input2} onKeyDown={(e)=>handleClick(e)}  onChange = { (event) => { setInput2(event.target.value) ; handleChange(event)} } />
                    <Form.Control size="lg" type="tel" pattern="[0-9]" maxLength="1" className="l-b" name="field-3" value={input3} onKeyDown={(e)=>handleClick(e)} onChange = { (event) => { setInput3(event.target.value); handleChange(event) } } />
                    <Form.Control size="lg" type="tel" pattern="[0-9]" maxLength="1" className="l-b" name="field-4" value={input4} onKeyDown={(e)=>handleClick(e)} onChange = { (event) => { setInput4(event.target.value); handleChange(event)  } } />
                    <Form.Control size="lg" type="tel" pattern="[0-9]" maxLength="1" className="l-b" name="field-5" value={input5} onKeyDown={(e)=>handleClick(e)} onChange = { (event) => {setInput5(event.target.value); handleChange(event)  } } />
                  </div>
                  <div className="invalid-expire-text clearfix">
                    {isOtpValid !== "" && (
                       <span className="invalid-text float-start red-color l-sb"><img src={Invalidimg} alt="" /> {isOtpValid}</span>
                    )}
                    {!canResendOtp  && (
                      <span className="expire-text float-end l-r">Resend OTP in 00:{otpTimer}</span>
                    )}
                    
                  </div>
                    <div className="receive-resend-text clearfix">
                      <span className="float-start l-r">Didn't receive OTP code ?</span>
                      {loading ? (
                        <span className="float-end l-sb red-color">
                          <span className="spinner-border spinner-border-sm"></span>
                          <span className="text-small">Sending...</span> 
                         </span>
                      ) : (
                        <>
                        {canResendOtp ? (
                        <span className="float-end l-sb red-color cursor-pointer" onClick={resendOtpToUser}>
                          Resend OTP</span>
                        ):(
                          <span className="float-end l-sb red-color">
                          <strike>Resend OTP</strike></span>
                        )}
                        </>
                      )}
                    </div>
                  <div className="terms-use-text">
                    <p className="l-r" ><input id="agreeTerms" style={{"minHeight":"20px"}} className="form-check-input" type="checkbox" name="termsConditions" value={agreeTerms} onChange={(e) => {setAgreTerms(e.target.checked)}} /> <span htmlFor="agreeTerms">I agree that I have read and accepted the </span><a href="/#/terms-conditions" className="red-color cursor-pointer">Terms of Use</a>.</p>
                  </div>
                      <Button
                        variant="primary"
                        className="btn w-100 sign-btn white-color l-sb btnn"
                        onClick={verifyOtp}
                        disabled={otpVerifyLoading || !agreeTerms}
                        ref={continueButton}
                        >
                        {otpVerifyLoading && (
                          <span className="spinner-border spinner-border-sm"></span>
                          )}
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
                            <Link to="/">
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
