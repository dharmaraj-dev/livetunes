import React, { useEffect }  from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import BreadCrumbs from "./BreadCrumbs";
import Heartlike from "./Heartlike";
import SocialIcon from "../components/SocialIcon";
import { BiUser } from "react-icons/bi";
import { TbMessageLanguage } from "react-icons/tb";
import { HiOutlineMusicalNote } from "react-icons/hi2";
import { BsFillStarFill } from "react-icons/bs";
import Stack from 'react-bootstrap/Stack';
import Insta from '../assets/images/insta.png';
import Facebook from '../assets/images/facebook.png';
import Youtube from '../assets/images/youtube.png';
import Nounwed from '../assets/images/noun-wedding.png';
import Nouncafe from '../assets/images/noun-cafe.png';
import Nounpray from '../assets/images/noun-pray.png';
import Nounconcert from '../assets/images/noun-concert.png';
import Nounbirthday from '../assets/images/noun-birthday.png';
import Nounpub from '../assets/images/noun-pub.png';
import Nounfestival from '../assets/images/noun-festival.png';
import Nounparty from '../assets/images/noun-party.png';
import Revieimg from '../assets/images/revie-img.png';
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import Faq from "./Faq";
import ArtistsLikebox from "./ArtistsLikebox";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Gallery from "./Gallery";
import Videos from "./Videos";
import { FiShare2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import ArtistInfo from "./ArtistInfo";
import { useLocation } from 'react-router-dom';
import { Navigate, useNavigate  } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router';
import Octicons from '../assets/images/octicons.png';
import { useState } from "react";
import ThreeDotLoader from "../Artist/ThreeDotLoader";
import Skeleton from "react-loading-skeleton";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { fetchArtistDetails } from "../redux/artistSlice";
import useLoginCheck from "../hooks/useLoginCheck";



const SingleArtist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params= useParams();
  const MySwal = withReactContent(Swal);
  const { showLoginAlert } = useLoginCheck();
  const { artistDetails, artistDetailsLoading } = useSelector(state => state.artist);
  const { profileData } = useSelector(state => state.userProfile);
  const { isLoggedIn } = useSelector(state => state.userAuth);
  const artistId = atob(params.artistId);
  const userId = atob(params.userId);

  const showAlert = async () => {
        MySwal.fire({
          title: '<strong>Incomplete Profile!!</strong>',
          icon: 'warning',
          html:
            'Please complete your profile to check availability & bookings.',
          showDenyButton: true,
          confirmButtonText: 'Go To Profile',
          denyButtonText: `No`,
          showLoaderOnConfirm: false,
          allowOutsideClick: () => false
        }).then((result) => {
            if(result.isConfirmed) {
                navigate('/profile')
            }
        })
    }

  useEffect(()=>{
    if(artistId === undefined){
        navigate("/dashboard");
    }
    window.scrollTo(0, 0);
    dispatch(fetchArtistDetails(artistId,userId));
  },[artistId]);  
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
                {
                    artistDetailsLoading ? (
                        <>
                            <Skeleton className="l-sb head mb-2" width="160px" count={1}  />
                            <Skeleton className="l-l sub-head mb-2" width="240px" count={1}  />
                            <Skeleton className="l-l sub-head mb-2" width="380px" count={1}  />
                            <Skeleton className="l-l sub-head mb-5" width="500px" count={1}  />
                            <Skeleton className="hello-header" count={1}  />    
                        </>
                    ) : (
                        <Container fluid>
                            <div className="main-artists-list">
                                {/*<section>
                                    <BreadCrumbs/>
                                </section>*/}
                                <section>
                                    <div className="inner-artist-info postion-r">
                                    <div className="inner-artist-info postion-r">
                                        <div className="avtar-img">
                                        <img src={artistDetails?.selProfileImage[0]?.LTMediaURL} alt="" className="w-100" />
                                        </div>
                                            <div className="s-artist-detail">
                                                <p className="name l-b">{artistDetails?.selApInfo?.FullName} <span><img src={Octicons} alt="" style={{width:26}} /></span></p>
                                                <p className="l-r locotion">{artistDetails?.selApInfo?.CityName}, {artistDetails?.selAPDetails
                                    ?.OtherStateName}</p>
                                                <Stack direction="horizontal" gap={2} className="d-inline-flex">
                                                    <div className="star-rate-sec l-r">
                                                    <span><BsFillStarFill className="star-class"/></span>
                                                    <span>{artistDetails?.Rating != "" ? artistDetails?.Rating : 0}</span>
                                                    <span>/</span>
                                                    <span>5</span>
                                                    </div>
                                                    <div className="count-review l-r cursor-pointer">{artistDetails.selArtistReview?.length} Reviews</div>
                                                </Stack>
                                            </div>
                                        </div>
                                        <div className="check-now-btn">
                                            <div className="share-icon"><FiShare2/>
                                            <SocialIcon/>
                                            </div>
                                            {!isLoggedIn ? (
                                                <button onClick={showLoginAlert} type="button" className="l-b btnn check-btn btn btn-primary">Check Availability</button>
                                            ):(
                                                profileData.firstName != "" && profileData.firstName != null ? (
                                                    <Link to={`/check-availability/${btoa(artistId)}/${btoa(userId)}`}>
                                                        <button type="button" className="l-b btnn check-btn btn btn-primary">Check Availability</button>
                                                    </Link>
                                                ) : (
                                                    <button onClick={showAlert} type="button" className="l-b btnn check-btn btn btn-primary">Check Availability</button>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <section className="main-livetune-details">
                                        <div className="s-heading">
                                            <p className="s-head l-b">Videos and images</p>
                                        </div>
                                        <Tabs
                                        defaultActiveKey={
                                            artistDetails?.selLtMedia.filter((photo) => { return !photo.LTMediaLogName.endsWith('.mp4')}).length > 0 ? "photos" : "videos"
                                        }
                                        id="uncontrolled-tab-example"
                                        className="mb-3 justify-content-end video-photos-sec"
                                        >
                                            {artistDetails?.selLtMedia.filter((photo) => { return !photo.LTMediaLogName.endsWith('.mp4')}).length > 0 && (
                                                <Tab eventKey="photos" title="Photos">
                                                    <Gallery data={artistDetails}/>
                                                </Tab>
                                            )}
                                            {artistDetails?.selLtMedia.filter((photo) => { return photo.LTMediaLogName.endsWith('.mp4')}).length > 0 && (
                                                <Tab eventKey="videos" title="Videos">
                                                    <Videos data={artistDetails}/>
                                                </Tab>
                                            )}
                                        </Tabs>
                                    </section>
                                </section>
                                <section className="s-about-social-sec">
                                    <Row>
                                        <Col lg={6}>
                                            <div className="left-text-sec">
                                                <div className="ico-img">
                                                    <BiUser className="red-color inner-ico-img"/>
                                                </div>
                                                <div className="right-text-sec">
                                                    <h2>About me</h2>
                                                    <p className="l-r">{artistDetails?.selAPDetails?.BriefIntro}</p>
                                                </div>
                                            </div>
                                            <div className="left-text-sec">
                                                <div className="ico-img">
                                                    <TbMessageLanguage className="red-color inner-ico-img"/>
                                                </div>
                                                <div className="right-text-sec">
                                                    <h2>Performance Languages</h2>
                                                    <div className="per-lang">
                                                        {
                                                           artistDetails?.selAPDetails.LanguageName ? artistDetails?.selAPDetails?.LanguageName.split(",").map((language,index) => {
                                                                return <div key={`lang_${index}`} className="inner-per-lang l-sb">{language}</div>
                                                            }) : <></>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="left-text-sec">
                                                <div className="ico-img">
                                                    <HiOutlineMusicalNote className="red-color inner-ico-img"/>
                                                </div>
                                                <div className="right-text-sec">
                                                    <h2>Performance Gernes</h2>
                                                    <div className="per-lang">
                                                        {
                                                            artistDetails?.selAPDetails?.GenreName
                                                            .split(",").map((genre,index) => {
                                                                return <div key={`gen_${index}`} className="inner-per-lang l-sb">{genre}</div>
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="main-social-sec">
                                                <h2>Performance Gernes</h2>
                                                <div className="inner-social-sec">
                                                    <Stack direction="horizontal">
                                                        <div className="ico-text-sec">
                                                            <img src={Insta} alt="" />
                                                            <span className="head l-r">Instagram</span>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <span className="l-b">2K </span>
                                                            <span className="l-r">Followers</span>
                                                        </div>
                                                    </Stack>
                                                </div>
                                                <div className="inner-social-sec">
                                                    <Stack direction="horizontal">
                                                        <div className="ico-text-sec">
                                                            <img src={Facebook} alt="" />
                                                            <span className="head l-r">Facebook</span>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <span className="l-b">500 </span>
                                                            <span className="l-r">Followers</span>
                                                        </div>
                                                    </Stack>
                                                </div>
                                                <div className="inner-social-sec">
                                                    <Stack direction="horizontal">
                                                        <div className="ico-text-sec">
                                                            <img src={Youtube} alt="" />
                                                            <span className="head l-r">YouTube</span>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <span className="l-b">5K </span>
                                                            <span className="l-r">Subscribers ,</span>
                                                            <span className="l-b">8K </span>
                                                            <span className="l-r">Views</span>
                                                        </div>
                                                    </Stack>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </section>
                                <section className="main-livetune-details">
                                    <div className="s-heading">
                                        <p className="s-head l-b">Livetunes Details</p>
                                    </div>
                                    <div className="livetune-detail-box">
                                        <div className="inner-livetune-detail-box">
                                            <h2 className="red-color">004</h2>
                                            <p className="l-sb sub-head">Total performance</p>
                                        </div>
                                        <div className="inner-livetune-detail-box">
                                            <h2 className="red-color">01</h2>
                                            <p className="l-sb sub-head">Performing member</p>
                                        </div>
                                        <div className="inner-livetune-detail-box">
                                            <h2 className="red-color">2 hrs</h2>
                                            <p className="l-sb sub-head">Performing Duration</p>
                                        </div>
                                        <div className="inner-livetune-detail-box">
                                            <h2 className="red-color">Yes</h2>
                                            <p className="l-sb sub-head">Willing to travel</p>
                                        </div>
                                    </div>
                                </section>
                                <section className="main-livetune-details">
                                    <div className="s-heading">
                                        <p className="s-head l-b">Preferred events</p>
                                    </div>
                                    <div className="preferred-event-box">
                                        <div className="inner-preferred-event-box">
                                            <div className="pre-evnt-ico">
                                                <img src={Nounwed} alt="" />
                                            </div>
                                            <p className="l-r sub-head">weddings</p>
                                        </div>
                                        <div className="inner-preferred-event-box">
                                            <div className="pre-evnt-ico">
                                                <img src={Nouncafe} alt="" />
                                            </div>
                                            <p className="l-r sub-head">Cafes</p>
                                        </div>
                                        <div className="inner-preferred-event-box">
                                            <div className="pre-evnt-ico">
                                                <img src={Nounpray} alt="" />
                                            </div>
                                            <p className="l-r sub-head">Religious</p>
                                        </div>
                                        <div className="inner-preferred-event-box">
                                            <div className="pre-evnt-ico">
                                                <img src={Nounconcert} alt="" />
                                            </div>
                                            <p className="l-r sub-head">Concerts</p>
                                        </div>
                                        <div className="inner-preferred-event-box">
                                            <div className="pre-evnt-ico">
                                                <img src={Nounbirthday} alt="" />
                                            </div>
                                            <p className="l-r sub-head">Kids</p>
                                        </div>
                                        <div className="inner-preferred-event-box">
                                            <div className="pre-evnt-ico">
                                                <img src={Nounpub} alt="" />
                                            </div>
                                            <p className="l-r sub-head">Pubs</p>
                                        </div>
                                        <div className="inner-preferred-event-box">
                                            <div className="pre-evnt-ico">
                                                <img src={Nounfestival} alt="" />
                                            </div>
                                            <p className="l-r sub-head">Festivals</p>
                                        </div>
                                        <div className="inner-preferred-event-box">
                                            <div className="pre-evnt-ico">
                                                <img src={Nounparty} alt="" />
                                            </div>
                                            <p className="l-r sub-head">Parties</p>
                                        </div>
                                    </div>
                                </section>
                                <section className="main-livetune-details">
                                    <div className="s-heading">
                                        <p className="s-head l-b">Ratings & Reviews</p>
                                    </div>
                                    <Row className="main-rate-review-sec">
                                        <Col lg={4}>
                                            <div className="rating-sec">
                                                <div className="star-sec red-color l-b">
                                                    <span>{artistDetails?.Rating != "" ? artistDetails?.Rating : 0}</span>
                                                    <span>/</span>
                                                    <span>5</span>
                                                    <span><BsFillStarFill className="star-class"/></span>
                                                </div>
                                                {artistDetails?.selArtistReview?.length > 0 && (
                                                    <>
                                                        <h2 className="l-b red-color">{artistDetails?.Rating > 3 ? "Wonderful" : "Average"}</h2>
                                                        <p className="sub-head l-r">{artistDetails?.ReviewNarration}</p>
                                                    </>
                                                )}
                                                
                                            </div>
                                        </Col>
                                        <Col lg={8}>
                                            <div className="reviews-sec">
                                                {artistDetails?.selArtistReview?.map((rev,index) => {
                                                    return (
                                                        <div key={`review_${index}`} className="reviews-box">
                                                            <div className="ico-img">
                                                                <img src={rev.ProfileImg} alt="" />
                                                            </div>
                                                            <div className="reviews-detail-sec">
                                                                <Stack direction="horizontal" gap={3}>
                                                                    <div className="l-b name">{rev.UserName}</div>
                                                                    <div className="l-r date">{rev.FeedbackDate}</div>
                                                                </Stack>
                                                                <Stack direction="horizontal" gap={5}>
                                                                    <div className="l-sb like-text"><AiFillLike className="red-color"/> {rev.LikeRemark == "" ? "NA" : rev.LikeRemark}</div>
                                                                    <div className="l-sb like-text"><AiFillDislike className="red-color"/> {rev.DisLikeRemark == "" ? "NA" : rev.DisLikeRemark}</div>
                                                                </Stack>
                                                                <p className="l-r">{rev.ExtraRemark == "" ? "NA" : rev.ExtraRemark}</p>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </Col>
                                    </Row>
                                </section>  
                                <section className="main-livetune-details">
                                    <div className="s-heading">
                                        <p className="s-head l-b">Frequently asked questions</p>
                                    </div>
                                    <Faq data={artistDetails?.selQuestLog}/>
                                </section> 
                                {artistDetails?.selOtherArtist?.length > 0 && (
                                <section className="main-livetune-details">
                                    <div className="s-heading">
                                        <p className="s-head l-b">Artists you might like</p>
                                    </div>
                                    <ArtistsLikebox data={artistDetails?.selOtherArtist}/>            
                                </section>
                                )}
                            </div>
                        </Container>
                    )
                }
            </div>
            </div>
        </div>
    </>
  )
}

export default SingleArtist