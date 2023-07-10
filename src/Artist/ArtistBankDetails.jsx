import React, { useState } from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getCities, getStates } from "../actions/common";
import { successToast, errorToast } from "../services/toast-service";

const ArtistBankDetails = () => {
    const dispatch = useDispatch();

    const { banks, branches } = useSelector(state => state.common);

    const [currentStep, setCurrentStep] = useState(1);

    //steo 1
    const [accountNo, setAccountNo] = useState("");
    const [bankId, setBankId] = useState("");
    const [branchId, setBranchId] = useState("");
    const [ifscCode, setIfscCode] = useState("");
    const [upiId, setUpiId] = useState("");




    const [phone, setPhone] = useState("");
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const nextStep = (step) => {
        if (step === 2) {
            //check step 1 validations and submit step 1 api 
            setCurrentStep(step);
        } else if (step === 3) {
            //check step 2 validations and submit step 2 api 
            setCurrentStep(step);
        } else if (step === 4) {
            //check step 3 validations and submit step 3 api 
            setCurrentStep(step);
        } else if (step === 5) {
            //check step 5 validations and submit step 5 api 
            setCurrentStep(step);
        }
    }

    const prevStep = (step) => {
        setCurrentStep(step);
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
                    <section className="steps-progressbar">
                        <ol className="steps l-b">
                            <li className={`step ${currentStep > 1 ? 'is-active' : ''} ${currentStep === 1 ? 'active' : ''}`} data-step="1">
                             Bank details
                            </li>
                            <li className={`step ${currentStep > 2 ? 'is-active' : ''} ${currentStep === 2 ? 'active' : ''}`} data-step="2">
                             Photo Id proof
                            </li>
                            <li className={`step ${currentStep > 3 ? 'is-active' : ''} ${currentStep === 3 ? 'active' : ''}`} data-step="3">
                             Address proof
                            </li>
                            <li className={`step ${currentStep > 4 ? 'is-active' : ''} ${currentStep === 4 ? 'active' : ''}`} data-step="4">
                             Add References
                            </li>
                        </ol>
                    </section>
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                                {currentStep == 1 && (
                                    <div className="profile-text-sec artist-profile-text-sec">
                                        <div className="head">
                                            <h2>Please, Fill your bank details</h2>
                                        </div>

                                        <Row className="align-items-center">
                                            <Col lg={12} md="12" className="mb-4">
                                            <Form.Label className="l-sb">Account number*</Form.Label>
                                            <Form.Control placeholder="Your Bank account no." type="text" onChange={(e) => setAccountNo(e.target.value)}/>
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
                                                    <button type="button" className="l-b btnn btn btn-primary" onClick={() => nextStep(2)}>SUBMIT</button>
                                                    </div>
                                                </Stack>
                                            </Col>
                                        </Row>
                                    </div>
                                )}
                                {currentStep == 2 && (
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
                                                    <button type="button" className="l-b wbtnn back-btn btn btn-primary" onClick={() => prevStep(1)}>Back</button>
                                                    </div>
                                                    <div className="ms-auto">
                                                    <button type="button" className="l-b btnn btn btn-primary" onClick={() => nextStep(3)}>SUBMIT</button>
                                                    </div>
                                                </Stack>
                                            </Col>
                                        </Row>
                                    </div>
                                )}
                                {currentStep == 3 && (
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
                                                    <button type="button" className="l-b wbtnn back-btn btn btn-primary" onClick={() => prevStep(2)}>Back</button>
                                                    </div>
                                                    <div className="ms-auto">
                                                    <button type="button" className="l-b btnn btn btn-primary" onClick={() => nextStep(4)}>SUBMIT</button>
                                                    </div>
                                                </Stack>
                                            </Col>
                                        </Row>
                                    </div>
                                )}
                                {currentStep == 4 && (
                                    <div className="profile-text-sec artist-profile-text-sec">
                                        <div className="head">
                                            <h2>Please provide reference information (2 references required)</h2>
                                        </div>

                                        <Row className="">
                                            <Col lg={6} md="6" className="mb-4">
                                                <Form.Label className="l-sb">First Name*</Form.Label>
                                                <Form.Control placeholder="First Name" type="text"/>
                                            </Col>
                                            <Col lg={6} md="6" className="mb-4">
                                                <Form.Label className="l-sb">Last Name*</Form.Label>
                                                <Form.Control placeholder="Last Name" type="text"/>
                                            </Col>
                                            <Col lg={6} md="6" className="mb-4">
                                                <Form.Label className="l-sb">Contact No*</Form.Label>
                                                <PhoneInput
                                                    className="l-r"
                                                    country={"in"}
                                                    enableSearch={true}
                                                    value={phone}
                                                    placeholder={9999999999}
                                                    onChange={(phone) => setPhone(phone)}
                                                  />
                                            </Col>
                                            <Col lg={6} md="6" className="mb-4">
                                                <Form.Label className="l-sb">Email*</Form.Label>
                                                <Form.Control placeholder="Email" type="email"/>
                                            </Col>
                                            <Col lg={6} md="6" className="mb-4">
                                                <Form.Label className="l-sb">City*</Form.Label>
                                                <Form.Select aria-label="Default select example" className="form-control">
                                                    <option>City name</option>
                                                    <option value="1">Navi mumbai</option>
                                                    <option value="2">Nagpur</option>
                                                    <option value="3">Nashik</option>
                                                </Form.Select>
                                            </Col>
                                            <Col lg={6} md="6" className="mb-4">
                                                <Form.Label className="l-sb">State</Form.Label>
                                                <Form.Select aria-label="Default select example" className="form-control">
                                                    <option>State</option>
                                                    <option value="1">Maharashtra</option>
                                                    <option value="2">MP</option>
                                                    <option value="3">DL</option>
                                                </Form.Select>
                                            </Col>
                                            <Col lg={6} md="12" className="mb-4">
                                                <Form.Label className="l-sb">Date of birth</Form.Label>
                                                <Form.Control type="date"/>
                                            </Col>
                                            <Col lg={6} md="12" className="mb-4">
                                                <Form.Label className="l-sb">Relationship with the person*</Form.Label>
                                                <Form.Control placeholder="Uncle" type="text"/>
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row className="">
                                            <Col lg={6} md="6" className="mb-4">
                                                <Form.Label className="l-sb">First Name*</Form.Label>
                                                <Form.Control placeholder="First Name" type="text"/>
                                            </Col>
                                            <Col lg={6} md="6" className="mb-4">
                                                <Form.Label className="l-sb">Last Name*</Form.Label>
                                                <Form.Control placeholder="Last Name" type="text"/>
                                            </Col>
                                            <Col lg={6} md="6" className="mb-4">
                                                <Form.Label className="l-sb">Contact No*</Form.Label>
                                                <PhoneInput
                                                    className="l-r"
                                                    country={"in"}
                                                    enableSearch={true}
                                                    value={phone}
                                                    placeholder={9999999999}
                                                    onChange={(phone) => setPhone(phone)}
                                                  />
                                            </Col>
                                            <Col lg={6} md="6" className="mb-4">
                                                <Form.Label className="l-sb">Email*</Form.Label>
                                                <Form.Control placeholder="Email" type="email"/>
                                            </Col>
                                            <Col lg={6} md="6" className="mb-4">
                                                <Form.Label className="l-sb">City*</Form.Label>
                                                <Form.Select aria-label="Default select example" className="form-control">
                                                    <option>City name</option>
                                                    <option value="1">Navi mumbai</option>
                                                    <option value="2">Nagpur</option>
                                                    <option value="3">Nashik</option>
                                                </Form.Select>
                                            </Col>
                                            <Col lg={6} md="6" className="mb-4">
                                                <Form.Label className="l-sb">State</Form.Label>
                                                <Form.Select aria-label="Default select example" className="form-control">
                                                    <option>State</option>
                                                    <option value="1">Maharashtra</option>
                                                    <option value="2">MP</option>
                                                    <option value="3">DL</option>
                                                </Form.Select>
                                            </Col>
                                            <Col lg={6} md="12" className="mb-4">
                                                <Form.Label className="l-sb">Date of birth</Form.Label>
                                                <Form.Control type="date"/>
                                            </Col>
                                            <Col lg={6} md="12" className="mb-4">
                                                <Form.Label className="l-sb">Relationship with the person*</Form.Label>
                                                <Form.Control placeholder="Uncle" type="text"/>
                                            </Col>
                                        </Row>


                                        <Row>

                                            <Col lg={12} md="12" className="mt-4">
                                                <Stack direction="horizontal" gap={3}>
                                                    <div>
                                                    <button type="button" className="l-b wbtnn back-btn btn btn-primary" onClick={() => prevStep(3)}>Back</button>
                                                    </div>
                                                    <div className="ms-auto">
                                                    <button type="button" className="l-b btnn btn btn-primary" onClick={() => nextStep(5)}>SUBMIT</button>
                                                    </div>
                                                </Stack>
                                            </Col>
                                        </Row>
                                    </div>
                                )}
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </div>
                </Container>
            </div>
            </div>
        </div>
    </>
  )
}

export default ArtistBankDetails