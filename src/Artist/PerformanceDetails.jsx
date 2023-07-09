import React, { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import ArtistProfile from "./ArtistProfile";
import { Link } from "react-router-dom";

const PerformanceDetails = () => {
    const [options] =useState(['Singer','Guitarist','Tabla player','Drummer','Keyboard player']) ;
    const [options2] =useState(['Classical','Bollywood','Jazz','Bhajan','Rock']) ;
    const [options3] =useState(['English','Hindi','Panjabi','Gujrati','Tamil','Bangali','Malyalam','Nepali']) ;
    const [options4] =useState(['Weddings','Religious','Café Gigs','Music Festivals','Private Parties']) ;
    const [options5] =useState(['Valentines day','Mothers day','Fathers day','Propasal special','Independence day']) ;
    const [options6] =useState(['Google meets','zoom','discord']) ;
  return (
    <>
        <ArtistProfile>
        <div className="profile-text-sec artist-profile-text-sec">
            <div className="head">
                <h2>Hi, Please fill your performance details</h2>
            </div>

            <Row className="align-items-center select-multi">
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
                options= { options5  }
                showCheckbox
                showArrow
                className='l-l'
                placeholder="Select event type"
                
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
                options= { options4 }
                showCheckbox
                showArrow
                className='l-l'
                placeholder="Select prefered mode"
                
                />
                </Col>

                <Col lg={6} md="12" className="mb-4">
                <Form.Label className="l-sb">About you (Your bio, any achievements,etc)</Form.Label>
                <Form.Control as="textarea" placeholder="Opened for a Luck ali Live concert, held in Nagpur" style={{ height: '90px' }}        />
                </Col>


                <Col lg={12} md="12" className="mt-4">
                    <Stack direction="horizontal" gap={3}>
                        <div>
                        <Link to="/personalinfo">
                        <button type="button" className="l-b wbtnn back-btn btn btn-primary">Back</button>
                        </Link>
                        </div>
                        <div className="ms-auto">
                        <Link to="/socialmedia">
                        <button type="button" className="l-b btnn btn btn-primary ">NEXT</button>
                        </Link>
                        </div>
                    </Stack>
                </Col>

            </Row>
        </div>
        </ArtistProfile>
    </>
  )
}

export default PerformanceDetails