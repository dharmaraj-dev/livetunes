import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Button, Form } from "react-bootstrap";
import SignUpContainer from "./SignUpContainer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';
import { register } from "../actions/auth";
import { successToast, errorToast } from "../services/toast-service";

const SignUp = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector(state => state.auth);

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [displayMessage, setDisplayMessage] = useState("");

  const handleSignup = (e) => {
      e.preventDefault();
      if (!phone.match(/^\+?[0-9]{2}-?[0-9]{6,12}$/) || phone.length !== 12) {
         setIsPhoneValid(false);
         console.log('invalid phone')
        return false;
      } else if (email !== "" && email.match(/^\S+@\S+\.\S+$/) === null) {
        setIsEmailValid(false);
        console.log('invalid emaol')
        return false;
      }
      else {
        setIsPhoneValid(true);
        setIsEmailValid(true);
      }

      setLoading(true);

      dispatch(register(phone, email))
        .then((res) => {
          if(res.IsSuccess) {
            successToast("OTP sent successfully.");
            navigate("/otp");
            setDisplayMessage(res.Message)
          } else {
            errorToast(res.Message);
            setDisplayMessage(res.Message)
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log('err', err);
          errorToast(err.message);
          setDisplayMessage(err.message)
          setLoading(false);
        });
    };

    if (isLoggedIn) {
      return <Navigate to="/artistdashboard" />;
    }

  return (
    <>
      <SignUpContainer>
          <p className="top-login-link l-r fnt-18">
            Already have an account?{" "}
            <Link to="/login" className="l-b red-color text-decoration-none">
              Log in
            </Link>
          </p>
        <div className="d-flex align-items-center justify-content-center main-inner-sign-white-sec">
          <div className="col-lg-9 col-xxl-8">
            <div className="inner-sign-white-sec shadow">
              <h3 className="l-b form-head">
                Create Your <samp className="red-color">Free Account</samp>
              </h3>
              <p className="form-sub-head l-r">A place to find live envets</p>
              <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="">
                  <Form.Label className="l-sb main-label">
                    Your Phone number* <span className="l-r">(Primary)</span>
                  </Form.Label>
                  <PhoneInput
                    className="l-r"
                    country={"in"}
                    enableSearch={true}
                    value={phone}
                    placeholder={9999999999}
                    onChange={(phone) => setPhone(phone)}
                    disabled={loading}
                  />
                  {!isPhoneValid && (
                    <Form.Text className="text-muted text_invalid">
                      Invalid Mobile Number.
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                  <Form.Label className="l-sb main-label">
                    Your Email <span className="l-r">(Secondary)</span>
                  </Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading}/>
                  {!isEmailValid && (
                    <Form.Text className="text-muted text_invalid">
                      Invalid Email Address.
                    </Form.Text>
                  )}
                </Form.Group>
                {displayMessage !== "" && (
                  <Form.Text className="text-muted text_invalid">
                    {displayMessage}
                  </Form.Text>
                )}
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn w-100 sign-btn white-color l-sb btnn"
                    disabled={loading}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span> Sign up</span>
                  </Button>
              </Form>
            </div>
          </div>
        </div>
      </SignUpContainer>
    </>
  );
};

export default SignUp;
