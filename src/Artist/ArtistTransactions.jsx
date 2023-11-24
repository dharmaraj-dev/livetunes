import React from 'react';
import Avtar from '../assets/images/like-img.png';
import Stack from 'react-bootstrap/Stack';
import Skeleton from "react-loading-skeleton";

const ArtistTransactions = (props) => {
    console.log(props)
  return (
    <>
    {props.loading ? (
        <div className="inner-transactions-sec">
            <Stack direction="horizontal" gap={3}>
            <div className="img-sec">
                <Skeleton width="60px" circle={true} height="60px"/>
            </div>
            <div className="l-sb">
                <span className="name-head l-b">
                    <Skeleton width="100px" height="30px"/>
                </span>
                <span className="l-sb sub-head">
                    <Skeleton width="100px" height="20px"/>
                </span>
                <span className="l-r sub-head">
                    <Skeleton width="100px" height="15px"/>
                </span>
                </div>
            <div className="name-head ms-auto red-color l-b">
                <Skeleton width="30px" height="20px"/>
            </div>
            </Stack>
        </div>
    ):(
        props?.data?.map((event,index) => {
            return (
                <div key={`event_${index}`} className="inner-transactions-sec">
                    <Stack direction="horizontal" gap={3}>
                    <div className="img-sec">
                        <img src={event.ProfileURL} alt="" className="w-100 img-round" />
                    </div>
                    <div className="l-sb">
                        <span className="name-head l-b">{event.UserName === "" ? "NA" : event.UserName}</span><br>
                        </br>
                        <span className="l-sb sub-head">{event.EventType}</span><br>
                        </br>
                        <span className="l-r sub-head">Date: {event.EventDateDisplay}</span>
                        </div>
                    <div className="name-head ms-auto red-color l-b">{event.BillAmt}-</div>
                    </Stack>
                </div>
            )
        })
    )}
     </>
  )
}

export default ArtistTransactions