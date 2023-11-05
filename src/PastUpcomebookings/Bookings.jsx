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
import MoveCart from "../Favourites/MoveCart";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookings } from "../redux/userBookingsSlice";
import Stack from "react-bootstrap/Stack";
import {resetToInitialState} from "../redux/userBookingSlice";

const Bookings = () => {
    const dispatch = useDispatch();
    const { loading, error, message, movedToCart, pastBookings, postBookings } = useSelector(state => state.userBookings);
    const { feedLogs } = useSelector(state => state.user);


    const renderTitle = (txt,ct) => {
        return (
            <span>
                {txt} <Badge className="fav-badge">{ct}</Badge>
            </span>
            )
    }

    useEffect(() => {
        dispatch(resetToInitialState());
        window.scrollTo(0, 0);
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
                        {loading ?(
                            <>
                                <Skeleton className="mb-4" height="100px" />
                                <Skeleton className="mb-3" height="140px" />
                                <Skeleton className="mb-3" height="200px" />
                                <Skeleton className="mb-3" height="200px" />
                            </>
                        ):(
                        <div className="main-favourite-sec">
                            <div className="head-sec">
                                <h1 className="l-b">Bookings <Badge className="fav-badge">{pastBookings.length + postBookings.length}</Badge></h1>
                            </div>
                            <div className="favourite-tab-sec">
                                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-1 justify-content-end">
                                    <Tab eventKey="all" title={renderTitle("Past bookings", pastBookings.length)}
                                    >
                                       <Row>
                                            {pastBookings.map((book,index) => {
                                                return (
                                                    <Col xs={12} key={`past_${index}`} className="mb-4">
                                                        <BookingFor data={book.selBook} />
                                                        <PastBookings data={book.selBook} feedLogs={feedLogs} selBookFeedback={book?.selBookFeedback}/>
                                                    </Col>
                                                )
                                            })}
                                            {pastBookings.length === 0 && (
                                                <Col xs={12}>
                                                    <div>
                                                        <h3 className="no_bookings">No past bookings available</h3>
                                                    </div>
                                                </Col>
                                            )}
                                        </Row>
                                    </Tab>
                                    <Tab eventKey="bookings" title={renderTitle("Upcoming bookings", postBookings.length)}
                                    >
                                        <Row>
                                            {postBookings.map((book,index) => {
                                                return (
                                                    <Col xs={12} key={`post_${index}`} className="mb-4">
                                                        <BookingFor data={book.selBook}/>
                                                        <UpcomeBookings data={book.selBook}/>
                                                    </Col>
                                                )
                                            })}
                                            {postBookings.length === 0 && (
                                                <Col xs={12}>
                                                    <div>
                                                        <h3 className="no_bookings">No post bookings available</h3>
                                                    </div>
                                                </Col>
                                            )}
                                        </Row>
                                    </Tab>
                                    <Tab eventKey="moved_card" title={renderTitle("Whishlisted", movedToCart.length)}
                                    >
                                        <Row>
                                            {movedToCart.map((book,index) => {
                                                return (
                                                    <Col xs={12} key={`cart_${index}`}>
                                                        <MoveCart loading={loading} data={book.selBook} className="mb-4"/>
                                                    </Col>
                                                )
                                            })}
                                            {movedToCart.length === 0 && (
                                                <Col xs={12}>
                                                    <div>
                                                        <h3 className="no_bookings">No cart bookings available</h3>
                                                    </div>
                                                </Col>
                                            )}
                                        </Row>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                        )}
                    </div>
                </Container>
            </div>
            </div>
        </div>
    </>
  )
}

export default Bookings