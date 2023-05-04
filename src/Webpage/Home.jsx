import React from 'react';
// import HorizontalScroll from 'react-horizontal-scrolling';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lottie from "lottie-react";
import Musicico from "../components/musicico.json";
import Eventmanager from '../assets/images/event_manager.png';
import Guitarist from '../assets/images/guitarist.png';
import Joinbg from '../assets/images/join-bg.png';

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { useState } from "react";
import usePreventBodyScroll from "./bodyscroll";
import { Card } from "./Card";


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
      {/* <div className="home-main-sec">
        <div className="inner-home-main-sec">
          <div className="section1 maindg postion-r"  style={{background: `url(${Joinbg})`}}>
            <Row>
              <Col lg={6}>
                <div className="enjoy-sec">
                  <p className="sub-head l-sb fs-2 red-color">We hope you enjoyed <br />this musical journey!!</p>
                  <p className="heading khf  black-color l-m">Want to be a part of Livetunes <span className="red-color">Community?</span></p>
                </div>
              </Col>
              <Col lg={6}>
                <div className="musicico">
                  <Lottie animationData={Musicico} loop={false} />
                </div>
              </Col>
            </Row>

            <img src={Eventmanager} alt="" className="eventmanager-img-sec"/>
            <img src={Guitarist} alt="" className="guitarist-img-sec"/>
          </div>

          <div className="maindg bg2">
            <h1>Hello 2</h1>
          </div>
          <div className="maindg bg3">
            <h1>Hello 3</h1>
          </div>
          <div className="maindg bg4">
            <h1>Hello 4</h1>
          </div>
        </div>
    </div> */}

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
                      <Col lg={6}>
                        <div className="enjoy-sec">
                          <p className="sub-head l-sb fs-2 red-color">We hope you enjoyed <br />this musical journey!!</p>
                          <p className="heading khf  black-color l-m">Want to be a part of Livetunes <span className="red-color">Community?</span></p>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="musicico">
                          <Lottie animationData={Musicico} loop={false} />
                        </div>
                      </Col>
                    </Row>

                    <img src={Eventmanager} alt="" className="eventmanager-img-sec"/>
                    <img src={Guitarist} alt="" className="guitarist-img-sec"/>
                  </div>
                </div>
            </div>

            }

            {items[1] && 
            
            <div className="home-main-sec">
                <div className="inner-home-main-sec">
                  <div className="section1 maindg postion-r"  style={{background: `url(${Joinbg})`}}>
                    <Row>
                      <Col lg={6}>
                        <div className="enjoy-sec">
                          <p className="sub-head l-sb fs-2 red-color">We hope you enjoyed <br />this musical journey!!</p>
                          <p className="heading khf  black-color l-m">Want to be a part of Livetunes <span className="red-color">Community?</span></p>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="musicico">
                          <Lottie animationData={Musicico} loop={false} />
                        </div>
                      </Col>
                    </Row>

                    <img src={Eventmanager} alt="" className="eventmanager-img-sec"/>
                    <img src={Guitarist} alt="" className="guitarist-img-sec"/>
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