import React, { useState,useEffect } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import { useDispatch, useSelector } from "react-redux";
import {setSelectedLanguages} from "../actions/user";

const SelectMultiotion = () => {
    const dispatch = useDispatch();
    const { languages } = useSelector(state => state.common);
    const { userSelectedLanguages } = useSelector(state => state.user);
    console.log(languages)
    //const [options] =useState(['English','Hindi','Panjabi','Gujrati','Tamil','Bangali','Malyalam','Nepali']) ;
    const selectLanguage = (selectedList, selectedItem) => {
      dispatch(setSelectedLanguages(selectedList));
    }

  const removeLanguage = (selectedList, removedItem) => {
      dispatch(setSelectedLanguages(selectedList));
  }
    useEffect(()=>
    {
      console.log(userSelectedLanguages)
    },[])

  return (
    <>
        
        <Multiselect
        isObject={true}
        options= { languages?.filter((key) => !key.IsCancelled) }
        showCheckbox
        showArrow
        className='l-l'
        placeholder="Select language"
        displayValue="LanguageName"
        onSelect={selectLanguage}
        onRemove={removeLanguage}
        selectedValues={userSelectedLanguages}
        />
    </>
  )
}

export default SelectMultiotion