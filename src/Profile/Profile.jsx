import React, { useState, useEffect } from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import DefaultProfile from "../assets/images/default_profile.jpeg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {fetchUserProfile, saveProfileData } from "../redux/userProfileSlice";
import { errorToast, infoToast, successToast } from "../services/toast-service";
import moment from "moment";
import Skeleton from "react-loading-skeleton";
import { useNavigate  } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Lang from '../assets/images/lang.png';
import RangeSlider from "../OnBoard/RangeSlider";
import MusictypeSlider from "../OnBoard/MusictypeSlider";
import SelectLanguages from "../OnBoard/SelectLanguages";
import { FilePond, File, registerPlugin } from 'react-filepond'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import authHeader, { authToken } from "../services/auth-header";
import { setUserSettings, setSelectedCity, setSettingsSaveStatus } from '../redux/userSettings';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginImageCrop, FilePondPluginImageTransform, FilePondPluginFileValidateType)

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showStep, setShowStep] = useState(0);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [filteredCities,setFilteredCities] = useState([]);
    const [canEdit, setCanEdit] = useState(false);
    const [profilePic, setProfilePic] = useState([])
    const [profilePicPrev, setProfilePicPrev] = useState(DefaultProfile);

    const {profileData, profileDataLoading, profileDataError, saveProfileDataLoading, saveProfileDataError, saveProfileDataSuccess, saveProfileDataMessage} = useSelector(state => state.userProfile);
    const { cities, states} = useSelector(state => state.common);

    const selectStateAndGetItsCities = (stateId) => {
          if(stateId !== "") {
              const data = cities.filter((cts)=>cts.StateId == stateId.split("_")[0]);
              setFilteredCities(data)
          }
          else{
              setFilteredCities([])
          }
    }

    function validatePIN (pin) {
        return /^(\d{4}|\d{6})$/.test(pin);
    }

    const handleUpdate = (fileItems) => {
        if(fileItems[0]) {
            setProfilePicPrev(URL.createObjectURL(fileItems[0].file));
        }
    }

    const userProfileSubmit = (e) => {
        e.preventDefault();
        if(!validatePIN(pincode)) {
          errorToast("Invalid Pincode");
          return false;
        }
        const data = {
            "FirstName": firstName,
            "LastName": lastName,
            "FullName": firstName + ' '+ lastName,
            "DateOfBirth": dob,
            "Gender": gender,
            "Address1": address,
            "CityId": city.split('_')[0],
            "CityName": city.split('_')[1],
            "StateId": state.split('_')[0],
            "StateName": state.split('_')[1],
            "PinCode": pincode
        }

        dispatch(saveProfileData(data));
    }

    const updateStep = (stp) => {
        setShowStep(stp);
    }

    const { selectedLanguages, selectedCity, userRequestedCities, userMusicalityTypes, userMinimumBudget, userMaximumBudget} = useSelector(state => state.userSettings);
    const { user } = useSelector(state => state.userAuth);

    const proceedToNextPage = (stp) => {
        if(stp === 4) {
            let dataToSend = {
                "LangId":selectedLanguages.map((language)=>language.LanguageId).join(','),
                "LangName":selectedLanguages.map((language)=>language.LanguageName).join(','),
                "MType":userMusicalityTypes.join(','),
                "MinBudget":userMinimumBudget,
                "MaxBudget":userMaximumBudget,
                "RegId":user.RegId
            };

            if(selectedCity != "") {
                dataToSend.CityId = selectedCity.split('_')[0];
                dataToSend.CityName = selectedCity.split('_')[1];
            } 
        
            dispatch(setUserSettings(dataToSend));
            dispatch(setSettingsSaveStatus());
            navigate('/artist-list');
        } else {
            setShowStep(stp);
        }
    }

    const checkIfDisabled = () => {
        if(selectedCity != "") {
            return true;
        } else {
            return false;
        }
    }

    const selectPrefferedCity = (cityId, cityName) => {
        dispatch(setSelectedCity(`${cityId}_${cityName}`))
    }

    useEffect(() => {
        dispatch(fetchUserProfile());

        if(saveProfileDataError) {
            errorToast(saveProfileDataMessage)
        } else if(saveProfileDataSuccess) {
            successToast(saveProfileDataMessage)
        }

        if(Object.keys(profileData).length > 0) {
            setFirstName(profileData.firstName);
            setLastName(profileData.lastName);
            setDob(profileData.dob != "" ? moment(profileData.dob).format("YYYY-MM-DD") : "");
            setGender(profileData.gender);
            setAddress(profileData.address);
            setState(profileData.state);
            selectStateAndGetItsCities(profileData.state);
            setCity(profileData.city);
            setPincode(profileData.pincode);
            setProfilePicPrev(profileData.profileImg != "" ? profileData.profileImg : DefaultProfile);
        }
    }, [profileData, saveProfileDataError, saveProfileDataSuccess]);
  
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
                        {profileDataLoading ? (
                            <Row>
                                <Col lg={4}>
                                    <div className="">
                                        <Skeleton className="" height="100vh"/>
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="">
                                        <Skeleton className="" height="100vh"/>
                                    </div>
                                </Col>
                            </Row>
                        ):(
                        <>
                        {showStep === 0 && (
                        <Row>
                            <Col lg={4}>
                                <div className="main-profile-upload-sec">
                                    <div className="profile-upload-sec">
                                        <div className="inner-profile-upload-sec">
                                            {/* <img src={Profileupload} alt="" className="w-100"/> */}
                                            <img src={profilePicPrev} className="w-100" alt={profilePicPrev}/>
                                        </div>
                                        {canEdit && (
                                        <div className="upload-btn-sec">
                                            <label className="upload_label">
                                                <AiOutlinePlus/>
                                                <FilePond
                                                    allowMultiple={false}
                                                    files={profilePic}
                                                    maxFiles={1}
                                                    allowImageCrop={true}
                                                    allowImageTransform={true}
                                                    imageCropAspectRatio={'1:1'}
                                                    acceptedFileTypes={["image/*"]}
                                                    name="file"
                                                    allowRevert={false}
                                                    allowRemove={false}
                                                    onupdatefiles={(fileItems,e) => {
                                                        setProfilePic(fileItems);
                                                        handleUpdate(fileItems)
                                                    }}
                                                    server={ {
                                                        process: (fieldName, file, metadata, load, error, progress, abort, transfer, options) => {
                                                            // fieldName is the name of the input field
                                                            // file is the actual file object to send
                                                            const formData = new FormData();
                                                            formData.append(fieldName, file, file.name);

                                                            const request = new XMLHttpRequest();
                                                            request.open('POST', 'https://livetunesapi.azurewebsites.net/api/LTMedia/uploadp-image');
                                                            request.setRequestHeader("Authorization", authToken());

                                                            // Should call the progress method to update the progress to 100% before calling load
                                                            // Setting computable to false switches the loading indicator to infinite mode
                                                            request.upload.onprogress = (e) => {
                                                                progress(e.lengthComputable, e.loaded, e.total);
                                                            };

                                                            // Should call the load method when done and pass the returned server file id
                                                            // this server file id is then used later on when reverting or restoring a file
                                                            // so your server knows which file to return without exposing that info to the client
                                                            request.onload = function () {
                                                                if (request.status >= 200 && request.status < 300) {
                                                                    if(JSON.parse(request.response)?.IsSuccess) {
                                                                        successToast('Profile image uploaded successfully.');
                                                                        setProfilePic([]);
                                                                        dispatch(fetchUserProfile());
                                                                    }
                                                                    else {
                                                                        successToast(JSON.parse(request.response)?.Message);
                                                                    }
                                                                    // the load method accepts either a string (id) or an object
                                                                    load(request.responseText);
                                                                } else {
                                                                    // Can call the error method if something is wrong, should exit after
                                                                    error('oh no');
                                                                }
                                                            };

                                                            request.send(formData);

                                                            // Should expose an abort method so the request can be cancelled
                                                            return {
                                                                abort: () => {
                                                                    // This function is entered if the user has tapped the cancel button
                                                                    request.abort();

                                                                    // Let FilePond know the request has been cancelled
                                                                    abort();
                                                                },
                                                            };
                                                        },
                                                        //url: 'https://livetunesapi.azurewebsites.net/api/LTMedia/uploadp-image',
                                                     
                                                    }
                                                    }
                                                    labelIdle='<span class="profile_upload_browse"></span>'
                                                  />
                                            </label>
                                        </div>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="profile-text-sec">
                                    <Stack direction="horizontal" gap={3}>
                                    <div className=""><h2>My Profile</h2></div>
                                    <div className="l-b ms-auto edit-profile" onClick={() => {setCanEdit(!canEdit)}}> <FiEdit className="me-2"/> EDIT PROFILE</div>
                                    </Stack>    

                                    <div className="head">
                                        <h2>General Information</h2>
                                    </div>
                                    <Form onSubmit={(e) => {userProfileSubmit(e)}} method="post">
                                        <Row className="align-items-center">
                                            <Col lg={6} md="12" className="mb-4">
                                                <Form.Label className="l-sb">First Name</Form.Label>
                                                <Form.Control placeholder="First Name" type="text" value={firstName} onChange={(e) => {setFirstName(e.target.value)}} required disabled={!canEdit}/>
                                            </Col>
                                            <Col lg={6} md="12" className="mb-4">
                                                <Form.Label className="l-sb">Last Name</Form.Label>
                                                <Form.Control placeholder="Last Name" type="text" value={lastName} onChange={(e) => {setLastName(e.target.value)}} required disabled={!canEdit}/>
                                            </Col>
                                            <Col lg={6} md="12" className="mb-4">
                                                <Form.Label className="l-sb">Date of birth</Form.Label>
                                                <Form.Control type="date" value={dob} onChange={(e) => {setDob(e.target.value)}} required disabled={!canEdit}/>
                                            </Col>
                                            <Col lg={6} md="12" className="mb-4">
                                                <Form.Label className="l-sb">Gender</Form.Label>
                                                <div className="profile-gender">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1" value={"Male"} onChange={(e) => {setGender(e.target.value)}} required  checked={gender == "Male" ? true : false} disabled={!canEdit} />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        Male
                                                        </label>
                                                    </div>

                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2" value={"Female"} onChange={(e) => {setGender(e.target.value)}} required checked={gender == "Female" ? true : false} disabled={!canEdit}/>
                                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                        Female
                                                        </label>
                                                    </div>

                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault3" value={"Other"} onChange={(e) => {setGender(e.target.value)}} required checked={gender == "Other" ? true : false} disabled={!canEdit}/>
                                                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                        Other
                                                        </label>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={12} md="12" className="mb-4">
                                                <Form.Label className="l-sb">Default address</Form.Label>
                                                <Form.Control placeholder="AG-4, Lorence Apartment, New West Side, WB, India" type="text" value={address} onChange={(e) => {setAddress(e.target.value)}} required disabled={!canEdit} />
                                            </Col>
                                            <Col lg={4} md="4" className="mb-4">
                                                <Form.Label className="l-sb">State</Form.Label>
                                                <Form.Select 
                                                    name="state" 
                                                    className="form-control"
                                                    value={state}
                                                    disabled={!canEdit}
                                                    onChange={(e) => {
                                                        selectStateAndGetItsCities(e.target.value);
                                                        setState(e.target.value);
                                                        setCity("");
                                                      }
                                                    }
                                                    required
                                                    >
                                                    <option value="">Select state</option>
                                                    {states?.filter((key) => !key.IsCancelled).map((state, index) => {
                                                        return (
                                                            <option key={`${state.StateId}_${state.StateName}`}
                                                            value={`${state.StateId}_${state.StateName}`}
                                                            >
                                                            {state.StateName}
                                                            </option>)
                                                    })}
                                                </Form.Select>
                                            </Col>
                                            <Col lg={4} md="4" className="mb-4">
                                                <Form.Label className="l-sb">City</Form.Label>
                                                <Form.Select 
                                                  className="form-control"
                                                  value={city}
                                                  disabled={!canEdit}
                                                  onChange={(e) => {setCity(e.target.value)}
                                                  }
                                                  required
                                                  >
                                                    <option>Select city</option>
                                                    {filteredCities?.filter((key) => !key.IsCancelled).map((city, index) => {
                                                        return (
                                                          <option
                                                            key={`${city.CityId}_${city.CityName}`}
                                                            value={`${city.CityId}_${city.CityName}`}
                                                          >
                                                            {city.CityName}
                                                          </option>)
                                                    })}
                                                </Form.Select>
                                            </Col>
                                            <Col lg={4} md="4" className="mb-4">
                                                <Form.Label className="l-sb">Pincode</Form.Label>
                                                <Form.Control type="number" value={pincode} onChange={(e) => {setPincode(e.target.value)}} placeholder="440026" required disabled={!canEdit}/>
                                            </Col>
                                            {canEdit && (
                                            <Col lg={12} md="12" className="mb-4 text-right">
                                                <button
                                                    type="submit"
                                                    className={`l-sb btnn btn profile_save_button mr-2`}
                                                    disabled={saveProfileDataLoading}
                                                >
                                                {saveProfileDataLoading && (
                                                  <span className="spinner-border spinner-border-sm"></span>
                                                )} Save</button>
                                            </Col>
                                            )}
                                        </Row>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                        )}
                        {showStep === 1 && (
                            <section className="main-language-sec">
                                <div className="heading-sec">
                                    <p className="l-bl head">Music has vivid languages</p>
                                    <p className="l-l sub-head">What’s Your Choice Of Language?</p>
                                </div>
                                <div className="chosen-sec clearfix">
                                    <Row>
                                        <Col md={6} lg={5}>
                                            <div className="chosen-left-sec">
                                                <img src={Lang} alt="" className="w-100" />
                                            <p className="l-bl inner-head">Most Chosen <br/> Language</p>
                                            </div>
                                        </Col>
                                        <Col md={6} lg={5} className="postion-r">
                                            <div className="chosen-right-sec select-multi">
                                                <div className="inner-heading-sec">
                                                    <p className="l-bl head">Select your preffered languages.</p>
                                                    <p className="l-l sub-head">No worries! You can always change them later.</p>
                                                </div>    
                                                <SelectLanguages/>
                                            </div>
                                        </Col>
                                        <Col md={12} lg={12} >
                                            <div className="text-right">
                                                <Button variant="primary" disabled={selectedLanguages.length === 0} onClick={() => {proceedToNextPage(2)}} className="l-sb btnn new_next_btn">Next</Button>
                                             </div>
                                        </Col>
                                    </Row>
                                    
                                </div>
                            </section>
                        )}
                        {showStep === 2 && (
                            <section className="main-location-sec">
                                <div className="">
                                    <Row>
                                        <Col md={12} lg={5} xl={4}>
                                            <div className="heading-sec">
                                                <p className="l-bl head">Our Delivery Circumference</p>
                                                <p className="l-l sub-head">Check For Your Location</p>
                                            </div>
                                            <div className="map-box">
                                            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15272027.669187387!2d73.72888197555253!3d20.850984767574634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1674543089151!5m2!1sen!2sin" ></iframe>
                                            </div>
                                        </Col>
                                        <Col md={12} lg={7} xl={7}>
                                            <div className="location-right-sec select-multi">
                                                 <div className="head-loco-img">
                                                    <h1>Are You From Our Top Trending Cities?</h1>
                                                    <div className="loco-box">
                                                        {cities?.filter((key) => key.IsLTLive).map((ct,index) => {
                                                            return (
                                                                <div key={`city_${index}`} className="text-center" onClick={()=>selectPrefferedCity(ct.CityId, ct.CityName)}>
                                                                        {ct.MImgURL == null ? (
                                                                            <span className="default-city mr-2">
                                                                                <span>{ct.CityName.charAt(0)}</span>
                                                                            </span>
                                                                        ):(
                                                                            <img className="mr-2 cursor-pointer" src={ct.MImgURL} alt={ct.CityName} id={`avail-city-${index}`}/>
                                                                        )}
                                                                        <p className={`l-m city-name ${`${ct.CityId}_${ct.CityName}` == selectedCity ? 'active_city' : ''}`}>{ct.CityName}</p>
                                                                </div>)
                                                        })}
                                                    </div>
                                                 </div>
                                            </div>
                                             {checkIfDisabled() && (
                                             <div className="text-right">
                                                <Button className="l-sb btnn new_next_btn" onClick={()=>{proceedToNextPage(3)}}>Next</Button>
                                             </div>
                                             )}
                                        </Col>
                                        
                                    </Row>
                                    
                                </div>
                            </section>
                        )}
                        {showStep === 3 && (
                            <Container fluid>
                                <section className="main-budget-mtype-sec postion-r">
                                    <div className="inner-budget-mtype-sec">
                                        <div className="heading-sec">
                                            <p className="l-bl head">High Budget, Good Performer!</p>
                                            <p className="l-l sub-head">Whats Your Budget</p>
                                        </div>
                                        <RangeSlider/>
                                    </div>
                                    <div className="inner-budget-mtype-sec">
                                        <div className="heading-sec">
                                            <p className="l-bl head">What’s Your Musicality Type</p>
                                            <p className="l-l sub-head">Choose From Vivid Genre</p>
                                        </div>
                                        <MusictypeSlider/>
                                    </div>
                                    <div className="text-right">
                                        <Button disabled={userMusicalityTypes.length === 0} onClick={()=>{proceedToNextPage(4)}} className="l-sb btnn new_next_btn" >Next</Button>
                                     </div>
                                </section>
                            </Container>
                        )}
                        </>
                        )}
                        {showStep == 0 && (
                        <div className="text-right">
                             <button
                                type="button"
                                className={`l-sb btnn btn profile_save_button`}
                                onClick={() => {updateStep(1)}}
                            >
                            Next</button>
                        </div>
                        )}
                    </div>
                </Container>
            </div>
            </div>
        </div>
    </>
  )
}

export default Profile