import React, {useEffect} from "react";
import Slider from "react-slick";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import HelloBanner from '../assets/images/hello-banner.png';
import SlideCard from "./SlideCard";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeData } from "../redux/userHomeSlice";

const HelloScreen = () => {
    const dispatch = useDispatch();
    const { specialEvents, headerBanner, addBanner, homeLoading } = useSelector(state => state.userHome);

    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
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

    useEffect(() => {
       dispatch(fetchHomeData());
    }, [dispatch]);

   

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
                    {homeLoading ? (
                        <Skeleton className="hello-header" count={1}  />
                    ):(
                        <Slider {...settings}>
                          {headerBanner.map((ev, i) => {
                              return (
                                <div key={`headerSlider_${i}`}>
                                  <section className="hello-header" style={{backgroundImage: "url(" + ev.SEImgURL + ")", marginRight: "15px"}}>
                                    <Row>
                                        <Col md={8} lg={8}>
                                            <div className="hello-right-text-sec">


                                                <h1 className="head text-white">{ev.HeadText}</h1>
                                                <h2 className="sub-head text-white">{ev.SubText}</h2>
                                                <p className="l-l para-text text-white">{ev.SubText1}</p>
                                            </div>
                                        </Col>
                                        <Col md={4} lg={4} className="postion-r">
                                            <div className="hello-left-btn-sec">
                                                <Link to={{
                                                    pathname: '/artist-list',
                                                    search: `?genre=${ev.GenreId}&event=${ev.EventsId}`,
                                                  }}>
                                                    <Button variant="primary" className="l-b wbtnn">Let’s Go!</Button>
                                                </Link>    
                                            </div>
                                        </Col>
                                    </Row>
                                </section>
                                </div>
                              )
                            })}
                      </Slider>
                    )}
                    
                    
                    <section className="look-something-sec">
                        <div className="heading-sec mb-3">
                            {homeLoading ? (
                                <>
                                    <Skeleton className="l-r head" count={1} width="60%"  />
                                    <Skeleton className="l-l sub-head" count={1} width="40%" />
                                </>
                            ):(
                                <>
                                    <p className="l-r head">Looking For Something Else?</p>
                                    <p className="l-l sub-head">We Have A Variety Bro!</p>
                                </>
                            )}
                        </div>
                        <div>
                            <SlideCard isLoading={homeLoading} data={specialEvents} />
                        </div>
                    </section>
                </Container>
            </div>
            </div>
        </div>
 
        
    </>
  );
};

export default HelloScreen;
