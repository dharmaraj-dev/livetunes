import React, {useEffect, useState, useRef} from "react";
import NavBar from "../Layout/NavBar";
import Skeleton from 'react-loading-skeleton'
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EventDetailVenue from "./EventDetailVenue";
import ArtistInfo from "../OnBoard/ArtistInfo";
import ValueCard from "./ValueCard";
import Billdetail from "./Billdetail";
import { Navigate, useNavigate  } from 'react-router-dom';
import { InlineWidget } from "react-calendly";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {resetToInitialState} from "../redux/userBookingSlice";
import { useParams } from "react-router-dom";
import { fetchArtistDetails } from "../redux/artistDetailsSlice";


const CheckAvailability = () => {
    const params= useParams();
    const childRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {loading, details} = useSelector(state => state.artistDetails);
    const { selectedSlots } = useSelector(state => state.userBooking);

    const artistId = atob(params.artistId);
    const userId = atob(params.userId);

    useEffect(()=>{
        dispatch(resetToInitialState());
        if(artistId === undefined){
            navigate("/dashboard");
        }
        window.scrollTo(0, 0);
        dispatch(fetchArtistDetails(artistId,userId));
      },[artistId]);  
    useEffect(()=>{
        
      },[selectedSlots]);

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
                                <EventDetailVenue 
                                    loading={loading}
                                    artistDetails={details}
                                    artistId={artistId}
                                    //setSlotForAvailability={selectSlot}
                                    selectedSlots={selectedSlots}
                                    ref={childRef} />
                            </Col>
                            <Col xl={5} lg={6} md={12} className="main-checkavailability-right-sec">
                                <div className="checkavailability-right-sec">
                                    <ArtistInfo loading={loading} artistId={artistId} artistDetails={details}/>
                                    {selectedSlots === null ? (
                                        <div className="main-value-card-sec align-center">
                                            <ValueCard loading={loading} artistDetails={details}/>
                                        </div>
                                    ):(
                                        <div className="main-billing-details">
                                            <Billdetail data={selectedSlots} payNow={() => {childRef.current.payNowTrigger(selectedSlots)}}/>
                                        </div>
                                    )}
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