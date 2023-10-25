import React from 'react';
import Multiselect from 'multiselect-react-dropdown';
import { useDispatch, useSelector } from "react-redux";
import {setLanguages} from "../redux/userSettings";

const SelectMultiotion = () => {
    const dispatch = useDispatch();
    const { languages } = useSelector(state => state.common);
    const { selectedLanguages } = useSelector(state => state.userSettings);

    const selectLanguage = (selectedList, selectedItem) => {
      dispatch(setLanguages(selectedList));
    }

  const removeLanguage = (selectedList, removedItem) => {
      dispatch(setLanguages(selectedList));
  }


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
        selectedValues={selectedLanguages}
        />
    </>
  )
}

export default SelectMultiotion