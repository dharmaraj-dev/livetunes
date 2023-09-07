import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

const Videos = () => {
  const {artistInfo} = useSelector(state => state.user);
    let data1 = artistInfo.selLtMedia.filter((video) => {
       return video.LTMediaLogName.endsWith('.mp4');
    });
    let data = data1.map((video)=>{
        return {
            id:video.LTMediaLogId,
            videoUrl: video.LTMediaURL
        }
    });
  return (
    <>
        <Row>
          {
            data.map((video) => {
              return (
              <Col lg={4} sm={6}>
                <div className="inner-video-sec">
                    {/* <iframe width="100%" height="300px" src={video.videoUrl} title="Coke Studio | Season 14 | Pasoori | Ali Sethi x Shae Gill" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    <video controls width="100%">
                      <source src={video.videoUrl} type="video/mp4" />
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