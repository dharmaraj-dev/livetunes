import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import Mrange from '../assets/images/mrange.png';

const RangeSlider = () => {
    const [minValue, set_minValue] = useState(5000);
    const [maxValue, set_maxValue] = useState(250000);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };

  return (
    <>
        <div className="range-slider postion-r">
            <MultiRangeSlider
                min={5000}
                max={250000}
                step={10000}
                stepOnly= 'true'
                minValue={minValue}
                maxValue={maxValue}
                // label='false'
                ruler='false'
                barLeftColor='#F13743'
                barInnerColor='#fff'
                barRightColor='#F13743'
                thumbLeftColor='#fff'
                thumbRightColor='#fff'
                onInput={(e) => {
                    handleInput(e);
                }}
            />
            <img className="m-range" src={Mrange} alt="" />
            <div className="show-range">
                <h2 className="head">Budget Range</h2>
                <div className="range-from-to">
                    <div>
                        <span className="l-r inner-text">From</span>
                        <h2 className="range-value"><span className="rupee-sign">&#8377;</span> {minValue} </h2>
                    </div>
                    <div>
                        <span className="l-r inner-text">To</span>
                        <h2 className="range-value"><span className="rupee-sign">&#8377;</span> {maxValue} </h2>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default RangeSlider