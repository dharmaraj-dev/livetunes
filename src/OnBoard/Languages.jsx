import React from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Lang from '../assets/images/lang.png';
import SelectLanguages from "./SelectLanguages";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const Languages = () => {
    const {userSelectedLanguages} = useSelector(state => state.user);
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
                    <section className="main-language-sec">
                        <div className="heading-sec">
                            <p className="l-bl head">Music has vivid languages</p>
                            <p className="l-l sub-head">What’s Your Choice Of Language?</p>
                        </div>
                        <div className="chosen-sec clearfix">
                            <Row>
                                <Col md={6} lg={5}>
                                    <div className="chosen-left-sec">
                                        <img src={Lang} alt="" className="w-100" />
                                    <p className="l-bl inner-head">Most Chosen <br/> Language</p>
                                    </div>
                                </Col>
                                <Col md={6} lg={5} className="postion-r">
                                    <div className="chosen-right-sec select-multi">
                                        <div className="inner-heading-sec">
                                            <p className="l-bl head">Don’t see your language? No worries!</p>
                                            <p className="l-l sub-head">Choose From Below Drop Down</p>
                                        </div>    
                                        <SelectLanguages/>
                                    </div>
                                </Col>
                            </Row>
                            <Link to="/locationcheck">
                                <Button variant="primary" disabled={userSelectedLanguages.length === 0} className="l-sb btnn next-btn">Next</Button>
                            </Link>
                        </div>
                    </section>
                </Container>
            </div>
            </div>
        </div>

        
    </>
  )
}

export default Languages