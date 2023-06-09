import React from "react";
import NavBar from "./NavBar";
import SideNavBar from "./SideNavBar";
import Container from 'react-bootstrap/Container';

const ListApplication = () => {
  return (
    <>
        <div className="wrapper">
            <div className="sidebar">
            <SideNavBar />
            </div>
            <div className="main">
            <div className="header">
                <NavBar />
            </div>
            <div className="main-content">
                <Container fluid>
                    
                </Container>
            </div>
            </div>
        </div>
    </>
  )
}

export default ListApplication