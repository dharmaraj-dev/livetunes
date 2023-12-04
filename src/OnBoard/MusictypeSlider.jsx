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
      if(mType === "Classical" && userMusicalityTypes.includes("Classical")){
        dispatch(setMusicalityTypes({type: "remove", data: "Classical"}));
        checkInput = document.getElementById("electronic");
      }else if(mType === "Bollywood" && userMusicalityTypes.includes("Bollywood")){
        dispatch(setMusicalityTypes({type: "remove", data: "Bollywood"}));
        checkInput = document.getElementById("pop");
      }else if(mType === "Retro Theme" && userMusicalityTypes.includes("Retro Theme")){
        dispatch(setMusicalityTypes({type: "remove", data: "Retro Theme"}));
        checkInput = document.getElementById("Retro Theme");
      }else if(mType === "Ghazals" && userMusicalityTypes.includes("Ghazals")){
        dispatch(setMusicalityTypes({type: "remove", data: "Ghazals"}));
        checkInput = document.getElementById("Ghazals");
      }
      checkInput.checked = false;
    }

    function handleChange(e){
      if(e.target.checked){
        if(e.target.name === "electronic" && !userMusicalityTypes.includes("Classical")){
          dispatch(setMusicalityTypes({type: "add", data: "Classical"}));
        }else if(e.target.name === "pop" && !userMusicalityTypes.includes("Bollywood")){
          dispatch(setMusicalityTypes({type: "add", data: "Bollywood"}));
        }else if(e.target.name === "Retro Theme" && !userMusicalityTypes.includes("Retro Theme")){
          dispatch(setMusicalityTypes({type: "add", data: "Retro Theme"}));
        }else if(e.target.name === "Ghazals" && !userMusicalityTypes.includes("Ghazals")){
          dispatch(setMusicalityTypes({type: "add", data: "Ghazals"}));
        }
      }else{
        if(e.target.name === "electronic" && userMusicalityTypes.includes("Classical")){
          dispatch(setMusicalityTypes({type: "remove", data: "Classical"}));
        }else if(e.target.name === "pop" && userMusicalityTypes.includes("Bollywood")){
          dispatch(setMusicalityTypes({type: "remove", data: "Bollywood"}));
        }else if(e.target.name === "Retro Theme" && userMusicalityTypes.includes("Retro Theme")){
          dispatch(setMusicalityTypes({type: "remove", data: "Retro Theme"}));
        }else if(e.target.name === "Ghazals" && userMusicalityTypes.includes("Ghazals")){
          dispatch(setMusicalityTypes({type: "remove", data: "Ghazals"}));
        }
      }
    }

    useEffect(()=>{
      userMusicalityTypes.map((musicalityType)=>{
        let checkInput = "";
        if(musicalityType === "Classical"){
          checkInput = document.getElementById("electronic");
        }else if(musicalityType === "Bollywood"){
          checkInput = document.getElementById("pop");
        }else if(musicalityType === "Retro Theme"){
          checkInput = document.getElementById("Retro Theme");
        }else if(musicalityType === "Ghazals"){
          checkInput = document.getElementById("Ghazals");
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
                <label className={`music-type-slide-sec btn-light ${userMusicalityTypes.includes("Classical") && "active"}`} style={{cursor:'pointer'}}>
                  <input type="checkbox" name="electronic" id="electronic"
                    onChange={(e)=>handleChange(e)}
                  />
                  <img src={Musicimg1} className="mx-auto w-100" alt="img" />
                  <span className="l-b white-color music-type-text">Classical</span>
                </label>
            </div>
            <div>
              <label className={`music-type-slide-sec btn-light ${userMusicalityTypes.includes("Bollywood") && "active"}`} style={{cursor:'pointer'}}>
                <input type="checkbox" name="pop" id="pop"
                  onChange={(e)=>handleChange(e)}
                />
                <img src={Musicimg2} className="mx-auto w-100" alt="img"/>
                <span className="l-b white-color music-type-text">Bollywood</span>
              </label>
            </div>
            <div>
              <label className={`music-type-slide-sec btn-light ${userMusicalityTypes.includes("Retro Theme") && "active"}`} style={{cursor:'pointer'}}>
                <input type="checkbox" name="Retro Theme" id="Retro Theme"
                  onChange={(e)=>handleChange(e)}
                />
                <img src={Musicimg3} className="mx-auto w-100" alt="img" />
                <span className="l-b white-color music-type-text">Retro Theme</span>
              </label>
            </div>
            <div>
              <label className={`music-type-slide-sec btn-light ${userMusicalityTypes.includes("Ghazals") && "active"}`} style={{cursor:'pointer'}}>
                <input type="checkbox" name="Ghazals" id="Ghazals"
                  onChange={(e)=>handleChange(e)}
                />
                <img src={Musicimg4} className="mx-auto w-100" alt="img" />
                <span className="l-b white-color music-type-text">Ghazals</span>
              </label>
            </div>
          </Slider>
        </div>
      );
};

export default MusictypeSlider