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
import VerificationList from './DocVerification/VerificationList';
import ApplicationView from './DocVerification/ApplicationView';
import ManageDashboard from './ManagePartner/ManageDashboard';
import ActiveArtists from './ManagePartner/ActiveArtists';
import PartnerDetails from './ManagePartner/PartnerDetails';
import DeactiveArtists from './ManagePartner/DeactiveArtists';
import InactiveArtists from './ManagePartner/InactiveArtists';
import RecentOrders from './ManageUsers/RecentOrders';
import ManageUserDashboard from './ManageUsers/ManageUserDashboard';
import TotalUsers from './ManageUsers/TotalUsers';
import LineChart from './Charts/LineChart';
import BarChart from './Charts/BarChart';


function App() {
  return (
    <div className="App">
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
        <Route path="/artistprofiles" element={<ArtistProfiles/>}/>
        <Route path="/billinginvoice" element={<BillingInvoice/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/judgment" element={<Judgment/>}/>
        <Route path="/singleapplication" element={<SingleApplication/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/verificationlist" element={<VerificationList/>}/>
        <Route path="/applicationview" element={<ApplicationView/>}/>
        <Route path="/managedashboard" element={<ManageDashboard/>}/>
        <Route path="/activeartists" element={<ActiveArtists/>}/>
        <Route path="/partnerdetails" element={<PartnerDetails/>}/>
        <Route path="/deactiveartists" element={<DeactiveArtists/>}/>
        <Route path="/inactiveartists" element={<InactiveArtists/>}/>
        <Route path="/recentorders" element={<RecentOrders/>}/>
        <Route path="/manageuserdashboard" element={<ManageUserDashboard/>}/>
        <Route path="/totalusers" element={<TotalUsers/>}/>
        <Route path="/linechart" element={<LineChart/>}/>
        <Route path="/barchart" element={<BarChart/>}/>
     

      </Routes>
      <h1 className="mob-view-sec" style={{ display: "none"}}>Please go Tab and Desktop view for the best experience </h1>
    </div>
  );
}

export default App;
