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

const SlideCard = () => {
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

        const [specialEvents,setSpecialEvents] = useState([]);
        useEffect(()=>{
          dispatch(getSpecialEvents()).then((res)=>{
            console.log(res);
            setSpecialEvents(res.data.output_data);
          })
        },[])

        const displaySpecialEvents = specialEvents.map((sEvent) => 
               <div>
                  <div className="look-slide-sec">
                    <img src={sEvent.SEImgURL} className="mx-auto w-100" alt="" />
                    <div className="inner-look-slide">
                       <Col sm={12} lg={8}>
                          <h2 className="head white-color">{sEvent.HeadText}</h2>
                          <p className="l-l sub-head white-color">{sEvent.SubText} {sEvent.SubText1} {specialEvents.SubText2} {sEvent.SubText3}</p>
                        </Col>
                        <Col sm={12} lg={4}>
                          <Link to={{
                            pathname: '/artistList',
                            search: `?GenreName=${sEvent.GenreName}`,
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
                {
                  specialEvents.length === 0 ? <ThreeDotLoader /> : (
                    displaySpecialEvents
                  )
                }
              </Slider>
            </div>
          );
};

export default SlideCard;
