import React, { useState, useEffect } from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import { Tabs, Tab} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FavouriteCard from "./FavouriteCard";
import Badge from 'react-bootstrap/Badge';
import MoveCart from "./MoveCart";
import Skeleton from "react-loading-skeleton";
import { useDispatch,useSelector } from "react-redux";
import { fetchFavArtists } from "../redux/userBookingsSlice";


const Favourites = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.userAuth);
  const { favouriteArtists, favouriteArtistsLoading, removeFavouriteArtistsLoading } = useSelector(state => state.userBookings);

  useEffect(()=>{
    dispatch(fetchFavArtists(user.RegId));
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
                {
                    favouriteArtistsLoading ? (
                        <>
                            <Skeleton className="l-sb head mb-2" height="50px" count={1}  />
                            <Skeleton className="l-sb head mb-2" height="400px" count={1}  />
                        </>
                    ) : (
                        <Container fluid>
                            <div className="main-artists-list">
                             <div className="main-favourite-sec">
                                <div className="head-sec">
                                     <h1 className="l-b">Favourites <Badge className="fav-badge">{favouriteArtists?.length}</Badge></h1>
                                </div>
                                <div className="favourite-tab-sec">
                                    <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-1 justify-content-end">
                                            <Tab eventKey="all" title="Liked artists"
                                            >
                                               <Row>
                                                    {favouriteArtists.map((artist, index) => <Col key={`fav_${index}`} xl={3} md={6}><FavouriteCard props={artist}/></Col>)}
                                                    {favouriteArtists?.length === 0 && (
                                                        <Col xs={12}>
                                                            <div>
                                                                <h3 className="no_bookings">No favourites added.</h3>
                                                            </div>
                                                        </Col>
                                                    )}
                                                </Row>
                                            </Tab>
                                    </Tabs>
                                </div>
                            </div>
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

export default Favourites