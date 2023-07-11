import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Button, Form } from "react-bootstrap";
import Facebookicon from "../assets/images/Facebookicon.png";
import Googleicon from "../assets/images/Google-icon.png";
import SignUpContainer from "./SignUpContainer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';
import { login } from "../actions/auth";
import { successToast, errorToast } from "../services/toast-service";

const LogIn = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const { isLoggedIn } = useSelector(state => state.auth);

    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [displayMessage, setDisplayMessage] = useState("");


    const handleLogin = (e) => {
      e.preventDefault();
      if (!phone.match(/^\+?[0-9]{2}-?[0-9]{6,12}$/) || phone.length != 12) {
         setDisplayMessage("Invalid mobile number.")
        return false;
      }

      setLoading(true);

      dispatch(login(phone))
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
      return <Navigate to="/artists-profile" />;
    }

    return (
        <>
          <SignUpContainer>
              <p className="top-login-link l-r fnt-18">
                Creat an account?{" "}
                <Link to="/signup" className="l-b red-color text-decoration-none">
                  Sign up
                </Link>
              </p>
            <div className="d-flex align-items-center justify-content-center main-inner-sign-white-sec">
              <div className="col-lg-9 col-xxl-8">
                <div className="inner-sign-white-sec shadow">
                  <h3 className="l-b form-head">
                    Log in
                  </h3>
                  <Form
                      onSubmit={handleLogin}
                    >
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
                      {displayMessage !== "" && (
                        <Form.Text className="text-muted text_invalid">
                          {displayMessage}
                        </Form.Text>
                      )}
                      <Form.Text className="text-muted d-none">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                    {/*<Form.Group className="mb-3" controlId="">
                      <Form.Label className="l-sb main-label">
                        Your Email* <span className="l-r">(Secondary)</span>
                      </Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted d-none">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>*/}
                      <Button
                        variant="primary"
                        type="submit"
                        className="btn w-100 sign-btn white-color l-sb btnn"
                        disabled={loading}
                      >
                        {loading && (
                          <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span> Log in </span>
                      </Button>
                  </Form>
                </div>
              </div>
            </div>
          </SignUpContainer>
        </>
      );
}

export default LogIn