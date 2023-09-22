import React from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import RangeSlider from "./RangeSlider";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import MusictypeSlider from "./MusictypeSlider";
import { useDispatch, useSelector } from "react-redux";
import {setUserSettings} from '../redux/userSettings';
import { Dispatch } from "react";

const BudgetMusictype = () => {
    const dispatch = useDispatch();
    const {userMusicalityTypes} = useSelector(state => state.user);
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
                    <section className="main-budget-mtype-sec postion-r">
                        <div className="inner-budget-mtype-sec">
                            <div className="heading-sec">
                                <p className="l-bl head">High Budget, Good Performer!</p>
                                <p className="l-l sub-head">Whats Your Budget</p>
                            </div>
                            <RangeSlider/>
                        </div>
                        <div className="inner-budget-mtype-sec">
                            <div className="heading-sec">
                                <p className="l-bl head">What’s Your Musicality Type</p>
                                <p className="l-l sub-head">Choose From Vivid Genre</p>
                            </div>
                            <MusictypeSlider/>
                        </div>
                        <Link onClick={()=>addUserSettings()} to="/artist-list">
                        <Button variant="primary" disabled={userMusicalityTypes.length === 0} className="l-sb btnn next-btn">Next</Button>
                        </Link>
                    </section>
                </Container>
            </div>
            </div>
        </div>
    </>
  )
}

export default BudgetMusictype