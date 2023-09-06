import React from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import HelloBanner from '../assets/images/hello-banner.png';
import SlideCard from "./SlideCard";
import { Link } from "react-router-dom";


const HelloScreen = () => {
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
                    <section className="hello-header" style={{backgroundImage: "url(" + HelloBanner + ")"}}>
                        <Row>
                            <Col md={8} lg={8}>
                                <div className="hello-right-text-sec">
                                    <h1 className="head">Hello!</h1>
                                    <h2 className="sub-head">Mother’s Day Is Approaching</h2>
                                    <p className="l-l para-text">Plan Something For Your Life Maker</p>
                                </div>
                            </Col>
                            <Col md={4} lg={4} className="postion-r">
                                <div className="hello-left-btn-sec">
                                    <Link to="/artistList">
                                        <Button variant="primary" className="l-b wbtnn">Let’s Go!</Button>
                                    </Link>    
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <section className="look-something-sec">
                        <div className="heading-sec">
                            <p className="l-r head">Looking For Something Else?</p>
                            <p className="l-l sub-head">We Have A Variety Bro!</p>
                        </div>
                        <div>
                            <SlideCard/>
                        </div>
                    </section>
                </Container>
            </div>
            </div>
        </div>
 
        
    </>
  );
};

export default HelloScreen;
