import React, { useEffect } from 'react';
import Avtar from '../assets/images/avtar.png';
import Stack from 'react-bootstrap/Stack';
import Skeleton from 'react-loading-skeleton'
import Octicons from '../assets/images/octicons.png';
import { BsFillStarFill } from "react-icons/bs";
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import {fetchArtistDetails} from '../redux/artistDetailsSlice'
import { useDispatch } from 'react-redux';

const ArtistInfo = ({loading, artistId}) => {
  const dispatch = useDispatch();
  const {artistInfo} = useSelector(state => state.user);
  const {details} = useSelector(state => state.artistDetails);
  const {user} = useSelector(state => state.auth);
  useEffect(()=>{
    console.log(artistId);
    dispatch(fetchArtistDetails(artistId,user.RegId));
  },[]);
  // console.log(artistInfo);
  return (
    <>
      <div className="inner-artist-info postion-r">
      {loading ? (
        <>
          <div className="avtar-img">
              <Skeleton className="" width="100px" height="100px" count={1} circle={true}  />
          </div>
          <div className="s-artist-detail">
            <Skeleton className="name l-b" width="150px" count={1}  />
            <Skeleton className="l-r locotion" width="150px" count={1}  />
            <Stack direction="horizontal" gap={2} className="d-inline-flex">
                <div className="l-r">
                  <Skeleton className="" width="100px" count={1}  />
                </div>
                <Skeleton className="count-review l-r cursor-pointer" width="100px" count={1}  />
            </Stack>
        </div>
        </>
      ):(
        <>
          <div className="avtar-img">
              <img src={details?.selProfileImage?.length > 0 ? details?.selProfileImage[0]?.LTMediaURL : Avtar} alt="" className="w-100" />
          </div>
          <div className="s-artist-detail">
            <p className="name l-b">{details?.selApInfo.FullName} <span><img src={Octicons} alt="" style={{width:26}} /></span></p>
            <p className="l-r locotion">{details?.selApInfo.CityName}, {details?.selApInfo.StateName}</p>
            <Stack direction="horizontal" gap={2} className="d-inline-flex">
                <div className="star-rate-sec l-r">
                <span><BsFillStarFill className="star-class"/></span>
                <span>4</span>
                <span>/</span>
                <span>5</span>
                </div>
                <div className="count-review l-r cursor-pointer">2 Reviews</div>
            </Stack>
        </div>
        </>
      )}
      </div>
    </>
  )
}

export default ArtistInfo