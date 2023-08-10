import React, {useState, useEffect} from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Singleart from '../assets/images/single-art.png';
import Fb from '../assets/images/fb.png';
import Youtube from '../assets/images/youtube.png';
import Instagram from '../assets/images/instagram.png';
import { FiDownload } from "react-icons/fi";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoList from "./VideoList";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getArtistProfileForJudge } from "../actions/judge";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Loader from '../Artist/Loader';
import { Navigate, useNavigate, useLocation  } from 'react-router-dom';
import moment from "moment";
import { useParams } from 'react-router';
import ThreeDotLoader from '../Artist/ThreeDotLoader';

const SingleApplication = () => {
  const dispatch = useDispatch();
  let loc = useLocation();
  const MySwal = withReactContent(Swal);
  let navigate = useNavigate();
  const params= useParams()
  const applicationId = atob(params.id);
  const { artistApplicationData } = useSelector(state => state.judge);
  const [pageLoading, setPageLoading] = useState(true);
  const [dataNotFound, setDataNotFount] = useState(false);

  useEffect(() => {
    dispatch(getArtistProfileForJudge(applicationId)).then((res) => {
        setPageLoading(false);
        if(res.data.IsSuccess) {
          setDataNotFount(false);
        } else {
          setDataNotFount(true);
        }
        //
    }).catch((err) => {
        navigate('/')
    })
  }, [])

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
              {pageLoading ? (
                <div className="artist_loader">
                    <ThreeDotLoader />
                </div>
                ):(
                  dataNotFound ? (
                    <div>
                      <h3 className="data_not_found">Data not found.</h3>
                    </div>
                  ):(
                  <Container fluid>
                    <div className="main-artists-list">
                      <div className="main-single-app-sec">
                        <div className="single-client-app-sec">
                          <h4 className="l-b mb-3">Applications</h4>
                          <hr/>
                          <Stack direction="horizontal" gap={4}>
                            <div className="img-single">
                              <img src={artistApplicationData?.selProfileMedia[0]?.LTMediaURL} alt="" className="radius-50" style={{"maxWidth": "100%"}} />
                            </div>
                            <div>
                              <h2>{artistApplicationData.selApInfo.FullName}</h2>
                              <p className="l-r fs-5">{artistApplicationData.selApInfo.CityName}, {artistApplicationData.selApInfo.StateName}</p>
                            </div>
                          </Stack>
                          <div className="download-review-btn-sec">
                            <Stack direction="horizontal" gap={4}>
                              <button className="l-m filter-denld-btn red-color cursor-pointer ms-auto">Download <FiDownload/></button>
                              <Link to={`/application-review/${btoa(applicationId)}/${btoa(artistApplicationData.selApInfo.FullName)}/${btoa(artistApplicationData.selApInfo.CityName)}/${btoa(artistApplicationData.selApInfo.StateName)}/${btoa(artistApplicationData?.selProfileMedia[0]?.LTMediaURL)}`}>
                              <button className="l-m filter-denld-btn red-color cursor-pointer">Review</button>
                              </Link>
                            </Stack>
                            <hr/>
                          </div>
                        </div>  
                        <div className="video-list-sec">
                          <VideoList videoData={artistApplicationData.selLtMedia}/>
                        </div>
                        <div className="info-performance-details">
                          <Row>
                            <Col lg={6} xl={5}>
                              <h2 className="red-color fs-4 mb-4">Personal Information</h2>
                              <Row className="mb-4">
                                <Col lg={7}>
                                  <div className="">
                                    <p className="heading-text mb-0 l-r">E-mail</p>
                                    <p className="sub-heading-text l-r">{artistApplicationData.selApInfo.EmailId}</p>
                                  </div>
                                </Col>
                                <Col lg={5}>
                                  <div className=" ms-auto">
                                    <p className="heading-text mb-0 l-r">Contact No.</p>
                                    <p className="sub-heading-text l-r">{artistApplicationData.selApInfo.ContactNo}</p>
                                  </div>
                                </Col>
                              </Row>  
                              <Row className="mb-4">
                                <Col lg={7}>
                                  <div className="">
                                    <p className="heading-text mb-0 l-r">D.O.B</p>
                                    <p className="sub-heading-text l-r">{moment(artistApplicationData.selApInfo.DateOfBirth).format('DD-MM-yyyy')}</p>
                                  </div>
                                </Col>
                                <Col lg={5}>
                                  <div className=" ms-auto">
                                    <p className="heading-text mb-0 l-r">Gender</p>
                                    <p className="sub-heading-text l-r">{artistApplicationData.selApInfo.Gender}</p>
                                  </div>
                                </Col>
                              </Row>
                              <Row className="mb-4">
                                <Col lg={12}>
                                  <div className="">
                                    <p className="heading-text mb-0 l-r">Address</p>
                                    <p className="sub-heading-text l-r">NA</p>
                                  </div>
                                </Col>
                              </Row>
                              <Row className="mb-4">
                                <Col lg={12}>
                                  <div className="">
                                    <p className="heading-text mb-2 l-r">Social media links</p>
                                    <p className="social-img-text l-r"><a href=""><img src={Fb} alt="" className="" /> {artistApplicationData.selASDetails.FacebookLink != null ? artistApplicationData.selASDetails.FacebookLink : 'NA'}</a></p>
                                    <p className="social-img-text l-r"><a href=""><img src={Instagram} alt="" className="" /> {artistApplicationData.selASDetails.InstagramLink != null ? artistApplicationData.selASDetails.InstagramLink : 'NA'}</a></p>
                                    <p className="social-img-text l-r"><a href=""><img src={Youtube} alt="" className="" /> {artistApplicationData.selASDetails.YouTubeLink != null ? artistApplicationData.selASDetails.YouTubeLink : 'NA'}</a></p>
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                            <Col lg={6} xl={5}>
                              <h2 className="red-color fs-4 mb-4">Performance details</h2>
                              <Row className="mb-4">
                                <Col lg={7}>
                                  <div className="">
                                    <p className="heading-text mb-0 l-sb">Artist Category</p>
                                    <p className="sub-heading-text l-r">{artistApplicationData.selAPDetails.CategoryName}</p>
                                  </div>
                                </Col>
                              </Row>  
                              <Row className="mb-4">
                                <Col lg={7}>
                                  <div className="">
                                    <p className="heading-text mb-0 l-sb">Performance experience</p>
                                    <p className="sub-heading-text l-r">{artistApplicationData.selAPDetails.PExperience} years</p>
                                  </div>
                                </Col>
                              </Row>
                              <Row className="mb-4">
                                <Col lg={7}>
                                  <div className="">
                                    <p className="heading-text mb-0 l-sb">Available for Virtual events</p>
                                    <p className="sub-heading-text l-r">{artistApplicationData.selAPDetails.YesVEvents ? 'Yes' : 'No'}</p>
                                  </div>
                                </Col>
                              </Row>
                              <Row className="mb-4">
                                <Col lg={7}>
                                  <div className="">
                                    <p className="heading-text mb-0 l-sb">Preferred performance duration</p>
                                    <p className="sub-heading-text l-r">
                                      {artistApplicationData.selAPDetails.PDuration1Hr && (
                                        "1 hr"
                                      )}
                                      {artistApplicationData.selAPDetails.PDuration2Hr && (
                                        "2 hrs"
                                      )}
                                      {artistApplicationData.selAPDetails.PDurationM2Hr && (
                                        <span>more than 2 hrs ({artistApplicationData.selAPDetails.DurationRemark})</span>
                                      )}
                                    </p>
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </div>
                        <div className="info-performance-details">
                          <Row>
                            <Col lg={6} xl={5}>
                              <Row className="mb-4">
                                <Col lg={7}>
                                  <div className="">
                                    <p className="heading-text mb-0 l-sb">Performance Gerne</p>
                                    <p className="sub-heading-text l-r">{artistApplicationData.selAPDetails.GenreName}</p>
                                  </div>
                                </Col>
                              </Row>  
                              <Row className="mb-4">
                                <Col lg={7}>
                                  <div className="">
                                    <p className="heading-text mb-0 l-sb">Preferred events</p>
                                    <p className="sub-heading-text l-r">{artistApplicationData.selAPDetails.EventsName}</p>
                                  </div>
                                </Col>
                              </Row>
                              <Row className="mb-4">
                                <Col lg={7}>
                                  <div className="">
                                    <p className="heading-text mb-0 l-sb">Available for ptivate events</p>
                                    <p className="sub-heading-text l-r">{artistApplicationData.selAPDetails.YesPEvents ? 'Yes' : 'No'}</p>
                                  </div>
                                </Col>
                              </Row>
                              <Row className="mb-4">
                                <Col lg={7}>
                                  <div className="">
                                    <p className="heading-text mb-0 l-sb">Performance price range ({artistApplicationData.selAPDetails.IsPerShow ? 'Per show' : 'Per hour'})</p>
                                    <p className="sub-heading-text l-r">Rs. {artistApplicationData.selAPDetails.FromCharge} to Rs. {artistApplicationData.selAPDetails.ToCharge}</p>
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                            <Col lg={6} xl={5}>
                              <Row className="mb-4">
                                <Col lg={7}>
                                  <div className="">
                                    <p className="heading-text mb-0 l-sb">Performance Languages</p>
                                    <p className="sub-heading-text l-r">{artistApplicationData.selAPDetails.LanguageName}</p>
                                  </div>
                                </Col>
                              </Row>  
                              <Row className="mb-4">
                                <Col lg={7}>
                                  <div className="">
                                    <p className="heading-text mb-0 l-sb">About you</p>
                                    <p className="sub-heading-text l-r">{artistApplicationData.selAPDetails.BriefIntro}</p>
                                  </div>
                                </Col>
                              </Row>
                              <Row className="mb-4">
                                <Col lg={7}>
                                  <div className="">
                                    <p className="heading-text mb-0 l-sb">Willing to travel for events</p>
                                    <p className="sub-heading-text l-r">{artistApplicationData.selAPDetails.YesOtherState ? 'Yes' : 'No'}</p>
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </div>
                      </div>  
                    </div>    
                  </Container>
                  )
                )}
            </div>
            </div>
          </div>
    </>
  )
}

export default SingleApplication