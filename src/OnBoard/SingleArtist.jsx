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
import { getArtistInfo } from "../actions/user";
import { useParams } from 'react-router';
import Octicons from '../assets/images/octicons.png';
import { useState } from "react";
import ThreeDotLoader from "../Artist/ThreeDotLoader";
import Skeleton from "react-loading-skeleton";
import { fetchArtistDetails } from "../redux/artistDetailsSlice";




const SingleArtist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params= useParams();
  const { details, loading, error } = useSelector(state => state.artistDetails);
  const artistId = atob(params.artistId);
  const userId = atob(params.userId);
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
                    loading ? (
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
                                <section>
                                    <BreadCrumbs/>
                                </section>
                                <section>
                                    <div className="inner-artist-info postion-r">
                                    <div className="inner-artist-info postion-r">
                                        <div className="avtar-img">
                                        <img src={details?.selProfileImage[0]?.LTMediaURL} alt="" className="w-100" />
                                        </div>
                                            <div className="s-artist-detail">
                                                <p className="name l-b">{details?.selApInfo?.FullName} <span><img src={Octicons} alt="" style={{width:26}} /></span></p>
                                                <p className="l-r locotion">{details?.selApInfo?.CityName}, {details?.selAPDetails
                                    ?.OtherStateName}</p>
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
                                        </div>
                                        <div className="check-now-btn">
                                            <Heartlike props={details}/>
                                            <div className="share-icon"><FiShare2/>
                                            <SocialIcon/>
                                            </div>
                                            <Link to={`/check-availability/${btoa(artistId)}/${btoa(userId)}`}>
                                                <button type="button" className="l-b btnn check-btn btn btn-primary">Check Availability</button>
                                            </Link>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <section className="main-livetune-details">
                                        <div className="s-heading">
                                            <p className="s-head l-b">Videos and images</p>
                                        </div>
                                        <Tabs
                                        defaultActiveKey="photos"
                                        id="uncontrolled-tab-example"
                                        className="mb-3 justify-content-end video-photos-sec"
                                        >
                                            <Tab eventKey="photos" title="Photos">
                                                <Gallery data={details}/>
                                            </Tab>
                                            <Tab eventKey="videos" title="Videos">
                                                <Videos data={details}/>
                                            </Tab>
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
                                                    <p className="l-r">{details?.selAPDetails?.BriefIntro}</p>
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
                                                           details?.selAPDetails.LanguageName ? details?.selAPDetails?.LanguageName.split(",").map((language,index) => {
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
                                                            details?.selAPDetails?.GenreName
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
                                                    <span>4</span>
                                                    <span>/</span>
                                                    <span>5</span>
                                                    <span><BsFillStarFill className="star-class"/></span>
                                                </div>
                                                <h2 className="l-b red-color">Wonderful</h2>
                                                <p className="sub-head l-r">Based on 2 verified users reviews</p>
                                            </div>
                                        </Col>
                                        <Col lg={8}>
                                            <div className="reviews-sec">
                                                <div className="reviews-box">
                                                    <div className="ico-img">
                                                        <img src={Revieimg} alt="" />
                                                    </div>
                                                    <div className="reviews-detail-sec">
                                                        <Stack direction="horizontal" gap={3}>
                                                            <div className="l-b name">Roshni Rao</div>
                                                            <div className="l-r date">17 Jun 2022</div>
                                                        </Stack>
                                                        <Stack direction="horizontal" gap={5}>
                                                            <div className="l-sb like-text"><AiFillLike className="red-color"/> awesome song selection.</div>
                                                            <div className="l-sb like-text"><AiFillDislike className="red-color"/> N.A.</div>
                                                        </Stack>
                                                        <p className="l-r">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</p>
                                                    </div>
                                                </div>
                                                <div className="reviews-box">
                                                    <div className="ico-img">
                                                        <img src={Revieimg} alt="" />
                                                    </div>
                                                    <div className="reviews-detail-sec">
                                                        <Stack direction="horizontal" gap={3}>
                                                            <div className="l-b name">Roshni Rao</div>
                                                            <div className="l-r date">17 Jun 2022</div>
                                                        </Stack>
                                                        <Stack direction="horizontal" gap={5}>
                                                            <div className="l-sb like-text"><AiFillLike className="red-color"/> awesome song selection.</div>
                                                            <div className="l-sb like-text"><AiFillDislike className="red-color"/> N.A.</div>
                                                        </Stack>
                                                        <p className="l-r">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </section>  
                                <section className="main-livetune-details">
                                    <div className="s-heading">
                                        <p className="s-head l-b">Frequently asked questions</p>
                                    </div>
                                    <Faq data={details?.selQuestLog}/>
                                </section> 
                                <section className="main-livetune-details">
                                    <div className="s-heading">
                                        <p className="s-head l-b">Artists you might like</p>
                                    </div>
                                    <ArtistsLikebox data={details?.selOtherArtist}/>            
                                </section>
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