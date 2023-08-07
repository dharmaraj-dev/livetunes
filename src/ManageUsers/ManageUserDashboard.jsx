import React from 'react';
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import RecentOrderList from './RecentOrderList';
import Dwedding from '../assets/images/noun-wedding.png';
import { Link } from "react-router-dom";

const ManageUserDashboard = () => {
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
                    <div className="main-bill-invoice-sec new-appli-box">
                        <h4 className="l-b mb-3">Manage Users</h4>
                        <hr/>
                        <Row className="gx-2">
                            <Col xl={7} xxl={8} lg={12}>
                                <Row className="gx-2">
                                    <Col xl={4} lg={4} sm={6}>
                                        <div className="earned-sec mb-2 postion-r card-input-mange-partner usermange-mange-partner">
                                            <Link to="/totalusers">
                                            <Stack direction="horizontal" gap={4} className="align-items-self">
                                                <div className="inner-overbox">
                                                    <p className="mb-0 sub-head fs-6 l-sb">Total Users</p>
                                                    <Stack direction="horizontal" gap={3} className="mt-2">
                                                        <div className="img-sec faint-img-sec">
                                                            <img src={Dwedding} alt="img" />
                                                        </div>
                                                        <div className="">
                                                            <p className="l-bl fs-4 m-0 head">100k</p>
                                                            <p className="mb-0 sub-head fs-6 red-color">+20%</p>
                                                        </div>
                                                    </Stack>
                                                </div>
                                            </Stack>
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col xl={4} lg={4} sm={6}>
                                        <div className="earned-sec mb-2 postion-r card-input-mange-partner usermange-mange-partner">
                                            <Stack direction="horizontal" gap={4} className="align-items-self">
                                                <div className="inner-overbox">
                                                    <p className="mb-0 sub-head fs-6 l-sb">Active Users</p>
                                                    <Stack direction="horizontal" gap={3} className="mt-2">
                                                        <div className="img-sec faint-img-sec">
                                                            <img src={Dwedding} alt="img" />
                                                        </div>
                                                        <div className="">
                                                            <p className="l-bl fs-4 m-0 head">57k</p>
                                                            <p className="mb-0 sub-head fs-6 red-color">+40%</p>
                                                        </div>
                                                    </Stack>
                                                </div>
                                            </Stack>
                                        </div>
                                    </Col>
                                    <Col xl={4} lg={4} sm={6}>
                                        <div className="earned-sec mb-2 postion-r card-input-mange-partner usermange-mange-partner">
                                            <Stack direction="horizontal" gap={4} className="align-items-self">
                                                <div className="inner-overbox">
                                                    <p className="mb-0 sub-head fs-6 l-sb">Deactivating Users</p>
                                                    <Stack direction="horizontal" gap={3} className="mt-2">
                                                        <div className="img-sec faint-img-sec">
                                                            <img src={Dwedding} alt="img" />
                                                        </div>
                                                        <div className="">
                                                            <p className="l-bl fs-4 m-0 head">1k</p>
                                                            <p className="mb-0 sub-head fs-6 red-color">-20%</p>
                                                        </div>
                                                    </Stack>
                                                </div>
                                            </Stack>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={5} xxl={4} lg={7} sm={12}>
                             <RecentOrderList/>
                            </Col>
                        </Row>
                       
                    </div>
                </div>
                </Container>
            </div>
            </div>
        </div>
    </>
  )
}

export default ManageUserDashboard