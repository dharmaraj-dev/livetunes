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
import {payForBookingFromCart, resetToInitialState} from "../redux/userBookingSlice";
import Sademoji from "../components/sademoji.json";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const BilldetailSlots = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            "RewardTransactId" : "",
            "selBookBill":
            [
                {
                    "BillSec":"Total artist rate",
                    "BillSecAmt": props.data.selBook.PerShowRate,
                    "BillSecType":"DR"
                },
                {
                    "BillSec":"Food and stay",
                    "BillSecAmt": props.data.selBook.ExMiscCharges ? 0 : props.data.selBook.FoodStay,
                    "BillSecType":"DR"
                },
                {
                    "BillSec":"Travel fees",
                    "BillSecAmt":  props.data.selBook.ExMiscCharges ? 0 : props.data.selBook.TravelFees,
                    "BillSecType":"DR"
                },
                {
                    "BillSec":"Gst(18%)",
                    "BillSecAmt": ((props.data.selBook.PerShowRate +  (props.data.selBook.ExMiscCharges ? 0 : props.data.selBook.FoodStay) +  (props.data.selBook.ExMiscCharges ? 0 : props.data.selBook.TravelFees))*0.18).toFixed(),
                    "BillSecType":"DR"
                }
            ],
            "selBookCoupon": []
            }

            let totalCoupRewardAmout = 0;
           
            if(props.coupon != "") {
                paymentData.selBookCoupon.push({
                        "TransactId" : transId,
                        "CouponId": props.coupon.VoucherStackId,
                        "CouponName": props.coupon.VoucherStackCode,
                        "CouponAmt": props.coupon.VoucherStackAmt
                    });
                totalCoupRewardAmout = totalCoupRewardAmout + props.coupon.VoucherStackAmt;
            }
            if(props.reward != "") {
                paymentData.RewardTransactId = props.reward.RewardTransactId;
                paymentData.selBookCoupon.push({
                        "TransactId" : transId,
                        "CouponId": props.reward.VoucherStackId,
                        "CouponName": props.reward.VoucherStackCode,
                        "CouponAmt": props.coupon.VoucherStackAmt
                    });
                totalCoupRewardAmout = totalCoupRewardAmout + props.reward.VoucherStackAmt;
            }

            if(totalCoupRewardAmout != 0) {
                paymentData.selBookBill.push({"BillSec":"Coupon&Rewards","BillSecAmt": totalCoupRewardAmout ,"BillSecType":"CR"})
            }
        dispatch(payForBookingFromCart(paymentData));
    }

    const closeDialogue = () => {
        setShowDialogue(false);
        if(payFromCartSuccess) {
            dispatch(resetToInitialState());
            navigate(`/bookings`);
        }
    }

    const calculateTotalAmount = () => {
        let amt = props.data.selBook.PerShowRate +  (props.data.selBook.ExMiscCharges ? 0 : props.data.selBook.FoodStay) +  (props.data.selBook.ExMiscCharges ? 0 : props.data.selBook.TravelFees);
        amt = amt * 1.18;
        if(props.coupon) {
            console.log(amt, props.coupon);
            amt = amt - props.coupon.VoucherStackAmt;
        }
        if(props.reward) {
            amt = amt - props.reward.VoucherStackAmt;
        }
        return amt.toFixed();
    }

    const generateBillAmount = (bl) => {
        let amt = 0;
        for(let i in bl) {
            if(bl[i].BillSecType === "CR") {
                amt = amt - bl[i].BillSecAmt
            } else {
                amt = amt + bl[i].BillSecAmt
            }
        }

        return amt.toFixed();
    }

    useEffect(() => {
        // if(payFromCartSuccess || payFromCartError) {
        //     setShowDialogue(true);
        // }
    }, [payFromCartSuccess, payFromCartError])

  return (
    <>
        <div className="billing-details">
            {props.data.PayStatus === "Success" ? (
                <>
                    <h2>BILLING DETAILS</h2>
                    {props.data.selBookBill.map((bil,index) => {
                        return (
                        <Stack key={`bill_${index}`} direction="horizontal" gap={3}>
                            <div className="bill-text l-r">{bil.BillSec}</div>
                            {bil.BillSecType === "CR" ? (
                                <div className="bill-text l-r ms-auto">
                                    <span className="red-color">- Rs.{bil.BillSecAmt} </span>
                                </div>
                                
                            ):(
                                <div className="bill-text l-r ms-auto">Rs.{bil.BillSecAmt}</div>
                            )}
                            
                        </Stack>
                        )
                    })}
                    <div className="total-value">
                        <Stack direction="horizontal" gap={3}>
                            <div className=""><span className="bill-text l-b red-color">Total paid</span> <span>(inclusive taxes)</span></div>
                            <div className="bill-text l-b red-color ms-auto">Rs. {generateBillAmount(props.data.selBookBill)
                            }
                            </div>
                        </Stack>
                    </div>
                </>
            ):(
                <>
                    <h2>BILLING DETAILS</h2>
                    <Stack direction="horizontal" gap={3}>
                        <div className="bill-text l-r">Total artist rate</div>
                        <div className="bill-text l-r ms-auto">Rs.{props.data.selBook.PerShowRate}</div>
                    </Stack>
                    <Stack direction="horizontal" gap={3}>
                        <div className="bill-text l-r">Food and stay</div>
                        <div className="bill-text l-r ms-auto">Rs.{ props.data.selBook.ExMiscCharges ? 0 : props.data.selBook.FoodStay}</div>
                    </Stack>
                    <Stack direction="horizontal" gap={3}>
                        <div className="bill-text l-r">Travel fees</div>
                        <div className="bill-text l-r ms-auto">Rs.{ props.data.selBook.ExMiscCharges ? 0 : props.data.selBook.TravelFees}</div>
                    </Stack>
                    <Stack direction="horizontal" gap={3}>
                        <div className="bill-text l-r">Gst (18%)</div>
                        <div className="bill-text l-r ms-auto">Rs.{((props.data.selBook.PerShowRate+ (props.data.selBook.ExMiscCharges ? 0 : props.data.selBook.FoodStay)+  (props.data.selBook.ExMiscCharges ? 0 : props.data.selBook.TravelFees) )*0.18).toFixed()}</div>
                    </Stack>
                    {props.coupon != "" && (
                        <Stack direction="horizontal" gap={3}>
                            <div className="bill-text l-r">Coupon Discount</div>
                            <div className="bill-text l-r ms-auto"> <span className="red-color">- Rs.{props.coupon.VoucherStackAmt}</span></div>
                        </Stack>
                    )}
                    {props.reward != "" && (
                        <Stack direction="horizontal" gap={3}>
                            <div className="bill-text l-r">Reward Discount</div>
                            <div className="bill-text l-r ms-auto"> <span className="red-color">- Rs.{props.reward.VoucherStackAmt}</span></div>
                        </Stack>
                    )}
                    <div className="total-value">
                        <Stack direction="horizontal" gap={3}>
                            <div className=""><span className="bill-text l-b red-color">Total payable</span> <span>(inclusive taxes)</span></div>
                            <div className="bill-text l-b red-color ms-auto">Rs. {calculateTotalAmount()}
                            </div>
                        </Stack>
                        <span className="red-color info-text">Note: You have opted to avail food, stay and travel for the artist.</span>
                    </div>
                    <button disabled={payFromCartLoading} type="button" className="l-b btnn pay-button btn btn-primary w-100"
                            onClick={() => makePayment(props.data?.selBook.TransactId)}
                        >
                        {payFromCartLoading && (
                          <span className="spinner-border spinner-border-sm"></span>
                        )} 
                         Pay now
                    </button>
                </>
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
                <RxCross2 onClick={() => {closeDialogue()}} />
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
