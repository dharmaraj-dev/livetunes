import React, { useState, useEffect } from "react";
import Sitelogo from '../assets/images/logo.png';
import Minisitelogo from '../assets/images/mini-logo.png';
import {TfiDashboard, TfiAgenda } from "react-icons/tfi";
import {TfiMicrophoneAlt, TfiHeart, TfiUser,TfiAlarmClock, TfiMedallAlt, TfiMenu } from "react-icons/tfi";
import { IoTicketOutline } from "react-icons/io5";
import { SlCalender, SlSettings } from "react-icons/sl";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoIosLogOut } from "react-icons/io";
import { BsChevronDoubleRight } from "react-icons/bs";
import { BsChevronDoubleLeft } from "react-icons/bs";
import Gaudio from '../assets/images/guitar.mp3';
import { Link } from "react-router-dom";
import { logout } from "../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { authToken } from "../services/auth-header";
import { useLocation } from 'react-router-dom';
import useLoginCheck from "../hooks/useLoginCheck";
import useApplicationStatusCheck from "../hooks/useApplicationStatusCheck";
import { setLogout } from "../redux/userAuth";
import "./Sidemenu.css";

const SideNavBar = () => {
	const dispatch = useDispatch();
	let navigate = useNavigate();
	const location = useLocation();
	const MySwal = withReactContent(Swal);
	const { showLoginAlert } = useLoginCheck();
	const { showApplicationAlert } = useApplicationStatusCheck();
	const { isLoggedIn, joiningType, ArtistIsNotSubmitted, ArtistIsPending } = useSelector((state) => state.userAuth);


	let alertTitle = '';
  let alertDesc = '';
  if(ArtistIsNotSubmitted) {
    alertTitle = 'Application Not Submitted';
    alertDesc = 'Please approve your application first.';
  }
  if(ArtistIsPending) {
    alertTitle = 'Application Review Pending';
    alertDesc = 'Please application is in review.';
  }

	const audio = new Audio(Gaudio);
	const [isExpanded, setExpendState] = useState(false);

	const [menuItemsDynamic, setMenuItemsDynamic] = useState([
				{
					text: "Dashboard",
					icon: <TfiDashboard className="menu-item-icon"/>,
					links: "/"
				}
			]);

	const showPopupAlert = (text, linkToNavigate) => {
		if(text == 'Support') {
			Swal.fire('Comming Soon.', '', 'info');
		}
	}

	useEffect(() => {
		if(joiningType ===  "Artist") {
			setMenuItemsDynamic([
				{
					text: "Dashboard",
					icon: <TfiDashboard className="menu-item-icon"/>,
					links: "/artist-dashboard"
				},
				{
					text: "Profile",
					icon: <TfiUser className="menu-item-icon"/>,
					links: "/my-profile"
				},
				{
					text:"Availability",
					icon: <SlCalender className="menu-item-icon" />,
					links:"/artist-slots"
				},
				{
					text:"Bank Details",
					icon: <TfiMedallAlt className="menu-item-icon" />,
					links:"/artists-bank-details"
				},
				{
					text: "Settings",
					icon: <SlSettings className="menu-item-icon"/>,
					links: "/settings"
				}
			]);
		} else if(joiningType ===  "Judge") {
			setMenuItemsDynamic([
				{
					text: "Dashboard",
					icon: <TfiDashboard className="menu-item-icon"/>,
					links: "/judgment-panel"
				}
			]);
		}else{
			setMenuItemsDynamic([
				{
					text: "Dashboard",
					icon: <TfiDashboard className="menu-item-icon"/>,
					links: "/dashboard"
				},
				{
					text: "Profile",
					icon: <TfiUser className="menu-item-icon"/>,
					links: "/profile"
				},
				{
					text:"Bookings", //
					icon:<IoTicketOutline className="menu-item-icon"/>,
					links:`/bookings`
				},
				{
					text: "Favourites",
					icon: <TfiHeart className="menu-item-icon"/>,
					links: "/favourites"
				},
				{
					text: "Support",
					icon: <TfiHeadphoneAlt className="menu-item-icon"/>,
					links: "#"
				},
				{
					text: "Settings ",
					icon: <SlSettings className="menu-item-icon"/>,
					links: "/settings"
				}
			]);
		}
	}, [])


	const handleLogout = () => {
		setExpendState(false);
		MySwal.fire({
          title: '<strong>Are you sure!!</strong>',
          icon: 'warning',
          html:
            'Do you want to logout?',
          showDenyButton: true,
          confirmButtonText: 'Yes',
          denyButtonText: `No`,
          showLoaderOnConfirm: true,
          preConfirm: () => {
            return dispatch(logout()).then((response) => {
			          navigate("/login");
            }).catch((err) => {
            	dispatch(setLogout());
		          navigate("/login");
            })
          },
          allowOutsideClick: () => false
        }).then((result) => {
          if (result.isConfirmed && result.value) {
          	dispatch(setLogout());
            Swal.fire('Successfully logout.', '', 'success');
          }
        })
		
	}
	return (
		<div
			className={
				isExpanded ? "side-nav-container" : "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					
						<div className="nav-brand">
							<img className="side-logo" src={Sitelogo} alt="" />
							<img className="side-minilogo d-none" src={Minisitelogo} alt="" />
						</div>
					
						<span 
						onClick={() => {audio.play();}}
							>
							<button
								className={
									isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
								}
								onClick={() => setExpendState(!isExpanded)}
							>
								<BsChevronDoubleRight className="side-right-arrow d-none"/>
								<BsChevronDoubleLeft className="side-left-arrow d-none"/>
							</button>
						</span>
				</div>
				<div className="nav-menu">
					{menuItemsDynamic.map(({ text, icon, links }) => (
						!isLoggedIn ? (
							<Link
								key={text+'_'+links}
								onClick={showLoginAlert}
								className={`${isExpanded ? "menu-item" : "menu-item menu-item-NX"} ${location.pathname == links ? ' active' : ''}`}
							>
								{icon}
								{isExpanded && <p className="l-sb">{text}</p>}
							</Link>
						) : (
							(joiningType ===  "Artist" && (ArtistIsNotSubmitted || ArtistIsPending)) ? (
								<Link
									key={text+'_'+links}
									onClick={() => showApplicationAlert(alertTitle, alertDesc)}
									className={`${isExpanded ? "menu-item" : "menu-item menu-item-NX"} ${location.pathname == links ? ' active' : ''}`}
								>
									{icon}
									{isExpanded && <p className="l-sb">{text}</p>}
								</Link>
							):(
							<Link
								key={text+'_'+links}
								onClick={() => showPopupAlert(text, links)}
								to={links}
								className={`${isExpanded ? "menu-item" : "menu-item menu-item-NX"} ${location.pathname == links ? ' active' : ''}`}
							>
								{icon}
								{isExpanded && <p className="l-sb">{text}</p>}
							</Link>
							)
						)
					))}
				</div>
			</div>
			<div className="nav-footer">
				<IoIosLogOut onClick={handleLogout} className="footer-logout mx-auto cursor-pointer"/>
			</div>
		</div>
	);
};

export default SideNavBar;
