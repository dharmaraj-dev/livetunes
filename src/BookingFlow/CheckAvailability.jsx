import React from "react";
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


const CheckAvailability = () => {
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
            {/* calendly */}
            {/* <div
                style={{
                    width:"490px",
                    marginLeft:"auto",
                    marginRight:"auto",
                    marginTop:"100px"
                }}
            >
                <InlineWidget url="https://calendly.com/sujalagrawalgondia/gazal"
                    style={{
                        border:"3px solid black",
                        minWidth:"413px",
                        height:"831px"
                    }}
                />
            </div> */}
            <div className="main-content">
                <Container fluid>
                    <div className="main-artists-list">
                        <Row>
                            <Col xl={7} lg={6} md={12}>
                                <EventDetailVenue/>
                            </Col>
                            <Col xl={5} lg={6} md={12} className="main-checkavailability-right-sec">
                                <div className="checkavailability-right-sec">
                                    <ArtistInfo/>
                                    <div className="main-value-card-sec align-center">
                                        <ValueCard/>
                                    </div>
                                    <div className="main-billing-details">
                                        <Billdetail/>
                                    </div>
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