import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Stack from 'react-bootstrap/Stack';
import { SlSettings } from "react-icons/sl";
import { Tabs, Tab, Badge } from "react-bootstrap";
import Avtar from '../assets/images/like-img.png';
import { GoPrimitiveDot } from "react-icons/go";
import { Link } from "react-router-dom";

const NotificationSec = () => {
    const [checked, setChecked] = useState(false);
  return (
    <>
        <div className="noti-head-sec">
            <Stack direction="horizontal" gap={4}>
            <div className=""><h2>Notifications</h2></div>
            <div className="l-r ms-auto mark-all-read">
                <ButtonGroup className="mb-2">
                    <ToggleButton
                    id="toggle-check"
                    type="checkbox"
                    checked={checked}
                    variant="outline-primary"
                    value="1"
                    onChange={(e) => setChecked(e.currentTarget.checked)}
                    >
                    Mark all read
                    </ToggleButton>
                </ButtonGroup>
                
            </div>
            <div className="setting-ico cursor-pointer">
                <SlSettings/>
            </div>
            </Stack>
        </div>
        <div className="noti-tab-sec">
            <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-1">
                <Tab eventKey="all" title={
                    <React.Fragment> All <Badge>2</Badge>  </React.Fragment>
                    }
                >
                    <div className="inner-noti-tab-sec">
                        <Stack direction="horizontal" gap={3}>
                            <div className="">
                                <h2 className="head">New</h2>
                            </div>
                            <div className="ms-auto see-all-text  l-sb">
                                <Link to="/notifications">
                                <span className="red-color">See all</span>
                                </Link>
                            </div>
                        </Stack>
                                
                        <div className="inner-msg-sec">
                            <Stack direction="horizontal" gap={3}>
                            <div className="img-sec">
                                <img src={Avtar} alt="" className="w-100" />
                            </div>
                            <div className="l-sb">
                                <span className="name-head">Remainder: Wedding Sangeet with Sameer Singh in Mumbai at 7:00 PM</span><br>
                                </br>
                                <span className="l-r time-ago">2 min ago</span>
                                </div>
                            <div className=" ms-auto"><GoPrimitiveDot className="red-color" size={30}/></div>
                            </Stack>
                        </div>
                        <div className="inner-msg-sec">
                            <Stack direction="horizontal" gap={3}>
                            <div className="img-sec">
                                <img src={Avtar} alt="" className="w-100" />
                            </div>
                            <div className="l-sb">
                                <span className="name-head">Remainder: Wedding Sangeet with Sameer Singh in Mumbai at 7:00 PM</span><br>
                                </br>
                                <span className="l-r time-ago">2 min ago</span>
                                </div>
                            <div className=" ms-auto"><GoPrimitiveDot className="red-color" size={30}/></div>
                            </Stack>
                        </div>
                    </div>
                    <div className="inner-noti-tab-sec">
                        <h2 className="head">Earlier</h2>        
                        <div className="inner-msg-sec">
                            <Stack direction="horizontal" gap={3}>
                            <div className="img-sec">
                                <img src={Avtar} alt="" className="w-100" />
                            </div>
                            <div className="l-sb">
                                <span className="name-head">Connection request: Artist Sameer Singh wants to connect with you.</span><br>
                                </br>
                                <span className="l-r time-ago">2 min ago</span>
                            </div>
                            <div className="ms-auto">
                                <button type="button" class="l-r wbtnn btn btn-primary red-bg">Accept</button>
                                <button type="button" class="l-r wbtnn btn btn-primary">Reject</button>
                            </div>
                            </Stack>
                        </div>
                        <div className="inner-msg-sec">
                            <Stack direction="horizontal" gap={3}>
                            <div className="img-sec">
                                <img src={Avtar} alt="" className="w-100" />
                            </div>
                            <div className="l-sb">
                                <span className="name-head">Connection request: Artist Sameer Singh wants to connect with you.</span><br>
                                </br>
                                <span className="l-r time-ago">2 min ago</span>
                            </div>
                            <div className="ms-auto">
                                <button type="button" class="l-r wbtnn btn btn-primary red-bg">Accept</button>
                                <button type="button" class="l-r wbtnn btn btn-primary">Reject</button>
                            </div>
                            </Stack>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="bookings" title={
                    <React.Fragment> Booking <Badge>4</Badge>  </React.Fragment>
                    }>
                    <div className="inner-noti-tab-sec">
                        <h2 className="head">New</h2>        
                        <div className="inner-msg-sec">
                            <Stack direction="horizontal" gap={3}>
                            <div className="img-sec">
                                <img src={Avtar} alt="" className="w-100" />
                            </div>
                            <div className="l-sb">
                                <span className="name-head">Remainder: Wedding Sangeet with Sameer Singh in Mumbai at 7:00 PM</span><br>
                                </br>
                                <span className="l-r time-ago">2 min ago</span>
                                </div>
                            <div className=" ms-auto"><GoPrimitiveDot className="red-color" size={30}/></div>
                            </Stack>
                        </div>
                    </div>
                    <div className="inner-noti-tab-sec">
                        <h2 className="head">Earlier</h2>        
                        <div className="inner-msg-sec">
                            <Stack direction="horizontal" gap={3}>
                            <div className="img-sec">
                                <img src={Avtar} alt="" className="w-100" />
                            </div>
                            <div className="l-sb">
                                <span className="name-head">Connection request: Artist Sameer Singh wants to connect with you.</span><br>
                                </br>
                                <span className="l-r time-ago">2 min ago</span>
                            </div>
                            <div className="ms-auto">
                                <button type="button" class="l-r wbtnn btn btn-primary red-bg">Accept</button>
                                <button type="button" class="l-r wbtnn btn btn-primary">Reject</button>
                            </div>
                            </Stack>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="unread" title={
                    <React.Fragment> Following <Badge>5</Badge>  </React.Fragment>
                    }>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, expedita deleniti! Neque quaerat.</p>
                </Tab>
            </Tabs>
        </div>
    </>
  )
}

export default NotificationSec