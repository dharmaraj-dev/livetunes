import React, {useState, useEffect} from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Art from '../assets/images/art.png';
import BilldetailSlots from "./BilldetailSlots";
import Reward from "./Reward";
import Coupons from "./Coupons";
import { useDispatch, useSelector } from "react-redux";
import {moveTransactionToCart, getTransactionDetails, resetToInitialState} from "../redux/userBookingSlice";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import moment from "moment";
import { errorToast, infoToast, successToast } from "../services/toast-service";
import { useNavigate } from "react-router-dom";
import { TfiPencil, TfiReload } from "react-icons/tfi";
import {fetchAvailSlots} from "../redux/userBookingSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const transactId = atob(params.transactionId);
  const {user} = useSelector(state => state.auth);
  const {
      transactionDetailsLoading,
      transactionDetails,
      moveToWishlistLoading,
      moveToWishlistSuccess,
      moveToWishlistError,
      moveToWishlistMessage,
      availSlotsLoading,
      availSlots,
      availSlotsMsg
  } = useSelector(state => state.userBooking);


  const {events} = useSelector(state => state.common);

  const [isSlotEditEnable, setIsSlotEditEnable] = useState(false);
  const [newEventSelectionDate, setNewEventSelectionDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const moveToCart = () => {
    dispatch(moveTransactionToCart({"TransactId":transactId}))
  }

  const editSlot = () => {
    setIsSlotEditEnable(true);
  }

  const fetchSlots = (e) => {
    setNewEventSelectionDate(e.target.value);
    dispatch(fetchAvailSlots({"ArtistId":transactionDetails.selBook.ArtistId,"EventDate":e.target.value,"StateName": transactionDetails.selBook.StateName,"CityName": transactionDetails.selBook.CityName}));
  }

  const newSlotSelect = (slotData) => {
        setSelectedSlot(slotData.ASlotId);

        // if(selectedSlot === slotData.ASlotId) {
        //     setSelectedSlot("");
        //     setSelectedSlotData([]);
        //     props.setSlotForAvailability("");
        // } else {
        //     setSelectedSlotData(slotData);
        //     props.setSlotForAvailability(slotData);
        // }
        
    }

  useEffect(()=>{
    dispatch(getTransactionDetails({"TransactId":transactId}));
  },[]);

  useEffect(()=>{
    if(moveToWishlistSuccess) {
      successToast(moveToWishlistMessage);
      dispatch(resetToInitialState())
      navigate(`/bookings`);
    } else if(moveToWishlistError) {
      successToast(moveToWishlistMessage)
    }
  },[moveToWishlistSuccess, moveToWishlistError]);

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
            {
              transactionDetailsLoading ? (
                <>
                   <Row>
                    <Col xl={7} lg={12} md={12}>
                      <Skeleton className="mr-1 mb-3" height="160px" />
                      <Skeleton className="mr-1" height="300px" />
                    </Col>
                    <Col xl={5} lg={12} md={12} className="">
                      <div className="h-100">
                        <Skeleton className="mr-1" height="100%" />
                      </div>
                    </Col>
                    </Row>
                </>
              ) : (
                <Container fluid>
              <div className="main-artists-list">
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
                                    <img src={transactionDetails.selBook.ProfileURL} alt="" className="w-100"/>
                                </div>
                                <div className="inner-artist-detail">
                                    <h4 className="l-sb">{transactionDetails.selBook.ArtistName}, <br /> {transactionDetails.selBook.Genre}</h4>
                                    <div className="value-sec l-b"><span>Rs {transactionDetails.selBook.PerShowRate}</span></div>
                                    <Stack direction="horizontal" gap={3}>
                                    <div className="l-r sub-head">Location :</div>
                                    <span className="label-value">{transactionDetails.selBook.CityName} , {transactionDetails.selBook.StateName}</span>
                                    </Stack>
                                    <Stack direction="horizontal" gap={3}>
                                    <div className="l-r sub-head">Event type :</div>
                                    <span className="label-value">{events.filter((event)=>event.EventsId == transactionDetails.selBook.EventTypeId)[0].EventsName}</span>
                                    </Stack>
                                    <Stack direction="horizontal" gap={3}>
                                    <div className="l-r sub-head">Event date :</div>
                                      <span className="label-value">{moment(transactionDetails.selBook.EventDate).format("YYYY-MM-DD")}</span>
                                   {/* {isSlotEditEnable ? (
                                      <>
                                      <input value={newEventSelectionDate} className="form-control" min={moment().format("YYYY-MM-DD")} type="date" onChange={(e)=>{fetchSlots(e)}}/>
                                      <TfiReload className="edit_cart_slot" onClick={() => {setIsSlotEditEnable(false)}} />
                                      </>
                                    ):(
                                    <>
                                      <span className="label-value">{moment(transactionDetails.selBook.EventDate).format("YYYY-MM-DD")}</span>
                                      <TfiPencil className="edit_cart_slot" onClick={editSlot} />
                                    </>
                                    )} */}
                                    
                                    </Stack>
                                    <Stack direction="horizontal" gap={3}>
                                    <div className="l-r sub-head">Event time :</div>
                                      <span className="label-value">{transactionDetails.selBook.SlotTime}</span>
                                   {/* {!isSlotEditEnable ? (
                                      <>
                                      <div className="l-r sub-head">Event time :</div>
                                      <span className="label-value">{transactionDetails.selBook.SlotTime}</span>
                                      </>
                                    ):(
                                       availSlotsLoading ? (
                                          <ul className="slots-list">
                                          {[...Array(6)].map((e, i) => {
                                              return (
                                                <Skeleton key={`slot_${i}`} className="mr-2"  width="140px" height="50px" count={1} inline={true}  />
                                              )
                                          })}
                                          </ul>
                                      ):(
                                          newEventSelectionDate != "" && (
                                              availSlots?.length > 0 ? (
                                                  <Col lg={12} md="12" className="mb-4">
                                                      <label>Available Slots:</label>
                                                      <ul className="slots-list">
                                                          {availSlots.filter((slot,index)=>availSlots.indexOf(slot) === index).map((slot, indx) => (
                                                                  <li key={`slot_data_${indx}`} 
                                                                   className={selectedSlot === slot.ASlotId ? 'active' : ''} onClick={() =>{newSlotSelect(slot)}} >
                                                                  <label>
                                                                      <span className='slot-box'>{slot.Slot}</span><br></br>
                                                                  </label>
                                                              </li>)
                                                          )}
                                                      </ul>
                                                  </Col>
                                              ) : (
                                                  <>
                                                      <p className="info-text">{availSlotsMsg !== null ? availSlotsMsg : 'Slots not available for this date and state'}</p>
                                                  </>
                                              )
                                          )
                                      )
                                    )}
                                    */}
                                    </Stack>
                                    {transactionDetails.PayStatus === "Success" && (
                                       <div class="rubber_stamp">BOOKED</div>
                                    )}
                                </div>
                            </div>
                            <div className="cart-footer">
                                <Stack direction="horizontal" gap={3}>
                                <div className="">
                                    <button type="button" className="l-b wbtnn btn btn-primary w-100">REMOVE</button>
                                </div>
                                <div className="ms-auto">
                                    <button type="button" className="l-b wbtnn btn btn-primary w-100" onClick={()=>moveToCart()}>
                                    {moveToWishlistLoading && (
                                      <span className="spinner-border spinner-border-sm"></span>
                                    )}
                                      MOVE TO WISHLIST
                                    </button>
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
                            <BilldetailSlots data={transactionDetails}/>
                        </div>
                    </Col>
                </Row>
              </div>
                </Container>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
