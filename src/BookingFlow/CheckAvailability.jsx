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
import {fetchAvailSlots} from "../redux/userBookingSlice";
import { useParams } from "react-router-dom";
import { fetchArtistDetails } from "../redux/artistDetailsSlice";


const CheckAvailability = () => {
    const params= useParams();
    const childRef = useRef();
    console.log(params);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {loading, details} = useSelector(state => state.artistDetails);
    const [selectedSlot, setSelectedSlot] = useState("");
    const artistId = atob(params.artistId);
    const userId = atob(params.userId);
    const selectSlot = (data) => {
        console.log("data", data);
        setSelectedSlot(data);
    }


    useEffect(()=>{
        if(artistId === undefined){
            navigate("/dashboard");
        }
        window.scrollTo(0, 0);
        dispatch(fetchArtistDetails(artistId,userId));
      },[artistId]);  

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
                                    setSlotForAvailability={selectSlot}
                                    ref={childRef}/>
                                />
                            </Col>
                            <Col xl={5} lg={6} md={12} className="main-checkavailability-right-sec">
                                <div className="checkavailability-right-sec">
                                    <ArtistInfo loading={loading} artistId={artistId} artistDetails={details}/>
                                    {selectedSlot === "" ? (
                                        <div className="main-value-card-sec align-center">
                                            <ValueCard loading={loading} artistDetails={details}/>
                                        </div>
                                    ):(
                                        <div className="main-billing-details">
                                            <Billdetail data={selectedSlot} payNow={childRef.current.payNowTrigger}/>
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