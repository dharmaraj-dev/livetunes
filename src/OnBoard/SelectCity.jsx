import React, { useEffect, useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import { useDispatch, useSelector } from "react-redux";
import {setSelectedCities} from "../actions/user";

const SelectCity = () => {
    const dispatch = useDispatch();
    const { cities,states } = useSelector(state => state.common );
    const [isStateSelected,setIsStateSelected] = useState(false);
    const [selectedStateId,setSelectedStateId] = useState(-1);
    //const [options] =useState(['Nagpur','Pune','Mumbai','Banglore','Hydrabad','Jaipur','Delhi','Lucknow']) ;
    const { userSelectedCities } = useSelector(state => state.user);
    const selectCity = (selectedList, selectedItem) => {
      dispatch(setSelectedCities(selectedList));
    }

    const removeCity = (selectedList, removedItem) => {
        dispatch(setSelectedCities(selectedList));
    }

    const selectState = (selectedList,selectedItem) => {
      setIsStateSelected(true);
      setSelectedStateId(selectedItem.StateId);
    }

    useEffect(()=>{
      setIsStateSelected(false);
    },[]);

  return (
    <>
        <Multiselect
        isObject={true}
        options= { states?.filter((key) => !key.IsCancelled) }
        showArrow
        placeholder="Select State"
        displayValue="StateName"
        onSelect={selectState}
        singleSelect = {true}
        />

        {
          isStateSelected ? (
            <Multiselect
              isObject={true}
              options= { cities?.filter((key) => !key.IsCancelled).filter((city)=>city.StateId === selectedStateId) }
              showCheckbox
              showArrow
              className='l-l'
              placeholder="Select City"
              displayValue="CityName"
              onSelect={selectCity}
              onRemove={removeCity}
              selectedValues={userSelectedCities}
            />
          ) : (
            <>
            </>
          )
        }

        
    </>
  )
}

export default SelectCity