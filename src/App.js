import React, {useEffect} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import SideNavBar from './Layout/SideNavBar';
import OneTimepass from './LoginSignup/OneTimepass';
import SignUp from './LoginSignup/SignUp';
import MainLayout from './Layout/MainLayout';
import NavBar from './Layout/NavBar';
import HelloScreen from './OnBoard/HelloScreen';
import Languages from './OnBoard/Languages';
import LocationCheck from './OnBoard/LocationCheck';
import BudgetMusictype from './OnBoard/BudgetMusictype';
import ArtistList from './OnBoard/ArtistList';
import SingleArtist from './OnBoard/SingleArtist';
import LogIn from './LoginSignup/LogIn';
import CheckAvailability from './BookingFlow/CheckAvailability';
import Cart from './BookingFlow/Cart';
import Notifications from './Notification/Notifications';
import Profile from './Profile/Profile';
import Favourites from './Favourites/Favourites';
import Bookings from './PastUpcomebookings/Bookings';
import Settings from './Settings/Settings';
import PersonalInfo from './Artist/PersonalInfo';
import PerformanceDetails from './Artist/PerformanceDetails';
import SocialMedia from './Artist/SocialMedia';
import BankDetails from './Artist/BankDetails';
import PhotoId from './Artist/PhotoId';
import AddressProof from './Artist/AddressProof';
import ArtistDashboard from './Artist/ArtistDashboard';
import ArtistProfiles from './Artist/ArtistProfiles';
import BillingInvoice from './Artist/BillingInvoice';
import Home from './Webpage/Home';
import Judgment from './Judgment/Judgment';
import SingleApplication from './Judgment/SingleApplication';
import Review from './Judgment/Review';
import ArtistsProfile from './Artist/ArtistsProfile';
import ArtistBankDetails from './Artist/ArtistBankDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { getCities, getStates, getCategories, getGernes, getLanguages, getEvents, getEventModes, getBanks, getIDProofs, getAddressProofs } from "./actions/common";
import { getProfileData, getArtistProofData } from "./actions/artist";
import 'filepond/dist/filepond.min.css'
import { Navigate, useNavigate  } from 'react-router-dom';
import {
  ARTIST_PROFILE_STATUS,
  IS_ARTIST_PROFILE_SEND
} from "./actions/types";

function App() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { isLoggedIn, IsProfileSend, joiningType, ArtistIsApproved, ArtistIsPending, ArtistIsNotSubmitted, ArtistIsRejected } = useSelector(state => state.auth);

  useEffect(() => {
     if(joiningType === 'artist' && IsProfileSend && isLoggedIn) {
        if(ArtistIsApproved) {
          navigate("/artistdashboard");
        } else if(ArtistIsPending || ArtistIsNotSubmitted || ArtistIsRejected) {
          navigate("/artists-profile");
        }
      } else if(joiningType == 'artist' && !IsProfileSend && isLoggedIn) {
        navigate("/artists-profile");
      }

      if(isLoggedIn && joiningType == 'artist') {
        dispatch(getCities());
        dispatch(getStates());
        dispatch(getCategories());
        dispatch(getGernes());
        dispatch(getLanguages());
        dispatch(getEvents());
        dispatch(getEventModes());
        dispatch(getBanks());
        dispatch(getIDProofs());
        dispatch(getAddressProofs());
        dispatch(getProfileData());
        dispatch(getArtistProofData());
      }
  }, [isLoggedIn])

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        {/* <Route exact path="/" element={<SignUp />}/> */}
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/mainlayout" element={<MainLayout/>}/>
        <Route path="/sidenavbar" element={<SideNavBar />}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/otp" element={<OneTimepass />}/>
        <Route path="/navbar" element={<NavBar/>}/>
        <Route path="/helloscreen" element={<HelloScreen/>}/>
        <Route path="/languages" element={<Languages/>}/>
        <Route path="/locationcheck" element={<LocationCheck/>}/>
        <Route path="/budgetmusictype" element={<BudgetMusictype/>}/>
        <Route path="/artistList" element={<ArtistList/>}/>
        <Route path="/singleartist" element={<SingleArtist/>}/>
        <Route path="/checkavailability" element={<CheckAvailability/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/notifications" element={<Notifications/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
        <Route path="/bookings" element={<Bookings/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/personalinfo" element={<PersonalInfo/>}/>
        <Route path="/personalinfodetail" element={<PerformanceDetails/>}/>
        <Route path="/socialmedia" element={<SocialMedia/>}/>
        <Route path="/bankdetails" element={<BankDetails/>}/>
        <Route path="/photoid" element={<PhotoId/>}/>
        <Route path="/addressproof" element={<AddressProof/>}/>
        <Route path="/artistdashboard" element={<ArtistDashboard/>}/>
        <Route path="/my-profile" element={<ArtistProfiles/>}/>
        <Route path="/billinginvoice" element={<BillingInvoice/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/judgment" element={<Judgment/>}/>
        <Route path="/singleapplication" element={<SingleApplication/>}/>
        <Route path="/review" element={<Review/>}/>

        <Route path="/artists-profile" element={<ArtistsProfile/>}/>
        <Route path="/artists-bank-details" element={<ArtistBankDetails/>}/>
     

      </Routes>
      <h1 className="mob-view-sec" style={{ display: "none"}}>Please go Tab and Desktop view for the best experience </h1>
    </div>
  );
}

export default App;
