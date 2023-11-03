import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";
import BankDetailContainer from "./BankDetailContainer";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

const PhotoId = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <>
        <BankDetailContainer>
        <div className="profile-text-sec artist-profile-text-sec">
            <div className="head">
                <h2>Please complete the verification process, to complete the process add a Photo id proof</h2>
            </div>

            <Row className="">
                <Col lg={6} md="12" className="mb-4">
                <Form.Label className="l-sb">Select id*</Form.Label>
                <Form.Select aria-label="Default select example" className="form-control">
                    <option>Select id type</option>
                    <option value="1">Pan card</option>
                    <option value="2">Aadhar card</option>
                    <option value="3">Driving liscense</option>
                </Form.Select>
                </Col>

                <Col lg={6} md="12" className="mb-4">
                <Form.Label className="l-sb">Id no.</Form.Label>
                <Form.Control placeholder="Your Bank account no." type="text"/>
                </Col>


                <Col lg={6} md="12" className="mb-4">
                <Form.Label className="l-sb">Do you have a Passport</Form.Label>
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

                    <div className="d-flex gap-2 main-note-text">
                        <div className=""><AiOutlineExclamationCircle/></div>
                        <div className="note-text">Passport id is required for international events, if you do not have a passport yet you can provide the no. afterwards.</div>
                    </div>
                </Col>

                <Col lg={6} md="12" className="mb-4">
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

                <Col lg={12} md="12" className="mb2">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="flexCheckboxDefault" id="flexCheckboxDefault11" />
                    <label className="form-check-label" htmlFor="flexCheckboxDefault11">
                    I agree to provide my passport id with 1 month of my membership
                    </label>
                </div>
                </Col>

                <Col lg={12} md="12" className="mt-5">
                    <Stack direction="horizontal" gap={3}>
                        <div>
                        <Link to="/bankdetails">
                        <button type="button" className="l-b wbtnn back-btn btn btn-primary">Back</button>
                        </Link>
                        </div>
                        <div className="ms-auto">
                        <Link to="/addressproof">
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

export default PhotoId