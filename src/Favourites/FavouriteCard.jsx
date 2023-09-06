import React from 'react';
import Avtar from '../assets/images/avtar.png';
import Stack from 'react-bootstrap/Stack';
import { BiTime } from "react-icons/bi";
import { TbMessageLanguage } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { TbCurrencyRupee } from "react-icons/tb";
import StarRate from '../OnBoard/StarRate';
import { RxCrossCircled } from "react-icons/rx";
import { Link } from 'react-router-dom';

const FavouriteCard = ({props}) => {
  console.log(props);
  return (
    <>
        <div className="inner-favourite-card postion-r">
            <RxCrossCircled className="cross-sec"/>
            <div className="avtar-sec">
                <div className="avtar-img">
                    <img src={props.ArtistProfileImg} alt="" className="w-100" />
                </div>
                <StarRate/>   
            </div>
            <div className="music-detail">
                <p className="name l-sb">{props.ArtistName}</p>
                <Stack direction="horizontal" gap={2} className="from-select-filter">
                    <div className="inner-from-select-filter">First item</div>
                    <div className="inner-from-select-filter">Second item</div>
                    <div className="inner-from-select-filter">Third item</div>
                </Stack>
                <div className="music-short-detail">
                    <Stack direction="vertical" className="">
                        <div className="">
                            <span className="ico-sec"><BiTime className="red-color"/></span> <span>{props.ArtistTimeDur}</span>
                        </div>
                        <div className="">
                            <span className="ico-sec"><TbMessageLanguage className="red-color"/></span> <span>{props.ArtistLanguage}</span>
                        </div>
                        <div className="">
                            <span className="ico-sec"><IoLocationOutline className="red-color"/></span> <span>{props.ArtistCity}</span>
                        </div>
                        <div className="">
                            <span className="ico-sec"><TbCurrencyRupee className="red-color"/></span> <span className="price l-r">{props.ArtistCharges}</span>
                        </div>
                    </Stack>
                </div>
            </div>
            <div className="book-now-btn">
                <Link to="/singleartist" state={{ artistId : props.ArtistId }}>
                    <button type="button" className="l-b wbtnn book-btn btn btn-primary">Book Now</button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default FavouriteCard