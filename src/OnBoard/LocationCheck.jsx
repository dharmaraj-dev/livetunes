import React, {useState, useEffect} from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import Multiselect from 'multiselect-react-dropdown';
import { Link } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';
import { 
    setUserRequestedCities,
    setUserRequestedStates,
    setUserRequestedCitiesAPI,
    setSelectedCity,
    setUserSettings
} from '../redux/userSettings';

const LocationCheck = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const { selectedCity, userRequestedCities, userRequestedStates } = useSelector(state => state.userSettings);
    const { cities,states } = useSelector(state => state.common );
    const {user} = useSelector(state => state.userAuth);
    

    const selectRequestedState = (selectedList,selectedItem) => {
        dispatch(setUserRequestedStates(selectedList));
        dispatch(setUserRequestedCities([]));
    }

    const removeRequestedState = (selectedList,removedItem) => {
        dispatch(setUserRequestedStates(selectedList));
        dispatch(setUserRequestedCities([]));
    }

    const selectRequestedCity = (selectedList, selectedItem) => {
      dispatch(setUserRequestedCities(selectedList));
    }

    const removeRequestedCity = (selectedList, removedItem) => {
        dispatch(setUserRequestedCities(selectedList));
    }

    
    const selectPrefferedCity = (cityId, cityName) => {
        dispatch(setSelectedCity(`${cityId}_${cityName}`))
    }

    const checkIfDisabled = () => {
        if(selectedCity != "") {
            return true;
        } else if(userRequestedStates.length > 0 && userRequestedCities.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    const navigateToNextPage = () => {
        navigate('/preferred-budget');
    }

    useEffect(() => {
    }, [selectedCity, userRequestedStates, userRequestedCities])

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
                    <section className="main-location-sec">
                        
                        <div className="">
                            <Row>
                                <Col md={12} lg={5} xl={4}>
                                    <div className="heading-sec">
                                        <p className="l-bl head">Our Delivery Circumference</p>
                                        <p className="l-l sub-head">Check For Your Location</p>
                                    </div>
                                    <div className="map-box">
                                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15272027.669187387!2d73.72888197555253!3d20.850984767574634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1674543089151!5m2!1sen!2sin" ></iframe>
                                    </div>
                                </Col>
                                <Col md={12} lg={7} xl={7}>
                                    <div className="location-right-sec select-multi">
                                         <div className="head-loco-img">
                                            <h1>Are You From Our Top Trending Cities?</h1>
                                            <div className="loco-box">
                                                {cities?.filter((key) => key.IsLTLive).map((ct,index) => {
                                                    return (
                                                        <div key={`city_${index}`} className="text-center" onClick={()=>selectPrefferedCity(ct.CityId, ct.CityName)}>
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
                                    <div>
                                        <h1>Don’t See Your City</h1>
                                        <p className="l-l sub-head">Then Make It One Of Them</p>
                                        <Row>
                                            <Col md={6} lg={6} xl={6}>
                                                <Multiselect
                                                  isObject={true}
                                                  options= { states?.filter((key) => !key.IsCancelled) }
                                                  showArrow
                                                  placeholder="Select State"
                                                  displayValue="StateName"
                                                  onSelect={selectRequestedState}
                                                  onRemove={removeRequestedState}
                                                  selectedValues={userRequestedStates}
                                                  singleSelect = {true}
                                                  disable={(selectedCity != '' && selectedCity != null) ? true : false}
                                                />
                                            </Col>
                                            <Col md={6} lg={6} xl={6}>
                                                {userRequestedStates.length > 0 && (
                                                    <Multiselect
                                                      isObject={true}
                                                      options= { cities?.filter((key) => !key.IsCancelled).filter((city)=>city.StateId === userRequestedStates[0]?.StateId) }
                                                      showCheckbox
                                                      showArrow
                                                      className='l-l'
                                                      placeholder="Select City"
                                                      displayValue="CityName"
                                                      onSelect={selectRequestedCity}
                                                      onRemove={removeRequestedCity}
                                                      selectedValues={userRequestedCities}
                                                      disable={(selectedCity != '' && selectedCity != null) ? true : false}
                                                    />
                                                )}
                                            </Col>
                                        </Row>
                                     </div> 
                                     {checkIfDisabled() && (
                                     <div className="text-right">
                                        <Button className="l-sb btnn new_next_btn" onClick={navigateToNextPage}>Next</Button>
                                     </div>
                                     )}
                                </Col>
                                
                            </Row>
                            
                        </div>
                    </section>
                </Container>
            </div>
            </div>
        </div>

    </>
  )
}

export default LocationCheck