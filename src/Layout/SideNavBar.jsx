import React, { useState, useEffect } from "react";
import Sitelogo from '../assets/images/logo.png';
import Minisitelogo from '../assets/images/mini-logo.png';
import {GoDashboard } from "react-icons/go";
import {TfiMicrophoneAlt, TfiHeart, TfiUser } from "react-icons/tfi";
import { IoTicketOutline } from "react-icons/io5";
import { SlSettings } from "react-icons/sl";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoIosLogOut } from "react-icons/io";
import { BsChevronDoubleRight } from "react-icons/bs";
import { BsChevronDoubleLeft } from "react-icons/bs";
import Gaudio from '../assets/images/guitar.mp3';
import { Link } from "react-router-dom";
import { logout } from "../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';
import { LOGOUT, STATE_RESET } from "../actions/types";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { authToken } from "../services/auth-header";

const SideNavBar = () => {
	const dispatch = useDispatch();
	let navigate = useNavigate();
	const MySwal = withReactContent(Swal);
	const { joiningType } = useSelector((state) => state.auth);

	const audio = new Audio(Gaudio);
	const [isExpanded, setExpendState] = useState(false);

	const [menuItemsDynamic, setMenuItemsDynamic] = useState([
				{
					text: "Dashboard",
					icon: <GoDashboard className="menu-item-icon"/>,
					links: "/"
				}
			]);

	useEffect(() => {
		if(joiningType ===  "Artist") {
			setMenuItemsDynamic([
				{
					text: "Dashboard",
					icon: <GoDashboard className="menu-item-icon"/>,
					links: "/artistdashboard"
				},
				{
					text: "Find Artist",
					icon: <TfiUser className="menu-item-icon"/>,
					links: "/artists-profile"
				},
				{
					text: "Settings ",
					icon: <SlSettings className="menu-item-icon"/>,
					links: "/artists-bank-details"
				}
			]);
		} else if(joiningType ===  "Judge") {
			setMenuItemsDynamic([
				{
					text: "Dashboard",
					icon: <GoDashboard className="menu-item-icon"/>,
					links: "/judgment-panel"
				}
			]);
		}
	}, [])


	const handleLogout = () => {
		MySwal.fire({
          title: '<strong>Are you sure!!</strong>',
          icon: 'warning',
          html:
            'Do you want to logout?',
          showDenyButton: true,
          confirmButtonText: 'Yes',
          denyButtonText: `No`,
          showLoaderOnConfirm: true,
          // preConfirm: () => {
          //   // return dispatch(logout(authToken)).then((response) => {
          //   //     if(response.data.IsSuccess) {
          //   //         dispatch({
		// 	//             type: LOGOUT,
		// 	//           });
		// 	// 		navigate("/login");
          //   //         return response;
          //   //     } else {
          //   //         throw new Error(response.data.Message);
          //   //         Swal.fire(response.data.Message, '', 'error');
          //   //         navigate("/login");
          //   //     }
          //   // }).catch((err) => {
          //   // 	navigate("/");
          //   // })
          // },
          allowOutsideClick: () => false
        }).then((result) => {
            console.log('result', result);  
          if (result.isConfirmed && result.value) {
          		dispatch(logout(authToken()));
          		dispatch({
		            type: LOGOUT,
	          	});
	          	// dispatch({
		          //   type: STATE_RESET,
	          	// });
                Swal.fire('Successfully logout.', '', 'success');
                navigate("/login");
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
					
						<span onClick={() => {audio.play();}}>
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
						<Link
							key={text+'_'+links}
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX "}
							to={links} 
						>{/* Add active class */}
						
							{icon}
							{isExpanded && <p className="l-sb">{text}</p>}
						</Link>
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
