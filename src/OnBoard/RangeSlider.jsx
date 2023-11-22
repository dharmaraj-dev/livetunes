import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import Mrange from '../assets/images/mrange.png';
import { useDispatch, useSelector } from "react-redux";
import {setSettingsMinBudget, setSettingsMaxBudget} from '../redux/userSettings';

const RangeSlider = () => {
    const dispatch = useDispatch();
    const { userMinimumBudget, userMaximumBudget} = useSelector(state => state.userSettings);
    const {user} = useSelector(state => state.userAuth);

    const handleChange = (e) => {
        dispatch(setSettingsMinBudget(e.minValue));
        dispatch(setSettingsMaxBudget(e.maxValue));
    };

  return (
    <>
        <div className="range-slider postion-r">
            <MultiRangeSlider
                min={5000}
                max={100000}
                step={10000}
                stepOnly= 'true'
                minValue={userMinimumBudget}
                maxValue={userMaximumBudget}
                // label='false'
                ruler='false'
                barLeftColor='#F13743'
                barInnerColor='#fff'
                barRightColor='#F13743'
                thumbLeftColor='#fff'
                thumbRightColor='#fff'
                onChange={(e)=>{
                    handleChange(e);
                }}
            />
            <img className="m-range" src={Mrange} alt="" />
            <div className="show-range">
                <h2 className="head">Budget Range</h2>
                <div className="range-from-to">
                    <div>
                        <span className="l-r inner-text">From</span>
                        <h2 className="range-value"><span className="rupee-sign">&#8377;</span> {userMinimumBudget} </h2>
                    </div>
                    <div>
                        <span className="l-r inner-text">To</span>
                        <h2 className="range-value"><span className="rupee-sign">&#8377;</span> {userMaximumBudget} </h2>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default RangeSlider