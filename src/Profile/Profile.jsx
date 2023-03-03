import React, { useState } from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const Profile = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
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
                            <Col lg={4}>
                                <div className="profile-upload-sec">
                                    <div className="inner-profile-upload-sec">
                                        {/* <img src={Profileupload} alt="" className="w-100"/> */}
                                        <img src={file} className="w-100" alt="img "/>
                                    </div>
                                    <div class="upload-btn-sec">
                                        {/* <input type="file" id="upload" hidden/> */}
                                        <input type="file"  id="upload" hidden onChange={handleChange} />
                                        <label for="upload"><AiOutlinePlus/></label>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="profile-text-sec">
                                    <Stack direction="horizontal" gap={3}>
                                    <div className=""><h2>My Profile</h2></div>
                                    <div className="l-b ms-auto edit-profile"> <FiEdit className="me-2"/> EDIT PROFILE</div>
                                    </Stack>    

                                    <div className="head">
                                        <h2>General information</h2>
                                    </div>

                                    <Row className="align-items-center">
                                        <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">First Name</Form.Label>
                                        <Form.Control placeholder="" type="text"/>
                                        </Col>
                                        <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">Last Name</Form.Label>
                                        <Form.Control placeholder="" type="text"/>
                                        </Col>
                                        <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">Date of birth</Form.Label>
                                        <Form.Control placeholder="" type="text"/>
                                        </Col>
                                        <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">Gender</Form.Label>
                                            <div className="profile-gender">
                                            <Form.Check 
                                                type="radio"
                                                id=""
                                                label="Male"
                                            />
                                            <Form.Check 
                                                type="radio"
                                                id=""
                                                label="Female"
                                            />
                                            <Form.Check 
                                                type="radio"
                                                id=""
                                                label="Other"
                                            />
                                            </div>
                                        </Col>
                                        <Col lg={12} md="12" className="mb-4">
                                        <Form.Label className="l-sb">Default address</Form.Label>
                                        <Form.Control placeholder="" type="text"/>
                                        </Col>
                                    </Row>
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

export default Profile