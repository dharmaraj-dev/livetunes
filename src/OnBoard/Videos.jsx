import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

const Videos = (props) => {
  
  return (
    <>
        <Row>
          {
            props.data.selLtMedia.filter((video) => { return video.LTMediaLogName.endsWith('.mp4');}).map((video,index) => {
              return (
              <Col lg={4} sm={6} key={`video_gallary_${index}`}>
                <div className="inner-video-sec">
                    {/* <iframe width="100%" height="300px" src={video.videoUrl} title="Coke Studio | Season 14 | Pasoori | Ali Sethi x Shae Gill" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    <video controls width="100%">
                      <source src={video.LTMediaURL} type="video/mp4" />
                      Sorry, your browser doesn't support videos.
                    </video>
                </div>
             </Col> )
            }
            )
          }
        </Row>
    </>
  )
}

export default Videos