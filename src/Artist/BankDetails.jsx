import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";
import BankDetailContainer from "./BankDetailContainer";

const BankDetails = () => {
  return (
    <>
        <BankDetailContainer>
        <div className="profile-text-sec artist-profile-text-sec">
            <div className="head">
                <h2>Please, Fill your bank details</h2>
            </div>

            <Row className="align-items-center">
                <Col lg={12} md="12" className="mb-4">
                <Form.Label className="l-sb">Account number*</Form.Label>
                <Form.Control placeholder="Your Bank account no." type="text"/>
                </Col>

                <Col lg={6} md="12" className="mb-4">
                <Form.Label className="l-sb">Bank name*</Form.Label>
                <Form.Select aria-label="Default select example" className="form-control">
                    <option>Select Bank</option>
                    <option value="1">Nagpur</option>
                    <option value="2">Mumbai</option>
                    <option value="3">Pune</option>
                </Form.Select>
                </Col>

                <Col lg={6} md="12" className="mb-4">
                <Form.Label className="l-sb">Branch name*</Form.Label>
                <Form.Select aria-label="Default select example" className="form-control">
                    <option>Select branch</option>
                    <option value="1">Nagpur</option>
                    <option value="2">Mumbai</option>
                    <option value="3">Pune</option>
                </Form.Select>
                </Col>

                <Col lg={6} md="12" className="mb-4">
                <Form.Label className="l-sb">IFSC Code</Form.Label>
                <Form.Control placeholder="Auto detect" type="text"/>
                </Col>

                <Col lg={6} md="12" className="mb-4">
                <Form.Label className="l-sb">UPI ID</Form.Label>
                <Form.Control placeholder="eg: namead@oksbi" type="text"/>
                </Col>

                <Col lg={12} md="12" className="mt-4">
                    <Stack direction="horizontal" gap={3}>
                        <div>
                        {/* <button type="button" className="l-b wbtnn back-btn btn btn-primary">Back</button> */}
                        </div>
                        <div className="ms-auto">
                        <Link to="/photoid">
                        <button type="button" className="l-b btnn btn btn-primary ">SUBMIT</button>
                        </Link>
                        </div>
                    </Stack>
                </Col>
            </Row>
        </div>
        </BankDetailContainer>
    </>
  )
}

export default BankDetails