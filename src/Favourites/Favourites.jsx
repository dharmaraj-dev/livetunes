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
import { getUserFavoriteArtists } from "../actions/user";
import { fetchBookings } from "../redux/userBookingsSlice";


const Favourites = () => {
  const dispatch = useDispatch();
  const {userFavoriteArtists} = useSelector(state => state.user);
  const {user} = useSelector(state => state.auth);
  const { loading, error, message, bookings } = useSelector(state => state.userBookings);

  const [favoriteArtists,setFavoriteArtists] = useState([]);

  useEffect(()=>{
    dispatch(getUserFavoriteArtists(user.RegId));
    setFavoriteArtists(userFavoriteArtists);
  },[favoriteArtists]);

  useEffect(()=>{
    dispatch(fetchBookings());
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
                    favoriteArtists.length === 0 ? (
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
                             <div className="main-favourite-sec">
                            <div className="head-sec">
                                 <h1 className="l-b">Favourites <Badge className="fav-badge">{userFavoriteArtists.length}</Badge></h1>
                            </div>
                            <div className="favourite-tab-sec">
                                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-1 justify-content-end">
                                    <Tab eventKey="all" title="Liked artists"
                                    >
                                       <Row>
                                            {userFavoriteArtists.map((artist) => <Col xl={3} md={6}><FavouriteCard props={artist}/></Col>)}
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