import React from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Art from '../assets/images/art.png';
import Billdetail from "./Billdetail";
import Reward from "./Reward";
import Coupons from "./Coupons";

const Cart = () => {
  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <SideNavBar />
        </div>
        <div className="main">
          <div className="header">
            <NavBar />
          </div>
          <div className="main-content">
            <Container fluid>
              <div className="main-artists-list">
                <section className="steps-progressbar">
                  <ol className="steps l-b">
                    <li className="step is-active" data-step="1">
                        My cart
                    </li>
                    <li className="step" data-step="2">
                        Details
                    </li>
                    <li className="step" data-step="3">
                        Payment
                    </li>
                  </ol>
                </section>
                <Row>
                    <Col xl={7} lg={12} md={12}>
                        <div className="cart-artist-detail">
                            <p className="l-sb mb-1 head"><span>Booking for :</span> <span>Atharva Deshpande</span>, <span>9179922675</span></p>
                            <Stack direction="horizontal" gap={3}>
                            <div className="l-r sub-head">name@domain.com</div>
                            <div className="l-r sub-head">Add: <span>Mumbai, 410210</span></div>
                            </Stack>
                        </div>
                        <div className="cart-details-box postion-r">
                            <div className="d-flex">
                                <div className="img-sec">
                                    <img src={Art} alt="" className="w-100"/>
                                </div>
                                <div className="inner-artist-detail">
                                    <h4 className="l-sb">Artist Name, Solo Singer</h4>
                                    <div className="value-sec l-b"><span>Rs 40,000</span></div>
                                    <Stack direction="horizontal" gap={3}>
                                    <div className="l-r sub-head">Location :</div>
                                    <div className="l-r sub-head">Mumbai , Maharashtra</div>
                                    </Stack>
                                    <Stack direction="horizontal" gap={3}>
                                    <div className="l-r sub-head">Event type :</div>
                                    <div className="l-r sub-head">
                                        <Form.Select aria-label="Default select example" className="form-control">
                                            <option>House party</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </div>
                                    </Stack>
                                    <Stack direction="horizontal" gap={3}>
                                    <div className="l-r sub-head">Event date :</div>
                                    <div className="l-r sub-head">
                                        <Form.Control placeholder="" type="date"/>
                                    </div>
                                    </Stack>
                                    <Stack direction="horizontal" gap={3}>
                                    <div className="l-r sub-head">Event time :</div>
                                    <div className="l-r sub-head">
                                        <Form.Control placeholder=" " type="time"/>
                                    </div>
                                    </Stack>
                                    <Stack direction="horizontal" gap={3}>
                                    <div className="l-r sub-head">Event duration :</div>
                                    <div className="l-r sub-head">
                                        <Form.Select aria-label="Default select example" className="form-control">
                                            <option value="1">1hr</option>
                                            <option value="2">2hr</option>
                                            <option value="3">3hr</option>
                                        </Form.Select>
                                    </div>
                                    </Stack>
                                </div>
                            </div>
                            <div className="cart-footer">
                                <Stack direction="horizontal" gap={3}>
                                <div className="">
                                    <button type="button" className="l-b wbtnn btn btn-primary w-100">REMOVE</button>
                                </div>
                                <div className="ms-auto">
                                    <button type="button" className="l-b wbtnn btn btn-primary w-100">MOVE TO WISHLIST</button>
                                </div>
                                </Stack>
                            </div>
                        </div>
                        
                    </Col>
                    <Col xl={5} lg={12} md={12} className="">
                        <div className="checkavailability-right-sec">
                          <Coupons/>
                          <div className="main-reward-sec">
                            <Reward/>
                          </div>
                            <Billdetail/>
                        </div>
                    </Col>
                </Row>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
