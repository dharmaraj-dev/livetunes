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
import { getBranchesByBank, getCitiesOfState } from "../actions/common";
import { setBankDetails, setPhotoIdProof, setAddressProof, setReferences } from "../actions/artist";
import { successToast, errorToast } from "../services/toast-service";

const ArtistBankDetails = () => {
    const dispatch = useDispatch();

    const { banks, branches, cities, states, idProofs, addressProofs } = useSelector(state => state.common);

    const [currentStep, setCurrentStep] = useState(1);

    //steo 1
    const [accountNo, setAccountNo] = useState("");
    const [bankId, setBankId] = useState("");
    const [branchId, setBranchId] = useState("");
    const [ifscCode, setIfscCode] = useState("");
    const [upiId, setUpiId] = useState("");
    const [step1Loading, setStep1Loading] = useState(false);

    //step 2
    const [photoIdProofType, setPhotoIdProofType] = useState("");
    const [photoIdProofId, setPhotoIdProofId] = useState("");
    const [havePassport, setHavePassport] = useState(false);
    const [filePhotoFront, setFilePhotoFront] = useState("");
    const [filePhotoBack, setFilePhotoBack] = useState("");
    const [agreeMembership, setAgreeMembership] = useState(true);
    const [step2Loading, setStep2Loading] = useState(false);

    //step 3
    const [address, setAddress] = useState("");
    const [cityId, setCityId] = useState("");
    const [stateId, setStateId] = useState("");
    const [addressProod, setAddressProod] = useState("");
    const [pincode, setPincode] = useState("");
    const [fileAddressFront, setFileAddressFront] = useState("");
    const [fileAddressBack, setFileAddressBack] = useState("");
    const [step3Loading, setStep3Loading] = useState(false);

    //step 4
    const [ref1FName, setRef1FName] = useState("");
    const [ref1LName, setRef1LName] = useState("");
    const [ref1ContNo, setRef1ContNo] = useState("");
    const [ref1Email, setRef1Email] = useState("");
    const [ref1StateId, setRef1StateId] = useState("");
    const [ref1CityId, setRef1CityId] = useState("");
    const [ref1Dob, setRef1Dob] = useState("");
    const [ref1Relation, setRef1Relation] = useState("");
    const [step4Loading, setStep4Loading] = useState(false);




    const [phone, setPhone] = useState("");
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const bankChange = (bId) => {
        setBankId(bId);
        setBranchId("");
        dispatch(getBranchesByBank(bId));
    }

    const selectStateAndGetItsCities = (sId) => {
        if(sId !== "") {
            dispatch(getCitiesOfState(sId));
        }
    }

    const nextStep = (step) => {
        if (currentStep === 1) {
            if(accountNo === "") {
                errorToast("Account No is required.");
                return false;
            } else if(bankId === "") {
                errorToast("Bank is required.");
                return false;
            } else if(branchId === "") {
                errorToast("Branch is required.");
                return false;
            }
            setStep1Loading(true);
            const data = {
                AccNo: accountNo,
                BankId: bankId,
                BranchId: branchId,
                IFSCCode: ifscCode,
                UPIId: upiId
            };
            setStep1Loading(true);
            dispatch(setBankDetails(data)).then((response) => {
                if(response.data.IsSuccess) {
                    successToast(response.data.Message);
                    setCurrentStep(step);
                } else {
                    errorToast(response.data.Message);
                }
                setStep1Loading(false);
            }).catch((err) => {
                setStep1Loading(false);
                errorToast(err.message);
            });
        }
        else if (currentStep === 2) {
            if(photoIdProofType === "") {
               errorToast("Photo ID type is required."); 
               return false;
           } else if(photoIdProofId === "") {
               errorToast("ID No. is required."); 
               return false;
           } else if(havePassport === 1) {
                if(!agreeMembership) {
                    errorToast("I Agree for membership is required.");
                    return false;
                }
            }
            setStep2Loading(true);
            const data = {
                IdNo: photoIdProofType,
                IdProofId: photoIdProofId,
                IsPassportAvail: agreeMembership
                
            };
            setStep2Loading(true);
            dispatch(setPhotoIdProof(data)).then((response) => {
                if(response.data.IsSuccess) {
                    successToast(response.data.Message);
                    setCurrentStep(step);
                } else {
                    errorToast(response.data.Message);
                }
                setStep2Loading(false);
            }).catch((err) => {
                setStep2Loading(false);
                errorToast(err.message);
            });
        }
        else if (currentStep === 3) {
            if(address === "") {
               errorToast("Address is required."); 
               return false;
           } else if(stateId === "") {
               errorToast("State is required."); 
               return false;
           } else if(addressProod === "") {
               errorToast("Address Prood Type is required."); 
               return false;
           } else if(cityId === "") {
               errorToast("City is required."); 
               return false;
           } else if(pincode === "") {
               errorToast("Pincode is required."); 
               return false;
           }
            setStep3Loading(true);
            const data = {
                AddressProofId: addressProod,
                Address1: address,
                StateId: stateId,
                CityId: cityId,
                PinCode: pincode
            };
            setStep3Loading(true);
            dispatch(setAddressProof(data)).then((response) => {
                if(response.data.IsSuccess) {
                    successToast(response.data.Message);
                    setCurrentStep(step);
                } else {
                    errorToast(response.data.Message);
                }
                setStep3Loading(false);
            }).catch((err) => {
                setStep3Loading(false);
                errorToast(err.message);
            });
        }
        else if (currentStep === 4) {
            if(ref1FName === "") {
               errorToast("First Name is required."); 
               return false;
           } else if(ref1LName === "") {
               errorToast("Last Name is required."); 
               return false;
           } else if(ref1ContNo === "") {
               errorToast("Contact No is required."); 
               return false;
           } else if(ref1Email === "") {
               errorToast("Email is required."); 
               return false;
           } else if(ref1StateId === "") {
               errorToast("State is required."); 
               return false;
           } else if(ref1CityId === "") {
               errorToast("City is required."); 
               return false;
           } else if(ref1Relation === "") {
               errorToast("Relationship with referrence is required."); 
               return false;
           }
            setStep4Loading(true);
            const data = {
                FirstName: ref1FName,
                LastName: ref1LName,
                ContactNo: ref1ContNo,
                EmailId: ref1Email,
                StateId: ref1StateId,
                CityId: ref1CityId,
                DOB: ref1Dob,
                RWReference: ref1Relation
            };
            setStep4Loading(true);
            dispatch(setReferences(data)).then((response) => {
                if(response.data.IsSuccess) {
                    successToast(response.data.Message);
                    setCurrentStep(step);
                } else {
                    errorToast(response.data.Message);
                }
                setStep4Loading(false);
            }).catch((err) => {
                setStep4Loading(false);
                errorToast(err.message);
            });
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
                                            <Form.Label className="l-sb">Bank name<sup className="red-color">*</sup></Form.Label>
                                            <Form.Select aria-label="Default select example" className="form-control"
                                            value={bankId} onChange={(e) => {bankChange(e.target.value)}}>
                                                <option>Select Bank</option>
                                                {banks?.filter((key) => !key.IsCancelled).map((bank, index) => {
                                                    return (<option key={`${bank.BankId}'_'${bank.BankName}`} value={bank.BankId}>{bank.BankName}</option>)
                                                })}
                                            </Form.Select>
                                            </Col>

                                            <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">Branch name<sup className="red-color">*</sup></Form.Label>
                                            <Form.Select aria-label="Default select example" className="form-control" value={branchId} onChange={(e) => {setBranchId(e.target.value)}}>
                                                <option>Select branch</option>
                                                {branches?.filter((key) => !key.IsCancelled).map((branch, index) => {
                                                    return (<option key={`${branch.BankBranchId}'_'${branch.BankBranchName}`} value={branch.BankBranchId}>{branch.BankBranchName}</option>)
                                                })}
                                            </Form.Select>
                                            </Col>

                                            <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">IFSC Code</Form.Label>
                                            <Form.Control placeholder="IFSC Code" type="text" value={ifscCode} onChange={(e) => {setIfscCode(e.target.value)}}/>
                                            </Col>

                                            <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">UPI ID</Form.Label>
                                            <Form.Control placeholder="eg: namead@oksbi" type="text" value={upiId} onChange={(e) => {setUpiId(e.target.value)}}/>
                                            </Col>

                                            <Col lg={12} md="12" className="mt-4">
                                                <Stack direction="horizontal" gap={3}>
                                                    <div>
                                                    {/* <button type="button" className="l-b wbtnn back-btn btn btn-primary">Back</button> */}
                                                    </div>
                                                    <div className="ms-auto">
                                                    <button type="button" className="l-b btnn btn btn-primary" onClick={() => nextStep(2)} disabled={step1Loading}>
                                                        {step1Loading && (
                                                          <span className="spinner-border spinner-border-sm"></span>
                                                        )} SUBMIT</button>
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
                                            <Form.Label className="l-sb">Select id<sup className="red-color">*</sup></Form.Label>
                                            <Form.Select aria-label="Default select example" className="form-control" value={photoIdProofType} onChange={(e) => {setPhotoIdProofType(e.target.value)}}>
                                                <option>Select id type</option>
                                                {idProofs?.filter((key) => !key.IsCancelled).map((idproof, index) => {
                                                    return (<option key={`${idproof.IdProofId}'_'${idproof.IdProofName}`} value={idproof.IdProofId}>{idproof.IdProofName}</option>)
                                                })}
                                            </Form.Select>
                                            </Col>

                                            <Col lg={6} md="12" className="mb-4">
                                                <Form.Label className="l-sb">Id No.<sup className="red-color">*</sup></Form.Label>
                                                <Form.Control placeholder="Your Bank account no." type="text" value={photoIdProofId} onChange={(e) => {setPhotoIdProofId(e.target.value)}}/>
                                            </Col>


                                            <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">Do you have a Passport</Form.Label>
                                            <div className="profile-gender mb-3">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="havePassport" id="flexRadioDefault9" value={havePassport} onChange={(e) => {setHavePassport(1)}} checked={havePassport === 1 ? true : false}/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault9">
                                                    Yes
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="havePassport" id="flexRadioDefault10" value={havePassport} onChange={(e) => {setHavePassport(0)}} checked={havePassport === 0 ? true : false}/>
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
                                                        <label htmlFor="upload"><AiOutlinePlus/></label>
                                                    </div>
                                                    <div className="img-note">(add the scanned copy of id proof in .pdf or .jpg format)</div>
                                                </div>
                                            </Col>
                                            {havePassport === 1 && (
                                                <Col lg={12} md="12" className="mb2">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" name="flexCheckboxDefault" id="flexCheckboxDefault11" value={agreeMembership} onChange={(e) => {setAgreeMembership(!agreeMembership)}} checked={agreeMembership} />
                                                        <label className="form-check-label" htmlFor="flexCheckboxDefault11">
                                                        I agree to provide my passport id with 1 month of my membership
                                                        </label>
                                                    </div>
                                                </Col>
                                            )}
                                            <Col lg={12} md="12" className="mt-5">
                                                <Stack direction="horizontal" gap={3}>
                                                    <div>
                                                    <button type="button" className="l-b wbtnn back-btn btn btn-primary" onClick={() => prevStep(1)}>Back</button>
                                                    </div>
                                                    <div className="ms-auto">
                                                    <button type="button" className="l-b btnn btn btn-primary" onClick={() => nextStep(3)} disabled={step2Loading}>
                                                        {step2Loading && (
                                                          <span className="spinner-border spinner-border-sm"></span>
                                                        )}  SUBMIT</button>
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
                                            <Form.Label className="l-sb">Address line<sup className="red-color">*</sup></Form.Label>
                                            <Form.Control placeholder="Address" type="text" value={address} onChange={(e) => {setAddress(e.target.value)}}/>
                                            </Col>

                                            <Col lg={6} md="12" className="mb-4">
                                                 <Form.Label className="l-sb">State<sup className="red-color">*</sup></Form.Label>
                                                <Form.Select aria-label="Default select example" className="form-control" value={stateId} onChange={(e) => {selectStateAndGetItsCities(e.target.value);setStateId(e.target.value);setCityId("")}}>
                                                    <option>Select State</option>
                                                    {states?.filter((key) => !key.IsCancelled).map((state, index) => {
                                                        return (<option key={`${state.StateId}'_'${state.StateName}`} value={state.StateId}>{state.StateName}</option>)
                                                    })}
                                                </Form.Select>
                                            </Col>

                                            <Col lg={6} md="12" className="mb-4">
                                                <Form.Label className="l-sb">Address proof<sup className="red-color">*</sup></Form.Label>
                                                <Form.Select aria-label="Default select example" className="form-control" value={addressProod} onChange={(e) => {setAddressProod(e.target.value)}}>
                                                    <option>Address proof</option>
                                                    {addressProofs?.filter((key) => !key.IsCancelled).map((addProof, index) => {
                                                        return (<option key={`${addProof.AddressProofId}'_'${addProof.AddressProofName}`} value={addProof.AddressProofId}>{addProof.AddressProofName}</option>)
                                                    })}
                                                </Form.Select>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={6} md="12" className="mb-4">

                                            <Col lg={12} md="12" className="">
                                               <Form.Label className="l-sb">City<sup className="red-color">*</sup></Form.Label>
                                                <Form.Select aria-label="Default select example" className="form-control" value={cityId} onChange={(e) => {setCityId(e.target.value)}}>
                                                    <option>City name</option>
                                                    {cities?.filter((key) => !key.IsCancelled).map((city, index) => {
                                                        return (<option key={`${city.CityId}'_'${city.CityName}`} value={city.CityId}>{city.CityName}</option>)
                                                    })}
                                                </Form.Select>
                                            </Col>
                                            <Col lg={12} md="12" className="mt-4">
                                            <Form.Label className="l-sb">Pincode<sup className="red-color">*</sup></Form.Label>
                                            <Form.Control placeholder="Address" type="text" value={pincode} onChange={(e) => {setPincode(e.target.value)}}/>
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
                                                        <label htmlFor="upload"><AiOutlinePlus/></label>
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
                                                    <button type="button" className="l-b btnn btn btn-primary" onClick={() => nextStep(4)} disabled={step3Loading}>
                                                        {step3Loading && (
                                                          <span className="spinner-border spinner-border-sm"></span>
                                                        )}  SUBMIT</button>
                                                    </div>
                                                </Stack>
                                            </Col>
                                        </Row>
                                    </div>
                                )}
                                {currentStep >= 4 && (
                                    <div className="profile-text-sec artist-profile-text-sec">
                                        <div className="head">
                                            <h2>Please provide reference information (1 references required)</h2>
                                        </div>

                                        <Row className="">
                                            <Col lg={6} md="6" className="mb-4">
                                                <Form.Label className="l-sb">First Name<sup className="red-color">*</sup></Form.Label>
                                                <Form.Control placeholder="First Name" type="text" value={ref1FName} onChange={(e) => {setRef1FName(e.target.value)}}/>
                                            </Col>
                                            <Col lg={6} md="6" className="mb-4">
                                                <Form.Label className="l-sb">Last Name<sup className="red-color">*</sup></Form.Label>
                                                <Form.Control placeholder="Last Name" type="text" value={ref1LName} onChange={(e) => {setRef1LName(e.target.value)}}/>
                                            </Col>
                                            <Col lg={6} md="6" className="mb-4">
                                                <Form.Label className="l-sb">Contact No<sup className="red-color">*</sup></Form.Label>
                                                <PhoneInput
                                                    className="l-r"
                                                    country={"in"}
                                                    enableSearch={true}
                                                    placeholder={9999999999}
                                                    onChange={(phone) => setRef1ContNo(phone)}
                                                    value={ref1ContNo}
                                                  />
                                            </Col>
                                            <Col lg={6} md="6" className="mb-4">
                                                <Form.Label className="l-sb">Email<sup className="red-color">*</sup></Form.Label>
                                                <Form.Control placeholder="Email" type="email" value={ref1Email} onChange={(e) => {setRef1Email(e.target.value)}}/>
                                            </Col>
                                            <Col lg={6} md="6" className="mb-4">
                                                <Form.Label className="l-sb">State<sup className="red-color">*</sup></Form.Label>
                                                <Form.Select aria-label="Default select example" className="form-control" value={ref1StateId} onChange={(e) => {selectStateAndGetItsCities(e.target.value);setRef1StateId(e.target.value);setRef1CityId("")}}>
                                                    <option>State</option>
                                                    {states?.filter((key) => !key.IsCancelled).map((state, index) => {
                                                        return (<option key={`${index}'_'${state.StateId}'_'${state.StateName}`} value={state.StateId}>{state.StateName}</option>)
                                                    })}
                                                </Form.Select>
                                            </Col>
                                            <Col lg={6} md="6" className="mb-4">
                                                <Form.Label className="l-sb">City<sup className="red-color">*</sup></Form.Label>
                                                <Form.Select aria-label="Default select example" className="form-control" value={ref1CityId} onChange={(e) => {setRef1CityId(e.target.value)}}>
                                                    <option>City name</option>
                                                    {cities?.filter((key) => !key.IsCancelled).map((city, index) => {
                                                        return (<option key={`${index}'_'${city.CityId}'_'${city.CityName}`} value={city.CityId}>{city.CityName}</option>)
                                                    })}
                                                </Form.Select>
                                            </Col>
                                            
                                            <Col lg={6} md="12" className="mb-4">
                                                <Form.Label className="l-sb">Date of birth</Form.Label>
                                                <Form.Control type="date" value={ref1Dob} onChange={(e) => {setRef1Dob(e.target.value)}}/>
                                            </Col>
                                            <Col lg={6} md="12" className="mb-4">
                                                <Form.Label className="l-sb">Relationship with the person<sup className="red-color">*</sup></Form.Label>
                                                <Form.Control placeholder="Uncle" type="text" value={ref1Relation} onChange={(e) => {setRef1Relation(e.target.value)}}/>
                                            </Col>
                                        </Row>
                                        <Row>

                                            <Col lg={12} md="12" className="mt-4">
                                                <Stack direction="horizontal" gap={3}>
                                                    <div>
                                                    <button type="button" className="l-b wbtnn back-btn btn btn-primary" onClick={() => prevStep(3)}>Back</button>
                                                    </div>
                                                    <div className="ms-auto">
                                                    <button type="button" className="l-b btnn btn btn-primary" onClick={() => nextStep(5)} disabled={step4Loading}>
                                                        {step4Loading && (
                                                          <span className="spinner-border spinner-border-sm"></span>
                                                        )} SUBMIT</button>
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