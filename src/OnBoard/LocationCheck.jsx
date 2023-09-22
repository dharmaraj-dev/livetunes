import React, {useEffect, useState} from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import Multiselect from 'multiselect-react-dropdown';
import { Link } from "react-router-dom";
import {setUserRequestedCities,setSelectedCities,setUserRequestedCitiesAPI} from '../redux/userSettings';

const LocationCheck = () => {
    const dispatch = useDispatch();
    const { userRequestedCities,selectedCities } = useSelector(state => state.userSettings);
    const { cities,states } = useSelector(state => state.common );
    const {user} = useSelector(state => state.auth);
    const [isStateSelected,setIsStateSelected] = useState(false);
    const [selectedStateId,setSelectedStateId] = useState(-1);
    const selectCity = (selectedList, selectedItem) => {
      dispatch(setUserRequestedCities(selectedList));
    }

    const addRequestedCity = () => {
        if(userRequestedCities.length > 0){
            let requestedCities = '';
            let requestedStates = '';
            requestedCities = userRequestedCities.map((city)=>city.CityId).join(',');
            requestedStates = [... new Set(userRequestedCities.map((city) => city.StateId))].join(',');
            dispatch(setUserRequestedCitiesAPI({"StateId":requestedStates,"CityId":requestedCities,"UserId":user.RegId}));
        }
    }

    const removeCity = (selectedList, removedItem) => {
        dispatch(setUserRequestedCities(selectedList));
    }

    const selectState = (selectedList,selectedItem) => {
      setIsStateSelected(true);
      setSelectedStateId(selectedItem.StateId);
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

    useEffect(() => {
        console.log('cities', cities.filter((key) => key.IsLTLive))
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
                                <Col md={12} lg={12} xl={12}>
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
                                                  onSelect={selectState}
                                                  singleSelect = {true}
                                                />
                                            </Col>
                                            <Col md={6} lg={6} xl={6}>
                                                {isStateSelected && (
                                                    <Multiselect
                                                      isObject={true}
                                                      options= { cities?.filter((key) => !key.IsCancelled).filter((city)=>city.StateId === selectedStateId) }
                                                      showCheckbox
                                                      showArrow
                                                      className='l-l'
                                                      placeholder="Select City"
                                                      displayValue="CityName"
                                                      onSelect={selectCity}
                                                      onRemove={removeCity}
                                                      selectedValues={userRequestedCities}
                                                    />
                                                )}
                                            </Col>
                                        </Row>
                                        
                                     </div> 
                                </Col>
                            </Row>
                            <Link onClick={()=> addRequestedCity()} to="/budgetmusictype">
                            <Button variant="primary" className="l-sb btnn next-btn" >Next</Button>
                            </Link>
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