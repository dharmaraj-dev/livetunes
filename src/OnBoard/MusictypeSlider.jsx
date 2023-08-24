import React from "react";
import Slider from "react-slick";
import Badge from 'react-bootstrap/Badge';
import Musicimg1 from '../assets/images/musicimg1.png';
import Musicimg2 from '../assets/images/musicimg2.png';
import Musicimg3 from '../assets/images/musicimg3.png';
import Musicimg4 from '../assets/images/musicimg4.png';
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import {setMusicalityTypes} from "../actions/user";


const MusictypeSlider = () => {
    const dispatch = useDispatch();
    const { userMusicalityTypes } = useSelector(state => state.user);

    const showMusicalityTypes = userMusicalityTypes.map((musicalityType)=> <Badge className='l-r'> {musicalityType}      <GrClose className="red-color"/></Badge> );

    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
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
          <div className="music-type-selected">
              {showMusicalityTypes}
              {/* <Badge className='l-r'>
                POP Music <GrClose className="red-color"/>
              </Badge>
              <Badge className='l-r'>
                Rock <GrClose className="red-color"/>
              </Badge>
              <Badge className='l-r'>
                Concert <GrClose className="red-color"/>
              </Badge> */}
          </div>
          <Slider {...settings}>
            <div>
                <label className="music-type-slide-sec btn-light active">
                  <input type="checkbox" name="electronic"/>
                  <img src={Musicimg1} className="mx-auto w-100" alt="img" />
                  <span className="l-b white-color music-type-text">Electronic Music</span>
                </label>
            </div>
            <div>
              <label className="music-type-slide-sec btn-light">
                <input type="checkbox" name="pop" />
                <img src={Musicimg2} className="mx-auto w-100" alt="img"/>
                <span className="l-b white-color music-type-text">POP Music</span>
              </label>
            </div>
            <div>
              <label className="music-type-slide-sec btn-light">
                <input type="checkbox" name="rock" />
                <img src={Musicimg3} className="mx-auto w-100" alt="img" />
                <div className="music-type-text">
                  <span className="l-b white-color">Rock</span>
                </div>
              </label>
            </div>
            <div>
              <label className="music-type-slide-sec btn-light">
                <input type="checkbox" name="concert"/>
                <img src={Musicimg4} className="mx-auto w-100" alt="img" />
                <span className="l-b white-color music-type-text">Concert</span>
              </label>
            </div>
            <div>
              <label className="music-type-slide-sec btn-light">
                <input type="checkbox" />
                <img src={Musicimg1} className="mx-auto w-100" alt="img" />
                <span className="l-b white-color music-type-text">Electronic Music</span>
              </label>
            </div>
            <div>
              <label className="music-type-slide-sec btn-light">
                <input type="checkbox" />
                <img src={Musicimg2} className="mx-auto w-100" alt="img" />
                <span className="l-b white-color music-type-text">POP Music</span>
              </label>
            </div>
           
          </Slider>
        </div>
      );
};

export default MusictypeSlider