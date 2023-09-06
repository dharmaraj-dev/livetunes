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
import { useEffect } from "react";


const MusictypeSlider = () => {
    const dispatch = useDispatch();
    const { userMusicalityTypes } = useSelector(state => state.user);
    let userMusicalityTypesArray = userMusicalityTypes;

    const showMusicalityTypes = userMusicalityTypes.map((musicalityType)=> <Badge className='l-r'> {musicalityType}      <GrClose className="red-color" onClick={(e)=>handleClick(e)}/></Badge> );

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

    function handleClick(e){
      const musicalityType = e.target.parentElement.innerText.trim();
      let checkInput = "";
      if(musicalityType === "Electronic Music" && userMusicalityTypes.includes("Electronic Music")){
        userMusicalityTypesArray.splice(userMusicalityTypes.indexOf("Electronic Music"),1);
        checkInput = document.getElementById("electronic");
      }else if(musicalityType === "POP Music" && userMusicalityTypes.includes("POP Music")){
        userMusicalityTypesArray.splice(userMusicalityTypes.indexOf("POP Music"),1);
        checkInput = document.getElementById("pop");
      }else if(musicalityType === "Rock" && userMusicalityTypes.includes("Rock")){
        userMusicalityTypesArray.splice(userMusicalityTypes.indexOf("Rock"),1);
        checkInput = document.getElementById("rock");
      }else if(musicalityType === "Concert" && userMusicalityTypes.includes("Concert")){
        userMusicalityTypesArray.splice(userMusicalityTypes.indexOf("Concert"),1);
        checkInput = document.getElementById("concert");
      }
      checkInput.checked = false;
      dispatch(setMusicalityTypes(userMusicalityTypesArray));
    }

    function handleChange(e){
      console.log(e);
      if(e.target.checked){
        if(e.target.name === "electronic" && !userMusicalityTypes.includes("Electronic Music")){
          userMusicalityTypesArray.push("Electronic Music");
        }else if(e.target.name === "pop" && !userMusicalityTypes.includes("POP Music")){
          userMusicalityTypesArray.push("POP Music");
        }else if(e.target.name === "rock" && !userMusicalityTypes.includes("Rock")){
          userMusicalityTypesArray.push("Rock");
        }else if(e.target.name === "concert" && !userMusicalityTypes.includes("Concert")){
          userMusicalityTypesArray.push("Concert");
        }
      }else{
        if(e.target.name === "electronic" && userMusicalityTypes.includes("Electronic Music")){
          userMusicalityTypesArray.splice(userMusicalityTypes.indexOf("Electronic Music"),1);
        }else if(e.target.name === "pop" && userMusicalityTypes.includes("POP Music")){
          userMusicalityTypesArray.splice(userMusicalityTypes.indexOf("POP Music"),1);
        }else if(e.target.name === "rock" && userMusicalityTypes.includes("Rock")){
          userMusicalityTypesArray.splice(userMusicalityTypes.indexOf("Rock"),1);
        }else if(e.target.name === "concert" && userMusicalityTypes.includes("Concert")){
          userMusicalityTypesArray.splice(userMusicalityTypes.indexOf("Concert"),1);
        }
      }
      dispatch(setMusicalityTypes(userMusicalityTypesArray));
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
                <label className={`music-type-slide-sec btn-light ${userMusicalityTypes.includes("Electronic Music") && "active"}`}>
                  <input type="checkbox" name="electronic" id="electronic" 
                    onChange={(e)=>handleChange(e)}
                  />
                  <img src={Musicimg1} className="mx-auto w-100" alt="img" />
                  <span className="l-b white-color music-type-text">Electronic Music</span>
                </label>
            </div>
            <div>
              <label className={`music-type-slide-sec btn-light ${userMusicalityTypes.includes("POP Music") && "active"}`}>
                <input type="checkbox" name="pop" id="pop"
                  onChange={(e)=>handleChange(e)}
                />
                <img src={Musicimg2} className="mx-auto w-100" alt="img"/>
                <span className="l-b white-color music-type-text">POP Music</span>
              </label>
            </div>
            <div>
              <label className={`music-type-slide-sec btn-light ${userMusicalityTypes.includes("Rock") && "active"}`}>
                <input type="checkbox" name="rock" id="rock"
                  onChange={(e)=>handleChange(e)}
                />
                <img src={Musicimg3} className="mx-auto w-100" alt="img" />
                <span className="l-b white-color music-type-text">Rock</span>
              </label>
            </div>
            <div>
              <label className={`music-type-slide-sec btn-light ${userMusicalityTypes.includes("Concert") && "active"}`}>
                <input type="checkbox" name="concert" id="concert"
                  onChange={(e)=>handleChange(e)}
                />
                <img src={Musicimg4} className="mx-auto w-100" alt="img" />
                <span className="l-b white-color music-type-text">Concert</span>
              </label>
            </div>
            {/* <div>
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
            </div> */}
           
          </Slider>
        </div>
      );
};

export default MusictypeSlider