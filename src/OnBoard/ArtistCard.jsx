import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Avtar from '../assets/images/avtar.png';
import StarRate from './StarRate';
import Stack from 'react-bootstrap/Stack';
import { BiTime } from "react-icons/bi";
import { TbMessageLanguage } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { TbCurrencyRupee } from "react-icons/tb";
import { Link } from "react-router-dom";
import Heartlike from "./Heartlike";

const ArtistCard = () => {
   
  return (
    <>
        <Row>
            <Col xs={12} lg={12} xl={6}>
                <div className="inner-artist-card postion-r">
                    <div className="avtar-sec">
                        <div className="avtar-img">
                            <img src={Avtar} alt="" className="w-100" />
                        </div>
                        <StarRate/>    
                    </div>
                    <div className="music-detail">
                        <p className="name l-sb">Steve Vargas</p>
                        <Stack direction="horizontal" gap={2} className="from-select-filter">
                            <div className="inner-from-select-filter">First item</div>
                            <div className="inner-from-select-filter">Second item</div>
                            <div className="inner-from-select-filter">Third item</div>
                        </Stack>
                        <div className="music-short-detail">
                            <Stack direction="vertical" className="">
                                <div className="">
                                    <span className="ico-sec"><BiTime className="red-color"/></span> <span>60 - 90 Minutes</span>
                                </div>
                                <div className="">
                                    <span className="ico-sec"><TbMessageLanguage className="red-color"/></span> <span>English, Hindi, Punjabi</span>
                                </div>
                                <div className="">
                                    <span className="ico-sec"><IoLocationOutline className="red-color"/></span> <span>Mumbai</span>
                                </div>
                                <div className="">
                                    <span className="ico-sec"><TbCurrencyRupee className="red-color"/></span> <span className="price red-color l-sb">8,000</span>
                                </div>
                            </Stack>
                        </div>
                    </div>
                    <div className="artist-list-like">
                        <Heartlike/>
                    </div>
                    <div className="book-now-btn">
                        <Link to="/singleartist">
                        <button type="button" className="l-b wbtnn book-btn btn btn-primary">Book Now</button>
                        </Link>
                    </div>
                </div>
            </Col>
            
            <Col xs={12} lg={12} xl={6}>
                <div className="inner-artist-card postion-r">
                    <div className="avtar-sec">
                        <div className="avtar-img">
                            <img src={Avtar} alt="img" className="w-100" />
                        </div>
                        <StarRate/>    
                    </div>
                    <div className="music-detail">
                        <p className="name l-sb">Steve Vargas</p>
                        <Stack direction="horizontal" gap={2} className="from-select-filter">
                            <div className="inner-from-select-filter">First item</div>
                            <div className="inner-from-select-filter">Second item</div>
                            <div className="inner-from-select-filter">Third item</div>
                        </Stack>
                        <div className="music-short-detail">
                            <Stack direction="vertical" className="">
                                <div className="">
                                    <span className="ico-sec"><BiTime className="red-color"/></span> <span>60 - 90 Minutes</span>
                                </div>
                                <div className="">
                                    <span className="ico-sec"><TbMessageLanguage className="red-color"/></span> <span>English, Hindi, Punjabi</span>
                                </div>
                                <div className="">
                                    <span className="ico-sec"><IoLocationOutline className="red-color"/></span> <span>Mumbai</span>
                                </div>
                                <div className="">
                                    <span className="ico-sec"><TbCurrencyRupee className="red-color"/></span> <span className="price red-color l-sb">8,000</span>
                                </div>
                            </Stack>
                        </div>
                    </div>
                    <div className="artist-list-like">
                        <Heartlike/>
                    </div>
                    <div className="book-now-btn">
                        <Link to="/singleartist">
                        <button type="button" className="l-b wbtnn book-btn btn btn-primary">Book Now</button>
                        </Link>
                    </div>
                </div>
            </Col>

            <Col xs={12} lg={12} xl={6}>
                <div className="inner-artist-card postion-r">
                    <div className="avtar-sec">
                        <div className="avtar-img">
                            <img src={Avtar} alt="" className="w-100" />
                        </div>
                        <StarRate/>    
                    </div>
                    <div className="music-detail">
                        <p className="name l-sb">Steve Vargas</p>
                        <Stack direction="horizontal" gap={2} className="from-select-filter">
                            <div className="inner-from-select-filter">First item</div>
                            <div className="inner-from-select-filter">Second item</div>
                            <div className="inner-from-select-filter">Third item</div>
                        </Stack>
                        <div className="music-short-detail">
                            <Stack direction="vertical" className="">
                                <div className="">
                                    <span className="ico-sec"><BiTime className="red-color"/></span> <span>60 - 90 Minutes</span>
                                </div>
                                <div className="">
                                    <span className="ico-sec"><TbMessageLanguage className="red-color"/></span> <span>English, Hindi, Punjabi</span>
                                </div>
                                <div className="">
                                    <span className="ico-sec"><IoLocationOutline className="red-color"/></span> <span>Mumbai</span>
                                </div>
                                <div className="">
                                    <span className="ico-sec"><TbCurrencyRupee className="red-color"/></span> <span className="price red-color l-sb">8,000</span>
                                </div>
                            </Stack>
                        </div>
                    </div>
                    <div className="artist-list-like">
                        <Heartlike/>
                    </div>
                    <div className="book-now-btn">
                        <Link to="/singleartist">
                        <button type="button" className="l-b wbtnn book-btn btn btn-primary">Book Now</button>
                        </Link>
                    </div>
                </div>
            </Col>
            
            <Col xs={12} lg={12} xl={6}>
                <div className="inner-artist-card postion-r">
                    <div className="avtar-sec">
                        <div className="avtar-img">
                            <img src={Avtar} alt="" className="w-100" />
                        </div>
                        <StarRate/>    
                    </div>
                    <div className="music-detail">
                        <p className="name l-sb">Steve Vargas</p>
                        <Stack direction="horizontal" gap={2} className="from-select-filter">
                            <div className="inner-from-select-filter">First item</div>
                            <div className="inner-from-select-filter">Second item</div>
                            <div className="inner-from-select-filter">Third item</div>
                        </Stack>
                        <div className="music-short-detail">
                            <Stack direction="vertical" className="">
                                <div className="">
                                    <span className="ico-sec"><BiTime className="red-color"/></span> <span>60 - 90 Minutes</span>
                                </div>
                                <div className="">
                                    <span className="ico-sec"><TbMessageLanguage className="red-color"/></span> <span>English, Hindi, Punjabi</span>
                                </div>
                                <div className="">
                                    <span className="ico-sec"><IoLocationOutline className="red-color"/></span> <span>Mumbai</span>
                                </div>
                                <div className="">
                                    <span className="ico-sec"><TbCurrencyRupee className="red-color"/></span> <span className="price red-color l-sb">8,000</span>
                                </div>
                            </Stack>
                        </div>
                    </div>
                    <div className="artist-list-like">
                        <Heartlike/>
                    </div>
                    <div className="book-now-btn">
                        <Link to="/singleartist">
                        <button type="button" className="l-b wbtnn book-btn btn btn-primary">Book Now</button>
                        </Link>
                    </div>
                </div>
            </Col>
            
        </Row>
    </>
  )
}

export default ArtistCard