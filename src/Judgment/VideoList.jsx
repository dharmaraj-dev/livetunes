import React, {useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from 'react-bootstrap/Stack';
import ImageGallery from "react-image-gallery";
import moment from "moment";

const VideoList = (props) => {
  return (
    <>
      <Row>
        <Col lg={7}>
            <div className="left-video-sec">
                <video width="100%" height="400px" src={props.videoData?.filter((key) => key.LTMediaURL.includes(".mp4"))[0].LTMediaURL} controls={true}></video>
                <div className="video-tile-date">
                    <p className="l-r fs-4 mb-1">{props.videoData[0].MediaDesc != null ? props.videoData[0].MediaDesc : 'NA'}</p>
                    <p className="l-r fs-5">Date: {moment(props.videoData[0].AddDate).format("DD/MM/YYYY")}</p>
                </div>
            </div>
        </Col>
        <Col lg={5}>
            <div className="main-video-sub-list">
                {props.videoData?.filter((key) => key.LTMediaURL.includes(".mp4")).map((vid,index) => {
                    return (
                        <div className="inner-video-sub-list" key={index}>
                            <Stack direction="horizontal"  className="align-items-self" gap={3}>
                                <div className="video-sub-list">
                                    <video width="100%" height="120" src={vid.LTMediaURL} controls={true}></video>
                                </div>
                                <div className="video-sub-list">
                                    <p className="l-sb head-title mb-2">{`${vid.MediaDesc != null ? vid.MediaDesc : 'NA'}`}</p>
                                    <p className="l-r date-title">Date: {moment(vid.AddDate).format("DD/MM/YYYY")}</p>
                                </div>
                            </Stack>
                        </div>
                    )
                })}
                {props.videoData?.filter((key) => !key.LTMediaURL.includes(".mp4")).map((vid,index) => {
                    return (
                        <div className="inner-video-sub-list" key={index}>
                            <Stack direction="horizontal"  className="align-items-self" gap={3}>
                                <div className="video-sub-list">
                                    <img width="100%" height="120" src={vid.LTMediaURL} />
                                </div>
                                   <div className="video-sub-list">
                                        <p className="l-sb head-title mb-2">{`${vid.MediaDesc != null ? vid.MediaDesc : 'NA'}`}</p>
                                        <p className="l-r date-title">Date: {moment(vid.AddDate).format("DD/MM/YYYY")}</p>
                                    </div>
                                
                            </Stack>
                        </div>
                    )
                })}
            </div>
        </Col>
      </Row>
    </>
  );
};

export default VideoList;
