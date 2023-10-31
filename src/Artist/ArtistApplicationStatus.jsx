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

const ArtistApplicationStatus = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        
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
                        <h4 className="l-b mb-3">Your Earnings</h4>
                       
                    </div>
                </Container>
            </div>
            </div>
        </div>
    </>
  )
}

export default ArtistApplicationStatus
