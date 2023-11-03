import React, { useState, useEffect } from 'react';
import Stack from 'react-bootstrap/Stack';
import Modal from 'react-bootstrap/Modal';
import Lottie from "lottie-react";
import { RxCross2 } from "react-icons/rx";
import Gift2 from "../components/gift2.json";
import Rupee from "../components/rupee.json";
import Thumb from "../components/thumb.json";
import Straremoji from "../components/straremoji.json";
import { useDispatch, useSelector } from "react-redux";
import {payForBookingFromCart} from "../redux/userBookingSlice";
import Sademoji from "../components/sademoji.json";
import { useNavigate } from "react-router-dom";


const Billdetail = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { 
            saveAndPayLoading,
            saveAndPayMessage,
            saveAndPaySucess,
            saveAndPayError,
            selectedSlots
    } = useSelector(state => state.userBooking);

    const [showDialogue, setShowDialogue] = useState(false);

    const closeDialogue = () => {
        setShowDialogue(false);
        if(saveAndPaySucess) {
            navigate(`/bookings`);
        }
    }

    const calculateGst = () => {
        return (
            props.data.PerShowRate
            +
            (props.ExMiscCharges ? 0 : props.data.FoodStay)
            +
            (props.ExMiscCharges ? 0 : props.data.TravelFees)
            )
            *
            0.18;
    }

    const calculateTotal = () => {
        return (
                    (
                    props.data.PerShowRate
                    +
                    (props.ExMiscCharges ? 0 : props.data.FoodStay)
                    +
                    (props.ExMiscCharges ? 0 : props.data.TravelFees)
                    )
                    *1.18
                ).toFixed();
    }


    useEffect(() => {
        // if(saveAndPaySucess || saveAndPayError) {
        //     setShowDialogue(true);
        // }
    }, [saveAndPaySucess, saveAndPayError])

  return (
    <>
        <div className="billing-details">
            <h2>BILLING DETAILS</h2>
            <Stack direction="horizontal" gap={3}>
                <div className="bill-text l-r">Total artist rate</div>
                <div className="bill-text l-r ms-auto">Rs.{props.data.PerShowRate}</div>
            </Stack>
            <Stack direction="horizontal" gap={3}>
                <div className="bill-text l-r">Food and stay</div>
                <div className="bill-text l-r ms-auto">Rs.{props.ExMiscCharges ? 0 : props.data.FoodStay}</div>
            </Stack>
            <Stack direction="horizontal" gap={3}>
                <div className="bill-text l-r">Travel fees</div>
                <div className="bill-text l-r ms-auto">Rs.{props.ExMiscCharges ? 0 :props.data.TravelFees}</div>
            </Stack>
            <Stack direction="horizontal" gap={3}>
                <div className="bill-text l-r">Gst (18%)</div>
                <div className="bill-text l-r ms-auto">Rs.{calculateGst()}</div>
            </Stack>
            <div className="total-value">
                <Stack direction="horizontal" gap={3}>
                    <div className=""><span className="bill-text l-b red-color">Total payable</span> <span>(inclusive taxes)</span></div>
                    <div className="bill-text l-b red-color ms-auto">Rs.{calculateTotal()}</div>
                </Stack>
            </div>
            <button
                disabled={saveAndPayLoading}
                type="button"
                className="l-b btnn pay-button btn btn-primary w-100"
                onClick={() => props.payNow(selectedSlots)}
                >
                {saveAndPayLoading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )} Pay now
            </button>
        </div>

        <Modal
            show={showDialogue}
            onHide={!showDialogue}
            backdrop="static"
            keyboard={false}
            centered
            size="lg"
            className="reward-model-sec"
        >
            <div className="closeButtonr" >
                <RxCross2 onClick={() => {closeDialogue()}}/>
            </div>
            <Modal.Body>
                <div className="inner-reward-sec">
                    
                    {(saveAndPaySucess) && (
                        <>
                        <div className="lottie-gift2 mx-auto"><Lottie animationData={Gift2} loop={true} /></div>
                        <div className="reward-text-sec text-center">
                            <div className="head d-flex align-items-center justify-content-center">
                                <div className="rupee-class"><Lottie animationData={Straremoji} loop={true} /></div><h2>Congratulations!!</h2><div className="rupee-class"><Lottie animationData={Straremoji} loop={true} /></div>
                            </div>
                            <p className="l-r para">{saveAndPayMessage}</p>
                        </div>
                        </>
                    )}
                    {(saveAndPayError) && (
                        <>
                        <div className="lottie-gift2 mx-auto"><Lottie animationData={Sademoji} loop={true} /></div>
                        <div className="reward-text-sec text-center">
                            <div className="head d-flex align-items-center justify-content-center">
                                <div className="rupee-class"><Lottie animationData={Sademoji} loop={true} /></div><h2>!!Unable to BOOK!!</h2><div className="rupee-class"><Lottie animationData={Sademoji} loop={true} /></div>
                            </div>
                            <p className="l-r para">{saveAndPayMessage}</p>
                        </div>
                        </>
                    )}
                </div>
            </Modal.Body>
        </Modal>
    </>
  )
}
export default Billdetail
