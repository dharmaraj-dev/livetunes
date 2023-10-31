import React, { useEffect, useState, useImperativeHandle, forwardRef, useCallback } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Skeleton from 'react-loading-skeleton'
import { IoLocationSharp } from "react-icons/io5";
import { FiEdit3, FiInfo } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import { MdMyLocation } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { RxCross2 } from "react-icons/rx";
import Lmark from '../assets/images/l-mark.png';
import Lottie from "lottie-react";
import Sademoji from "../components/sademoji.json";
import { useDispatch, useSelector } from "react-redux";
import {fetchAvailSlots} from "../redux/userBookingSlice";
import { errorToast, infoToast, successToast } from "../services/toast-service";
import {setArtistId,setEventData,SelectSlot,saveUserBooking, saveForBooking, payForBooking, setSelectedSlotsToState, setExMiscCharges} from "../redux/userBookingSlice";
import moment from 'moment/moment';
import Switch from "react-switch";
import useRazorpay from "react-razorpay";
import { useParams } from "react-router-dom";


const EventDetailVenue = forwardRef((props, ref) => {
    console.log('props,', props)
    const dispatch = useDispatch();
    const [Razorpay] = useRazorpay();
    const navigate = useNavigate();
    const params = useParams();
    const artistId = atob(params.artistId);
    const {details} = useSelector(state => state.artistDetails);
    const { events ,states,cities} = useSelector(state => state.common);
    const {user} = useSelector(state => state.userAuth);
    const {availSlotsLoading, availSlots, availSlotsMsg, transactionId,saveBookingLoading, saveAndPayLoading} = useSelector(state => state.userBooking);
    const { selectedCity } = useSelector(state => state.userSettings);

    const [changeBookingCity, setChangeBookingCity] = useState(selectedCity != null ? false : true);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState("");
    const [selectedSlotData, setSelectedSlotData] = useState([]);

    const [eventId,setEventId] = useState(-1);
    const [eventDate,setEventDate] = useState("");
    const [eventLatitude,setEventLatitude] = useState("");
    const [eventLongitude,setEventLongitude] = useState("");
    const [eventAddress1,setEventAddress1] = useState("");
    const [eventAddress2,setEventAddress2] = useState("");
    const [landmark,setLandmark] = useState("");
    const [state,setState] = useState("");
    const [city,setCity] = useState("");
    const [pincode,SetPincode] = useState("");
    const [isCheckboxChecked,setIsCheckboxChecked] = useState(true);
    const [ExMisCharges,setMisCharges] = useState(false);

    const setMiscCharges = (isChecked) => {
        setMisCharges(isChecked);
        dispatch(setExMiscCharges(isChecked))
    }


    useImperativeHandle(
        ref,
        () => ({
            payNowTrigger(stData) {
                
                if(eventAddress1 === ""){
                    errorToast("Event Address1 field is missing");
                    return false;
                }else if(eventAddress2 === ""){
                    errorToast("Event Address2 field is missing");
                    return false;
                }else if(landmark === ""){
                    errorToast("Landmark field is missing");
                    return false;
                }else if(state === ""){
                    errorToast("State field is missing");
                    return false;
                }else if(city === ""){
                    errorToast("City field is missing");
                    return false;
                }else if(pincode === ""){
                    errorToast("Pincode field is missing");
                    return false;
                }else if(eventId === -1){
                    errorToast("Event field is missing");
                    return false;
                }else if(eventDate === ""){
                    errorToast("Date field is missing");
                    return false;
                } else{
                    const sData = {
                        "EventAdd1":eventAddress1,
                        "EventAdd2":eventAddress2,
                        "Landmark":landmark,
                        "StateName":state,
                        "CityName":city,
                        "PinCode":pincode,
                        "EventTypeId":eventId,
                        "EventDate":eventDate,
                        "ArtistId":artistId,
                        "ASlotId":stData.ASlotId,
                        "EventLat":eventLatitude,
                        "EventLoc":eventLongitude,
                        "ExMiscCharges": ExMisCharges
                    }
                    dispatch(saveForBooking(sData))
                    .then((res)=>{
                        if(res.IsSuccess){
                            if(res.TransactionId != null){
                                const options: RazorpayOptions = {
                                  key: "rzp_test_yaUjQdG3CL5q4d",
                                  amount: 4000,
                                  currency: "INR",
                                  name: "LiveTunes",
                                  description: "Test Transaction",
                                  image: "https://livetunes.ai/logo.png",
                                  order_id: "order_MsQkfUhryNGW1d",
                                  handler: (resp) => {
                                    console.log('res', resp);
                                    const paymentData = {
                                        "TransactId": res.TransactionId,
                                        "selBookBill":
                                        [
                                            {
                                                "BillSec":"Total artist rate",
                                                "BillSecAmt": stData.PerShowRate
                                            },
                                            {
                                                "BillSec":"Food and stay",
                                                "BillSecAmt": stData.FoodStay
                                            },
                                            {
                                                "BillSec":"Travel fees",
                                                "BillSecAmt": stData.TravelFees
                                            },
                                            {
                                                "BillSec":"Gst(18%)",
                                                "BillSecAmt": (stData.PerShowRate + stData.FoodStay + stData.TravelFees)*0.18
                                            }
                                        ]
                                        }
                                        dispatch(payForBooking(paymentData));
                                  },
                                  error: (err) => {
                                    console.log('err', err)
                                  },
                                  prefill: {
                                    name: "Test User",
                                    email: "test@example.com",
                                    contact: "9999999999",
                                  },
                                  notes: {
                                    address: "Razorpay Corporate Office",
                                  },
                                  theme: {
                                    color: "#3399cc",
                                  },
                                };

                                const rzpay = new Razorpay(options);
                                rzpay.open();
                            } else{
                                infoToast(res.Message);
                            }
                        } else{
                            errorToast('Something went wrong')
                        }
                    })
                }
            }
        }),
    )


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const setDate = (e) => {
        if(e == "") {
            setEventDate("");
            setSelectedSlot("");
            setSelectedSlotData([]);

        } else {
            setEventDate(e.target.value);
            dispatch(fetchAvailSlots({"ArtistId":artistId,"EventDate":e.target.value,"StateName": state,"CityName": city}));
        }
        
    }

    const selectSlot = (slotData) => {
        setSelectedSlot(slotData.ASlotId);

        if(selectedSlot === slotData.ASlotId) {
            setSelectedSlot("");
            setSelectedSlotData([]);
            //props.setSlotForAvailability("");
            dispatch(setSelectedSlotsToState(null))
        } else {
            setSelectedSlotData(slotData);
            //props.setSlotForAvailability(slotData);
            dispatch(setSelectedSlotsToState(slotData))
        }
        
    }

     const handleClick =async () => {
        if(eventAddress1 === ""){
            errorToast("Event Address1 field is missing");
            return false;
        }else if(eventAddress2 === ""){
            errorToast("Event Address2 field is missing");
            return false;
        }else if(landmark === ""){
            errorToast("Landmark field is missing");
            return false;
        }else if(state === ""){
            errorToast("State field is missing");
            return false;
        }else if(city === ""){
            errorToast("City field is missing");
            return false;
        }else if(pincode === ""){
            errorToast("Pincode field is missing");
            return false;
        }else if(eventId === -1){
            errorToast("Event field is missing");
            return false;
        }else if(eventDate === ""){
            errorToast("Date field is missing");
            return false;
        }else if(selectedSlot === ""){
            errorToast("Slot not available or not selected");
            return false;
        }else{
            dispatch(setArtistId(artistId));
            const data = {
                "EventAdd1":eventAddress1,
                "EventAdd2":eventAddress2,
                "Landmark":landmark,
                "StateName":state,
                "CityName":city,
                "PinCode":pincode,
                "EventTypeId":eventId,
                "EventDate":eventDate
            }
            dispatch(setEventData(data));
            dispatch(SelectSlot(availSlots.filter((slot) => slot.ASlotId == selectedSlot)[0]));
            dispatch(saveUserBooking({...data,"ArtistId":artistId,"ASlotId":selectedSlot,"EventLat":eventLatitude,"EventLoc":eventLongitude, "ExMiscCharges": ExMisCharges}))
            .then((res)=>{
                if(res.IsSuccess){
                    if(res.TransactionId != null){
                        successToast(res.Message);
                        navigate(`/cart/${btoa(res.TransactionId)}`);
                    } else{
                        infoToast(res.Message);
                    }
                } else{
                    errorToast('Something went wrong')
                }
            })
        }
    }

    const handleLocationChange = nextChecked => {
        console.log('a',nextChecked, );
        if(!nextChecked) {
            const tmpState = cities.filter((ct) => {return (ct.CityName == selectedCity.split('_')[1])});
            if(tmpState.length > 0) {
               setState(tmpState[0].StateName); 
               setCity(selectedCity.split('_')[1]);
               //setIsCheckboxChecked(false);
                setEventDate("");
                setSelectedSlot("");
                setSelectedSlotData([]);
                dispatch(setSelectedSlotsToState(null))
            }
        } else {
            setState(""); 
            setCity("");
            setEventDate("");
            setSelectedSlot("");
            setSelectedSlotData([]);
            //setIsCheckboxChecked(true);
            dispatch(setSelectedSlotsToState(null))
        }
        setChangeBookingCity(nextChecked)
    }

    const removeSlotaData = () => {
        setCity("");
        setEventDate("");
        setSelectedSlot("");
        setSelectedSlotData([]);
        setIsCheckboxChecked(false);
        dispatch(setSelectedSlotsToState(null))
    }

    // const handlePayment = useCallback(() => {

    //     const options: RazorpayOptions = {
    //       key: "rzp_test_w8pPC5ridC3umD ",
    //       amount: "3000",
    //       currency: "INR",
    //       name: "LiveTunes India Pvt Ltd",
    //       description: "Test Transaction",
    //       image: "https://livetunes.ai/logo.png",
    //       order_id: order.id,
    //       handler: (res) => {
    //         console.log(res);
    //       },
    //       prefill: {
    //         name: "Test User",
    //         email: "test@example.com",
    //         contact: "xxxxxxxxxx",
    //       },
    //       notes: {
    //         address: "Razorpay Corporate Office",
    //       },
    //       theme: {
    //         color: "#3399cc",
    //       },
    //     };

    //     const rzpay = new Razorpay(options);
    //     rzpay.open();
    //   }, [Razorpay]);


    useEffect(() => {
        if(selectedCity != null) {
            const tmpState = cities.filter((ct) => {return (ct.CityName == selectedCity.split('_')[1])});
            if(tmpState.length > 0) {
               setState(tmpState[0].StateName); 
               setCity(selectedCity.split('_')[1]);
               setIsCheckboxChecked(false);
            }
        }
    }, [])

    
  return (
    <>
        <section>
            <Form>
            <div className="venue-sec">
                <Row>
                    <Col lg={5}><h4 className="l-b">Event venue</h4></Col>
                    <Col lg={7} className="d-flex main-left-location-sec">
                        <Stack direction="horizontal" className="left-location-sec">
                                <span className="some_other_loc" >Book for other location? </span>
                                <Switch
                                    onChange={handleLocationChange}
                                    checked={changeBookingCity}
                                    className="react-switch"
                                    disabled={selectedCity == null ? true : false}
                                  />
                            {/*<div className="location-text l-r" onClick={handleShow}>
                                <span className="me-2 green-color"><IoLocationSharp/></span>
                                <span>Locate venue on map</span>
                            </div>
                            <div className="location-edit"><FiEdit3/></div>*/}
                        </Stack>
                    </Col>
                </Row>
            </div>
            
            <Row className="align-items-center">
                <Col lg={12} md="12" className="mb-4">
                <Form.Control placeholder="Add Event address (Line 1)" type="text" onChange={(e)=>setEventAddress1(e.target.value)}/>
                </Col>
                <Col lg={6} md="12" className="mb-4">
                <Form.Control placeholder="Add Event address (Line 2)" type="text" onChange={(e)=>setEventAddress2(e.target.value)}/>
                </Col>
                <Col lg={6} md="12" className="mb-4">
                <Form.Control placeholder="Landmark" type="text" onChange={(e)=>setLandmark(e.target.value)}/>
                </Col>
                {changeBookingCity ? (
                    <>
                        <Col lg={4} md="12" className="mb-4"> 
                            <Form.Select aria-label="Default select example" className="form-control" onChange={(e)=>{setState(e.target.value);setDate("");removeSlotaData()}}>
                                <option>Select state</option>
                                {
                                    states.map((state,index)=><option key={`state_${index}`} value={state.StateName}>{state.StateName}</option>)
                                }
                            </Form.Select>
                        </Col>
                        {
                        state && (
                        <>
                            <Col lg={4} md="12" className="mb-4">
                                <Form.Select aria-label="Default select example" className="form-control" onChange={(e)=>{setCity(e.target.value);}}>
                                    <option>Select city</option>
                                    {
                                        cities.filter((city)=>city.StateName === state).map((city,index)=><option key={`city_${index}`} value={city.CityName}>{city.CityName}</option>)
                                    }
                                </Form.Select>
                            </Col>
                            <Col lg={4} md="12" className="mb-4" onChange={(e)=>SetPincode(e.target.value)}>
                                <Form.Control placeholder="Pincode" type="number"/>
                            </Col>
                        </>
                        )
                    }
                     <Col>
                        <div className="booking-warning">
                            <FiInfo title="Additional travel, food and stay charges may be applicable according to the venue location"/> 
                            <label>Additional travel, food and stay charges may be applicable according to the venue location </label>
                        </div>
                    </Col>
                    </>
                ):(
                    <Col lg={4} md="12" className="mb-4" onChange={(e)=>SetPincode(e.target.value)}>
                        <Form.Control placeholder="Pincode" type="number"/>
                    </Col>
                )}
                
            </Row>
             <h4 className="l-b mb-4 mt-4">Event details</h4>
            <Row>
                <Col lg={6} md="12" className="mb-4">
                    <Form.Select aria-label="Default select example" className="form-control" onChange={(e)=>{setEventId(e.target.value)}}>
                        <option>Select Event</option>
                        {events.map((eve,index) => {
                            return (
                                <option key={`event_${index}`} value={eve.EventsId}>{eve.EventsName}</option>
                                )
                        })}
                    </Form.Select>
                </Col>
                <Col lg={6} md="12" className="mb-4">
                    <Form.Control disabled={(state == "" || city == "") ? true : false} value={eventDate} placeholder="Event date - " min={moment().format("YYYY-MM-DD")} type="date" onChange={(e)=>setDate(e)}/>
                </Col>
                {availSlotsLoading ? (
                    <ul className="slots-list">
                    {[...Array(6)].map((e, i) => {
                        return (
                          <Skeleton key={`slot_${i}`} className="mr-2"  width="140px" height="50px" count={1} inline={true}  />
                        )
                    })}
                    </ul>
                ):(
                    eventDate != "" && (
                        availSlots?.length > 0 ? (
                            <Col lg={12} md="12" className="mb-4">
                                <label>Available Slots:</label>
                                <ul className="slots-list">
                                    {availSlots.filter((slot,index)=>availSlots.indexOf(slot) === index).map((slot, indx) => (
                                            <li key={`slot_data_${indx}`} onClick={() =>{selectSlot(slot)}} className={selectedSlot === slot.ASlotId ? 'active' : ''}>
                                            <label>
                                                <span className='slot-box'>{slot.Slot}</span><br></br>
                                            </label>
                                        </li>)
                                    )}
                                </ul>
                            </Col>
                        ) : (
                            <>
                                <p className="info-text red-color">{availSlotsMsg !== null ? availSlotsMsg : 'Slots not available for this date and state'}</p>
                            </>
                        )
                    )
                )}
                
                <Col>
                    <Form.Group className="l-r mt-2" controlId="formMisBasicCheckbox">
                        <Form.Check type="checkbox" label="Check if you will be availing food, stay and travel for the artist" checked={ExMisCharges ? true : false} onChange={(e)=>setMiscCharges(e.target.checked)}/>
                    </Form.Group>
                </Col>
            </Row>

            <section className="event-check-button-sec">
                <Row>
                    <Col lg="6">
                        <Link to={`/artist-details/${details.selApInfo.FullName?.replace(/ /g,"-")}/${btoa(artistId)}/${btoa(user.RegId)}`}>
                        <button type="button" className="l-b wbtnn back-btn btn btn-primary w-100">Back</button>
                        </Link>
                    </Col>
                    <Col lg="6">
                        <button disabled={saveBookingLoading} type="button" className="l-b btnn btn btn-primary w-100" onClick={()=>handleClick()}>
                        {saveBookingLoading && (
                          <span className="spinner-border spinner-border-sm"></span>
                        )}
                        &nbsp; Proceed to book</button>
                    </Col>
                </Row>
            </section>
            </Form>
        </section>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
            size="lg"
            className="reward-model-sec"
        >
            
            <div className="closeButtonr" onClick={handleClose}>
                <RxCross2/>
            </div>
            <Modal.Body>
                <div className="inner-map-location-sec">
                    <Row>
                        <Col lg={6}>
                        <Form className="coupons-search-sec postion-r mb-4">
                            <Form.Control
                                type="search"
                                placeholder="Use current location"
                                className="me-2"
                                aria-label="Search"
                                />
                            <div type="button" className="l-b apl-btn red-color"><MdMyLocation/></div>
                        </Form>
                        <Form className="coupons-search-sec postion-r">
                            <Form.Control
                                type="search"
                                placeholder="Input cupon name"
                                className="me-2"
                                aria-label="Search"
                                />
                            <div type="button" className="l-b apl-btn red-color"><HiOutlineSearch/></div>
                        </Form>
                        <div className="nearest-location-sec-list">
                            <p className="l-m main-head">Landmarks nearest to pinned location</p>
                            <div className="inner-nearest-location-sec-list">
                                <div className="d-flex">
                                    <div className="landmark-img">
                                        <img src={Lmark} alt="" className="w-100" />
                                    </div>
                                    <div className="right-text-sec postion-r">
                                        <p className="l-r head">Pheonix Marketcity</p>
                                        <p className="l-r sub-head">500M from the venue</p>
                                        <div type="button" className="l-r lmark-btn red-color">Select as a Landmark</div>
                                    </div>
                                </div>
                            </div>
                            <div className="inner-nearest-location-sec-list">
                                <div className="d-flex">
                                    <div className="landmark-img">
                                        <img src={Lmark} alt="" className="w-100" />
                                    </div>
                                    <div className="right-text-sec postion-r">
                                        <p className="l-r head">LTT Station</p>
                                        <p className="l-r sub-head">2KM from the venue</p>
                                        <div type="button" className="l-r lmark-btn red-color">Select as a Landmark</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="select-btn-sec">
                            <button type="button" className="l-b select-btn btnn btn btn-primary w-100">Select location</button>
                        </div>
                        </Col>
                        <Col lg={6}>
                            <div className="map-loco-box">
                                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15272027.669187387!2d73.72888197555253!3d20.850984767574634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1674543089151!5m2!1sen!2sin" ></iframe>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Modal.Body>
        </Modal>



        <Modal
            show={show2}
            onHide={handleClose2}
            backdrop="static"
            keyboard={false}
            centered
            size="lg"
            className=""
        >
            
            <div className="closeButtonr" onClick={handleClose2}>
                <RxCross2/>
            </div>
            <Modal.Body>
                <div className="inner-map-location-sec">
                    <Row>
                        <Col>
                            <div className="text-center availability-not-found">
                                <div className="lottie-sademoji">
                                    <Lottie animationData={Sademoji} loop={true} />
                                </div>
                                <h1 className="l-bl red-color head">We are Sorry!</h1>
                                <p className="l-r sub-head">Artist is not available for the selected date. Please select some other artist or Change the dates if you can. Extremely sorry for your inconvenience.</p>
                                <button type="button" className="l-sb btnn  btn btn-primary" onClick={handleClose2}>OK</button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Modal.Body>
        </Modal>


    </>
  )
})

export default EventDetailVenue