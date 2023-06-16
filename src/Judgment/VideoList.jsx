import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from 'react-bootstrap/Stack';

const VideoList = () => {
  return (
    <>
      <Row>
        <Col lg={7}>
            <div className="left-video-sec">
                <iframe width="100%" height="400px" src="https://www.youtube.com/embed/5Eqb_-j3FDA" title="Coke Studio | Season 14 | Pasoori | Ali Sethi x Shae Gill" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="video-tile-date">
                    <p className="l-r fs-4 mb-1">Café gig at Two joes, Nagpur</p>
                    <p className="l-r fs-5">Date: 17/08/2021</p>
                </div>
            </div>
        </Col>
        <Col lg={5}>
            <div className="main-video-sub-list">
                <div className="inner-video-sub-list">
                    <Stack direction="horizontal"  className="align-items-self" gap={3}>
                    <div className="video-sub-list">
                        <iframe width="100%" height="120" src="https://www.youtube.com/embed/5Eqb_-j3FDA" title="Coke Studio | Season 14 | Pasoori | Ali Sethi x Shae Gill" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="video-sub-list">
                        <p className="l-sb head-title mb-2">Café gig at Two joes, Nagpur</p>
                        <p className="l-r date-title">Date: 17/08/2021</p>
                    </div>
                    </Stack>
                </div>
                <div className="inner-video-sub-list">
                    <Stack direction="horizontal"  className="align-items-self" gap={3}>
                    <div className="video-sub-list">
                        <iframe width="100%" height="120" src="https://www.youtube.com/embed/5Eqb_-j3FDA" title="Coke Studio | Season 14 | Pasoori | Ali Sethi x Shae Gill" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="video-sub-list">
                        <p className="l-sb head-title mb-2">Café gig at Two joes, Nagpur</p>
                        <p className="l-r date-title">Date: 17/08/2021</p>
                    </div>
                    </Stack>
                </div>
                <div className="inner-video-sub-list">
                    <Stack direction="horizontal"  className="align-items-self" gap={3}>
                    <div className="video-sub-list">
                        <iframe width="100%" height="120" src="https://www.youtube.com/embed/5Eqb_-j3FDA" title="Coke Studio | Season 14 | Pasoori | Ali Sethi x Shae Gill" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="video-sub-list">
                        <p className="l-sb head-title mb-2">Café gig at Two joes, Nagpur</p>
                        <p className="l-r date-title">Date: 17/08/2021</p>
                    </div>
                    </Stack>
                </div>
                <div className="inner-video-sub-list">
                    <Stack direction="horizontal"  className="align-items-self" gap={3}>
                    <div className="video-sub-list">
                        <iframe width="100%" height="120" src="https://www.youtube.com/embed/5Eqb_-j3FDA" title="Coke Studio | Season 14 | Pasoori | Ali Sethi x Shae Gill" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="video-sub-list">
                        <p className="l-sb head-title mb-2">Café gig at Two joes, Nagpur</p>
                        <p className="l-r date-title">Date: 17/08/2021</p>
                    </div>
                    </Stack>
                </div>
            </div>
        </Col>
      </Row>
    </>
  );
};

export default VideoList;
