import React from 'react';
import Rupee from '../assets/images/rupee.png';
import { useSelector } from 'react-redux';

const ValueCard = () => {
  const {slots} = useSelector(state => state.artistSlots);
  const {details} = useSelector(state => state.artistDetails);
  console.log(slots);
  return (
    <>
        <div className="value-card d-flex">
            <div>
                <img src={Rupee} alt="" />
            </div>
            <div>
                <span className="l-b value-card-text red-color me-2">Rs {details.selAPDetails.ToCharge+20000}</span>
                <span className="l-b value-card-text">Rs {details.selAPDetails.ToCharge}</span>
                <span className="value-text">/Show</span>
                <p className="value-text mb-0">(Inclusive additional charge)</p>
            </div>
        </div>
    </>
  )
}

export default ValueCard