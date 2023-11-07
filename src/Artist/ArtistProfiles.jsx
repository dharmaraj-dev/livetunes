import React, { useState, useEffect } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Upload from "./Upload";
import Stack from 'react-bootstrap/Stack';

import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";
import { setProfileData } from "../actions/artist";
import { successToast, errorToast, infoToast } from "../services/toast-service";
import moment from "moment";
import { getArtistDetails } from "../redux/artistSlice";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Navigate, useNavigate  } from 'react-router-dom';
import Loader from './Loader';
import Skeleton from 'react-loading-skeleton'

const ArtistProfiles = () => {
    const dispatch = useDispatch();
    const MySwal = withReactContent(Swal);
    let navigate = useNavigate();

    const [pageLoading, setPageLoading] = useState(true);
    const { cities, states, categories, gernes, languages, events, eventModes } = useSelector(state => state.common);
    const { artistDetails } = useSelector(state => state.artist);
    const { joiningType, IsProfileSend, ArtistIsApproved } = useSelector(state => state.userAuth);

    if(joiningType === "Judge") {
        navigate("/judgment-panel");
    }

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [email, setEmail] = useState("");
    const [stateId, setStateId] = useState("");
    const [cityId, setCityId] = useState("");
    const [aboutMe, setAboutMe] = useState("");

    const [fbUrl, setFbUrl] = useState("");
    const [instaUrl, setInstaUrl] = useState("");
    const [youtubeUrl, setYoutubeUrl] = useState("");
    const [websiteUrl, setWebsiteUrl] = useState("");

    const [selCategories, setSelCategories] = useState([]);
    const [selGernes, setSelGernes] = useState([]);
    const [selLanguages, setSelLanguages] = useState([]);
    const [expInYears, setSelExpInYears] = useState("");
    const [selPrefEvents, setSelPrefEvents] = useState([]);
    const [selWillingToTravel, setSelWillingToTravel] = useState("");
    const [selExpState, setSelExpState] = useState([]);
    const [selPerfDuration, setSelPerfDuration] = useState("");
    const [selChargesType, setSelChargesType] = useState(1);
    const [selChargesFrom, setSelChargesFrom] = useState("");
    const [selChargesTo, setSelChargesTo] = useState("");
    const [selPrivSurpEvent, setSelPrivSurpEvent] = useState(0);
    const [selPrivSurpEventMode, setSelPrivSurpEventMode] = useState([]);
    const [selAvailVirtualEvent, setSelVirtualEvent] = useState(0);
    const [selAvailVirtualEventType, setSelVirtualEventType] = useState([]);
    const [selAboutArtist, setSelAboutArtist] = useState("");

    const [enableStep2, setEnableStep2] = useState(false);
    const [enableStep3, setEnableStep3] = useState(false);
    const [loading, setLoading] = useState(false);


    const [options] =useState(['Singer','Guitarist','Tabla player','Drummer','Keyboard player']) ;
    const [options2] =useState(['Classical','Bollywood','Jazz','Bhajan','Rock']) ;
    const [options3] =useState(['English','Hindi','Panjabi','Gujrati','Tamil','Bangali','Malyalam','Nepali']) ;
    const [options4] =useState(['Weddings','Religious','Café Gigs','Music Festivals','Private Parties']) ;
    const [options5] =useState(['Valentines day','Mothers day','Fathers day','Propasal special','Independence day']) ;
    const [options6] =useState(['Google meets','zoom','discord']) ;

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

        setSelPrefEvents(selectedList);
    }

    const removeEvent = (selectedList, removedItem) => {
        setSelPrefEvents(selectedList);
    }

    const selectEventMode = (selectedList, selectedItem) => {
        setSelPrivSurpEventMode(selectedList);
    }

    const removeEventMode = (selectedList, removedItem) => {
        setSelPrivSurpEventMode(selectedList);
    }

    const selectEventVirtual = (selectedList, selectedItem) => {
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

    const saveChanges = () => {
        if(!ArtistIsApproved) {
            Swal.fire('Please approve your profile first!', '', 'info').then((res) => {
                navigate('/artists-profile')
            })
            return false;
        }
        if(!enableStep2 && !enableStep3) {
            infoToast('Nothing to save....');
            return false;
        }
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
        }
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
                BriefIntro: aboutMe
            },
            "selASDetails": {
                FacebookLink: fbUrl,
                InstagramLink: instaUrl,
                YouTubeLink: youtubeUrl,
                OtherLink: websiteUrl
            }
        };
        setLoading(true);
        dispatch(setProfileData(data)).then((response) => {
            if(response.data.IsSuccess) {
                successToast(response.data.Message);
            } else {
                errorToast(response.data.Message);
            }
            setEnableStep2(false);
            setEnableStep3(false);
            setLoading(false);
        }).catch((err) => {
            setLoading(false);
            errorToast(err.message);
        });
    }

    const cancelChanges = () => {
        if(!enableStep2 && !enableStep3) {
            infoToast('Nothing to do....');
            return false;
        }
        setLoading(false);
        setEnableStep2(false);
        setEnableStep3(false);
        infoToast("Changes discarded...");
        dispatch(getArtistDetails());
        updateStateOnDiscard();
    }

    const updateStateOnDiscard = () => {
        if(artistDetails) {
            setFirstName(artistDetails?.selApInfo?.FirstName);
            setLastName(artistDetails?.selApInfo?.LastName);
            setContactNo(artistDetails?.selApInfo?.ContactNo);
            setEmail(artistDetails?.selApInfo?.EmailId);
            setStateId(artistDetails?.selApInfo?.StateId);
            setCityId(artistDetails?.selApInfo?.CityId);
            setAboutMe(artistDetails?.selAPDetails?.BriefIntro);


            setFbUrl(artistDetails?.selASDetails?.FacebookLink);
            setInstaUrl(artistDetails?.selASDetails?.InstagramLink);
            setYoutubeUrl(artistDetails?.selASDetails?.YouTubeLink);
            setWebsiteUrl(artistDetails?.selASDetails?.OtherLink);

            if(artistDetails?.selAPDetails?.CategoryId !== null && artistDetails?.selAPDetails?.CategoryId.split(",")) {
                const tmpSelCategories = [];
                for (let i in artistDetails?.selAPDetails?.CategoryId.split(",")) {
                    tmpSelCategories.push(
                        {
                            CategoryId: artistDetails?.selAPDetails?.CategoryId.split(",")[i],
                            CategoryName: artistDetails?.selAPDetails?.CategoryName.split(",")[i]
                        }
                    )
                }
                setSelCategories(tmpSelCategories);
            }

            if(artistDetails?.selAPDetails?.GenreId !== null && artistDetails?.selAPDetails?.GenreId.split(",")) {
                const tmpSelGernes = [];
                for (let i in artistDetails?.selAPDetails?.GenreId.split(",")) {
                    tmpSelGernes.push(
                        {
                            GenreId: artistDetails?.selAPDetails?.GenreId.split(",")[i],
                            GenreName: artistDetails?.selAPDetails?.GenreName.split(",")[i]
                        }
                    )
                }
                setSelGernes(tmpSelGernes);
            }

            if(artistDetails?.selAPDetails?.LanguageId !== null && artistDetails?.selAPDetails?.LanguageId.split(",")) {
                const tmpSelLanguages = [];
                for (let i in artistDetails?.selAPDetails?.LanguageId.split(",")) {
                    tmpSelLanguages.push(
                        {
                            LanguageId: artistDetails?.selAPDetails?.LanguageId.split(",")[i],
                            LanguageName: artistDetails?.selAPDetails?.LanguageName.split(",")[i]
                        }
                    )
                }
                setSelLanguages(tmpSelLanguages);
            }
            
            setSelExpInYears(artistDetails?.selAPDetails?.PExperience);

            if(artistDetails?.selAPDetails?.EventsId != null && artistDetails?.selAPDetails?.EventsId.split(",")) {
                const tmpSelPrefEvents = [];
                for (let i in artistDetails?.selAPDetails?.EventsId.split(",")) {
                    tmpSelPrefEvents.push(
                        {
                            EventsId: artistDetails?.selAPDetails?.EventsId.split(",")[i],
                            EventsName: artistDetails?.selAPDetails?.EventsName.split(",")[i]
                        }
                    )
                }
                setSelPrefEvents(tmpSelPrefEvents);
            }

            if(artistDetails?.selAPDetails?.YesOtherState) {
                setSelWillingToTravel(1);
            } else if(artistDetails?.selAPDetails?.NoOtherState) {
                setSelWillingToTravel(0);
            }  else if(artistDetails?.selAPDetails?.IsOtherState) {
                setSelWillingToTravel(2);
            }

            if(artistDetails?.selAPDetails?.OtherStateId !== null && artistDetails?.selAPDetails?.OtherStateId.split(",")) {
                const tmpSelExpStates = [];
                for (let i in artistDetails?.selAPDetails?.OtherStateId.split(",")) {
                    tmpSelExpStates.push(
                        {
                            StateId: artistDetails?.selAPDetails?.OtherStateId.split(",")[i],
                            StateName: artistDetails?.selAPDetails?.OtherStateName.split(",")[i]
                        }
                    )
                }
                setSelExpState(tmpSelExpStates);
            }

            if (artistDetails?.selAPDetails?.PDuration1Hr) {
                setSelPerfDuration(1);
            } else if (artistDetails?.selAPDetails?.PDuration2Hr) {
                setSelPerfDuration(2);
            } else if (artistDetails?.selAPDetails?.DurationRemark != null) {
                setSelPerfDuration(artistDetails?.selAPDetails?.DurationRemark);
            }
            setSelChargesType(artistDetails?.selAPDetails?.IsPerShow ? 1 : 2);
            setSelChargesFrom(artistDetails?.selAPDetails?.FromCharge);
            setSelChargesTo(artistDetails?.selAPDetails?.ToCharge);
            setSelPrivSurpEvent(artistDetails?.selAPDetails?.YesPEvents ? 1 : 0);

            if(artistDetails?.selAPDetails?.ModeId !== null && artistDetails?.selAPDetails?.ModeId.split(",")) {
                const tmpSelSurpMode = [];
                for (let i in artistDetails?.selAPDetails?.ModeId.split(",")) {
                    tmpSelSurpMode.push(
                        {
                            EventModeId: artistDetails?.selAPDetails?.ModeId.split(",")[i],
                            EventModeName: artistDetails?.selAPDetails?.ModeName.split(",")[i]
                        }
                    )
                }
                setSelPrivSurpEventMode(tmpSelSurpMode);
            }

            setSelVirtualEvent(artistDetails?.selAPDetails?.YesVEvents ? 1 : 0);

            if(artistDetails?.selAPDetails?.EventTypeId !== null && artistDetails?.selAPDetails?.EventTypeId.split(",")) {
                const tmpSelVirtualEventTypes = [];
                for (let i in artistDetails?.selAPDetails?.EventTypeId.split(",")) {
                    tmpSelVirtualEventTypes.push(
                        {
                            EventsId: artistDetails?.selAPDetails?.EventTypeId.split(",")[i],
                            EventsName: artistDetails?.selAPDetails?.EventTypeName.split(",")[i]
                        }
                    )
                }
                setSelVirtualEventType(tmpSelVirtualEventTypes);
            }
        }
    }

    useEffect(() => {
        if(IsProfileSend) {
            if(artistDetails.IsSuccess) {
                setPageLoading(false);
            } else {
                dispatch(getArtistDetails()).then((res) => {
                    setPageLoading(false);
                }).catch((err) => {
                    navigate('/')
                })
            }
        } else {
            setPageLoading(false);
        }
        if(artistDetails) {
            setFirstName(artistDetails?.selApInfo?.FirstName);
            setLastName(artistDetails?.selApInfo?.LastName);
            setContactNo(artistDetails?.selApInfo?.ContactNo);
            setEmail(artistDetails?.selApInfo?.EmailId);
            setStateId(artistDetails?.selApInfo?.StateId);
            setCityId(artistDetails?.selApInfo?.CityId);
            setAboutMe(artistDetails?.selAPDetails?.BriefIntro);


            setFbUrl(artistDetails?.selASDetails?.FacebookLink);
            setInstaUrl(artistDetails?.selASDetails?.InstagramLink);
            setYoutubeUrl(artistDetails?.selASDetails?.YouTubeLink);
            setWebsiteUrl(artistDetails?.selASDetails?.OtherLink);

            if(artistDetails?.selAPDetails?.CategoryId !== null && artistDetails?.selAPDetails?.CategoryId.split(",")) {
                const tmpSelCategories = [];
                for (let i in artistDetails?.selAPDetails?.CategoryId.split(",")) {
                    tmpSelCategories.push(
                        {
                            CategoryId: artistDetails?.selAPDetails?.CategoryId.split(",")[i],
                            CategoryName: artistDetails?.selAPDetails?.CategoryName.split(",")[i]
                        }
                    )
                }
                setSelCategories(tmpSelCategories);
            }

            if(artistDetails?.selAPDetails?.GenreId !== null && artistDetails?.selAPDetails?.GenreId.split(",")) {
                const tmpSelGernes = [];
                for (let i in artistDetails?.selAPDetails?.GenreId.split(",")) {
                    tmpSelGernes.push(
                        {
                            GenreId: artistDetails?.selAPDetails?.GenreId.split(",")[i],
                            GenreName: artistDetails?.selAPDetails?.GenreName.split(",")[i]
                        }
                    )
                }
                setSelGernes(tmpSelGernes);
            }

            if(artistDetails?.selAPDetails?.LanguageId !== null && artistDetails?.selAPDetails?.LanguageId.split(",")) {
                const tmpSelLanguages = [];
                for (let i in artistDetails?.selAPDetails?.LanguageId.split(",")) {
                    tmpSelLanguages.push(
                        {
                            LanguageId: artistDetails?.selAPDetails?.LanguageId.split(",")[i],
                            LanguageName: artistDetails?.selAPDetails?.LanguageName.split(",")[i]
                        }
                    )
                }
                setSelLanguages(tmpSelLanguages);
            }
            
            setSelExpInYears(artistDetails?.selAPDetails?.PExperience);

            if(artistDetails?.selAPDetails?.EventsId !== null && artistDetails?.selAPDetails?.EventsId.split(",")) {
                const tmpSelPrefEvents = [];
                for (let i in artistDetails?.selAPDetails?.EventsId.split(",")) {
                    tmpSelPrefEvents.push(
                        {
                            EventsId: artistDetails?.selAPDetails?.EventsId.split(",")[i],
                            EventsName: artistDetails?.selAPDetails?.EventsName.split(",")[i]
                        }
                    )
                }
                setSelPrefEvents(tmpSelPrefEvents);
            }

            if(artistDetails?.selAPDetails?.YesOtherState) {
                setSelWillingToTravel(1);
            } else if(artistDetails?.selAPDetails?.NoOtherState) {
                setSelWillingToTravel(0);
            }  else if(artistDetails?.selAPDetails?.IsOtherState) {
                setSelWillingToTravel(2);
            }

            if(artistDetails?.selAPDetails?.OtherStateId !== null && artistDetails?.selAPDetails?.OtherStateId.split(",")) {
                const tmpSelExpStates = [];
                for (let i in artistDetails?.selAPDetails?.OtherStateId.split(",")) {
                    tmpSelExpStates.push(
                        {
                            StateId: artistDetails?.selAPDetails?.OtherStateId.split(",")[i],
                            StateName: artistDetails?.selAPDetails?.OtherStateName.split(",")[i]
                        }
                    )
                }
                setSelExpState(tmpSelExpStates);
            }

            if (artistDetails?.selAPDetails?.PDuration1Hr) {
                setSelPerfDuration(1);
            } else if (artistDetails?.selAPDetails?.PDuration2Hr) {
                setSelPerfDuration(2);
            } else if (artistDetails?.selAPDetails?.DurationRemark != null) {
                setSelPerfDuration(artistDetails?.selAPDetails?.DurationRemark);
            }
            setSelChargesType(artistDetails?.selAPDetails?.IsPerShow ? 1 : 2);
            setSelChargesFrom(artistDetails?.selAPDetails?.FromCharge);
            setSelChargesTo(artistDetails?.selAPDetails?.ToCharge);
            setSelPrivSurpEvent(artistDetails?.selAPDetails?.YesPEvents ? 1 : 0);

            if(artistDetails?.selAPDetails?.ModeId !== null && artistDetails?.selAPDetails?.ModeId.split(",")) {
                const tmpSelSurpMode = [];
                for (let i in artistDetails?.selAPDetails?.ModeId.split(",")) {
                    tmpSelSurpMode.push(
                        {
                            EventModeId: artistDetails?.selAPDetails?.ModeId.split(",")[i],
                            EventModeName: artistDetails?.selAPDetails?.ModeName.split(",")[i]
                        }
                    )
                }
                setSelPrivSurpEventMode(tmpSelSurpMode);
            }

            setSelVirtualEvent(artistDetails?.selAPDetails?.YesVEvents ? 1 : 0);

            if(artistDetails?.selAPDetails?.EventTypeId !== null && artistDetails?.selAPDetails?.EventTypeId.split(",")) {
                const tmpSelVirtualEventTypes = [];
                for (let i in artistDetails?.selAPDetails?.EventTypeId.split(",")) {
                    tmpSelVirtualEventTypes.push(
                        {
                            EventsId: artistDetails?.selAPDetails?.EventTypeId.split(",")[i],
                            EventsName: artistDetails?.selAPDetails?.EventTypeName.split(",")[i]
                        }
                    )
                }
                setSelVirtualEventType(tmpSelVirtualEventTypes);
            }
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
                {pageLoading ? (
                <Container fluid>
                    <div className="main-artists-list">
                        <section className="mt-4">
                            <Row>
                                <Col lg={8}>
                                    <Skeleton height={40} className="mb-3" />
                                </Col>
                                <Col lg={4}>
                                    <Skeleton style={{marginRight:"2%"}} width="48%" height={40} className="mb-3" inline={true} />
                                    <Skeleton width="48%" height={40} className="mb-3" inline={true} />
                                </Col>
                                <Col lg={12}>
                                   <Skeleton height={20} className="mb-4"/>
                                </Col>
                            </Row>
                            
                            
                        </section>
                        <Row className="mt-4">
                            <Col lg={4} md={4} sm={4}>
                                <Skeleton className="" count={1} height="100%" />
                            </Col>
                            <Col lg={8} md={8} sm={8}>
                                <Skeleton className="mb-3" count={1} height={40} />
                                <Row>
                                    <Col lg={6}>
                                        <Skeleton className="mb-3" count={1} height={25} />
                                    </Col>
                                    <Col lg={6}>
                                        <Skeleton className="mb-3" count={1} height={25} />
                                    </Col>
                                    <Col lg={6}>
                                        <Skeleton className="mb-3" count={1} height={25} />
                                    </Col>
                                    <Col lg={6}>
                                        <Skeleton className="mb-3" count={1} height={25} />
                                    </Col>
                                    <Col lg={6}>
                                        <Skeleton className="mb-3" count={1} height={25} />
                                    </Col>
                                    <Col lg={6}>
                                        <Skeleton className="mb-3" count={1} height={25} />
                                    </Col>
                                    <Col lg={12}>
                                        <Skeleton className="mb-3" count={1} height={80} />
                                    </Col>
                                    <Col lg={12}>
                                        <Skeleton className="mb-3" count={1} height={30} />
                                    </Col>
                                    <Col lg={6}>
                                        <Skeleton className="mb-3" count={1} height={25} />
                                    </Col>
                                    <Col lg={6}>
                                        <Skeleton className="mb-3" count={1} height={25} />
                                    </Col>
                                    <Col lg={6}>
                                        <Skeleton className="mb-3" count={1} height={25} />
                                    </Col>
                                    <Col lg={6}>
                                        <Skeleton className="mb-3" count={1} height={25} />
                                    </Col>
                                </Row>
                                
                                <div className="text-right" >
                                    <Skeleton count={0.3} height={25} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                ):(
                <Container fluid>
                    <div className="main-artists-list">
                    <div className="artist-main-profile-tophead mb-5">
                        <Stack direction="horizontal" gap={3}>
                        <p className="l-sb head fs-3 mb-0">General Settings</p>
                        <div className="ms-auto profile_action_buttons">
                            <button type="button" className="l-sb wbtnn back-btn btn btn-primary red-color mr-2" onClick={cancelChanges}>Cancel</button>
                            <button
                                type="button"
                                className={`l-sb wbtnn back-btn btn btn-primary red-color ${enableStep2 || enableStep3 ? '' : 'bg-disabled'}`}
                                onClick={saveChanges}
                                disabled={loading}
                            >
                            {loading && (
                              <span className="spinner-border spinner-border-sm"></span>
                            )} Save</button>
                        </div>
                        </Stack>
                        <hr className="mt-2 mb-2"/>
                        <p className="l-r sub-head">Update your Photo and personal details here</p>
                    </div>
                        <Row>
                            <Col lg={4}>
                                <Upload/>
                            </Col>
                            <Col lg={8}>
                            <div className="profile-text-sec artist-profile-text-sec">
                                <div className="head">
                                    <Stack direction="horizontal" gap={3}>
                                    <h2>Personal Information</h2>
                                    </Stack>
                                </div>

                                <Row className="align-items-center">
                                    <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">First Name:
                                            <p className="l-r sub-head">{firstName}</p>
                                        </Form.Label>
                                    </Col>
                                    <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">Last Name: 
                                            <p className="l-r sub-head">{lastName}</p>
                                        </Form.Label>
                                    </Col>

                                    <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">Contact no.:
                                            <p className="l-r sub-head">{contactNo}</p>
                                        </Form.Label>
                                    </Col>
                                    <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">Email:
                                            <p className="l-r sub-head">{email}</p>
                                        </Form.Label>
                                    </Col>
                                    <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">State:
                                            <p className="l-r sub-head">
                                                {states?.filter((key) => !key.IsCancelled && key.StateId === stateId).map((state, index) => {
                                                    return (state.StateName)
                                                })}
                                            </p>
                                        </Form.Label>
                                    </Col>
                                    <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">City:
                                            <p className="l-r sub-head">
                                                {cities?.filter((key) => !key.IsCancelled && key.CityId === cityId).map((city, index) => {
                                                    return (city.CityName)
                                                })}
                                            </p>
                                        </Form.Label>
                                    </Col>
                                    
                                    <Col lg={12} md="12" className="mb-4">
                                        <Form.Label className="l-sb">About me: <p className="l-r sub-head">{aboutMe}</p>
                                        </Form.Label>
                                    </Col>
                                    
                                </Row>
                            </div>

                            <div className="profile-text-sec artist-profile-text-sec">
                                <div className="head">
                                    <Stack direction="horizontal" gap={3}>
                                    <h2>Social Links</h2>
                                    <h2 className={`fs-6 ms-auto cursor-pointer red-color af-edit-sec ${!enableStep2 ? 'bg-disabled' : ''} `} onClick={() => {setEnableStep2(!enableStep2)}}>Edit</h2>
                                    </Stack>
                                </div>

                                <Row className="align-items-center">
                                    <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">Fackbook</Form.Label>
                                        <Form.Control placeholder="https://facebook.com/username" type="url" value={fbUrl} onChange={(e) => {setFbUrl(e.target.value)}} disabled={!enableStep2}/>
                                        </Col>
                                        <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">Instagram</Form.Label>
                                        <Form.Control placeholder="https://instagram.com/username" type="url" value={instaUrl} onChange={(e) => {setInstaUrl(e.target.value)}} disabled={!enableStep2}/>
                                        </Col>

                                        <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">Youtube</Form.Label>
                                        <Form.Control placeholder="https://youtube.com/username" type="url" value={youtubeUrl} onChange={(e) => {setYoutubeUrl(e.target.value)}} disabled={!enableStep2}/>
                                        </Col>
                                        <Col lg={6} md="12" className="mb-4">
                                        <Form.Label className="l-sb">Others (websites/account)</Form.Label>
                                        <Form.Control placeholder="https://mywebsite.com" type="url" value={websiteUrl} onChange={(e) => {setWebsiteUrl(e.target.value)}} disabled={!enableStep2}/>
                                    </Col>
                                </Row>
                            </div>

                            <div className="profile-text-sec artist-profile-text-sec">
                                <div className="head">
                                    <Stack direction="horizontal" gap={3}>
                                    <h2>Performance details</h2>
                                    <h2 className={`fs-6 ms-auto cursor-pointer red-color af-edit-sec ${!enableStep3 ? 'bg-disabled' : ''} `} onClick={() => {setEnableStep3(!enableStep3)}}>Edit</h2>
                                    </Stack>
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
                                        disabled={!enableStep3}
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
                                        disabled={!enableStep3}
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
                                            disabled={!enableStep3}
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
                                            disabled={!enableStep3}
                                        />
                                    </Col>
                                   
                                    <Col lg={6} md="12" className="mb-4">
                                    <Form.Label className="l-sb">Willing to travel to other states for live events<sup className="red-color">*</sup></Form.Label>
                                    <div className="profile-gender mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="selWillingToTravel" id="flexRadioDefault1" value={selWillingToTravel} onChange={() => {setSelWillingToTravel(1)}} checked={selWillingToTravel == 1 ? true : false} disabled={!enableStep3}/>
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Yes
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="selWillingToTravel" id="flexRadioDefault2" value={selWillingToTravel} onChange={() => {setSelWillingToTravel(0)}} checked={selWillingToTravel == 0 ? true : false} disabled={!enableStep3}/>
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            No
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="selWillingToTravel" id="flexRadioDefault3" value={selWillingToTravel} onChange={() => {setSelWillingToTravel(2)}} checked={selWillingToTravel == 2 ? true : false} disabled={!enableStep3}/>
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
                                            disabled={!enableStep3}
                                        />
                                    )}
                                    </Col>

                                    <Col lg={6} md="12" className="mb-4">
                                    <Form.Label className="l-sb">Preferred performance duration<sup className="red-color">*</sup></Form.Label>
                                    <div className="profile-gender mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="selPerfDuration" id="flexRadioDefault4" value={selPerfDuration} onChange={(e) => {setSelPerfDuration(1)}} checked={selPerfDuration === 1 ? true : false}  disabled={!enableStep3}/>
                                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                            1Hr
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="selPerfDuration" id="flexRadioDefault5" value={selPerfDuration} onChange={(e) => {setSelPerfDuration(2)}} checked={selPerfDuration === 2 ? true : false} disabled={!enableStep3}/>
                                            <label className="form-check-label" htmlFor="flexRadioDefault5">
                                            2Hrs
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="selPerfDuration" id="flexRadioDefault6" value={selPerfDuration} onChange={(e) => {setSelPerfDuration(3)}} checked={selPerfDuration > 2 ? true : false} disabled={!enableStep3}/>
                                            <label className="form-check-label" htmlFor="flexRadioDefault6">
                                            more than 2 hrs
                                            </label>
                                        </div>
                                    </div>
                                    {selPerfDuration > 2 && (
                                        <Form.Control placeholder="Specify duration if more than 2 hrs" type="number" min="3" value={selPerfDuration} onChange={(e) => {setSelPerfDuration(e.target.value)}} disabled={!enableStep3}/>
                                    )}
                                    </Col>

                                    <Col lg={6} md="12" className="mb-4">
                                    <Form.Label className="l-sb">Performance charges (set your charges)<sup className="red-color">*</sup></Form.Label>
                                    <div className="profile-gender mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="selChargesType" id="flexCheckboxDefault1" value={selChargesType} onChange={(e) => {setSelChargesType(1)}} checked={selChargesType === 1 ? true : false} disabled={!enableStep3}/>
                                            <label className="form-check-label" htmlFor="flexCheckboxDefault1">
                                            per show
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="selChargesType" id="flexCheckboxDefault2" value={selChargesType} onChange={(e) => {setSelChargesType(2)}} checked={selChargesType === 2 ? true : false} disabled={!enableStep3}/>
                                            <label className="form-check-label" htmlFor="flexCheckboxDefault2">
                                            Per hour
                                            </label>
                                        </div>
                                    </div>
                                    <Stack direction="horizontal" gap={3}>
                                    <Form.Control placeholder="From ₹" type="number" value={selChargesFrom} onChange={(e) => {setSelChargesFrom(e.target.value)}} min="0" disabled={!enableStep3}/>
                                    <Form.Control placeholder="To ₹" type="number" value={selChargesTo} onChange={(e) => {setSelChargesTo(e.target.value)}} min="0" disabled={!enableStep3}/>
                                    </Stack>
                                    </Col>

                                    <Col lg={6} md="12" className="mb-4">
                                    <Form.Label className="l-sb">Available for Private surprise events</Form.Label>
                                    <div className="profile-gender mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="selPrivSurpEvent" id="flexRadioDefault9" value={selPrivSurpEvent} onChange={(e) => {setSelPrivSurpEvent(1)}} checked={selPrivSurpEvent === 1 ? true : false} disabled={!enableStep3}/>
                                            <label className="form-check-label" htmlFor="flexRadioDefault9">
                                            Yes
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="selPrivSurpEvent" id="flexRadioDefault10" value={selPrivSurpEvent} onChange={(e) => {setSelPrivSurpEvent(0)}} checked={selPrivSurpEvent === 0 ? true : false} disabled={!enableStep3}/>
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
                                            disabled={!enableStep3}
                                        />
                                    )}
                                    </Col>

                                    <Col lg={6} md="12" className="mb-4">
                                    <Form.Label className="l-sb">Available for virtual events</Form.Label>
                                    <div className="profile-gender mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault7" value={selAvailVirtualEvent} onChange={(e) => {setSelVirtualEvent(1)}} checked={selAvailVirtualEvent === 1 ? true : false} disabled={!enableStep3}/>
                                            <label className="form-check-label" htmlFor="flexRadioDefault7">
                                            Yes
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault8" value={selAvailVirtualEvent} onChange={(e) => {setSelVirtualEvent(0)}} checked={selAvailVirtualEvent === 0 ? true : false} disabled={!enableStep3}/>
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
                                            disabled={!enableStep3}
                                        />
                                    )}
                                    </Col>
                                </Row>
                            </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                )}
            </div>
            </div>
        </div>
    </>
  )
}

export default ArtistProfiles