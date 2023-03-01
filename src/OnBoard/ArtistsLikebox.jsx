import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import likeimg from '../assets/images/like-img.png';
import { BsFillStarFill } from "react-icons/bs";

const ArtistsLikebox = () => {
  return (
    <>
        <Row>
          <Col lg={3} md={6}>
            <div className="main-artist-like-box text-center">
              <div className="img-sec">
                <img src={likeimg} alt="" className="w-100" />
              </div>
              <h2 className="l-b name mb-0">Rahul Singh</h2>
              <p className="l-r sub-head">Mumbai, Maharashtra</p>
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
          </Col>
          <Col lg={3} md={6}>
            <div className="main-artist-like-box text-center">
              <div className="img-sec">
                <img src={likeimg} alt="" className="w-100" />
              </div>
              <h2 className="l-b name mb-0">Rahul Singh</h2>
              <p className="l-r sub-head">Mumbai, Maharashtra</p>
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
          </Col>
          <Col lg={3} md={6}>
            <div className="main-artist-like-box text-center">
              <div className="img-sec">
                <img src={likeimg} alt="" className="w-100" />
              </div>
              <h2 className="l-b name mb-0">Rahul Singh</h2>
              <p className="l-r sub-head">Mumbai, Maharashtra</p>
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
          </Col>
          <Col lg={3} md={6}>
            <div className="main-artist-like-box text-center">
              <div className="img-sec">
                <img src={likeimg} alt="" className="w-100" />
              </div>
              <h2 className="l-b name mb-0">Rahul Singh</h2>
              <p className="l-r sub-head">Mumbai, Maharashtra</p>
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
          </Col>
        </Row>
    </>
  )
}

export default ArtistsLikebox