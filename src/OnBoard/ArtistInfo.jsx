import React from 'react';
import Avtar from '../assets/images/avtar.png';
import Stack from 'react-bootstrap/Stack';
import Octicons from '../assets/images/octicons.png';
import { BsFillStarFill } from "react-icons/bs";
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

const ArtistInfo = () => {
  const {artistInfo} = useSelector(state => state.user);
  // console.log(artistInfo);
  return (
    <>
      
    </>
  )
}

export default ArtistInfo