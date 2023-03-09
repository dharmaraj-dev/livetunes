import React from 'react';
import Stack from "react-bootstrap/Stack";
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FiEdit } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import Svgrepo from '../assets/images/devices-svgrepo-com.png';

const LoginSetting = () => {
  return (
    <>
        <div className="cart-details-box  login-setting-cart">
          <div className="cart-header">
            <Stack direction="horizontal" gap={5}>
              <h4 className="l-sb">Login settings</h4>
            </Stack>
          </div>
          <div className="d-inline-flex postion-r gap-3" style={{zIndex: "4"}}>
            <div className="ico-img">
                <img src={Svgrepo} alt="" />
            </div>
            <div className="">
                <h5 className="l-sb mb-1 head">Email Address | Phone Number</h5>
                <Stack direction="horizontal" gap={1}>
                <div className="l-r sub-head fs-6">xyz@gmail.com,</div>
                <div className="l-r sub-head fs-6">+91-XXXXXXX932</div>
                <div className="l-r sub-head fs-6">(These are your registered contact details)</div>
                </Stack>
            </div>
          </div>
            <Accordion className="postion-r">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="acco-header-login-setting"><span className="red-color acco-show"><FiEdit size={24}/> Edit Login info</span> <span className="acco-hide red-color"><RxCrossCircled size={24}/> Close</span></Accordion.Header>
                    <Accordion.Body>
                      <div className="main-inner-setting-sec">
                        <Row>
                          <Col lg={6} className="col-sec-1">
                            <div className="inner-setting-sec">
                              <Form>
                                <Form.Group as={Row} className="mb-3" controlId="">
                                  <Form.Label column sm={3} className="l-sb fs-6">
                                  Current Email id
                                  </Form.Label>
                                  <Form.Label column sm={9}>
                                    <h5 className="l-r">xyz@gmail.com</h5>
                                  </Form.Label>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3 l-sb fs-6" controlId="">
                                  <Form.Label column sm={3}>
                                    New Email id
                                  </Form.Label>
                                  <Col sm={9}>
                                    <Form.Control type="email" placeholder="" />
                                  </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3 l-sb fs-6" controlId="">
                                  <Form.Label column sm={3}>
                                    Confirm PIN
                                  </Form.Label>
                                  <Col sm={9}>
                                    <Form.Control type="text" placeholder="" />
                                    <Form.Text className="l-sb red-color">
                                      A verification code has been sent please check
                                    </Form.Text>
                                  </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="text-center inner-setting-button">
                                  <Col>
                                    <button type="button" className="l-b btnn btn btn-primary border-radius-36">Save changes</button>
                                  </Col>
                                </Form.Group>

                              </Form>
                            </div>
                          </Col>
                          <Col lg={6} className="col-sec-2">
                            <div className="inner-setting-sec">
                              <Form>
                                <Form.Group as={Row} className="mb-3" controlId="">
                                  <Form.Label column sm={3} className="l-sb fs-6">
                                  Current Phone no.
                                  </Form.Label>
                                  <Form.Label column sm={9}>
                                    <h5 className="l-r">+91-9394485552</h5>
                                  </Form.Label>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3 l-sb fs-6" controlId="">
                                  <Form.Label column sm={3}>
                                   New phone no.
                                  </Form.Label>
                                  <Col sm={9}>
                                    <Form.Control type="email" placeholder="" />
                                  </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3 l-sb fs-6" controlId="">
                                  <Form.Label column sm={3}>
                                    Confirm OTP
                                  </Form.Label>
                                  <Col sm={9}>
                                    <div className="otp-set-field d-flex">   
                                      <Form.Control type="text" className="l-r" />
                                      <Form.Control type="text" className="l-r" />
                                      <Form.Control type="text" className="l-r" />
                                      <Form.Control type="text" className="l-r" />
                                      <Form.Control type="text" className="l-r" />
                                    </div>
                                    <Form.Text className="l-sb red-color">
                                      An OTP has been sent to you new phone no.
                                    </Form.Text>
                                  </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="text-center inner-setting-button">
                                  <Col>
                                    <button type="button" className="l-b btnn btn btn-primary border-radius-36">Save changes</button>
                                  </Col>
                                </Form.Group>

                              </Form>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </>
  )
}

export default LoginSetting