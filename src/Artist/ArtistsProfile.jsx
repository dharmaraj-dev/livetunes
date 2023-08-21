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
import { getCities, getStates, getCategories, getGernes, getLanguages, getEvents, getEventModes } from "../actions/common";
import { successToast, errorToast, infoToast } from "../services/toast-service";
import moment from "moment";
import { getProfileData, submitArtistApplicationTJudge } from "../actions/artist";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {
  IS_ARTIST_PROFILE_SEND,
  ARTIST_IS_PENDING,
  ARTIST_IS_REJECTED,
  ARTIST_IS_APPROVED
} from "../actions/types";
import { Navigate, useNavigate  } from 'react-router-dom';

import Loader from './Loader';
import ThreeDotLoader from './ThreeDotLoader';
import DhanTeNan from '../assets/music/dhan_te_nan.mp3';
import './Artist.css'

const ArtistsProfile = (props) => {
    const dispatch = useDispatch();
    const MySwal = withReactContent(Swal);
    let navigate = useNavigate();
    const audio = new Audio(DhanTeNan);

    const { cities, states, categories, gernes, languages, events, eventModes } = useSelector(state => state.common);
    const { artistProfileData } = useSelector(state => state.artist);
    const { IsProfileSend, ArtistIsApproved, ArtistIsPending, ArtistIsNotSubmitted, ArtistIsRejected } = useSelector(state => state.auth);
    // if(ArtistIsApproved) {
    //     navigate("/my-profile");
    // }

    const [pageLoading, setPageLoading] = useState(true);
    const [currentStep, setCurrentStep] = useState(1);
    const [checkStatus, setCheckStatus] = useState(false);

    //step 1 form
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [email, setEmail] = useState("");
    const [stateId, setStateId] = useState("");
    const [stateName, setStateName] = useState("");
    const [cityId, setCityId] = useState("");
    const [cityName, setCityName] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("male");
    const [loadingStep1, setStep1Loading] = useState(false);

    const [filteredCities,setFilteredCities] = useState([]);

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
    const [applicationStatus, setApplicationStatus] = useState(0); 
    // 0 - not applied
    // 1  - pending
    // 2  - rejected
    // 3 - approved
    const [profileSentToJusgeForVerification, setProfileSentToJusgeForVerification] = useState(false);

    const handleClose = () => {
        setShow(false);
        if(applicationStatus == 3) {
            navigate("/my-profile");
        } else {
            navigate("/");
        }
    };
    const handleShow = () => setShow(true);

    const nextStep = (step) => {
        if(applicationStatus != 0) {
            errorToast('Application is in review, not allowed to edit/update.');
            return false;
        }
        if(currentStep == 1) {
            //step 2 api 
            if(firstName === "" || firstName === undefined) {
                errorToast('First Name is required.');
                return false;
            } else if(lastName === "" || lastName === undefined) {
                errorToast('Last Name is required.');
                return false;
            } else if(contactNo === "" || contactNo === undefined) {
                errorToast('Contact No is required.');
                return false;
            } else if(email === "" || email === undefined) {
                errorToast('Email is required.');
                return false;
            } else if(stateId === 0 || stateId === undefined || stateId === "") {
                errorToast('State is required.');
                return false;
            } else if(cityId === 0 || cityId === undefined || cityId === "") {
                errorToast('City is required.');
                return false;
            } else if(gender === "" || gender === undefined) {
                errorToast('Gender is required.');
                return false;
            } else {

                if(
                    firstName === artistProfileData?.selApInfo?.FirstName &&
                    lastName === artistProfileData?.selApInfo?.LastName &&
                    contactNo === artistProfileData?.selApInfo?.ContactNo &&
                    email === artistProfileData?.selApInfo?.EmailId &&
                    stateId === artistProfileData?.selApInfo?.StateId && 
                    cityId === artistProfileData?.selApInfo?.CityId &&
                    dob === moment(artistProfileData?.selApInfo?.DateOfBirth).format("YYYY-MM-DD") &&
                    gender === artistProfileData?.selApInfo?.Gender
                ) {
                    infoToast('Nothing new to save...');
                    setCurrentStep(step);
                    return false;
                }

                //call api
                const data = {
                    "selApInfo": {
                        firstName,
                        lastName,
                        FullName: firstName+' '+ lastName,
                        ContactNo: contactNo,
                        EmailId: email,
                        StateId: stateId,
                        StateName: stateName,
                        CityId: cityId,
                        CityName: cityName,
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
            } else if(selWillingToTravel === "" || selWillingToTravel === undefined) {
                errorToast('Willing to travel to other states for live events is required.');
                return false;
            } else if(selPerfDuration === "" || selPerfDuration === undefined) {
                errorToast('Preferred performance duration is required.');
                return false;
            } else if(selChargesType === "" || selChargesType === undefined) {
                errorToast('Performance charges is required.');
                return false;
            } else if(selChargesFrom === "" || selChargesFrom === undefined) {
                errorToast('From amount is required.');
                return false;
            } else if(Number(selChargesFrom)<0){
                errorToast('Amount can not be negative.');
                return false;
            }
            else if(selChargesTo === "" || selChargesTo === undefined){
                errorToast('To amount is required.');
                return false;
            }else if(Number(selChargesTo)<0){
                errorToast('Amount can not be negative.');
                return false;
            }else if(Number(selChargesTo)<Number(selChargesFrom)){
                errorToast('To amount can not be less than from.')
                return false;
            }
            else if(Number(expInYears)<0){
                errorToast('Experience can not be negative');
                return false;
            }
            else {
                if(
                    selCategories.map(a => a.CategoryId)?.join(",") === artistProfileData?.selAPDetails?.CategoryId &&
                    selCategories.map(a => a.CategoryName)?.join(",") === artistProfileData?.selAPDetails?.CategoryName &&
                    selGernes.map(a => a.GenreId)?.join(",") === artistProfileData?.selAPDetails?.GenreId &&
                    selGernes.map(a => a.GenreName)?.join(",") === artistProfileData?.selAPDetails?.GenreName &&
                    selLanguages.map(a => a.LanguageId)?.join(",") === artistProfileData?.selAPDetails?.LanguageId && 
                    selLanguages.map(a => a.LanguageName)?.join(",")=== artistProfileData?.selAPDetails?.LanguageName && 
                    selPrefEvents.map(a => a.EventsId)?.join(",") === artistProfileData?.selAPDetails?.EventsId &&
                    selPrefEvents.map(a => a.EventsName)?.join(",") === artistProfileData?.selAPDetails?.EventsName &&

                    expInYears === artistProfileData?.selAPDetails?.PExperience &&

                    (selWillingToTravel === 1 ? true : false) === artistProfileData?.selAPDetails?.YesOtherState &&
                    (selWillingToTravel === 0 ? true : false) === artistProfileData?.selAPDetails?.NoOtherState &&
                    (selWillingToTravel === 2 ? true : false) === artistProfileData?.selAPDetails?.IsOtherState &&


                    selExpState.map(a => a.StateId)?.join(",") === artistProfileData?.selAPDetails?.OtherStateId &&
                    selExpState.map(a => a.StateName)?.join(",") === artistProfileData?.selAPDetails?.OtherStateName &&

                    (selPerfDuration === 1 ? true : false) === artistProfileData?.selAPDetails?.PDuration1Hr &&
                    (selPerfDuration === 2 ? true : false) === artistProfileData?.selAPDetails?.PDuration2Hr &&
                    (selPerfDuration > 2 ? true : false) === artistProfileData?.selAPDetails?.PDurationM2Hr &&
                    (selPerfDuration > 2 ? selPerfDuration : null) === artistProfileData?.selAPDetails?.DurationRemark &&
                    (selChargesType === 1 ? true : false) === artistProfileData?.selAPDetails?.IsPerShow &&

                    (selChargesType === 0 ? true : false) === artistProfileData?.selAPDetails?.IsPerHr &&


                    selChargesFrom === artistProfileData?.selAPDetails?.FromCharge &&
                    selChargesTo === artistProfileData?.selAPDetails?.ToCharge &&

                    (selPrivSurpEvent === 1 ? true : false) === artistProfileData?.selAPDetails?.YesPEvents &&
                    (!selPrivSurpEvent === 0 ? true : false) === artistProfileData?.selAPDetails?.NoPEvents &&

                    selPrivSurpEventMode.map(a => a.EventModeId)?.join(",") === artistProfileData?.selAPDetails?.ModeId &&
                    selPrivSurpEventMode.map(a => a.EventModeName)?.join(",") === artistProfileData?.selAPDetails?.ModeName &&

                    (selAvailVirtualEvent === 1 ? true : false) === artistProfileData?.selAPDetails?.YesVEvents &&
                    (!selAvailVirtualEvent === 0 ? true : false) === artistProfileData?.selAPDetails?.NoVEvents &&

                    selAvailVirtualEventType.map(a => a.EventsId)?.join(",") === artistProfileData?.selAPDetails?.EventTypeId  &&
                    selAvailVirtualEventType.map(a => a.EventsName)?.join(",") === artistProfileData?.selAPDetails?.EventTypeName  &&
                    selAboutArtist === artistProfileData?.selAPDetails?.BriefIntro
                ) {
                    infoToast('Nothing new to save...');
                    setCurrentStep(step);
                    return false;
                }

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
                        IsPerHr: selChargesType === 2 ? true : false,
                        FromCharge: selChargesFrom,
                        ToCharge: selChargesTo,
                        YesPEvents: selPrivSurpEvent === 1 ? true : false,
                        NoPEvents: selPrivSurpEvent === 0 ? true : false,
                        ModeId: selPrivSurpEventMode.map(a => a.EventModeId)?.join(","),
                        ModeName: selPrivSurpEventMode.map(a => a.EventModeName)?.join(","),
                        YesVEvents: selAvailVirtualEvent === 1 ? true : false,
                        NoVEvents: selAvailVirtualEvent === 0 ? true : false,
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
            if(fbUrl !=  ("" || undefined) || instaUrl !=  ("" || undefined) || youtubeUrl != ("" || undefined) || websiteUrl != ("" || undefined)) {

                if(
                    fbUrl === artistProfileData?.selASDetails?.FacebookLink &&
                    instaUrl === artistProfileData?.selASDetails?.InstagramLink &&
                    youtubeUrl === artistProfileData?.selASDetails?.YouTubeLink &&
                    websiteUrl === artistProfileData?.selASDetails?.OtherLink 
                ) {
                    infoToast('Nothing new to save...');
                    setCurrentStep(step);
                    return false;
                }

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
        let atLeastOneVideo = false;
        artistProfileData?.selLtMedia?.filter((key) => key.LTMediaURL.includes(".mp4")).map((eveFile, index) => {
            atLeastOneVideo = true;
        });
        if(artistProfileData?.selProfileImage.length == 0) {
            errorToast("Profile picture is required.");
            return false;
        }else if(artistProfileData?.selLtMedia?.length < 2) {
            errorToast("Min 2 attachments are required with atleast 1 video file.");
            return false;
        }else if(!atLeastOneVideo) {
            errorToast("Atlease one video is required for review.");
            return false;
        }else {            

            MySwal.fire({
              title: '<strong>Are you sure!!</strong>',
              icon: 'warning',
              html:
                'Do you want to submit this application?',
              showDenyButton: true,
              confirmButtonText: 'Yes',
              denyButtonText: `No`,
              showLoaderOnConfirm: true,
              preConfirm: () => {
                return dispatch(submitArtistApplicationTJudge()).then((response) => {
                    if(response.data.IsSuccess) {
                        localStorage.setItem('IsProfileSend', true);
                        localStorage.setItem('is_pending', response.data.IsSuccess);
                        setApplicationStatus(1);
                        dispatch({
                            type: IS_ARTIST_PROFILE_SEND,
                            payload: response.data.IsSuccess,
                        });
                        dispatch({
                            type: ARTIST_IS_PENDING,
                            payload: response.data.IsSuccess,
                        });
                        return response;
                    } else {
                        throw new Error(response.data.Message)
                    }
                });
              },
              allowOutsideClick: () => false
            }).then((result) => {
              if (result.isConfirmed && result.value) {
                    setShow(true);
              } else {
                Swal.fire('Application submission cancelled.', '', 'info')
              }
            })
        }
    }

    const selectStateAndGetItsCities = (stateId) => {
        if(stateId !== "" && stateId !== null && stateId !== undefined) {
            const data = cities.filter((cts)=>cts.StateId == stateId);
            setFilteredCities(data)
        }
        else{
            setFilteredCities([])
        }
    }

    const assignCityStateName = (id) => {
        const data = cities.filter((cts)=>cts.StateId == id);
        console.log('data', data)
        if(data.length > 0) {
            setStateName(data[0].StateName);
            setCityName(data[0].CityName);
        } else {
            setStateName("");
            setCityName("");
        }

        console.log(stateName, cityName);
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

    const refreshStatus = () => {
        setCheckStatus(true);
        dispatch(getProfileData()).then((res) => {
            console.log('res', res)
            successToast(res.data.ProfileStatus);
            setCheckStatus(false);
            if(res.data.is_approved) {
                setApplicationStatus(3);
                localStorage.setItem('is_approved', res.data.is_approved);
                localStorage.setItem('is_pending', false);
                localStorage.setItem('is_rejection', false);
                audio.play();
                dispatch({
                    type: ARTIST_IS_APPROVED,
                    payload: res.data.is_approved,
                  });
                dispatch({
                    type: ARTIST_IS_PENDING,
                    payload: false,
                  });
                dispatch({
                    type: ARTIST_IS_REJECTED,
                    payload: false,
                  });
            } else if(res.data.is_pending) {
                localStorage.setItem('is_pending', res.data.is_pending);
                localStorage.setItem('is_approved', false);
                localStorage.setItem('is_rejection', false);
                dispatch({
                    type: ARTIST_IS_PENDING,
                    payload: res.data.is_pending,
                  });
                dispatch({
                    type: ARTIST_IS_APPROVED,
                    payload: false,
                  });
                dispatch({
                    type: ARTIST_IS_REJECTED,
                    payload: false,
                  });
                setApplicationStatus(1);
            } else if(res.data.is_rejection) {
                localStorage.setItem('is_rejection', res.data.is_rejection);
                localStorage.setItem('is_pending', false);
                localStorage.setItem('is_approved', false);
                dispatch({
                    type: ARTIST_IS_REJECTED,
                    payload: res.data.is_rejection,
                  });
                dispatch({
                    type: ARTIST_IS_PENDING,
                    payload: false,
                  });
                dispatch({
                    type: ARTIST_IS_APPROVED,
                    payload: false,
                  });
                setApplicationStatus(2);
            }
        }).catch((err) => {
            navigate('/')
        })
    }

    const applicationRejected = () => {
        navigate('/my-profile');
    }

    useEffect(() => {

        dispatch(getCities());
        dispatch(getStates());
        dispatch(getCategories());
        dispatch(getGernes());
        dispatch(getLanguages());
        dispatch(getEvents());
        dispatch(getEventModes());
            // if(artistProfileData.IsSuccess) {
            //     setPageLoading(false);
            // } else {
            //     dispatch(getProfileData()).then((res) => {
            //         setPageLoading(false);
            //     }).catch((err) => {
            //         navigate('/')
            //     })
            // }
            dispatch(getProfileData()).then((res) => {
                console.log(res.data)
                setPageLoading(false);
                if(res.data?.selApInfo?.FirstName !== null) {
                    setFirstName(res.data?.selApInfo?.FirstName);
                    setLastName(res.data?.selApInfo?.LastName);
                    setContactNo(res.data?.selApInfo?.ContactNo);
                    setEmail(res.data?.selApInfo?.EmailId);
                    setStateId(res.data?.selApInfo?.StateId);
                    setStateName(res.data?.selApInfo?.StateName);
                    selectStateAndGetItsCities(res.data?.selApInfo?.StateId);
                    assignCityStateName(res.data?.selApInfo?.StateId);
                    setCityId(res.data?.selApInfo?.CityId);
                    setCityName(res.data?.selApInfo?.CityName);
                    setDob(moment(res.data?.selApInfo?.DateOfBirth).format("YYYY-MM-DD"));
                    setGender(res.data?.selApInfo?.Gender === null ? "" : res.data?.selApInfo?.Gender);
                }
                
                
    
                if(res.data?.selAPDetails?.CategoryId !== null){
    
                    //step 2
                    if(res.data?.selAPDetails?.CategoryId !== null && res.data?.selAPDetails?.CategoryId.split(",")) {
                        const tmpSelCategories = [];
                        for (let i in res.data?.selAPDetails?.CategoryId.split(",")) {
                            tmpSelCategories.push(
                                {
                                    CategoryId: res.data?.selAPDetails?.CategoryId.split(",")[i],
                                    CategoryName: res.data?.selAPDetails?.CategoryName.split(",")[i]
                                }
                            )
                        }
                        setSelCategories(tmpSelCategories);
                    }
    
                    if(res.data?.selAPDetails?.GenreId !== null && res.data?.selAPDetails?.GenreId.split(",")) {
                        const tmpSelGernes = [];
                        for (let i in res.data?.selAPDetails?.GenreId.split(",")) {
                            tmpSelGernes.push(
                                {
                                    GenreId: res.data?.selAPDetails?.GenreId.split(",")[i],
                                    GenreName: res.data?.selAPDetails?.GenreName.split(",")[i]
                                }
                            )
                        }
                        setSelGernes(tmpSelGernes);
                    }
    
                    if(res.data?.selAPDetails?.LanguageId !== null && res.data?.selAPDetails?.LanguageId.split(",")) {
                        const tmpSelLanguages = [];
                        for (let i in res.data?.selAPDetails?.LanguageId.split(",")) {
                            tmpSelLanguages.push(
                                {
                                    LanguageId: res.data?.selAPDetails?.LanguageId.split(",")[i],
                                    LanguageName: res.data?.selAPDetails?.LanguageName.split(",")[i]
                                }
                            )
                        }
                        setSelLanguages(tmpSelLanguages);
                    }
                    
                    setSelExpInYears(res.data?.selAPDetails?.PExperience);
    
                    if(res.data?.selAPDetails?.EventsId !== null && res.data?.selAPDetails?.EventsId.split(",")) {
                        const tmpSelPrefEvents = [];
                        for (let i in res.data?.selAPDetails?.EventsId.split(",")) {
                            tmpSelPrefEvents.push(
                                {
                                    EventsId: res.data?.selAPDetails?.EventsId.split(",")[i],
                                    EventsName: res.data?.selAPDetails?.EventsName.split(",")[i]
                                }
                            )
                        }
                        setSelPrefEvents(tmpSelPrefEvents);
                    }
    
                    if(res.data?.selAPDetails?.YesOtherState) {
                        setSelWillingToTravel(1);
                    } else if(res.data?.selAPDetails?.NoOtherState) {
                        setSelWillingToTravel(0);
                    }  else if(res.data?.selAPDetails?.IsOtherState) {
                        setSelWillingToTravel(2);
                    }
    
                    if(res.data?.selAPDetails?.OtherStateId !== null && res.data?.selAPDetails?.OtherStateId.split(",")) {
                        const tmpSelExpStates = [];
                        for (let i in res.data?.selAPDetails?.OtherStateId.split(",")) {
                            tmpSelExpStates.push(
                                {
                                    StateId: res.data?.selAPDetails?.OtherStateId.split(",")[i],
                                    StateName: res.data?.selAPDetails?.OtherStateName.split(",")[i]
                                }
                            )
                        }
                        setSelExpState(tmpSelExpStates);
                    }
    
                    if (res.data?.selAPDetails?.PDuration1Hr) {
                        setSelPerfDuration(1);
                    } else if (res.data?.selAPDetails?.PDuration2Hr) {
                        setSelPerfDuration(2);
                    } else if (res.data?.selAPDetails?.DurationRemark != null) {
                        setSelPerfDuration(res.data?.selAPDetails?.DurationRemark);
                    }
                    setSelChargesType(res.data?.selAPDetails?.IsPerShow ? 1 : 2);
                    setSelChargesFrom(res.data?.selAPDetails?.FromCharge);
                    setSelChargesTo(res.data?.selAPDetails?.ToCharge);
                    setSelPrivSurpEvent(res.data?.selAPDetails?.YesPEvents ? 1 : 0);
    
                    if(res.data?.selAPDetails?.ModeId !== null && res.data?.selAPDetails?.ModeId.split(",")) {
                        const tmpSelSurpMode = [];
                        for (let i in res.data?.selAPDetails?.ModeId.split(",")) {
                            tmpSelSurpMode.push(
                                {
                                    EventModeId: res.data?.selAPDetails?.ModeId.split(",")[i],
                                    EventModeName: res.data?.selAPDetails?.ModeName.split(",")[i]
                                }
                            )
                        }
                        setSelPrivSurpEventMode(tmpSelSurpMode);
                    }
    
                    setSelVirtualEvent(res.data?.selAPDetails?.YesVEvents ? 1 : 0);
    
                    if(res.data?.selAPDetails?.EventTypeId !== null && res.data?.selAPDetails?.EventTypeId.split(",")) {
                        const tmpSelVirtualEventTypes = [];
                        for (let i in res.data?.selAPDetails?.EventTypeId.split(",")) {
                            tmpSelVirtualEventTypes.push(
                                {
                                    EventsId: res.data?.selAPDetails?.EventTypeId.split(",")[i],
                                    EventsName: res.data?.selAPDetails?.EventTypeName.split(",")[i]
                                }
                            )
                        }
                        setSelVirtualEventType(tmpSelVirtualEventTypes);
                    }
    
                    setSelAboutArtist(res.data?.selAPDetails?.BriefIntro);
                }
    
                //step 3
                setFbUrl(res.data?.selASDetails?.FacebookLink);
                setInstaUrl(res.data?.selASDetails?.InstagramLink);
                setYoutubeUrl(res.data?.selASDetails?.YouTubeLink);
                setWebsiteUrl(res.data?.selASDetails?.OtherLink);
            }).catch((err) => {
                navigate('/')
            })
        
        if(IsProfileSend && ArtistIsPending) {
            setProfileSentToJusgeForVerification(true);
            setApplicationStatus(1);
            setShow(true);
        } else if(IsProfileSend && ArtistIsRejected) {
            setProfileSentToJusgeForVerification(true);
            setApplicationStatus(2);
            setShow(true);
        } else if(IsProfileSend && ArtistIsApproved) {
            setProfileSentToJusgeForVerification(true);
            setApplicationStatus(3);
            setShow(true);
        }
        if(artistProfileData) {
            if(artistProfileData?.selApInfo?.FirstName !== null) {
                setFirstName(artistProfileData?.selApInfo?.FirstName);
                setLastName(artistProfileData?.selApInfo?.LastName);
                setContactNo(artistProfileData?.selApInfo?.ContactNo);
                setEmail(artistProfileData?.selApInfo?.EmailId);
                setStateId(artistProfileData?.selApInfo?.StateId);
                setStateName(artistProfileData?.selApInfo?.StateName);
                selectStateAndGetItsCities(artistProfileData?.selApInfo?.StateId);
                assignCityStateName(artistProfileData?.selApInfo?.StateId);
                setCityId(artistProfileData?.selApInfo?.CityId);
                setCityName(artistProfileData?.selApInfo?.CityName);
                setDob(moment(artistProfileData?.selApInfo?.DateOfBirth).format("YYYY-MM-DD"));
                setGender(artistProfileData?.selApInfo?.Gender === null ? "" : artistProfileData?.selApInfo?.Gender);
            }
            
            

            if(artistProfileData?.selAPDetails?.CategoryId !== null){

                //step 2
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
            }

            //step 3
            setFbUrl(artistProfileData?.selASDetails?.FacebookLink);
            setInstaUrl(artistProfileData?.selASDetails?.InstagramLink);
            setYoutubeUrl(artistProfileData?.selASDetails?.YouTubeLink);
            setWebsiteUrl(artistProfileData?.selASDetails?.OtherLink);
        }
    }, [])

    function handleKeyDownPhone(e){
        if(e.key=="Tab"){
            e.preventDefault();
            const nextfield = document.querySelector(
              `input[name=email]`
            );
            nextfield.select();
          }
    }

    function handleKeyDownEmail(e){
        if(e.key=="Tab"){
            e.preventDefault();
            const nextfield = document.querySelector(`select[name=state]`);
            console.log(nextfield);
            nextfield.focus();
          }
    }

    function handleStateCityFocus(e){
        e.target.classList.add('focus-state-city');
    }
    
    function handleStateCityBlur(e){
        e.target.classList.remove('focus-state-city');
    }

    function checkDate(e){
        if(e.target.value === '0001-01-01'){
            const date = new Date().toJSON().slice(0, 10);
            setDob(date);
        }
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
                {pageLoading ? (
                <div className="artist_loader">
                    <ThreeDotLoader />
                </div>
                ):(
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
                                                onKeyDown={(e)=>handleKeyDownPhone(e)}
                                              />
                                        </Col>
                                        <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">Email<sup className="red-color">*</sup></Form.Label>
                                            <Form.Control onKeyDown={(e) => handleKeyDownEmail(e)} name="email" placeholder="Email" type="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                                        </Col>
                                        <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">State<sup className="red-color">*</sup></Form.Label>
                                            <Form.Select name="state" aria-label="Default select example" className="form-control" value={stateId} onChange={(e) => {setCityId("");selectStateAndGetItsCities(e.target.value);setStateId(e.target.value); assignCityStateName(e.target.value)}}
                                            onFocus={(e)=> handleStateCityFocus(e)} onBlur={(e)=> handleStateCityBlur(e)}>
                                                <option value="" selected="selected">Select state</option>
                                                {states?.filter((key) => !key.IsCancelled).map((state, index) => {
                                                    return (<option key={`${state.StateId}'_'${state.StateName}`} value={state.StateId}>{state.StateName}</option>)
                                                })}
                                            </Form.Select>
                                        </Col>
                                        <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">City<sup className="red-color">*</sup></Form.Label>

                                            <Form.Select aria-label="Default select example" className="form-control" value={cityId} onChange={(e) => {setCityId(e.target.value); assignCityStateName(stateId)}}
                                            onFocus={(e)=> handleStateCityFocus(e)} onBlur={(e)=> handleStateCityBlur(e)}>
                                                <option>Select city</option>
                                                {filteredCities?.filter((key) => !key.IsCancelled).map((city, index) => {
                                                    return (<option key={`${city.CityId}'_'${city.CityName}`} value={city.CityId}>{city.CityName}</option>)
                                                })}
                                            </Form.Select>
                                        </Col>
                                        
                                        <Col lg={6} md="12" className="mb-4">
                                            <Form.Label className="l-sb">Date of birth</Form.Label>
                                            <Form.Control placeholder="" type="date" value={dob} onBlur={(e)=> checkDate(e)} onChange={(e) => {setDob(e.target.value);}}/>
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
                                            <Form.Label className="l-sb">Genre<sup className="red-color">*</sup></Form.Label>
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
                                                {currentStep < 4 && (
                                                    <h2 className="fs-6 ms-auto cursor-pointer" onClick={skipStep3}>Skip</h2>
                                                )}
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
                                    </div>
                                )}
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
                                        <div className="firework-1"></div>
                                        <div className="firework-2"></div>
                                        <div className="firework-3"></div>
                                        <div className="firework-4"></div>
                                        <div className="firework-5"></div>
                                        <div className="firework-6"></div>
                                        <div className="firework-7"></div>
                                        <div className="firework-8"></div>
                                        <div className="firework-9"></div>
                                        <div className="firework-10"></div>
                                        <div className="firework-11"></div>
                                        <div className="firework-12"></div>
                                        <div className="firework-13"></div>
                                        <div className="firework-14"></div>
                                        <div className="firework-15"></div>
                                        <div className="head-sec text-center white-color">
                                            <h2>Hi <span>{firstName} {lastName}</span>,</h2>
                                            {applicationStatus == 0 && (
                                                <>
                                                    <p className="l-r fs-4 mb-1">Profile Application form Submitted Successfully.</p>
                                                    <p className="l-r fs-4 mb-1">Your profile will be shared with our Music expert panel.</p>
                                                </>
                                            )}
                                            {applicationStatus != 0 && (
                                                <>
                                                    <p className="l-r fs-4 mb-1">Profile Application is Submitted.</p>
                                                    <p className="l-r fs-4 mb-1">Your profile is shared with our Music expert panel.</p>
                                                </>
                                            )}
                                            
                                        </div>
                                        <div className="expert-panel-sec">
                                            {applicationStatus == 1 && (
                                                <>
                                                    <p className="text-center l-r red-color fs-5 mt-2">Your application is in review, you can expect to hear form our team soon via email provided.</p>
                                                    <div className="text-center">
                                                        {checkStatus && (
                                                            <ThreeDotLoader />
                                                        )}
                                                        <button
                                                        variant="primary"
                                                        type="button"
                                                        className="btn w-auto l-sb btnn"
                                                        onClick={refreshStatus}
                                                        >
                                                        Check Status</button>
                                                    </div>
                                                </>
                                            )}
                                            {applicationStatus == 2 && (
                                                    <p className="text-center l-r red-color fs-5 mt-2">Your application has been rejected, please click <span onClick={applicationRejected} className="green-color cursor-pointer underline">here</span> for more details.</p>
                                            )}
                                            {applicationStatus == 3 && (
                                                    <p className="text-center l-r red-color fs-5 mt-2">Your application has been approved, click <span onClick={() => {navigate('/my-profile')}} className="green-color cursor-pointer underline">here</span> to update your profile.</p>
                                            )}
                                        </div>
                                    </Modal.Body>
                                </Modal>
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

export default ArtistsProfile
