import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const BreadCrumbs = () => {
  return (
    <>
        <Breadcrumb>
        <Breadcrumb.Item href="#">Bookings</Breadcrumb.Item>
        <Breadcrumb.Item href="#">
            Weddings
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Solo Artists</Breadcrumb.Item>
        </Breadcrumb>
    </>
  )
}

export default BreadCrumbs