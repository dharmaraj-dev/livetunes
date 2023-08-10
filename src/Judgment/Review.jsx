import React, {useState, useEffect} from "react";
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
import { Button, Form } from "react-bootstrap";
import { TfiThumbUp, TfiThumbDown, TfiCheck, TfiClose, TfiStar } from "react-icons/tfi";

import { useDispatch, useSelector } from "react-redux";
import { getArtistApplicationFeedLogs, saveArtistReview, getApplications } from "../actions/judge";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Loader from '../Artist/Loader';
import { Navigate, useNavigate, useLocation  } from 'react-router-dom';
import { useParams } from 'react-router';
import { successToast, errorToast, infoToast } from "../services/toast-service";
import ThreeDotLoader from '../Artist/ThreeDotLoader';

const Review = () => {
  const dispatch = useDispatch();
  let loc = useLocation();
  const MySwal = withReactContent(Swal);
  let navigate = useNavigate();
  const params= useParams();

  console.log('params', params);
  //LTMediaURL

  const applicationId = atob(params.id);
  const applicantName = atob(params.name);
  const applicantCity = atob(params.city);
  const applicantState = atob(params.state);
  const applicantPic = atob(params.profile);

  const { artistApplicationData, feedLogs } = useSelector(state => state.judge);

  const [pageLoading, setPageLoading] = useState(true);
  const [inputFields, setInputFields] = useState(feedLogs);
  const [badgeType, setBadgeType] = useState("");
  const [likesText, setLikesText] = useState("");
  const [dislikesText, setDislikesText] = useState("");
  const [moreText, setMoreText] = useState("");

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index]["Score"] = event.target.value;
    setInputFields(data);
    calculateBadge();
  }

  const calculateBadge = () => {
    let totalScore = 0;
    let badgeScore = 0;
    inputFields.filter((key) => {return key?.Score}).map((scr) => {
      badgeScore+= parseInt(scr.Score);
    });
    feedLogs.map((scr) => {
      totalScore+= scr.MaxMarks
    });

    const actualScore = (badgeScore/totalScore)*100;
    console.log('actualScore', actualScore);
    if(actualScore < 65) {
      setBadgeType("Beginner");
    }
    if(actualScore >= 65 && actualScore < 80) {
      setBadgeType("Moderate");
    }
    if(actualScore >= 80 && actualScore <= 100) {
      setBadgeType("Professional");
    }
  }


  const reviewArtist = (status) => {
    const isScoreAddedLength = inputFields.filter((inf) => { return inf.Score; })
    if(feedLogs.length != isScoreAddedLength.length) {
      infoToast('Star fields are mendatory.');
      return false;
    }

    let selFeedBLog = [];
    inputFields.map((inp) => {
      selFeedBLog.push({
        "FeedMId": inp.FeedMId,
        "FeedMName": inp.FeedMName,
        "Score": inp.Score
      })
    })
    MySwal.fire({
      title: '<strong>Are you sure!!</strong>',
      icon: 'warning',
      html:
        'Do you want to submit this review?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const data = {
            "JPanelId":applicationId,
            "LikeRemark": likesText,
            "DislikeRemark": dislikesText,
            "ExtraRemark": moreText,
            "BadgeType": badgeType,
            "IsApprove": status == "approve" ? true : false,
            "IsReject": status == "reject" ? true : false,
            selFeedBLog
          };
        return dispatch(saveArtistReview(data)).then((response) => {
            console.log('response', response);
            if(response.data.IsSuccess) {
                  return response;
              } else {
                return response;
              }
          })
      },
      allowOutsideClick: () => false
    }).then((result) => {
        console.log('result', result);  
      if (result.isConfirmed && result.value) {
        if(result.value.data.IsSuccess) {
          Swal.fire('Review published successfylly.', '', 'success');
          dispatch(getApplications());
          navigate('/judgment-panel');
        } else {
          Swal.fire('Review not published.', '', 'error');
        }
      }
    })
  }

  useEffect(() => {
    if(feedLogs) {
      if(feedLogs.length <= 0) {
        dispatch(getArtistApplicationFeedLogs()).then((res) => {
          setInputFields(res.data.output_data);
          setPageLoading(false);
        });
      } else {
        setPageLoading(false);
        dispatch(getArtistApplicationFeedLogs()).then((res) => {
          setInputFields(res.data.output_data);
          setPageLoading(false);
        });
      }
    } else {
      dispatch(getArtistApplicationFeedLogs()).then((res) => {
        setInputFields(res.data.output_data);
        setPageLoading(false);
      });
    }
    
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
                <Container fluid>
                  <div className="main-artists-list">
                    <div className="main-single-app-sec">
                      <div className="single-client-app-sec">
                        <Stack direction="horizontal" gap={4}>
                          <div className="img-single">
                            <img src={applicantPic} alt="" className="radius-50" style={{"maxWidth": "100%"}} />
                          </div>
                          <div>
                            <h2>{applicantName}</h2>
                            <p className="l-r fs-5">{`${applicantCity} ${applicantState}`}</p>
                          </div>
                        </Stack>
                        <div className="download-review-btn-sec">
                          <Stack direction="horizontal" gap={4}>
                            <button className="l-m btn rj-btn ms-auto cursor-pointer" onClick={() => {reviewArtist('reject')}}>Reject</button>
                            <button className="l-m btn appro-btn cursor-pointer" onClick={() => {reviewArtist('approve')}}>Approve</button>
                          </Stack>
                          <hr/>
                        </div>
                      </div>
                      <div className="average-category">
                        <p className="top-heading-text l-sb mb-3">On the basis of your feedback and ratings Agnee Band would be categorised in three types</p>
                        <Row className="g-sm-3 g-lg-5">
                            <Col xl={4} lg={4} sm={4}>
                            <label className={`${badgeType == 'Beginner' ? 'activeBadge' : ''}`}>
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
                            <label className={`${badgeType == 'Moderate' ? 'activeBadge' : ''}`}>
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
                            <label className={`${badgeType == 'Professional' ? 'activeBadge' : ''}`}>
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
                        {feedLogs.map((feed, index) => {
                          return (
                            <Row key={`feed_${index}`}>
                              <Col lg={12} xl={12}>
                                <div className="mb-4">
                                    <p className="l-sb mb-3">{feed.FeedMName} 
                                      <span className="l-r"> {feed.SubText}</span> <span className="requiredInput"> <TfiStar className="red-color"/></span>
                                    </p>
                                    <Stack direction="horizontal" className="float-right">
                                      <div className="star-outof-sec ms-auto">
                                          <div className="outof-sec l-sb mb-3">
                                          <span>
                                            <Form.Control type="number" min={0} max={10} placeholder="8" className="l-b active numberInput" onChange={event => handleFormChange(index, event)}/> 
                                          </span> /{feed.MaxMarks}
                                          </div>
                                      </div>
                                    </Stack>
                                    {feed.lstFeedLogM.map((subFeed, index) => {
                                      return (
                                        <Stack key={`sub_${index}`} direction="horizontal" gap={2} className="align-items-self">
                                          <div className=""><img src={mplayerico} alt="" className="" /></div>
                                          <div className="l-r"><span className="l-sb">{subFeed.FeedLogMName}</span> – {subFeed.SubText}</div>
                                        </Stack>
                                      )
                                    })}
                                </div>
                              </Col>
                            </Row>
                          )
                        })}
                      </div>
                      <div className="likes-dislike-sec">
                        <Row>
                          <Col lg={6}>
                              <Form.Label className="l-sb main-label mt-3">
                                <TfiThumbUp className=""/> Likes
                              </Form.Label>
                              <Form.Control style={{"fontWeight": "normal"}} size="lg" type="text" placeholder="Please mentioned what you liked about the artist" className="l-b active" value={likesText} onChange={(e) => {setLikesText(e.target.value)}} /> 
                          </Col>
                          <Col lg={6}>
                              <Form.Label className="l-sb main-label mt-3">
                                <TfiThumbDown className=""/> Dislikes
                              </Form.Label>
                              <Form.Control style={{"fontWeight": "normal"}} size="lg" type="text" placeholder="Please mentioned what you disliked about the artist" className="l-b active" value={dislikesText} onChange={(e) => {setDislikesText(e.target.value)}}/> 
                          </Col>
                          <Col lg={12} className="mt-4">
                              <Form.Label className="l-sb main-label">
                                Tell us more
                              </Form.Label>
                              <textarea className="form-control" placeholder="Type any additional feedback" style={{"minHeight": "100px"}} value={moreText} onChange={(e) => {setMoreText(e.target.value)}}></textarea>
                          </Col>
                        </Row>
                      </div>
                      <div className="approve_reject_buttons">
                        <Button
                          type="text"
                          className="approve_button"
                          onClick={() => {reviewArtist('approve')}}
                        >
                          <TfiCheck className="approve_icon"/>
                          <span> Approve </span>
                        </Button>
                        <Button
                          type="text"
                          className="reject_button"
                          onClick={() => {reviewArtist('reject')}}
                        >
                          <TfiClose className="reject_icon"/>
                          <span> Reject </span>
                        </Button>
                      </div>
                    </div>  
                  </div>    
                </Container>
              )}
            </div>
            </div>
          </div>
    </>
  )
}

export default Review