import React, { useState, useEffect } from "react";
import "./WelcomeLoader.css";
import useScript from './hooks/useScript';
import { Navigate, useNavigate  } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAllMasters } from "./actions/common";
import { welcomeSeen, setJoiningType } from './actions/auth';

import { getProfileData, getArtistProofData } from "./actions/artist";
import { useParams } from 'react-router-dom';

const WelcomeLoader = () => {
	const dispatch = useDispatch();
  	let navigate = useNavigate();
	const params = useParams();
  	//useScript('./WelcomeLoader.js');

  	const { isLoggedIn, IsProfileSend, joiningType, ArtistIsApproved, ArtistIsPending, ArtistIsNotSubmitted, ArtistIsRejected } = useSelector(state => state.auth);
  	const { isDefaultSettings } = useSelector(state => state.user);

  	 useEffect(() => {

		if(params.artistId && params.userId){
		  navigate(`/artist-details/${params.ArtistName.replace(/ /g,"-")}/${btoa(params.artistId)}/${btoa(params.userId)}`);
		  return false;
		}

		
	    if(joiningType !== "Artist" && joiningType !== "Judge" && joiningType !== "User"){
	    	//adding Joining Type manually if not found...
	      dispatch(setJoiningType("User"));
	    }

	    if(!isLoggedIn) {
	      setTimeout(() => {
	      	navigate("/welcome");
	      },7000)
	    } else {
	      dispatch(getAllMasters());
	      if(joiningType === 'Artist') {
	        dispatch(getProfileData());
	        dispatch(getArtistProofData());
	        if(ArtistIsNotSubmitted) {
	          navigate("/artists-profile");
	        } else {
	          navigate("/artist-dashboard");
	        }
	      } else if(joiningType === 'Judge') {
	        navigate("/judgment-panel");
	      } else if(joiningType === 'User'){
	        if(isDefaultSettings) {
	          navigate("/dashboard");
	        } else {
	          navigate("/languages");
	        }
	      }
	    }
	  }, [])

  return (
   <div className="logo-wrap">
  <svg x="0px" y="0px" viewBox="0 0 945 150" id="Слой_1" xmlns="http://www.w3.org/2000/svg"  >
    <text transform="matrix(1 0 0 1 0 125.5508)" className="st0 st1 st2">LIVETUNES</text>
  </svg>

</div>
  )
}

export default WelcomeLoader
