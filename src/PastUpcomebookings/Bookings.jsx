import React, { useEffect } from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Skeleton from "react-loading-skeleton";
import { Tabs, Tab} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import PastBookings from "./PastBookings";
import BookingFor from "./BookingFor";
import UpcomeBookings from "./UpcomeBookings";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookings } from "../redux/userBookingsSlice";

const Bookings = () => {
    const dispatch = useDispatch();
    const {
      loading,
      error,
      message,
      bookings
    } = useSelector(state => state.userBookings);

    useEffect(() => {
        dispatch(fetchBookings());
    }, []);


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
                        <div className="main-favourite-sec">
                            <div className="head-sec">
                                <h1 className="l-b">Bookings <Badge className="fav-badge">04</Badge></h1>
                            </div>
                            <div className="favourite-tab-sec">
                                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-1 justify-content-end">
                                    <Tab eventKey="all" title="Past bookings"
                                    >
                                       <Row>
                                            <Col xs={12}>
                                                <BookingFor/>
                                                <PastBookings/>
                                            </Col>
                                        </Row>
                                    </Tab>
                                    <Tab eventKey="bookings" title="Upcoming bookings"
                                    >
                                        <Row>
                                            <Col xs={12}>
                                                <BookingFor/>
                                                <UpcomeBookings/>
                                            </Col>
                                        </Row>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            </div>
        </div>
    </>
  )
}

export default Bookings