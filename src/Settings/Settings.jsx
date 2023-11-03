import React, { useEffect } from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import LoginSetting from "../LoginSignup/LoginSetting";
import Payments from "./Payments";
import NotificationSettings from "../Notification/NotificationSettings";
import SelectMultiotion from "../OnBoard/SelectLanguages";
import MusictypeSlider from "../OnBoard/MusictypeSlider";
import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {updateUserSettings, setSelectedCity} from '../redux/userSettings';
import Col from "react-bootstrap/Col";
import { successToast, errorToast } from "../services/toast-service";


const Settings = () => {
    const dispatch = useDispatch();
    const { cities } = useSelector(state => state.common );
    const {selectedLanguages,selectedCity, userMusicalityTypes, userMinimumBudget, userMaximumBudget, savedUsersSettings, updateSettingsLoading} = useSelector(state => state.userSettings);
    const { user, joiningType } = useSelector(state => state.userAuth);

    const addUserSettings = () => {
         let dataToSend = {
            "USettId": savedUsersSettings[0]?.USettId,
            "LangId":selectedLanguages.map((language)=>language.LanguageId).join(','),
            "LangName":selectedLanguages.map((language)=>language.LanguageName).join(','),
            "MType":userMusicalityTypes.join(','),
            "MinBudget":userMinimumBudget,
            "MaxBudget":userMaximumBudget,
            "RegId":user.RegId
        };

        if(selectedCity != null) {
            dataToSend.CityId = selectedCity.split('_')[0];
            dataToSend.CityName = selectedCity.split('_')[1];
        } else {
            dataToSend.CityId = "";
            dataToSend.CityName = ""
        }
       
        dispatch(updateUserSettings(dataToSend)).then((res) => {
            if(res.data.IsSuccess) {
                successToast(res.data.Message)
            } else {
                errorToast("Preferrences not updated")
            }
        }).catch((err) => {
            errorToast("Preferrences not updated")
        })
    }
    

    const selectPrefferedCity = (cityId, cityName) => {
        dispatch(setSelectedCity(`${cityId}_${cityName}`))
    }

    useEffect(() => {

    }, [])

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
                            {joiningType == "Artist" ? (
                                <>
                                <LoginSetting/>
                                <Payments/>
                                <NotificationSettings/> 
                                </>
                            ):(
                                <>
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
                                                        return (<div key={`city_${index}`} className="text-center" onClick={()=>selectPrefferedCity(ct.CityId, ct.CityName)}>
                                                                {ct.MImgURL == null ? (
                                                                    <span className="default-city mr-2">
                                                                        <span>{ct.CityName.charAt(0)}</span>
                                                                    </span>
                                                                ):(
                                                                    <img className="mr-2 cursor-pointer" src={ct.MImgURL} alt={ct.CityName} id={`avail-city-${index}`}/>
                                                                )}
                                                                <p className={`l-m city-name ${`${ct.CityId}_${ct.CityName}` == selectedCity ? 'active_city' : ''}`}>{ct.CityName}</p>
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
                                <div className="text-right">
                                    <Button 
                                        disabled={updateSettingsLoading}
                                        className="l-sb btnn new_next_btn" onClick={addUserSettings}>
                                        {updateSettingsLoading && (
                                          <span className="spinner-border spinner-border-sm"></span>
                                        )} 
                                         Update</Button>
                                 </div>
                                </>
                            )}
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