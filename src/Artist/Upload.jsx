import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlinePlus, AiOutlinePlusCircle } from "react-icons/ai";

const Upload = () => {
  
  
  const [file, setFile] = useState([]);
  const [moreFile, setMoreFile] = useState([]);


    function handleFileUpload(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }
    
    const handleMoreFileUpload = (event) => {
        const moreFiles = Array.from(event.target.files);
        setMoreFile([...moreFile, ...moreFiles]);
      };


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
                    <input type="file" id="upload" hidden onChange={handleFileUpload} />
                    <label for="upload"><AiOutlinePlus/></label>
                </div>
            </div>
            <div className="upload-more-sec">
                    <input type="file" multiple id="upload-more" hidden  onChange={handleMoreFileUpload} />
                    <label for="upload-more"> 
                      <div className="upload-more-inner">
                      <AiOutlinePlusCircle fontSize={43} style={{marginBottom:"5px"}}/>
                      Add Videos
                      </div>
                      </label>
                </div>
            <Grid uploadedFiles={moreFile} />
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

const Grid = ({ uploadedFiles }) => {
    return (
      <div className="grid-scroll grid-container">
          <Row className="align-items-center select-multi">
        {uploadedFiles?.map((file, index) => (
          <>
            {file.type.startsWith('image/') ? (
                <Col width={125} height={125}  lg={6} md="12" className="mb-1 p-3">
              <img style= {{ objectFit:"cover", width:" 100%", height: "100%", borderRadius:"1em"}} src={URL.createObjectURL(file)} alt="Preview" />
                </Col>
            ) : (
                <Col width={125} height={125}  lg={6} md="12" className="mb-1">
              <video style= {{ objectFit:"cover", width:" 100%", height: "100%", borderRadius:"1em"}}  src={URL.createObjectURL(file)} controls />
               </Col>
            )}
            </>
         
        ))}
        </Row>
      </div>
    );
  };

export default Upload