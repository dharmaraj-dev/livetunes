import React, {useEffect} from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArtistInfo from "../OnBoard/ArtistInfo";
import Stack from 'react-bootstrap/Stack';
import ArtistTransactions from "./ArtistTransactions";
import Income from '../assets/images/noun-total-income.png';
import Prize from '../assets/images/prize.png';
import Dwedding from '../assets/images/noun-wedding.png';
import Party from '../assets/images/noun-party.png';
import Dcafe from '../assets/images/noun-cafe.png';
import Dpray from '../assets/images/noun-pray.png';
import Dfestival from '../assets/images/noun-festival.png';
import Dbirthday from '../assets/images/noun-birthday.png';
import { Link } from "react-router-dom";
import { useDispatch ,useSelector } from "react-redux";
import { getArtistDetails } from "../redux/artistDetailsSlice";

const ArtistDashboard = () => {
    const dispatch = useDispatch();
    const {loading, details} = useSelector(state => state.artistDetails);
    const { ArtistId } = useSelector(state => state.userAuth);
    useEffect(()=>{
        window.scrollTo(0, 0);

        dispatch(getArtistDetails());
      },[ArtistId]);  
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
                        <h4 className="l-b mb-3">Your Earnings</h4>
                        <Row>
                            <Col xl={8} lg={6} md={12}>
                              <Row>
                                <Col xl={5} lg={12}>
                                    <div className="earned-sec mb-4">
                                        <Stack direction="horizontal" gap={3}>
                                            <div className="img-sec">
                                                <img src={Income} alt="img" />
                                            </div>
                                            <div className="">
                                                <p className="mb-0 sub-head fs-5">Total Earned</p>
                                                <p className="l-bl fs-2 m-0 head">₹ 56,830/-</p>
                                            </div>
                                        </Stack>
                                    </div>
                                    <h4 className="l-b mb-3">Rewards</h4>
                                    <div className="earned-sec mb-4">
                                        <Stack direction="horizontal" gap={3}>
                                            <div className="img-sec">
                                                <img src={Prize} alt="img" />
                                            </div>
                                            <div className="">
                                                <p className="mb-0 sub-head fs-5">Total rewards earned</p>
                                                <p className="l-bl fs-2 m-0 head">₹ 56,830/-</p>
                                            </div>
                                        </Stack>
                                    </div>
                                </Col>
                                <Col xl={7} lg={12}>
                                    <Row>
                                        <Col md={6}>
                                            <div className="earned-sec mb-3">
                                                <Stack direction="horizontal" gap={3}>
                                                    <div className="img-sec faint-img-sec">
                                                        <img src={Dwedding} alt="img" />
                                                    </div>
                                                    <div className="">
                                                        <p className="mb-0 sub-head fs-6">Wedding events</p>
                                                        <p className="l-bl fs-5 m-0 head">₹ 20,000/-</p>
                                                    </div>
                                                </Stack>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="earned-sec mb-3">
                                                <Stack direction="horizontal" gap={3}>
                                                    <div className="img-sec faint-img-sec">
                                                        <img src={Party} alt="img" />
                                                    </div>
                                                    <div className="">
                                                        <p className="mb-0 sub-head fs-6">Private Parties</p>
                                                        <p className="l-bl fs-5 m-0 head">₹ 20,000/-</p>
                                                    </div>
                                                </Stack>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="earned-sec mb-3">
                                                <Stack direction="horizontal" gap={3}>
                                                    <div className="img-sec faint-img-sec">
                                                        <img src={Dcafe} alt="img" />
                                                    </div>
                                                    <div className="">
                                                        <p className="mb-0 sub-head fs-6">Café Gigs</p>
                                                        <p className="l-bl fs-5 m-0 head">₹ 20,000/-</p>
                                                    </div>
                                                </Stack>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="earned-sec mb-3">
                                                <Stack direction="horizontal" gap={3}>
                                                    <div className="img-sec faint-img-sec">
                                                        <img src={Dpray} alt="img" />
                                                    </div>
                                                    <div className="">
                                                        <p className="mb-0 sub-head fs-6">Religious Events</p>
                                                        <p className="l-bl fs-5 m-0 head">₹ 20,000/-</p>
                                                    </div>
                                                </Stack>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="earned-sec mb-3">
                                                <Stack direction="horizontal" gap={3}>
                                                    <div className="img-sec faint-img-sec">
                                                        <img src={Dfestival} alt="img" />
                                                    </div>
                                                    <div className="">
                                                        <p className="mb-0 sub-head fs-6">College Fests</p>
                                                        <p className="l-bl fs-5 m-0 head">₹ 20,000/-</p>
                                                    </div>
                                                </Stack>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="earned-sec mb-3">
                                                <Stack direction="horizontal" gap={3}>
                                                    <div className="img-sec faint-img-sec">
                                                        <img src={Dbirthday} alt="img" />
                                                    </div>
                                                    <div className="">
                                                        <p className="mb-0 sub-head fs-6">Kids Shows</p>
                                                        <p className="l-bl fs-5 m-0 head">₹ 20,000/-</p>
                                                    </div>
                                                </Stack>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                              </Row>
                            </Col>
                            <Col xl={4} lg={6} md={12}>
                                <div className="artist-dashboard-artist-info-sec">
                                    <ArtistInfo loading={loading} artistId={ArtistId} artistDetails={details}/>
                                </div>
                                <div className="main-artist-transacation">
                                    <div className="header-sec">
                                        <Stack direction="horizontal" gap={3}>
                                            <div>
                                                <h2 className="head">Your transactions</h2>
                                            </div>
                                            <div className="ms-auto see-all-text l-sb">
                                                <Link to="/billinginvoice">
                                                <span className="red-color">See all</span>
                                                </Link>
                                            </div>
                                        </Stack>
                                    </div>
                                    <div className="main-inner-transactions-sec">
                                        <ArtistTransactions/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            </div>
        </div>
    </>
  )
}

export default ArtistDashboard