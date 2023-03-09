import React from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Upload from "./Upload";

const ArtistProfile = (props) => {
    const { children } = props;
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
                    <section className="steps-progressbar">
                        <ol className="steps l-b">
                            <li className="step is-active" data-step="1">
                             Personal Info
                            </li>
                            <li className="step" data-step="2">
                              Performance details
                            </li>
                            <li className="step" data-step="3">
                              Social media details
                            </li>
                        </ol>
                    </section>
                        <Row>
                            <Col lg={4}>
                                <Upload/>
                            </Col>
                            <Col lg={8}>
                                { children }
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

export default ArtistProfile