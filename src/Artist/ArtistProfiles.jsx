import React, { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Upload from "./Upload";
import Stack from 'react-bootstrap/Stack';

const ArtistProfiles = () => {
    const [options] =useState(['Singer','Guitarist','Tabla player','Drummer','Keyboard player']) ;
    const [options2] =useState(['Classical','Bollywood','Jazz','Bhajan','Rock']) ;
    const [options3] =useState(['English','Hindi','Panjabi','Gujrati','Tamil','Bangali','Malyalam','Nepali']) ;
    const [options4] =useState(['Weddings','Religious','Café Gigs','Music Festivals','Private Parties']) ;
    const [options5] =useState(['Valentines day','Mothers day','Fathers day','Propasal special','Independence day']) ;
    const [options6] =useState(['Google meets','zoom','discord']) ;
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
                    <div className="artist-main-profile-tophead mb-5">
                        <Stack direction="horizontal" gap={3}>
                        <p className="l-sb head fs-3 mb-0">General Settings</p>
                        <div className="ms-auto">
                            <button type="button" className="l-sb wbtnn back-btn btn btn-primary red-color">Cancel</button>
                            <button type="button" className="l-sb wbtnn back-btn btn btn-primary red-color ms-3">Save changes</button>
                        </div>
                        </Stack>
                        <hr className="mt-2 mb-2"/>
                        <p className="l-r sub-head">Update your Photo and personal details here</p>
                    </div>
                        <Row>
                            <Col lg={4}>
                                <Upload/>
                            </Col>
                            <Col lg={8}>
                            <div className="profile-text-sec artist-profile-text-sec">
                                <div className="head">
                                    <Stack direction="horizontal" gap={3}>
                                    <h2>Personal Information</h2>
                                    <h2 className="fs-6 ms-auto cursor-pointer red-color af-edit-sec">Edit</h2>
                                    </Stack>
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
                                    <Form.Label className="l-sb">Contact no.</Form.Label>
                                    <Form.Control placeholder="" type="text"/>
                                    </Col>
                                    <Col lg={6} md="12" className="mb-4">
                                    <Form.Label className="l-sb">Email</Form.Label>
                                    <Form.Control placeholder="" type="email"/>
                                    </Col>

                                    <Col lg={6} md="12" className="mb-4">
                                    <Form.Label className="l-sb">City*</Form.Label>
                                    <Form.Control placeholder="" type="text"/>
                                    </Col>

                                    <Col lg={6} md="12" className="mb-4">
                                    <Form.Label className="l-sb">State*</Form.Label>
                                    <Form.Control placeholder="" type="text"/>
                                    </Col>

                                    <Col lg={12} md="12" className="mb-4">
                                    <Form.Label className="l-sb">About me</Form.Label>
                                    <Form.Control as="textarea" placeholder="" type="text" style={{ height: '100px' }}/>
                                    </Col>
                                    
                                </Row>
                            </div>

                            <div className="profile-text-sec artist-profile-text-sec">
                                <div className="head">
                                    <Stack direction="horizontal" gap={3}>
                                    <h2>Social Links</h2>
                                    <h2 className="fs-6 ms-auto cursor-pointer red-color af-edit-sec">Edit</h2>
                                    </Stack>
                                </div>

                                <Row className="align-items-center">
                                    <Col lg={6} md="12" className="mb-4">
                                    <Form.Label className="l-sb">Fackbook</Form.Label>
                                    <Form.Control placeholder="" type="text"/>
                                    </Col>
                                    <Col lg={6} md="12" className="mb-4">
                                    <Form.Label className="l-sb">Instagram</Form.Label>
                                    <Form.Control placeholder="" type="text"/>
                                    </Col>

                                    <Col lg={6} md="12" className="mb-4">
                                    <Form.Label className="l-sb">Youtube</Form.Label>
                                    <Form.Control placeholder="" type="text"/>
                                    </Col>
                                    <Col lg={6} md="12" className="mb-4">
                                    <Form.Label className="l-sb">Others (websites/account)</Form.Label>
                                    <Form.Control placeholder="" type="text"/>
                                    </Col>
                                </Row>
                            </div>

                            <div className="profile-text-sec artist-profile-text-sec">
                                <div className="head">
                                    <Stack direction="horizontal" gap={3}>
                                    <h2>Performance details</h2>
                                    <h2 className="fs-6 ms-auto cursor-pointer red-color af-edit-sec">Edit</h2>
                                    </Stack>
                                </div>

                                <Row className="align-items-center select-multi">
                                    <Col lg={6} md="12" className="mb-4">
                                    <Form.Label className="l-sb">Category*</Form.Label>
                                    <Multiselect
                                    isObject={false}
                                    options= { options }
                                    showCheckbox
                                    showArrow
                                    className='l-l'
                                    placeholder="Select Categories"
                                    
                                    />
                                    </Col>
                                    <Col lg={6} md="12" className="mb-4">
                                    <Form.Label className="l-sb">Gerne*</Form.Label>
                                    <Multiselect
                                    isObject={false}
                                    options= { options2 }
                                    showCheckbox
                                    showArrow
                                    className='l-l'
                                    placeholder="Select performance gerne"
                                    
                                    />
                                    </Col>
                                    <Col lg={6} md="12" className="mb-4">
                                    <Form.Label className="l-sb">Languages*</Form.Label>
                                    <Multiselect
                                    isObject={false}
                                    options= { options3 }
                                    showCheckbox
                                    showArrow
                                    className='l-l'
                                    placeholder="Select Categories"
                                    
                                    />
                                    </Col>

                                    <Col lg={6} md="12" className="mb-4">
                                    <Form.Label className="l-sb">Professional Experience (in years)</Form.Label>
                                    <Form.Control placeholder="Years" type="text"/>
                                    </Col>
                                    
                                    <Col lg={12} md="12" className="mb-4">
                                    <Form.Label className="l-sb">Prefered events*</Form.Label>
                                    <Multiselect
                                    isObject={false}
                                    options= { options4 }
                                    showCheckbox
                                    showArrow
                                    className='l-l'
                                    placeholder="Events"
                                    
                                    />
                                    </Col>
                                
                                    <Col lg={6} md="12" className="mb-4">
                                    <Form.Label className="l-sb">Willing to travel to other states for live events*</Form.Label>
                                    <div className="profile-gender mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Yes
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            No
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                            Yes, except
                                            </label>
                                        </div>
                                    </div>
                                    <Form.Select aria-label="Default select example" className="form-control">
                                        <option>Specify State</option>
                                        <option value="1">Nagpur</option>
                                        <option value="2">Mumbai</option>
                                        <option value="3">Pune</option>
                                    </Form.Select>
                                    </Col>

                                    <Col lg={6} md="12" className="mb-4">
                                    <Form.Label className="l-sb">Preferred performance duration*</Form.Label>
                                    <div className="profile-gender mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                            1Hr
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault5">
                                            2Hrs
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault6">
                                            more than 2 hrs
                                            </label>
                                        </div>
                                    </div>
                                    <Form.Control placeholder="Specify duration if more than 2 hrs" type="text"/>
                                    </Col>

                                    <Col lg={6} md="12" className="mb-4">
                                    <Form.Label className="l-sb">Performance charges (set you charges)*</Form.Label>
                                    <div className="profile-gender mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexCheckboxDefault" id="flexCheckboxDefault1" />
                                            <label className="form-check-label" htmlFor="flexCheckboxDefault1">
                                            per show
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexCheckboxDefault" id="flexCheckboxDefault2" />
                                            <label className="form-check-label" htmlFor="flexCheckboxDefault2">
                                            Per hour
                                            </label>
                                        </div>
                                    </div>
                                    <Stack direction="horizontal" gap={3}>
                                    <Form.Control placeholder="From ₹/show" type="text"/>
                                    <Form.Control placeholder="To ₹/hour" type="text"/>
                                    </Stack>
                                    </Col>

                                    <Col lg={6} md="12" className="mb-4">
                                    <Form.Label className="l-sb">Available for Private surprise events</Form.Label>
                                    <div className="profile-gender mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault9" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault9">
                                            Yes
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault10" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault10">
                                            No
                                            </label>
                                        </div>
                                    </div>
                                    <Multiselect
                                    isObject={false}
                                    options= { options6 }
                                    showCheckbox
                                    showArrow
                                    className='l-l'
                                    placeholder="Select prefered mode"
                                    
                                    />
                                    </Col>

                                    <Col lg={6} md="12" className="mb-4">
                                    <Form.Label className="l-sb">Available for virtual events</Form.Label>
                                    <div className="profile-gender mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault7" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault7">
                                            Yes
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault8" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault8">
                                            No
                                            </label>
                                        </div>
                                    </div>
                                    <Multiselect
                                    isObject={false}
                                    options= { options5 }
                                    showCheckbox
                                    showArrow
                                    className='l-l'
                                    placeholder="Select event type"
                                    
                                    />
                                    </Col>

                                    <Col lg={6} md="12" className="mb-4">
                                    <Form.Label className="l-sb">About you (Your bio, any achievements,etc)</Form.Label>
                                    <Form.Control as="textarea" placeholder="Opened for a Luck ali Live concert, held in Nagpur" style={{ height: '90px' }}        />
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

export default ArtistProfiles