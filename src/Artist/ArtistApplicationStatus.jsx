import React, {useEffect} from "react";
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import { useDispatch ,useSelector } from "react-redux";
import Slider from "react-slick";
import Skeleton from 'react-loading-skeleton'
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import DimensionsProvider from '../hooks/DimensionsProvider';
import SoundfontProvider from '../hooks/SoundfontProvider';
import { RxClipboard, RxClipboardCopy, RxComponent2, RxMagicWand, RxDotFilled } from "react-icons/rx";
import { Navigate, useNavigate  } from 'react-router-dom';
import { getArtistDetails, getArtistsApplicationStatusQuotes, getArtistsApplicationStatusQuizes } from "../redux/artistSlice";

const ArtistApplicationStatus = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { joiningType, ArtistIsNotSubmitted, ArtistIsPending, ArtistIsApproved, ArtistIsRejected } = useSelector(state => state.userAuth);
    const { artistApplicationStatusQuotesLoading, artistApplicationQuotes, artistApplicationQuizes } = useSelector(state => state.artist);

    

    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const factsSettings = {
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const quizSettings = {
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      speed: 4000,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    // webkitAudioContext fallback needed to support Safari
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';


    const noteRange = {
      first: MidiNumbers.fromNote('c3'),
      last: MidiNumbers.fromNote('f4'),
    };

    const keyboardShortcuts = KeyboardShortcuts.create({
      firstNote: noteRange.first,
      lastNote: noteRange.last,
      keyboardConfig: KeyboardShortcuts.HOME_ROW,
    });

    useEffect(()=>{
        if(joiningType != 'Artist') {
            navigate("/");
        }
        if(ArtistIsNotSubmitted) {
            navigate("/");
        }
        dispatch(getArtistDetails());
        dispatch(getArtistsApplicationStatusQuotes());
        dispatch(getArtistsApplicationStatusQuizes());
      },[]);  
  return (
    <>
        <div className="wrapper">
            <div className="sidebar">
            <SideNavBar />
            </div>
            <div className="main">
            <div className="header">
                <NavBar />
            </div>
            <div className="main-content">
                <Container fluid>
                   <div className="main-artists-list">
                       <Slider {...settings} className="application_status_slider">
                          <div className="piano_section">
                              <h3 className="piano_title">Let's play some music</h3>
                              <DimensionsProvider>
                                  {({ containerWidth, containerHeight }) => (
                                    <SoundfontProvider
                                      instrumentName="acoustic_grand_piano"
                                      audioContext={audioContext}
                                      hostname={soundfontHostname}
                                      render={({ isLoading, playNote, stopNote }) => (
                                        <Piano
                                          noteRange={noteRange}
                                          width={containerWidth}
                                          playNote={playNote}
                                          stopNote={stopNote}
                                          disabled={isLoading}
                                                    keyboardShortcuts={keyboardShortcuts}

                                          {...props}
                                        />
                                      )}
                                    />
                                  )}
                                </DimensionsProvider>
                          </div>
                          <div className="facts_section">
                              <h3 className="piano_title">Know some astonishing facts</h3>
                              <div className="facts_slider_section">
                                {artistApplicationStatusQuotesLoading ? (
                                    <Slider {...factsSettings} className="facts_slider">
                                      {
                                        [...Array(6)].map((e, i) => {
                                          return (
                                            <div key={`slider_${i}`}>
                                                <p className="mb-4">Fetching ....</p>
                                            </div>
                                          )
                                        })
                                      }
                                    </Slider>
                                  ):(
                                    <Slider {...factsSettings} className="facts_slider">
                                      {
                                        artistApplicationQuotes.map((quote,index) => {
                                          return (
                                            <div key={`quote_${index}`}>
                                              <h3 className="fact_heading"> <RxMagicWand className="fact_heading_icon" /> {quote.HeadText}</h3>
                                              <p className="fact_desc">{quote.SubText}
                                              </p>
                                          </div>
                                            )
                                        })
                                      }
                                    </Slider>
                                  )}
                                  
                              </div>
                          </div>
                          <div className="piano_section">
                            <div className="quiz_section">
                                <h3 className="piano_title">Let's play a Musical quiz</h3>
                                <h3 className="question_head">Question <span className="current_que">{1}</span>/<span className="total_que">{artistApplicationQuizes.length}</span></h3>
                                <Slider {...quizSettings} className="facts_slider">
                                    {artistApplicationQuizes.map((quiz,index) => {
                                        return (
                                            <div key={`quiz_${index}`}>
                                              <p className="question_title">{quiz.QuizName}</p>
                                              <Row className="question_ans">
                                                  {quiz.selQuizOpt.map((opt,indx) => {
                                                    return (
                                                      <Col lg={6} md="6" key={`otp_${indx}`}>
                                                        <span className="ans">{opt.QuizOptName}</span>
                                                    </Col>
                                                      )
                                                  })}
                                              </Row>
                                            </div>
                                          )
                                      })}

                              </Slider>
                              </div>
                              <div className="quiz_section">
                                  <div>
                                    {/*{artistApplicationQuizes.map((quiz,index) => {
                                      return (
                                          <RxDotFilled key={`top_dots_${index}`} className="quiz_result_dot quiz_result_dot" />
                                        )
                                    })}*/}
                                        {/*<h3 className="question_head">Question <span className="current_que">{artistApplicationQuizes.length}</span>/<span className="total_que">{artistApplicationQuizes.length}</span></h3>*/}
                                      {/*<RxDotFilled className="quiz_result_dot quiz_result_dot_ans_wrong" />
                                      <RxDotFilled className="quiz_result_dot" />
                                      <RxDotFilled className="quiz_result_dot" />
                                      <RxDotFilled className="quiz_result_dot" />*/}
                                  </div>
                                  
                                  
                                  
                                 
                              </div>
                          </div>
                      </Slider>
                      <p className="piano_sub_text">You can expect to hear form our team within 2 weeks via email provided</p>
                      <section className="steps-progressbar">
                        <ol className="steps l-b">
                            <li className="step is-active" data-step="1">
                                <RxClipboard className="status_icon" />
                                <span className="status_label"> Application Submitted</span>
                            </li>
                            <li className="step is-active" data-step="2">
                                <RxClipboardCopy className="status_icon" />
                                <span className="status_label"> In Review</span>
                            </li>
                            <li className={`step ${ArtistIsApproved || ArtistIsRejected ? 'is-active' : 'active'}`} data-step="3">
                                <RxComponent2 className="status_icon" />
                                <span className="status_label">Application Result</span>
                            </li>
                        </ol>
                    </section>
                        {ArtistIsRejected && (
                        <div>
                            <p className="text-center l-r red-color fs-5 mt-2">Your application has been rejected, please click <span className="green-color cursor-pointer underline">here</span> for more details.</p>
                        </div>
                        )}
                        {ArtistIsApproved && (
                        <div>
                            <p className="text-center l-r red-color fs-5 mt-2">Your application has been approved, click <span onClick={() => {navigate('/my-profile')}} className="green-color cursor-pointer underline">here</span> to update your profile.</p>
                        </div>
                        )}
                    </div>
                </Container>
            </div>
            </div>
        </div>
    </>
  )
}

export default ArtistApplicationStatus
