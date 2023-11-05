import React from 'react';
import Avtar from '../assets/images/default_profile.jpeg';
import Stack from 'react-bootstrap/Stack';
import { BiTime } from "react-icons/bi";
import { TbMessageLanguage } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { TbCurrencyRupee } from "react-icons/tb";
import StarRate from '../OnBoard/StarRate';
import { RxCrossCircled } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Rating } from 'react-simple-star-rating'
import { removeFavoriteArtists } from "../actions/user";
import { removeFavArtists } from "../redux/userBookingsSlice";

const FavouriteCard = ({props}) => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.userAuth);
    const { removeFavouriteArtistsLoading } = useSelector(state => state.userBookings);

    const removeFromFavourite = (dt) => {
        const data = {
          "AFavId": dt.AFavId,
          "likeState": false
        }
        //dispatch(removeFavoriteArtists(data));
        dispatch(removeFavArtists(data,dt));
      }

  return (
    <>
        <div className="inner-favourite-card postion-r">
            {removeFavouriteArtistsLoading ? (
                <div className="cross-sec">
                    <span className="spinner-border spinner-border-sm"></span>
                </div>
              ):(
                <RxCrossCircled className="cross-sec" onClick={() => {removeFromFavourite(props)}}/>
              )}
            <div className="avtar-sec">
                <div className="avtar-img">
                    <img src={props.ArtistProfileImg == "" ? Avtar : props.ArtistProfileImg} alt={props.ArtistName} className="w-100 border-radius-cirlce" />
                </div>
                <Rating 
                  size={27}
                  allowFraction={true}
                  initialValue={props?.Rating}
                  fillColor="#fd3743"
                  readonly={true}
                />
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
                <Link to={`/artist-details/${props.ArtistName.replace(/ /g,"-")}/${btoa(props.ArtistId)}/${btoa(user.RegId)}`}>
                    <button type="button" className="l-b wbtnn book-btn btn btn-primary">Book Now</button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default FavouriteCard