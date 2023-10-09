import React, { useState } from 'react';
import Stack from "react-bootstrap/Stack";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { RxCross2 } from "react-icons/rx";
import Art from "../assets/images/art.png";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { CgToday } from "react-icons/cg";
import StarRate from "../OnBoard/StarRate";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import moment from 'moment';
import {Link} from "react-router-dom";

const PastBookings = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="cart-details-box cart-move-box">
        <div className="cart-header">
          <Stack direction="horizontal" gap={5}>
            <h4 className="l-sb">Booking ID : {props.data.TransactId}</h4>
            <h4 className="l-sb ms-auto">{moment(props.data.EventDate).format("DD, MMM, YYYY")}</h4>
            <h5 className="l-b red-color text-decoration-underline">
              <Link to={`/cart/${btoa(props.data.TransactId)}`} className="text-reset cursor-pointer">Invoice</Link></h5>
          </Stack>
        </div>
        <div className="d-flex postion-r">
          <div className="img-sec">
            <img src={Art} alt="" className="w-100" />
          </div>
          <div className="inner-artist-detail">
            <h4 className="l-sb">{props.data.ArtistName}</h4>
            <div className="value-sec l-b">
              <span>Rs {props.data.PerShowRate}</span>
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
              <StarRate/> <h5 className="l-r">(overall ratings)</h5>
            </div>
            <div className="ms-auto">
                <h5 className="l-b red-color"><a className="text-reset cursor-pointer"  onClick={handleShow}>Give Feedback</a></h5>
            </div>
          </Stack>
        </div>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
            size="lg"
            className="give-feedback-sec"
        >
            
            <div className="closeButtonr" onClick={handleClose}>
                <RxCross2/>
            </div>
            <Modal.Body>
                <div className="head-sec">
                    <h4 className="l-sb">Feedback and review</h4>
                </div>

                <Stack direction="horizontal" gap={3} className="mb-1">
                <h5 className="l-r">Artist Performance</h5>
                <div className="ms-auto"><StarRate/></div>
                </Stack>
                <Stack direction="horizontal" gap={3} className="mb-1">
                <h5 className="l-r">Artist Punctuality</h5>
                <div className="ms-auto"><StarRate/></div>
                </Stack>
                <Stack direction="horizontal" gap={3} className="mb-1">
                <h5 className="l-r">Artist Politeness</h5>
                <div className="ms-auto"><StarRate/></div>
                </Stack>
                <Stack direction="horizontal" gap={3} className="mb-1">
                <h5 className="l-r">Artist Politeness</h5>
                <div className="ms-auto"><StarRate/></div>
                </Stack>
                <section>
                    <Row>
                        <Col lg="6" className="mt-3">
                            <Form.Label className="l-sb"><AiFillLike className="red-color"/> Likes</Form.Label>
                            <Form.Control placeholder="What you liked about the artists?" type="text"/>
                        </Col>
                        <Col lg="6" className="mt-3">
                            <Form.Label className="l-sb"><AiFillDislike className="red-color"/> Dislikes</Form.Label>
                            <Form.Control placeholder="What you Disliked about the artists?" type="text"/>
                        </Col>
                        <Col lg="12" className="mt-3">
                            <Form.Label className="l-sb">Tell us more</Form.Label>
                            <Form.Control as="textarea" placeholder="Type any additional feedback" style={{ height: '100px' }} />
                        </Col>
                        <p className="text-center m-0">
                            <button type="button" className="l-b btnn btn btn-primary border-radius-36">SUBMIT</button>
                        </p>
                    </Row>
                </section>
            </Modal.Body>
        </Modal>


      </div>
    </>
  );
};

export default PastBookings;
