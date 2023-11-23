import React, { useState, useEffect } from "react";
import Sitelogo from '../assets/images/logo.png';
import Minisitelogo from '../assets/images/mini-logo.png';
import {TfiDashboard, TfiAgenda } from "react-icons/tfi";
import {TfiMicrophoneAlt, TfiList, TfiHeart, TfiUser,TfiAlarmClock, TfiMedallAlt, TfiMenu, TfiMoney, TfiWrite, TfiBriefcase,  TfiArrowUp, TfiArrowDown } from "react-icons/tfi";
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
	const [dropdown, setDropdown] = useState(false);


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
		} else if(linkToNavigate == '#' || linkToNavigate == '#') {
			Swal.fire('Comming Soon.', '', 'info');
			return false;
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
					text:"Bookings",
					icon:<IoTicketOutline className="menu-item-icon"/>,
					links:`/bookings`
				},
				{
					text: "Support",
					icon: <TfiHeadphoneAlt className="menu-item-icon"/>,
					links: "#"
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
				},
				{
					text: "Profile",
					icon: <TfiUser className="menu-item-icon"/>,
					links: "#"
				},
				{
					text: "Payments",
					icon: <TfiMoney className="menu-item-icon"/>,
					links: "#"
				},
			]);
		} else if(joiningType === "Admin") {
			setMenuItemsDynamic([
				{
					text: "Dashboard",
					icon: <TfiDashboard className="menu-item-icon"/>,
					links: "/admin-dashboard"
				},
				{
					text: "All Accounts",
					icon: <TfiUser className="menu-item-icon"/>,
					links: "/admin/all-accounts"
				},
				{
					text: "All Masters",
					icon: <TfiList className="menu-item-icon"/>,
					links: "/admin/all-masters"
				},
				
				// {
				// 	text: "Manage Accounts",
				// 	icon: <TfiUser className="menu-item-icon"/>,
				// 	links: "#",
				// 	submenu: [
			  //     {
			  //       title: 'Users',
			  //       url: '/admin/all-organisers',
			  //       icon:<TfiList className="menu-item-icon"/>,
			  //     },
			  //     {
			  //       title: 'Artists',
			  //       url: '/admin/all-artists',
			  //       icon:<TfiList className="menu-item-icon"/>,
			  //     },
			  //     {
			  //       title: 'Judges',
			  //       url: '/admin/all-judges',
			  //       icon:<TfiList className="menu-item-icon"/>,
			  //     },
			  //   ],
			  //   isSubMenuActive: false
				// },
				{
					text: "Support",
					icon: <TfiHeadphoneAlt className="menu-item-icon"/>,
					links: "#"
				}
			]);
		}
		 else{
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

	const enableDisabledDropdown = (item, val) => {
		

    const updatedMenus = menuItemsDynamic.map(obj => {
      if (obj.text == item) {
        return {...obj, isSubMenuActive: !val};
      } else {
      	return {...obj, isSubMenuActive: false};
      }
      return obj;
    });

    setMenuItemsDynamic(updatedMenus);

		console.log(menuItemsDynamic);
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
						// onClick={() => {audio.play();}}
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
					{menuItemsDynamic.map(({ text, icon, links, submenu = null, isSubMenuActive = false },index) => (
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
							submenu != null ? (
				        <>
				          <Link
										key={text+'_submenu_'+links+index}
										aria-expanded={isSubMenuActive ? "true" : "false"}
      							onClick={() => {enableDisabledDropdown(text, isSubMenuActive)}}
										className={`${isExpanded ? "menu-item" : "menu-item menu-item-NX"} ${location.pathname == links ? ' active' : ''}`}
									>

				            {icon}
										{isExpanded && <p className="l-sb">{text}</p>}
										{isSubMenuActive ? (
											<TfiArrowUp className="menu_drop_down_icon" />
										):(
											<TfiArrowDown className="menu_drop_down_icon" />
										)}
				          </Link>
				          <ul className={`sub_menu_dropdown ${isSubMenuActive ? "show_sub_menu" : ""}`}>
							      {submenu.map((submenu, indx) => (
							      	<Link
												key={submenu.title+'_submenu_child_'+submenu.url+indx}
												onClick={() => showPopupAlert(text, submenu.url)}
												className={`${isExpanded ? "menu-item" : "menu-item menu-item-NX"} ${location.pathname == submenu.url ? ' active' : ''}`}
												to={submenu.url}
											>
												{submenu.icon}
												{isExpanded && <p className="l-sb">{submenu.title}</p>}
						          </Link>
							      ))}
							    </ul>
				        </>
				      ) : (
				        <Link
									key={text+'_side_menu_'+links+'_'+index}
									onClick={() => showPopupAlert(text, links)}
									to={links}
									className={`${isExpanded ? "menu-item" : "menu-item menu-item-NX"} ${location.pathname == links ? ' active' : ''}`}
								>
									{icon}
									{isExpanded && <p className="l-sb">{text}</p>}
								</Link>
				      )
							)
						)
					))}
					<Link
						key={'logout_mobile'}
						onClick={handleLogout}
						className={`${isExpanded ? "menu-item" : "menu-item menu-item-NX"} d-block d-md-none`}
					>
						<IoIosLogOut />
						{isExpanded && <p className="l-sb">Logout</p>}
					</Link>
				</div>
			</div>
			<div className="nav-footer d-none d-md-block">
				<IoIosLogOut onClick={handleLogout} className="footer-logout mx-auto cursor-pointer"/>
			</div>
		</div>
	);
};

export default SideNavBar;
