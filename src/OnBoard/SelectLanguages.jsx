import React, { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';

const SelectMultiotion = () => {
    const [options, setOptions] =useState(['English','Hindi','Panjabi','Gujrati','Tamil','Bangali','Malyalam','Nepali']) ;
  return (
    <>
        
        <Multiselect
        isObject={false}
        options= { options }
        showCheckbox
        showArrow
        className='l-l'
        placeholder="Select language"
        
        />
    </>
  )
}

export default SelectMultiotion