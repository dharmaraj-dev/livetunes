import React from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import LoginSetting from "../LoginSignup/LoginSetting";
import Payments from "./Payments";
import NotificationSettings from "../Notification/NotificationSettings";
import SelectMultiotion from "../OnBoard/SelectLanguages";
import SelectCity from "../OnBoard/SelectCity";
import MusictypeSlider from "../OnBoard/MusictypeSlider";

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
                                <h1 className="l-b" style={{marginBottom:'2rem'}}>Edit Settings</h1>
                            </div>

                            {/* <LoginSetting/>
                            <Payments/>
                            <NotificationSettings/> */}
                            <div style={{display:"flex",justifyContent:'space-around'}}>
                                <div style={{marginBottom:"1rem"}}>
                                    <SelectMultiotion />
                                </div>
                                <div style={{marginBottom:"5rem"}}>
                                    <SelectCity />
                                </div>
                            </div>
                            <div style={{marginBottom:"1rem"}}>
                                <MusictypeSlider />
                            </div>
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