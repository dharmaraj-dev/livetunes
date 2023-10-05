import React from 'react';
import Stack from 'react-bootstrap/Stack';
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Lottie from "lottie-react";
import { RxCross2 } from "react-icons/rx";
import Gift2 from "../components/gift2.json";
import Rupee from "../components/rupee.json";
import Thumb from "../components/thumb.json";
import Straremoji from "../components/straremoji.json";


const Billdetail = (props) => {
    const { saveAndPayLoading, saveAndPayMessage, saveAndPaySucess, saveAndPayError } = useSelector(state => state.userBooking);

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
                <div className="bill-text l-r ms-auto">Rs.{props.data.FoodStay}</div>
            </Stack>
            <Stack direction="horizontal" gap={3}>
                <div className="bill-text l-r">Travel fees</div>
                <div className="bill-text l-r ms-auto">Rs.{props.data.TravelFees}</div>
            </Stack>
            <Stack direction="horizontal" gap={3}>
                <div className="bill-text l-r">Gst (18%)</div>
                <div className="bill-text l-r ms-auto">Rs.{(props.data.PerShowRate+props.data.FoodStay+props.data.TravelFees)*0.18}</div>
            </Stack>
            <div className="total-value">
                <Stack direction="horizontal" gap={3}>
                    <div className=""><span className="bill-text l-b red-color">Total payable</span> <span>(inclusive taxes)</span></div>
                    <div className="bill-text l-b red-color ms-auto">Rs.{((props.data.PerShowRate+props.data.FoodStay+props.data.TravelFees)*1.18).toFixed()}</div>
                </Stack>
            </div>
            {props.data?.TransactId ? (
                <button disabled={saveAndPayLoading} type="button" className="l-b btnn pay-button btn btn-primary w-100"
                >
                Pay now</button>
            ):(
                <button disabled={saveAndPayLoading} type="button" className="l-b btnn pay-button btn btn-primary w-100"
                    onClick={() => props.payNow}
                >
                {saveAndPayLoading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )} Pay now</button>
            )}
            
            {saveAndPaySucess != null && (
              <p className="value-text mb-0 mt-2"> {saveAndPayMessage}</p>
            )}
        </div>

        <Modal
            show={saveAndPaySucess}
            //onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
            size="lg"
            className="reward-model-sec"
        >
            
        <div className="closeButtonr" >
            <RxCross2/>
        </div>
        <Modal.Body>
            <div className="inner-reward-sec">
                <div className="lottie-gift2 mx-auto"><Lottie animationData={Gift2} loop={true} /></div>
                <div className="reward-text-sec text-center">
                    <div className="head d-flex align-items-center justify-content-center">
                        <div className="rupee-class"><Lottie animationData={Straremoji} loop={true} /></div><h2>Congratulations!!</h2><div className="rupee-class"><Lottie animationData={Straremoji} loop={true} /></div>
                    </div>
                    <p className="l-r para">Booking Success</p>
                </div>
            </div>
        </Modal.Body>
    </Modal>
    </>
  )
}
export default Billdetail
