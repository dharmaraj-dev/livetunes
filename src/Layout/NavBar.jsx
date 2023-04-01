import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from "react-bootstrap/Navbar";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { IoSearchOutline } from "react-icons/io5";
import { TfiBell } from "react-icons/tfi";
import Profile from '../assets/images/profile-img.png';
import NotificationSec from "../Notification/NotificationSec";
import { SlSettings } from "react-icons/sl";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar>
        <Container fluid>
            <Form className="top-search">
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
                  <li className="nav-item">
                    <Link to="/settings">
                      <div className="setting-ico cursor-pointer">
                          <SlSettings/>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                  <DropdownButton align="end" id="dropdown-menu-align-end" className="notification-class dropdown-menu-lg" title={<TfiBell className="white-color bell"/>}>
                    <Dropdown.ItemText>
                      <NotificationSec/>
                    </Dropdown.ItemText>
                  </DropdownButton>
                  </li>
                  <li className="nav-item">
                    <Link to="/artistprofiles">
                    <div className="profile-class">
                      <img src={Profile} alt="" />
                    </div>
                    </Link>
                  </li>
                </ul>
            </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
