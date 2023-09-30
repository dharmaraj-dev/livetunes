import React, {useEffect, useState} from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EventDetailVenue from "./EventDetailVenue";
import ArtistInfo from "../OnBoard/ArtistInfo";
import ValueCard from "./ValueCard";
import Billdetail from "./Billdetail";
import { InlineWidget } from "react-calendly";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {fetchAvailSlots} from "../redux/userBookingSlice";
import { useParams } from "react-router-dom";


const CheckAvailability = () => {
    const params= useParams();
    const dispatch = useDispatch();
    const {details} = useSelector(state => state.artistDetails);
    const [selectedSlot, setSelectedSlot] = useState("");
    const artistId = atob(params.artistId);
    const selectSlot = (data) => {

        setSelectedSlot(data);
    }
  return (
    <>
        <div className="wrapper">
            <div className="sidebar">
            <SideNavBar />
            </div>
            <div className="main">
            <div className="header">
                <NavBar />
            </div>
            <div className="main-content">
                <Container fluid>
                    <div className="main-artists-list">
                        <Row>
                            <Col className="booking-venue-form-section" xl={7} lg={6} md={12}>
                                <EventDetailVenue artistId={artistId} setSlotForAvailability={selectSlot} props/>
                            </Col>
                            <Col xl={5} lg={6} md={12} className="main-checkavailability-right-sec">
                                <div className="checkavailability-right-sec">
                                    <ArtistInfo artistId={details.selAProof.ArtRegId}/>
                                    {/* {selectedSlot === "" ? (
                                        <div className="main-value-card-sec align-center">
                                            <ValueCard/>
                                        </div>
                                    ):(
                                        <div className="main-billing-details">
                                            <Billdetail/>
                                        </div>
                                    )} */}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            </div>
        </div>
    </>
  )
}

export default CheckAvailability