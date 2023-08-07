import React, {useState} from 'react';
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { HiOutlineFilter } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { RiShareForwardFill } from "react-icons/ri";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

const RecentOrders = () => {
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
                        <div className="main-bill-invoice-sec new-appli-box">
                            <Stack direction="horizontal" gap={4}>
                            <h4 className="l-b mb-3">Recent Orders</h4>
                            <div className="l-m filter-denld-btn red-color cursor-pointer ms-auto"><FiDownload/></div>
                            <div className="l-m filter-denld-btn red-color cursor-pointer"  onClick={() => setShow(!show)}>Filter <HiOutlineFilter/></div>
                            <div className="l-m filter-denld-btn red-color cursor-pointer">Forward <RiShareForwardFill/></div>
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
                                        <Form.Label className="l-sb">Event type</Form.Label>
                                        <Form.Control placeholder="" type="text"/>
                                        </Col>
                                        <Col xl={3} md={6} className="mb-4">
                                        <Form.Label className="l-sb">Order ID</Form.Label>
                                        <Form.Control placeholder="" type="text"/>
                                        </Col>
                                        <Col xl={3} md={6} className="mb-4">
                                        <Form.Label className="l-sb">Payment method</Form.Label>
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
                                    <th></th>
                                    <th>Name</th>
                                    <th>Place</th>
                                    <th>Event type</th>
                                    <th>Order ID</th>
                                    <th>Payment method</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rajesh Kumar</td>
                                    <td>Nagpur</td>
                                    <td>Wedding Sangeet</td>
                                    <td>A2241445</td>
                                    <td>Net Banking</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PAID</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rahul Thakre</td>
                                    <td>Nagpur</td>
                                    <td>House Party</td>
                                    <td>A2241445</td>
                                    <td>Cash</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PENDING</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rajesh Kumar</td>
                                    <td>Nagpur</td>
                                    <td>Wedding Sangeet</td>
                                    <td>A2241445</td>
                                    <td>Net Banking</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PAID</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rahul Thakre</td>
                                    <td>Nagpur</td>
                                    <td>House Party</td>
                                    <td>A2241445</td>
                                    <td>Cash</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PENDING</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rajesh Kumar</td>
                                    <td>Nagpur</td>
                                    <td>Wedding Sangeet</td>
                                    <td>A2241445</td>
                                    <td>Net Banking</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PAID</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rahul Thakre</td>
                                    <td>Nagpur</td>
                                    <td>House Party</td>
                                    <td>A2241445</td>
                                    <td>Cash</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PENDING</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rajesh Kumar</td>
                                    <td>Nagpur</td>
                                    <td>Wedding Sangeet</td>
                                    <td>A2241445</td>
                                    <td>Net Banking</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PAID</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rahul Thakre</td>
                                    <td>Nagpur</td>
                                    <td>House Party</td>
                                    <td>A2241445</td>
                                    <td>Cash</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PENDING</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rajesh Kumar</td>
                                    <td>Nagpur</td>
                                    <td>Wedding Sangeet</td>
                                    <td>A2241445</td>
                                    <td>Net Banking</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PAID</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rahul Thakre</td>
                                    <td>Nagpur</td>
                                    <td>House Party</td>
                                    <td>A2241445</td>
                                    <td>Cash</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PENDING</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rajesh Kumar</td>
                                    <td>Nagpur</td>
                                    <td>Wedding Sangeet</td>
                                    <td>A2241445</td>
                                    <td>Net Banking</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PAID</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rahul Thakre</td>
                                    <td>Nagpur</td>
                                    <td>House Party</td>
                                    <td>A2241445</td>
                                    <td>Cash</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PENDING</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rajesh Kumar</td>
                                    <td>Nagpur</td>
                                    <td>Wedding Sangeet</td>
                                    <td>A2241445</td>
                                    <td>Net Banking</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PAID</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rahul Thakre</td>
                                    <td>Nagpur</td>
                                    <td>House Party</td>
                                    <td>A2241445</td>
                                    <td>Cash</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PENDING</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rajesh Kumar</td>
                                    <td>Nagpur</td>
                                    <td>Wedding Sangeet</td>
                                    <td>A2241445</td>
                                    <td>Net Banking</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PAID</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rahul Thakre</td>
                                    <td>Nagpur</td>
                                    <td>House Party</td>
                                    <td>A2241445</td>
                                    <td>Cash</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PENDING</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rajesh Kumar</td>
                                    <td>Nagpur</td>
                                    <td>Wedding Sangeet</td>
                                    <td>A2241445</td>
                                    <td>Net Banking</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PAID</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rahul Thakre</td>
                                    <td>Nagpur</td>
                                    <td>House Party</td>
                                    <td>A2241445</td>
                                    <td>Cash</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PENDING</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rajesh Kumar</td>
                                    <td>Nagpur</td>
                                    <td>Wedding Sangeet</td>
                                    <td>A2241445</td>
                                    <td>Net Banking</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PAID</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rahul Thakre</td>
                                    <td>Nagpur</td>
                                    <td>House Party</td>
                                    <td>A2241445</td>
                                    <td>Cash</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PENDING</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rajesh Kumar</td>
                                    <td>Nagpur</td>
                                    <td>Wedding Sangeet</td>
                                    <td>A2241445</td>
                                    <td>Net Banking</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PAID</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rahul Thakre</td>
                                    <td>Nagpur</td>
                                    <td>House Party</td>
                                    <td>A2241445</td>
                                    <td>Cash</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PENDING</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rajesh Kumar</td>
                                    <td>Nagpur</td>
                                    <td>Wedding Sangeet</td>
                                    <td>A2241445</td>
                                    <td>Net Banking</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PAID</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                        </div>
                                    </td>
                                    <td>Rahul Thakre</td>
                                    <td>Nagpur</td>
                                    <td>House Party</td>
                                    <td>A2241445</td>
                                    <td>Cash</td>
                                    <td>22-07-22</td>
                                    <td>₹20,000/-</td>
                                    <td>PENDING</td>
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

export default RecentOrders