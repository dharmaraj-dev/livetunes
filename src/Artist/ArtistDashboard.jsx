import React, {useEffect} from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArtistInfoForDashboard from "../Admin/ArtistInfoForDashboard";
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
import Skeleton from "react-loading-skeleton";
import { getArtistDetails, getArtistDashboardData } from "../redux/artistSlice";

const ArtistDashboard = () => {
    const dispatch = useDispatch();
    const {artistDashboardLoading, artistDashboardData, artistDetailsLoading, artistDetails} = useSelector(state => state.artist);
    //const { ArtistId } = useSelector(state => state.userAuth);
    useEffect(()=>{
        window.scrollTo(0, 0);
        dispatch(getArtistDashboardData());
        dispatch(getArtistDetails());
      },[]);  
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
                        {artistDashboardLoading ? (
                        <>
                        <h4 className="l-b mb-3">
                            <Skeleton width="200px" height="30px"/>
                        </h4>
                        <Row>
                            <Col xl={8} lg={6} md={12}>
                              <Row>
                                <Col xl={5} lg={12}>
                                    <Skeleton className="earned-sec mb-4" width="100%" height="130px"/>
                                    <h4 className="l-b mb-3">
                                        <Skeleton width="200px" height="30px"/>
                                    </h4>
                                    <Skeleton className="earned-sec mb-4" width="100%" height="130px"/>
                                </Col>
                                <Col xl={7} lg={12}>
                                    <Row>
                                        {
                                            [...Array(6)].map((e, i) => {
                                              return (
                                                <Col md={6} key={`events_${i}`}>
                                                    <Skeleton className="earned-sec mb-3" count={1} width={"100%"} height={"103px"} /> 
                                                </Col>
                                              )
                                            })
                                        }
                                    </Row>
                                </Col>
                              </Row>
                            </Col>
                            <Col xl={4} lg={6} md={12}>
                                <div className="artist-dashboard-artist-info-sec">
                                    <ArtistInfoForDashboard loading={artistDashboardLoading} artistDetails={artistDashboardData.selArtistProfile}/>
                                </div>
                                <div className="main-artist-transacation">
                                    <div className="header-sec">
                                        <Stack direction="horizontal" gap={3}>
                                            <div>
                                                <h2 className="head">
                                                    <Skeleton count={1} width={"100px"} height={"30px"} /> 
                                                </h2>
                                            </div>
                                            <div className="ms-auto l-sb">
                                                <Link to="#">
                                                <span>
                                                    <Skeleton count={1} width={"50px"} height={"30px"} /> 
                                                </span>
                                                </Link>
                                            </div>
                                        </Stack>
                                    </div>
                                    <div className="main-inner-transactions-sec">
                                        <ArtistTransactions loading={artistDashboardLoading} data={artistDashboardData.selArtistBooking}/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        </>
                        ):(
                        <>
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
                                                <p className="l-bl fs-2 m-0 head">{artistDashboardData.TotalEarned}/-</p>
                                            </div>
                                        </Stack>
                                    </div>
                                </Col>
                                <Col xl={7} lg={12}>
                                    <Row>
                                    {artistDashboardData.selEventsLog.map((eve,index) => {
                                        return (
                                            <Col md={6} key={`eve_${index}`}>
                                                <div className="earned-sec mb-3">
                                                    <Stack direction="horizontal" gap={3}>
                                                        <div className="img-sec faint-img-sec">
                                                            <img width="55px" src={eve.EventTypeUrl} alt="img" />
                                                        </div>
                                                        <div className="">
                                                            <p className="mb-0 sub-head fs-6">{eve.EventType}</p>
                                                            <p className="l-bl fs-5 m-0 head">{eve.EventAmt}/-</p>
                                                        </div>
                                                    </Stack>
                                                </div>
                                            </Col>
                                        )
                                    })}
                                    </Row>
                                </Col>
                              </Row>
                            </Col>
                            <Col xl={4} lg={6} md={12}>
                                <div className="artist-dashboard-artist-info-sec">
                                    <ArtistInfoForDashboard loading={artistDashboardLoading} artistDetails={artistDashboardData.selArtistProfile}/>
                                </div>
                                <div className="main-artist-transacation">
                                    <div className="header-sec">
                                        <Stack direction="horizontal" gap={3}>
                                            <div>
                                                <h2 className="head">Your transactions</h2>
                                            </div>
                                            <div className="ms-auto see-all-text l-sb">
                                                <Link to="#">
                                                <span className="red-color">See all</span>
                                                </Link>
                                            </div>
                                        </Stack>
                                    </div>
                                    <div className="main-inner-transactions-sec">
                                        <ArtistTransactions loading={artistDashboardLoading} data={artistDashboardData.selArtistBooking}/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        </>
                        )}
                    </div>
                </Container>
            </div>
            </div>
        </div>
    </>
  )
}

export default ArtistDashboard