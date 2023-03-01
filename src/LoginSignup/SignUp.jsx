import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Button, Form } from "react-bootstrap";
import Facebookicon from "../assets/images/Facebookicon.png";
import Googleicon from "../assets/images/Google-icon.png";
import SignUpContainer from "./SignUpContainer";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [phone, setPhone] = useState("");
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
              <div className="social-login">
                <Button className="w-100 l-r mb-3">
                  <img src={Googleicon} alt="Google-icon" /> Sign up with
                  Google
                </Button>
                <Button className="w-100 l-r">
                  <img src={Facebookicon} alt="facebook-icon" /> Sign up with Facebook
                </Button>
              </div>
              <div className="separator">
                <div className="line" />
                <h6 className="red-color">OR</h6>
                <div className="line" />
              </div>
              <Form>
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
                  />
                  <Form.Text className="text-muted d-none">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                  <Form.Label className="l-sb main-label">
                    Your Email* <span className="l-r">(Secondary)</span>
                  </Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted d-none">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Link to="/otp">
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn w-100 sign-btn white-color l-sb btnn"
                  >
                    Sign up
                  </Button>
                </Link>
              </Form>
            </div>
          </div>
        </div>
      </SignUpContainer>
    </>
  );
};

export default SignUp;
