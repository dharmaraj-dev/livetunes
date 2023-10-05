import React from 'react';
import Rupee from '../assets/images/rupee.png';
import { useSelector } from 'react-redux';
import Skeleton from "react-loading-skeleton";

const ValueCard = ({loading, artistDetails}) => {
  
  return (
    <>
        {loading ? (
            <div className="w-100">
                <Skeleton className="value-card" height="130px" count={1}  />
            </div>
        ):(
            <div className="value-card d-flex">
                <div>
                    <img src={Rupee} alt="" />
                </div>
                <div>
                    <span className="l-b value-card-text red-color me-2">Rs {artistDetails.selAPDetails.FromCharge+20000} - Rs {artistDetails.selAPDetails.ToCharge+20000}</span>
                    <br />
                    <span className="l-b value-card-text">Rs {artistDetails.selAPDetails.FromCharge} - Rs {artistDetails.selAPDetails.ToCharge}</span>
                    <span className="value-text">{`${artistDetails.selAPDetails.IsPerShow ? '/Show' : '/Hour'}`}</span>
                    <p className="value-text mb-0">( Exclusive additional charge<sup className="red-color">*</sup> )</p>
                </div>
            </div>
        )}
    </>
  )
}

export default ValueCard