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
import { getCitiesOfState } from "../actions/common";
import { successToast, errorToast, infoToast } from "../services/toast-service";
import moment from "moment";
import { getProfileData } from "../actions/artist";

const ArtistsProfile = (props) => {
    const dispatch = useDispatch();

    const { cities, states, categories, gernes, languages, events, eventModes, citiesOfState } = useSelector(state => state.common);
    const { artistProfileData } = useSelector(state => state.artist);

    const [currentStep, setCurrentStep] = useState(1);
    console.log(currentStep)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [options] =useState(['Singer','Guitarist','Tabla player','Drummer','Keyboard player']) ;
    const [options2] =useState(['Classical','Bollywood','Jazz','Bhajan','Rock']) ;
    const [options3] =useState(['English','Hindi','Panjabi','Gujrati','Tamil','Bangali','Malyalam','Nepali']) ;
    const [options4] =useState(['Weddings','Religious','Café Gigs','Music Festivals','Private Parties']) ;
    const [options5] =useState(['Valentines day','Mothers day','Fathers day','Propasal special','Independence day']) ;
    const [options6] =useState(['Google meets','zoom','discord']) ;

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

    //step 2 form
    const [selCategories, setSelCategories] = useState([]);
    const [selGernes, setSelGernes] = useState([]);
    const [selLanguages, setSelLanguages] = useState([]);
    const [expInYears, setSelExpInYears] = useState("");
    const [selPrefEvents, setSelPrefEvents] = useState([]);
    const [selWillingToTravel, setSelWillingToTravel] = useState("");
    const [selExpState, setSelExpState] = useState([]);
    const [selPerfDuration, setSelPerfDuration] = useState("");
    const [selChargesType, setSelChargesType] = useState("");
    const [selChargesFrom, setSelChargesFrom] = useState("");
    const [selChargesTo, setSelChargesTo] = useState("");
    const [selPrivSurpEvent, setSelPrivSurpEvent] = useState("");
    const [selPrivSurpEventMode, setSelPrivSurpEventMode] = useState([]);
    const [selAvailVirtualEvent, setSelVirtualEvent] = useState("");
    const [selAvailVirtualEventType, setSelVirtualEventType] = useState([]);
    const [selAboutArtist, setSelAboutArtist] = useState("");
    const [loadingStep2, setStep2Loading] = useState(false);

    //step 3 form
    const [fbUrl, setFbUrl] = useState("");
    const [instaUrl, setInstaUrl] = useState("");
    const [youtubeUrl, setYoutubeUrl] = useState("");
    const [websiteUrl, setWebsiteUrl] = useState("");
    const [loadingStep3, setStep3Loading] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const nextStep = (step) => {
        if(currentStep == 1) {
            //step 2 api 
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
                        dispatch(getProfileData());
                    } else {
                        errorToast(response.data.Message);
                    }
                    setStep1Loading(false);
                }).catch((err) => {
                    setStep1Loading(false);
                    errorToast(err.message);
                });
            }
        } else if(currentStep === 2) {
            if(selCategories.length === 0) {
                errorToast('Category is required.');
                return false;
            } else if(selGernes.length === 0) {
                errorToast('Gerne is required.');
                return false;
            } else if(selLanguages.length === 0) {
                errorToast('Language is required.');
                return false;
            } else if(selPrefEvents.length === 0) {
                errorToast('Preferred events is required.');
                return false;
            } else if(selWillingToTravel === "") {
                errorToast('Willing to travel to other states for live events is required.');
                return false;
            } else if(selPerfDuration === "") {
                errorToast('Preferred performance duration is required.');
                return false;
            } else if(selChargesType === "") {
                errorToast('Performance charges is required.');
                return false;
            } else if(selChargesFrom === "") {
                errorToast('From amount is required.');
                return false;
            } else if(selChargesTo === "") {
                errorToast('To amount is required.');
                return false;
            } else {
                //call api
                const data = {
                    "selAPDetails": {
                        CategoryId: selCategories.map(a => a.CategoryId)?.join(","),
                        CategoryName: selCategories.map(a => a.CategoryName)?.join(","),
                        GenreId: selGernes.map(a => a.GenreId)?.join(","),
                        GenreName: selGernes.map(a => a.GenreName)?.join(","),
                        LanguageId: selLanguages.map(a => a.LanguageId)?.join(","),
                        LanguageName: selLanguages.map(a => a.LanguageName)?.join(","),
                        EventsId: selPrefEvents.map(a => a.EventsId)?.join(","),
                        EventsName: selPrefEvents.map(a => a.EventsName)?.join(","),
                        PExperience: expInYears,
                        YesOtherState: selWillingToTravel === 1 ? true : false,
                        NoOtherState: selWillingToTravel === 0 ? true : false,
                        IsOtherState: selWillingToTravel === 2 ? true : false,
                        OtherStateId: selExpState.map(a => a.StateId)?.join(","),
                        OtherStateName: selExpState.map(a => a.StateName)?.join(","),
                        PDuration1Hr: selPerfDuration === 1 ? true : false,
                        PDuration2Hr: selPerfDuration === 2 ? true : false,
                        PDurationM2Hr: selPerfDuration > 2 ? true : false,
                        DurationRemark: selPerfDuration > 2 ? selPerfDuration : null,
                        IsPerShow: selChargesType === 1 ? true : false,
                        IsPerHr: selChargesType === 0 ? true : false,
                        FromCharge: selChargesFrom,
                        ToCharge: selChargesTo,
                        YesPEvents: selPrivSurpEvent === 1 ? true : false,
                        NoPEvents: !selPrivSurpEvent === 0 ? true : false,
                        ModeId: selPrivSurpEventMode.map(a => a.EventModeId)?.join(","),
                        ModeName: selPrivSurpEventMode.map(a => a.EventModeName)?.join(","),
                        YesVEvents: selAvailVirtualEvent === 1 ? true : false,
                        NoVEvents: !selAvailVirtualEvent === 0 ? true : false,
                        EventTypeId: selAvailVirtualEventType.map(a => a.EventsId)?.join(","),
                        EventTypeName: selAvailVirtualEventType.map(a => a.EventsName)?.join(","),
                        BriefIntro: selAboutArtist
                    },
                };
                setStep2Loading(true);
                dispatch(setProfileData(data)).then((response) => {
                    if(response.data.IsSuccess) {
                        successToast(response.data.Message);
                        setCurrentStep(step);
                        dispatch(getProfileData());
                    } else {
                        errorToast(response.data.Message);
                    }
                    setStep2Loading(false);
                }).catch((err) => {
                    setStep2Loading(false);
                    errorToast(err.message);
                });
            }
        } else if(currentStep === 3) {
            //step 3 api 
            if(fbUrl !==  undefined || instaUrl !==  undefined || youtubeUrl !== undefined || websiteUrl !== undefined) {
                const data = {
                    "selASDetails": {
                        FacebookLink: fbUrl,
                        InstagramLink: instaUrl,
                        YouTubeLink: youtubeUrl,
                        OtherLink: websiteUrl
                    },
                };
                setStep3Loading(true);
                dispatch(setProfileData(data)).then((response) => {
                    if(response.data.IsSuccess) {
                        successToast(response.data.Message);
                        setCurrentStep(step);
                        dispatch(getProfileData());
                    } else {
                        errorToast(response.data.Message);
                    }
                    setStep3Loading(false);
                }).catch((err) => {
                    setStep3Loading(false);
                    errorToast(err.message);
                });
            } else {
                infoToast("Skipping social media connects");
                setCurrentStep(step);
            }
        }
    }

    const prevStep = (step) => {
        setCurrentStep(step);
    }

    const skipStep3 = () => {
        infoToast("Skipping social media connects");
        setCurrentStep(4);
    }

    const submbitForReview = () => {
        infoToast("Generating payment link.....");
        console.log('submit');
    }

    const selectStateAndGetItsCities = (stateId) => {
        if(stateId !== "") {
            dispatch(getCitiesOfState(stateId));
        }
    }

    const selectCategory = (selectedList, selectedItem) => {
        setSelCategories(selectedList);
    }

    const removeCategory = (selectedList, removedItem) => {
        setSelCategories(selectedList);
    }

    const selectGenres = (selectedList, selectedItem) => {
        setSelGernes(selectedList);
    }

    const removeGenres = (selectedList, removedItem) => {
        setSelGernes(selectedList);
    }

    const selectLanguage = (selectedList, selectedItem) => {
        setSelLanguages(selectedList);
    }

    const removeLanguage = (selectedList, removedItem) => {
        setSelLanguages(selectedList);
    }

    const selectEvent = (selectedList, selectedItem) => {
        console.log(selectedList);
        setSelPrefEvents(selectedList);
    }

    const removeEvent = (selectedList, removedItem) => {
        setSelPrefEvents(selectedList);
    }

    const selectEventMode = (selectedList, selectedItem) => {
        console.log(selectedList);
        setSelPrivSurpEventMode(selectedList);
    }

    const removeEventMode = (selectedList, removedItem) => {
        setSelPrivSurpEventMode(selectedList);
    }

    const selectEventVirtual = (selectedList, selectedItem) => {
        console.log(selectedList);
        setSelVirtualEventType(selectedList);
    }

    const removeEventVirtual = (selectedList, removedItem) => {
        setSelVirtualEventType(selectedList);
    }

    const selectWillingExceptionStates = (selectedList, selectedItem) => {
        setSelExpState(selectedList);
    }

    const removeWillingExceptionStates = (selectedList, removedItem) => {
        setSelExpState(selectedList);
    }


    useEffect(() => {
        console.log('artistProfileData', artistProfileData);
        if(artistProfileData) {
            setFirstName(artistProfileData?.selApInfo?.FirstName);
            setLastName(artistProfileData?.selApInfo?.LastName);
            setContactNo(artistProfileData?.selApInfo?.ContactNo);
            setEmail(artistProfileData?.selApInfo?.EmailId);
            setStateId(artistProfileData?.selApInfo?.StateId);
            selectStateAndGetItsCities(artistProfileData?.selApInfo?.StateId);
            setCityId(artistProfileData?.selApInfo?.CityId);
            setDob(moment(artistProfileData?.selApInfo?.DateOfBirth).format("YYYY-MM-DD"));
            setGender(artistProfileData?.selApInfo?.Gender === null ? "" : artistProfileData?.selApInfo?.Gender);


            //step 2
            //console.log(artistProfileData?.selAPDetails?.OtherStateId.split(","));
            if(artistProfileData?.selAPDetails?.CategoryId !== null && artistProfileData?.selAPDetails?.CategoryId.split(",")) {
                const tmpSelCategories = [];
                for (let i in artistProfileData?.selAPDetails?.CategoryId.split(",")) {
                    tmpSelCategories.push(
                        {
                            CategoryId: artistProfileData?.selAPDetails?.CategoryId.split(",")[i],
                            CategoryName: artistProfileData?.selAPDetails?.CategoryName.split(",")[i]
                        }
                    )
                }
                setSelCategories(tmpSelCategories);
            }

            if(artistProfileData?.selAPDetails?.GenreId !== null && artistProfileData?.selAPDetails?.GenreId.split(",")) {
                const tmpSelGernes = [];
                for (let i in artistProfileData?.selAPDetails?.GenreId.split(",")) {
                    tmpSelGernes.push(
                        {
                            GenreId: artistProfileData?.selAPDetails?.GenreId.split(",")[i],
                            GenreName: artistProfileData?.selAPDetails?.GenreName.split(",")[i]
                        }
                    )
                }
                setSelGernes(tmpSelGernes);
            }

            if(artistProfileData?.selAPDetails?.LanguageId !== null && artistProfileData?.selAPDetails?.LanguageId.split(",")) {
                const tmpSelLanguages = [];
                for (let i in artistProfileData?.selAPDetails?.LanguageId.split(",")) {
                    tmpSelLanguages.push(
                        {
                            LanguageId: artistProfileData?.selAPDetails?.LanguageId.split(",")[i],
                            LanguageName: artistProfileData?.selAPDetails?.LanguageName.split(",")[i]
                        }
                    )
                }
                setSelLanguages(tmpSelLanguages);
            }
            
            setSelExpInYears(artistProfileData?.selAPDetails?.PExperience);

            if(artistProfileData?.selAPDetails?.EventsId !== null && artistProfileData?.selAPDetails?.EventsId.split(",")) {
                const tmpSelPrefEvents = [];
                for (let i in artistProfileData?.selAPDetails?.EventsId.split(",")) {
                    tmpSelPrefEvents.push(
                        {
                            EventsId: artistProfileData?.selAPDetails?.EventsId.split(",")[i],
                            EventsName: artistProfileData?.selAPDetails?.EventsName.split(",")[i]
                        }
                    )
                }
                setSelPrefEvents(tmpSelPrefEvents);
            }

            if(artistProfileData?.selAPDetails?.YesOtherState) {
                setSelWillingToTravel(1);
            } else if(artistProfileData?.selAPDetails?.NoOtherState) {
                setSelWillingToTravel(0);
            }  else if(artistProfileData?.selAPDetails?.IsOtherState) {
                setSelWillingToTravel(2);
            }

            if(artistProfileData?.selAPDetails?.OtherStateId !== null && artistProfileData?.selAPDetails?.OtherStateId.split(",")) {
                const tmpSelExpStates = [];
                for (let i in artistProfileData?.selAPDetails?.OtherStateId.split(",")) {
                    tmpSelExpStates.push(
                        {
                            StateId: artistProfileData?.selAPDetails?.OtherStateId.split(",")[i],
                            StateName: artistProfileData?.selAPDetails?.OtherStateName.split(",")[i]
                        }
                    )
                }
                setSelExpState(tmpSelExpStates);
            }

            if (artistProfileData?.selAPDetails?.PDuration1Hr) {
                setSelPerfDuration(1);
            } else if (artistProfileData?.selAPDetails?.PDuration2Hr) {
                setSelPerfDuration(2);
            } else if (artistProfileData?.selAPDetails?.DurationRemark != null) {
                setSelPerfDuration(artistProfileData?.selAPDetails?.DurationRemark);
            }
            setSelChargesType(artistProfileData?.selAPDetails?.IsPerShow ? 1 : 2);
            setSelChargesFrom(artistProfileData?.selAPDetails?.FromCharge);
            setSelChargesTo(artistProfileData?.selAPDetails?.ToCharge);
            setSelPrivSurpEvent(artistProfileData?.selAPDetails?.YesPEvents ? 1 : 0);

            if(artistProfileData?.selAPDetails?.ModeId !== null && artistProfileData?.selAPDetails?.ModeId.split(",")) {
                const tmpSelSurpMode = [];
                for (let i in artistProfileData?.selAPDetails?.ModeId.split(",")) {
                    tmpSelSurpMode.push(
                        {
                            EventModeId: artistProfileData?.selAPDetails?.ModeId.split(",")[i],
                            EventModeName: artistProfileData?.selAPDetails?.ModeName.split(",")[i]
                        }
                    )
                }
                setSelPrivSurpEventMode(tmpSelSurpMode);
            }

            setSelVirtualEvent(artistProfileData?.selAPDetails?.YesVEvents ? 1 : 0);

            if(artistProfileData?.selAPDetails?.EventTypeId !== null && artistProfileData?.selAPDetails?.EventTypeId.split(",")) {
                const tmpSelVirtualEventTypes = [];
                for (let i in artistProfileData?.selAPDetails?.EventTypeId.split(",")) {
                    tmpSelVirtualEventTypes.push(
                        {
                            EventsId: artistProfileData?.selAPDetails?.EventTypeId.split(",")[i],
                            EventsName: artistProfileData?.selAPDetails?.EventTypeName.split(",")[i]
                        }
                    )
                }
                setSelVirtualEventType(tmpSelVirtualEventTypes);
            }

            setSelAboutArtist(artistProfileData?.selAPDetails?.BriefIntro);

            //step 3
            setFbUrl(artistProfileData?.selASDetails?.FacebookLink);
            setInstaUrl(artistProfileData?.selASDetails?.InstagramLink);
            setYoutubeUrl(artistProfileData?.selASDetails?.YouTubeLink);
            setWebsiteUrl(artistProfileData?.selASDetails?.OtherLink);
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
                                            <Form.Select aria-label="Default select example" className="form-control" value={stateId} onChange={(e) => {selectStateAndGetItsCities(e.target.value);setStateId(e.target.value);setCityId("");}}>
                                                <option value="">Select state</option>
                                                {states?.filter((key) => !key.IsCancelled).map((state, index) => {
                                                    return (<option key={`${state.StateId}'_'${state.StateName}`} value={state.StateId}>{state.StateName}</option>)
                                                })}
                                            </Form.Select>
                                        </Col>
                                        <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">City<sup className="red-color">*</sup></Form.Label>
                                            <Form.Select aria-label="Default select example" className="form-control" value={cityId} onChange={(e) => {setCityId(e.target.value)}}>
                                                <option>Select city</option>
                                                {citiesOfState?.filter((key) => !key.IsCancelled).map((city, index) => {
                                                    return (<option key={`${city.CityId}'_'${city.CityName}`} value={city.CityId}>{city.CityName}</option>)
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
                                            <Form.Label className="l-sb">Category<sup className="red-color">*</sup></Form.Label>
                                            <Multiselect
                                                isObject={true}
                                                options= { categories?.filter((key) => !key.IsCancelled) }
                                                showCheckbox
                                                showArrow
                                                className='l-l'
                                                placeholder="Select Categories"
                                                displayValue="CategoryName"
                                                onSelect={selectCategory}
                                                onRemove={removeCategory}
                                                selectedValues={selCategories}
                                            />
                                            </Col>
                                            <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">Gerne<sup className="red-color">*</sup></Form.Label>
                                            <Multiselect
                                                isObject={true}
                                                options= { gernes?.filter((key) => !key.IsCancelled) }
                                                showCheckbox
                                                showArrow
                                                className='l-l'
                                                placeholder="Select performance gerne"
                                                displayValue="GenreName"
                                                onSelect={selectGenres}
                                                onRemove={removeGenres}
                                                selectedValues={selGernes}
                                            />
                                            </Col>
                                            <Col lg={6} md="12" className="mb-4">
                                                <Form.Label className="l-sb">Languages<sup className="red-color">*</sup></Form.Label>
                                                <Multiselect
                                                    isObject={true}
                                                    options= { languages?.filter((key) => !key.IsCancelled) }
                                                    showCheckbox
                                                    showArrow
                                                    className='l-l'
                                                    placeholder="Select Language"
                                                    displayValue="LanguageName"
                                                    onSelect={selectLanguage}
                                                    onRemove={removeLanguage}
                                                    selectedValues={selLanguages}
                                                />
                                            </Col>

                                            <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">Professional Experience (in years)</Form.Label>
                                            <Form.Control placeholder="Years" type="number" min="0" value={expInYears} onChange={(e) => {setSelExpInYears(e.target.value)}}/>
                                            </Col>
                                            
                                            <Col lg={12} md="12" className="mb-4">
                                                <Form.Label className="l-sb">Prefered events<sup className="red-color">*</sup></Form.Label>
                                                <Multiselect
                                                    isObject={true}
                                                    options= { events?.filter((key) => !key.IsCancelled)  }
                                                    showCheckbox
                                                    showArrow
                                                    className='l-l'
                                                    placeholder="Events"
                                                    displayValue="EventsName"
                                                    onSelect={selectEvent}
                                                    onRemove={removeEvent}
                                                    selectedValues={selPrefEvents}
                                                />
                                            </Col>
                                           
                                            <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">Willing to travel to other states for live events<sup className="red-color">*</sup></Form.Label>
                                            <div className="profile-gender mb-3">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="selWillingToTravel" id="flexRadioDefault1" value={selWillingToTravel} onChange={() => {setSelWillingToTravel(1)}} checked={selWillingToTravel == 1 ? true : false} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Yes
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="selWillingToTravel" id="flexRadioDefault2" value={selWillingToTravel} onChange={() => {setSelWillingToTravel(0)}} checked={selWillingToTravel == 0 ? true : false}/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    No
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="selWillingToTravel" id="flexRadioDefault3" value={selWillingToTravel} onChange={() => {setSelWillingToTravel(2)}} checked={selWillingToTravel == 2 ? true : false}/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                    Yes, except
                                                    </label>
                                                </div>
                                            </div>
                                            {selWillingToTravel == 2 && (
                                                <Multiselect
                                                    isObject={true}
                                                    options= { states?.filter((key) => !key.IsCancelled)  }
                                                    showCheckbox
                                                    showArrow
                                                    className='l-l'
                                                    placeholder="States"
                                                    displayValue="StateName"
                                                    onSelect={selectWillingExceptionStates}
                                                    onRemove={removeWillingExceptionStates}
                                                    selectedValues={selExpState}
                                                />
                                            )}
                                            </Col>

                                            <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">Preferred performance duration<sup className="red-color">*</sup></Form.Label>
                                            <div className="profile-gender mb-3">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="selPerfDuration" id="flexRadioDefault4" value={selPerfDuration} onChange={(e) => {setSelPerfDuration(1)}} checked={selPerfDuration === 1 ? true : false} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                    1Hr
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="selPerfDuration" id="flexRadioDefault5" value={selPerfDuration} onChange={(e) => {setSelPerfDuration(2)}} checked={selPerfDuration === 2 ? true : false}/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault5">
                                                    2Hrs
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="selPerfDuration" id="flexRadioDefault6" value={selPerfDuration} onChange={(e) => {setSelPerfDuration(3)}} checked={selPerfDuration > 2 ? true : false}/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault6">
                                                    more than 2 hrs
                                                    </label>
                                                </div>
                                            </div>
                                            {selPerfDuration > 2 && (
                                                <Form.Control placeholder="Specify duration if more than 2 hrs" type="number" min="3" value={selPerfDuration} onChange={(e) => {setSelPerfDuration(e.target.value)}}/>
                                            )}
                                            </Col>

                                            <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">Performance charges (set your charges)<sup className="red-color">*</sup></Form.Label>
                                            <div className="profile-gender mb-3">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="selChargesType" id="flexCheckboxDefault1" value={selChargesType} onChange={(e) => {setSelChargesType(1)}} checked={selChargesType === 1 ? true : false}/>
                                                    <label className="form-check-label" htmlFor="flexCheckboxDefault1">
                                                    per show
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="selChargesType" id="flexCheckboxDefault2" value={selChargesType} onChange={(e) => {setSelChargesType(2)}} checked={selChargesType === 2 ? true : false}/>
                                                    <label className="form-check-label" htmlFor="flexCheckboxDefault2">
                                                    Per hour
                                                    </label>
                                                </div>
                                            </div>
                                            <Stack direction="horizontal" gap={3}>
                                            <Form.Control placeholder="From ₹" type="number" value={selChargesFrom} onChange={(e) => {setSelChargesFrom(e.target.value)}} min="0"/>
                                            <Form.Control placeholder="To ₹" type="number" value={selChargesTo} onChange={(e) => {setSelChargesTo(e.target.value)}} min="0"/>
                                            </Stack>
                                            </Col>

                                            <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">Available for Private surprise events</Form.Label>
                                            <div className="profile-gender mb-3">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="selPrivSurpEvent" id="flexRadioDefault9" value={selPrivSurpEvent} onChange={(e) => {setSelPrivSurpEvent(1)}} checked={selPrivSurpEvent === 1 ? true : false}/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault9">
                                                    Yes
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="selPrivSurpEvent" id="flexRadioDefault10" value={selPrivSurpEvent} onChange={(e) => {setSelPrivSurpEvent(0)}} checked={selPrivSurpEvent === 0 ? true : false}/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault10">
                                                    No
                                                    </label>
                                                </div>
                                            </div>
                                            {selPrivSurpEvent === 1 && (
                                                <Multiselect
                                                    isObject={true}
                                                    options= { eventModes?.filter((key) => !key.IsCancelled) }
                                                    showCheckbox
                                                    showArrow
                                                    className='l-l'
                                                    placeholder="Select prefered mode"
                                                    displayValue="EventModeName"
                                                    onSelect={selectEventMode}
                                                    onRemove={removeEventMode}
                                                    selectedValues={selPrivSurpEventMode}
                                                />
                                            )}
                                            </Col>

                                            <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">Available for virtual events</Form.Label>
                                            <div className="profile-gender mb-3">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault7" value={selAvailVirtualEvent} onChange={(e) => {setSelVirtualEvent(1)}} checked={selAvailVirtualEvent === 1 ? true : false}/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault7">
                                                    Yes
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault8" value={selAvailVirtualEvent} onChange={(e) => {setSelVirtualEvent(0)}} checked={selAvailVirtualEvent === 0 ? true : false}/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault8">
                                                    No
                                                    </label>
                                                </div>
                                            </div>
                                            {selAvailVirtualEvent === 1 && (
                                                <Multiselect
                                                    isObject={true}
                                                    options= { events?.filter((key) => !key.IsCancelled)  }
                                                    showCheckbox
                                                    showArrow
                                                    className='l-l'
                                                    placeholder="Select event type"
                                                    displayValue="EventsName"
                                                    onSelect={selectEventVirtual}
                                                    onRemove={removeEventVirtual}
                                                    selectedValues={selAvailVirtualEventType}
                                                />
                                            )}
                                            </Col>

                                            <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">About you (Your bio, any achievements,etc)</Form.Label>
                                            <Form.Control as="textarea" placeholder="Opened for a Luck ali Live concert, held in Nagpur" style={{ height: '90px' }} value={selAboutArtist} onChange={(e) => {setSelAboutArtist(e.target.value)}}/>
                                            </Col>


                                            <Col lg={12} md="12" className="mt-4">
                                                <Stack direction="horizontal" gap={3}>
                                                    <div>
                                                    <button type="button" className="l-b wbtnn back-btn btn btn-primary" onClick={() => prevStep(1)}>Back</button>
                                                    </div>
                                                    <div className="ms-auto">
                                                    <button type="button" className="l-b btnn btn btn-primary" onClick={() => nextStep(3)} disabled={loadingStep2}>
                                                        {loadingStep2 && (
                                                          <span className="spinner-border spinner-border-sm"></span>
                                                        )}
                                                         NEXT</button>
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
                                            <Form.Control placeholder="https://facebook.com/username" type="url" value={fbUrl} onChange={(e) => {setFbUrl(e.target.value)}}/>
                                            </Col>
                                            <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">Instagram</Form.Label>
                                            <Form.Control placeholder="https://instagram.com/username" type="url" value={instaUrl} onChange={(e) => {setInstaUrl(e.target.value)}}/>
                                            </Col>

                                            <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">Youtube</Form.Label>
                                            <Form.Control placeholder="https://youtube.com/username" type="url" value={youtubeUrl} onChange={(e) => {setYoutubeUrl(e.target.value)}}/>
                                            </Col>
                                            <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">Others (websites/account)</Form.Label>
                                            <Form.Control placeholder="https://mywebsite.com" type="url" value={websiteUrl} onChange={(e) => {setWebsiteUrl(e.target.value)}}/>
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
                                                        <button type="button" className="l-b btnn btn btn-primary " onClick={() => nextStep(4)} disabled={loadingStep3}>
                                                        {loadingStep3 && (
                                                          <span className="spinner-border spinner-border-sm"></span>
                                                        )} FINISH</button>
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
