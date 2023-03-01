import React, { useState } from 'react';
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import NotificationSec from './NotificationSec';

const Notifications = () => {
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
                        <NotificationSec/>
                    </div>
                </Container>
            </div>
            </div>
        </div>
    </>
  )
}

export default Notifications