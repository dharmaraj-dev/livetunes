import React, {useEffect} from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";
import { useDispatch ,useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";

const AdminDashboard = () => {
    const dispatch = useDispatch();
    //const { ArtistId } = useSelector(state => state.userAuth);
    useEffect(()=>{
        window.scrollTo(0, 0);
       
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
                       <h2 className="coming_soon">Coming Soon</h2>
                    </div>
                </Container>
            </div>
            </div>
        </div>
    </>
  )
}

export default AdminDashboard
