import React from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import LoginSetting from "../LoginSignup/LoginSetting";
import Payments from "./Payments";
import NotificationSettings from "../Notification/NotificationSettings";

const Settings = () => {
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
                        <div className="main-settings-sec">
                            <div className="head-sec">
                                <h1 className="l-b">Security And Login</h1>
                            </div>
                            <LoginSetting/>
                            <Payments/>
                            <NotificationSettings/>
                        </div>    
                    </div>
                </Container>
            </div>
            </div>
        </div>
    </>
  )
}

export default Settings