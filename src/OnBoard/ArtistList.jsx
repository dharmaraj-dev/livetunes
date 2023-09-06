import React from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Filter from "./Filter";
import ArtistCard from "./ArtistCard";
import SlideCard from "./SlideCard";
import Advertise from "./Advertise";
import { useDispatch, useSelector } from "react-redux";

const ArtistList = () => {
  const { userFilteredArtists } = useSelector(state => state.user);
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
                    <section>
                      <Filter/>
                    </section>
                    <section className="artists-found-card">
                      <div className="found-heading-sec">
                        <p className="l-sb head">For You</p>
                        <p className="l-l sub-head"><span>{userFilteredArtists.length}</span> Artists Found!</p>
                      </div>
                      <div className="artists-card-sec">
                        <ArtistCard/>
                      </div>
                    </section>
                    <section>
                      <Advertise/>
                    </section>
                    <section className="look-something-sec">
                        <div className="heading-sec">
                            <p className="l-sb head">People Also Visit</p>
                        </div>
                        <div>
                            <SlideCard/>
                        </div>
                    </section>
                </Container>
            </div>
            </div>
        </div>
    </>
  )
}

export default ArtistList