import React, { useState } from "react";
import Sitelogo from '../assets/images/logo.png';
import Minisitelogo from '../assets/images/mini-logo.png';
import {GoDashboard } from "react-icons/go";
import {TfiMicrophoneAlt, TfiHeart } from "react-icons/tfi";
import { IoTicketOutline } from "react-icons/io5";
import { SlSettings } from "react-icons/sl";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoIosLogOut } from "react-icons/io";
import { BsChevronDoubleRight } from "react-icons/bs";
import { BsChevronDoubleLeft } from "react-icons/bs";
import Gaudio from '../assets/images/guitar.mp3';

const SideNavBar = () => {
	const audio = new Audio(Gaudio);
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Dashboard",
			icon: <GoDashboard className="menu-item-icon"/>,
		},
		{
			text: "Find Artist",
			icon: <TfiMicrophoneAlt className="menu-item-icon"/>,
		},
		{
			text: "Favourites",
			icon: <TfiHeart className="menu-item-icon"/>,
			links: "/favourites"
		},
		{
			text: "Bookings",
			icon: <IoTicketOutline className="menu-item-icon"/>,
			links: "/bookings"
		},
		{
			text: "Settings ",
			icon: <SlSettings className="menu-item-icon"/>,
			links: "/settings"
		},
		{
			text: "Support",
			icon: <TfiHeadphoneAlt className="menu-item-icon"/>,
		},
	];
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
					{menuItems.map(({ text, icon, links }) => (
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX "}
							href={links} 
						>{/* Add active class */}
						
							{icon}
							{isExpanded && <p className="l-sb">{text}</p>}
						</a>
					))}
				</div>
			</div>
			<div className="nav-footer">
				<IoIosLogOut className="footer-logout mx-auto cursor-pointer"/>
			</div>
		</div>
	);
};

export default SideNavBar;
