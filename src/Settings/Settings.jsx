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
import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setUserSettings} from '../redux/userSettings';
import {setSelectedCities} from '../redux/userSettings';
import Col from "react-bootstrap/Col";


const Settings = () => {
    const dispatch = useDispatch();
    const { cities,states } = useSelector(state => state.common );
    const {userMusicalityTypes} = useSelector(state=> state.user);
    const {selectedLanguages,selectedCities} = useSelector(state => state.userSettings);
    const {user} = useSelector(state => state.auth);
    const addUserSettings = () => {
        let cityId = '';
        let cityNames = '';
        let languageId = '';
        let LanguageName = '';
        languageId = selectedLanguages.map((language)=>language.LanguageId).join(',');
        LanguageName = selectedLanguages.map((language)=>language.LanguageName).join(',');
        cityNames = selectedCities.map((city)=> city.CityName).join(',');
        cityId = selectedCities.map((city)=> city.CityId).join(',');
        dispatch(setUserSettings({"LangId":languageId,"LangName":LanguageName,"CityId":cityId,"CityName":cityNames,"RegId":user.RegId}));
    }
    const selectAvailableCities = (e,ct) => {
        console.log(ct);
        const targetedCity = document.getElementById(e.target.id).parentElement;
        if(e.target.parentElement.style.backgroundColor === 'rgb(253, 55, 67)'){
            dispatch(setSelectedCities(selectedCities.filter((city)=>city.CityName
            !==ct.CityName
            )));
            targetedCity.style.backgroundColor = '';
        }
        else{
            targetedCity.style.backgroundColor = '#FD3743';
            dispatch(setSelectedCities([...selectedCities,ct]));
        }
    }
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
                                <div className="cart-details-box  login-setting-cart">
                                <div className="cart-header">
                                    <Stack direction="horizontal" gap={5}>
                                        <h4 className="l-sb">Select Language</h4>
                                    </Stack>
                                </div>
                                    <SelectMultiotion />
                                </div>
                                <div className="cart-details-box  login-setting-cart">
                                <div className="cart-header">
                                    <Stack direction="horizontal" gap={5}>
                                        <h4 className="l-sb">Select City</h4>
                                    </Stack>
                                </div>
                                    <Col md={12} lg={7} xl={7}>
                                    <div className="location-right-sec select-multi">
                                         <div className="head-loco-img">
                                            <div className="loco-box">
                                                {cities?.filter((key) => key.IsLTLive).map((ct,index) => {
                                                    return (<div className="text-center ">
                                                            {ct.MImgURL == null ? (
                                                                <span className="default-city mr-2">
                                                                    <span>{ct.CityName.charAt(0)}</span>
                                                                </span>
                                                            ):(
                                                                <img className="mr-2 cursor-pointer" src={ct.MImgURL} alt={ct.CityName} id={`avail-city-${index}`} onClick={(e)=>selectAvailableCities(e,ct)}/>
                                                            )}
                                                            <p className="l-m city-name">{ct.CityName}</p>
                                                        </div>)
                                                })}
                                            </div>
                                         </div>
                                    </div>
                                </Col>
                                </div>
                            <div className="cart-details-box  login-setting-cart">
                                <div className="cart-header">
                                    <Stack direction="horizontal" gap={5}>
                                        <h4 className="l-sb">Select Musicality Type</h4>
                                    </Stack>
                                </div>
                                <MusictypeSlider />
                            </div>
                            <Link onClick={()=>addUserSettings()} to="/artist-list">
                                <Button variant="primary" disabled={userMusicalityTypes.length === 0} className="l-sb btnn " style={{width:"7rem",padding:"0.5rem",fontSize:"1.4rem"}}>Edit</Button>
                            </Link>
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