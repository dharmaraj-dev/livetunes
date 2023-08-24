import React, { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import { useDispatch, useSelector } from "react-redux";
import {setSelectedCities} from "../actions/user";


const SelectCity = () => {
    const dispatch = useDispatch();
    const { cities } = useSelector(state => state.common );
    //const [options] =useState(['Nagpur','Pune','Mumbai','Banglore','Hydrabad','Jaipur','Delhi','Lucknow']) ;
    const { userSelectedCities } = useSelector(state => state.user);
    const selectCity = (selectedList, selectedItem) => {
      dispatch(setSelectedCities(selectedList));
    }

    const removeCity = (selectedList, removedItem) => {
        dispatch(setSelectedCities(selectedList));
    }

  return (
    <>
        <Multiselect
        isObject={true}
        options= { cities?.filter((key) => !key.IsCancelled) }
        showCheckbox
        showArrow
        className='l-l'
        placeholder="Select City"
        displayValue="CityName"
        onSelect={selectCity}
        onRemove={removeCity}
        selectedValues={userSelectedCities}
        />
    </>
  )
}

export default SelectCity