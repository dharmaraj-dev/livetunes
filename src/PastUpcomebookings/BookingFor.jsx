import React from 'react';
import Stack from 'react-bootstrap/Stack';

const BookingFor = (props) => {
  return (
    <>
        <div className="cart-artist-detail">
            <p className="l-sb mb-1 head"><span>Booking for :</span> <span>{props.data.UserName}</span></p>
            <Stack direction="horizontal" gap={3}>
            {/*<div className="l-r sub-head">name@domain.com</div>*/}
            <div className="l-r sub-head">Add: <span>Mumbai, 410210</span></div>
            </Stack>
        </div>
    </>
  )
}

export default BookingFor