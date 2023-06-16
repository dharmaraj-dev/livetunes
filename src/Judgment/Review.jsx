import React from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Singleart from '../assets/images/single-art.png';
import Bronze from '../assets/images/bronze.png';
import Silver from '../assets/images/silver.png';
import Gold from '../assets/images/gold.png';
import mplayerico from '../assets/images/music-player-ico.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StarRate from "../OnBoard/StarRate";

const Review = () => {
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
                <Container fluid>
                  <div className="main-artists-list">
                    <div className="main-single-app-sec">
                      <div className="single-client-app-sec">
                        <Stack direction="horizontal" gap={4}>
                          <div className="img-single">
                            <img src={Singleart} alt="" className="" />
                          </div>
                          <div>
                            <h2>Rajesh Kumar</h2>
                            <p className="l-r fs-5">Mumbai, Maharashtra</p>
                          </div>
                        </Stack>
                        <div className="download-review-btn-sec">
                          <Stack direction="horizontal" gap={4}>
                            <button className="l-m btn rj-btn ms-auto cursor-pointer">Reject</button>
                            <button className="l-m btn appro-btn cursor-pointer">Approve</button>
                          </Stack>
                          <hr/>
                        </div>
                      </div>
                      <div className="average-category">
                        <p className="top-heading-text l-sb mb-3">On the basis of your feedback and ratings Agnee Band would be categorised in three types</p>
                        <Row className="g-sm-3 g-lg-5">
                            <Col xl={4} lg={4} sm={4}>
                            <label>
                            <input type="radio" name="product" class="card-input-element" />
                                <div className="earned-sec mb-4 postion-r cat-input">
                                    <div className="inner-average-category text-center">
                                        <img src={Bronze} alt="" className="" />
                                        <p className="l-sb head-sec mb-2 mt-2">Beginner</p>
                                        <p className="l-r mb-3">knows how to sing, needs improvement can be included in the team</p>
                                        <p className="l-r mb-0">3 to 3.5 stars</p>
                                        <p className="l-r">(average)</p>
                                    </div>
                                </div>
                            </label>  
                            </Col>
                            <Col xl={4} lg={4} sm={4}>
                            <label>
                            <input type="radio" name="product" class="card-input-element" />
                                <div className="earned-sec mb-4 postion-r cat-input">
                                    <div className="inner-average-category text-center">
                                        <img src={Silver} alt="" className="" />
                                        <p className="l-sb head-sec mb-2 mt-2">Moderate</p>
                                        <p className="l-r mb-3">Good voice quality, can handle small/mid level concerts</p>
                                        <p className="l-r mb-0">3.5 to 4 stars</p>
                                        <p className="l-r">(average)</p>
                                    </div>
                                </div>
                            </label>  
                            </Col>
                            <Col xl={4} lg={4} sm={4}>
                            <label>
                            <input type="radio" name="product" class="card-input-element" />
                                <div className="earned-sec mb-4 postion-r cat-input">
                                    <div className="inner-average-category text-center">
                                        <img src={Gold} alt="" className="" />
                                        <p className="l-sb head-sec mb-2 mt-2">Professional</p>
                                        <p className="l-r mb-3">He is a professional no need of improvement and a perfect match for all type of concerts</p>
                                        <p className="l-r mb-0">4 to 5 stars</p>
                                        <p className="l-r">(average)</p>
                                    </div>
                                </div>
                            </label>  
                            </Col>
                        </Row>
                      </div>
                      <div className="info-performance-details">
                        <p className="heading-text mb-3 l-sb">Feedback and review</p>
                        <Row>
                          <Col lg={6} xl={5}>
                            <div className="mb-4">
                                <p className="l-sb mb-3">ARTISTS VOCAL <span className="l-r">(50% weightage)</span></p>
                                <Stack direction="horizontal" gap={2} className="align-items-self">
                                  <div className=""><img src={mplayerico} alt="" className="" /></div>
                                  <div className="l-r"><span className="l-sb">Vocal Technique</span> – Tone Quality, Breath Support, Intonation, Diction and Articulation</div>
                                </Stack>
                                <Stack direction="horizontal" gap={2} className="align-items-self">
                                  <div className=""><img src={mplayerico} alt="" className="" /></div>
                                  <div className="l-r"><span className="l-sb">Rhythm & Tempo</span> – Voice in relation to music</div>
                                </Stack>
                            </div>
                          </Col>
                          <Col lg={6} xl={{ span: 3, offset: 4 }}>
                            <Stack direction="horizontal">
                              <div className="star-outof-sec ms-auto">
                                  <div className="outof-sec l-sb mb-3">
                                  <span>7</span> /10
                                  </div>
                                  <StarRate/>
                              </div>
                            </Stack>
                          </Col>
                        </Row>
                          
                        <Row>
                          <Col lg={6} xl={5}>
                            <div className="mb-4">
                                <p className="l-sb mb-3">EXPRESSION <span className="l-r"> (30% weightage)</span></p>
                                <Stack direction="horizontal" gap={2} className="align-items-self">
                                  <div className=""><img src={mplayerico} alt="" className="" /></div>
                                  <div className="l-r"><span className="l-sb">Performance</span> – How well the performer is able to express the meaning and mood of the song</div>
                                </Stack>
                            </div>
                          </Col>  
                          <Col lg={6} xl={{ span: 3, offset: 4 }}>
                            <Stack direction="horizontal">
                              <div className="star-outof-sec ms-auto">
                                  <div className="outof-sec l-sb mb-3">
                                  <span>7</span> /10
                                  </div>
                                  <StarRate/>
                              </div>
                            </Stack>
                          </Col>
                        </Row>  

                        <Row>
                          <Col lg={6} xl={5}>
                            <div className="mb-3">
                                <p className="l-sb mb-3">SHOWMANSHIP <span className="l-r"> (20% weightage)</span></p>
                                <Stack direction="horizontal" gap={2} className="align-items-self">
                                  <div className=""><img src={mplayerico} alt="" className="" /></div>
                                  <div className="l-r"><span className="l-sb">Show Design</span> – Music Selection, Effective use of Stage and Performance Area, Outfit and style</div>
                                </Stack>
                                <Stack direction="horizontal" gap={2} className="align-items-self">
                                  <div className=""><img src={mplayerico} alt="" className="" /></div>
                                  <div className="l-r"><span className="l-sb">Versatality</span> –The ability to adapt various genres of Music</div>
                                </Stack>
                            </div>
                          </Col>
                          <Col lg={6} xl={{ span: 3, offset: 4 }}>
                            <Stack direction="horizontal">
                              <div className="star-outof-sec ms-auto">
                                  <div className="outof-sec l-sb mb-3">
                                  <span>7</span> /10
                                  </div>
                                  <StarRate/>
                              </div>
                            </Stack>
                          </Col>
                        </Row>      
                      </div>
                      <div className="likes-dislike-sec">
                        <Row>
                          <Col lg={6}>

                          </Col>
                        </Row>
                      </div>
                    </div>  
                  </div>    
                </Container>
            </div>
            </div>
          </div>
    </>
  )
}

export default Review