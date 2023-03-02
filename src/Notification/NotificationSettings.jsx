import React, { useState} from 'react';
import Stack from "react-bootstrap/Stack";
import Accordion from 'react-bootstrap/Accordion';
import Switch from "react-switch";
import { RxCrossCircled } from "react-icons/rx";
import Notifiimg from '../assets/images/notifiimg.png';

const NotificationSettings = () => {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };
  const handleChange2 = nextChecked => {
    setChecked2(nextChecked);
  };
  const handleChange3 = nextChecked => {
    setChecked3(nextChecked);
  };

  return (
    <>
        <div className="cart-details-box  login-setting-cart">
          <div className="cart-header">
            <Stack direction="horizontal" gap={5}>
              <h4 className="l-sb">Notification settings</h4>
            </Stack>
          </div>
          <div className="d-inline-flex postion-r gap-3" style={{zIndex: "4"}}>
            <div className="ico-img">
                <img src={Notifiimg} alt="" />
            </div>
            <div className="">
                <h5 className="l-sb mb-1 head">Notification View</h5>
                <Stack direction="horizontal" gap={1}>
                <div className="l-r sub-head fs-6">Select the type of notification you would like to get</div>
                </Stack>
            </div>
          </div>
            <Accordion className="postion-r">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="acco-header-login-setting"><span className="red-color acco-show"> Details</span> <span className="acco-hide red-color"><RxCrossCircled size={24}/> Close</span></Accordion.Header>
                    <Accordion.Body>
                      <div className="main-inner-setting-sec">
                        <div className="noti-request-sec">
                          <Stack direction="horizontal" gap={3}>
                            <h5 className="l-sb head">Booking request notification</h5>
                            <div className="ms-auto">
                              <Switch
                                onChange={handleChange}
                                checked={checked}
                                className="react-switch"
                              />
                            </div>
                          </Stack>
                        </div>

                        <div className="noti-request-sec">
                          <Stack direction="horizontal" gap={3}>
                            <h5 className="l-sb head">Connection request notification</h5>
                            <div className="ms-auto">
                              <Switch
                                onChange={handleChange2}
                                checked={checked2}
                                className="react-switch"
                              />
                            </div>
                          </Stack>
                        </div>

                        <div className="noti-request-sec">
                          <Stack direction="horizontal" gap={3}>
                            <h5 className="l-sb head">Upcoming events notification</h5>
                            <div className="ms-auto">
                              <Switch
                                onChange={handleChange3}
                                checked={checked3}
                                className="react-switch"
                              />
                            </div>
                          </Stack>
                        </div>
                        
                      </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </>
  )
}

export default NotificationSettings