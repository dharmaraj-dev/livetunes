import React from 'react';
import Stack from "react-bootstrap/Stack";
import Art from "../assets/images/art.png";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { CgToday } from "react-icons/cg";
import moment from 'moment';
import {Link} from "react-router-dom";
import { Rating } from 'react-simple-star-rating'


const UpcomeBookings = (props) => {
  return (
    <>
        <div className="cart-details-box cart-move-box">
          <div className="cart-header">
            <Stack direction="horizontal" gap={5}>
              <h4 className="l-sb">Booking ID : {props.data.TransactId}</h4>
              <h4 className="l-sb ms-auto">{moment(props.data.EventDate).format("DD, MMM, YYYY")}}</h4>
              <h5 className="l-b red-color text-decoration-underline">
              <Link to={`/cart/${btoa(props.data.TransactId)}`} className="text-reset cursor-pointer">Invoice</Link></h5>
            </Stack>
          </div>
          <div className="d-flex postion-r">
            <div className="img-sec">
              <img src={props.data.ProfileURL != null ? props.data.ProfileURL : Art} alt="" className="w-100" />
            </div>
            <div className="inner-artist-detail">
              <h4 className="l-sb">{props.data.ArtistName}</h4>
              <div className="value-sec l-b">
                <span>{props.data.BillAmt}</span>
              </div>
              <Stack direction="horizontal" gap={2}>
                <div className="red-color"><IoLocationSharp/></div>
                <div className="l-r sub-head">Location :</div>
                <div className="l-r sub-head">{props.data.CityName} , {props.data.StateName}</div>
              </Stack>
              <Stack direction="horizontal" gap={2}>
                <div className="red-color"><IoIosMusicalNotes/></div>
                <div className="l-r sub-head">Event type :</div>
                <div className="l-sb sub-head">{props.data.EventType}</div>
              </Stack>

              <Stack direction="horizontal" gap={2}>
                <div className="red-color"><MdOutlineDateRange/></div>
                <div className="l-r sub-head">Event date :</div>
                <div className="l-sb sub-head">{moment(props.data.EventDate).format("DD, MMM, YYYY")}</div>
              </Stack>

              <Stack direction="horizontal" gap={2}>
                <div className="red-color"><CgToday/></div>
                <div className="l-r sub-head">Event days :</div>
                <div className="l-sb sub-head">{props.data.EventDays} day</div>
              </Stack>
            </div>
          </div>
          <div className="cart-footer">
          <Stack direction="horizontal" gap={3}>
            <div className="d-flex gap-2">
               <Rating 
                  size={27}
                  initialValue={4}
                  fillColor="#fd3743"
                  readonly={true}
                />
               <h5 className="l-r">(overall ratings)</h5>
            </div>
          </Stack>
        </div>
        </div>
    </>
  )
}

export default UpcomeBookings