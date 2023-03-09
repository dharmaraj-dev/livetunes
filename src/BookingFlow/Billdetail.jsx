import React from 'react';
import Stack from 'react-bootstrap/Stack';

const Billdetail = () => {
  return (
    <>
        <div className="billing-details">
            <h2>BILLING DETAILS</h2>
            <Stack direction="horizontal" gap={3}>
                <div className="bill-text l-r">Total artist rate</div>
                <div className="bill-text l-r ms-auto">Rs.40,000</div>
            </Stack>
            <Stack direction="horizontal" gap={3}>
                <div className="bill-text l-r">Food and stay</div>
                <div className="bill-text l-r ms-auto">Rs.4000</div>
            </Stack>
            <Stack direction="horizontal" gap={3}>
                <div className="bill-text l-r">Travel fees</div>
                <div className="bill-text l-r ms-auto">Rs.1000</div>
            </Stack>
            <Stack direction="horizontal" gap={3}>
                <div className="bill-text l-r">Gst (18%)</div>
                <div className="bill-text l-r ms-auto">Rs.7200</div>
            </Stack>
            <div className="total-value">
                <Stack direction="horizontal" gap={3}>
                    <div className=""><span className="bill-text l-b red-color">Total payable</span> <span>(inclusive taxes)</span></div>
                    <div className="bill-text l-b red-color ms-auto">Rs.47,200</div>
                </Stack>
            </div>
            <button type="button" className="l-b btnn pay-button btn btn-primary w-100">Pay now</button>
        </div>
    </>
  )
}
export default Billdetail
