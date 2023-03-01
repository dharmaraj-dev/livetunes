import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "react-phone-input-2/lib/style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "./Layout/SideNavBar.css";
import "./Layout/NavBar.css";
import "./OnBoard/Helloscreen.css";
import "./BookingFlow/Bookingflow.css";
import "./Notification/Notifications.css";
import "./Profile/Profile.css";
import "./Favourites/Favourites.css";
import "./Settings/Settings.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
