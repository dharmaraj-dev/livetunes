import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import ArtistProfile from "./ArtistProfile";
import { Link } from "react-router-dom";

const PerformanceDetails = () => {
  return (
    <>
        <ArtistProfile>
        <div className="profile-text-sec artist-profile-text-sec">
            <div className="head">
                <h2>Hi, Please fill your performance details</h2>
            </div>

            <Row className="align-items-center">
                <Col lg={6} md="12" className="mb-4">
                <Form.Label className="l-sb">Category*</Form.Label>
                <Form.Select aria-label="Default select example" className="form-control">
                    <option>Select city</option>
                    <option value="1">Nagpur</option>
                    <option value="2">Mumbai</option>
                    <option value="3">Pune</option>
                </Form.Select>
                </Col>
                <Col lg={6} md="12" className="mb-4">
                <Form.Label className="l-sb">Gerne*</Form.Label>
                <Form.Control placeholder="" type="text"/>
                </Col>
                <Col lg={6} md="12" className="mb-4">
                <Form.Label className="l-sb">Languages*</Form.Label>
                <Form.Control placeholder="" type="text"/>
                </Col>

                <Col lg={6} md="12" className="mb-4">
                <Form.Label className="l-sb">Professional Experience (in years)</Form.Label>
                <Form.Control placeholder="" type="text"/>
                </Col>
                
                <Col lg={12} md="12" className="mb-4">
                <Form.Label className="l-sb">Prefered events*</Form.Label>
                <Form.Control placeholder="" type="email"/>
                </Col>
               
                <Col lg={12} md="12" className="mt-4">
                    <Stack direction="horizontal" gap={3}>
                        <div>
                        <Link to="/personalinfo">
                        <button type="button" className="l-b wbtnn back-btn btn btn-primary">Back</button>
                        </Link>
                        </div>
                        <div className="ms-auto">
                        <button type="button" className="l-b btnn btn btn-primary ">NEXT</button>
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