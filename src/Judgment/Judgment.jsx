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

const Judgment = () => {
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
                              <h4 className="l-b mb-3">Application overview</h4>
                              <Row>
                                  <Col xl={3} lg={3}>
                                    <label>
                                    <input type="radio" name="product" class="card-input-element" />
                                      <div className="earned-sec mb-4 postion-r card-input">
                                          <Stack direction="horizontal" gap={3} className="align-items-self">
                                              <div className="ico-sec-over">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="40" viewBox="0 0 34 40">
                                                <g id="noun-contract-4911469" transform="translate(-131.25 -17.5)">
                                                    <path id="Path_6163" data-name="Path 6163" d="M227.345,17.5H203.257a2.005,2.005,0,0,0-2.007,2V39.491a.669.669,0,0,0,1.338,0V19.5a.669.669,0,0,1,.669-.666h24.088a.669.669,0,0,1,.669.666V51.486a.669.669,0,0,1-.669.666H213.294a.666.666,0,1,0,0,1.333h14.051a2.005,2.005,0,0,0,2.007-2V19.5A2.005,2.005,0,0,0,227.345,17.5Z" transform="translate(-64.102 0)"/>
                                                    <path id="Path_6164" data-name="Path 6164" d="M273.823,70.669a.669.669,0,0,0-.669-.669H254.419a.669.669,0,0,0-.669.669v4.015a.669.669,0,0,0,.669.669h18.735a.669.669,0,0,0,.669-.669Zm-1.338,3.346h-17.4V71.338h17.4Z" transform="translate(-112.588 -48.485)"/>
                                                    <path id="Path_6165" data-name="Path 6165" d="M321.639,166.25h-14.72a.669.669,0,0,0,0,1.338h14.72a.669.669,0,0,0,0-1.338Z" transform="translate(-161.073 -137.418)"/>
                                                    <path id="Path_6166" data-name="Path 6166" d="M254.419,202.588h18.735a.669.669,0,1,0,0-1.338H254.419a.669.669,0,0,0,0,1.338Z" transform="translate(-112.588 -169.752)"/>
                                                    <path id="Path_6167" data-name="Path 6167" d="M254.419,237.588h18.735a.669.669,0,0,0,0-1.338H254.419a.669.669,0,0,0,0,1.338Z" transform="translate(-112.588 -202.085)"/>
                                                    <path id="Path_6168" data-name="Path 6168" d="M272.588,166.919a.669.669,0,1,1-.669-.669.669.669,0,0,1,.669.669" transform="translate(-129.113 -137.418)"/>
                                                    <path id="Path_6169" data-name="Path 6169" d="M254.419,272.588h15.389a.669.669,0,0,0,0-1.338H254.419a.669.669,0,0,0,0,1.338Z" transform="translate(-112.827 -234.419)"/>
                                                    <path id="Path_6170" data-name="Path 6170" d="M385,346.6a.669.669,0,0,0,.669.669,6.933,6.933,0,0,0,2.649-.537,6.29,6.29,0,0,0,2.7.537h1.338a.669.669,0,0,0,0-1.338h-1.338a5.747,5.747,0,0,1-1.341-.155,2.731,2.731,0,0,0,.672-1.852,3.151,3.151,0,0,0-.552-1.907,1.761,1.761,0,0,0-2.911,0,3.151,3.151,0,0,0-.552,1.907,2.859,2.859,0,0,0,.686,1.832,6.74,6.74,0,0,1-1.356.176.669.669,0,0,0-.668.669Zm3.346-4.015c.324,0,.669.469.669,1.338a1.451,1.451,0,0,1-.655,1.264,1.567,1.567,0,0,1-.683-1.264C387.676,343.057,388.021,342.588,388.346,342.588Z" transform="translate(-233.93 -299.099)"/>
                                                    <path id="Path_6171" data-name="Path 6171" d="M500.088,403.169a.669.669,0,1,1-.669-.669.669.669,0,0,1,.669.669" transform="translate(-338.853 -355.67)"/>
                                                    <path id="Path_6172" data-name="Path 6172" d="M199.384,402.693l-4.211,4.211-1.534-1.534a.669.669,0,0,0-.946.946l2.007,2.007a.669.669,0,0,0,.946,0l4.684-4.684a.669.669,0,0,0-.946-.946Z" transform="translate(-57.233 -356.037)"/>
                                                    <path id="Path_6173" data-name="Path 6173" d="M139.279,332.5a8.029,8.029,0,1,0,8.029,8.029A8.038,8.038,0,0,0,139.279,332.5Zm0,14.72a6.691,6.691,0,1,1,6.691-6.691A6.7,6.7,0,0,1,139.279,347.22Z" transform="translate(0 -291.058)"/>
                                                </g>
                                                </svg>
                                              </div>
                                              <div className="inner-overbox">
                                                  <p className="mb-0 sub-head fs-5 l-sb">New application</p>
                                                  <h2 className="fs-1">300</h2>
                                              </div>
                                          </Stack>
                                      </div>
                                    </label>  
                                  </Col>
                                  <Col xl={3} lg={3}>
                                    <label>
                                    <input type="radio" name="product" class="card-input-element" />
                                      <div className="earned-sec mb-4 postion-r card-input">
                                          <Stack direction="horizontal" gap={3} className="align-items-self">
                                              <div className="ico-sec-over">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="40" viewBox="0 0 34 40">
                                                <g id="noun-contract-4911469" transform="translate(-131.25 -17.5)">
                                                    <path id="Path_6163" data-name="Path 6163" d="M227.345,17.5H203.257a2.005,2.005,0,0,0-2.007,2V39.491a.669.669,0,0,0,1.338,0V19.5a.669.669,0,0,1,.669-.666h24.088a.669.669,0,0,1,.669.666V51.486a.669.669,0,0,1-.669.666H213.294a.666.666,0,1,0,0,1.333h14.051a2.005,2.005,0,0,0,2.007-2V19.5A2.005,2.005,0,0,0,227.345,17.5Z" transform="translate(-64.102 0)"/>
                                                    <path id="Path_6164" data-name="Path 6164" d="M273.823,70.669a.669.669,0,0,0-.669-.669H254.419a.669.669,0,0,0-.669.669v4.015a.669.669,0,0,0,.669.669h18.735a.669.669,0,0,0,.669-.669Zm-1.338,3.346h-17.4V71.338h17.4Z" transform="translate(-112.588 -48.485)"/>
                                                    <path id="Path_6165" data-name="Path 6165" d="M321.639,166.25h-14.72a.669.669,0,0,0,0,1.338h14.72a.669.669,0,0,0,0-1.338Z" transform="translate(-161.073 -137.418)"/>
                                                    <path id="Path_6166" data-name="Path 6166" d="M254.419,202.588h18.735a.669.669,0,1,0,0-1.338H254.419a.669.669,0,0,0,0,1.338Z" transform="translate(-112.588 -169.752)"/>
                                                    <path id="Path_6167" data-name="Path 6167" d="M254.419,237.588h18.735a.669.669,0,0,0,0-1.338H254.419a.669.669,0,0,0,0,1.338Z" transform="translate(-112.588 -202.085)"/>
                                                    <path id="Path_6168" data-name="Path 6168" d="M272.588,166.919a.669.669,0,1,1-.669-.669.669.669,0,0,1,.669.669" transform="translate(-129.113 -137.418)"/>
                                                    <path id="Path_6169" data-name="Path 6169" d="M254.419,272.588h15.389a.669.669,0,0,0,0-1.338H254.419a.669.669,0,0,0,0,1.338Z" transform="translate(-112.827 -234.419)"/>
                                                    <path id="Path_6170" data-name="Path 6170" d="M385,346.6a.669.669,0,0,0,.669.669,6.933,6.933,0,0,0,2.649-.537,6.29,6.29,0,0,0,2.7.537h1.338a.669.669,0,0,0,0-1.338h-1.338a5.747,5.747,0,0,1-1.341-.155,2.731,2.731,0,0,0,.672-1.852,3.151,3.151,0,0,0-.552-1.907,1.761,1.761,0,0,0-2.911,0,3.151,3.151,0,0,0-.552,1.907,2.859,2.859,0,0,0,.686,1.832,6.74,6.74,0,0,1-1.356.176.669.669,0,0,0-.668.669Zm3.346-4.015c.324,0,.669.469.669,1.338a1.451,1.451,0,0,1-.655,1.264,1.567,1.567,0,0,1-.683-1.264C387.676,343.057,388.021,342.588,388.346,342.588Z" transform="translate(-233.93 -299.099)"/>
                                                    <path id="Path_6171" data-name="Path 6171" d="M500.088,403.169a.669.669,0,1,1-.669-.669.669.669,0,0,1,.669.669" transform="translate(-338.853 -355.67)"/>
                                                    <path id="Path_6172" data-name="Path 6172" d="M199.384,402.693l-4.211,4.211-1.534-1.534a.669.669,0,0,0-.946.946l2.007,2.007a.669.669,0,0,0,.946,0l4.684-4.684a.669.669,0,0,0-.946-.946Z" transform="translate(-57.233 -356.037)"/>
                                                    <path id="Path_6173" data-name="Path 6173" d="M139.279,332.5a8.029,8.029,0,1,0,8.029,8.029A8.038,8.038,0,0,0,139.279,332.5Zm0,14.72a6.691,6.691,0,1,1,6.691-6.691A6.7,6.7,0,0,1,139.279,347.22Z" transform="translate(0 -291.058)"/>
                                                </g>
                                                </svg>
                                              </div>
                                              <div className="inner-overbox">
                                                  <p className="mb-0 sub-head fs-5">New application</p>
                                                  <h2 className="fs-1">300</h2>
                                              </div>
                                          </Stack>
                                      </div>
                                    </label>  
                                  </Col>
                              </Row>
                          </div>
                          <div className="main-booking-history-sec mt-3 new-appli-list">
                              <div className="head-top-sec">
                                  <Stack direction="horizontal" gap={3}>
                                  <h2 className="fs-3 mb-0">New Applications</h2>
                                  <div className="l-m filter-denld-btn red-color cursor-pointer ms-auto"  onClick={() => setShow(!show)}>Filter <HiOutlineFilter/></div>
                                  <div className="l-m filter-denld-btn red-color cursor-pointer">Download <FiDownload/></div>
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
                                      <th>Artists type</th>
                                      <th>Application id</th>
                                      <th>Date</th>
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
                                      <td>Singer, Guitarist</td>
                                      <td>A2241445</td>
                                      <td>10-08-22</td>
                                      <td>Unaudited</td>
                                      {/* <td><div className="l-m filter-denld-btn red-color cursor-pointer text-center">Download <FiDownload/></div></td> */}
                                      {/* <td><button type="button" className="l-m wbtnn back-btn btn btn-primary red-color cursor-pointer text-center">Download <FiDownload/></button></td> */}
                                  </tr>
                                  <tr>
                                      <td>
                                          <div className="form-check">
                                              <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                          </div>
                                      </td>
                                      <td>Rajesh Kumar</td>
                                      <td>Nagpur</td>
                                      <td>Singer, Guitarist</td>
                                      <td>A2241445</td>
                                      <td>10-08-22</td>
                                      <td>Unaudited</td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <div className="form-check">
                                              <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                          </div>
                                      </td>
                                      <td>Rajesh Kumar</td>
                                      <td>Nagpur</td>
                                      <td>Singer, Guitarist</td>
                                      <td>A2241445</td>
                                      <td>10-08-22</td>
                                      <td>Unaudited</td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <div className="form-check">
                                              <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                          </div>
                                      </td>
                                      <td>Rajesh Kumar</td>
                                      <td>Nagpur</td>
                                      <td>Singer, Guitarist</td>
                                      <td>A2241445</td>
                                      <td>10-08-22</td>
                                      <td><div className="appro-reje-sec l-m text-center approved-sec">Approved</div></td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <div className="form-check">
                                              <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                          </div>
                                      </td>
                                      <td>Rajesh Kumar</td>
                                      <td>Nagpur</td>
                                      <td>Singer, Guitarist</td>
                                      <td>A2241445</td>
                                      <td>10-08-22</td>
                                      <td><div className="appro-reje-sec l-m text-center reject-sec">Rejected</div></td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <div className="form-check">
                                              <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                          </div>
                                      </td>
                                      <td>Rajesh Kumar</td>
                                      <td>Nagpur</td>
                                      <td>Singer, Guitarist</td>
                                      <td>A2241445</td>
                                      <td>10-08-22</td>
                                      <td>Unaudited</td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <div className="form-check">
                                              <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                          </div>
                                      </td>
                                      <td>Rajesh Kumar</td>
                                      <td>Nagpur</td>
                                      <td>Singer, Guitarist</td>
                                      <td>A2241445</td>
                                      <td>10-08-22</td>
                                      <td>Unaudited</td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <div className="form-check">
                                              <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault11" />
                                          </div>
                                      </td>
                                      <td>Rajesh Kumar</td>
                                      <td>Nagpur</td>
                                      <td>Singer, Guitarist</td>
                                      <td>A2241445</td>
                                      <td>10-08-22</td>
                                      <td>Unaudited</td>
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

export default Judgment