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
import {fetchArtistDetails} from '../redux/artistDetailsSlice';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {moveTransactionToCart} from "../redux/userBookingSlice";
import { useParams } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const transactId = atob(params.transactionId);
  console.log(transactId);
  const {user} = useSelector(state => state.auth);
  const {details} = useSelector(state => state.artistDetails);
  const {eventData,selectedSlots,artistId,transactionId} = useSelector(state => state.userBooking);
  const {events} = useSelector(state => state.common);

  const moveToCart = () => {
    dispatch(moveTransactionToCart({"TransactId":transactionId}))
  }

  useEffect(()=>{
    dispatch(fetchArtistDetails(artistId,user.RegId));
  },[]);
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
                                    <img src={details.selProfileImage.length > 0 ? details.selProfileImage[0].LTMediaURL : Art} alt="" className="w-100"/>
                                </div>
                                <div className="inner-artist-detail">
                                    <h4 className="l-sb">{details?.selApInfo?.FullName}, {details?.selAPDetails?.GenreName} {details?.selAPDetails?.CategoryName}</h4>
                                    <div className="value-sec l-b"><span>Rs {selectedSlots.PerShowRate}</span></div>
                                    <Stack direction="horizontal" gap={3}>
                                    <div className="l-r sub-head">Location :</div>
                                    <span className="label-value">{eventData.CityName} , {eventData.StateName}</span>
                                    </Stack>
                                    <Stack direction="horizontal" gap={3}>
                                    <div className="l-r sub-head">Event type :</div>
                                    <span className="label-value">{events.filter((event)=>event.EventsId == eventData.EventTypeId)[0].EventsName}</span>
                                    </Stack>
                                    <Stack direction="horizontal" gap={3}>
                                    <div className="l-r sub-head">Event date :</div>
                                    <span className="label-value">{eventData.EventDate}</span>
                                    </Stack>
                                    <Stack direction="horizontal" gap={3}>
                                    <div className="l-r sub-head">Event time :</div>
                                    <span className="label-value">{selectedSlots.Slot}</span>
                                    </Stack>
                                    {/* <Stack direction="horizontal" gap={3}>
                                    <div className="l-r sub-head">Event duration :</div>
                                    
                                    </Stack> */}
                                </div>
                            </div>
                            <div className="cart-footer">
                                <Stack direction="horizontal" gap={3}>
                                <div className="">
                                    <button type="button" className="l-b wbtnn btn btn-primary w-100">REMOVE</button>
                                </div>
                                <div className="ms-auto">
                                    <button type="button" className="l-b wbtnn btn btn-primary w-100" onClick={()=>moveToCart()}>MOVE TO WISHLIST</button>
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
