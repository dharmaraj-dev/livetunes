import React from "react";
import Slider from "react-slick";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSpecialEvents } from "../actions/user";
import ThreeDotLoader from "../Artist/ThreeDotLoader";
import Skeleton from 'react-loading-skeleton'

const SlideCard = (props) => {
        const dispatch = useDispatch();
        const settings = {
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };

        const [specialEvents,setSpecialEvents] = useState(props.data);
        useEffect(()=>{
          if(props.data) {
            setSpecialEvents(props.data);
          } else {
            setSpecialEvents([]);
          }
          
        },[props])

        const displaySpecialEvents = specialEvents?.map((sEvent,index) => 
               <div key={`sEvent_${index}`}>
                  <div className="look-slide-sec">
                    <img src={sEvent.SEImgURL} className="mx-auto w-100" alt="" />
                    <div className="inner-look-slide">
                       <Col sm={12} lg={8}>
                          <h2 className="head white-color">{sEvent.HeadText}</h2>
                          <p className="l-l sub-head white-color">{sEvent.SubText} {sEvent.SubText1} {specialEvents.SubText2} {sEvent.SubText3}</p>
                        </Col>
                        <Col sm={12} lg={4}>
                          <Link to={{
                            pathname: '/artist-list',
                            search: `?genre=${sEvent.GenreId}&event=${sEvent.EventsId}`,
                          }}>
                            <Button variant="primary" className="l-b wbtnn look-btn">Let’s Go!</Button>
                          </Link>
                        </Col>
                   </div>
                  </div>
                </div>
        );

        return (
            <div>
              <Slider {...settings}>
                {props.isLoading ? (
                  [...Array(6)].map((e, i) => {
                    return (
                      <div key={`slider_${i}`}>
                        <div className="specialEventLoader">
                          <Skeleton className="" count={1} height={"220px"}  />
                        </div>
                      </div>
                    )
                  })
                ):(
                  displaySpecialEvents
                )}
              </Slider>
            </div>
          );
};

export default SlideCard;
