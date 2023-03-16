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
                    <br/>
                    <br/>
                    <br/>
                    <div className="main-artists-list">
                        <Row>
                            <Col lg={4}>
                                
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

export default BankDetailContainer