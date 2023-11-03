import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";
import BankDetailContainer from "./BankDetailContainer";
import { AiOutlinePlus } from "react-icons/ai";

const AddressProof = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <>
        <BankDetailContainer>
        <div className="profile-text-sec artist-profile-text-sec">
            <div className="head">
                <h2>Please provide permanent address proof</h2>
            </div>

            <Row className="">
                <Col lg={12} md="12" className="mb-4">
                <Form.Label className="l-sb">Address line*</Form.Label>
                <Form.Control placeholder="Address" type="text"/>
                </Col>

                <Col lg={6} md="12" className="mb-4">
                <Form.Label className="l-sb">City*</Form.Label>
                <Form.Select aria-label="Default select example" className="form-control">
                    <option>City name</option>
                    <option value="1">Navi mumbai</option>
                    <option value="2">Nagpur</option>
                    <option value="3">Nashik</option>
                </Form.Select>
                </Col>

                <Col lg={6} md="12" className="mb-4">
                <Form.Label className="l-sb">Address proof*</Form.Label>
                <Form.Select aria-label="Default select example" className="form-control">
                    <option>Address proof</option>
                    <option value="1">Pan card</option>
                    <option value="2">Aadhar card</option>
                    <option value="3">Driving liscense</option>
                </Form.Select>
                </Col>
            </Row>

            <Row>
                <Col lg={6} md="12" className="mb-4">

                <Col lg={12} md="12" className="">
                <Form.Label className="l-sb">State</Form.Label>
                <Form.Select aria-label="Default select example" className="form-control">
                    <option>State</option>
                    <option value="1">Maharashtra</option>
                    <option value="2">MP</option>
                    <option value="3">DL</option>
                </Form.Select>
                </Col>
                <Col lg={12} md="12" className="mt-4">
                <Form.Label className="l-sb">Pincode*</Form.Label>
                <Form.Control placeholder="Address" type="text"/>
                </Col>

                </Col>

                <Col lg={6} md="12" className="mb-4">

                    <Col lg={12} md="12" className="">
                    <div className="main-id-img-sec">
                        <div className="id-img-sec">
                            <img src={file} className="w-100" alt={file}/>
                        </div>
                        <div className="id-img-upload text-center">
                            <input type="file"  id="upload" hidden onChange={handleChange} />
                            <label for="upload"><AiOutlinePlus/></label>
                        </div>
                        <div className="img-note">(add the scanned copy of id proof in .pdf or .jpg format)</div>
                    </div>
                    </Col>

                </Col>
            </Row>    

            <Row>

                <Col lg={12} md="12" className="mt-4">
                    <Stack direction="horizontal" gap={3}>
                        <div>
                        <Link to="/photoid">
                        <button type="button" className="l-b wbtnn back-btn btn btn-primary">Back</button>
                        </Link>
                        </div>
                        <div className="ms-auto">
                        <Link to="">
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

export default AddressProof