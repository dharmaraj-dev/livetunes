import React, { useEffect } from "react";
import "./WelcomeLoader.css";
import { useNavigate  } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setJoiningType } from './redux/userAuth';

import { getArtistProofData } from "./actions/artist";
import { fetchUserProfile } from "./redux/userProfileSlice";

import { useParams } from 'react-router-dom';
import LogoGif from './assets/images/livtunes.gif'

const WelcomeLoader = () => {
	const dispatch = useDispatch();
  	let navigate = useNavigate();
	const params = useParams();

  	const { isLoggedIn, joiningType, ArtistIsNotSubmitted, ArtistIsPending } = useSelector(state => state.userAuth);
  	const { isSettingsSaved } = useSelector(state => state.userSettings);

  	 useEffect(() => {

		if(params.artistId && params.userId){
		  navigate(`/artist-details/${params.ArtistName.replace(/ /g,"-")}/${btoa(params.artistId)}/${btoa(params.userId)}`);
		  return false;
		}

		
	    if(joiningType !== "Artist" && joiningType !== "Judge" && joiningType !== "User"  && joiningType !== "Admin"){
	    	//adding Joining Type manually if not found...
	      dispatch(setJoiningType("User"));
	    }

	    if(!isLoggedIn) {
	      setTimeout(() => {
	      	navigate("/welcome");
	      },7000)
	    } else {
	      if(joiningType === 'Artist') {
	        if(ArtistIsNotSubmitted) {
	        	console.log('aaaaa')
	          navigate("/artists-profile");
	        }else if(ArtistIsPending) {
	          navigate("/application-status");
	        } else {
    		  dispatch(getArtistProofData());
	          navigate("/artist-dashboard");
	        }
	      } else if(joiningType === 'Judge') {
	        navigate("/judgment-panel");
	      } else if(joiningType === 'Admin') {
	        navigate("/admin-dashboard");
	      } else if(joiningType === 'User'){
		        if(isSettingsSaved) {
		        	dispatch(fetchUserProfile());
		          navigate("/dashboard");
		        } else {
		          navigate("/preferred-languages");
		        }
	      }
	    }
	  }, [])

  return (
   <div className="logo-wrap">
   		<img src={LogoGif} />
	  {/*<svg x="0px" y="0px" viewBox="0 0 945 150" id="Слой_1" xmlns="http://www.w3.org/2000/svg"  >
	    <text transform="matrix(1 0 0 1 0 125.5508)" className="st0 st1 st2">LIVETUNES</text>
	  </svg>*/}
	</div>
  )
}

export default WelcomeLoader
