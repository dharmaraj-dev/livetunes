import React, {useState} from 'react';
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";
import { HiOutlineFilter } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Switch from "react-switch";

const InactiveArtists = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
        setChecked(nextChecked);
      };

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
                            <h4 className="l-b mb-3">Inactive Artists</h4>
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
                                        <Form.Label className="l-sb">Artists type</Form.Label>
                                        <Form.Control placeholder="" type="text"/>
                                        </Col>
                                        <Col xl={3} md={6} className="mb-4">
                                        <Form.Label className="l-sb">ID</Form.Label>
                                        <Form.Control placeholder="" type="text"/>
                                        </Col>
                                        <Col xl={3} md={6} className="mb-4">
                                        <Form.Label className="l-sb">Active Since</Form.Label>
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
                                    <th>ID</th>
                                    <th>Active Since</th>
                                    <th>Status</th>
                                    <th></th>
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
                                    <td>
                                    <Switch
                                        onChange={handleChange}
                                        checked={checked}
                                        className="react-switch"
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        onColor="#FD3743"
                                        boxShadow="#fff"
                                        activeBoxShadow="#fff"
                                    />
                                    <span className="l-r table-active-sec">Inactive</span>
                                    </td>
                                    {/* <td><Link to="/singleapplication"><div className="l-m filter-denld-btn red-color cursor-pointer"><GrView/></div></Link></td> */}
                                    <td><Link to="/partnerdetails"><div className="appro-reje-sec l-b text-center reject-sec">View</div></Link></td>
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
                                    <td>
                                    <Switch
                                        onChange={handleChange}
                                        checked={checked}
                                        className="react-switch"
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        onColor="#FD3743"
                                        boxShadow="#fff"
                                        activeBoxShadow="#fff"
                                    />
                                    <span className="l-r table-active-sec">Inactive</span>
                                    </td>
                                    {/* <td><Link to="/singleapplication"><div className="l-m filter-denld-btn red-color cursor-pointer"><GrView/></div></Link></td> */}
                                    <td><Link to="#"><div className="appro-reje-sec l-b text-center reject-sec">View</div></Link></td>
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
                                    <td>
                                    <Switch
                                        onChange={handleChange}
                                        checked={checked}
                                        className="react-switch"
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        onColor="#FD3743"
                                        boxShadow="#fff"
                                        activeBoxShadow="#fff"
                                    />
                                    <span className="l-r table-active-sec">Inactive</span>
                                    </td>
                                    {/* <td><Link to="/singleapplication"><div className="l-m filter-denld-btn red-color cursor-pointer"><GrView/></div></Link></td> */}
                                    <td><Link to="#"><div className="appro-reje-sec l-b text-center reject-sec">View</div></Link></td>
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
                                    <td>
                                    <Switch
                                        onChange={handleChange}
                                        checked={checked}
                                        className="react-switch"
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        onColor="#FD3743"
                                        boxShadow="#fff"
                                        activeBoxShadow="#fff"
                                    />
                                    <span className="l-r table-active-sec">Inactive</span>
                                    </td>
                                    {/* <td><Link to="/singleapplication"><div className="l-m filter-denld-btn red-color cursor-pointer"><GrView/></div></Link></td> */}
                                    <td><Link to="#"><div className="appro-reje-sec l-b text-center reject-sec">View</div></Link></td>
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
                                    <td>
                                    <Switch
                                        onChange={handleChange}
                                        checked={checked}
                                        className="react-switch"
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        onColor="#FD3743"
                                        boxShadow="#fff"
                                        activeBoxShadow="#fff"
                                    />
                                    <span className="l-r table-active-sec">Inactive</span>
                                    </td>
                                    {/* <td><Link to="/singleapplication"><div className="l-m filter-denld-btn red-color cursor-pointer"><GrView/></div></Link></td> */}
                                    <td><Link to="#"><div className="appro-reje-sec l-b text-center reject-sec">View</div></Link></td>
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
                                    <td>
                                    <Switch
                                        onChange={handleChange}
                                        checked={checked}
                                        className="react-switch"
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        onColor="#FD3743"
                                        boxShadow="#fff"
                                        activeBoxShadow="#fff"
                                    />
                                    <span className="l-r table-active-sec">Inactive</span>
                                    </td>
                                    {/* <td><Link to="/singleapplication"><div className="l-m filter-denld-btn red-color cursor-pointer"><GrView/></div></Link></td> */}
                                    <td><Link to="#"><div className="appro-reje-sec l-b text-center reject-sec">View</div></Link></td>
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
                                    <td>
                                    <Switch
                                        onChange={handleChange}
                                        checked={checked}
                                        className="react-switch"
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        onColor="#FD3743"
                                        boxShadow="#fff"
                                        activeBoxShadow="#fff"
                                    />
                                    <span className="l-r table-active-sec">Inactive</span>
                                    </td>
                                    {/* <td><Link to="/singleapplication"><div className="l-m filter-denld-btn red-color cursor-pointer"><GrView/></div></Link></td> */}
                                    <td><Link to="#"><div className="appro-reje-sec l-b text-center reject-sec">View</div></Link></td>
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
                                    <td>
                                    <Switch
                                        onChange={handleChange}
                                        checked={checked}
                                        className="react-switch"
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        onColor="#FD3743"
                                        boxShadow="#fff"
                                        activeBoxShadow="#fff"
                                    />
                                    <span className="l-r table-active-sec">Inactive</span>
                                    </td>
                                    {/* <td><Link to="/singleapplication"><div className="l-m filter-denld-btn red-color cursor-pointer"><GrView/></div></Link></td> */}
                                    <td><Link to="#"><div className="appro-reje-sec l-b text-center reject-sec">View</div></Link></td>
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
                                    <td>
                                    <Switch
                                        onChange={handleChange}
                                        checked={checked}
                                        className="react-switch"
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        onColor="#FD3743"
                                        boxShadow="#fff"
                                        activeBoxShadow="#fff"
                                    />
                                    <span className="l-r table-active-sec">Inactive</span>
                                    </td>
                                    {/* <td><Link to="/singleapplication"><div className="l-m filter-denld-btn red-color cursor-pointer"><GrView/></div></Link></td> */}
                                    <td><Link to="#"><div className="appro-reje-sec l-b text-center reject-sec">View</div></Link></td>
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
                                    <td>
                                    <Switch
                                        onChange={handleChange}
                                        checked={checked}
                                        className="react-switch"
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        onColor="#FD3743"
                                        boxShadow="#fff"
                                        activeBoxShadow="#fff"
                                    />
                                    <span className="l-r table-active-sec">Inactive</span>
                                    </td>
                                    {/* <td><Link to="/singleapplication"><div className="l-m filter-denld-btn red-color cursor-pointer"><GrView/></div></Link></td> */}
                                    <td><Link to="#"><div className="appro-reje-sec l-b text-center reject-sec">View</div></Link></td>
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
                                    <td>
                                    <Switch
                                        onChange={handleChange}
                                        checked={checked}
                                        className="react-switch"
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        onColor="#FD3743"
                                        boxShadow="#fff"
                                        activeBoxShadow="#fff"
                                    />
                                    <span className="l-r table-active-sec">Inactive</span>
                                    </td>
                                    {/* <td><Link to="/singleapplication"><div className="l-m filter-denld-btn red-color cursor-pointer"><GrView/></div></Link></td> */}
                                    <td><Link to="#"><div className="appro-reje-sec l-b text-center reject-sec">View</div></Link></td>
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
                                    <td>
                                    <Switch
                                        onChange={handleChange}
                                        checked={checked}
                                        className="react-switch"
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        onColor="#FD3743"
                                        boxShadow="#fff"
                                        activeBoxShadow="#fff"
                                    />
                                    <span className="l-r table-active-sec">Inactive</span>
                                    </td>
                                    {/* <td><Link to="/singleapplication"><div className="l-m filter-denld-btn red-color cursor-pointer"><GrView/></div></Link></td> */}
                                    <td><Link to="#"><div className="appro-reje-sec l-b text-center reject-sec">View</div></Link></td>
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
                                    <td>
                                    <Switch
                                        onChange={handleChange}
                                        checked={checked}
                                        className="react-switch"
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        onColor="#FD3743"
                                        boxShadow="#fff"
                                        activeBoxShadow="#fff"
                                    />
                                    <span className="l-r table-active-sec">Inactive</span>
                                    </td>
                                    {/* <td><Link to="/singleapplication"><div className="l-m filter-denld-btn red-color cursor-pointer"><GrView/></div></Link></td> */}
                                    <td><Link to="#"><div className="appro-reje-sec l-b text-center reject-sec">View</div></Link></td>
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

export default InactiveArtists