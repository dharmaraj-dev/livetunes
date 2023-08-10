import React, { useState, useEffect } from "react";
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
import { AiOutlinePlus, AiOutlineEye, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getBranchesByBank, getCitiesOfState } from "../actions/common";
import { setBankDetails, setPhotoIdProof, setAddressProof, setReferences, getArtistProofData, removeArtistAttachment } from "../actions/artist";
import { successToast, errorToast, infoToast } from "../services/toast-service";
import moment from "moment";

import { FilePond, File, registerPlugin } from 'react-filepond'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import authHeader, { authToken } from "../services/auth-header";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { Navigate, useNavigate  } from 'react-router-dom';
import Loader from './Loader';
import ThreeDotLoader from './ThreeDotLoader';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginImageCrop, FilePondPluginImageTransform, FilePondPluginFileValidateType)


const ArtistBankDetails = () => {
    const dispatch = useDispatch();
    const MySwal = withReactContent(Swal);
    let navigate = useNavigate();

    const { banks, branches, cities, states, idProofs, addressProofs } = useSelector(state => state.common);
    const { artistProofData } = useSelector(state => state.artist);
    const { ArtistIsApproved } = useSelector(state => state.auth);

    const [pageLoading, setPageLoading] = useState(true);
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
    const [filePhotoProof, setFilePhotoFront] = useState([]);
    const [agreeMembership, setAgreeMembership] = useState(true);
    const [step2Loading, setStep2Loading] = useState(false);

    const [uploadedPhotoIdProofs, setUploadedPhotoIdProofs] = useState([]);


    //step 3
    const [address, setAddress] = useState("");
    const [cityId, setCityId] = useState("");
    const [stateId, setStateId] = useState("");
    const [addressProof, setAddressProofData] = useState("");
    const [pincode, setPincode] = useState("");
    const [step3Loading, setStep3Loading] = useState(false);
    const [fileAddressProof, setFileAddressProof] = useState([]);

    const [uploadedAddressProofs, setUploadedAddressProofs] = useState([]);

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
        if(bId != null && bId != 0) {
            dispatch(getBranchesByBank(bId));
        }
    }

    const selectStateAndGetItsCities = (sId) => {
        if(sId != null) {
            dispatch(getCitiesOfState(sId));
        }
    }

    const nextStep = (step) => {
        if(!ArtistIsApproved) {
            Swal.fire('Please approve your profile first!', '', 'info').then((res) => {
                navigate('/artists-profile')
            })
            
            return false;
        }
        if (currentStep === 1) {
            if(accountNo === "" || accountNo === null) {
                errorToast("Account No is required.");
                return false;
            } else if(bankId === "" || bankId === null) {
                errorToast("Bank is required.");
                return false;
            } else if(branchId === "" || branchId === null) {
                errorToast("Branch is required.");
                return false;
            }

            if(artistProofData?.selABDetails?.AccNo !== null) {
                setCurrentStep(step);
                return false;
            }
            // if(accountNo === artistProofData?.selABDetails?.AccNo && bankId === artistProofData?.selABDetails?.BankId && branchId === artistProofData?.selABDetails?.BranchId && ifscCode === artistProofData?.selABDetails?.IFSCCode && upiId === artistProofData?.selABDetails?.UPIId) {
            //     infoToast('Nothing to save, proceeding on next step.');
            //     setCurrentStep(step);
            //     return false;
            // }
            setStep1Loading(true);
            let data = {
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
            if(photoIdProofType === "" || photoIdProofType === null) {
               errorToast("Photo ID type is required."); 
               return false;
           }
            if(photoIdProofId === "" || photoIdProofId === null) {
               errorToast("ID No. is required."); 
               return false;
           }
            if(havePassport) {
                if(!agreeMembership) {
                    errorToast("I Agree for membership is required.");
                    return false;
                }
            }
            console.log('uploadedPhotoIdProofs', uploadedPhotoIdProofs);
            if(uploadedPhotoIdProofs?.length !== 2) {
                errorToast("Min 2 attachments are required.");
                return false;
            }

            if(artistProofData?.selAProof?.IdProofId != 0) {
                setCurrentStep(step);
                return false;
            }

           

            let data = {
                IdProofId: photoIdProofType,
                IdNo: photoIdProofId,
                IsPassportAvail: havePassport
                
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
            if(address === "" || address === null) {
               errorToast("Address is required."); 
               return false;
           } else if(stateId === "" || stateId === null) {
               errorToast("State is required."); 
               return false;
           } else if(addressProof === "" || addressProof === null) {
               errorToast("Address Prood Type is required."); 
               return false;
           } else if(cityId === "" || cityId === null) {
               errorToast("City is required."); 
               return false;
           } else if(pincode === "" || pincode === null) {
               errorToast("Pincode is required."); 
               return false;
           } else if(uploadedAddressProofs?.length !== 1) {
                errorToast("Attachment is required.");
                return false;
            }

            if(artistProofData?.selAddDetails?.AddressProofId != 0) {
                setCurrentStep(step);
                return false;
            }
            // if(addressProof === artistProofData?.selAddDetails?.AddressProofId && address === artistProofData?.selAddDetails?.Address1 && stateId === artistProofData?.selAddDetails?.StateId && cityId === artistProofData?.selAddDetails?.CityId && pincode === artistProofData?.selAddDetails?.PinCode) {
            //     infoToast('Nothing to save, proceeding on next step.');
            //     setCurrentStep(step);
            //     return false;
            // }
            let data = {
                AddressProofId: addressProof,
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
            if(ref1FName === "" || ref1FName === null) {
               errorToast("First Name is required."); 
               return false;
           } else if(ref1LName === "" || ref1LName === null) {
               errorToast("Last Name is required."); 
               return false;
           } else if(ref1ContNo === "" || ref1ContNo === null) {
               errorToast("Contact No is required."); 
               return false;
           } else if(ref1Email === "" || ref1Email === null) {
               errorToast("Email is required."); 
               return false;
           } else if(ref1StateId === "" || ref1StateId === null) {
               errorToast("State is required."); 
               return false;
           } else if(ref1CityId === "" || ref1CityId === null) {
               errorToast("City is required."); 
               return false;
           } else if(ref1Relation === "" || ref1Relation === null) {
               errorToast("Relationship with referrence is required."); 
               return false;
           }

           if(artistProofData?.selARefDetails?.FirstName != null) {
                setCurrentStep(step);
                return false;
            }

           // if(
           //      ref1FName === artistProofData?.selARefDetails?.FirstName &&
           //      ref1LName === artistProofData?.selARefDetails?.LastName &&
           //      ref1ContNo === artistProofData?.selARefDetails?.ContactNo &&
           //      ref1Email === artistProofData?.selARefDetails?.EmailId &&
           //      ref1StateId === artistProofData?.selARefDetails?.StateId &&
           //      ref1CityId === artistProofData?.selARefDetails?.CityId &&
           //      ref1Dob === moment(artistProofData?.selARefDetails?.DOB).format("YYYY-MM-DD") && 
           //      ref1Relation === artistProofData?.selARefDetails?.RWReference
           //  ) {
           //      infoToast('Nothing to save...');
           //      setCurrentStep(step);
           //      return false;
           //  }

            setStep4Loading(true);
            let data = {
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

    const deleteProof = async (attachId,index) => {
        MySwal.fire({
          title: '<strong>Are you sure!!</strong>',
          icon: 'warning',
          html:
            'Do you want to delete this attachment?',
          showDenyButton: true,
          confirmButtonText: 'Yes',
          denyButtonText: `No`,
          showLoaderOnConfirm: true,
          preConfirm: () => {
            return dispatch(removeArtistAttachment(attachId.LTMediaLogId)).then((response) => {
                if(response.data.IsSuccess) {
                    return dispatch(getArtistProofData()).then((res) => {
                        setUploadedPhotoIdProofs(res.data?.data?.selIDPMedia);
                        setUploadedAddressProofs(res.data?.data?.selAProofMedia);
                        return res;
                    });
                } else {
                    throw new Error(response.data.Message)
                }
            });
          },
          allowOutsideClick: () => false
        }).then((result) => {
            console.log('result', result);  
          if (result.isConfirmed && result.value) {
                Swal.fire('File deleted successfully!', '', 'success');
          } else {
            Swal.fire('Attachment delete cancelled.', '', 'info')
          }
        })
    }

    useEffect(() => {
        if(artistProofData?.IsSuccess) {
            setPageLoading(false);
        } else {
            dispatch(getArtistProofData()).then((res) => {
                if(res.data.IsSuccess) {
                    if(res.data?.selABDetails?.AccNo !== null) {
                    setAccountNo(res.data?.selABDetails?.AccNo);
                    }
                    if(res.data?.selABDetails?.BankId != 0) {
                        setBankId(res.data?.selABDetails?.BankId);
                        dispatch(getBranchesByBank(res.data?.selABDetails?.BankId));
                    }
                    if(res.data?.selABDetails?.BranchId != 0) {
                        setBranchId(res.data?.selABDetails?.BranchId);
                    }
                    if(res.data?.selABDetails?.IFSCCode !== null) {
                        setIfscCode(res.data?.selABDetails?.IFSCCode);
                    }
                    if(res.data?.selABDetails?.UPIId !== null) {
                        setUpiId(res.data?.selABDetails?.UPIId);
                    }
                    if(res.data?.selAProof?.IdProofId != 0) {
                        setPhotoIdProofType(res.data?.selAProof?.IdProofId);
                    }
                    if(res.data?.selAProof?.IdNo !== null) {
                        setPhotoIdProofId(res.data?.selAProof?.IdNo);
                    }
                    if(res.data?.selAProof?.IsPassportAvail !== null) {
                        setHavePassport(res.data?.selAProof?.IsPassportAvail);
                    }
                    if(res.data?.selIDPMedia !== null) {
                        setUploadedPhotoIdProofs(res.data?.selIDPMedia);
                    }
                    if(res.data?.selAProofMedia !== null) {
                        setUploadedAddressProofs(res.data?.selAProofMedia);
                    }
                    //setAgreeMembership(artistProofData?.selAProof?.UPIId);
                    if(res.data?.selAddDetails?.Address1 !== null) {
                        setAddress(res.data?.selAddDetails?.Address1);
                    }
                    if(res.data?.selAddDetails?.StateId != 0) {
                        setStateId(res.data?.selAddDetails?.StateId);
                        selectStateAndGetItsCities(res.data?.selAddDetails?.StateId);
                    }
                    if(res.data?.selAddDetails?.CityId != 0) {
                        setCityId(res.data?.selAddDetails?.CityId);
                    }
                    if(res.data?.selAddDetails?.AddressProofId != 0) {
                        setAddressProofData(res.data?.selAddDetails?.AddressProofId);
                    }
                    if(res.data?.selAddDetails?.PinCode !== null) {
                        setPincode(res.data?.selAddDetails?.PinCode);
                    }

                    if(res.data?.selARefDetails?.FirstName !== null) {
                        setRef1FName(res.data?.selARefDetails?.FirstName);
                    }
                    if(res.data?.selARefDetails?.LastName !== null) {
                        setRef1LName(res.data?.selARefDetails?.LastName);
                    }
                    if(res.data?.selARefDetails?.ContactNo !== null) {
                        setRef1ContNo(res.data?.selARefDetails?.ContactNo);
                    }
                    if(res.data?.selARefDetails?.EmailId !== null) {
                        setRef1Email(res.data?.selARefDetails?.EmailId);
                    }
                    if(res.data?.selARefDetails?.StateId != 0) {
                        setRef1StateId(res.data?.selARefDetails?.StateId);
                    }
                    if(res.data?.selARefDetails?.CityId != 0) {
                        setRef1CityId(res.data?.selARefDetails?.CityId);
                    }
                    if(res.data?.selARefDetails?.DOB != "0001-01-01T00:00:00") {
                        setRef1Dob(moment(res.data?.selARefDetails?.DOB).format("YYYY-MM-DD"));
                    }
                    if(res.data?.selARefDetails?.RWReference !== null) {
                        setRef1Relation(res.data?.selARefDetails?.RWReference);
                    } 
                }
                setPageLoading(false);
            }).catch((err) => {
                navigate('/')
            })
        }
        if(artistProofData?.IsSuccess) {
            if(artistProofData?.selABDetails?.AccNo !== null) {
                setAccountNo(artistProofData?.selABDetails?.AccNo);
            }
            if(artistProofData?.selABDetails?.BankId != 0) {
                setBankId(artistProofData?.selABDetails?.BankId);
                dispatch(getBranchesByBank(artistProofData?.selABDetails?.BankId));
            }
            if(artistProofData?.selABDetails?.BranchId != 0) {
                setBranchId(artistProofData?.selABDetails?.BranchId);
            }
            if(artistProofData?.selABDetails?.IFSCCode !== null) {
                setIfscCode(artistProofData?.selABDetails?.IFSCCode);
            }
            if(artistProofData?.selABDetails?.UPIId !== null) {
                setUpiId(artistProofData?.selABDetails?.UPIId);
            }
            if(artistProofData?.selAProof?.IdProofId != 0) {
                setPhotoIdProofType(artistProofData?.selAProof?.IdProofId);
            }
            if(artistProofData?.selAProof?.IdNo !== null) {
                setPhotoIdProofId(artistProofData?.selAProof?.IdNo);
            }
            if(artistProofData?.selAProof?.IsPassportAvail !== null) {
                setHavePassport(artistProofData?.selAProof?.IsPassportAvail);
            }
            if(artistProofData?.selIDPMedia !== null) {
                setUploadedPhotoIdProofs(artistProofData?.selIDPMedia);
            }
            if(artistProofData?.selAProofMedia !== null) {
                setUploadedAddressProofs(artistProofData?.selAProofMedia);
            }

            
            //setAgreeMembership(artistProofData?.selAProof?.UPIId);
            if(artistProofData?.selAddDetails?.Address1 !== null) {
                setAddress(artistProofData?.selAddDetails?.Address1);
            }
            if(artistProofData?.selAddDetails?.StateId != 0) {
                setStateId(artistProofData?.selAddDetails?.StateId);
                selectStateAndGetItsCities(artistProofData?.selAddDetails?.StateId);
            }
            if(artistProofData?.selAddDetails?.CityId != 0) {
                setCityId(artistProofData?.selAddDetails?.CityId);
            }
            if(artistProofData?.selAddDetails?.AddressProofId != 0) {
                setAddressProofData(artistProofData?.selAddDetails?.AddressProofId);
            }
            if(artistProofData?.selAddDetails?.PinCode !== null) {
                setPincode(artistProofData?.selAddDetails?.PinCode);
            }

            if(artistProofData?.selARefDetails?.FirstName !== null) {
                setRef1FName(artistProofData?.selARefDetails?.FirstName);
            }
            if(artistProofData?.selARefDetails?.LastName !== null) {
                setRef1LName(artistProofData?.selARefDetails?.LastName);
            }
            if(artistProofData?.selARefDetails?.ContactNo !== null) {
                setRef1ContNo(artistProofData?.selARefDetails?.ContactNo);
            }
            if(artistProofData?.selARefDetails?.EmailId !== null) {
                setRef1Email(artistProofData?.selARefDetails?.EmailId);
            }
            if(artistProofData?.selARefDetails?.StateId != 0) {
                setRef1StateId(artistProofData?.selARefDetails?.StateId);
            }
            if(artistProofData?.selARefDetails?.CityId != 0) {
                setRef1CityId(artistProofData?.selARefDetails?.CityId);
            }
            if(artistProofData?.selARefDetails?.DOB != "0001-01-01T00:00:00") {
                setRef1Dob(moment(artistProofData?.selARefDetails?.DOB).format("YYYY-MM-DD"));
            }
            if(artistProofData?.selARefDetails?.RWReference !== null) {
                setRef1Relation(artistProofData?.selARefDetails?.RWReference);
            }          
        }
    }, [artistProofData])

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
                                            <Form.Control placeholder="Your Bank account no." type="text" value={accountNo} onChange={(e) => setAccountNo(e.target.value)}/>
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
                                                        )} {artistProofData?.selABDetails?.AccNo !== null ? 'NEXT' : 'SUBMIT'}</button>
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
                                                    <input className="form-check-input" type="radio" name="havePassport" id="flexRadioDefault9" value={havePassport} onChange={(e) => {setHavePassport(true)}} checked={havePassport}/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault9">
                                                    Yes
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="havePassport" id="flexRadioDefault10" value={havePassport} onChange={(e) => {setHavePassport(false)}} checked={!havePassport}/>
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
                                            {uploadedPhotoIdProofs?.length !== 2 && (
                                            <Col lg={6} md="12" className="mb-4">
                                                <div className="main-id-img-sec">
                                                    <div className="id-img-sec">
                                                        <FilePond
                                                            allowMultiple={true}
                                                            files={filePhotoProof}
                                                            maxFiles={2}
                                                            allowImageCrop={true}
                                                            allowImageTransform={true}
                                                            imageCropAspectRatio={'1:1'}
                                                            acceptedFileTypes={["application/pdf", "image/jpeg"]}
                                                            name="file"
                                                            oninit={() => {console.log(filePhotoProof)}}
                                                            allowRevert={false}
                                                            allowRemove={false}
                                                            onremovefile={() => {console.log('removed')}}
                                                            onprocessfileprogress={(e) => {console.log('e', e)}}
                                                            onupdatefiles={(fileItems,e) => {
                                                                console.log(fileItems);
                                                                setFilePhotoFront(fileItems);
                                                                //handleUpdate(fileItems)
                                                            }}
                                                            server={ {
                                                                process: (fieldName, file, metadata, load, error, progress, abort, transfer, options) => {
                                                                    const formData = new FormData();
                                                                    const proof_name = idProofs?.filter((key) => key.IdProofId == photoIdProofType).map((idproof, index) => {
                                                                        return (idproof.IdProofName)
                                                                    })
                                                                    
                                                                    formData.append(fieldName, file, file.name);
                                                                    const request = new XMLHttpRequest();
                                                                    request.open('POST', 'https://livetunesapi.azurewebsites.net/api/LTMedia/uploadp-proof?proof_name='+proof_name);
                                                                    request.setRequestHeader("Authorization", authToken());
                                                                    request.upload.onprogress = (e) => {
                                                                        console.log(e.lengthComputable, e.loaded, e.total);
                                                                        progress(e.lengthComputable, e.loaded, e.total);
                                                                    };
                                                                    request.onload = function () {
                                                                        if (request.status >= 200 && request.status < 300) {
                                                                            if(JSON.parse(request.response)?.IsSuccess) {
                                                                                successToast('ID proof uploaded successfully.');
                                                                                dispatch(getArtistProofData()).then(() => {
                                                                                    setFilePhotoFront([]);
                                                                                })
                                                                            }
                                                                            else {
                                                                                successToast(JSON.parse(request.response)?.Message);
                                                                            }
                                                                            load(request.responseText);
                                                                        } else {
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
                                                            }
                                                            }
                                                            name="file"
                                                            labelIdle='Drag & Drop id proof in .pdf or .jpg format OR <span class="cursor-pointer">Browse</span>'
                                                          />
                                                    </div>
                                                </div>
                                            </Col>
                                            )}
                                            {uploadedPhotoIdProofs?.length > 0 && (
                                                <Col lg={12} md="12" className="mb-4">
                                                    <label className="l-sb form-label">Attachments:</label>
                                                    <ul className="uploadedProofs">
                                                        {uploadedPhotoIdProofs?.map((attach, index) => {
                                                            return (
                                                                <li key={attach.RowCode}>
                                                                    <span className="note-text">{`${attach.ProofName}`}</span>
                                                                    <a href={attach.LTMediaURL} target="_blank"><AiOutlineEye /></a>
                                                                    <AiOutlineDelete className="red-color cursor-pointer" onClick={() => {deleteProof(attach, index)}} />
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </Col>
                                            )}
                                            
                                            {havePassport && (
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
                                                        )}  {artistProofData?.selAProof?.IdProofId !== null ? 'NEXT' : 'SUBMIT'}</button>
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
                                                <Form.Select aria-label="Default select example" className="form-control" value={addressProof} onChange={(e) => {setAddressProofData(e.target.value)}}>
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
                                            <Form.Control placeholder="Pincode" type="text" value={pincode} onChange={(e) => {setPincode(e.target.value)}}/>
                                            </Col>

                                            </Col>
                                            {uploadedAddressProofs.length === 0 && (
                                            <Col lg={6} md="12" className="mb-4">

                                                <Col lg={12} md="12" className="">
                                                    <div className="main-id-img-sec">
                                                        <div className="id-img-sec">
                                                            <FilePond
                                                            allowMultiple={false}
                                                            files={fileAddressProof}
                                                            maxFiles={1}
                                                            allowImageCrop={true}
                                                            allowImageTransform={true}
                                                            imageCropAspectRatio={'1:1'}
                                                            acceptedFileTypes={["application/pdf", "image/jpeg"]}
                                                            name="file"
                                                            oninit={() => {console.log(fileAddressProof)}}
                                                            allowRevert={false}
                                                            allowRemove={false}
                                                            onremovefile={() => {console.log('removed')}}
                                                            onprocessfileprogress={(e) => {console.log('e', e)}}
                                                            onupdatefiles={(fileItems,e) => {
                                                                console.log(fileItems);
                                                                setFileAddressProof(fileItems);
                                                                //handleUpdate(fileItems)
                                                            }}
                                                            server={ {
                                                                process: (fieldName, file, metadata, load, error, progress, abort, transfer, options) => {
                                                                    const formData = new FormData();
                                                                    const proof_name = addressProofs?.filter((key) => !key.IsCancelled && key.AddressProofId == addressProof).map((addr, index) => {
                                                                        return (addr.AddressProofName)
                                                                    })
                                                                    
                                                                    formData.append(fieldName, file, file.name);

                                                                    const request = new XMLHttpRequest();
                                                                    request.open('POST', 'https://livetunesapi.azurewebsites.net/api/LTMedia/uploada-proof?proof_name='+proof_name);
                                                                    request.setRequestHeader("Authorization", authToken());
                                                                    request.upload.onprogress = (e) => {
                                                                        console.log(e.lengthComputable, e.loaded, e.total);
                                                                        progress(e.lengthComputable, e.loaded, e.total);
                                                                    };
                                                                    request.onload = function () {
                                                                        if (request.status >= 200 && request.status < 300) {
                                                                            if(JSON.parse(request.response)?.IsSuccess) {
                                                                                successToast('Address proof uploaded successfully.');
                                                                                
                                                                                dispatch(getArtistProofData()).then(() => {
                                                                                    setFileAddressProof([]);
                                                                                })
                                                                            }
                                                                            else {
                                                                                successToast(JSON.parse(request.response)?.Message);
                                                                            }
                                                                            load(request.responseText);
                                                                        } else {
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
                                                            }
                                                            }
                                                            name="file"
                                                            labelIdle='Drag & Drop address proof in .pdf or .jpg format OR <span class="cursor-pointer">Browse</span>'
                                                          />
                                                        </div>
                                                    </div>
                                                </Col>

                                            </Col>
                                            )}
                                            {uploadedAddressProofs.length > 0 && (
                                                <Col lg={12} md="12" className="mb-4">
                                                    <label className="l-sb form-label">Attachments:</label>
                                                    <ul className="uploadedProofs">
                                                        {uploadedAddressProofs.map((attach, index) => {
                                                            return (
                                                                <li key={attach.RowCode}>
                                                                    <span className="note-text">{`${attach.ProofName}`}</span>
                                                                    <a href={attach.LTMediaURL} target="_blank"><AiOutlineEye /></a>
                                                                    <AiOutlineDelete className="red-color cursor-pointer" onClick={() => {deleteProof(attach, index)}} />
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </Col>
                                            )}
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
                                                        )}  {artistProofData?.selAddDetails?.AddressProofId !== null ? 'NEXT' : 'SUBMIT'}</button>
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
                                                    {artistProofData?.selARefDetails?.FirstName === null && (
                                                        <button type="button" className="l-b btnn btn btn-primary" onClick={() => nextStep(5)} disabled={step4Loading}>
                                                        {step4Loading && (
                                                          <span className="spinner-border spinner-border-sm"></span>
                                                        )} SUBMIT</button>
                                                    )}
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
                )}
            </div>
            </div>
        </div>
    </>
  )
}

export default ArtistBankDetails