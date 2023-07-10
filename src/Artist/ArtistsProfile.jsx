import React, { useState, useEffect } from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Upload from "./Upload";
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";
import Multiselect from 'multiselect-react-dropdown';
import Modal from 'react-bootstrap/Modal';
import { RxCross2 } from "react-icons/rx";
import Expert from '../assets/images/like-img.png';
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";
import { setProfileData } from "../actions/artist";
import { successToast, errorToast, infoToast } from "../services/toast-service";

const ArtistsProfile = (props) => {
    const dispatch = useDispatch();

    const { cities, states, categories, gernes, languages, events, eventModes } = useSelector(state => state.common);
    const { artistProfileData } = useSelector(state => state.artist);

    const [currentStep, setCurrentStep] = useState(1);

    //step 1 form
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [email, setEmail] = useState("");
    const [stateId, setStateId] = useState("");
    const [cityId, setCityId] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("male");
    const [loadingStep1, setStep1Loading] = useState(false);


    const [options] =useState(['Singer','Guitarist','Tabla player','Drummer','Keyboard player']) ;
    const [options2] =useState(['Classical','Bollywood','Jazz','Bhajan','Rock']) ;
    const [options3] =useState(['English','Hindi','Panjabi','Gujrati','Tamil','Bangali','Malyalam','Nepali']) ;
    const [options4] =useState(['Weddings','Religious','Café Gigs','Music Festivals','Private Parties']) ;
    const [options5] =useState(['Valentines day','Mothers day','Fathers day','Propasal special','Independence day']) ;
    const [options6] =useState(['Google meets','zoom','discord']) ;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const nextStep = (step) => {
        if(currentStep == 1) {
            if(firstName === "") {
                errorToast('First Name is required.');
                return false;
            } else if(lastName === "") {
                errorToast('Last Name is required.');
                return false;
            } else if(contactNo === "") {
                errorToast('Contact No is required.');
                return false;
            } else if(email === "") {
                errorToast('Email is required.');
                return false;
            } else if(stateId === "") {
                errorToast('State is required.');
                return false;
            } else if(cityId === "") {
                errorToast('City is required.');
                return false;
            } else if(gender === "") {
                errorToast('Gender is required.');
                return false;
            } else {
                //call api
                const data = {
                    "selApInfo": {
                        firstName,
                        lastName,
                        ContactNo: contactNo,
                        EmailId: email,
                        StateId: stateId,
                        CityId: cityId,
                        DateOfBirth: dob,
                        Gender: gender
                    },
                };
                setStep1Loading(true);
                dispatch(setProfileData(data)).then((response) => {
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
        } else if(currentStep == 2) {
            //step 2 api 
        }
    }

    const prevStep = (step) => {
        setCurrentStep(step);
    }

    const skipStep3 = () => {
        setCurrentStep(4);
    }

    const submbitForReview = () => {
        console.log('submit');
    }

    useEffect(() => {
        console.log('artistProfileData', artistProfileData);
        if(artistProfileData) {
            setFirstName(artistProfileData?.selApInfo?.FirstName);
            setLastName(artistProfileData?.selApInfo?.LastName);
            setContactNo(artistProfileData?.selApInfo?.ContactNo);
            setEmail(artistProfileData?.selApInfo?.EmailId);
            setStateId(artistProfileData?.selApInfo?.StateId);
            setCityId(artistProfileData?.selApInfo?.CityId);
            setDob(artistProfileData?.selApInfo?.DateOfBirth);
            setGender(artistProfileData?.selApInfo?.Gender);
        }
    }, [])

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
                             Personal Info
                            </li>
                            <li className={`step ${currentStep > 2 ? 'is-active' : ''} ${currentStep === 2 ? 'active' : ''}`} data-step="2">
                              Performance details
                            </li>
                            <li className={`step ${currentStep > 3 ? 'is-active' : ''} ${currentStep === 3 ? 'active' : ''}`} data-step="3">
                              Social media details
                            </li>
                        </ol>
                    </section>
                        <Row>
                            <Col lg={4}>
                                <Upload/>
                            </Col>
                            <Col lg={8}>
                                {currentStep == 1 && (
                                <div className="profile-text-sec artist-profile-text-sec">
                                    <div className="head">
                                        <h2>Hi, complete your profile to be more discoverable.</h2>
                                    </div>
                                    <Row className="align-items-center">
                                        <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">First Name<sup className="red-color">*</sup></Form.Label>
                                            <Form.Control placeholder="First Name" type="text" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
                                        </Col>
                                        <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">Last Name<sup className="red-color">*</sup></Form.Label>
                                            <Form.Control placeholder="Last Name" type="text" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
                                        </Col>

                                        <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">Contact no.<sup className="red-color">*</sup></Form.Label>
                                            <PhoneInput
                                                className="l-r"
                                                country={"in"}
                                                enableSearch={true}
                                                placeholder={9999999999}
                                                value={contactNo} 
                                                onChange={(phone) => {setContactNo(phone)}}
                                              />
                                        </Col>
                                        <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">Email<sup className="red-color">*</sup></Form.Label>
                                            <Form.Control placeholder="Email" type="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                                        </Col>
                                        <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">State<sup className="red-color">*</sup></Form.Label>
                                            <Form.Select aria-label="Default select example" className="form-control" value={stateId} onChange={(e) => {setStateId(e.target.value)}}>
                                                <option value="">Select state</option>
                                                {states.map((state, index) => {
                                                    return !state.IsCancelled ?
                                                        <option key={`${state.StateId}'_'${state.StateName}`} value={state.StateId}>{state.StateName}</option>
                                                    :
                                                       <option value="">No state availablbe</option>
                                                })}
                                            </Form.Select>
                                        </Col>
                                        <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">City<sup className="red-color">*</sup></Form.Label>
                                            <Form.Select aria-label="Default select example" className="form-control" value={cityId} onChange={(e) => {setCityId(e.target.value)}}>
                                                <option>Select city</option>
                                                {cities.map((city, index) => {
                                                    return !city.IsCancelled ?
                                                        <option key={`${city.CityId}'_'${city.CityName}`} value={city.CityId}>{city.CityName}</option>
                                                    :
                                                       <option value="">No state availablbe</option>
                                                })}
                                            </Form.Select>
                                        </Col>
                                        
                                        <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">Date of birth</Form.Label>
                                            <Form.Control placeholder="" type="date" value={dob} onChange={(e) => {setDob(e.target.value)}}/>
                                        </Col>
                                        <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">Gender<sup className="red-color">*</sup></Form.Label>
                                        <div className="profile-gender mb-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" id="male" name="gender" value={gender} checked={gender === "male" ? true : false} onChange={(e) => {setGender("male")}}/>
                                                <label className="form-check-label" htmlFor="male">
                                                Male
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio"  id="female" name="gender"  value={gender} checked={gender === "female" ? true : false} onChange={(e) => {setGender("female")}}/>
                                                <label className="form-check-label" htmlFor="female">
                                                Female
                                                </label>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" id="other" name="gender"  value={gender} checked={gender === "other" ? true : false} onChange={(e) => {setGender("other")}}/>
                                                <label className="form-check-label" htmlFor="other">
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
                                                <button type="button" className="l-b btnn btn btn-primary" disabled={loadingStep1} onClick={() => nextStep(2)}>
                                                    {loadingStep1 && (
                                                      <span className="spinner-border spinner-border-sm"></span>
                                                    )}
                                                    NEXT</button>
                                                </div>
                                            </Stack>
                                        </Col>
                                    </Row>
                                </div>
                                )}
                                {currentStep == 2 && (
                                    <div className="profile-text-sec artist-profile-text-sec">
                                        <div className="head">
                                            <h2>Hi, Please fill your performance details</h2>
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


                                            <Col lg={12} md="12" className="mt-4">
                                                <Stack direction="horizontal" gap={3}>
                                                    <div>
                                                    <button type="button" className="l-b wbtnn back-btn btn btn-primary" onClick={() => prevStep(1)}>Back</button>
                                                    </div>
                                                    <div className="ms-auto">
                                                    <button type="button" className="l-b btnn btn btn-primary" onClick={() => nextStep(3)}>NEXT</button>
                                                    </div>
                                                </Stack>
                                            </Col>

                                        </Row>
                                    </div>
                                )}
                                {currentStep >= 3 && (
                                     <div className="profile-text-sec artist-profile-text-sec">
                                        <div className="head">
                                            <Stack direction="horizontal" gap={3}>
                                                <h2>Please, connect with your social media.</h2>
                                                <h2 className="fs-6 ms-auto cursor-pointer" onClick={skipStep3}>Skip</h2>
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

                                            <Col lg={12} md="12" className="mb2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="flexCheckboxDefault" id="flexCheckboxDefault11" />
                                                <label className="form-check-label" htmlFor="flexCheckboxDefault11">
                                                I agree, to give livetune the permission to fetch my social media information
                                                </label>
                                            </div>
                                            </Col>

                                            <Col lg={12} md="12" className="mt-4">
                                                <Stack direction="horizontal" gap={3}>
                                                    <div>
                                                    <button type="button" className="l-b wbtnn back-btn btn btn-primary" onClick={() => prevStep(2)}>Back</button>
                                                    </div>
                                                    <div className="ms-auto">
                                                    {currentStep < 4 ? (
                                                        <button type="button" className="l-b btnn btn btn-primary " onClick={() => nextStep(4)}>FINISH</button>
                                                    ):(
                                                        <button type="button" className="l-b btnn btn btn-primary " onClick={() => submbitForReview()}>Submit For Review</button>
                                                    )}
                                                    
                                                    </div>
                                                </Stack>
                                            </Col>

                                        </Row>

                                        <Modal
                                        show={show}
                                        onHide={handleClose}
                                        backdrop="static"
                                        keyboard={false}
                                        centered
                                        size="lg"
                                        className="artist-model-sec"
                                        >
                                            
                                            <div className="closeButtonr" onClick={handleClose}>
                                                <RxCross2/>
                                            </div>
                                            <Modal.Body>
                                                <div className="head-sec text-center white-color">
                                                    <h2>Hi <span>Rahul Roy</span>,</h2>
                                                    <p className="l-r fs-4 mb-1">Profile Application form Submitted Successfully</p>
                                                    <p className="l-r fs-4 mb-1">Your profile will be shared with our Music expert panel</p>
                                                </div>
                                                <div className="expert-panel-sec">
                                                    <p className="text-center l-r black-color fs-5">Our expert panel consists of</p>
                                                    <Row>
                                                        <Col lg={4} sm={6} className="mb-3">
                                                            <div className="inner-expert-panel-sec">
                                                                <div className="img-sec">
                                                                    <img src={Expert} alt="img" className="w-100" />
                                                                </div>
                                                                <h2 className="fs-5">Sonu Nigam</h2>
                                                                <ul>
                                                                    <li>Bollywood Playback singer</li>
                                                                    <li>Judge Indian Idol</li>
                                                                </ul>
                                                            </div>
                                                        </Col>
                                                        <Col lg={4} sm={6} className="mb-3">
                                                            <div className="inner-expert-panel-sec">
                                                                <div className="img-sec">
                                                                    <img src={Expert} alt="img" className="w-100" />
                                                                </div>
                                                                <h2 className="fs-5">Sonu Nigam</h2>
                                                                <ul>
                                                                    <li>Bollywood Playback singer</li>
                                                                    <li>Judge Indian Idol</li>
                                                                </ul>
                                                            </div>
                                                        </Col>
                                                        <Col lg={4} sm={6} className="mb-3">
                                                            <div className="inner-expert-panel-sec">
                                                                <div className="img-sec">
                                                                    <img src={Expert} alt="img" className="w-100" />
                                                                </div>
                                                                <h2 className="fs-5">Sonu Nigam</h2>
                                                                <ul>
                                                                    <li>Bollywood Playback singer</li>
                                                                    <li>Judge Indian Idol</li>
                                                                </ul>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <p className="text-center l-r red-color fs-5 mt-2">You can expect to hear form our team within 2 weeks via email provided</p>
                                                </div>
                                            </Modal.Body>
                                        </Modal>
                                    </div>
                                )}
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

export default ArtistsProfile
