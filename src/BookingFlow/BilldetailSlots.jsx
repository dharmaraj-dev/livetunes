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
import { Link } from "react-router-dom";


const BilldetailSlots = (props) => {
    console.log('props.coupon', props.coupon)
    const dispatch = useDispatch();
    const { 
            payFromCartLoading,
            payFromCartError,
            payFromCartSuccess,
            payFromCartMessage
    } = useSelector(state => state.userBooking);

    const [showDialogue, setShowDialogue] = useState(false);


    const makePayment = (transId) => {
        let paymentData = {
            "TransactId": transId,
            "selBookBill":
            [
                {
                    "BillSec":"Total artist rate",
                    "BillSecAmt": props.data.selBook.PerShowRate
                },
                {
                    "BillSec":"Food and stay",
                    "BillSecAmt": props.data.selBook.FoodStay
                },
                {
                    "BillSec":"Travel fees",
                    "BillSecAmt": props.data.selBook.TravelFees
                },
                {
                    "BillSec":"Gst(18%)",
                    "BillSecAmt": (props.data.selBook.PerShowRate + props.data.selBook.FoodStay + props.data.selBook.TravelFees)*0.18
                }
            ]
                // "selBookCoupon":
                // [
                //     {
                //         "TransactId" :"B2023925962",
                //         "CouponId":1,
                //         "CouponName":"LIVETUNENEW"
                //     },
                //     {
                //         "TransactId" :"B2023925962",
                //         "CouponId":2,
                //         "CouponName":"EXCELLENT"
                //     }
                // ]
            }
            if(props.coupon != "") {
                paymentData.selBookCoupon = [
                    {
                        "TransactId" : transId,
                        "CouponId": props.coupon.VoucherStackId,
                        "CouponName": props.coupon.VoucherStackCode
                    }
                ]
            }
        dispatch(payForBookingFromCart(paymentData));
    }

    useEffect(() => {
        console.log(payFromCartSuccess, payFromCartError)
        if(payFromCartSuccess || payFromCartError) {
            setShowDialogue(true);
        }
    }, [payFromCartSuccess, payFromCartError])

  return (
    <>
        <div className="billing-details">
            <h2>BILLING DETAILS</h2>
            <Stack direction="horizontal" gap={3}>
                <div className="bill-text l-r">Total artist rate</div>
                <div className="bill-text l-r ms-auto">Rs.{props.data.selBook.PerShowRate}</div>
            </Stack>
            <Stack direction="horizontal" gap={3}>
                <div className="bill-text l-r">Food and stay</div>
                <div className="bill-text l-r ms-auto">Rs.{props.data.selBook.FoodStay}</div>
            </Stack>
            <Stack direction="horizontal" gap={3}>
                <div className="bill-text l-r">Travel fees</div>
                <div className="bill-text l-r ms-auto">Rs.{props.data.selBook.TravelFees}</div>
            </Stack>
            <Stack direction="horizontal" gap={3}>
                <div className="bill-text l-r">Gst (18%)</div>
                <div className="bill-text l-r ms-auto">Rs.{(props.data.selBook.PerShowRate+props.data.selBook.FoodStay+props.data.selBook.TravelFees)*0.18}</div>
            </Stack>
            {props.coupon != "" && (
                <Stack direction="horizontal" gap={3}>
                    <div className="bill-text l-r">Coupon Discount</div>
                    <div className="bill-text l-r ms-auto"> <span className="red-color">- Rs.{props.coupon.VoucherStackAmt}</span></div>
                </Stack>
            )}
            <div className="total-value">
                <Stack direction="horizontal" gap={3}>
                    <div className=""><span className="bill-text l-b red-color">{props.data.PayStatus === "Success" ? 'Total paid' : 'Total payable'}</span> <span>(inclusive taxes)</span></div>
                    <div className="bill-text l-b red-color ms-auto">Rs.
                        {props.coupon != "" ? (
                           ((props.data.selBook.PerShowRate+props.data.selBook.FoodStay+props.data.selBook.TravelFees)*1.18 - props.coupon.VoucherStackAmt).toFixed()
                        ):(
                             ((props.data.selBook.PerShowRate+props.data.selBook.FoodStay+props.data.selBook.TravelFees)*1.18).toFixed()
                        )}
                    </div>
                </Stack>
            </div>

            {props.data.PayStatus !== "Success" && (
                <button disabled={payFromCartLoading} type="button" className="l-b btnn pay-button btn btn-primary w-100"
                    onClick={() => makePayment(props.data?.selBook.TransactId)}
                >
                {payFromCartLoading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )} 
                 Pay now
                </button>
            )}
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
                <RxCross2 onClick={() => {setShowDialogue(false)}}/>
            </div>
            <Modal.Body>
                <div className="inner-reward-sec">
                    {(payFromCartSuccess) && (
                        <>
                        <div className="lottie-gift2 mx-auto"><Lottie animationData={Gift2} loop={true} /></div>
                        <div className="reward-text-sec text-center">
                            <div className="head d-flex align-items-center justify-content-center">
                                <div className="rupee-class"><Lottie animationData={Straremoji} loop={true} /></div><h2>Congratulations!!</h2><div className="rupee-class"><Lottie animationData={Straremoji} loop={true} /></div>
                            </div>
                            <p className="l-r para">{payFromCartMessage}</p>
                        </div>
                        </>
                    )}
                    {(payFromCartError) && (
                        <>
                        <div className="lottie-gift2 mx-auto"><Lottie animationData={Sademoji} loop={true} /></div>
                        <div className="reward-text-sec text-center">
                            <div className="head d-flex align-items-center justify-content-center">
                                <div className="rupee-class"><Lottie animationData={Sademoji} loop={true} /></div><h2>!!Unable to BOOK!!</h2><div className="rupee-class"><Lottie animationData={Sademoji} loop={true} /></div>
                            </div>
                            <p className="l-r para">{payFromCartMessage}</p>
                            {payFromCartMessage == "This Slot Is Not Available!" && (
                               <Link to={`/check-availability/${btoa(props.data.selBook.ArtistId)}/${btoa(props.data.selBook.UserId)}`}>
                                    <button type="button" className="l-b btnn check-btn btn btn-primary">Check Available Slots</button>
                               </Link>
                            )}
                        </div>
                        </>
                    )}
                </div>
            </Modal.Body>
        </Modal>
    </>
  )
}
export default BilldetailSlots
