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


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SignUp />}/>
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
        <Route path="/artistprofiles" element={<ArtistProfiles/>}/>
     

      </Routes>
      <h1 className="mob-view-sec" style={{ display: "none"}}>Please go Tab and Desktop view for the best experience </h1>
    </div>
  );
}

export default App;
