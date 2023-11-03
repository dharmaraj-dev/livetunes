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
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArtistDetails } from "../redux/artistSlice";


const CheckAvailability = () => {
    const params= useParams();
    const childRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {artistDetailsLoading, artistDetails} = useSelector(state => state.artist);
    const { selectedSlots, ExMiscCharges } = useSelector(state => state.userBooking);

    const artistId = atob(params.artistId);
    const userId = atob(params.userId);

    useEffect(()=>{
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
                                    loading={artistDetailsLoading}
                                    artistDetails={artistDetails}
                                    artistId={artistId}
                                    //setSlotForAvailability={selectSlot}
                                    selectedSlots={selectedSlots}
                                    ref={childRef} />
                            </Col>
                            <Col xl={5} lg={6} md={12} className="main-checkavailability-right-sec">
                                <div className="checkavailability-right-sec">
                                    <ArtistInfo loading={artistDetailsLoading} artistId={artistId} artistDetails={artistDetails}/>
                                    {selectedSlots === null ? (
                                        <div className="main-value-card-sec align-center">
                                            <ValueCard loading={artistDetailsLoading} artistDetails={artistDetails}/>
                                        </div>
                                    ):(
                                        <div className="main-billing-details">
                                            <Billdetail data={selectedSlots} payNow={() => {childRef.current.payNowTrigger(selectedSlots)}} ExMiscCharges={ExMiscCharges}/>
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