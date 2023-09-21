import React, {useEffect, useState} from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import citym from '../assets/images/citym.png';
import city2 from '../assets/images/city2.png';
import city3 from '../assets/images/city3.png';
import city4 from '../assets/images/city4.png';
import city5 from '../assets/images/city5.png';
import defaultCity from '../assets/images/default.png';
import { useDispatch, useSelector } from "react-redux";
import {setSelectedCities} from "../actions/user";
import Multiselect from 'multiselect-react-dropdown';
import SelectCity from "./SelectCity";
import { Link } from "react-router-dom";

const LocationCheck = () => {
    const dispatch = useDispatch();
    const { userSelectedCities } = useSelector(state => state.user);
    const { cities,states } = useSelector(state => state.common );
    const [isStateSelected,setIsStateSelected] = useState(false);
    const [selectedStateId,setSelectedStateId] = useState(-1);
    const selectCity = (selectedList, selectedItem) => {
      dispatch(setSelectedCities(selectedList));
    }

    const removeCity = (selectedList, removedItem) => {
        dispatch(setSelectedCities(selectedList));
    }

    const selectState = (selectedList,selectedItem) => {
      setIsStateSelected(true);
      setSelectedStateId(selectedItem.StateId);
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
                                                    return (<div className="text-center cursor-pointer">
                                                            {ct.MImgURL == null ? (
                                                                <span className="default-city mr-2">
                                                                    <span>{ct.CityName.charAt(0)}</span>
                                                                </span>
                                                            ):(
                                                                <img className="mr-2" src={ct.MImgURL} alt={ct.CityName} />
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
                                                      selectedValues={userSelectedCities}
                                                    />
                                                )}
                                            </Col>
                                        </Row>
                                        
                                     </div> 
                                </Col>
                            </Row>
                            <Link to="/budgetmusictype">
                            <Button variant="primary" className="l-sb btnn next-btn">Next</Button>
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