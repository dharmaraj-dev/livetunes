import React from "react";
import Slider from "react-slick";
import Badge from 'react-bootstrap/Badge';
import Musicimg1 from '../assets/images/musicimg1.png';
import Musicimg2 from '../assets/images/musicimg2.png';
import Musicimg3 from '../assets/images/musicimg3.png';
import Musicimg4 from '../assets/images/musicimg4.png';
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import {setMusicalityTypes} from '../redux/userSettings';

import { useEffect } from "react";


const MusictypeSlider = () => {
    const dispatch = useDispatch();
    const {userMusicalityTypes} = useSelector(state => state.userSettings);
    var userMusicalityTypesArray = userMusicalityTypes;

    const showMusicalityTypes = userMusicalityTypes.map((musicalityType, index)=> <Badge key={`badge_${index}`} className='l-r'> {musicalityType}      <GrClose className="red-color" onClick={(e)=>handleClick(musicalityType)}/></Badge> );

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

    function handleClick(mType){
      let checkInput = "";
      if(mType === "Electronic Music" && userMusicalityTypes.includes("Electronic Music")){
        dispatch(setMusicalityTypes({type: "remove", data: "Electronic Music"}));
        checkInput = document.getElementById("electronic");
      }else if(mType === "POP Music" && userMusicalityTypes.includes("POP Music")){
        dispatch(setMusicalityTypes({type: "remove", data: "POP Music"}));
        checkInput = document.getElementById("pop");
      }else if(mType === "Rock" && userMusicalityTypes.includes("Rock")){
        dispatch(setMusicalityTypes({type: "remove", data: "Rock"}));
        checkInput = document.getElementById("rock");
      }else if(mType === "Concert" && userMusicalityTypes.includes("Concert")){
        dispatch(setMusicalityTypes({type: "remove", data: "Concert"}));
        checkInput = document.getElementById("concert");
      }
      checkInput.checked = false;
    }

    function handleChange(e){
      console.log(e.target.checked);
      if(e.target.checked){
        if(e.target.name === "electronic" && !userMusicalityTypes.includes("Electronic Music")){
          dispatch(setMusicalityTypes({type: "add", data: "Electronic Music"}));
        }else if(e.target.name === "pop" && !userMusicalityTypes.includes("POP Music")){
          dispatch(setMusicalityTypes({type: "add", data: "POP Music"}));
        }else if(e.target.name === "rock" && !userMusicalityTypes.includes("Rock")){
          dispatch(setMusicalityTypes({type: "add", data: "Rock"}));
        }else if(e.target.name === "concert" && !userMusicalityTypes.includes("Concert")){
          dispatch(setMusicalityTypes({type: "add", data: "Concert"}));
        }
      }else{
        if(e.target.name === "electronic" && userMusicalityTypes.includes("Electronic Music")){
          dispatch(setMusicalityTypes({type: "remove", data: "Electronic Music"}));
        }else if(e.target.name === "pop" && userMusicalityTypes.includes("POP Music")){
          dispatch(setMusicalityTypes({type: "remove", data: "POP Music"}));
        }else if(e.target.name === "rock" && userMusicalityTypes.includes("Rock")){
          dispatch(setMusicalityTypes({type: "remove", data: "Rock"}));
        }else if(e.target.name === "concert" && userMusicalityTypes.includes("Concert")){
          dispatch(setMusicalityTypes({type: "remove", data: "Concert"}));
        }
      }
    }

    useEffect(()=>{
      userMusicalityTypes.map((musicalityType)=>{
        let checkInput = "";
        if(musicalityType === "Electronic Music"){
          checkInput = document.getElementById("electronic");
        }else if(musicalityType === "POP Music"){
          checkInput = document.getElementById("pop");
        }else if(musicalityType === "Rock"){
          checkInput = document.getElementById("rock");
        }else if(musicalityType === "Concert"){
          checkInput = document.getElementById("concert");
        }
        checkInput.checked = true;
      })
    },[])

    return (
        <div>
          <div className="music-type-selected">
              {showMusicalityTypes}
          </div>
          <Slider {...settings}>
            <div>
                <label className={`music-type-slide-sec btn-light ${userMusicalityTypes.includes("Electronic Music") && "active"}`} style={{cursor:'pointer'}}>
                  <input type="checkbox" name="electronic" id="electronic"
                    onChange={(e)=>handleChange(e)}
                  />
                  <img src={Musicimg1} className="mx-auto w-100" alt="img" />
                  <span className="l-b white-color music-type-text">Electronic Music</span>
                </label>
            </div>
            <div>
              <label className={`music-type-slide-sec btn-light ${userMusicalityTypes.includes("POP Music") && "active"}`} style={{cursor:'pointer'}}>
                <input type="checkbox" name="pop" id="pop"
                  onChange={(e)=>handleChange(e)}
                />
                <img src={Musicimg2} className="mx-auto w-100" alt="img"/>
                <span className="l-b white-color music-type-text">POP Music</span>
              </label>
            </div>
            <div>
              <label className={`music-type-slide-sec btn-light ${userMusicalityTypes.includes("Rock") && "active"}`} style={{cursor:'pointer'}}>
                <input type="checkbox" name="rock" id="rock"
                  onChange={(e)=>handleChange(e)}
                />
                <img src={Musicimg3} className="mx-auto w-100" alt="img" />
                <span className="l-b white-color music-type-text">Rock</span>
              </label>
            </div>
            <div>
              <label className={`music-type-slide-sec btn-light ${userMusicalityTypes.includes("Concert") && "active"}`} style={{cursor:'pointer'}}>
                <input type="checkbox" name="concert" id="concert"
                  onChange={(e)=>handleChange(e)}
                />
                <img src={Musicimg4} className="mx-auto w-100" alt="img" />
                <span className="l-b white-color music-type-text">Concert</span>
              </label>
            </div>
          </Slider>
        </div>
      );
};

export default MusictypeSlider