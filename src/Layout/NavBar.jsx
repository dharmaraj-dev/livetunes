import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from "react-bootstrap/Navbar";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { IoSearchOutline } from "react-icons/io5";
import { TfiBell } from "react-icons/tfi";
import NotificationSec from "../Notification/NotificationSec";
import { SlSettings } from "react-icons/sl";
import { Link } from "react-router-dom";
import DefaultProfile from "../assets/images/default_profile.jpeg";
import { useDispatch, useSelector } from "react-redux";
import useLoginCheck from "../hooks/useLoginCheck";
import useApplicationStatusCheck from "../hooks/useApplicationStatusCheck";

const NavBar = () => {
  const { showLoginAlert } = useLoginCheck();
  const { showApplicationAlert } = useApplicationStatusCheck();

  const { artistProfileData } = useSelector(state => state.artist);
  const { isLoggedIn, joiningType, ArtistIsNotSubmitted, ArtistIsPending } = useSelector((state) => state.userAuth);
  const { profileData, profileDataLoading} = useSelector(state => state.userProfile);

  const [profilePic, setProfilePic] = useState(DefaultProfile);

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

  useEffect(() => {
    if(artistProfileData?.selProfileImage?.length > 0) {
        setProfilePic(artistProfileData?.selProfileImage[0].LTMediaURL);
    }
  }, [artistProfileData])

  return (
    <>
      <Navbar>
        <Container fluid>
            <Form className="top-search" style={{"visibility": "hidden"}}>
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 l-r"
                aria-label="Search"
                />
                <Button  variant="outline-success" className="top-search-button"><IoSearchOutline/></Button>
            </Form>
            <div className="justify-content-end d-flex top-right-menu">
                <ul className="navbar-nav">
                  {joiningType === "User" && (
                  <li className="nav-item">
                    {!isLoggedIn ? (
                      <Link onClick={showLoginAlert}>
                        <div className="setting-ico cursor-pointer">
                            <SlSettings/>
                        </div>
                      </Link>
                    ):(
                      <Link to="/settings">
                        <div className="setting-ico cursor-pointer">
                            <SlSettings/>
                        </div>
                      </Link>
                    )}
                  </li>
                  )}
                  {/*<li className="nav-item">
                  <DropdownButton align="end" id="dropdown-menu-align-end" className="notification-class dropdown-menu-lg" title={<TfiBell className="white-color bell"/>}>
                    <Dropdown.ItemText>
                      <NotificationSec/>
                    </Dropdown.ItemText>
                  </DropdownButton>
                  </li>*/}
                  {(joiningType === "Artist" )&& (
                  <li className="nav-item">
                    {!isLoggedIn ? (
                      <Link onClick={showLoginAlert}>
                        <div className="profile-class">
                          <img src={profilePic} alt="" />
                        </div>
                      </Link>
                    ):(
                      (ArtistIsNotSubmitted || ArtistIsPending) ? (
                        <Link onClick={()=> {showApplicationAlert(alertTitle, alertDesc)}}>
                          <div className="profile-class">
                            <img src={profilePic} alt="" />
                          </div>
                        </Link>
                      ) : (
                      <Link to="/my-profile">
                        <div className="profile-class">
                          <img src={profilePic} alt="" />
                        </div>
                      </Link>
                      )
                    )}
                  </li>
                  )}
                  {(joiningType === "User" )&& (
                  <li className="nav-item">
                    {!isLoggedIn ? (
                      <Link onClick={showLoginAlert}>
                        <div className="profile-class">
                          {profileDataLoading ? (
                            <span className="spinner-border spinner-border-sm"></span>
                          ):(
                            <img src={profileData.profileImg != "" ? profileData.profileImg : profilePic} alt="" />
                          )}
                        </div>
                      </Link>
                    ):(
                      <Link to="/profile">
                        <div className="profile-class">
                          <img src={profileData.profileImg != "" ? profileData.profileImg : profilePic} alt="" />
                        </div>
                      </Link>
                    )}
                  </li>
                  )}
                </ul>
            </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
