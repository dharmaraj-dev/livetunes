import React, { useState } from "react";
import Heart from "react-heart";
import { useDispatch,useSelector } from "react-redux";
import { insertFavoriteArtists } from "../actions/user";


const Heartlike = ({props}) => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth);
    const [active, setActive] = useState(props.IsFavArtist)
    function addFavorite(isFav){
      console.log(isFav, 'isFav')
      if(isFav) {
        //dispatch(removeFavoriteArtists({"RegId":user.RegId,"ArtId":props.ArtistId}));
      } else {
        dispatch(insertFavoriteArtists({"RegId":user.RegId,"ArtId":props.ArtistId,"IsFavArtist": !isFav}));
      }
      setActive(!isFav);
    }
  return (
    <>
        <div className="heart-like-sec">
            <Heart isActive={active} onClick={() => {addFavorite(props.IsFavArtist)}} animationTrigger = "hover" animationScale = {1.1}/>
        </div>
    </>
  )
}

export default Heartlike