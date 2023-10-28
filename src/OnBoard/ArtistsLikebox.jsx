import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import likeimg from '../assets/images/like-img.png';
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ArtistsLikebox = (props) => {
  const params = useParams();
  console.log(params);
  const {user} = useSelector(state => state.userAuth);
  const userId = user?.RegId ? btoa(user?.RegId) : params.userId;
  
  return (
    <>
    <Row>
      {props?.data.map((artData,index) => {
        return (
          
          <Col lg={3} md={6} key={`other_artist_${index}`}>
              <Link to={`/artist-details/${artData.ArtistName.replace(/ /g,"-")}/${btoa(artData.ArtistId)}/${userId}`}>
                <div className="main-artist-like-box text-center">
                  <div className="img-sec">
                    <img src={artData.ArtistProfileImg} alt="" className="w-100" />
                  </div>
                  <h2 className="l-b name mb-0">{artData.ArtistName}</h2>
                  <p className="l-r sub-head">{artData.ArtistCity}, Maharashtra</p>
                  <Stack direction="horizontal" gap={2} className="d-inline-flex">
                    <div className="star-rate-sec l-r">
                      <span><BsFillStarFill className="star-class"/></span>
                      <span>4</span>
                      <span>/</span>
                      <span>5</span>
                    </div>
                    <div className="count-review l-r cursor-pointer">2 Reviews</div>
                  </Stack>
                </div>
             </Link>
          </Col>
         
        )
      })}
        </Row>
    </>
  )
}

export default ArtistsLikebox