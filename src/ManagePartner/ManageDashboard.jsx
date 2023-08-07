import React from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Stack from 'react-bootstrap/Stack';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MdEventNote } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";

const newevent = 90;
const newpartner = 70;
const ManageDashboard = () => {
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
                        <h4 className="l-b mb-3">Manage Partners</h4>
                        <hr/>
                        <Row className="gx-2">
                            <Col xl={7} lg={12}>
                                <Row className="gx-2">
                                    <Col xl={4} lg={4} sm={6}>
                                        <div className="earned-sec mb-2 postion-r card-input-mange-partner">
                                            <Stack direction="horizontal" gap={4} className="align-items-self">
                                                <div className="inner-overbox">
                                                    <p className="mb-0 sub-head fs-6 l-sb red-color">Say Congrats to</p>
                                                </div>
                                            </Stack>
                                        </div>
                                    </Col>
                                    <Col xl={4} lg={4} sm={6}>
                                        <div className="earned-sec mb-2 postion-r card-input-mange-partner">
                                            <Stack direction="horizontal" gap={4} className="align-items-self">
                                                <div className="inner-overbox">
                                                    <p className="mb-0 sub-head fs-6 l-sb">Total Earn From Partner</p>
                                                    <h2 className="fs-3 red-color l-bl">₹6,23,870</h2>
                                                </div>
                                            </Stack>
                                        </div>
                                    </Col>
                                    <Col xl={4} lg={4} sm={6}>
                                        <div className="earned-sec mb-2 postion-r card-input-mange-partner">
                                            <Stack direction="horizontal" gap={4} className="align-items-self">
                                                <div className="inner-overbox">
                                                    <p className="mb-0 sub-head fs-6 l-sb">Total Expenses</p>
                                                    <h2 className="fs-3 red-color l-bl">₹4,21,248</h2>
                                                </div>
                                            </Stack>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={5} lg={7} sm={12}>
                                <div className="earned-sec mb-2 postion-r card-input-mange-partner">
                                    <Stack direction="horizontal" gap={3} className="align-items-self">
                                        <div className="inner-overbox">
                                            <p className="mb-0 sub-head fs-6 l-sb">Partner Upcoming payment</p>
                                            <div className="due-date-sec">
                                                <span>Due Date: 2-11-2022</span>
                                            </div>
                                            <h2 className="fs-3 red-color l-bl mt-1">₹1,46,458</h2>
                                        </div>
                                        <div className="vr" />
                                        <div className="inner-overbox text-center">
                                            <p className="mb-0 sub-head fs-6 l-sb">Partners</p>
                                            <h2 className="fs-3 red-color l-bl">16</h2>
                                        </div>
                                        <div className="vr" />
                                        <div className="inner-overbox">
                                            <p className="mb-0 sub-head fs-6 l-sb">Last Payment</p>
                                            <div className="small-text-date">15-10-2022</div>
                                            <h2 className="fs-3 red-color l-bl m-0">₹1,11,875</h2>
                                            <div className="small-text-date">11 Partners</div>
                                        </div>
                                    </Stack>
                                </div> 
                            </Col>
                        </Row>
                        <Row>
                            <Col xxl={3} xl={3} lg={4} sm={6}>
                                <div className="earned-sec mb-4 postion-r card-input-mange-partner">
                                    <div className="inner-overbox">
                                        <p className="mb-0 sub-head fs-6 l-sb">Statistics</p>
                                    </div>
                                    <Stack direction="horizontal" gap={4} className="align-items-self main-circle-chart">
                                        <div style={{ width: 80, height: 80}}>
                                            <CircularProgressbarWithChildren value={newevent} strokeWidth={3}>
                                            {/* <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" /> */}
                                            <MdEventNote className="fs-3"/>
                                            </CircularProgressbarWithChildren>
                                        </div>
                                        <div className="circle-chart">
                                            <strong className="value-sec red-color l-bl fs-3">{`${newevent}+`}</strong>
                                            <p className="l-b sub-head">New Events</p>
                                        </div>
                                    </Stack>
                                    <Stack direction="horizontal" gap={4} className="align-items-self main-circle-chart">
                                        <div style={{ width: 80, height: 80}}>
                                            <CircularProgressbarWithChildren value={newpartner} strokeWidth={3}>
                                            {/* <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" /> */}
                                            <FiUserPlus className="fs-3"/>
                                            </CircularProgressbarWithChildren>
                                        </div>
                                        <div className="circle-chart">
                                            <strong className="value-sec red-color l-bl fs-3">{`${newpartner}+`}</strong>
                                            <p className="l-b sub-head">New Partners</p>
                                        </div>
                                    </Stack>
                                </div>
                            </Col>
                            <Col xxl={6} xl={5} lg={8} sm={12}>
                                
                            </Col>
                            <Col xxl={3} xl={4} lg={5} sm={7}>
                                <div className="earned-sec mb-4 card-input-mange-partner postion-r">
                                    <div className="inner-overbox">
                                        <p className="mb-0 sub-head fs-6 l-sb">Artists</p>
                                    </div>
                                    <div className="main-artists-adi-cirlce postion-r">
                                        <Link to="/activeartists">
                                        <div className="active-artist-circle l-b">
                                        85%
                                        </div>
                                        </Link>
                                        <Link to="/deactiveartists">
                                        <div className="dactive-artist-circle l-b">
                                        13%
                                        </div>
                                        </Link>
                                        <Link to="/inactiveartists">
                                        <div className="inactive-artist-circle l-b">
                                        2%
                                        </div>
                                        </Link>
                                    </div>
                                        <div className="show-artist-box d-flex justify-content-around">
                                            <Stack direction="horizontal" gap={2}>
                                                <div className="inner-show-artist-abox"></div>
                                                <div className="l-b inner-show-artist-text">Active</div>
                                            </Stack>
                                            <Stack direction="horizontal" gap={2}>
                                                <div className="inner-show-artist-abox dbox"></div>
                                                <div className="l-b inner-show-artist-text">Deactive</div>
                                            </Stack>
                                            <Stack direction="horizontal" gap={2}>
                                                <div className="inner-show-artist-abox inbox"></div>
                                                <div className="l-b inner-show-artist-text">Inactive</div>
                                            </Stack>
                                        </div>
                                </div>
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

export default ManageDashboard