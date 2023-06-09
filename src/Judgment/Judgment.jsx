import React, {useState} from 'react';
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
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
                                  <Col xl={3} lg={3} sm={6}>
                                    <label>
                                    <input type="radio" name="product" class="card-input-element" />
                                      <div className="earned-sec mb-4 postion-r card-input">
                                          <Stack direction="horizontal" gap={4} className="align-items-self">
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
                                  <Col xl={3} lg={3} sm={6}>
                                    <label>
                                    <input type="radio" name="product" class="card-input-element" />
                                      <div className="earned-sec mb-4 postion-r card-input">
                                          <Stack direction="horizontal" gap={4} className="align-items-self">
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
                                                  <p className="mb-0 sub-head fs-5 l-sb">Approved</p>
                                                  <h2 className="fs-1">100</h2>
                                              </div>
                                          </Stack>
                                      </div>
                                    </label>  
                                  </Col>
                                  <Col xl={3} lg={3} sm={6}>
                                    <label>
                                    <input type="radio" name="product" class="card-input-element" />
                                      <div className="earned-sec mb-4 postion-r card-input">
                                          <Stack direction="horizontal" gap={4} className="align-items-self">
                                              <div className="ico-sec-over">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 32 40">
                                                <g id="noun-unrated-bond-4911465" transform="translate(-131.25 -17.5)">
                                                    <path id="Path_6205" data-name="Path 6205" d="M226.737,17.5H203.211a1.963,1.963,0,0,0-1.961,1.96V37.1a.654.654,0,0,0,1.307,0V19.46a.654.654,0,0,1,.654-.653h23.527a.654.654,0,0,1,.653.653V49.515a.654.654,0,0,1-.653.653H215.618a.653.653,0,1,0,0,1.307h11.119a1.963,1.963,0,0,0,1.961-1.96V19.46A1.963,1.963,0,0,0,226.737,17.5Z" transform="translate(-65.448)"/>
                                                    <path id="Path_6209" data-name="Path 6209" d="M288.75,219.422a.672.672,0,0,0,.672.672h16.134a.672.672,0,1,0,0-1.345H289.422A.672.672,0,0,0,288.75,219.422Z" transform="translate(-146.225 -185.921)"/>
                                                    <path id="Path_6210" data-name="Path 6210" d="M253.75,254.422a.672.672,0,0,0,.672.672h18.823a.672.672,0,1,0,0-1.344H254.422A.672.672,0,0,0,253.75,254.422Z" transform="translate(-113.914 -218.255)"/>
                                                    <path id="Path_6211" data-name="Path 6211" d="M362.1,288.75H350.672a.672.672,0,1,0,0,1.345H362.1a.672.672,0,1,0,0-1.345Z" transform="translate(-202.769 -250.589)"/>
                                                    <path id="Path_6212" data-name="Path 6212" d="M386.334,325.094a.672.672,0,1,0,0-1.344h-9.411a.672.672,0,1,0,0,1.344Z" transform="translate(-227.003 -282.923)"/>
                                                    <path id="Path_6213" data-name="Path 6213" d="M434.8,358.75h-5.378a.672.672,0,0,0,0,1.345H434.8a.672.672,0,0,0,0-1.345Z" transform="translate(-275.469 -315.257)"/>
                                                    <path id="Path_6214" data-name="Path 6214" d="M255.094,219.422a.672.672,0,1,1-.672-.672.672.672,0,0,1,.672.672" transform="translate(-113.335 -185.921)"/>
                                                    <path id="Path_6215" data-name="Path 6215" d="M237.594,53.172a.672.672,0,1,1-.672-.672.672.672,0,0,1,.672.672" transform="translate(-97.145 -32.311)"/>
                                                    <path id="Path_6216" data-name="Path 6216" d="M517.594,53.172a.672.672,0,1,1-.672-.672.672.672,0,0,1,.672.672" transform="translate(-356.247 -32.311)"/>
                                                    <path id="Path_6217" data-name="Path 6217" d="M517.594,420.672a.672.672,0,1,1-.672-.672.672.672,0,0,1,.672.672" transform="translate(-356.247 -371.842)"/>
                                                    <path id="Path_6218" data-name="Path 6218" d="M209.123,367.7a.673.673,0,0,0-.951,0l-2.886,2.886L202.4,367.7a.672.672,0,1,0-.951.951l2.886,2.886-2.886,2.886a.672.672,0,0,0,.951.951l2.886-2.886,2.886,2.886a.672.672,0,0,0,.951-.951l-2.886-2.886,2.886-2.886A.672.672,0,0,0,209.123,367.7Z" transform="translate(-64.804 -323.444)"/>
                                                    <path id="Path_6219" data-name="Path 6219" d="M140.661,297.5a9.411,9.411,0,1,0,9.411,9.411A9.422,9.422,0,0,0,140.661,297.5Zm0,17.479a8.067,8.067,0,1,1,8.067-8.067A8.076,8.076,0,0,1,140.661,314.979Z" transform="translate(0 -258.823)"/>
                                                    <path id="Path_6251" data-name="Path 6251" d="M273.918,70.672a.672.672,0,0,0-.672-.672H254.422a.672.672,0,0,0-.672.672v4.034a.672.672,0,0,0,.672.672h18.823a.672.672,0,0,0,.672-.672Zm-1.345,3.361H255.094V71.344h17.479Z" transform="translate(-113.914 -46.776)"/>
                                                </g>
                                                </svg>
                                              </div>
                                              <div className="inner-overbox">
                                                  <p className="mb-0 sub-head fs-5 l-sb">Rejected</p>
                                                  <h2 className="fs-1">100</h2>
                                              </div>
                                          </Stack>
                                      </div>
                                    </label>  
                                  </Col>
                                  <Col xl={3} lg={3} sm={6}>
                                    <label>
                                    <input type="radio" name="product" class="card-input-element" />
                                      <div className="earned-sec mb-4 postion-r card-input">
                                          <Stack direction="horizontal" gap={4} className="align-items-self">
                                              <div className="ico-sec-over">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                                <path id="noun-agreement-4200463" d="M131.152,26.25c-.023,0-.046,0-.069,0a.69.69,0,0,0-.546.341l-4.372,7.575V26.939h0a.69.69,0,0,0-.692-.687H105.337a.693.693,0,0,0-.221.062.569.569,0,0,0-.06.032c-.019.011-.037.022-.054.035l-.011.008c-.015.011-.03.024-.045.036l-.026.023-8.457,8.456h0a.691.691,0,0,0-.088.106.63.63,0,0,0-.035.059.692.692,0,0,0-.081.323V65.557a.69.69,0,0,0,.692.692h28.521a.69.69,0,0,0,.692-.692V47.174l10-17.328h0a.69.69,0,0,0-.255-.941l-4.434-2.561a.689.689,0,0,0-.327-.094ZM106.1,27.632h18.689v8.929l-7.046,12.208h0a.69.69,0,0,0-.092.316l-.2,5.462a.69.69,0,0,0,1.059.611l4.629-2.9h0a.687.687,0,0,0,.234-.239l1.414-2.45v15.3H97.64V36.084H105.4a.689.689,0,0,0,.692-.687Zm25.3.249,3.233,1.868-9.741,16.882-2.046,3.544L119.6,48.3l6.465-11.19,0-.008h0l.007-.013Zm-26.678.729V34.7h-6.1Zm.9,11.286h0a.69.69,0,1,0,0,1.379h11.2a.69.69,0,0,0,0-1.379Zm7.712,4.889h0a.616.616,0,0,0-.075,0h-11.7a.59.59,0,0,0-.066,0,.69.69,0,0,0,.066,1.374h11.7a.69.69,0,1,0,.075-1.377Zm5.683,4.772,3.04,1.752L118.874,53.3Zm-17.519.117h0a.691.691,0,0,0,.066,1.379h11.7a.69.69,0,0,0,0-1.379h-11.7a.59.59,0,0,0-.066,0Zm3.269,5.172a2.081,2.081,0,0,0-1.548,1.009,6.415,6.415,0,0,0-.764,1.649,14.142,14.142,0,0,0-.514,2.231h0a.69.69,0,1,0,1.365.192,13.362,13.362,0,0,1,.463-1.995,5.37,5.37,0,0,1,.59-1.293c.217-.316.385-.407.489-.413.173-.01.194,0,.357.255a5.681,5.681,0,0,1,.493,1.227,11.775,11.775,0,0,0,.555,1.594,2.143,2.143,0,0,0,1.273,1.247,1.473,1.473,0,0,0,1.41-.427,3.9,3.9,0,0,0,.632-.993c.113-.228.2-.377.28-.525,0,.008,0,0,0,.01.123.208.262.519.423.85a4.78,4.78,0,0,0,.606,1.009,1.823,1.823,0,0,0,1.187.682,1.849,1.849,0,0,0,1.222-.357,4.848,4.848,0,0,0,.87-.753,9.359,9.359,0,0,0,.855-1.059h0a.692.692,0,0,0-1.151-.769,7.593,7.593,0,0,1-.708.886,3.727,3.727,0,0,1-.621.54.856.856,0,0,1-.326.142c-.07-.008-.133-.035-.264-.193a3.916,3.916,0,0,1-.428-.729c-.146-.3-.292-.632-.478-.947a1.707,1.707,0,0,0-.881-.835,1.1,1.1,0,0,0-.845.062,1.4,1.4,0,0,0-.474.443,6.223,6.223,0,0,0-.509.931,3.375,3.375,0,0,1-.4.663c-.031.033-.022.034-.022.042-.1-.031-.24-.159-.407-.51A11.885,11.885,0,0,1,107,57.3a6.174,6.174,0,0,0-.647-1.562,1.842,1.842,0,0,0-1.6-.892Z" transform="translate(-96.26 -26.25)"/>
                                                </svg>
                                              </div>
                                              <div className="inner-overbox">
                                                  <p className="mb-0 sub-head fs-5 l-sb">In process</p>
                                                  <h2 className="fs-1">100</h2>
                                              </div>
                                          </Stack>
                                      </div>
                                    </label>  
                                  </Col>
                              </Row>
                          </div>
                          <div className="main-booking-history-sec mt-3 new-appli-list">
                              <div className="head-top-sec">
                                  <Stack direction="horizontal" gap={4}>
                                  <h2 className="fs-3 mb-0">New Applications</h2>
                                  <div className="l-m filter-denld-btn red-color cursor-pointer ms-auto"  onClick={() => setShow(!show)}>Filter <HiOutlineFilter/></div>
                                  <div className="l-m filter-denld-btn red-color cursor-pointer">Download <FiDownload/></div>
                                  </Stack>
                              </div>
  
                              {show ? (
                                  <div className="main-filter">
                                      <Row>
                                          <Col xl={3} md={6} className="mb-4">
                                          <Form.Label className="l-sb">Name</Form.Label>
                                          <Form.Control placeholder="" type="text"/>
                                          </Col>
                                          <Col xl={3} md={6} className="mb-4">
                                          <Form.Label className="l-sb">Artists type</Form.Label>
                                          <Form.Control placeholder="" type="text"/>
                                          </Col>
                                          <Col xl={3} md={6} className="mb-4">
                                          <Form.Label className="l-sb">Application id</Form.Label>
                                          <Form.Control placeholder="" type="text"/>
                                          </Col>
                                          <Col xl={3} md={6} className="mb-4">
                                          <Form.Label className="l-sb">Date</Form.Label>
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