import React, { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';

const SelectCity = () => {
    const [options] =useState(['Nagpur','Pune','Mumbai','Banglore','Hydrabad','Jaipur','Delhi','Lucknow']) ;
  return (
    <>
        <Multiselect
        isObject={false}
        options= { options }
        showCheckbox
        showArrow
        className='l-l'
        placeholder="Select City"
        
        />
    </>
  )
}

export default SelectCity