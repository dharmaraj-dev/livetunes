import React, { useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import ArtistProfile from "./ArtistProfile";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCities, getStates } from "../actions/common";
import { successToast, errorToast } from "../services/toast-service";


const PersonalInfo = () => {
    const dispatch = useDispatch();

    const { cities, states } = useSelector(state => state.common);

    useEffect(() => {
        console.log('cities', cities);
        dispatch(getStates());
        dispatch(getCities())
        .then((res) => {
          console.log('res', res);
        })
        .catch((err) => {
          console.log('err', err);
        });
    }, [])
   
  return (
    <>
        <ArtistProfile>
        <div className="profile-text-sec artist-profile-text-sec">
            <div className="head">
                <h2>Hi, complete your profile to be more discoverable.</h2>
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
                <Form.Select aria-label="Default select example" className="form-control">
                    <option>Select city</option>
                    <option value="1">Nagpur</option>
                    <option value="2">Mumbai</option>
                    <option value="3">Pune</option>
                </Form.Select>
                </Col>
                <Col lg={6} md="12" className="mb-4">
                <Form.Label className="l-sb">State*</Form.Label>
                <Form.Select aria-label="Default select example" className="form-control">
                    <option>Select state</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </Col>


                <Col lg={6} md="12" className="mb-4">
                <Form.Label className="l-sb">Date of birth</Form.Label>
                <Form.Control placeholder="" type="text"/>
                </Col>
                <Col lg={6} md="12" className="mb-4">
                <Form.Label className="l-sb">Gender</Form.Label>
                <div className="profile-gender mb-3">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault9" />
                        <label className="form-check-label" htmlFor="flexRadioDefault9">
                        Male
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault10" />
                        <label className="form-check-label" htmlFor="flexRadioDefault10">
                        Female
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault11" />
                        <label className="form-check-label" htmlFor="flexRadioDefault11">
                        Other
                        </label>
                    </div>

                </div>
                </Col>
                <Col lg={12} md="12" className="mt-4">
                    <Stack direction="horizontal" gap={3}>
                        <div>
                        {/* <button type="button" className="l-b wbtnn back-btn btn btn-primary">Back</button> */}
                        </div>
                        <div className="ms-auto">
                        <Link to="/personalinfodetail">
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

export default PersonalInfo