import React, { useEffect } from 'react';
import Avtar from '../assets/images/avtar.png';
import Stack from 'react-bootstrap/Stack';
import Skeleton from 'react-loading-skeleton'
import Octicons from '../assets/images/octicons.png';
import { BsFillStarFill } from "react-icons/bs";
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

const ArtistInfoForDashboard = ({loading, artistDetails}) => {
  const dispatch = useDispatch();
  
  useEffect(()=>{
  },[]);

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
              <img src={artistDetails?.ArtistProfileImg !== "" ? artistDetails?.ArtistProfileImg : Avtar} alt="" className="w-100" />
          </div>
          <div className="s-artist-detail">
            <p className="name l-b">{artistDetails?.ArtistName} <span><img src={Octicons} alt="" style={{width:26}} /></span></p>
            <p className="l-r locotion">{artistDetails?.ArtistCity}, {artistDetails?.ArtistState}</p>
            <Stack direction="horizontal" gap={2} className="d-inline-flex">
                <div className="star-rate-sec l-r">
                <span><BsFillStarFill className="star-class"/></span>
                <span>{(artistDetails?.Rating != "" && artistDetails?.Rating != null) ? artistDetails?.Rating : 0}</span>
                <span>/</span>
                <span>5</span>
                </div>
                <div className="count-review l-r cursor-pointer">{artistDetails?.ReviewNarr}</div>
            </Stack>
        </div>
        </>
      )}
      </div>
    </>
  )
}

export default ArtistInfoForDashboard