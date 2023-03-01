import React from "react";
import Slider from "react-slick";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Slidecard3 from '../assets/images/slidecard3wrked.png';
import Slidecard2 from '../assets/images/slidecard2wrked.png';
import Slidecard1 from '../assets/images/slidecard1wrked.png';


const SlideCard = () => {
        const settings = {
          dots: false,
          arrows: false,
          infinite: true,
          speed: 500,
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
        return (
            <div>
              <Slider {...settings}>
                <div>
                  <div className="look-slide-sec">
                    <img src={Slidecard3} className="mx-auto w-100" alt="" />
                    <div className="inner-look-slide">
                       <Col sm={12} lg={8}>
                          <h2 className="head white-color">Valentine Special</h2>
                          <p className="l-l sub-head white-color">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempo</p>
                        </Col>
                        <Col sm={12} lg={4}>
                          <Button variant="primary" className="l-b wbtnn look-btn">Let’s Go!</Button>
                        </Col>
                   </div>
                  </div>
                </div>
                <div>
                  <div className="look-slide-sec">
                    <img src={Slidecard2} className="mx-auto w-100" alt="" />
                    <div className="inner-look-slide">
                       <Col sm={12} lg={8}>
                          <h2 className="head white-color">Wedding Special</h2>
                          <p className="l-l sub-head white-color">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempo</p>
                        </Col>
                        <Col sm={12} lg={4}>
                          <Button variant="primary" className="l-b wbtnn look-btn">Let’s Go!</Button>
                        </Col>
                   </div>
                  </div>
                </div>
                <div>
                  <div className="look-slide-sec">
                    <img src={Slidecard1} className="mx-auto w-100" alt="" />
                    <div className="inner-look-slide">
                       <Col sm={12} lg={8}>
                          <h2 className="head white-color">Get To Gather</h2>
                          <p className="l-l sub-head white-color">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempo</p>
                        </Col>
                        <Col sm={12} lg={4}>
                          <Button variant="primary" className="l-b wbtnn look-btn">Let’s Go!</Button>
                        </Col>
                   </div>
                  </div>
                </div>
                <div>
                  <div className="look-slide-sec">
                    <img src={Slidecard3} className="mx-auto w-100" alt="" />
                    <div className="inner-look-slide">
                       <Col sm={12} lg={8}>
                          <h2 className="head white-color">Valentine Special</h2>
                          <p className="l-l sub-head white-color">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempo</p>
                        </Col>
                        <Col sm={12} lg={4}>
                          <Button variant="primary" className="l-b wbtnn look-btn">Let’s Go!</Button>
                        </Col>
                   </div>
                  </div>
                </div>
                <div>
                  <div className="look-slide-sec">
                    <img src={Slidecard2} className="mx-auto w-100" alt="" />
                    <div className="inner-look-slide">
                       <Col sm={12} lg={8}>
                          <h2 className="head white-color">Wedding Special</h2>
                          <p className="l-l sub-head white-color">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempo</p>
                        </Col>
                        <Col sm={12} lg={4}>
                          <Button variant="primary" className="l-b wbtnn look-btn">Let’s Go!</Button>
                        </Col>
                   </div>
                  </div>
                </div>
              </Slider>
            </div>
          );
};

export default SlideCard;
