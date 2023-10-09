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
import { FilePond, File, registerPlugin } from 'react-filepond'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import authHeader, { authToken } from "../services/auth-header";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginImageCrop, FilePondPluginImageTransform, FilePondPluginFileValidateType)


const Profile = () => {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [canEdit, setCanEdit] = useState(false);
    const [profilePic, setProfilePic] = useState([])
    const [profilePicPrev, setProfilePicPrev] = useState(DefaultProfile)

    const {profileData, profileDataLoading, profileDataError, saveProfileDataLoading, saveProfileDataError, saveProfileDataSuccess, saveProfileDataMessage} = useSelector(state => state.userProfile);

    const handleUpdate = (fileItems) => {
        if(fileItems[0]) {
            setProfilePicPrev(URL.createObjectURL(fileItems[0].file));
        }
    }

    const userProfileSubmit = (e) => {
        e.preventDefault();
        const data = {
            "FirstName": firstName,
            "LastName": lastName,
            "FullName": firstName + ' '+ lastName,
            "DateOfBirth": dob,
            "Gender": gender,
            "Address1": address
        }

        dispatch(saveProfileData(data));
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
                                                    //oninit={() => {handleInit()}}
                                                    onremovefile={() => {console.log('removed')}}
                                                    onprocessfileprogress={(e) => {console.log('e', e)}}
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
                                        <h2>General information</h2>
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
                                                <Form.Control placeholder="DOB" type="date" value={dob} onChange={(e) => {setDob(e.target.value)}} required disabled={!canEdit}/>
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
                                                        Fmale
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
                                            {canEdit && (
                                            <Col lg={12} md="12" className="mb-4 text-right">
                                                <button
                                                    type="submit"
                                                    className={`l-sb btnn btn profile_save_button`}
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
                    </div>
                </Container>
            </div>
            </div>
        </div>
    </>
  )
}

export default Profile