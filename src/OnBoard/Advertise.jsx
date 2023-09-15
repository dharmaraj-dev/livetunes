import React from 'react'
import Slider from "react-slick";
import Skeleton from 'react-loading-skeleton'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Guitar from '../assets/images/guitar.png';
import Gaudio from '../assets/images/gaudio.mp3';
import { useDispatch, useSelector } from "react-redux";


const Advertise = () => {
    const { addBanner, homeLoading } = useSelector(state => state.userHome);
    const audio = new Audio(Gaudio);
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
    // audio.loop = false;
  return (
        homeLoading ? (
            <Skeleton className="" height="300px" count={1}  />
        ):(
        <Slider {...settings} className="advertise_slider">
          {addBanner.map((ev, i) => {
              return (
                <div className="inner-adsec" key={`addBanner${i}`}>
                    <Row>
                        <Col lg={5}>
                            <img src={Guitar} alt="" className="w-100" />
                        </Col>
                        <Col lg={7} className="align-center">
                            <div className="inner-adhead-sec">
                                <p className='l-m adhead'>{ev.HeadText}</p>
                                <div className="adbutton">
                                    <button type="button" className="l-sb btnn  btn btn-primary" onClick={() => {audio.play();}}>Click here</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
              )
            })}
      </Slider>
        )
  )
}

export default Advertise