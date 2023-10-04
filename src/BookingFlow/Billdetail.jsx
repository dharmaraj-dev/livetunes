import React from 'react';
import Stack from 'react-bootstrap/Stack';
import { useSelector } from 'react-redux';

const Billdetail = (props) => {
    const {selectedSlots} = useSelector(state => state.userBooking);
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
            <button type="button" className="l-b btnn pay-button btn btn-primary w-100">Pay now</button>
        </div>
    </>
  )
}
export default Billdetail
