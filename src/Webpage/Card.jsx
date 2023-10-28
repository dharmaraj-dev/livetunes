import React, { useState } from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Lottie from "lottie-react";
import Musicico from "../components/musicico.json";
import Nextarrow from "../components/nextarrow.json";
import Ring from "../assets/images/ring.gif";
import Eventmanager from "../assets/images/event_manager.png";
import Guitarist from "../assets/images/guitarist.png";
import Musicnotes from "../assets/images/music-notes.png";
import Musicnotesvgrepo from "../assets/images/musical-note-svgrepo.png";
import Musicnotesvgrepoand from "../assets/images/musical-note-svgrepo&.png";
import Musicnotesvgrepobold from "../assets/images/music-note-simple-bold.png";
import Joinbg from "../assets/images/join-bg.png";
import Stepbg from "../assets/images/step-bg.png";
import Welcomebg from "../assets/images/welcome-bg.png";
import Aboutbg from "../assets/images/about-bg.png";
import Eventbg from "../assets/images/eventbg.png";
import Dreambg from "../assets/images/dreambg.png";
import Dreamimg1 from "../assets/images/dreamimg1.png";
import Dreamimg2 from "../assets/images/dreamimg2.png";
import Dreamimg3 from "../assets/images/dreamimg3.png";
import Faturebg from "../assets/images/fature-bg.png";
import Featuredimg1 from "../assets/images/featuredimg1.png";
import Featuredimg2 from "../assets/images/featuredimg2.png";
import Featuredimg3 from "../assets/images/featuredimg3.png";
import Featuredimg4 from "../assets/images/featuredimg4.png";
import Clientbg from "../assets/images/clientbg.png";
import Protobg from "../assets/images/protobg.png";
import Mikeimg from "../assets/images/mikeimg.png";

import Welcome from "../assets/images/wlecome-img.png";
import Client1 from "../assets/images/client1.png";
import Client2 from "../assets/images/client2.png";
import Client3 from "../assets/images/client3.png";
import { BsFillStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setJoiningType, setWelcomeSeen } from '../redux/userAuth';

export function SlideView({ title, itemId, children }) {
  const dispatch = useDispatch();

  const {
    isFirstItemVisible,
    scrollPrev,
    visibleElements,
    initComplete,
    isLastItemVisible,
    scrollNext,
  } = React.useContext(VisibilityContext);
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);
  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  // console.log({ isLastItemVisible });
  const [disabledNext, setDisabledNext] = React.useState(
    !visibleElements.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabledNext(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  const [activeStep, setActiveStep] = useState(1);

  const joinAs = (joiningFor) => {
    dispatch(setWelcomeSeen(true));
    dispatch(setJoiningType(joiningFor));
  }

  return (
    // <div
    //   role="button"
    //   style={{
    //     border: "1px solid",
    //     display: "inline-block",
    //     margin: "0 10px",
    //     width: "100vw",
    //     userSelect: "none",
    //   }}
    //   tabIndex={0}
    //   className="card"
    // >
    //   <div>
    //     <div>{title}</div>
    //     <div style={{ backgroundColor: visible ? "transparent" : "gray" }}>
    //       visible: {JSON.stringify(visible)}
    //     </div>
    //   </div>
    //   <div
    //     style={{
    //       backgroundColor: "bisque",
    //       height: "200px",
    //     }}
    //   >
    //     <button onClick={() => scrollPrev()}>CLICK PREVIOUS</button>
    //     <button onClick={() => scrollNext()}>CLICK NEXT</button>
    //   </div>
    // </div>
    <div>
      {itemId == 0 && (
        <div className="home-main-sec">
          <div className="inner-home-main-sec">
            <div
              className="section2 maindg postion-r"
              style={{ background: `url(${Welcomebg})` }}
            >
              <div className="welcome-img-sec">
                <img src={Welcome} alt="" className="" />
              </div>
              <Row>
                <Col xl={5} lg={6} className="postion-r"></Col>
                <Col xl={5} lg={5}>
                  <div className="welcome-text-sec">
                    <p className="sub-head khf red-color l-r">Welcome to</p>
                    <p className="heading khf black-color l-sb">Livetunes</p>
                  </div>
                </Col>
              </Row>

              <div className="welcome-btn-sec">
                <button
                  type="button"
                  className="l-sb web-next-btn"
                  onClick={() => scrollNext()}
                >
                  <span>Next</span>{" "}
                  <Lottie
                    animationData={Nextarrow}
                    loop={true}
                    className="nextarrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {itemId == 1 && (
        <div className="home-main-sec">
          <div className="inner-home-main-sec">
            <div
              className="section3 maindg postion-r"
              style={{ background: `url(${Aboutbg})` }}
            >
              <Row>
                <Col lg={8}>
                  <p className="about-heading khf red-color l-m">
                    About <span className="black-color l-sb">Livetunes</span>?
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg={4} xl={3} xs={6}>
                  <div
                    className="main-text-box"
                    onMouseEnter={() => setActiveStep(1)}
                  >
                    <div className="ico-box ico-box-1 animation-circle">
                      <img src={Musicnotes} alt="" className="" />
                    </div>
                    {activeStep === 1 && (
                      <div className="text-box text-box-1 l-r">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard
                      </div>
                    )}
                  </div>
                </Col>
                <Col lg={4} xl={3} xs={6}>
                  <div
                    className="main-text-box"
                    onMouseEnter={() => setActiveStep(2)}
                  >
                    <div className={activeStep === 1 ? "animation-circle ico-box ico-box-2":"ico-box ico-box-2"}>
                      <img
                        src={Musicnotesvgrepo}
                        alt=""
                        className=""
                      />
                    </div>
                    {activeStep === 2 && (
                      <div className="text-box text-box-1 l-r">
                        2 Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard
                      </div>
                    )}
                  </div>
                </Col>
              </Row>
              <div className="about-secon-row">
                <Row>
                  <Col lg={2} xl={3}></Col>
                  <Col lg={4} xl={3} xs={6}>
                    <div
                      className="main-text-box"
                      onMouseEnter={() => setActiveStep(3)}
                    >
                      <div className={activeStep === 2 ? "animation-circle ico-box ico-box-3":"ico-box ico-box-3"}>
                        <img
                          src={Musicnotesvgrepoand}
                          alt=""
                          className=""
                        />
                      </div>
                      {activeStep === 3 && (
                        <div className="text-box text-box-1 l-r">
                          3 Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard
                        </div>
                      )}
                    </div>
                  </Col>
                  <Col lg={4} xl={3} xs={6}>
                    <div
                      className="main-text-box"
                      onMouseEnter={() => setActiveStep(4)}
                    >
                      <div className={activeStep === 3 ? "animation-circle ico-box ico-box-4":"ico-box ico-box-4"}>
                        <img src={Musicnotesvgrepobold} alt="" className="" />
                      </div>
                      {activeStep === 4 && (
                        <div className="text-box text-box-1 l-r">
                          4 Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>

                <div className="welcome-btn-sec">
                  <button
                    type="button"
                    className="l-sb web-next-btn"
                    onClick={() => scrollNext()}
                  >
                    <span>Next</span>{" "}
                    <Lottie
                      animationData={Nextarrow}
                      loop={true}
                      className="nextarrow"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {itemId == 2 && (
        <div className="home-main-sec">
          <div className="inner-home-main-sec">
            <div
              className="section4 maindg postion-r"
              style={{ background: `url(${Stepbg})` }}
            >
              <img src={Musicnotes} alt="" className="ico-bg-1" />
              <img src={Musicnotes} alt="" className="ico-bg-2" />
              <img src={Musicnotes} alt="" className="ico-bg-3" />
              <img src={Musicnotes} alt="" className="ico-bg-4" />
              <img src={Musicnotesvgrepoand} alt="" className="ico-bg-5" />
              <img src={Musicnotesvgrepoand} alt="" className="ico-bg-6" />
              <img src={Musicnotesvgrepobold} alt="" className="ico-bg-7" />
              <div className="join-step-text-sec">
                <p className="sub-head khf black-color l-m">Join Livetunes</p>
                <p className="heading khf red-color l-m">in 4 easy steps</p>
              </div>
              <div className="steps-box-sec d-none d-sm-none d-md-none d-lg-block">
                <Row>
                  <Col xl={2} lg={3} md={12}>
                    <div className="step-inner-box">
                      <div className="d-flex">
                        <div className="number-sec khf l-m">1</div>
                        <div className="st-text-sec l-r">
                          st
                          <br />
                          Step
                        </div>
                      </div>
                      <p className="head khf l-m">Signup</p>
                      <p className="sub-head l-r">
                        Signup to livetune with easy steps
                      </p>
                    </div>
                  </Col>
                  <Col xl={2} lg={3} md={12}>
                    <div className="step-inner-box">
                      <div className="d-flex">
                        <div className="number-sec khf l-m">2</div>
                        <div className="st-text-sec l-r">
                          nd
                          <br />
                          Step
                        </div>
                      </div>
                      <p className="head khf l-m">Setup your Profile</p>
                      <p className="sub-head l-r">
                        Setup your profile to find desired artists
                      </p>
                    </div>
                  </Col>
                  <Col xl={2} lg={3} md={12}>
                    <div className="step-inner-box">
                      <div className="d-flex">
                        <div className="number-sec khf l-m">3</div>
                        <div className="st-text-sec l-r">
                          rd
                          <br />
                          Step
                        </div>
                      </div>
                      <p className="head khf l-m">Find Artists easily</p>
                      <p className="sub-head l-r">
                        Find the Livetunes artists on the protal
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xl={2} lg={3} md={12}>
                    <div className="step-inner-box step-inner-box4">
                      <div className="d-flex">
                        <div className="number-sec khf l-m">4</div>
                        <div className="st-text-sec l-r">
                          th
                          <br />
                          Step
                        </div>
                      </div>
                      <p className="head khf l-m">Book the artist</p>
                      <p className="sub-head l-r">
                        Book the artists for your events
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="steps-box-sec steps-box-sec-mob d-sm-block d-md-block d-lg-none">
                <Row>
                  <Col xl={2} lg={3} xs={6} sm={6}>
                    <div className="step-inner-box">
                      <div className="d-flex">
                        <div className="number-sec khf l-m">1</div>
                        <div className="st-text-sec l-r">
                          st
                          <br />
                          Step
                        </div>
                      </div>
                      <p className="head khf l-m">Signup</p>
                      <p className="sub-head l-r">
                        Signup to livetune with easy steps
                      </p>
                    </div>
                  </Col>
                  <Col xl={2} lg={3} xs={6} sm={6}>
                    <div className="step-inner-box">
                      <div className="d-flex">
                        <div className="number-sec khf l-m">2</div>
                        <div className="st-text-sec l-r">
                          nd
                          <br />
                          Step
                        </div>
                      </div>
                      <p className="head khf l-m">Setup your Profile</p>
                      <p className="sub-head l-r">
                        Setup your profile to find desired artists
                      </p>
                    </div>
                  </Col>
                  <Col xl={2} lg={3} xs={6} sm={6}>
                    <div className="step-inner-box">
                      <div className="d-flex">
                        <div className="number-sec khf l-m">3</div>
                        <div className="st-text-sec l-r">
                          rd
                          <br />
                          Step
                        </div>
                      </div>
                      <p className="head khf l-m">Find Artists easily</p>
                      <p className="sub-head l-r">
                        Find the LiveTunes artists on the portal
                      </p>
                    </div>
                  </Col>
                  <Col xl={2} lg={3} xs={6} sm={6}>
                    <div className="step-inner-box step-inner-box4">
                      <div className="d-flex">
                        <div className="number-sec khf l-m">4</div>
                        <div className="st-text-sec l-r">
                          th
                          <br />
                          Step
                        </div>
                      </div>
                      <p className="head khf l-m">Book the artist</p>
                      <p className="sub-head l-r">
                        Book the artists for your events
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="welcome-btn-sec">
                <button
                  type="button"
                  className="l-sb wbtnn back-btn btn btn-primary pointer-hover"
                  onClick={() => scrollNext()}
                >
                  <span>Next</span>{" "}
                  <Lottie
                    animationData={Nextarrow}
                    loop={true}
                    className="nextarrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {itemId == 3 && (
        <div className="home-main-sec">
          <div className="inner-home-main-sec">
            <div
              className="section5 maindg postion-r"
              style={{ background: `url(${Eventbg})` }}
            >
              <Row>
                <Col lg={8}>
                  <p className="about-heading khf red-color l-m">
                    Event <span className="black-color l-sb">Categories</span>
                  </p>
                </Col>
              </Row>

              <div className="events-box events-box-desk">
                <Row>
                  <Col lg={2} md={3}>
                    <div className="events-inner-box">
                      <div className="ico-sec">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="80"
                          height="72"
                          viewBox="0 0 80 72"
                        >
                          <g
                            id="noun-wedding-3609979"
                            transform="translate(-80.916 -31.818)"
                          >
                            <path
                              id="Path_6087"
                              data-name="Path 6087"
                              d="M160.786,53.334C159.63,40.868,150.607,31.82,139.315,31.82a21.766,21.766,0,0,0-10.831,2.953,21.085,21.085,0,0,0-7.794,7.909,20.688,20.688,0,0,0-18.172-10.864c-11.291,0-20.314,9.046-21.471,21.515a21.52,21.52,0,0,0,.681,8.167A35.1,35.1,0,0,0,92.8,79.517l27.114,24.008a1.178,1.178,0,0,0,1.546.007l27.582-24.014A35.1,35.1,0,0,0,160.1,61.5a21.555,21.555,0,0,0,.681-8.166ZM106.263,80.909a1.146,1.146,0,0,0-1.156-1.048h-2.479l2.673-8.924a3.216,3.216,0,0,0-.149-2.272,3.331,3.331,0,0,0-1.625-1.633l-.13-.06h0a1.014,1.014,0,0,1-.6-.917V58.423a3.274,3.274,0,0,1,1-2.34,3.441,3.441,0,0,1,2.4-.971h7.458a3.44,3.44,0,0,1,2.4.971,3.274,3.274,0,0,1,1,2.34v7.634a1.017,1.017,0,0,1-.6.916l-.127.057h0a3.327,3.327,0,0,0-1.624,1.626,3.212,3.212,0,0,0-.156,2.266l2.676,8.935h-2.482a1.144,1.144,0,0,0-1.156,1.087l-.511,13.478L106.836,88.9a.661.661,0,0,0,0-.107Zm21.988.039a1.144,1.144,0,0,0-1.156-1.087h-2.481l2.673-8.924a3.213,3.213,0,0,0-.15-2.272,3.329,3.329,0,0,0-1.625-1.633l-.13-.06h0a1.015,1.015,0,0,1-.6-.917V58.423a3.274,3.274,0,0,1,1-2.34,3.44,3.44,0,0,1,2.4-.971h7.458a3.44,3.44,0,0,1,2.4.971,3.274,3.274,0,0,1,1,2.34v7.634a1.014,1.014,0,0,1-.6.917l-.127.057h0a3.328,3.328,0,0,0-1.624,1.627,3.217,3.217,0,0,0-.156,2.266l2.677,8.935h-2.48a1.146,1.146,0,0,0-1.153,1.048L135,88.712l-6.248,5.44Zm29.6-19.964a32.861,32.861,0,0,1-10.363,16.857l-10.015,8.719.325-4.443h2.949a1.167,1.167,0,0,0,.925-.451,1.106,1.106,0,0,0,.185-.993l-3.114-10.39a1.011,1.011,0,0,1,.552-1.211l.128-.06h0a3.34,3.34,0,0,0,1.4-1.209,3.225,3.225,0,0,0,.523-1.749V58.422a5.505,5.505,0,0,0-1.674-3.935,5.784,5.784,0,0,0-4.032-1.632h-1.728a5.173,5.173,0,0,0,3.074-3.409,5.029,5.029,0,0,0-.9-4.454,5.336,5.336,0,0,0-8.344,0,5.029,5.029,0,0,0-.9,4.454,5.173,5.173,0,0,0,3.074,3.409h-1.728a5.784,5.784,0,0,0-4.032,1.632,5.505,5.505,0,0,0-1.674,3.935v7.634A3.227,3.227,0,0,0,123,67.8a3.342,3.342,0,0,0,1.4,1.208l.13.061h0a1.014,1.014,0,0,1,.548,1.221l-3.11,10.379h0a1.106,1.106,0,0,0,.185.993,1.166,1.166,0,0,0,.925.451h2.91l.531,13.99-5.82,5.065L115.3,96.395a1.092,1.092,0,0,0,.02-.143l.537-14.135h2.91a1.166,1.166,0,0,0,.925-.451,1.106,1.106,0,0,0,.185-.993l-3.113-10.39a1.011,1.011,0,0,1,.552-1.211l.127-.059h0a3.349,3.349,0,0,0,1.4-1.208,3.229,3.229,0,0,0,.523-1.749V58.422a5.5,5.5,0,0,0-1.674-3.935,5.784,5.784,0,0,0-4.032-1.632h-1.728A5.171,5.171,0,0,0,115,49.446a5.033,5.033,0,0,0-.9-4.454,5.336,5.336,0,0,0-8.345,0,5.033,5.033,0,0,0-.9,4.454,5.171,5.171,0,0,0,3.073,3.408h-1.728a5.784,5.784,0,0,0-4.032,1.632,5.505,5.505,0,0,0-1.674,3.935v7.634a3.228,3.228,0,0,0,.522,1.748,3.343,3.343,0,0,0,1.4,1.209l.131.061h0a1.013,1.013,0,0,1,.547,1.221l-3.11,10.379h0a1.106,1.106,0,0,0,.185.993,1.167,1.167,0,0,0,.925.451h2.948l.337,4.6-10.02-8.873a32.86,32.86,0,0,1-10.37-16.864,19.443,19.443,0,0,1-.649-7.288,1.066,1.066,0,0,0,.017-.113c1.028-11.3,9.091-19.506,19.171-19.506A18.593,18.593,0,0,1,119.62,45.7a1.168,1.168,0,0,0,2.131,0,18.794,18.794,0,0,1,6.981-8.4,19.5,19.5,0,0,1,10.584-3.225c10.08,0,18.142,8.2,19.171,19.5,0,.035.009.075.016.109a19.417,19.417,0,0,1-.648,7.294Zm-25.944-10a2.982,2.982,0,0,1-2.082-.841,2.823,2.823,0,0,1,0-4.062,3,3,0,0,1,4.163,0,2.82,2.82,0,0,1,0,4.06,2.988,2.988,0,0,1-2.08.843Zm-21.987,0h0a2.984,2.984,0,0,1-2.082-.842,2.824,2.824,0,0,1,0-4.062,3,3,0,0,1,4.163,0,2.82,2.82,0,0,1,0,4.061,2.985,2.985,0,0,1-2.08.843Z"
                              transform="translate(0 0)"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="head khf l-m">Wedding ceremonies</p>
                    </div>
                    <div className="events-inner-box">
                      <div className="ico-sec">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="80"
                          height="80"
                          viewBox="0 0 80 80"
                        >
                          <g
                            id="noun-pray-1071849"
                            transform="translate(-103.601 -39.196)"
                          >
                            <path
                              id="Path_6092"
                              data-name="Path 6092"
                              d="M140.646,39.2a4.616,4.616,0,0,0-1.449.2c-3.02.92-5.171,4.493-5.171,10.029a51.2,51.2,0,0,1-.511,9.128c-.3,1.439-.4,1.389-.909,1.8a9.917,9.917,0,0,0-2.7,2.936c-1.017,1.719-1.973,4.309-2.983,8.866-3.013,11.671-3.636,16.631-5.341,18.663-.854,1.017-2.11,1.7-4.716,2.5s-6.407,1.62-11.875,2.994A1.91,1.91,0,0,0,103.6,98.15l.171,19.186a1.912,1.912,0,0,0,1.818,1.86h27.955a1.912,1.912,0,0,0,1.818-1.86V111.7a8.857,8.857,0,0,0,5.738-1.6,11,11,0,0,0,2.5-2.326,11.033,11.033,0,0,0,2.5,2.326,8.86,8.86,0,0,0,5.739,1.6v5.639a1.912,1.912,0,0,0,1.818,1.86h27.955a1.912,1.912,0,0,0,1.818-1.86L183.6,98.15a1.91,1.91,0,0,0-1.392-1.831c-5.468-1.374-9.269-2.2-11.875-2.994s-3.863-1.483-4.716-2.5c-1.706-2.033-2.326-6.985-5.341-18.663-1.009-4.552-1.967-7.148-2.983-8.866a9.927,9.927,0,0,0-2.7-2.936c-.5-.413-.6-.363-.909-1.8a51.2,51.2,0,0,1-.511-9.128c0-5.536-2.15-9.109-5.171-10.029a4.578,4.578,0,0,0-4.4.959,4.593,4.593,0,0,0-2.954-1.163Zm0,3.692a.873.873,0,0,1,.54.261,2.4,2.4,0,0,1,.6,1.86v57.878a5.84,5.84,0,0,1-2.7,4.1c-4.383,2.112-8.722-.86-11.307-4.535-1.781-2.622-2.923-6.56-1.307-13.14,1.209-3.429,1.933-8.3,3.977-16.221v-.058c.965-4.364,1.889-6.642,2.585-7.82a5.582,5.582,0,0,1,1.847-1.948,6.8,6.8,0,0,0,2.188-3.9,52.005,52.005,0,0,0,.6-9.942c0-4.563,1.732-6.193,2.585-6.454a1.233,1.233,0,0,1,.4-.087Zm5.881,0a1.387,1.387,0,0,1,.426.087c.854.26,2.585,1.891,2.585,6.454a51.958,51.958,0,0,0,.6,9.942,6.791,6.791,0,0,0,2.188,3.9,5.574,5.574,0,0,1,1.847,1.948c.7,1.178,1.62,3.456,2.585,7.82v.058c2.04,7.9,2.773,12.765,3.977,16.192v.029c1.616,6.579.474,10.517-1.307,13.14-2.641,3.385-7.514,7.019-11.335,4.535a5.792,5.792,0,0,1-2.67-4.1V45.011a2.394,2.394,0,0,1,.6-1.86.806.806,0,0,1,.511-.261ZM122.1,95.126a16.7,16.7,0,0,0,2.7,9.448,17.444,17.444,0,0,0,6.932,5.755v5.146H107.378L107.236,99.6c4.673-1.156,8.077-1.936,10.682-2.732a18.307,18.307,0,0,0,4.176-1.744Zm43.012,0a18.291,18.291,0,0,0,4.176,1.744c2.6.8,5.981,1.576,10.654,2.732l-.142,15.872H155.476v-5.146a17.471,17.471,0,0,0,6.932-5.755,16.7,16.7,0,0,0,2.7-9.448Z"
                              transform="translate(0 0)"
                              fill-rule="evenodd"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="head khf l-m">Relegious Events</p>
                    </div>
                  </Col>
                  <Col lg={2} md={3}>
                    <div className="events-inner-box events-inner-box2">
                      <div className="ico-sec">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="79.999"
                          height="80"
                          viewBox="0 0 79.999 80"
                        >
                          <g
                            id="noun-cafe-1236928"
                            transform="translate(-103.612 -49.418)"
                          >
                            <path
                              id="Path_6088"
                              data-name="Path 6088"
                              d="M180.118,189.8a1.849,1.849,0,0,1,1.534,1.331,44.629,44.629,0,0,1,1.96,13.156,42.414,42.414,0,0,1-13.353,31.392,6.645,6.645,0,0,1,1.762,1.028,2.97,2.97,0,0,1,0,4.717,6.87,6.87,0,0,1-1.9,1.089,26.836,26.836,0,0,1-5.511,1.451,104.9,104.9,0,0,1-17.33,1.27,104.57,104.57,0,0,1-17.3-1.27,27.205,27.205,0,0,1-5.54-1.451,6.717,6.717,0,0,1-1.875-1.089,2.97,2.97,0,0,1,0-4.717,6.359,6.359,0,0,1,1.591-.968,38.8,38.8,0,0,1-4.177-4.446,14.55,14.55,0,0,1-6.563-.423,12.06,12.06,0,0,1-8.268-8.075,41.592,41.592,0,0,1-1.449-14.4,39.6,39.6,0,0,1,.653-5.625,11.414,11.414,0,0,1,.54-1.935,3.726,3.726,0,0,1,.483-.877,1.918,1.918,0,0,1,1.505-.877h.029c.875-.059,2.8-.19,4.148-.272a44.13,44.13,0,0,1,1.62-7.682,1.831,1.831,0,0,1,1.733-1.331h65.514a1.63,1.63,0,0,1,.2,0Zm-1.534,3.871H115.768a40.474,40.474,0,0,0-1.336,7.984c-.053.886-.085,1.753-.085,2.631a39.563,39.563,0,0,0,6.08,21.322h.029c.273.431.572.859.881,1.3a34.773,34.773,0,0,0,7.131,7.53c.479-.1.983-.18,1.505-.272a104.578,104.578,0,0,1,17.3-1.27,104.83,104.83,0,0,1,17.33,1.27c.455.08.885.156,1.307.242,8.484-6.61,14.063-17.624,14.063-30.122a40.619,40.619,0,0,0-1.392-10.615Zm-67.843,9.042c-.989.061-1.8.125-2.67.182-.055.2-.114.42-.171.7a36.953,36.953,0,0,0-.568,5.051,38.718,38.718,0,0,0,1.25,12.884,8.006,8.006,0,0,0,5.8,5.625,11.524,11.524,0,0,0,2.926.423,43.657,43.657,0,0,1-6.591-23.287c0-.537.009-1.052.029-1.573Z"
                              transform="translate(0 -115.813)"
                              fill-rule="evenodd"
                            />
                            <path
                              id="Path_6089"
                              data-name="Path 6089"
                              d="M352.281,49.418a1.958,1.958,0,0,1,1.5.692c2.172,2.489,3.081,4.784,2.824,6.879a8.782,8.782,0,0,1-2.447,4.642,7.848,7.848,0,0,0-1.786,2.742c-.163.738-.1,1.675,1.4,3.614h0a1.96,1.96,0,1,1-3.1,2.4c-1.916-2.48-2.566-4.846-2.12-6.859a10.15,10.15,0,0,1,2.615-4.419,5.823,5.823,0,0,0,1.555-2.595c.087-.706-.112-1.791-1.887-3.825a1.96,1.96,0,0,1,1.453-3.269Z"
                              transform="translate(-205.384 0)"
                              fill-rule="evenodd"
                            />
                            <path
                              id="Path_6090"
                              data-name="Path 6090"
                              d="M411.282,95.491a1.96,1.96,0,0,1,1.381.509,5.534,5.534,0,0,1,2.2,4.331,5.753,5.753,0,0,1-1.453,3.227,6.967,6.967,0,0,0-.967,1.5c-.059.223-.18.247.442,1a1.96,1.96,0,1,1-3.016,2.5,5.224,5.224,0,0,1-1.214-4.506,7.719,7.719,0,0,1,1.629-2.856,3.938,3.938,0,0,0,.668-1.118c0-.06.081-.288-.883-1.138h0a1.96,1.96,0,0,1,1.213-3.446Z"
                              transform="translate(-255.72 -38.011)"
                              fill-rule="evenodd"
                            />
                            <path
                              id="Path_6091"
                              data-name="Path 6091"
                              d="M301.933,95.491a1.961,1.961,0,0,1,1.381.509,5.534,5.534,0,0,1,2.2,4.331,5.753,5.753,0,0,1-1.453,3.227,6.97,6.97,0,0,0-.967,1.5c-.059.223-.18.247.442,1h0a1.96,1.96,0,1,1-3.016,2.5,5.221,5.221,0,0,1-1.213-4.506,7.72,7.72,0,0,1,1.629-2.856,3.933,3.933,0,0,0,.668-1.118c0-.06.081-.288-.883-1.138h0a1.96,1.96,0,0,1,1.213-3.446Z"
                              transform="translate(-164.014 -38.011)"
                              fill-rule="evenodd"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="head khf l-m">Café gigs</p>
                    </div>
                    <div className="events-inner-box">
                      <div className="ico-sec">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="79.999"
                          height="80"
                          viewBox="0 0 79.999 80"
                        >
                          <g
                            id="noun-birthday-1530773"
                            transform="translate(-126.73 -56)"
                          >
                            <path
                              id="Path_6103"
                              data-name="Path 6103"
                              d="M185.523,62.6a10.381,10.381,0,0,1-4.133-4.133l-1.054-1.928a1.043,1.043,0,0,0-1.831,0l-1.054,1.928a10.381,10.381,0,0,1-4.133,4.133l-1.928,1.054a1.043,1.043,0,0,0,0,1.83l1.928,1.054a10.381,10.381,0,0,1,4.133,4.133L178.5,72.6a1.042,1.042,0,0,0,1.83,0l1.054-1.928a10.381,10.381,0,0,1,4.133-4.133l1.928-1.054a1.043,1.043,0,0,0,0-1.83Zm-1,2.108a12.454,12.454,0,0,0-4.963,4.963l-.138.253-.139-.253a12.459,12.459,0,0,0-4.963-4.963l-.253-.139.253-.139a12.454,12.454,0,0,0,4.963-4.963l.139-.253.138.253a12.459,12.459,0,0,0,4.963,4.963l.253.139Z"
                              transform="translate(-35.895 0)"
                            />
                            <path
                              id="Path_6104"
                              data-name="Path 6104"
                              d="M482.056,65.776l-2.424-1.326a13.341,13.341,0,0,1-5.307-5.308L473,56.717a1.085,1.085,0,0,0-1.832,0l-1.326,2.424a13.346,13.346,0,0,1-5.306,5.308l-2.427,1.326a1.042,1.042,0,0,0,0,1.83l2.424,1.326a13.341,13.341,0,0,1,5.307,5.308l1.326,2.424a1.042,1.042,0,0,0,1.83,0l1.326-2.424a13.346,13.346,0,0,1,5.306-5.308l2.426-1.326a1.043,1.043,0,0,0,0-1.83ZM478.628,67.1a15.412,15.412,0,0,0-6.137,6.138l-.41.75-.411-.751a15.42,15.42,0,0,0-6.137-6.138l-.751-.411.751-.411a15.411,15.411,0,0,0,6.137-6.138l.411-.748.411.751a15.42,15.42,0,0,0,6.137,6.138l.751.411Z"
                              transform="translate(-275.91 -0.174)"
                            />
                            <path
                              id="Path_6105"
                              data-name="Path 6105"
                              d="M501.778,361.331a5.612,5.612,0,1,0-5.613,5.623A5.625,5.625,0,0,0,501.778,361.331Zm-9.138,0a3.525,3.525,0,1,1,3.524,3.536A3.534,3.534,0,0,1,492.64,361.331Z"
                              transform="translate(-299.499 -246.555)"
                            />
                            <path
                              id="Path_6106"
                              data-name="Path 6106"
                              d="M345.719,61.631a5.612,5.612,0,1,0-5.613,5.623A5.625,5.625,0,0,0,345.719,61.631Zm-5.613,3.535a3.536,3.536,0,1,1,3.526-3.536A3.534,3.534,0,0,1,340.105,65.166Z"
                              transform="translate(-170.908 -0.007)"
                            />
                            <path
                              id="Path_6107"
                              data-name="Path 6107"
                              d="M466.04,236.654a5.612,5.612,0,1,0,5.612-5.622A5.624,5.624,0,0,0,466.04,236.654Zm9.137,0a3.524,3.524,0,1,1-3.524-3.535A3.535,3.535,0,0,1,475.177,236.654Z"
                              transform="translate(-279.553 -143.99)"
                            />
                            <path
                              id="Path_6108"
                              data-name="Path 6108"
                              d="M154.8,157.968a1.044,1.044,0,0,0-1.7.333l-26.288,62.461a1.044,1.044,0,0,0,1.369,1.366L190.5,195.782a1.044,1.044,0,0,0,.333-1.7Zm30.131,37.9-.456-.871a1.043,1.043,0,1,0-1.848.968l.377.718-24.95,10.548-.621-1.23a1.044,1.044,0,0,0-1.863.943l.558,1.1-26.4,11.159,6.307-14.986.674.441a1.044,1.044,0,1,0,1.142-1.747l-.994-.65,6.428-15.272.835.123a.987.987,0,0,0,.154.012,1.043,1.043,0,0,0,.15-2.076l-.3-.045,4.7-11.171.513.59a1.043,1.043,0,0,0,1.574-1.369l-1-1.146a1.011,1.011,0,0,0-.212-.163l4.715-11.2,11.052,11.074-.794.638a1.043,1.043,0,1,0,1.307,1.626l.968-.778,11.851,11.877-.678.592a1.044,1.044,0,0,0,1.372,1.574l.785-.684,7.979,8Z"
                              transform="translate(0 -86.212)"
                            />
                            <path
                              id="Path_6109"
                              data-name="Path 6109"
                              d="M384.567,85.263a1.043,1.043,0,0,0,.842-.427c.33-.45,8.045-11.211,5.922-27.909a1.044,1.044,0,0,0-2.071.264c2.013,15.836-5.459,26.31-5.536,26.415a1.042,1.042,0,0,0,.228,1.457,1.03,1.03,0,0,0,.614.2Z"
                              transform="translate(-211.147 -0.013)"
                            />
                            <path
                              id="Path_6110"
                              data-name="Path 6110"
                              d="M445.592,205.1a1.044,1.044,0,0,0-.582-1.357c-15.677-6.258-27.943,3.315-28.459,3.725a1.043,1.043,0,1,0,1.3,1.63c.117-.093,11.82-9.229,26.383-3.417a1.041,1.041,0,0,0,1.357-.581Z"
                              transform="translate(-238.968 -119.735)"
                            />
                            <path
                              id="Path_6111"
                              data-name="Path 6111"
                              d="M290.128,92.68a1,1,0,0,0,.235.027,1.043,1.043,0,0,0,1.016-.809c.1-.432,2.362-10.666-4.628-16.857a1.044,1.044,0,0,0-1.385,1.563c6.051,5.36,4,14.731,3.977,14.825a1.045,1.045,0,0,0,.785,1.25Z"
                              transform="translate(-130.124 -15.281)"
                            />
                            <path
                              id="Path_6112"
                              data-name="Path 6112"
                              d="M469.518,309.35a1.044,1.044,0,1,0,.613,2c.116-.034,11.53-3.444,16.488,3.538a1.044,1.044,0,1,0,1.7-1.209c-5.82-8.2-18.276-4.484-18.8-4.324Z"
                              transform="translate(-281.783 -207.488)"
                            />
                            <path
                              id="Path_6113"
                              data-name="Path 6113"
                              d="M231.5,324.109a1.044,1.044,0,0,0,.15-2.076l-1.5-.22a1.044,1.044,0,0,0-.3,2.065l1.5.22a1,1,0,0,0,.153.011Z"
                              transform="translate(-83.999 -218.396)"
                            />
                            <path
                              id="Path_6114"
                              data-name="Path 6114"
                              d="M335.821,372.286a1.044,1.044,0,1,0-1.577,1.367l1,1.148a1.044,1.044,0,1,0,1.577-1.367Z"
                              transform="translate(-170.303 -259.612)"
                            />
                            <path
                              id="Path_6115"
                              data-name="Path 6115"
                              d="M323.829,342.618a1.043,1.043,0,0,0-1.348-.6l-1.418.544a1.044,1.044,0,0,0,.748,1.949l1.418-.544A1.043,1.043,0,0,0,323.829,342.618Z"
                              transform="translate(-159.14 -234.96)"
                            />
                            <path
                              id="Path_6116"
                              data-name="Path 6116"
                              d="M273.92,202.919a1.036,1.036,0,0,0,.373-.069l1.418-.544a1.043,1.043,0,1,0-.748-1.948l-1.418.544a1.043,1.043,0,0,0,.375,2.017Z"
                              transform="translate(-120.093 -118.561)"
                            />
                            <path
                              id="Path_6117"
                              data-name="Path 6117"
                              d="M248.8,290.72a1.043,1.043,0,0,0-1.348-.6l-1.418.544a1.044,1.044,0,0,0,.747,1.95l1.418-.544A1.044,1.044,0,0,0,248.8,290.72Z"
                              transform="translate(-97.482 -192.316)"
                            />
                            <path
                              id="Path_6118"
                              data-name="Path 6118"
                              d="M286.558,237.736a1.043,1.043,0,0,0,1.348.6l1.418-.544a1.044,1.044,0,1,0-.747-1.949l-1.419.543A1.045,1.045,0,0,0,286.558,237.736Z"
                              transform="translate(-131.28 -147.72)"
                            />
                            <path
                              id="Path_6119"
                              data-name="Path 6119"
                              d="M335.329,316.1l-1.5-.221a1.044,1.044,0,1,0-.3,2.065l1.5.221a.98.98,0,0,0,.154.012,1.044,1.044,0,0,0,.15-2.077Z"
                              transform="translate(-169.199 -213.518)"
                            />
                            <path
                              id="Path_6120"
                              data-name="Path 6120"
                              d="M388.035,329.349a1.044,1.044,0,0,0-.833,1.218l.281,1.492a1.044,1.044,0,0,0,2.052-.387l-.281-1.492A1.043,1.043,0,0,0,388.035,329.349Z"
                              transform="translate(-213.996 -224.619)"
                            />
                            <path
                              id="Path_6121"
                              data-name="Path 6121"
                              d="M205.579,428.207l-1.5-.221a1.044,1.044,0,1,0-.3,2.065l1.5.221a1,1,0,0,0,.154.012,1.044,1.044,0,0,0,.15-2.077Z"
                              transform="translate(-62.577 -306.145)"
                            />
                            <path
                              id="Path_6122"
                              data-name="Path 6122"
                              d="M267.6,266.756l1.5.221a.987.987,0,0,0,.154.012,1.043,1.043,0,0,0,.15-2.076l-1.5-.221a1.043,1.043,0,1,0-.3,2.064Z"
                              transform="translate(-115.023 -171.463)"
                            />
                            <path
                              id="Path_6123"
                              data-name="Path 6123"
                              d="M325.095,267.343l1.5.221a.986.986,0,0,0,.154.012,1.043,1.043,0,0,0,.15-2.076l-1.5-.221a1.043,1.043,0,1,0-.3,2.064Z"
                              transform="translate(-162.272 -171.945)"
                            />
                            <path
                              id="Path_6124"
                              data-name="Path 6124"
                              d="M371.879,358.819l-1.5-.221a1.044,1.044,0,0,0-.3,2.065l1.5.221a.979.979,0,0,0,.154.012,1.044,1.044,0,0,0,.15-2.077Z"
                              transform="translate(-199.234 -248.621)"
                            />
                            <path
                              id="Path_6125"
                              data-name="Path 6125"
                              d="M300.422,294.452a1.043,1.043,0,0,0,1.474-.078l1.016-1.128a1.043,1.043,0,1,0-1.55-1.4l-1.016,1.128a1.043,1.043,0,0,0,.077,1.474Z"
                              transform="translate(-142.439 -193.525)"
                            />
                            <path
                              id="Path_6126"
                              data-name="Path 6126"
                              d="M365.255,290.228a1.043,1.043,0,1,0-1.55-1.4l-1.016,1.128a1.043,1.043,0,1,0,1.55,1.4Z"
                              transform="translate(-193.667 -191.046)"
                            />
                            <path
                              id="Path_6127"
                              data-name="Path 6127"
                              d="M280.189,328.68l-1-1.146a1.043,1.043,0,0,0-1.575,1.369l1,1.146a1.043,1.043,0,0,0,1.575-1.369Z"
                              transform="translate(-123.772 -222.838)"
                            />
                            <path
                              id="Path_6128"
                              data-name="Path 6128"
                              d="M292.875,362.683a1.044,1.044,0,0,0-.585-1.356l-1.412-.561a1.044,1.044,0,0,0-.77,1.941l1.412.561a1.046,1.046,0,0,0,1.355-.585Z"
                              transform="translate(-133.712 -250.363)"
                            />
                            <path
                              id="Path_6129"
                              data-name="Path 6129"
                              d="M262.649,383.937a1.044,1.044,0,0,0-1.848.973l.708,1.344a1.044,1.044,0,0,0,1.848-.973Z"
                              transform="translate(-110.063 -269.031)"
                            />
                            <path
                              id="Path_6130"
                              data-name="Path 6130"
                              d="M238.289,416.569a1.044,1.044,0,1,0-1.848.973l.708,1.343a1.044,1.044,0,0,0,1.848-.973Z"
                              transform="translate(-90.048 -296.413)"
                            />
                            <path
                              id="Path_6131"
                              data-name="Path 6131"
                              d="M207.336,360.914a1.044,1.044,0,1,0,1.848-.973l-.708-1.344a1.044,1.044,0,1,0-1.848.973Z"
                              transform="translate(-65.551 -248.207)"
                            />
                            <path
                              id="Path_6132"
                              data-name="Path 6132"
                              d="M172.728,448.025l-1.5.2a1.044,1.044,0,0,0,.281,2.068l1.5-.2a1.044,1.044,0,0,0-.281-2.068Z"
                              transform="translate(-35.466 -322.453)"
                            />
                            <path
                              id="Path_6133"
                              data-name="Path 6133"
                              d="M213.658,390.052l-1.5.2a1.044,1.044,0,1,0,.281,2.068l1.5-.2a1.044,1.044,0,0,0-.281-2.068Z"
                              transform="translate(-69.454 -274.469)"
                            />
                            <path
                              id="Path_6134"
                              data-name="Path 6134"
                              d="M243.5,354.45l-1.5.2a1.044,1.044,0,0,0,.138,2.078,1.032,1.032,0,0,0,.141-.009l1.5-.2a1.044,1.044,0,1,0-.279-2.068Z"
                              transform="translate(-93.975 -245.216)"
                            />
                            <path
                              id="Path_6135"
                              data-name="Path 6135"
                              d="M304.588,389.287l-1.412-.559a1.044,1.044,0,1,0-.768,1.942l1.412.559a1.032,1.032,0,0,0,.384.073,1.044,1.044,0,0,0,.384-2.014Z"
                              transform="translate(-143.818 -273.339)"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="head khf l-m">Kids friendly events</p>
                    </div>
                  </Col>
                  <Col lg={2} md={3}>
                    <div className="events-inner-box">
                      <div className="ico-sec">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="79.999"
                          height="80"
                          viewBox="0 0 79.999 80"
                        >
                          <g
                            id="noun-festival-1753557"
                            transform="translate(-126.001 -55.998)"
                          >
                            <path
                              id="Path_6136"
                              data-name="Path 6136"
                              d="M466.677,237.066a1.033,1.033,0,0,0-.838-.707l-7.167-1.037-3.2-6.457a1.079,1.079,0,0,0-1.857,0l-3.2,6.457-7.167,1.037a1.037,1.037,0,0,0-.574,1.77l5.182,5.024-1.222,7.094a1.036,1.036,0,0,0,1.5,1.095l6.41-3.352,6.41,3.352a1.037,1.037,0,0,0,1.5-1.094l-1.223-7.094,5.182-5.024a1.034,1.034,0,0,0,.267-1.064Zm-7.283,4.98a1.033,1.033,0,0,0-.3.921l.96,5.567-5.032-2.632a1.037,1.037,0,0,0-.962,0l-5.032,2.632.959-5.567a1.035,1.035,0,0,0-.3-.921l-4.06-3.937,5.617-.812a1.03,1.03,0,0,0,.78-.565l2.517-5.073,2.517,5.073a1.033,1.033,0,0,0,.78.565l5.617.812Z"
                              transform="translate(-260.726 -142.001)"
                            />
                            <path
                              id="Path_6137"
                              data-name="Path 6137"
                              d="M476.813,62.233,471.4,61.45l-2.418-4.875a1.036,1.036,0,0,0-1.857,0l-2.419,4.875-5.41.783a1.037,1.037,0,0,0-.574,1.77l3.913,3.793-.924,5.354a1.037,1.037,0,0,0,1.5,1.094l4.84-2.531,4.84,2.531a1.043,1.043,0,0,0,.481.119A1.038,1.038,0,0,0,474.4,73.15l-.924-5.354L477.386,64a1.038,1.038,0,0,0-.573-1.771Zm-5.175,4.455a1.033,1.033,0,0,0-.3.921l.66,3.827-3.462-1.81a1.034,1.034,0,0,0-.962,0l-3.462,1.81.66-3.827a1.036,1.036,0,0,0-.3-.921l-2.79-2.706,3.86-.558a1.03,1.03,0,0,0,.78-.565l1.732-3.49,1.732,3.49a1.032,1.032,0,0,0,.78.565l3.861.558Z"
                              transform="translate(-273.809 -0.002)"
                            />
                            <path
                              id="Path_6138"
                              data-name="Path 6138"
                              d="M170.212,416.827a1.033,1.033,0,0,0-.838-.707l-5.058-.732-2.26-4.556a1.079,1.079,0,0,0-1.857,0l-2.26,4.556-5.058.732a1.037,1.037,0,0,0-.574,1.77l3.655,3.545-.863,5a1.036,1.036,0,0,0,1.5,1.1l4.524-2.365,4.523,2.365a1.057,1.057,0,0,0,.482.118,1.035,1.035,0,0,0,1.021-1.213l-.863-5,3.656-3.545a1.037,1.037,0,0,0,.265-1.064Zm-5.757,3.5a1.033,1.033,0,0,0-.3.921l.6,3.475-3.145-1.645a1.037,1.037,0,0,0-.962,0l-3.146,1.645.6-3.476a1.036,1.036,0,0,0-.3-.921l-2.534-2.457,3.508-.507a1.033,1.033,0,0,0,.78-.565l1.574-3.171L162.7,416.8a1.033,1.033,0,0,0,.78.565l3.508.507Z"
                              transform="translate(-21.18 -291.654)"
                            />
                            <path
                              id="Path_6139"
                              data-name="Path 6139"
                              d="M351.961,399.105A1.037,1.037,0,0,0,353,398.068v-2.279h2.309a1.037,1.037,0,0,0,0-2.074H353v-2.278a1.037,1.037,0,0,0-2.074,0v2.278h-2.309a1.037,1.037,0,0,0,0,2.074h2.309v2.279A1.037,1.037,0,0,0,351.961,399.105Z"
                              transform="translate(-182.182 -275.273)"
                            />
                            <path
                              id="Path_6140"
                              data-name="Path 6140"
                              d="M193.175,113.9v2.279h-2.309a1.037,1.037,0,1,0,0,2.074h2.309v2.278a1.037,1.037,0,1,0,2.074,0v-2.278h2.309a1.037,1.037,0,0,0,0-2.074h-2.309V113.9a1.037,1.037,0,1,0-2.074,0Z"
                              transform="translate(-52.011 -46.333)"
                            />
                            <path
                              id="Path_6141"
                              data-name="Path 6141"
                              d="M240.942,83.168a16,16,0,0,1-6.06-10.807c-1.093-10.008-10.515-17.3-21.02-16.266a1.009,1.009,0,0,0-.926,1.095,1.033,1.033,0,0,0,1.138.89c9.358-.93,17.772,5.572,18.747,14.49a17.975,17.975,0,0,0,6.809,12.145,17.481,17.481,0,0,0-3.494,12.922c1.1,10.072,10.677,17.753,20.979,16.816l.046,0,1.81-.179c9.358-.932,17.772,5.573,18.745,14.49a1.023,1.023,0,0,0,1.03.893c.035,0,.073,0,.109-.006a1.007,1.007,0,0,0,.922-1.1c-1.091-10.008-10.511-17.3-21.02-16.266l-1.658.165h-.015c-9.258.922-17.9-5.964-18.891-15.044a15.573,15.573,0,0,1,3.1-11.51,19.7,19.7,0,0,0,12.5,2.94c.222-.014,5.463-.367,7.878-3.061a4.619,4.619,0,0,0,1.2-3.612,4.569,4.569,0,0,0-1.825-3.343c-2.851-2.2-8.062-1.546-8.265-1.517a19.31,19.31,0,0,0-11.848,5.863Zm12.113-3.885c1.263-.163,4.921-.282,6.707,1.1a2.637,2.637,0,0,1,1.053,1.953,2.7,2.7,0,0,1-.706,2.14c-1.528,1.709-5.169,2.295-6.483,2.378a17.635,17.635,0,0,1-11-2.5,17.247,17.247,0,0,1,10.424-5.066Z"
                              transform="translate(-73.782 0)"
                            />
                            <path
                              id="Path_6142"
                              data-name="Path 6142"
                              d="M128.074,131.791a1.03,1.03,0,0,0-1.037-1.021h0A1.03,1.03,0,0,0,126,131.8a15.945,15.945,0,0,0,16.1,15.718h.03l1.473,0a14.329,14.329,0,0,1,14.05,14.162,13.413,13.413,0,0,1-3.435,9.275,16.177,16.177,0,0,0-10.029-3.462h-.031c-.187-.009-4.628-.143-6.919,1.994a4.184,4.184,0,0,0-1.37,3.087,4.079,4.079,0,0,0,1.266,3.116c2.217,2.151,6.66,2.022,6.832,2.022a16.187,16.187,0,0,0,10.315-3.934,13.493,13.493,0,0,1,3.89,9.437,15.943,15.943,0,0,0,16.1,15.718,1.012,1.012,0,0,0,1.063-1.024,1.03,1.03,0,0,0-1.037-1.021.106.106,0,0,1-.026,0A13.883,13.883,0,0,1,160.246,183.2a15.535,15.535,0,0,0-4.494-10.88,15.414,15.414,0,0,0,3.974-10.676,16.413,16.413,0,0,0-16.054-16.183h-.164l-1.382,0H142.1a13.884,13.884,0,0,1-14.026-13.677Zm15.838,43.868c-1.045.029-4.014-.163-5.325-1.437a2.061,2.061,0,0,1-.645-1.618,2.191,2.191,0,0,1,.719-1.637c1.276-1.194,3.964-1.442,5.2-1.442.093,0,.179,0,.255,0h.026a14.169,14.169,0,0,1,8.576,2.866,14.123,14.123,0,0,1-8.81,3.264Z"
                              transform="translate(0 -62.928)"
                            />
                            <path
                              id="Path_6143"
                              data-name="Path 6143"
                              d="M382.691,79.4a5.374,5.374,0,1,0-5.374,5.334A5.361,5.361,0,0,0,382.691,79.4Zm-8.674,0a3.3,3.3,0,1,1,3.3,3.26A3.285,3.285,0,0,1,374.017,79.4Z"
                              transform="translate(-202.266 -14.721)"
                            />
                            <path
                              id="Path_6144"
                              data-name="Path 6144"
                              d="M156.407,252.1a6.083,6.083,0,1,0-6.129-6.083A6.114,6.114,0,0,0,156.407,252.1Zm0-10.093a4.01,4.01,0,1,1-4.055,4.01A4.037,4.037,0,0,1,156.407,242Z"
                              transform="translate(-19.782 -151.295)"
                            />
                            <path
                              id="Path_6145"
                              data-name="Path 6145"
                              d="M438.62,425.9a6.129,6.129,0,1,0,6.129-6.083A6.113,6.113,0,0,0,438.62,425.9Zm10.185,0a4.055,4.055,0,1,1-4.055-4.01A4.037,4.037,0,0,1,448.8,425.9Z"
                              transform="translate(-257.151 -299.404)"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="head khf l-m">College Festivals</p>
                    </div>
                    <div className="events-inner-box">
                      <div className="ico-sec">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="76.508"
                          height="80.507"
                          viewBox="0 0 76.508 80.507"
                        >
                          <g
                            id="noun-concert-3857954"
                            transform="translate(-70.005 0.004)"
                          >
                            <path
                              id="Path_6093"
                              data-name="Path 6093"
                              d="M107.535,6.336a3.8,3.8,0,1,1,7.607,0V32.329h2.536V22.82a3.8,3.8,0,1,1,7.607,0v9.509h2.536V25.356a3.8,3.8,0,1,1,7.607,0V35.5a3.782,3.782,0,0,1-.105.873,5.066,5.066,0,0,1,.105,1.028v1.268a11.4,11.4,0,0,1-.192,2.034,6.334,6.334,0,0,0,2.728-5.2V11.475a3.8,3.8,0,1,1,7.608,0V41.264l2.536-1.468V11.474a6.34,6.34,0,0,0-12.679,0v8.82a6.3,6.3,0,0,0-8.008.328,6.317,6.317,0,0,0-9.743-2.864V6.336a6.34,6.34,0,0,0-12.679,0V33.879a13.976,13.976,0,0,1,2.536-1Z"
                              transform="translate(-29.923)"
                            />
                            <path
                              id="Path_6094"
                              data-name="Path 6094"
                              d="M530.071,45.96a5.077,5.077,0,0,0,5.072-5.072V26.2L538.05,29.1h0a1.268,1.268,0,1,0,1.793-1.793l-5.072-5.072a1.268,1.268,0,0,0-2.165.9V36.5a5.069,5.069,0,1,0-2.536,9.457Z"
                              transform="translate(-394.573 -18.704)"
                            />
                            <path
                              id="Path_6095"
                              data-name="Path 6095"
                              d="M103.321,284.4c-.007-.012-.012-.025-.019-.038H80.782a1.269,1.269,0,0,1-1.268-1.268v-5.425a14.94,14.94,0,0,0,5.348.988,1.268,1.268,0,1,0,0-2.536A12.416,12.416,0,0,1,72.54,263.98V252.035a8.923,8.923,0,0,1,8.95-8.875h18.945v1.268a6.35,6.35,0,0,1-6.347,6.34H82.367a1.268,1.268,0,1,0,0,2.536,12.685,12.685,0,0,1,11.2,6.751,5.166,5.166,0,0,1,1.172-.929l.922-.533a15.336,15.336,0,0,0-4.906-5.288h3.334a8.89,8.89,0,0,0,8.883-8.875V243.16a2.539,2.539,0,0,0-2.537-2.536H81.49A11.461,11.461,0,0,0,70,252.035V263.98a14.643,14.643,0,0,0,6.974,12.435V283.1a3.807,3.807,0,0,0,3.8,3.8h23.983c-.015-.025-.032-.048-.046-.072Z"
                              transform="translate(0 -209.563)"
                            />
                            <path
                              id="Path_6096"
                              data-name="Path 6096"
                              d="M433.822,72.219a5.077,5.077,0,0,0,5.072-5.072V52.19l2.969,2.6a1.268,1.268,0,0,0,1.67-1.908l-5.072-4.438a1.268,1.268,0,0,0-2.1.954V62.761a5.069,5.069,0,1,0-2.536,9.457Z"
                              transform="translate(-310.789 -41.157)"
                            />
                            <path
                              id="Path_6097"
                              data-name="Path 6097"
                              d="M426.565,246.061l-1.4-2.425a1.29,1.29,0,0,0-1.734-.465,7.6,7.6,0,0,1-5.814.762,7.859,7.859,0,0,1-1.994-14.327,1.267,1.267,0,0,0,.464-1.73l-1.4-2.424h0a2.657,2.657,0,0,0-3.629-.985l-18.556,10.739,14.559,25.216L425.6,249.7a2.664,2.664,0,0,0,.962-3.634Z"
                              transform="translate(-280.918 -190.931)"
                              fill="none"
                              stroke="#000"
                              stroke-width="1"
                            />
                            <path
                              id="Path_6098"
                              data-name="Path 6098"
                              d="M260.191,309.43l-18.535,10.726a2.664,2.664,0,0,0-.963,3.635l1.4,2.425a1.269,1.269,0,0,0,1.734.464,7.6,7.6,0,0,1,5.813-.761,7.858,7.858,0,0,1,1.994,14.327,1.267,1.267,0,0,0-.464,1.73l1.4,2.425a2.654,2.654,0,0,0,1.622,1.248,2.691,2.691,0,0,0,2.006-.263l18.558-10.739Zm-3.015,12.5a1.268,1.268,0,0,1-.637-2.365l2.184-1.264a1.268,1.268,0,0,1,1.27,2.2l-2.183,1.263A1.273,1.273,0,0,1,257.176,321.931Zm3.164,5.493h0a1.268,1.268,0,0,1-.636-2.365l2.184-1.264h0a1.268,1.268,0,0,1,1.27,2.194l-2.184,1.264h0a1.264,1.264,0,0,1-.634.17Zm5.981,4.058-2.183,1.263h0a1.268,1.268,0,0,1-1.27-2.2l2.183-1.263a1.268,1.268,0,0,1,1.27,2.2Z"
                              transform="translate(-147.495 -265.739)"
                              fill="none"
                              stroke="#000"
                              stroke-width="1"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="head khf l-m">Live Concerts</p>
                    </div>
                  </Col>
                  <Col lg={2} md={3}>
                    <div className="events-inner-box events-inner-box2">
                      <div className="ico-sec">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="80"
                          height="96"
                          viewBox="0 0 80 96"
                        >
                          <g
                            id="noun-party-2914343"
                            transform="translate(-90.895 -10.94)"
                          >
                            <path
                              id="Path_6099"
                              data-name="Path 6099"
                              d="M126.116,183.09a1.19,1.19,0,1,0-.469,2.332l18.071,3.632h0a1.19,1.19,0,1,0,.469-2.332l-7.87-1.582,4.355-21.67h0A15.625,15.625,0,0,0,157.951,151l6.931-34.5h0a1.189,1.189,0,0,0-.932-1.4l-28.4-5.706a1.19,1.19,0,0,0-1.4.932l-6.93,34.493-.018.089h0A15.623,15.623,0,0,0,138.339,163l-4.355,21.67Zm10.133-71.122,26.066,5.238-3.135,15.605-29.213,10.425Zm-4.725,43.354a13.159,13.159,0,0,1-2.087-9.371l29.2-10.419-3.016,15.007a13.251,13.251,0,0,1-15.575,10.426l-.073-.015h-.006a13.168,13.168,0,0,1-8.439-5.626Z"
                              transform="translate(-33.794 -82.14)"
                            />
                            <path
                              id="Path_6100"
                              data-name="Path 6100"
                              d="M393.433,58.207A15.524,15.524,0,0,0,395.87,46.5l-6.461-34.586a1.189,1.189,0,0,0-1.388-.952L359.548,16.28a1.19,1.19,0,0,0-.952,1.388l6.46,34.582.017.091h0a15.554,15.554,0,0,0,17.09,12.616l4.059,21.727-7.891,1.474h0a1.19,1.19,0,0,0,.436,2.339l18.12-3.385h0a1.19,1.19,0,1,0-.436-2.339l-7.891,1.474L384.5,64.519a15.509,15.509,0,0,0,8.932-6.311Zm-6.143-44.69,5.434,29.092L364.759,37.7l-3.6-19.3ZM372.972,60.379a13.164,13.164,0,0,1-5.561-8.482l-2.186-11.7,27.964,4.911.342,1.832a13.251,13.251,0,0,1-10.548,15.49l-.075.014H382.9a13.165,13.165,0,0,1-9.93-2.066Z"
                              transform="translate(-226.964 0)"
                            />
                            <path
                              id="Path_6101"
                              data-name="Path 6101"
                              d="M205.42,304.075V301l1.492.67h0a1.19,1.19,0,0,0,1.573-.6l3.339-7.435a1.189,1.189,0,0,0-.6-1.573l-7.435-3.339h0a1.19,1.19,0,0,0-1.573.6l-2.432,5.412H196.08a1.19,1.19,0,0,0-1.19,1.19v8.15a1.19,1.19,0,0,0,1.19,1.19h8.151a1.19,1.19,0,0,0,1.19-1.189ZM203.9,291.384l5.263,2.365-2.364,5.264-1.381-.621v-2.466a1.189,1.189,0,0,0-1.19-1.19H202.4Zm-.862,11.5H197.27v-5.77h5.771Z"
                              transform="translate(-91.601 -228.308)"
                            />
                            <path
                              id="Path_6102"
                              data-name="Path 6102"
                              d="M438.235,206.7a1.19,1.19,0,0,0,.649-.638l3.183-7.5a1.191,1.191,0,0,0-.631-1.56l-5.463-2.317-.078-3.707a1.2,1.2,0,0,0-1.214-1.165l-8.148.171a1.19,1.19,0,0,0-1.164,1.214l.171,8.148h0a1.189,1.189,0,0,0,1.19,1.164h.026l3.075-.064-.639,1.505a1.19,1.19,0,0,0,.631,1.56l7.5,3.183a1.19,1.19,0,0,0,.911.008Zm-10.461-14.364,5.769-.121.121,5.769-2.017.043h0l-3.747.079Zm9.385,11.7-5.312-2.254.592-1.394,2.464-.052a1.19,1.19,0,0,0,1.164-1.214l-.038-1.833,3.383,1.435Z"
                              transform="translate(-281.649 -147.067)"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="head khf l-m">Private Parties</p>
                    </div>
                    <div className="events-inner-box">
                      <div className="ico-sec">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="80"
                          height="80"
                          viewBox="0 0 80 80"
                        >
                          <g
                            id="noun-restaurant-5001458"
                            transform="translate(-69.994 0.005)"
                          >
                            <path
                              id="Path_6321"
                              data-name="Path 6321"
                              d="M145.827,69.995h-.833V35.785a8.294,8.294,0,0,0,3.333-6.623,1.117,1.117,0,0,0-.088-.373L138.327,8.964v-4.8a4.167,4.167,0,0,0-4.166-4.167H85.827a4.167,4.167,0,0,0-4.166,4.167v4.8L71.749,28.789a1.158,1.158,0,0,0-.088.373,8.294,8.294,0,0,0,3.333,6.623v34.21h-.833a4.167,4.167,0,0,0-4.167,4.167v1.667h0a4.167,4.167,0,0,0,4.167,4.167h71.666a4.167,4.167,0,0,0,4.167-4.167V74.161h0a4.167,4.167,0,0,0-4.167-4.167Zm-5.833-34.167a6.675,6.675,0,0,1-6.615-5.833h13.23a6.675,6.675,0,0,1-6.615,5.833Zm-52.5,29.167h45a4.167,4.167,0,0,0,4.167-4.167V36.788a8.216,8.216,0,0,0,6.666,0V70H76.662V36.788a8.216,8.216,0,0,0,6.666,0v24.04a4.167,4.167,0,0,0,4.167,4.167Zm30.753-36.667L116.414,10h9.461l5.5,18.333Zm13.362,1.667a6.667,6.667,0,0,1-13.23,0Zm-15.036-1.667H103.406L105.239,10h9.5Zm.035,1.667a6.667,6.667,0,0,1-13.23,0ZM101.74,28.328H88.613L94.113,10h9.461Zm-.132,1.667a6.667,6.667,0,0,1-13.23,0Zm-6.615,7.5a8.322,8.322,0,0,0,7.5-4.767,8.283,8.283,0,0,0,15,0,8.283,8.283,0,0,0,15,0,8.351,8.351,0,0,0,2.5,3.057V60.828a2.5,2.5,0,0,1-2.5,2.5h-7.5V42.508a4.136,4.136,0,0,0-3.207-4.064c-3.033-.643-5.772,1.422-7.125,5.4-1.425,4.187-1.022,9.618,2,11.553v7.928h-10V55.082a9.732,9.732,0,0,0,3.333-7.588c0-5.054-3.363-9.167-7.5-9.167s-7.5,4.113-7.5,9.167a9.732,9.732,0,0,0,3.333,7.588v8.245H87.493a2.5,2.5,0,0,1-2.5-2.5V35.785a8.352,8.352,0,0,0,2.5-3.057,8.322,8.322,0,0,0,7.5,4.767Zm22.86,16.667c-2.5-1.2-2.86-6.115-1.613-9.778.4-1.182,1.965-5,5.2-4.305a2.459,2.459,0,0,1,1.885,2.43v20.82h-5V54.912a.833.833,0,0,0-.473-.75Zm-18.2-.167a8.062,8.062,0,0,1-2.99-6.5c0-4.135,2.617-7.5,5.833-7.5s5.833,3.365,5.833,7.5a8.057,8.057,0,0,1-2.99,6.5.832.832,0,0,0-.343.675v8.658h-5V54.673a.836.836,0,0,0-.343-.679Zm46.494-25.667H133.112L127.612,10h9.365ZM83.326,4.163a2.5,2.5,0,0,1,2.5-2.5H134.16a2.5,2.5,0,0,1,2.5,2.5V8.329H83.326ZM83.008,10h9.365l-5.5,18.333H73.841Zm-9.63,20h13.23a6.667,6.667,0,0,1-13.23,0Zm74.948,45.832a2.5,2.5,0,0,1-2.5,2.5H74.161a2.5,2.5,0,0,1-2.5-2.5V74.161h0a2.5,2.5,0,0,1,2.5-2.5h71.666a2.5,2.5,0,0,1,2.5,2.5Z"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="head khf l-m">Restaurants Shows</p>
                    </div>
                  </Col>
                  <Col lg={2} md={6}>
                    <Row>
                      <Col lg={12} md={6}>
                        <div className="events-inner-box events-inner-box-last">
                          <div className="ico-sec">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="80"
                              height="80"
                              viewBox="0 0 80 80"
                            >
                              <g
                                id="noun-pub-1741379"
                                transform="translate(-126.697 -56)"
                              >
                                <path
                                  id="Path_6146"
                                  data-name="Path 6146"
                                  d="M405.171,144.52a.993.993,0,0,0-.993.993v4.246a.993.993,0,1,0,1.986,0v-4.246A.993.993,0,0,0,405.171,144.52Z"
                                  transform="translate(-227.921 -72.703)"
                                />
                                <path
                                  id="Path_6147"
                                  data-name="Path 6147"
                                  d="M405.171,196.7a.993.993,0,0,0-.993.993v16.568a.993.993,0,0,0,1.986,0V197.693A.993.993,0,0,0,405.171,196.7Z"
                                  transform="translate(-227.921 -115.518)"
                                />
                                <path
                                  id="Path_6148"
                                  data-name="Path 6148"
                                  d="M172.281,144.52a.993.993,0,0,0-.993.993v4.246a.993.993,0,1,0,1.986,0v-4.246A.993.993,0,0,0,172.281,144.52Z"
                                  transform="translate(-36.688 -72.703)"
                                />
                                <path
                                  id="Path_6149"
                                  data-name="Path 6149"
                                  d="M172.281,196.7a.993.993,0,0,0-.993.993v16.568a.993.993,0,0,0,1.986,0V197.693A.993.993,0,0,0,172.281,196.7Z"
                                  transform="translate(-36.688 -115.518)"
                                />
                                <path
                                  id="Path_6150"
                                  data-name="Path 6150"
                                  d="M205.7,109.249h-.333a3.4,3.4,0,0,0,.368-1.518V104.5a1,1,0,0,0-1-1h-.495l-.01-34.569A3.891,3.891,0,0,0,205.8,67.8a3.915,3.915,0,0,0-1.816-6.221,4.018,4.018,0,0,0-.933-.181,5.126,5.126,0,0,0-9.247-3.318,4.335,4.335,0,0,0-2.93-.22,5.107,5.107,0,0,0-8.065.22,4.348,4.348,0,0,0-3.519-.009,4.964,4.964,0,0,0-8.439,3.015,4.3,4.3,0,0,0-2.565,3.768,4.232,4.232,0,0,0,1.136,3.135,3.913,3.913,0,0,0,1.311.891l-.01,34.621h-.475a1,1,0,0,0-1,1v3.229a3.4,3.4,0,0,0,.368,1.518h-5.841a3.4,3.4,0,0,0,.368-1.518V104.5a1,1,0,0,0-1-1h-.495l-.009-34.569a3.9,3.9,0,0,0,1.574-1.129,3.915,3.915,0,0,0-1.816-6.221,4.019,4.019,0,0,0-.932-.181,5.127,5.127,0,0,0-9.247-3.318,4.335,4.335,0,0,0-2.93-.22,5.107,5.107,0,0,0-8.065.22,4.348,4.348,0,0,0-3.519-.009,4.959,4.959,0,0,0-6.874-.119,4.932,4.932,0,0,0-1.564,3.134,4.3,4.3,0,0,0-2.565,3.767,4.227,4.227,0,0,0,1.135,3.134,3.909,3.909,0,0,0,1.312.891l-.01,34.621h-.475a1,1,0,0,0-1,1v3.229a3.4,3.4,0,0,0,.368,1.518l-.336,0a1,1,0,0,0-1,1v13.236c0,.031.015.057.017.087a.985.985,0,0,0,.269.8l4.882,4.966-4.882,4.966a1,1,0,0,0,1.426,1.4l4.858-4.941,4.858,4.941.007,0,0,.007a.97.97,0,0,0,.207.135.984.984,0,0,0,.119.077.991.991,0,0,0,.751,0,45.656,45.656,0,0,1,.326-.213l0-.007.007,0,4.858-4.941,4.858,4.941.007,0,0,.007a1.007,1.007,0,0,0,.213.14,1.143,1.143,0,0,0,.112.073.989.989,0,0,0,.751,0,43.777,43.777,0,0,1,.326-.213l0-.007.007,0,4.858-4.941,4.858,4.941.007,0,0,.007a.97.97,0,0,0,.207.135,1.105,1.105,0,0,0,1.2-.135l0-.007.007,0,4.858-4.941,4.858,4.941.007,0,0,.007a1.006,1.006,0,0,0,.213.14,1.138,1.138,0,0,0,.112.073.991.991,0,0,0,.751,0,46.657,46.657,0,0,1,.326-.213l0-.007.007,0,4.858-4.941L182.7,135.7l.007,0,0,.007a.97.97,0,0,0,.207.135.693.693,0,0,0,.495.152,1,1,0,0,0,.375-.074.977.977,0,0,0,.123-.081.987.987,0,0,0,.2-.133l0-.007.007,0,4.858-4.941,4.858,4.941.007,0,0,.007a1,1,0,0,0,.213.14,1.135,1.135,0,0,0,.112.073.991.991,0,0,0,.751,0,47.7,47.7,0,0,1,.326-.213l0-.007.007,0,4.858-4.941,4.858,4.941a1,1,0,1,0,1.426-1.4l-4.882-4.966,4.882-4.966a.985.985,0,0,0,.269-.8.866.866,0,0,0,.017-.087V110.25a1,1,0,0,0-1-1Zm-1.966-3.746v2.229a1.444,1.444,0,0,1-1.443,1.442h-29.6a1.444,1.444,0,0,1-1.443-1.443V105.5ZM172.061,62.787a1,1,0,0,0,.773-1.023c0-.09-.008-.181,0-.276a2.97,2.97,0,0,1,2.965-2.857l.114,0a2.942,2.942,0,0,1,2.336,1.293,1,1,0,0,0,1.425.236,2.33,2.33,0,0,1,2.846.077,1,1,0,0,0,1.558-.364,3.115,3.115,0,0,1,5.571-.293,1,1,0,0,0,1.332.384,2.316,2.316,0,0,1,2.535.273,1,1,0,0,0,1.558-.364,3.125,3.125,0,0,1,5.863.364,3.075,3.075,0,0,1-.069,1.977,1,1,0,0,0,1.272,1.29,1.886,1.886,0,0,1,1.239-.017,1.919,1.919,0,0,1-.6,3.743h-3.821a2.615,2.615,0,0,0-2.612,2.612v7.314a2.166,2.166,0,0,1-4.332,0V69.843a2.615,2.615,0,0,0-2.612-2.612H172.52a2.083,2.083,0,0,1-2.232-2.3,2.294,2.294,0,0,1,1.772-2.146Zm.675,6.445H189.4a.612.612,0,0,1,.612.612v7.314a4.166,4.166,0,0,0,8.331,0V69.843a.612.612,0,0,1,.612-.612h3.27l.01,34.271H172.725ZM162.146,105.5v2.229a1.444,1.444,0,0,1-1.443,1.442h-29.6a1.444,1.444,0,0,1-1.443-1.443V105.5ZM130.475,62.787a1,1,0,0,0,.772-1.027c0-.09-.007-.181,0-.271a2.97,2.97,0,0,1,2.965-2.857l.115,0a2.942,2.942,0,0,1,2.335,1.293,1,1,0,0,0,1.425.236,2.32,2.32,0,0,1,2.846.077,1,1,0,0,0,1.558-.364,3.115,3.115,0,0,1,5.57-.294,1,1,0,0,0,1.332.385,2.318,2.318,0,0,1,2.536.273,1,1,0,0,0,1.558-.364,3.125,3.125,0,0,1,5.862.366,3.076,3.076,0,0,1-.069,1.977,1,1,0,0,0,1.272,1.29,1.884,1.884,0,0,1,1.238-.017,1.918,1.918,0,0,1-.6,3.742H153.37a2.615,2.615,0,0,0-2.612,2.612V82.158a2.166,2.166,0,0,1-4.332,0V69.843a2.615,2.615,0,0,0-2.612-2.612H130.933a2.084,2.084,0,0,1-2.233-2.3,2.3,2.3,0,0,1,1.774-2.146Zm.675,6.445h12.667a.612.612,0,0,1,.612.612V82.157a4.166,4.166,0,0,0,8.331,0V69.843a.612.612,0,0,1,.612-.612h7.271l.009,34.271H131.139ZM128.7,122.485V111.249h76v11.236Zm63.65,2-3.364,3.421-3.364-3.421Zm-11.142,0-3.364,3.421-3.364-3.421Zm-11.143,0-3.364,3.421-3.364-3.421Zm-11.142,0-3.364,3.421-3.364-3.421Zm-11.143,0-3.364,3.421-3.364-3.421Zm-17.87,0h6.727l-3.364,3.421Zm8.935,9.088-4.169-4.24,4.169-4.24,4.169,4.24Zm11.142,0-4.169-4.24,4.169-4.24,4.169,4.24Zm11.143,0-4.169-4.24,4.169-4.24,4.169,4.24Zm11.143,0-4.169-4.24,4.169-4.24,4.169,4.24Zm11.143,0-4.169-4.24,4.169-4.24,4.169,4.24Zm11.142,0-4.169-4.24,4.169-4.24,4.169,4.24Zm2.208-9.088h6.727l-3.364,3.421Z"
                                  transform="translate(0 0)"
                                />
                              </g>
                            </svg>
                          </div>
                          <p className="head khf l-m">
                            Pubs & Bars (live music)
                          </p>
                        </div>
                      </Col>
                      <Col lg={12} md={6}>
                        <div className="events-inner-box">
                          <div className="ico-sec">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="79.999"
                              height="74"
                              viewBox="0 0 79.999 74"
                            >
                              <g
                                id="noun-corporate-events-2139242"
                                transform="translate(-78.487 -30.542)"
                              >
                                <path
                                  id="Path_6322"
                                  data-name="Path 6322"
                                  d="M251.119,176.187h26.868a1.247,1.247,0,0,0,1.244-1.244v-4.851a1.247,1.247,0,0,0-1.244-1.244H251.119a1.247,1.247,0,0,0-1.244,1.244v4.851A1.338,1.338,0,0,0,251.119,176.187Zm1.244-4.852h24.38V173.7h-24.38Z"
                                  transform="translate(-146.014 -117.727)"
                                />
                                <path
                                  id="Path_6323"
                                  data-name="Path 6323"
                                  d="M251.119,258.49h26.868a1.247,1.247,0,0,0,1.244-1.244V252.4a1.247,1.247,0,0,0-1.244-1.244H251.119a1.247,1.247,0,0,0-1.244,1.244v4.851A1.338,1.338,0,0,0,251.119,258.49Zm1.244-4.851h24.38V256h-24.38Z"
                                  transform="translate(-146.014 -187.784)"
                                />
                                <path
                                  id="Path_6324"
                                  data-name="Path 6324"
                                  d="M251.119,337.4h26.868a1.247,1.247,0,0,0,1.244-1.244v-4.851a1.247,1.247,0,0,0-1.244-1.244H251.119a1.247,1.247,0,0,0-1.244,1.244v4.851A1.338,1.338,0,0,0,251.119,337.4Zm1.244-4.851h24.38v2.363h-24.38Z"
                                  transform="translate(-146.014 -254.953)"
                                />
                                <path
                                  id="Path_6325"
                                  data-name="Path 6325"
                                  d="M187.35,148.9l-12.53-6.842V129.368a1.251,1.251,0,0,0-1.253-1.244H134.473a1.251,1.251,0,0,0-1.253,1.244v12.688l-12.53,6.842a1.266,1.266,0,0,0-.626,1v35.7a1.251,1.251,0,0,0,1.253,1.244h65.532a1.251,1.251,0,0,0,1.253-1.244V150.018a1.815,1.815,0,0,0-.752-1.12Zm-54.13,35.576H122.445V150.639l10.776-5.846Zm16.791,0v-8.708a4.762,4.762,0,0,1,9.523,0v8.708Zm22.429,0H161.915v-8.708a7.113,7.113,0,0,0-7.142-7.09,7.194,7.194,0,0,0-7.142,7.09v8.708h-11.9V130.489h36.714Zm13.157,0H174.822V144.793l10.776,5.846Z"
                                  transform="translate(-35.481 -82.297)"
                                />
                                <path
                                  id="Path_6326"
                                  data-name="Path 6326"
                                  d="M511.609,353.759H514.1a1.247,1.247,0,0,0,1.244-1.244,1.175,1.175,0,0,0-1.244-1.244h-2.488a1.244,1.244,0,1,0,0,2.488Z"
                                  transform="translate(-368.069 -273.056)"
                                />
                                <path
                                  id="Path_6327"
                                  data-name="Path 6327"
                                  d="M511.216,289.974l2.488,1.617c.249.124.373.249.622.249a1.535,1.535,0,0,0,1-.5,1.067,1.067,0,0,0-.373-1.617l-2.488-1.617a1.067,1.067,0,0,0-1.617.373.992.992,0,0,0,.373,1.493Z"
                                  transform="translate(-368.297 -219.091)"
                                />
                                <path
                                  id="Path_6328"
                                  data-name="Path 6328"
                                  d="M511.609,414H514.1a1.247,1.247,0,0,0,1.244-1.244,1.175,1.175,0,0,0-1.244-1.244h-2.488a1.244,1.244,0,1,0,0,2.488Z"
                                  transform="translate(-368.069 -324.342)"
                                />
                                <path
                                  id="Path_6329"
                                  data-name="Path 6329"
                                  d="M511.609,473.4H514.1a1.244,1.244,0,0,0,0-2.488h-2.488a1.244,1.244,0,1,0,0,2.488Z"
                                  transform="translate(-368.069 -374.829)"
                                />
                                <path
                                  id="Path_6330"
                                  data-name="Path 6330"
                                  d="M156.939,353.759h2.488a1.247,1.247,0,0,0,1.244-1.244,1.175,1.175,0,0,0-1.244-1.244h-2.488a1.244,1.244,0,1,0,0,2.488Z"
                                  transform="translate(-65.889 -273.056)"
                                />
                                <path
                                  id="Path_6331"
                                  data-name="Path 6331"
                                  d="M157.166,290.272c.249,0,.5,0,.622-.249l2.488-1.617a1.174,1.174,0,1,0-1.244-1.991l-2.488,1.617a1.106,1.106,0,0,0-.373,1.617,1.024,1.024,0,0,0,1,.622Z"
                                  transform="translate(-66.116 -217.65)"
                                />
                                <path
                                  id="Path_6332"
                                  data-name="Path 6332"
                                  d="M156.939,414h2.488a1.247,1.247,0,0,0,1.244-1.244,1.175,1.175,0,0,0-1.244-1.244h-2.488a1.244,1.244,0,1,0,0,2.488Z"
                                  transform="translate(-65.889 -324.342)"
                                />
                                <path
                                  id="Path_6333"
                                  data-name="Path 6333"
                                  d="M156.939,473.4h2.488a1.244,1.244,0,0,0,0-2.488h-2.488a1.244,1.244,0,0,0,0,2.488Z"
                                  transform="translate(-65.889 -374.829)"
                                />
                                <path
                                  id="Path_6334"
                                  data-name="Path 6334"
                                  d="M516,31.4H500.579a1.247,1.247,0,0,0-1.244,1.244v9.08a8.97,8.97,0,0,0,7.712,8.832v6.593h-4.353a1.244,1.244,0,0,0,0,2.488h11.071a1.244,1.244,0,0,0,0-2.488h-4.353V50.551a8.97,8.97,0,0,0,7.712-8.832v-9.2c.124-.622-.373-1.12-1.12-1.12Zm-1.12,2.363v4.353c-6.344-.622-9.827,1.742-13.061.622V33.758Zm-6.593,14.429a6.5,6.5,0,0,1-6.468-6.468v-.373c3.981.87,6.966-1.368,13.061-.622v1A6.612,6.612,0,0,1,508.292,48.187Z"
                                  transform="translate(-358.656 -0.728)"
                                />
                                <path
                                  id="Path_6335"
                                  data-name="Path 6335"
                                  d="M92.916,58.654a1.244,1.244,0,1,0,0-2.488H88.562V49.573a8.97,8.97,0,0,0,7.712-8.832V31.786a1.247,1.247,0,0,0-1.244-1.244h-15.3a1.247,1.247,0,0,0-1.244,1.244v9.08A8.97,8.97,0,0,0,86.2,49.7V56.29H81.846a1.244,1.244,0,1,0,0,2.488H92.917Zm.995-25.625v4.353c-6.344-.622-9.826,1.742-13.061.622V33.029ZM80.85,40.866v-.373c3.981.87,6.966-1.368,13.061-.622v1a6.5,6.5,0,0,1-6.468,6.468A6.611,6.611,0,0,1,80.85,40.866Z"
                                />
                              </g>
                            </svg>
                          </div>
                          <p className="head khf l-m">Corporate shows</p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>

              <div
                className="events-box events-box-mob"
                style={{ display: `none` }}
              >
                <Row className="gx-1">
                  <Col xs={3}>
                    <div className="events-inner-box">
                      <div className="ico-sec">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="80"
                          height="72"
                          viewBox="0 0 80 72"
                        >
                          <g
                            id="noun-wedding-3609979"
                            transform="translate(-80.916 -31.818)"
                          >
                            <path
                              id="Path_6087"
                              data-name="Path 6087"
                              d="M160.786,53.334C159.63,40.868,150.607,31.82,139.315,31.82a21.766,21.766,0,0,0-10.831,2.953,21.085,21.085,0,0,0-7.794,7.909,20.688,20.688,0,0,0-18.172-10.864c-11.291,0-20.314,9.046-21.471,21.515a21.52,21.52,0,0,0,.681,8.167A35.1,35.1,0,0,0,92.8,79.517l27.114,24.008a1.178,1.178,0,0,0,1.546.007l27.582-24.014A35.1,35.1,0,0,0,160.1,61.5a21.555,21.555,0,0,0,.681-8.166ZM106.263,80.909a1.146,1.146,0,0,0-1.156-1.048h-2.479l2.673-8.924a3.216,3.216,0,0,0-.149-2.272,3.331,3.331,0,0,0-1.625-1.633l-.13-.06h0a1.014,1.014,0,0,1-.6-.917V58.423a3.274,3.274,0,0,1,1-2.34,3.441,3.441,0,0,1,2.4-.971h7.458a3.44,3.44,0,0,1,2.4.971,3.274,3.274,0,0,1,1,2.34v7.634a1.017,1.017,0,0,1-.6.916l-.127.057h0a3.327,3.327,0,0,0-1.624,1.626,3.212,3.212,0,0,0-.156,2.266l2.676,8.935h-2.482a1.144,1.144,0,0,0-1.156,1.087l-.511,13.478L106.836,88.9a.661.661,0,0,0,0-.107Zm21.988.039a1.144,1.144,0,0,0-1.156-1.087h-2.481l2.673-8.924a3.213,3.213,0,0,0-.15-2.272,3.329,3.329,0,0,0-1.625-1.633l-.13-.06h0a1.015,1.015,0,0,1-.6-.917V58.423a3.274,3.274,0,0,1,1-2.34,3.44,3.44,0,0,1,2.4-.971h7.458a3.44,3.44,0,0,1,2.4.971,3.274,3.274,0,0,1,1,2.34v7.634a1.014,1.014,0,0,1-.6.917l-.127.057h0a3.328,3.328,0,0,0-1.624,1.627,3.217,3.217,0,0,0-.156,2.266l2.677,8.935h-2.48a1.146,1.146,0,0,0-1.153,1.048L135,88.712l-6.248,5.44Zm29.6-19.964a32.861,32.861,0,0,1-10.363,16.857l-10.015,8.719.325-4.443h2.949a1.167,1.167,0,0,0,.925-.451,1.106,1.106,0,0,0,.185-.993l-3.114-10.39a1.011,1.011,0,0,1,.552-1.211l.128-.06h0a3.34,3.34,0,0,0,1.4-1.209,3.225,3.225,0,0,0,.523-1.749V58.422a5.505,5.505,0,0,0-1.674-3.935,5.784,5.784,0,0,0-4.032-1.632h-1.728a5.173,5.173,0,0,0,3.074-3.409,5.029,5.029,0,0,0-.9-4.454,5.336,5.336,0,0,0-8.344,0,5.029,5.029,0,0,0-.9,4.454,5.173,5.173,0,0,0,3.074,3.409h-1.728a5.784,5.784,0,0,0-4.032,1.632,5.505,5.505,0,0,0-1.674,3.935v7.634A3.227,3.227,0,0,0,123,67.8a3.342,3.342,0,0,0,1.4,1.208l.13.061h0a1.014,1.014,0,0,1,.548,1.221l-3.11,10.379h0a1.106,1.106,0,0,0,.185.993,1.166,1.166,0,0,0,.925.451h2.91l.531,13.99-5.82,5.065L115.3,96.395a1.092,1.092,0,0,0,.02-.143l.537-14.135h2.91a1.166,1.166,0,0,0,.925-.451,1.106,1.106,0,0,0,.185-.993l-3.113-10.39a1.011,1.011,0,0,1,.552-1.211l.127-.059h0a3.349,3.349,0,0,0,1.4-1.208,3.229,3.229,0,0,0,.523-1.749V58.422a5.5,5.5,0,0,0-1.674-3.935,5.784,5.784,0,0,0-4.032-1.632h-1.728A5.171,5.171,0,0,0,115,49.446a5.033,5.033,0,0,0-.9-4.454,5.336,5.336,0,0,0-8.345,0,5.033,5.033,0,0,0-.9,4.454,5.171,5.171,0,0,0,3.073,3.408h-1.728a5.784,5.784,0,0,0-4.032,1.632,5.505,5.505,0,0,0-1.674,3.935v7.634a3.228,3.228,0,0,0,.522,1.748,3.343,3.343,0,0,0,1.4,1.209l.131.061h0a1.013,1.013,0,0,1,.547,1.221l-3.11,10.379h0a1.106,1.106,0,0,0,.185.993,1.167,1.167,0,0,0,.925.451h2.948l.337,4.6-10.02-8.873a32.86,32.86,0,0,1-10.37-16.864,19.443,19.443,0,0,1-.649-7.288,1.066,1.066,0,0,0,.017-.113c1.028-11.3,9.091-19.506,19.171-19.506A18.593,18.593,0,0,1,119.62,45.7a1.168,1.168,0,0,0,2.131,0,18.794,18.794,0,0,1,6.981-8.4,19.5,19.5,0,0,1,10.584-3.225c10.08,0,18.142,8.2,19.171,19.5,0,.035.009.075.016.109a19.417,19.417,0,0,1-.648,7.294Zm-25.944-10a2.982,2.982,0,0,1-2.082-.841,2.823,2.823,0,0,1,0-4.062,3,3,0,0,1,4.163,0,2.82,2.82,0,0,1,0,4.06,2.988,2.988,0,0,1-2.08.843Zm-21.987,0h0a2.984,2.984,0,0,1-2.082-.842,2.824,2.824,0,0,1,0-4.062,3,3,0,0,1,4.163,0,2.82,2.82,0,0,1,0,4.061,2.985,2.985,0,0,1-2.08.843Z"
                              transform="translate(0 0)"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="head khf l-m">Wedding ceremonies</p>
                    </div>
                    <div className="events-inner-box">
                      <div className="ico-sec">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="80"
                          height="80"
                          viewBox="0 0 80 80"
                        >
                          <g
                            id="noun-pray-1071849"
                            transform="translate(-103.601 -39.196)"
                          >
                            <path
                              id="Path_6092"
                              data-name="Path 6092"
                              d="M140.646,39.2a4.616,4.616,0,0,0-1.449.2c-3.02.92-5.171,4.493-5.171,10.029a51.2,51.2,0,0,1-.511,9.128c-.3,1.439-.4,1.389-.909,1.8a9.917,9.917,0,0,0-2.7,2.936c-1.017,1.719-1.973,4.309-2.983,8.866-3.013,11.671-3.636,16.631-5.341,18.663-.854,1.017-2.11,1.7-4.716,2.5s-6.407,1.62-11.875,2.994A1.91,1.91,0,0,0,103.6,98.15l.171,19.186a1.912,1.912,0,0,0,1.818,1.86h27.955a1.912,1.912,0,0,0,1.818-1.86V111.7a8.857,8.857,0,0,0,5.738-1.6,11,11,0,0,0,2.5-2.326,11.033,11.033,0,0,0,2.5,2.326,8.86,8.86,0,0,0,5.739,1.6v5.639a1.912,1.912,0,0,0,1.818,1.86h27.955a1.912,1.912,0,0,0,1.818-1.86L183.6,98.15a1.91,1.91,0,0,0-1.392-1.831c-5.468-1.374-9.269-2.2-11.875-2.994s-3.863-1.483-4.716-2.5c-1.706-2.033-2.326-6.985-5.341-18.663-1.009-4.552-1.967-7.148-2.983-8.866a9.927,9.927,0,0,0-2.7-2.936c-.5-.413-.6-.363-.909-1.8a51.2,51.2,0,0,1-.511-9.128c0-5.536-2.15-9.109-5.171-10.029a4.578,4.578,0,0,0-4.4.959,4.593,4.593,0,0,0-2.954-1.163Zm0,3.692a.873.873,0,0,1,.54.261,2.4,2.4,0,0,1,.6,1.86v57.878a5.84,5.84,0,0,1-2.7,4.1c-4.383,2.112-8.722-.86-11.307-4.535-1.781-2.622-2.923-6.56-1.307-13.14,1.209-3.429,1.933-8.3,3.977-16.221v-.058c.965-4.364,1.889-6.642,2.585-7.82a5.582,5.582,0,0,1,1.847-1.948,6.8,6.8,0,0,0,2.188-3.9,52.005,52.005,0,0,0,.6-9.942c0-4.563,1.732-6.193,2.585-6.454a1.233,1.233,0,0,1,.4-.087Zm5.881,0a1.387,1.387,0,0,1,.426.087c.854.26,2.585,1.891,2.585,6.454a51.958,51.958,0,0,0,.6,9.942,6.791,6.791,0,0,0,2.188,3.9,5.574,5.574,0,0,1,1.847,1.948c.7,1.178,1.62,3.456,2.585,7.82v.058c2.04,7.9,2.773,12.765,3.977,16.192v.029c1.616,6.579.474,10.517-1.307,13.14-2.641,3.385-7.514,7.019-11.335,4.535a5.792,5.792,0,0,1-2.67-4.1V45.011a2.394,2.394,0,0,1,.6-1.86.806.806,0,0,1,.511-.261ZM122.1,95.126a16.7,16.7,0,0,0,2.7,9.448,17.444,17.444,0,0,0,6.932,5.755v5.146H107.378L107.236,99.6c4.673-1.156,8.077-1.936,10.682-2.732a18.307,18.307,0,0,0,4.176-1.744Zm43.012,0a18.291,18.291,0,0,0,4.176,1.744c2.6.8,5.981,1.576,10.654,2.732l-.142,15.872H155.476v-5.146a17.471,17.471,0,0,0,6.932-5.755,16.7,16.7,0,0,0,2.7-9.448Z"
                              transform="translate(0 0)"
                              fill-rule="evenodd"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="head khf l-m">Relegious Events</p>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div className="events-inner-box events-inner-box2">
                      <div className="ico-sec">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="79.999"
                          height="80"
                          viewBox="0 0 79.999 80"
                        >
                          <g
                            id="noun-cafe-1236928"
                            transform="translate(-103.612 -49.418)"
                          >
                            <path
                              id="Path_6088"
                              data-name="Path 6088"
                              d="M180.118,189.8a1.849,1.849,0,0,1,1.534,1.331,44.629,44.629,0,0,1,1.96,13.156,42.414,42.414,0,0,1-13.353,31.392,6.645,6.645,0,0,1,1.762,1.028,2.97,2.97,0,0,1,0,4.717,6.87,6.87,0,0,1-1.9,1.089,26.836,26.836,0,0,1-5.511,1.451,104.9,104.9,0,0,1-17.33,1.27,104.57,104.57,0,0,1-17.3-1.27,27.205,27.205,0,0,1-5.54-1.451,6.717,6.717,0,0,1-1.875-1.089,2.97,2.97,0,0,1,0-4.717,6.359,6.359,0,0,1,1.591-.968,38.8,38.8,0,0,1-4.177-4.446,14.55,14.55,0,0,1-6.563-.423,12.06,12.06,0,0,1-8.268-8.075,41.592,41.592,0,0,1-1.449-14.4,39.6,39.6,0,0,1,.653-5.625,11.414,11.414,0,0,1,.54-1.935,3.726,3.726,0,0,1,.483-.877,1.918,1.918,0,0,1,1.505-.877h.029c.875-.059,2.8-.19,4.148-.272a44.13,44.13,0,0,1,1.62-7.682,1.831,1.831,0,0,1,1.733-1.331h65.514a1.63,1.63,0,0,1,.2,0Zm-1.534,3.871H115.768a40.474,40.474,0,0,0-1.336,7.984c-.053.886-.085,1.753-.085,2.631a39.563,39.563,0,0,0,6.08,21.322h.029c.273.431.572.859.881,1.3a34.773,34.773,0,0,0,7.131,7.53c.479-.1.983-.18,1.505-.272a104.578,104.578,0,0,1,17.3-1.27,104.83,104.83,0,0,1,17.33,1.27c.455.08.885.156,1.307.242,8.484-6.61,14.063-17.624,14.063-30.122a40.619,40.619,0,0,0-1.392-10.615Zm-67.843,9.042c-.989.061-1.8.125-2.67.182-.055.2-.114.42-.171.7a36.953,36.953,0,0,0-.568,5.051,38.718,38.718,0,0,0,1.25,12.884,8.006,8.006,0,0,0,5.8,5.625,11.524,11.524,0,0,0,2.926.423,43.657,43.657,0,0,1-6.591-23.287c0-.537.009-1.052.029-1.573Z"
                              transform="translate(0 -115.813)"
                              fill-rule="evenodd"
                            />
                            <path
                              id="Path_6089"
                              data-name="Path 6089"
                              d="M352.281,49.418a1.958,1.958,0,0,1,1.5.692c2.172,2.489,3.081,4.784,2.824,6.879a8.782,8.782,0,0,1-2.447,4.642,7.848,7.848,0,0,0-1.786,2.742c-.163.738-.1,1.675,1.4,3.614h0a1.96,1.96,0,1,1-3.1,2.4c-1.916-2.48-2.566-4.846-2.12-6.859a10.15,10.15,0,0,1,2.615-4.419,5.823,5.823,0,0,0,1.555-2.595c.087-.706-.112-1.791-1.887-3.825a1.96,1.96,0,0,1,1.453-3.269Z"
                              transform="translate(-205.384 0)"
                              fill-rule="evenodd"
                            />
                            <path
                              id="Path_6090"
                              data-name="Path 6090"
                              d="M411.282,95.491a1.96,1.96,0,0,1,1.381.509,5.534,5.534,0,0,1,2.2,4.331,5.753,5.753,0,0,1-1.453,3.227,6.967,6.967,0,0,0-.967,1.5c-.059.223-.18.247.442,1a1.96,1.96,0,1,1-3.016,2.5,5.224,5.224,0,0,1-1.214-4.506,7.719,7.719,0,0,1,1.629-2.856,3.938,3.938,0,0,0,.668-1.118c0-.06.081-.288-.883-1.138h0a1.96,1.96,0,0,1,1.213-3.446Z"
                              transform="translate(-255.72 -38.011)"
                              fill-rule="evenodd"
                            />
                            <path
                              id="Path_6091"
                              data-name="Path 6091"
                              d="M301.933,95.491a1.961,1.961,0,0,1,1.381.509,5.534,5.534,0,0,1,2.2,4.331,5.753,5.753,0,0,1-1.453,3.227,6.97,6.97,0,0,0-.967,1.5c-.059.223-.18.247.442,1h0a1.96,1.96,0,1,1-3.016,2.5,5.221,5.221,0,0,1-1.213-4.506,7.72,7.72,0,0,1,1.629-2.856,3.933,3.933,0,0,0,.668-1.118c0-.06.081-.288-.883-1.138h0a1.96,1.96,0,0,1,1.213-3.446Z"
                              transform="translate(-164.014 -38.011)"
                              fill-rule="evenodd"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="head khf l-m">Café gigs</p>
                    </div>
                    <div className="events-inner-box">
                      <div className="ico-sec">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="79.999"
                          height="80"
                          viewBox="0 0 79.999 80"
                        >
                          <g
                            id="noun-birthday-1530773"
                            transform="translate(-126.73 -56)"
                          >
                            <path
                              id="Path_6103"
                              data-name="Path 6103"
                              d="M185.523,62.6a10.381,10.381,0,0,1-4.133-4.133l-1.054-1.928a1.043,1.043,0,0,0-1.831,0l-1.054,1.928a10.381,10.381,0,0,1-4.133,4.133l-1.928,1.054a1.043,1.043,0,0,0,0,1.83l1.928,1.054a10.381,10.381,0,0,1,4.133,4.133L178.5,72.6a1.042,1.042,0,0,0,1.83,0l1.054-1.928a10.381,10.381,0,0,1,4.133-4.133l1.928-1.054a1.043,1.043,0,0,0,0-1.83Zm-1,2.108a12.454,12.454,0,0,0-4.963,4.963l-.138.253-.139-.253a12.459,12.459,0,0,0-4.963-4.963l-.253-.139.253-.139a12.454,12.454,0,0,0,4.963-4.963l.139-.253.138.253a12.459,12.459,0,0,0,4.963,4.963l.253.139Z"
                              transform="translate(-35.895 0)"
                            />
                            <path
                              id="Path_6104"
                              data-name="Path 6104"
                              d="M482.056,65.776l-2.424-1.326a13.341,13.341,0,0,1-5.307-5.308L473,56.717a1.085,1.085,0,0,0-1.832,0l-1.326,2.424a13.346,13.346,0,0,1-5.306,5.308l-2.427,1.326a1.042,1.042,0,0,0,0,1.83l2.424,1.326a13.341,13.341,0,0,1,5.307,5.308l1.326,2.424a1.042,1.042,0,0,0,1.83,0l1.326-2.424a13.346,13.346,0,0,1,5.306-5.308l2.426-1.326a1.043,1.043,0,0,0,0-1.83ZM478.628,67.1a15.412,15.412,0,0,0-6.137,6.138l-.41.75-.411-.751a15.42,15.42,0,0,0-6.137-6.138l-.751-.411.751-.411a15.411,15.411,0,0,0,6.137-6.138l.411-.748.411.751a15.42,15.42,0,0,0,6.137,6.138l.751.411Z"
                              transform="translate(-275.91 -0.174)"
                            />
                            <path
                              id="Path_6105"
                              data-name="Path 6105"
                              d="M501.778,361.331a5.612,5.612,0,1,0-5.613,5.623A5.625,5.625,0,0,0,501.778,361.331Zm-9.138,0a3.525,3.525,0,1,1,3.524,3.536A3.534,3.534,0,0,1,492.64,361.331Z"
                              transform="translate(-299.499 -246.555)"
                            />
                            <path
                              id="Path_6106"
                              data-name="Path 6106"
                              d="M345.719,61.631a5.612,5.612,0,1,0-5.613,5.623A5.625,5.625,0,0,0,345.719,61.631Zm-5.613,3.535a3.536,3.536,0,1,1,3.526-3.536A3.534,3.534,0,0,1,340.105,65.166Z"
                              transform="translate(-170.908 -0.007)"
                            />
                            <path
                              id="Path_6107"
                              data-name="Path 6107"
                              d="M466.04,236.654a5.612,5.612,0,1,0,5.612-5.622A5.624,5.624,0,0,0,466.04,236.654Zm9.137,0a3.524,3.524,0,1,1-3.524-3.535A3.535,3.535,0,0,1,475.177,236.654Z"
                              transform="translate(-279.553 -143.99)"
                            />
                            <path
                              id="Path_6108"
                              data-name="Path 6108"
                              d="M154.8,157.968a1.044,1.044,0,0,0-1.7.333l-26.288,62.461a1.044,1.044,0,0,0,1.369,1.366L190.5,195.782a1.044,1.044,0,0,0,.333-1.7Zm30.131,37.9-.456-.871a1.043,1.043,0,1,0-1.848.968l.377.718-24.95,10.548-.621-1.23a1.044,1.044,0,0,0-1.863.943l.558,1.1-26.4,11.159,6.307-14.986.674.441a1.044,1.044,0,1,0,1.142-1.747l-.994-.65,6.428-15.272.835.123a.987.987,0,0,0,.154.012,1.043,1.043,0,0,0,.15-2.076l-.3-.045,4.7-11.171.513.59a1.043,1.043,0,0,0,1.574-1.369l-1-1.146a1.011,1.011,0,0,0-.212-.163l4.715-11.2,11.052,11.074-.794.638a1.043,1.043,0,1,0,1.307,1.626l.968-.778,11.851,11.877-.678.592a1.044,1.044,0,0,0,1.372,1.574l.785-.684,7.979,8Z"
                              transform="translate(0 -86.212)"
                            />
                            <path
                              id="Path_6109"
                              data-name="Path 6109"
                              d="M384.567,85.263a1.043,1.043,0,0,0,.842-.427c.33-.45,8.045-11.211,5.922-27.909a1.044,1.044,0,0,0-2.071.264c2.013,15.836-5.459,26.31-5.536,26.415a1.042,1.042,0,0,0,.228,1.457,1.03,1.03,0,0,0,.614.2Z"
                              transform="translate(-211.147 -0.013)"
                            />
                            <path
                              id="Path_6110"
                              data-name="Path 6110"
                              d="M445.592,205.1a1.044,1.044,0,0,0-.582-1.357c-15.677-6.258-27.943,3.315-28.459,3.725a1.043,1.043,0,1,0,1.3,1.63c.117-.093,11.82-9.229,26.383-3.417a1.041,1.041,0,0,0,1.357-.581Z"
                              transform="translate(-238.968 -119.735)"
                            />
                            <path
                              id="Path_6111"
                              data-name="Path 6111"
                              d="M290.128,92.68a1,1,0,0,0,.235.027,1.043,1.043,0,0,0,1.016-.809c.1-.432,2.362-10.666-4.628-16.857a1.044,1.044,0,0,0-1.385,1.563c6.051,5.36,4,14.731,3.977,14.825a1.045,1.045,0,0,0,.785,1.25Z"
                              transform="translate(-130.124 -15.281)"
                            />
                            <path
                              id="Path_6112"
                              data-name="Path 6112"
                              d="M469.518,309.35a1.044,1.044,0,1,0,.613,2c.116-.034,11.53-3.444,16.488,3.538a1.044,1.044,0,1,0,1.7-1.209c-5.82-8.2-18.276-4.484-18.8-4.324Z"
                              transform="translate(-281.783 -207.488)"
                            />
                            <path
                              id="Path_6113"
                              data-name="Path 6113"
                              d="M231.5,324.109a1.044,1.044,0,0,0,.15-2.076l-1.5-.22a1.044,1.044,0,0,0-.3,2.065l1.5.22a1,1,0,0,0,.153.011Z"
                              transform="translate(-83.999 -218.396)"
                            />
                            <path
                              id="Path_6114"
                              data-name="Path 6114"
                              d="M335.821,372.286a1.044,1.044,0,1,0-1.577,1.367l1,1.148a1.044,1.044,0,1,0,1.577-1.367Z"
                              transform="translate(-170.303 -259.612)"
                            />
                            <path
                              id="Path_6115"
                              data-name="Path 6115"
                              d="M323.829,342.618a1.043,1.043,0,0,0-1.348-.6l-1.418.544a1.044,1.044,0,0,0,.748,1.949l1.418-.544A1.043,1.043,0,0,0,323.829,342.618Z"
                              transform="translate(-159.14 -234.96)"
                            />
                            <path
                              id="Path_6116"
                              data-name="Path 6116"
                              d="M273.92,202.919a1.036,1.036,0,0,0,.373-.069l1.418-.544a1.043,1.043,0,1,0-.748-1.948l-1.418.544a1.043,1.043,0,0,0,.375,2.017Z"
                              transform="translate(-120.093 -118.561)"
                            />
                            <path
                              id="Path_6117"
                              data-name="Path 6117"
                              d="M248.8,290.72a1.043,1.043,0,0,0-1.348-.6l-1.418.544a1.044,1.044,0,0,0,.747,1.95l1.418-.544A1.044,1.044,0,0,0,248.8,290.72Z"
                              transform="translate(-97.482 -192.316)"
                            />
                            <path
                              id="Path_6118"
                              data-name="Path 6118"
                              d="M286.558,237.736a1.043,1.043,0,0,0,1.348.6l1.418-.544a1.044,1.044,0,1,0-.747-1.949l-1.419.543A1.045,1.045,0,0,0,286.558,237.736Z"
                              transform="translate(-131.28 -147.72)"
                            />
                            <path
                              id="Path_6119"
                              data-name="Path 6119"
                              d="M335.329,316.1l-1.5-.221a1.044,1.044,0,1,0-.3,2.065l1.5.221a.98.98,0,0,0,.154.012,1.044,1.044,0,0,0,.15-2.077Z"
                              transform="translate(-169.199 -213.518)"
                            />
                            <path
                              id="Path_6120"
                              data-name="Path 6120"
                              d="M388.035,329.349a1.044,1.044,0,0,0-.833,1.218l.281,1.492a1.044,1.044,0,0,0,2.052-.387l-.281-1.492A1.043,1.043,0,0,0,388.035,329.349Z"
                              transform="translate(-213.996 -224.619)"
                            />
                            <path
                              id="Path_6121"
                              data-name="Path 6121"
                              d="M205.579,428.207l-1.5-.221a1.044,1.044,0,1,0-.3,2.065l1.5.221a1,1,0,0,0,.154.012,1.044,1.044,0,0,0,.15-2.077Z"
                              transform="translate(-62.577 -306.145)"
                            />
                            <path
                              id="Path_6122"
                              data-name="Path 6122"
                              d="M267.6,266.756l1.5.221a.987.987,0,0,0,.154.012,1.043,1.043,0,0,0,.15-2.076l-1.5-.221a1.043,1.043,0,1,0-.3,2.064Z"
                              transform="translate(-115.023 -171.463)"
                            />
                            <path
                              id="Path_6123"
                              data-name="Path 6123"
                              d="M325.095,267.343l1.5.221a.986.986,0,0,0,.154.012,1.043,1.043,0,0,0,.15-2.076l-1.5-.221a1.043,1.043,0,1,0-.3,2.064Z"
                              transform="translate(-162.272 -171.945)"
                            />
                            <path
                              id="Path_6124"
                              data-name="Path 6124"
                              d="M371.879,358.819l-1.5-.221a1.044,1.044,0,0,0-.3,2.065l1.5.221a.979.979,0,0,0,.154.012,1.044,1.044,0,0,0,.15-2.077Z"
                              transform="translate(-199.234 -248.621)"
                            />
                            <path
                              id="Path_6125"
                              data-name="Path 6125"
                              d="M300.422,294.452a1.043,1.043,0,0,0,1.474-.078l1.016-1.128a1.043,1.043,0,1,0-1.55-1.4l-1.016,1.128a1.043,1.043,0,0,0,.077,1.474Z"
                              transform="translate(-142.439 -193.525)"
                            />
                            <path
                              id="Path_6126"
                              data-name="Path 6126"
                              d="M365.255,290.228a1.043,1.043,0,1,0-1.55-1.4l-1.016,1.128a1.043,1.043,0,1,0,1.55,1.4Z"
                              transform="translate(-193.667 -191.046)"
                            />
                            <path
                              id="Path_6127"
                              data-name="Path 6127"
                              d="M280.189,328.68l-1-1.146a1.043,1.043,0,0,0-1.575,1.369l1,1.146a1.043,1.043,0,0,0,1.575-1.369Z"
                              transform="translate(-123.772 -222.838)"
                            />
                            <path
                              id="Path_6128"
                              data-name="Path 6128"
                              d="M292.875,362.683a1.044,1.044,0,0,0-.585-1.356l-1.412-.561a1.044,1.044,0,0,0-.77,1.941l1.412.561a1.046,1.046,0,0,0,1.355-.585Z"
                              transform="translate(-133.712 -250.363)"
                            />
                            <path
                              id="Path_6129"
                              data-name="Path 6129"
                              d="M262.649,383.937a1.044,1.044,0,0,0-1.848.973l.708,1.344a1.044,1.044,0,0,0,1.848-.973Z"
                              transform="translate(-110.063 -269.031)"
                            />
                            <path
                              id="Path_6130"
                              data-name="Path 6130"
                              d="M238.289,416.569a1.044,1.044,0,1,0-1.848.973l.708,1.343a1.044,1.044,0,0,0,1.848-.973Z"
                              transform="translate(-90.048 -296.413)"
                            />
                            <path
                              id="Path_6131"
                              data-name="Path 6131"
                              d="M207.336,360.914a1.044,1.044,0,1,0,1.848-.973l-.708-1.344a1.044,1.044,0,1,0-1.848.973Z"
                              transform="translate(-65.551 -248.207)"
                            />
                            <path
                              id="Path_6132"
                              data-name="Path 6132"
                              d="M172.728,448.025l-1.5.2a1.044,1.044,0,0,0,.281,2.068l1.5-.2a1.044,1.044,0,0,0-.281-2.068Z"
                              transform="translate(-35.466 -322.453)"
                            />
                            <path
                              id="Path_6133"
                              data-name="Path 6133"
                              d="M213.658,390.052l-1.5.2a1.044,1.044,0,1,0,.281,2.068l1.5-.2a1.044,1.044,0,0,0-.281-2.068Z"
                              transform="translate(-69.454 -274.469)"
                            />
                            <path
                              id="Path_6134"
                              data-name="Path 6134"
                              d="M243.5,354.45l-1.5.2a1.044,1.044,0,0,0,.138,2.078,1.032,1.032,0,0,0,.141-.009l1.5-.2a1.044,1.044,0,1,0-.279-2.068Z"
                              transform="translate(-93.975 -245.216)"
                            />
                            <path
                              id="Path_6135"
                              data-name="Path 6135"
                              d="M304.588,389.287l-1.412-.559a1.044,1.044,0,1,0-.768,1.942l1.412.559a1.032,1.032,0,0,0,.384.073,1.044,1.044,0,0,0,.384-2.014Z"
                              transform="translate(-143.818 -273.339)"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="head khf l-m">Kids friendly events</p>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div className="events-inner-box">
                      <div className="ico-sec">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="79.999"
                          height="80"
                          viewBox="0 0 79.999 80"
                        >
                          <g
                            id="noun-festival-1753557"
                            transform="translate(-126.001 -55.998)"
                          >
                            <path
                              id="Path_6136"
                              data-name="Path 6136"
                              d="M466.677,237.066a1.033,1.033,0,0,0-.838-.707l-7.167-1.037-3.2-6.457a1.079,1.079,0,0,0-1.857,0l-3.2,6.457-7.167,1.037a1.037,1.037,0,0,0-.574,1.77l5.182,5.024-1.222,7.094a1.036,1.036,0,0,0,1.5,1.095l6.41-3.352,6.41,3.352a1.037,1.037,0,0,0,1.5-1.094l-1.223-7.094,5.182-5.024a1.034,1.034,0,0,0,.267-1.064Zm-7.283,4.98a1.033,1.033,0,0,0-.3.921l.96,5.567-5.032-2.632a1.037,1.037,0,0,0-.962,0l-5.032,2.632.959-5.567a1.035,1.035,0,0,0-.3-.921l-4.06-3.937,5.617-.812a1.03,1.03,0,0,0,.78-.565l2.517-5.073,2.517,5.073a1.033,1.033,0,0,0,.78.565l5.617.812Z"
                              transform="translate(-260.726 -142.001)"
                            />
                            <path
                              id="Path_6137"
                              data-name="Path 6137"
                              d="M476.813,62.233,471.4,61.45l-2.418-4.875a1.036,1.036,0,0,0-1.857,0l-2.419,4.875-5.41.783a1.037,1.037,0,0,0-.574,1.77l3.913,3.793-.924,5.354a1.037,1.037,0,0,0,1.5,1.094l4.84-2.531,4.84,2.531a1.043,1.043,0,0,0,.481.119A1.038,1.038,0,0,0,474.4,73.15l-.924-5.354L477.386,64a1.038,1.038,0,0,0-.573-1.771Zm-5.175,4.455a1.033,1.033,0,0,0-.3.921l.66,3.827-3.462-1.81a1.034,1.034,0,0,0-.962,0l-3.462,1.81.66-3.827a1.036,1.036,0,0,0-.3-.921l-2.79-2.706,3.86-.558a1.03,1.03,0,0,0,.78-.565l1.732-3.49,1.732,3.49a1.032,1.032,0,0,0,.78.565l3.861.558Z"
                              transform="translate(-273.809 -0.002)"
                            />
                            <path
                              id="Path_6138"
                              data-name="Path 6138"
                              d="M170.212,416.827a1.033,1.033,0,0,0-.838-.707l-5.058-.732-2.26-4.556a1.079,1.079,0,0,0-1.857,0l-2.26,4.556-5.058.732a1.037,1.037,0,0,0-.574,1.77l3.655,3.545-.863,5a1.036,1.036,0,0,0,1.5,1.1l4.524-2.365,4.523,2.365a1.057,1.057,0,0,0,.482.118,1.035,1.035,0,0,0,1.021-1.213l-.863-5,3.656-3.545a1.037,1.037,0,0,0,.265-1.064Zm-5.757,3.5a1.033,1.033,0,0,0-.3.921l.6,3.475-3.145-1.645a1.037,1.037,0,0,0-.962,0l-3.146,1.645.6-3.476a1.036,1.036,0,0,0-.3-.921l-2.534-2.457,3.508-.507a1.033,1.033,0,0,0,.78-.565l1.574-3.171L162.7,416.8a1.033,1.033,0,0,0,.78.565l3.508.507Z"
                              transform="translate(-21.18 -291.654)"
                            />
                            <path
                              id="Path_6139"
                              data-name="Path 6139"
                              d="M351.961,399.105A1.037,1.037,0,0,0,353,398.068v-2.279h2.309a1.037,1.037,0,0,0,0-2.074H353v-2.278a1.037,1.037,0,0,0-2.074,0v2.278h-2.309a1.037,1.037,0,0,0,0,2.074h2.309v2.279A1.037,1.037,0,0,0,351.961,399.105Z"
                              transform="translate(-182.182 -275.273)"
                            />
                            <path
                              id="Path_6140"
                              data-name="Path 6140"
                              d="M193.175,113.9v2.279h-2.309a1.037,1.037,0,1,0,0,2.074h2.309v2.278a1.037,1.037,0,1,0,2.074,0v-2.278h2.309a1.037,1.037,0,0,0,0-2.074h-2.309V113.9a1.037,1.037,0,1,0-2.074,0Z"
                              transform="translate(-52.011 -46.333)"
                            />
                            <path
                              id="Path_6141"
                              data-name="Path 6141"
                              d="M240.942,83.168a16,16,0,0,1-6.06-10.807c-1.093-10.008-10.515-17.3-21.02-16.266a1.009,1.009,0,0,0-.926,1.095,1.033,1.033,0,0,0,1.138.89c9.358-.93,17.772,5.572,18.747,14.49a17.975,17.975,0,0,0,6.809,12.145,17.481,17.481,0,0,0-3.494,12.922c1.1,10.072,10.677,17.753,20.979,16.816l.046,0,1.81-.179c9.358-.932,17.772,5.573,18.745,14.49a1.023,1.023,0,0,0,1.03.893c.035,0,.073,0,.109-.006a1.007,1.007,0,0,0,.922-1.1c-1.091-10.008-10.511-17.3-21.02-16.266l-1.658.165h-.015c-9.258.922-17.9-5.964-18.891-15.044a15.573,15.573,0,0,1,3.1-11.51,19.7,19.7,0,0,0,12.5,2.94c.222-.014,5.463-.367,7.878-3.061a4.619,4.619,0,0,0,1.2-3.612,4.569,4.569,0,0,0-1.825-3.343c-2.851-2.2-8.062-1.546-8.265-1.517a19.31,19.31,0,0,0-11.848,5.863Zm12.113-3.885c1.263-.163,4.921-.282,6.707,1.1a2.637,2.637,0,0,1,1.053,1.953,2.7,2.7,0,0,1-.706,2.14c-1.528,1.709-5.169,2.295-6.483,2.378a17.635,17.635,0,0,1-11-2.5,17.247,17.247,0,0,1,10.424-5.066Z"
                              transform="translate(-73.782 0)"
                            />
                            <path
                              id="Path_6142"
                              data-name="Path 6142"
                              d="M128.074,131.791a1.03,1.03,0,0,0-1.037-1.021h0A1.03,1.03,0,0,0,126,131.8a15.945,15.945,0,0,0,16.1,15.718h.03l1.473,0a14.329,14.329,0,0,1,14.05,14.162,13.413,13.413,0,0,1-3.435,9.275,16.177,16.177,0,0,0-10.029-3.462h-.031c-.187-.009-4.628-.143-6.919,1.994a4.184,4.184,0,0,0-1.37,3.087,4.079,4.079,0,0,0,1.266,3.116c2.217,2.151,6.66,2.022,6.832,2.022a16.187,16.187,0,0,0,10.315-3.934,13.493,13.493,0,0,1,3.89,9.437,15.943,15.943,0,0,0,16.1,15.718,1.012,1.012,0,0,0,1.063-1.024,1.03,1.03,0,0,0-1.037-1.021.106.106,0,0,1-.026,0A13.883,13.883,0,0,1,160.246,183.2a15.535,15.535,0,0,0-4.494-10.88,15.414,15.414,0,0,0,3.974-10.676,16.413,16.413,0,0,0-16.054-16.183h-.164l-1.382,0H142.1a13.884,13.884,0,0,1-14.026-13.677Zm15.838,43.868c-1.045.029-4.014-.163-5.325-1.437a2.061,2.061,0,0,1-.645-1.618,2.191,2.191,0,0,1,.719-1.637c1.276-1.194,3.964-1.442,5.2-1.442.093,0,.179,0,.255,0h.026a14.169,14.169,0,0,1,8.576,2.866,14.123,14.123,0,0,1-8.81,3.264Z"
                              transform="translate(0 -62.928)"
                            />
                            <path
                              id="Path_6143"
                              data-name="Path 6143"
                              d="M382.691,79.4a5.374,5.374,0,1,0-5.374,5.334A5.361,5.361,0,0,0,382.691,79.4Zm-8.674,0a3.3,3.3,0,1,1,3.3,3.26A3.285,3.285,0,0,1,374.017,79.4Z"
                              transform="translate(-202.266 -14.721)"
                            />
                            <path
                              id="Path_6144"
                              data-name="Path 6144"
                              d="M156.407,252.1a6.083,6.083,0,1,0-6.129-6.083A6.114,6.114,0,0,0,156.407,252.1Zm0-10.093a4.01,4.01,0,1,1-4.055,4.01A4.037,4.037,0,0,1,156.407,242Z"
                              transform="translate(-19.782 -151.295)"
                            />
                            <path
                              id="Path_6145"
                              data-name="Path 6145"
                              d="M438.62,425.9a6.129,6.129,0,1,0,6.129-6.083A6.113,6.113,0,0,0,438.62,425.9Zm10.185,0a4.055,4.055,0,1,1-4.055-4.01A4.037,4.037,0,0,1,448.8,425.9Z"
                              transform="translate(-257.151 -299.404)"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="head khf l-m">College Festivals</p>
                    </div>
                    <div className="events-inner-box">
                      <div className="ico-sec">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="76.508"
                          height="80.507"
                          viewBox="0 0 76.508 80.507"
                        >
                          <g
                            id="noun-concert-3857954"
                            transform="translate(-70.005 0.004)"
                          >
                            <path
                              id="Path_6093"
                              data-name="Path 6093"
                              d="M107.535,6.336a3.8,3.8,0,1,1,7.607,0V32.329h2.536V22.82a3.8,3.8,0,1,1,7.607,0v9.509h2.536V25.356a3.8,3.8,0,1,1,7.607,0V35.5a3.782,3.782,0,0,1-.105.873,5.066,5.066,0,0,1,.105,1.028v1.268a11.4,11.4,0,0,1-.192,2.034,6.334,6.334,0,0,0,2.728-5.2V11.475a3.8,3.8,0,1,1,7.608,0V41.264l2.536-1.468V11.474a6.34,6.34,0,0,0-12.679,0v8.82a6.3,6.3,0,0,0-8.008.328,6.317,6.317,0,0,0-9.743-2.864V6.336a6.34,6.34,0,0,0-12.679,0V33.879a13.976,13.976,0,0,1,2.536-1Z"
                              transform="translate(-29.923)"
                            />
                            <path
                              id="Path_6094"
                              data-name="Path 6094"
                              d="M530.071,45.96a5.077,5.077,0,0,0,5.072-5.072V26.2L538.05,29.1h0a1.268,1.268,0,1,0,1.793-1.793l-5.072-5.072a1.268,1.268,0,0,0-2.165.9V36.5a5.069,5.069,0,1,0-2.536,9.457Z"
                              transform="translate(-394.573 -18.704)"
                            />
                            <path
                              id="Path_6095"
                              data-name="Path 6095"
                              d="M103.321,284.4c-.007-.012-.012-.025-.019-.038H80.782a1.269,1.269,0,0,1-1.268-1.268v-5.425a14.94,14.94,0,0,0,5.348.988,1.268,1.268,0,1,0,0-2.536A12.416,12.416,0,0,1,72.54,263.98V252.035a8.923,8.923,0,0,1,8.95-8.875h18.945v1.268a6.35,6.35,0,0,1-6.347,6.34H82.367a1.268,1.268,0,1,0,0,2.536,12.685,12.685,0,0,1,11.2,6.751,5.166,5.166,0,0,1,1.172-.929l.922-.533a15.336,15.336,0,0,0-4.906-5.288h3.334a8.89,8.89,0,0,0,8.883-8.875V243.16a2.539,2.539,0,0,0-2.537-2.536H81.49A11.461,11.461,0,0,0,70,252.035V263.98a14.643,14.643,0,0,0,6.974,12.435V283.1a3.807,3.807,0,0,0,3.8,3.8h23.983c-.015-.025-.032-.048-.046-.072Z"
                              transform="translate(0 -209.563)"
                            />
                            <path
                              id="Path_6096"
                              data-name="Path 6096"
                              d="M433.822,72.219a5.077,5.077,0,0,0,5.072-5.072V52.19l2.969,2.6a1.268,1.268,0,0,0,1.67-1.908l-5.072-4.438a1.268,1.268,0,0,0-2.1.954V62.761a5.069,5.069,0,1,0-2.536,9.457Z"
                              transform="translate(-310.789 -41.157)"
                            />
                            <path
                              id="Path_6097"
                              data-name="Path 6097"
                              d="M426.565,246.061l-1.4-2.425a1.29,1.29,0,0,0-1.734-.465,7.6,7.6,0,0,1-5.814.762,7.859,7.859,0,0,1-1.994-14.327,1.267,1.267,0,0,0,.464-1.73l-1.4-2.424h0a2.657,2.657,0,0,0-3.629-.985l-18.556,10.739,14.559,25.216L425.6,249.7a2.664,2.664,0,0,0,.962-3.634Z"
                              transform="translate(-280.918 -190.931)"
                              fill="none"
                              stroke="#000"
                              stroke-width="1"
                            />
                            <path
                              id="Path_6098"
                              data-name="Path 6098"
                              d="M260.191,309.43l-18.535,10.726a2.664,2.664,0,0,0-.963,3.635l1.4,2.425a1.269,1.269,0,0,0,1.734.464,7.6,7.6,0,0,1,5.813-.761,7.858,7.858,0,0,1,1.994,14.327,1.267,1.267,0,0,0-.464,1.73l1.4,2.425a2.654,2.654,0,0,0,1.622,1.248,2.691,2.691,0,0,0,2.006-.263l18.558-10.739Zm-3.015,12.5a1.268,1.268,0,0,1-.637-2.365l2.184-1.264a1.268,1.268,0,0,1,1.27,2.2l-2.183,1.263A1.273,1.273,0,0,1,257.176,321.931Zm3.164,5.493h0a1.268,1.268,0,0,1-.636-2.365l2.184-1.264h0a1.268,1.268,0,0,1,1.27,2.194l-2.184,1.264h0a1.264,1.264,0,0,1-.634.17Zm5.981,4.058-2.183,1.263h0a1.268,1.268,0,0,1-1.27-2.2l2.183-1.263a1.268,1.268,0,0,1,1.27,2.2Z"
                              transform="translate(-147.495 -265.739)"
                              fill="none"
                              stroke="#000"
                              stroke-width="1"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="head khf l-m">Live Concerts</p>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div className="events-inner-box events-inner-box2">
                      <div className="ico-sec">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="80"
                          height="96"
                          viewBox="0 0 80 96"
                        >
                          <g
                            id="noun-party-2914343"
                            transform="translate(-90.895 -10.94)"
                          >
                            <path
                              id="Path_6099"
                              data-name="Path 6099"
                              d="M126.116,183.09a1.19,1.19,0,1,0-.469,2.332l18.071,3.632h0a1.19,1.19,0,1,0,.469-2.332l-7.87-1.582,4.355-21.67h0A15.625,15.625,0,0,0,157.951,151l6.931-34.5h0a1.189,1.189,0,0,0-.932-1.4l-28.4-5.706a1.19,1.19,0,0,0-1.4.932l-6.93,34.493-.018.089h0A15.623,15.623,0,0,0,138.339,163l-4.355,21.67Zm10.133-71.122,26.066,5.238-3.135,15.605-29.213,10.425Zm-4.725,43.354a13.159,13.159,0,0,1-2.087-9.371l29.2-10.419-3.016,15.007a13.251,13.251,0,0,1-15.575,10.426l-.073-.015h-.006a13.168,13.168,0,0,1-8.439-5.626Z"
                              transform="translate(-33.794 -82.14)"
                            />
                            <path
                              id="Path_6100"
                              data-name="Path 6100"
                              d="M393.433,58.207A15.524,15.524,0,0,0,395.87,46.5l-6.461-34.586a1.189,1.189,0,0,0-1.388-.952L359.548,16.28a1.19,1.19,0,0,0-.952,1.388l6.46,34.582.017.091h0a15.554,15.554,0,0,0,17.09,12.616l4.059,21.727-7.891,1.474h0a1.19,1.19,0,0,0,.436,2.339l18.12-3.385h0a1.19,1.19,0,1,0-.436-2.339l-7.891,1.474L384.5,64.519a15.509,15.509,0,0,0,8.932-6.311Zm-6.143-44.69,5.434,29.092L364.759,37.7l-3.6-19.3ZM372.972,60.379a13.164,13.164,0,0,1-5.561-8.482l-2.186-11.7,27.964,4.911.342,1.832a13.251,13.251,0,0,1-10.548,15.49l-.075.014H382.9a13.165,13.165,0,0,1-9.93-2.066Z"
                              transform="translate(-226.964 0)"
                            />
                            <path
                              id="Path_6101"
                              data-name="Path 6101"
                              d="M205.42,304.075V301l1.492.67h0a1.19,1.19,0,0,0,1.573-.6l3.339-7.435a1.189,1.189,0,0,0-.6-1.573l-7.435-3.339h0a1.19,1.19,0,0,0-1.573.6l-2.432,5.412H196.08a1.19,1.19,0,0,0-1.19,1.19v8.15a1.19,1.19,0,0,0,1.19,1.19h8.151a1.19,1.19,0,0,0,1.19-1.189ZM203.9,291.384l5.263,2.365-2.364,5.264-1.381-.621v-2.466a1.189,1.189,0,0,0-1.19-1.19H202.4Zm-.862,11.5H197.27v-5.77h5.771Z"
                              transform="translate(-91.601 -228.308)"
                            />
                            <path
                              id="Path_6102"
                              data-name="Path 6102"
                              d="M438.235,206.7a1.19,1.19,0,0,0,.649-.638l3.183-7.5a1.191,1.191,0,0,0-.631-1.56l-5.463-2.317-.078-3.707a1.2,1.2,0,0,0-1.214-1.165l-8.148.171a1.19,1.19,0,0,0-1.164,1.214l.171,8.148h0a1.189,1.189,0,0,0,1.19,1.164h.026l3.075-.064-.639,1.505a1.19,1.19,0,0,0,.631,1.56l7.5,3.183a1.19,1.19,0,0,0,.911.008Zm-10.461-14.364,5.769-.121.121,5.769-2.017.043h0l-3.747.079Zm9.385,11.7-5.312-2.254.592-1.394,2.464-.052a1.19,1.19,0,0,0,1.164-1.214l-.038-1.833,3.383,1.435Z"
                              transform="translate(-281.649 -147.067)"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="head khf l-m">Private Parties</p>
                    </div>
                    <div className="events-inner-box">
                      <div className="ico-sec">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="80"
                          height="80"
                          viewBox="0 0 80 80"
                        >
                          <g
                            id="noun-restaurant-5001458"
                            transform="translate(-69.994 0.005)"
                          >
                            <path
                              id="Path_6321"
                              data-name="Path 6321"
                              d="M145.827,69.995h-.833V35.785a8.294,8.294,0,0,0,3.333-6.623,1.117,1.117,0,0,0-.088-.373L138.327,8.964v-4.8a4.167,4.167,0,0,0-4.166-4.167H85.827a4.167,4.167,0,0,0-4.166,4.167v4.8L71.749,28.789a1.158,1.158,0,0,0-.088.373,8.294,8.294,0,0,0,3.333,6.623v34.21h-.833a4.167,4.167,0,0,0-4.167,4.167v1.667h0a4.167,4.167,0,0,0,4.167,4.167h71.666a4.167,4.167,0,0,0,4.167-4.167V74.161h0a4.167,4.167,0,0,0-4.167-4.167Zm-5.833-34.167a6.675,6.675,0,0,1-6.615-5.833h13.23a6.675,6.675,0,0,1-6.615,5.833Zm-52.5,29.167h45a4.167,4.167,0,0,0,4.167-4.167V36.788a8.216,8.216,0,0,0,6.666,0V70H76.662V36.788a8.216,8.216,0,0,0,6.666,0v24.04a4.167,4.167,0,0,0,4.167,4.167Zm30.753-36.667L116.414,10h9.461l5.5,18.333Zm13.362,1.667a6.667,6.667,0,0,1-13.23,0Zm-15.036-1.667H103.406L105.239,10h9.5Zm.035,1.667a6.667,6.667,0,0,1-13.23,0ZM101.74,28.328H88.613L94.113,10h9.461Zm-.132,1.667a6.667,6.667,0,0,1-13.23,0Zm-6.615,7.5a8.322,8.322,0,0,0,7.5-4.767,8.283,8.283,0,0,0,15,0,8.283,8.283,0,0,0,15,0,8.351,8.351,0,0,0,2.5,3.057V60.828a2.5,2.5,0,0,1-2.5,2.5h-7.5V42.508a4.136,4.136,0,0,0-3.207-4.064c-3.033-.643-5.772,1.422-7.125,5.4-1.425,4.187-1.022,9.618,2,11.553v7.928h-10V55.082a9.732,9.732,0,0,0,3.333-7.588c0-5.054-3.363-9.167-7.5-9.167s-7.5,4.113-7.5,9.167a9.732,9.732,0,0,0,3.333,7.588v8.245H87.493a2.5,2.5,0,0,1-2.5-2.5V35.785a8.352,8.352,0,0,0,2.5-3.057,8.322,8.322,0,0,0,7.5,4.767Zm22.86,16.667c-2.5-1.2-2.86-6.115-1.613-9.778.4-1.182,1.965-5,5.2-4.305a2.459,2.459,0,0,1,1.885,2.43v20.82h-5V54.912a.833.833,0,0,0-.473-.75Zm-18.2-.167a8.062,8.062,0,0,1-2.99-6.5c0-4.135,2.617-7.5,5.833-7.5s5.833,3.365,5.833,7.5a8.057,8.057,0,0,1-2.99,6.5.832.832,0,0,0-.343.675v8.658h-5V54.673a.836.836,0,0,0-.343-.679Zm46.494-25.667H133.112L127.612,10h9.365ZM83.326,4.163a2.5,2.5,0,0,1,2.5-2.5H134.16a2.5,2.5,0,0,1,2.5,2.5V8.329H83.326ZM83.008,10h9.365l-5.5,18.333H73.841Zm-9.63,20h13.23a6.667,6.667,0,0,1-13.23,0Zm74.948,45.832a2.5,2.5,0,0,1-2.5,2.5H74.161a2.5,2.5,0,0,1-2.5-2.5V74.161h0a2.5,2.5,0,0,1,2.5-2.5h71.666a2.5,2.5,0,0,1,2.5,2.5Z"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="head khf l-m">Restaurants Shows</p>
                    </div>
                  </Col>
                </Row>
                <Row className="gx-1">
                  <Col xs={3}>
                    <div className="events-inner-box">
                      <div className="ico-sec">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="79.999"
                          height="74"
                          viewBox="0 0 79.999 74"
                        >
                          <g
                            id="noun-corporate-events-2139242"
                            transform="translate(-78.487 -30.542)"
                          >
                            <path
                              id="Path_6322"
                              data-name="Path 6322"
                              d="M251.119,176.187h26.868a1.247,1.247,0,0,0,1.244-1.244v-4.851a1.247,1.247,0,0,0-1.244-1.244H251.119a1.247,1.247,0,0,0-1.244,1.244v4.851A1.338,1.338,0,0,0,251.119,176.187Zm1.244-4.852h24.38V173.7h-24.38Z"
                              transform="translate(-146.014 -117.727)"
                            />
                            <path
                              id="Path_6323"
                              data-name="Path 6323"
                              d="M251.119,258.49h26.868a1.247,1.247,0,0,0,1.244-1.244V252.4a1.247,1.247,0,0,0-1.244-1.244H251.119a1.247,1.247,0,0,0-1.244,1.244v4.851A1.338,1.338,0,0,0,251.119,258.49Zm1.244-4.851h24.38V256h-24.38Z"
                              transform="translate(-146.014 -187.784)"
                            />
                            <path
                              id="Path_6324"
                              data-name="Path 6324"
                              d="M251.119,337.4h26.868a1.247,1.247,0,0,0,1.244-1.244v-4.851a1.247,1.247,0,0,0-1.244-1.244H251.119a1.247,1.247,0,0,0-1.244,1.244v4.851A1.338,1.338,0,0,0,251.119,337.4Zm1.244-4.851h24.38v2.363h-24.38Z"
                              transform="translate(-146.014 -254.953)"
                            />
                            <path
                              id="Path_6325"
                              data-name="Path 6325"
                              d="M187.35,148.9l-12.53-6.842V129.368a1.251,1.251,0,0,0-1.253-1.244H134.473a1.251,1.251,0,0,0-1.253,1.244v12.688l-12.53,6.842a1.266,1.266,0,0,0-.626,1v35.7a1.251,1.251,0,0,0,1.253,1.244h65.532a1.251,1.251,0,0,0,1.253-1.244V150.018a1.815,1.815,0,0,0-.752-1.12Zm-54.13,35.576H122.445V150.639l10.776-5.846Zm16.791,0v-8.708a4.762,4.762,0,0,1,9.523,0v8.708Zm22.429,0H161.915v-8.708a7.113,7.113,0,0,0-7.142-7.09,7.194,7.194,0,0,0-7.142,7.09v8.708h-11.9V130.489h36.714Zm13.157,0H174.822V144.793l10.776,5.846Z"
                              transform="translate(-35.481 -82.297)"
                            />
                            <path
                              id="Path_6326"
                              data-name="Path 6326"
                              d="M511.609,353.759H514.1a1.247,1.247,0,0,0,1.244-1.244,1.175,1.175,0,0,0-1.244-1.244h-2.488a1.244,1.244,0,1,0,0,2.488Z"
                              transform="translate(-368.069 -273.056)"
                            />
                            <path
                              id="Path_6327"
                              data-name="Path 6327"
                              d="M511.216,289.974l2.488,1.617c.249.124.373.249.622.249a1.535,1.535,0,0,0,1-.5,1.067,1.067,0,0,0-.373-1.617l-2.488-1.617a1.067,1.067,0,0,0-1.617.373.992.992,0,0,0,.373,1.493Z"
                              transform="translate(-368.297 -219.091)"
                            />
                            <path
                              id="Path_6328"
                              data-name="Path 6328"
                              d="M511.609,414H514.1a1.247,1.247,0,0,0,1.244-1.244,1.175,1.175,0,0,0-1.244-1.244h-2.488a1.244,1.244,0,1,0,0,2.488Z"
                              transform="translate(-368.069 -324.342)"
                            />
                            <path
                              id="Path_6329"
                              data-name="Path 6329"
                              d="M511.609,473.4H514.1a1.244,1.244,0,0,0,0-2.488h-2.488a1.244,1.244,0,1,0,0,2.488Z"
                              transform="translate(-368.069 -374.829)"
                            />
                            <path
                              id="Path_6330"
                              data-name="Path 6330"
                              d="M156.939,353.759h2.488a1.247,1.247,0,0,0,1.244-1.244,1.175,1.175,0,0,0-1.244-1.244h-2.488a1.244,1.244,0,1,0,0,2.488Z"
                              transform="translate(-65.889 -273.056)"
                            />
                            <path
                              id="Path_6331"
                              data-name="Path 6331"
                              d="M157.166,290.272c.249,0,.5,0,.622-.249l2.488-1.617a1.174,1.174,0,1,0-1.244-1.991l-2.488,1.617a1.106,1.106,0,0,0-.373,1.617,1.024,1.024,0,0,0,1,.622Z"
                              transform="translate(-66.116 -217.65)"
                            />
                            <path
                              id="Path_6332"
                              data-name="Path 6332"
                              d="M156.939,414h2.488a1.247,1.247,0,0,0,1.244-1.244,1.175,1.175,0,0,0-1.244-1.244h-2.488a1.244,1.244,0,1,0,0,2.488Z"
                              transform="translate(-65.889 -324.342)"
                            />
                            <path
                              id="Path_6333"
                              data-name="Path 6333"
                              d="M156.939,473.4h2.488a1.244,1.244,0,0,0,0-2.488h-2.488a1.244,1.244,0,0,0,0,2.488Z"
                              transform="translate(-65.889 -374.829)"
                            />
                            <path
                              id="Path_6334"
                              data-name="Path 6334"
                              d="M516,31.4H500.579a1.247,1.247,0,0,0-1.244,1.244v9.08a8.97,8.97,0,0,0,7.712,8.832v6.593h-4.353a1.244,1.244,0,0,0,0,2.488h11.071a1.244,1.244,0,0,0,0-2.488h-4.353V50.551a8.97,8.97,0,0,0,7.712-8.832v-9.2c.124-.622-.373-1.12-1.12-1.12Zm-1.12,2.363v4.353c-6.344-.622-9.827,1.742-13.061.622V33.758Zm-6.593,14.429a6.5,6.5,0,0,1-6.468-6.468v-.373c3.981.87,6.966-1.368,13.061-.622v1A6.612,6.612,0,0,1,508.292,48.187Z"
                              transform="translate(-358.656 -0.728)"
                            />
                            <path
                              id="Path_6335"
                              data-name="Path 6335"
                              d="M92.916,58.654a1.244,1.244,0,1,0,0-2.488H88.562V49.573a8.97,8.97,0,0,0,7.712-8.832V31.786a1.247,1.247,0,0,0-1.244-1.244h-15.3a1.247,1.247,0,0,0-1.244,1.244v9.08A8.97,8.97,0,0,0,86.2,49.7V56.29H81.846a1.244,1.244,0,1,0,0,2.488H92.917Zm.995-25.625v4.353c-6.344-.622-9.826,1.742-13.061.622V33.029ZM80.85,40.866v-.373c3.981.87,6.966-1.368,13.061-.622v1a6.5,6.5,0,0,1-6.468,6.468A6.611,6.611,0,0,1,80.85,40.866Z"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="head khf l-m">Corporate shows</p>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="welcome-btn-sec">
                <button
                  type="button"
                  className="l-sb wbtnn back-btn btn btn-primary pointer-hover"
                  onClick={() => scrollNext()}
                >
                  <span>Next</span>{" "}
                  <Lottie
                    animationData={Nextarrow}
                    loop={true}
                    className="nextarrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {itemId == 4 && (
        <div className="home-main-sec">
          <div className="inner-home-main-sec">
            <div
              className="section6 maindg postion-r"
              style={{ background: `url(${Dreambg})` }}
            >
              <div className="">
                <div className="join-step-text-sec">
                  <p className="sub-head khf black-color l-m">Have you ever</p>
                  <p className="heading khf red-color l-m">
                    Dreamed <span className="black-color">of a</span> Surprise
                    GIG
                  </p>
                  <p className="sub-bottom black-color l-sb">
                    for your Loved ones
                  </p>
                </div>
              </div>
              <Row>
                <Col lg={4}></Col>
                <Col lg={7}>
                  <Row>
                    <Col lg={4} md={4} xs={4}>
                      <div className="inner-dream-box text-center">
                        <div className="d-box-img">
                          <img src={Dreamimg1} alt="" />
                        </div>
                        <p className="dream-title l-sb">
                          Valentine's day Surprise
                        </p>
                      </div>
                    </Col>
                    <Col lg={4} md={4} xs={4}>
                      <div className="inner-dream-box inner-dream-box2 text-center">
                        <div className="d-box-img">
                          <img src={Dreamimg2} alt="" />
                        </div>
                        <p className="dream-title l-sb">
                          A musical gift to say SORRY
                        </p>
                      </div>
                    </Col>
                    <Col lg={4} md={4} xs={4}>
                      <div className="inner-dream-box text-center">
                        <div className="d-box-img">
                          <img src={Dreamimg3} alt="" />
                        </div>
                        <p className="dream-title l-sb">Proposal surprise</p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <div className="welcome-btn-sec">
                <button
                  type="button"
                  className="l-sb wbtnn back-btn btn btn-primary pointer-hover"
                  onClick={() => scrollNext()}
                >
                  <span>Next</span>{" "}
                  <Lottie
                    animationData={Nextarrow}
                    loop={true}
                    className="nextarrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {itemId == 5 && (
        <div className="home-main-sec">
          <div className="inner-home-main-sec">
            <div
              className="section7 maindg postion-r"
              style={{ background: `url(${Faturebg})` }}
            >
              <Row>
                <Col lg={8}>
                  <p className="about-heading khf red-color l-m">
                    Featured <span className="black-color l-sb">artists</span>
                  </p>
                </Col>
              </Row>
              <div className="main-featured-box">
                <Row className="gx-1 row-featured-box">
                  <Col lg={3} xl={3} md={4} xs={6}>
                    <div className="inner-featured-box postion-r">
                      <div className="featured-cat">
                        <span className="star-text l-r">Weddings</span>
                        <span className="star-text l-r">Gigs</span>
                      </div>
                      <img src={Featuredimg1} alt="" className="" />
                      <div className="name-sec">
                        <p className="m-name l-sb">Rahul Joshi</p>
                        <p className="m-city l-r">Mumbai</p>
                      </div>
                      <div className="star-sec-home">
                        <div className="inner-star-sec text-center">
                          <div>
                            <p className="m-0">
                              <BsFillStarFill className="star-class" />
                            </p>
                            <p className="star-text l-b">4.5/5</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} xl={3} md={4} xs={6}>
                    <div className="inner-featured-box postion-r">
                      <div className="featured-cat">
                        <span className="star-text l-r">Weddings</span>
                        <span className="star-text l-r">Gigs</span>
                      </div>
                      <img src={Featuredimg2} alt="" className="" />
                      <div className="name-sec">
                        <p className="m-name l-sb">Ria Roy</p>
                        <p className="m-city l-r">Delhi</p>
                      </div>
                      <div className="star-sec-home">
                        <div className="inner-star-sec text-center">
                          <div>
                            <p className="m-0">
                              <BsFillStarFill className="star-class" />
                            </p>
                            <p className="star-text l-b">4.5/5</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} xl={3} md={4} xs={6}>
                    <div className="inner-featured-box postion-r">
                      <div className="featured-cat">
                        <span className="star-text l-r">Weddings</span>
                        <span className="star-text l-r">Gigs</span>
                      </div>
                      <img src={Featuredimg3} alt="" className="" />
                      <div className="name-sec">
                        <p className="m-name l-sb">Rohan Rathod</p>
                        <p className="m-city l-r">Delhi</p>
                      </div>
                      <div className="star-sec-home">
                        <div className="inner-star-sec text-center">
                          <div>
                            <p className="m-0">
                              <BsFillStarFill className="star-class" />
                            </p>
                            <p className="star-text l-b">4.5/5</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} xl={3} md={4} xs={6}>
                    <div className="inner-featured-box postion-r">
                      <div className="featured-cat">
                        <span className="star-text l-r">Weddings</span>
                        <span className="star-text l-r">Gigs</span>
                      </div>
                      <img src={Featuredimg4} alt="" className="" />
                      <div className="name-sec">
                        <p className="m-name l-sb">Joy Baro</p>
                        <p className="m-city l-r">Guwahati</p>
                      </div>
                      <div className="star-sec-home">
                        <div className="inner-star-sec text-center">
                          <div>
                            <p className="m-0">
                              <BsFillStarFill className="star-class" />
                            </p>
                            <p className="star-text l-b">4.5/5</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="welcome-btn-sec">
                <button
                  type="button"
                  className="l-sb wbtnn back-btn btn btn-primary pointer-hover"
                  onClick={() => scrollNext()}
                >
                  <span>Next</span>{" "}
                  <Lottie
                    animationData={Nextarrow}
                    loop={true}
                    className="nextarrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {itemId == 6 && (
        <div className="home-main-sec">
          <div className="inner-home-main-sec">
            <div
              className="section8 maindg postion-r"
              style={{ background: `url(${Protobg})` }}
            >
              <Row>
                <Col lg={4}>
                  <div className="proto-img-text">
                    <img src={Mikeimg} alt="" className="" />
                    <div className="join-step-text-sec">
                      <p className="sub-head khf black-color l-m">Livetunes</p>
                      <p className="heading khf red-color l-m">Portfolio</p>
                    </div>
                  </div>
                </Col>
                <Col lg={8}>
                  <div className="video-sec">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/f1b6pHeMaRY"
                      title="Yamaha teens rock 2019 - Don Bosco school, Kolkata- Winners. -Feeling Good new version -Live Prfmnce"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </Col>
              </Row>

              <div className="welcome-btn-sec">
                <button
                  type="button"
                  className="l-sb wbtnn back-btn btn btn-primary pointer-hover"
                  onClick={() => scrollNext()}
                >
                  <span>Next</span>{" "}
                  <Lottie
                    animationData={Nextarrow}
                    loop={true}
                    className="nextarrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {itemId == 7 && (
        <div className="home-main-sec">
          <div className="inner-home-main-sec">
            <div
              className="section9 maindg postion-r"
              style={{ background: `url(${Clientbg})` }}
            >
              <div className="">
                <div className="join-step-text-sec">
                  <p className="sub-head khf black-color l-m">
                    What our <span className="red-color">Clients</span>
                  </p>
                  <p className="heading khf black-color l-m">wrote about us</p>
                </div>
              </div>
              <Row>
                <Col lg={4}></Col>
                <Col lg={7}>
                  <Row>
                    <Col lg={4} md={4} xs={4}>
                      <div className="inner-dream-box inner-client-box">
                        <div className="d-box-img">
                          <img src={Client1} alt="" />
                        </div>
                        <p className="dream-title l-sb">Rohit kumar</p>
                        <div className="star-mark">
                          <span>
                            <BsFillStarFill />
                          </span>
                          <span>
                            <BsFillStarFill />
                          </span>
                          <span>
                            <BsFillStarFill />
                          </span>
                          <span>
                            <BsFillStarFill />
                          </span>
                          <span className="gray-star">
                            <BsFillStarFill />
                          </span>
                        </div>
                        <p className="client-para l-m">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's
                        </p>
                      </div>
                    </Col>
                    <Col lg={4} md={4} xs={4}>
                      <div className="inner-dream-box inner-dream-box2 inner-client-box">
                        <div className="d-box-img">
                          <img src={Client2} alt="" />
                        </div>
                        <p className="dream-title l-sb">Shreeya K</p>
                        <div className="star-mark">
                          <span>
                            <BsFillStarFill />
                          </span>
                          <span>
                            <BsFillStarFill />
                          </span>
                          <span>
                            <BsFillStarFill />
                          </span>
                          <span>
                            <BsFillStarFill />
                          </span>
                          <span className="gray-star">
                            <BsFillStarFill />
                          </span>
                        </div>
                        <p className="client-para l-m">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's
                        </p>
                      </div>
                    </Col>
                    <Col lg={4} md={4} xs={4}>
                      <div className="inner-dream-box inner-client-box">
                        <div className="d-box-img">
                          <img src={Client3} alt="" />
                        </div>
                        <p className="dream-title l-sb">Rajesh Shah</p>
                        <div className="star-mark">
                          <span>
                            <BsFillStarFill />
                          </span>
                          <span>
                            <BsFillStarFill />
                          </span>
                          <span>
                            <BsFillStarFill />
                          </span>
                          <span>
                            <BsFillStarFill />
                          </span>
                          <span>
                            <BsFillStarFill />
                          </span>
                        </div>
                        <p className="client-para l-m">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <div className="welcome-btn-sec">
                <button
                  type="button"
                  className="l-sb wbtnn back-btn btn btn-primary pointer-hover"
                  onClick={() => scrollNext()}
                >
                  <span>Next</span>{" "}
                  <Lottie
                    animationData={Nextarrow}
                    loop={true}
                    className="nextarrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {itemId == 8 && (
        <div className="home-main-sec">
          <div className="inner-home-main-sec">
            <div
              className="section1 maindg postion-r"
              style={{ background: `url(${Joinbg})` }}
            >
              <Row>
                <Col lg={7}>
                  <div className="enjoy-sec">
                    <p className="sub-head l-sb red-color">
                      We hope you enjoyed <br />
                      this musical journey!!
                    </p>
                    <p className="heading khf  black-color l-m">
                      Want to be a part of Livetunes{" "}
                      <span className="red-color">Community</span>?
                    </p>
                  </div>
                </Col>
                <Col lg={5}>
                  <div className="musicico">
                    <Lottie animationData={Musicico} loop={true} />
                  </div>
                </Col>
              </Row>

              <img src={Eventmanager} alt="" className="eventmanager-img-sec" />
              <div className="eventmanager-btn-sec">
              <Link to="/signup">

                <button
                  type="button"
                  className="l-sb wbtnn back-btn btn btn-primary"
                  onClick={() => {joinAs('User')}}
                  >
                  Join as a <br /> Organiser
                </button>
              </Link>
              </div>

              <img src={Guitarist} alt="" className="guitarist-img-sec" />
              <div className="guitarist-btn-sec">
              <Link to="/signup">
                <button
                  type="button"
                  className="l-sb wbtnn back-btn btn btn-primary"
                  onClick={() => {joinAs('Artist')}}
                >
                  Join as <br /> an Artist
                </button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
