import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Art from '../assets/images/art.png';
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const MoveCart = (props) => {
  return (
    <>
        <div className="cart-details-box postion-r cart-move-box">
            {props.loading ? (
                <div className="d-flex">
                    <Skeleton className="img-sec" count={1}  />
                    <div className="inner-artist-detail">
                        <h4 className="l-sb">
                            <Skeleton className="l-sb" width="150px" count={1}  />
                        </h4>
                        <div className="value-sec l-b red-color">
                            <span>
                                <Skeleton className="" width="100px" count={1}  />
                            </span>
                        </div>
                        <Stack direction="horizontal" gap={3}>
                            <div className="l-r sub-head">
                                <Skeleton className=""  width="100px"count={1}  />
                            </div>
                            <div className="l-r sub-head">
                                <Skeleton className="" width="100px" count={1}  />
                            </div>
                        </Stack>
                        <Stack direction="horizontal" gap={3}>
                            <div className="l-r sub-head">
                                <Skeleton className="" width="100px" count={1}  />
                            </div>
                            <div className="l-sb sub-head">
                                <Skeleton className="" width="100px" count={1}  />
                            </div>
                        </Stack>
                        
                        <Stack direction="horizontal" gap={3}>
                            <div className="l-r sub-head">
                                <Skeleton className="" width="100px" count={1}  />
                            </div>
                            <div className="l-sb sub-head">
                                <Skeleton className="" width="100px" count={1}  />
                            </div>
                        </Stack>

                        <Stack direction="horizontal" gap={3}>
                            <div className="l-r sub-head">
                                <Skeleton className="w-100" width="100px" count={1}  />
                            </div>
                            <div className="l-r sub-head">
                                <Skeleton className="w-100" width="100px" count={1}  />
                            </div>
                        </Stack>

                        <Stack direction="horizontal" gap={3}>
                            <div className="l-r sub-head">
                                <Skeleton className="" width="100px" count={1}  />
                            </div>
                            <div className="l-r sub-head">
                                <Skeleton className="" width="100px" count={1}  />
                            </div>
                        </Stack>
                        <Stack direction="horizontal" gap={3}>
                            <div className="l-r sub-head">
                                <Skeleton className="" width="100px" count={1}  />
                            </div>
                            <div className="l-r sub-head">
                                <Skeleton className=""  width="100px" count={1}  />
                            </div>
                        </Stack>
                    </div>
                </div>
            ):(
            <>
                <div className="d-flex">
                    <div className="img-sec">
                        <img src={Art} alt="" className="w-100"/>
                    </div>
                    <div className="inner-artist-detail">
                        <h4 className="l-sb">{props.data.ArtistName}</h4>
                        <div className="value-sec l-b red-color"><span>Rs {props.data.PerShowRate}</span></div>
                        <Stack direction="horizontal" gap={3}>
                        <div className="l-r sub-head">Location :</div>
                        <div className="l-r sub-head">{props.data.CityName} , {props.data.StateName}</div>
                        </Stack>
                        <Stack direction="horizontal" gap={3}>
                        <div className="l-r sub-head">Event type :</div>
                        <div className="l-sb sub-head">
                         {props.data.EventType}
                        </div>
                        </Stack>
                        
                        <Stack direction="horizontal" gap={3}>
                        <div className="l-r sub-head">Event date :</div>
                        <div className="l-sb sub-head">
                         {props.data.EventDateDisplay}
                        </div>
                        </Stack>

                        <Stack direction="horizontal" gap={3}>
                        <div className="l-r sub-head">Event time :</div>
                        <div className="l-r sub-head">
                            {props.data.SlotTime}
                        </div>
                        </Stack>

                        <Stack direction="horizontal" gap={3}>
                        <div className="l-r sub-head">Event days :</div>
                        <div className="l-r sub-head">
                            {props.data.EventDays}
                        </div>
                        </Stack>
                        <Stack direction="horizontal" gap={3}>
                        <div className="l-r sub-head">Event duration :</div>
                        <div className="l-r sub-head">
                            1hr
                        </div>
                        </Stack>
                    </div>
                </div>
                <div className="cart-footer">
                    <Stack direction="horizontal" gap={3}>
                    <div className="ms-auto">
                        <button type="button" className="l-b wbtnn btn btn-primary w-100 red-color">Remove</button>
                    </div>
                    <div className="">
                        <Link to={`/cart/${btoa(props.data.TransactId)}`}>
                        <button type="button" className="l-b wbtnn btn btn-primary w-100">Move to cart</button>
                        </Link>
                    </div>
                    </Stack>
                </div>
            </>
            )}
        </div>
    </>
  )
}

export default MoveCart