import React, {useState} from 'react';
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Sbi from '../assets/images/sbi-img.png';
import Mastercard from '../assets/images/mastercard.png';
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineFilter } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

const BillingInvoice = () => {
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
                        <div className="main-bill-invoice-sec">
                            <Row>
                                <Col xl={4} lg={4}>
                                    <h4 className="l-b mb-3">Rewards</h4>
                                    <div className="earned-sec mb-4 postion-r">
                                        <FaRegEdit className="red-color cursor-pointer edit-sec"/>
                                        <Stack direction="horizontal" gap={3} className="align-items-self">
                                            <div className="img-sec faint-img-sec">
                                                <img src={Sbi} alt="img" />
                                            </div>
                                            <div className="">
                                                <h2 className="fs-5">Raunak Khanna</h2>
                                                <p className="mb-0 sub-head fs-6">SBI Bank Dharapeth Branch , Nagpur</p>
                                                <p className="mb-0 sub-head fs-6">IFSC CODE</p>
                                                <h2 className="fs-4 m-0 head mt-3">123456</h2>
                                            </div>
                                        </Stack>
                                    </div>
                                </Col>
                                <Col xl={8} lg={8}>
                                    <h4 className="l-b mb-3">Your card details</h4>
                                    <Row className="g-2">
                                        <Col lg={6}>
                                            <div className="earned-sec mb-4 postion-r">
                                                <FaRegEdit className="red-color cursor-pointer edit-sec"/>
                                                <Stack direction="horizontal" gap={3} className="align-items-self">
                                                    <div className="img-sec faint-img-sec">
                                                        <img src={Mastercard} alt="img" />
                                                    </div>
                                                    <div className="">
                                                        <h2 className="fs-5">Card no: XXXX0000444</h2>
                                                        <Stack direction="horizontal" gap={3}>
                                                        <p className="mb-0 sub-head fs-6">Raunak khanna</p>
                                                        <p className="mb-0 sub-head fs-6">Visa</p>
                                                        </Stack>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault9" />
                                                            <label className="form-check-label red-color l-b" htmlFor="flexRadioDefault9">
                                                            Set as Default
                                                            </label>
                                                        </div>
                                                    </div>
                                                </Stack>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="earned-sec mb-4 postion-r">
                                                <FaRegEdit className="red-color cursor-pointer edit-sec"/>
                                                <Stack direction="horizontal" gap={3} className="align-items-self">
                                                    <div className="img-sec faint-img-sec">
                                                        <img src={Mastercard} alt="img" />
                                                    </div>
                                                    <div className="">
                                                        <h2 className="fs-5">Card no: XXXX0000444</h2>
                                                        <Stack direction="horizontal" gap={3}>
                                                        <p className="mb-0 sub-head fs-6">Raunak khanna</p>
                                                        <p className="mb-0 sub-head fs-6">MasterCard</p>
                                                        </Stack>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault91" />
                                                            <label className="form-check-label red-color l-b" htmlFor="flexRadioDefault91">
                                                            Set as Default
                                                            </label>
                                                        </div>
                                                    </div>
                                                </Stack>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                        <div className="main-booking-history-sec mt-3">
                            <div className="head-top-sec">
                                <Stack direction="horizontal" gap={3}>
                                <h2 className="fs-3 mb-0">Booking History</h2>
                                <div className="l-m filter-denld-btn red-color cursor-pointer ms-auto"  onClick={() => setShow(!show)}>Filter <HiOutlineFilter/></div>
                                <div className="l-m filter-denld-btn red-color cursor-pointer">Download all <FiDownload/></div>
                                </Stack>
                            </div>

                            {show ? (
                                <div className="main-filter">
                                    <Row>
                                        <Col xl={3} md={6} className="mb-4">
                                        <Form.Label className="l-sb">Booking by</Form.Label>
                                        <Form.Control placeholder="" type="text"/>
                                        </Col>
                                        <Col xl={3} md={6} className="mb-4">
                                        <Form.Label className="l-sb">Event</Form.Label>
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
                                    </Row>
                                </div>
                            ) : null}

                            <div className="table-scroll">
                            <Table className="table-responsive">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>Invoice</th>
                                    <th>Booking by</th>
                                    <th>Amount</th>
                                    <th>Event</th>
                                    <th>Date</th>
                                    <th>Place</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Booking id</td>
                                    <td>Rahul Thakre</td>
                                    <td>₹22414</td>
                                    <td>Wedding sangeet</td>
                                    <td>10-08-22</td>
                                    <td>Nagpur</td>
                                    <td>Pending</td>
                                    {/* <td><div className="l-m filter-denld-btn red-color cursor-pointer text-center">Download <FiDownload/></div></td> */}
                                    <td><button type="button" className="l-m wbtnn back-btn btn btn-primary red-color cursor-pointer text-center">Download <FiDownload/></button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Booking id</td>
                                    <td>Rahul Thakre</td>
                                    <td>₹22414</td>
                                    <td>Wedding sangeet</td>
                                    <td>10-08-22</td>
                                    <td>Nagpur</td>
                                    <td>Pending</td>
                                    <td><button type="button" className="l-m wbtnn back-btn btn btn-primary red-color cursor-pointer text-center">Download <FiDownload/></button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Booking id</td>
                                    <td>Rahul Thakre</td>
                                    <td>₹22414</td>
                                    <td>Wedding sangeet</td>
                                    <td>10-08-22</td>
                                    <td>Nagpur</td>
                                    <td>Pending</td>
                                    <td><button type="button" className="l-m wbtnn back-btn btn btn-primary red-color cursor-pointer text-center">Download <FiDownload/></button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Booking id</td>
                                    <td>Rahul Thakre</td>
                                    <td>₹22414</td>
                                    <td>Wedding sangeet</td>
                                    <td>10-08-22</td>
                                    <td>Nagpur</td>
                                    <td>Pending</td>
                                    <td><button type="button" className="l-m wbtnn back-btn btn btn-primary red-color cursor-pointer text-center">Download <FiDownload/></button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Booking id</td>
                                    <td>Rahul Thakre</td>
                                    <td>₹22414</td>
                                    <td>Wedding sangeet</td>
                                    <td>10-08-22</td>
                                    <td>Nagpur</td>
                                    <td>Pending</td>
                                    <td><button type="button" className="l-m wbtnn back-btn btn btn-primary red-color cursor-pointer text-center">Download <FiDownload/></button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Booking id</td>
                                    <td>Rahul Thakre</td>
                                    <td>₹22414</td>
                                    <td>Wedding sangeet</td>
                                    <td>10-08-22</td>
                                    <td>Nagpur</td>
                                    <td>Pending</td>
                                    <td><button type="button" className="l-m wbtnn back-btn btn btn-primary red-color cursor-pointer text-center">Download <FiDownload/></button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Booking id</td>
                                    <td>Rahul Thakre</td>
                                    <td>₹22414</td>
                                    <td>Wedding sangeet</td>
                                    <td>10-08-22</td>
                                    <td>Nagpur</td>
                                    <td>Pending</td>
                                    <td><button type="button" className="l-m wbtnn back-btn btn btn-primary red-color cursor-pointer text-center">Download <FiDownload/></button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Booking id</td>
                                    <td>Rahul Thakre</td>
                                    <td>₹22414</td>
                                    <td>Wedding sangeet</td>
                                    <td>10-08-22</td>
                                    <td>Nagpur</td>
                                    <td>Pending</td>
                                    <td><button type="button" className="l-m wbtnn back-btn btn btn-primary red-color cursor-pointer text-center">Download <FiDownload/></button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Booking id</td>
                                    <td>Rahul Thakre</td>
                                    <td>₹22414</td>
                                    <td>Wedding sangeet</td>
                                    <td>10-08-22</td>
                                    <td>Nagpur</td>
                                    <td>Pending</td>
                                    <td><button type="button" className="l-m wbtnn back-btn btn btn-primary red-color cursor-pointer text-center">Download <FiDownload/></button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Booking id</td>
                                    <td>Rahul Thakre</td>
                                    <td>₹22414</td>
                                    <td>Wedding sangeet</td>
                                    <td>10-08-22</td>
                                    <td>Nagpur</td>
                                    <td>Pending</td>
                                    <td><button type="button" className="l-m wbtnn back-btn btn btn-primary red-color cursor-pointer text-center">Download <FiDownload/></button></td>
                                </tr>
                                </tbody>
                            </Table>
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

export default BillingInvoice