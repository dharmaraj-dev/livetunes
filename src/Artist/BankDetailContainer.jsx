import React from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BankDetailContainer = (props) => {
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
                             Bank details
                            </li>
                            <li className="step active" data-step="2">
                             Photo Id proof
                            </li>
                            <li className="step" data-step="3">
                             Address proof
                            </li>
                            <li className="step" data-step="4">
                             Add References
                            </li>
                        </ol>
                    </section>
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                                { children }
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </div>
                </Container>
            </div>
            </div>
        </div>
    </>
  )
}

export default BankDetailContainer