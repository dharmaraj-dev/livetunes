import React, { useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineEye, AiOutlineDelete, AiOutlineCheck, AiOutlineClose, AiFillPushpin } from "react-icons/ai";
import DefaultProfile from "../assets/images/default_profile.jpeg";
import { FilePond, File, registerPlugin } from 'react-filepond'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import authHeader, { authToken } from "../services/auth-header";
import { successToast, errorToast, infoToast } from "../services/toast-service";
import { useDispatch, useSelector } from "react-redux";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getProfileData, removeArtistAttachment, updateMediaDescription } from "../actions/artist";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import EasyEdit, {Types} from 'react-easy-edit';
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginImageCrop, FilePondPluginImageTransform, FilePondPluginFileValidateType)

const Upload = () => {
    const dispatch = useDispatch();
    const MySwal = withReactContent(Swal)
    const {ArtistIsApproved} = useSelector(state => state.auth);


    const { artistProfileData } = useSelector(state => state.artist);
    const { ProfileStatus, IsProfileSend } = useSelector(state => state.auth);


    const [profilePic, setProfilePic] = useState([])
    const [profilePicPrev, setProfilePicPrev] = useState(DefaultProfile)
    const [eventFiles, setEventFiles] = useState([])
    const [maxAllowedFiles, setMaxAllowedFiles] = useState(5)

    const [alreadyAddedEventsFile, setAlreadyAddedEventsFiles] = useState([])
    const [alreadyAddedProfilePic, setAlreadyAddedProfilePic] = useState("")
    const [message, setMessage] = useState('ReactInline demo')


    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleInit = () => {
        console.log("FilePond instance has initialised", profilePic);
    }

    const handleUpdate = (fileItems) => {
        if(fileItems[0]) {
            setProfilePicPrev(URL.createObjectURL(fileItems[0].file));
        }
    }

    const removeEventAttachment = (mediaId, index) => {
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
            return dispatch(removeArtistAttachment(mediaId)).then((response) => {
                if(response.data.IsSuccess) {
                    return dispatch(getProfileData()).then((res) => {
                        setAlreadyAddedEventsFiles(res.data.selLtMedia);
                        setMaxAllowedFiles( 5 - res.data.selLtMedia.length);
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

    const saveDescription = (value, mId) => {
        const data =  {
                "LTMediaLogId": mId,
                "MediaDesc": value
            };
        dispatch(updateMediaDescription(data)).then((response) => {
            if(response.data.IsSuccess) {
                successToast("Location text added.");
            } else {
                errorToast("Location text not added.")
            }
        })
    }
    const cancel = () => {
        //
    }



    useEffect(() => {
        console.log(ArtistIsApproved);
        if(artistProfileData) {
             if(artistProfileData?.selLtMedia?.length > 0){
                setAlreadyAddedEventsFiles(artistProfileData?.selLtMedia);
                setMaxAllowedFiles( 5 - artistProfileData?.selLtMedia?.length);
             } else {
                setMaxAllowedFiles(5);
             }
            if(artistProfileData?.selProfileImage?.length > 0) {
                setProfilePicPrev(artistProfileData?.selProfileImage[0].LTMediaURL);
            }

        }
        console.log(maxAllowedFiles);
        console.log(artistProfileData?.selLtMedia?.length);
    }, [artistProfileData])


  return (
    <>
        <div className="main-profile-upload-sec artist-profile-upload-sec">
            <div className="profile-upload-sec">
                <div className="inner-profile-upload-sec">
                    {/* <img src={Profileupload} alt="" className="w-100"/> */}
                    <img src={profilePicPrev} className="w-100" alt={profilePicPrev}/>
                </div>
                
                <div className="upload-btn-sec">
                    <label className="upload_label" htmlFor="upload">
                        <AiOutlinePlus />
                        <FilePond
                            allowMultiple={false}
                            files={profilePic}
                            maxFiles={1}
                            allowImageCrop={true}
                            allowImageTransform={true}
                            imageCropAspectRatio={'1:1'}
                            acceptedFileTypes={["image/png", "image/jpeg"]}
                            name="file"
                            allowRevert={false}
                            allowRemove={false}
                            oninit={() => {handleInit()}}
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

                                    //request.headers(authHeader());

                                    // Should call the progress method to update the progress to 100% before calling load
                                    // Setting computable to false switches the loading indicator to infinite mode
                                    request.upload.onprogress = (e) => {
                                        console.log(e.lengthComputable, e.loaded, e.total);
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
                                                dispatch(getProfileData());
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
            </div>
            <Row className="artistEventsFiles mb-4">
                {alreadyAddedEventsFile?.filter((key) => !key.LTMediaURL.includes(".mp4")).map((eveFile, index) => {
                    return (
                        <Col lg={6} md={6} key={`eventImgFiles_${index}`} className="mb-4 position-relative">
                            {ArtistIsApproved && (
                            <AiOutlineDelete className="red-color deleteAttachment" onClick={() => {removeEventAttachment(eveFile.LTMediaLogId, index)}} />
                            )}
                            <img src={eveFile.LTMediaURL}/>
                            <Row>
                                <Col lg={12} md={12} className="mb-3">
                                    <EasyEdit
                                      type={Types.TEXTAREA}
                                      onSave={(e) => {saveDescription(e,eveFile.LTMediaLogId)}}
                                      onCancel={cancel}
                                      value={eveFile.MediaDesc}
                                      saveButtonLabel={<AiOutlineCheck />}
                                      cancelButtonLabel={<AiOutlineClose />}
                                      placeholder={`Add caption/location`}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    )
                })}
                {alreadyAddedEventsFile?.filter((key) => key.LTMediaURL.includes(".mp4")).map((eveFile, index) => {
                    return (
                        <Col lg={6} md={6} key={`eventVidFiles_${index}`} className="mb-4 position-relative">
                            {ArtistIsApproved && (
                            <AiOutlineDelete className="red-color deleteAttachment" onClick={() => {removeEventAttachment(eveFile.LTMediaLogId, index)}} />
                            )}
                            <video controls={true} src={eveFile.LTMediaURL}></video>
                            <Row>
                                <Col lg={12} md={12} className="mb-3">
                                    <EasyEdit
                                      type={Types.TEXTAREA}
                                      onSave={(e) => {saveDescription(e,eveFile.LTMediaLogId)}}
                                      onCancel={cancel}
                                      value={eveFile.MediaDesc}
                                      saveButtonLabel={<AiOutlineCheck />}
                                      cancelButtonLabel={<AiOutlineClose />}
                                      placeholder={`Add caption/location`}
                                    />
                                    
                                </Col>
                            </Row>
                        </Col>
                    )
                })}
            </Row>
            {alreadyAddedEventsFile?.length < 5 && (
            <FilePond
                files={eventFiles}
                onupdatefiles={setEventFiles}
                allowMultiple={true}
                maxFiles={maxAllowedFiles}
                maxParallelUploads={5}
                acceptedFileTypes={["video/mp4", "image/png", "image/jpeg"]}
                allowRevert={false}
                allowRemove={false}
                oninit={(e) => {
                    setMaxAllowedFiles(5 - alreadyAddedEventsFile?.length);
                }}
                onwarning={(e) => {
                    if(e.type === "warning" && e.body === "Max files") {
                        infoToast(`Maximum upload limit exceeds, available limit is ${maxAllowedFiles}`)
                    }
                }}
                server={
                    
                    {
                    process: (fieldName, file, metadata, load, error, progress, abort, transfer, options) => {
                        const formData = new FormData();
                        formData.append(fieldName, file, file.name);

                        const request = new XMLHttpRequest();
                        request.open('POST', 'https://livetunesapi.azurewebsites.net/api/LTMedia/upload-files');
                        request.setRequestHeader("Authorization", authToken());

                        request.upload.onprogress = (e) => {
                            progress(e.lengthComputable, e.loaded, e.total);
                        };

                        request.onload = function () {
                            if (request.status >= 200 && request.status < 300) {
                                console.log(JSON.parse(request.response),request.status);
                                if(JSON.parse(request.response)?.IsSuccess) {
                                    successToast('Event file uploaded successfully.');
                                    dispatch(getProfileData());
                                    setEventFiles([]);
                                }
                                else {
                                    successToast(JSON.parse(request.response)?.Message);
                                }
                                // the load method accepts either a string (id) or an object
                                load(request.responseText);
                            } else {
                                errorToast('Something went wrong, files not uploaded.')
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
                    }                 
                }

                       
                }
                revert=
                {
                    {
                        url: 'https://livetunesapi.azurewebsites.net/api/LTMedia/upload-files',
                        process: {
                            headers: authHeader(),
                        }
                    }
                }
                name="file"
                labelIdle='Drag & Drop your performance images, videos or <span class="filepond--label-action">Browse</span>'
              />
            )}
            <div className="conditions-sec">
                <ul>
                    <li>File should be in .MP4 format</li>
                    <li>Minimum 2 & max 5 Files are required for verification</li>
                    <li>Make sure the videos are in good quality</li>
                    <li>Your application could be rejected due to bad audio quality</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Upload