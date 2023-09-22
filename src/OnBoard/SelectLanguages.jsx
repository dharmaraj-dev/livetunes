import React, { useState,useEffect } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import { useDispatch, useSelector } from "react-redux";
import {setLanguages} from "../redux/userSettings";

const SelectMultiotion = () => {
    const dispatch = useDispatch();
    const { languages } = useSelector(state => state.common);
    const { userSelectedLanguages } = useSelector(state => state.user);
    console.log(languages)
    const selectLanguage = (selectedList, selectedItem) => {
      dispatch(setLanguages(selectedList));
    }

  const removeLanguage = (selectedList, removedItem) => {
      dispatch(setLanguages(selectedList));
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