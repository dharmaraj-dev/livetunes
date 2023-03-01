import React from 'react';
import Stack from "react-bootstrap/Stack";
import Art from "../assets/images/art.png";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { CgToday } from "react-icons/cg";

const UpcomeBookings = () => {
  return (
    <>
        <div className="cart-details-box cart-move-box">
          <div className="cart-header">
            <Stack direction="horizontal" gap={5}>
              <h4 className="l-sb">Booking ID : 2122212</h4>
              <h4 className="l-sb ms-auto">22, Jun, 2022</h4>
            </Stack>
          </div>
          <div className="d-flex postion-r">
            <div className="img-sec">
              <img src={Art} alt="" className="w-100" />
            </div>
            <div className="inner-artist-detail">
              <h4 className="l-sb">Artist Name, Solo Singer</h4>
              <div className="value-sec l-b">
                <span>Rs 40,000</span>
              </div>
              <Stack direction="horizontal" gap={2}>
                <div className="red-color"><IoLocationSharp/></div>
                <div className="l-r sub-head">Location :</div>
                <div className="l-r sub-head">Mumbai , Maharashtra</div>
              </Stack>
              <Stack direction="horizontal" gap={2}>
                <div className="red-color"><IoIosMusicalNotes/></div>
                <div className="l-r sub-head">Event type :</div>
                <div className="l-sb sub-head">House Party</div>
              </Stack>

              <Stack direction="horizontal" gap={2}>
                <div className="red-color"><MdOutlineDateRange/></div>
                <div className="l-r sub-head">Event date :</div>
                <div className="l-sb sub-head">22, Jul, 2022</div>
              </Stack>

              <Stack direction="horizontal" gap={2}>
                <div className="red-color"><CgToday/></div>
                <div className="l-r sub-head">Event days :</div>
                <div className="l-sb sub-head">1 day</div>
              </Stack>
            </div>
          </div>
          <div className="cart-footer">
            
          </div>
        </div>
    </>
  )
}

export default UpcomeBookings