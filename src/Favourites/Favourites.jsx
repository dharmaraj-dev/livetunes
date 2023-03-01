import React from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import { Tabs, Tab} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FavouriteCard from "./FavouriteCard";
import Badge from 'react-bootstrap/Badge';
import MoveCart from "./MoveCart";


const Favourites = () => {
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
                                <h1 className="l-b">Favourites <Badge className="fav-badge">04</Badge></h1>
                            </div>
                            <div className="favourite-tab-sec">
                                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-1 justify-content-end">
                                    <Tab eventKey="all" title="Liked artists"
                                    >
                                       <Row>
                                            <Col xl={3} md={6}>
                                                <FavouriteCard/>
                                            </Col>
                                            <Col xl={3} md={6}>
                                                <FavouriteCard/>
                                            </Col>
                                            <Col xl={3} md={6}>
                                                <FavouriteCard/>
                                            </Col>
                                            <Col xl={3} md={6}>
                                                <FavouriteCard/>
                                            </Col>
                                        </Row>
                                    </Tab>
                                    <Tab eventKey="bookings" title="Moved form cart"
                                    >
                                        <Row>
                                            <Col xs={12}>
                                                <MoveCart/>
                                            </Col>
                                            <Col xs={12}>
                                                <MoveCart/>
                                            </Col>
                                            <Col xs={12}>
                                                <MoveCart/>
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

export default Favourites