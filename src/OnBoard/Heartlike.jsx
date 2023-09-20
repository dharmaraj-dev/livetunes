import React, { useState, useEffect } from "react";
import Heart from "react-heart";
import { useDispatch,useSelector } from "react-redux";
import { insertFavoriteArtists, removeFavoriteArtists } from "../actions/user";


const Heartlike = ({props}) => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth);
    const {userFilteredArtists} = useSelector(state => state.user);
    const [active, setActive] = useState(props?.IsFavArtist);
    const [showHeart,setShowHeart] = useState(true);


    function addFavorite(){
      setShowHeart(false);
      console.log(props?.IsFavArtist, 'active')
      if(props?.IsFavArtist) {
        const data = {
          "AFavId": props?.AFavId,
          "likeState": false
        }
        dispatch(removeFavoriteArtists(data));
        setActive(false);
      } else {
        const data = {
          "AFavId": props?.AFavId,
          "RegId":user.RegId,
          "ArtId":props?.ArtistId,
          "likeState": true
        }
        dispatch(insertFavoriteArtists(data));
        setActive(true);
      }
    }

    useEffect (() => {
      setShowHeart(true);
    }, [props,userFilteredArtists])
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