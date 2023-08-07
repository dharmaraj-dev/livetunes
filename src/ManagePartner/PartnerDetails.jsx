import React, {useState} from 'react';
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { HiOutlineFilter } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Singleart from '../assets/images/single-art.png';
import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { BsFileEarmarkPdf } from "react-icons/bs";


const newevent = 90;

const PartnerDetails = () => {
    const [show, setShow] = useState(false);
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
                        <Row>
                            <Col xl={4}>
                            <div className="single-client-app-sec mb-4">
                                <Stack direction="horizontal" gap={4}>
                                <div className="img-single">
                                    <img src={Singleart} alt="" className="" />
                                </div>
                                <div>
                                    <h2>Rajesh Kumar</h2>
                                    <Stack direction="horizontal" gap={4}>
                                        <div className="l-m">Musician</div>
                                        <div className="l-b"><MdOutlineVerifiedUser className="green-color"/> Verified Artist</div>
                                    </Stack>
                                </div>
                                </Stack>
                            </div>
                            <div className="all-doc-info mb-3">
                                 <p className="mb-3 top-head fs-6 l-sb">All Personal Information</p>
                                 <Row>
                                    <Col xl={6} lg={6} sm={6}>
                                        <Stack direction="horizontal" gap={2} className="inner-all-doc-info">
                                            <div className="icos">
                                                <IoMdMail/>
                                            </div>
                                            <div>
                                                <p className="l-r mb-0 head">raghavroy@gmail.com</p>
                                                <p className="l-r mb-0 sub-head">Email Address</p>
                                            </div>
                                        </Stack>
                                    </Col>
                                    <Col xl={6} lg={6} sm={6}>
                                        <Stack direction="horizontal" gap={2} className="inner-all-doc-info">
                                            <div className="icos">
                                                <IoCallSharp/>
                                            </div>
                                            <div>
                                                <p className="l-r mb-0">9876543210</p>
                                                <p className="l-r mb-0 sub-head">Phone Number</p>
                                            </div>
                                        </Stack>
                                    </Col>
                                    <Col xl={6} lg={6} sm={6}>
                                        <Stack direction="horizontal" gap={2} className="inner-all-doc-info">
                                            <div className="icos">
                                                <FaBirthdayCake/>
                                            </div>
                                            <div>
                                                <p className="l-r mb-0">20 March, 1982</p>
                                                <p className="l-r mb-0 sub-head">Birthday</p>
                                            </div>
                                        </Stack>
                                    </Col>
                                    <Col xl={6} lg={6} sm={6}>
                                        <Stack direction="horizontal" gap={2} className="inner-all-doc-info">
                                            <div className="icos">
                                                <GrMoney/>
                                            </div>
                                            <div>
                                                <p className="l-r mb-0">100k</p>
                                                <p className="l-r mb-0 sub-head">Price Per Event</p>
                                            </div>
                                        </Stack>
                                    </Col>
                                 </Row>
                            </div>
                            <div className="all-doc-info">
                                 <p className="mb-3 sub-head fs-6 l-sb">Documents</p>
                                 <Stack direction="horizontal" gap={2} className="inner-all-doc-info inner-all-doc-info-doc">
                                    <div className="icos">
                                        <BsFileEarmarkPdf/>
                                    </div>
                                    <div>
                                        <p className="l-r mb-0">Document.pdf</p>
                                    </div>
                                    <div className="icos icos-doc red-color cursor-pointer ms-auto"><FiDownload/></div>
                                </Stack>
                                <Stack direction="horizontal" gap={2} className="inner-all-doc-info inner-all-doc-info-doc">
                                    <div className="icos">
                                        <BsFileEarmarkPdf/>
                                    </div>
                                    <div>
                                        <p className="l-r mb-0">Portfolio.pdf</p>
                                    </div>
                                    <div className="icos icos-doc red-color cursor-pointer ms-auto"><FiDownload/></div>
                                </Stack>
                            </div>
                            </Col>
                            <Col xl={8}>
                                <Row className="gx-2">
                                    <Col xl={3} lg={3} sm={6}>
                                        <div className="earned-sec main-event-analysis-sec mb-2 postion-r card-input-mange-partner">
                                            <Stack direction="horizontal" gap={1} className="align-items-self">
                                                <div className="inner-overbox">
                                                    <p className="mb-0 sub-head fs-6 l-sb">Total Events</p>
                                                    <h2 className="fs-3 red-color l-sb">30+</h2>
                                                </div>
                                            </Stack>
                                            <div className="l-b green-text-bottom">+1.45%</div>
                                        </div>
                                    </Col>
                                    <Col xl={3} lg={3} sm={6}>
                                        <div className="earned-sec main-event-analysis-sec mb-2 postion-r card-input-mange-partner">
                                            <Stack direction="horizontal" gap={1} className="align-items-self">
                                                <div className="inner-overbox">
                                                    <p className="mb-0 sub-head fs-6 l-sb">Revenue</p>
                                                    <h2 className="fs-3 red-color l-sb">300k</h2>
                                                </div>
                                            </Stack>
                                            <div className="l-b green-text-bottom">+1.45%</div>
                                        </div>
                                    </Col>
                                    <Col xl={6} lg={6} sm={7}>
                                    <div className="earned-sec main-event-analysis-sec mb-2 postion-r card-input-mange-partner">
                                        <div className="inner-overbox">
                                            <p className="mb-0 sub-head fs-6 l-sb">Events Analysis</p>
                                        </div>
                                        <Stack direction="horizontal" gap={1} className="align-items-self">
                                            <Stack direction="horizontal" gap={2} className="align-items-self main-circle-chart event-analysis-sec">
                                                <div style={{ width: 60, height: 60}}>
                                                    <CircularProgressbarWithChildren value={newevent} strokeWidth={3}>
                                                    <strong className="l-b sub-head">{`${newevent}+`}</strong>
                                                    </CircularProgressbarWithChildren>
                                                </div>
                                                <div className="circle-chart">
                                                    <p className="l-b sub-head">Events Done</p>
                                                </div>
                                            </Stack>
                                            <div className="vr red-color" />
                                            <Stack direction="horizontal" gap={2} className="align-items-self main-circle-chart event-analysis-sec ps-2">
                                                <div style={{ width: 60, height: 60}}>
                                                    <CircularProgressbarWithChildren value={newevent} strokeWidth={3}>
                                                    <strong className="l-b sub-head">{`${newevent}+`}</strong>
                                                    </CircularProgressbarWithChildren>
                                                </div>
                                                <div className="circle-chart">
                                                    <p className="l-b sub-head">Events To Do</p>
                                                </div>
                                            </Stack>
                                            <div className="vr red-color" />
                                            <Stack direction="horizontal" gap={2} className="align-items-self main-circle-chart event-analysis-sec ps-2">
                                                <div style={{ width: 60, height: 60}}>
                                                    <CircularProgressbarWithChildren value={newevent} strokeWidth={3}>
                                                    <strong className="l-b sub-head">{`${newevent}+`}</strong>
                                                    </CircularProgressbarWithChildren>
                                                </div>
                                                <div className="circle-chart">
                                                    <p className="l-b sub-head">Canceled Events</p>
                                                </div>
                                            </Stack>
                                        </Stack>
                                    </div>
                                    </Col>
                                </Row>
                                <div className="main-bill-invoice-sec new-appli-box mt-4">
                                    <Stack direction="horizontal" gap={4}>
                                        <h4 className="l-b mb-3">Events By Rohit</h4>
                                        <div className="l-m filter-denld-btn red-color cursor-pointer ms-auto"  onClick={() => setShow(!show)}>Filter <HiOutlineFilter/></div>
                                        <div className="l-m filter-denld-btn red-color cursor-pointer"><FiDownload/></div>
                                        </Stack>
                                    <hr className="mt-1"/>
                                </div>
                                <div className="main-booking-history-sec mt-3 new-appli-list">
        
                                    {show ? (
                                        <div className="main-filter">
                                            <Row>
                                                <Col xl={3} md={6} className="mb-4">
                                                <Form.Label className="l-sb">Name</Form.Label>
                                                <Form.Control placeholder="" type="text"/>
                                                </Col>
                                                <Col xl={3} md={6} className="mb-4">
                                                <Form.Label className="l-sb">Date</Form.Label>
                                                <Form.Control placeholder="" type="text"/>
                                                </Col>
                                                <Col xl={3} md={6} className="mb-4">
                                                <Form.Label className="l-sb">Place</Form.Label>
                                                <Form.Control placeholder="" type="text"/>
                                                </Col>
                                                <Col xl={3} md={6} className="mb-4">
                                                <Form.Label className="l-sb">Address</Form.Label>
                                                <Form.Control placeholder="" type="text"/>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={{ span: 4, offset: 4 }} className="text-center">
                                                <button type="button" className="l-m btnn back-btn btn btn-primary red-color cursor-pointer text-center">Apply</button>
                                                </Col>
                                            </Row>
                                        </div>
                                    ) : null}
        
                                    <div className="table-scroll">
                                    <Table className="table-responsive">
                                        <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Date</th>
                                            <th>Place</th>
                                            <th>Stipend</th>
                                            <th>Address</th>
                                            <th>Time</th>
                                            <th>Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Name of Event</td>
                                            <td>13 Feb, 2022</td>
                                            <td>Mumbai</td>
                                            <td>180k</td>
                                            <td>Near Ram Nivas Xyz ground, 123456</td>
                                            <td>4:00pm - 9:00pm</td>
                                            <td>Up Coming..</td>
                                        </tr>
                                        <tr>
                                            <td>Name of Event</td>
                                            <td>13 Feb, 2022</td>
                                            <td>Mumbai</td>
                                            <td>180k</td>
                                            <td>Near Ram Nivas Xyz ground, 123456</td>
                                            <td>4:00pm - 9:00pm</td>
                                            <td>Up Coming..</td>
                                        </tr>
                                        <tr>
                                            <td>Name of Event</td>
                                            <td>13 Feb, 2022</td>
                                            <td>Mumbai</td>
                                            <td>180k</td>
                                            <td>Near Ram Nivas Xyz ground, 123456</td>
                                            <td>4:00pm - 9:00pm</td>
                                            <td>Up Coming..</td>
                                        </tr>
                                        <tr>
                                            <td>Name of Event</td>
                                            <td>13 Feb, 2022</td>
                                            <td>Mumbai</td>
                                            <td>180k</td>
                                            <td>Near Ram Nivas Xyz ground, 123456</td>
                                            <td>4:00pm - 9:00pm</td>
                                            <td>Up Coming..</td>
                                        </tr>
                                        <tr>
                                            <td>Name of Event</td>
                                            <td>13 Feb, 2022</td>
                                            <td>Mumbai</td>
                                            <td>180k</td>
                                            <td>Near Ram Nivas Xyz ground, 123456</td>
                                            <td>4:00pm - 9:00pm</td>
                                            <td>Up Coming..</td>
                                        </tr>
                                        <tr>
                                            <td>Name of Event</td>
                                            <td>13 Feb, 2022</td>
                                            <td>Mumbai</td>
                                            <td>180k</td>
                                            <td>Near Ram Nivas Xyz ground, 123456</td>
                                            <td>4:00pm - 9:00pm</td>
                                            <td>Up Coming..</td>
                                        </tr>
                                        <tr>
                                            <td>Name of Event</td>
                                            <td>13 Feb, 2022</td>
                                            <td>Mumbai</td>
                                            <td>180k</td>
                                            <td>Near Ram Nivas Xyz ground, 123456</td>
                                            <td>4:00pm - 9:00pm</td>
                                            <td>Up Coming..</td>
                                        </tr>
                                        <tr>
                                            <td>Name of Event</td>
                                            <td>13 Feb, 2022</td>
                                            <td>Mumbai</td>
                                            <td>180k</td>
                                            <td>Near Ram Nivas Xyz ground, 123456</td>
                                            <td>4:00pm - 9:00pm</td>
                                            <td>Up Coming..</td>
                                        </tr>
                                        <tr>
                                            <td>Name of Event</td>
                                            <td>13 Feb, 2022</td>
                                            <td>Mumbai</td>
                                            <td>180k</td>
                                            <td>Near Ram Nivas Xyz ground, 123456</td>
                                            <td>4:00pm - 9:00pm</td>
                                            <td>Up Coming..</td>
                                        </tr>
                                        <tr>
                                            <td>Name of Event</td>
                                            <td>13 Feb, 2022</td>
                                            <td>Mumbai</td>
                                            <td>180k</td>
                                            <td>Near Ram Nivas Xyz ground, 123456</td>
                                            <td>4:00pm - 9:00pm</td>
                                            <td>Up Coming..</td>
                                        </tr>
                                        <tr>
                                            <td>Name of Event</td>
                                            <td>13 Feb, 2022</td>
                                            <td>Mumbai</td>
                                            <td>180k</td>
                                            <td>Near Ram Nivas Xyz ground, 123456</td>
                                            <td>4:00pm - 9:00pm</td>
                                            <td>Up Coming..</td>
                                        </tr>
                                        <tr>
                                            <td>Name of Event</td>
                                            <td>13 Feb, 2022</td>
                                            <td>Mumbai</td>
                                            <td>180k</td>
                                            <td>Near Ram Nivas Xyz ground, 123456</td>
                                            <td>4:00pm - 9:00pm</td>
                                            <td>Up Coming..</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                    </div>
                                </div>
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

export default PartnerDetails