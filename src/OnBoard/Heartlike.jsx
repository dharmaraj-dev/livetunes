import React, { useState, useEffect } from "react";
import Heart from "react-heart";
import { useDispatch,useSelector } from "react-redux";
import { insertFavoriteArtists, removeFavoriteArtists } from "../actions/user";


const Heartlike = ({props}) => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth);
    const [active, setActive] = useState(props?.IsFavArtist);


    function addFavorite(){
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
          "AFavId": props?.ArtistId,
          "RegId":user.RegId,
          "ArtId":props?.ArtistId,
          "likeState": true
        }
        dispatch(insertFavoriteArtists(data));
        setActive(true);
      }
    }

    useEffect (() => {
      
    }, [props])
  return (
    <>
        <div className="heart-like-sec">
            <Heart isActive={active} onClick={() => {addFavorite()}} animationTrigger = "hover" animationScale = {1.1}/>
        </div>
    </>
  )
}

export default Heartlike