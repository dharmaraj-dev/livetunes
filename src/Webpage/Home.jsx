import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lottie from "lottie-react";
import Musicico from "../components/musicico.json";
import Nextarrow from "../components/nextarrow.json";
import Eventmanager from '../assets/images/event_manager.png';
import Guitarist from '../assets/images/guitarist.png';
import Joinbg from '../assets/images/join-bg.png';
import Welcomebg from '../assets/images/welcome-bg.png';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { useState } from "react";
import usePreventBodyScroll from "./bodyscroll";
import Welcome from '../assets/images/wlecome-img.png';


const elemPrefix = "test";
const getId = (index) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

const Home = () => {
  const [items] = useState(getItems);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <>
      <div className="example">
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <ScrollMenu
            // LeftArrow={LeftArrow}
            // RightArrow={RightArrow}
            onWheel={onWheel}
          >
            {/* {items.map(({ id }) => (
              <Card
                title={id}
                itemId={id} 
                key={id}
              />
            ))} */}

            {items[0] && 
            <div className="home-main-sec">
                <div className="inner-home-main-sec">
                  <div className="section1 maindg postion-r"  style={{background: `url(${Joinbg})`}}>
                    <Row>
                      <Col lg={7}>
                        <div className="enjoy-sec">
                          <p className="sub-head l-sb red-color">We hope you enjoyed <br />this musical journey!!</p>
                          <p className="heading khf  black-color l-m">Want to be a part of Livetunes <span className="red-color">Community</span>?</p>
                        </div>
                      </Col>
                      <Col lg={5}>
                        <div className="musicico">
                          <Lottie animationData={Musicico} loop={true} />
                        </div>
                      </Col>
                    </Row>

                    <img src={Eventmanager} alt="" className="eventmanager-img-sec"/>
                    <div className="eventmanager-btn-sec">
                      <button type="button" className="l-sb wbtnn back-btn btn btn-primary">Join as a <br /> Organiser</button>
                    </div>

                    <img src={Guitarist} alt="" className="guitarist-img-sec"/>
                    <div className="guitarist-btn-sec">
                      <button type="button" className="l-sb wbtnn back-btn btn btn-primary">Join as <br /> an Artist</button>
                    </div>

                  </div>
                </div>
            </div>
            }

            {items[1] && 
            <div className="home-main-sec">
                <div className="inner-home-main-sec">
                  <div className="section2 maindg postion-r" style={{background: `url(${Welcomebg})`}}>
                    <Row>
                      <Col xl={5} lg={6} className="postion-r">
                        <div className="welcome-img-sec">
                          <img src={Welcome} alt="" className="" />
                        </div>
                      </Col>
                      <Col xl={5} lg={5}>
                        <div className="welcome-text-sec">
                          <p className="sub-head khf red-color l-r">Welcome to</p>
                          <p className="heading khf black-color l-sb">Livetunes</p>
                        </div>
                      </Col>
                    </Row>

                    <div className="welcome-btn-sec">
                      <button type="button" className="l-sb web-next-btn"><span>Next</span> <Lottie animationData={Nextarrow} loop={true} className="nextarrow" /></button>
                    </div>

                  </div>
                </div>
            </div>
            }

          </ScrollMenu>
        </div>
      </div>



    </>
  )
}
export default Home