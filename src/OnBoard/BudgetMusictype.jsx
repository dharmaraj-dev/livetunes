import React from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import RangeSlider from "./RangeSlider";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import MusictypeSlider from "./MusictypeSlider";
import { useDispatch, useSelector } from "react-redux";
import {setUserSettings, setSettingsMinBudget, setSettingsMaxBudget, setSettingsSaveStatus, setUserRequestedCitiesAPI} from '../redux/userSettings';
import { Dispatch } from "react";
import { useNavigate  } from 'react-router-dom';

const BudgetMusictype = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {selectedLanguages,selectedCity, userRequestedCities, userRequestedStates, selectedCities, userMusicalityTypes, userMinimumBudget, userMaximumBudget} = useSelector(state => state.userSettings);
    const {user} = useSelector(state => state.auth);

    const proceedToNextPage = () => {
        let dataToSend = {
            "LangId":selectedLanguages.map((language)=>language.LanguageId).join(','),
            "LangName":selectedLanguages.map((language)=>language.LanguageName).join(','),
            "MType":userMusicalityTypes.join(','),
            "MinBudget":userMinimumBudget,
            "MaxBudget":userMaximumBudget,
            "RegId":user.RegId
        };

        if(selectedCity != "") {
            dataToSend.CityId = selectedCity.split('_')[0];
            dataToSend.CityName = selectedCity.split('_')[1];
        } 
        if(userRequestedStates.length > 0 && userRequestedCities.length > 0) {
            dispatch(setUserRequestedCitiesAPI({"StateId":userRequestedStates[0]?.StateId,"CityId":userRequestedCities[0]?.CityId,"UserId":user.RegId}));
        }

        dispatch(setUserSettings(dataToSend));
        dispatch(setSettingsSaveStatus());
        navigate('/artist-list');
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
                        <div className="text-right">
                            <Button disabled={userMusicalityTypes.length === 0} onClick={proceedToNextPage} className="l-sb btnn new_next_btn" >Next</Button>
                         </div>
                    </section>
                </Container>
            </div>
            </div>
        </div>
    </>
  )
}

export default BudgetMusictype