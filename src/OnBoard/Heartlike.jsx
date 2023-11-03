import React, { useState, useEffect } from "react";
import Heart from "react-heart";
import { useDispatch,useSelector } from "react-redux";
import { addFavArtist, removeFavArtist } from "../redux/userSlice";

const Heartlike = ({props}) => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.userAuth);
    const { filteredArtists } = useSelector(state => state.user);
    const [active, setActive] = useState(props?.IsFavArtist);
    const [showHeart,setShowHeart] = useState(true);

    function addFavorite(){
      setShowHeart(false);
      if(props?.IsFavArtist) {
        const data = {
          "AFavId": props?.AFavId,
          "ArtId":props?.ArtistId,
          "likeState": false
        }
        dispatch(removeFavArtist(data));
        setActive(false);
      } else {
        const data = {
          "AFavId": props?.AFavId,
          "RegId":user.RegId,
          "ArtId":props?.ArtistId,
          "likeState": true
        }
        dispatch(addFavArtist(data));
        setActive(true);
      }
    }

    useEffect (() => {
      setShowHeart(true);
    }, [props,filteredArtists])
  return (
    <>
        <div className="heart-like-sec">
            {
              showHeart && (
                <Heart isActive={active} onClick={() => {addFavorite()}}  animationTrigger = "hover" animationScale = {1.1}/>
              )
            }
        </div>
    </>
  )
}

export default Heartlike