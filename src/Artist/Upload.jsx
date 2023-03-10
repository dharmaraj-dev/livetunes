import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Upload = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <>
        <div className="main-profile-upload-sec artist-profile-upload-sec">
            <div className="profile-upload-sec">
                <div className="inner-profile-upload-sec">
                    {/* <img src={Profileupload} alt="" className="w-100"/> */}
                    <img src={file} className="w-100" alt={file}/>
                </div>
                <div className="upload-btn-sec">
                    {/* <input type="file" id="upload" hidden/> */}
                    <input type="file"  id="upload" hidden onChange={handleChange} />
                    <label for="upload"><AiOutlinePlus/></label>
                </div>
            </div>
            <div className="conditions-sec">
                <ul>
                    <li>File should be in .MP4 format</li>
                    <li>Minimum 2 & max 4 Files are required for verification</li>
                    <li>Make sure the videos are in good quality</li>
                    <li>Your application could be rejected due to bad audio quality</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Upload