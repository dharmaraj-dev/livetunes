import React, { useState } from 'react';
import Stack from "react-bootstrap/Stack";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { RxCross2 } from "react-icons/rx";
import Art from "../assets/images/art.png";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { CgToday } from "react-icons/cg";
import StarRate from "../OnBoard/StarRate";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import moment from 'moment';
import {Link} from "react-router-dom";
import { Rating } from 'react-simple-star-rating'
import { useDispatch, useSelector } from "react-redux";
import { addFeedbackForArtist } from "../redux/userSlice";
import { successToast, errorToast, infoToast } from "../services/toast-service";
import Swal from 'sweetalert2'


const PastBookings = (props) => {
  const dispatch = useDispatch();

  const { addFeedbackLoading } = useSelector(state => state.user);

  const userFeedLogs = props.feedLogs;
  const [showFeedbackModel, setShowFeedbackModel] = useState(false);

  const handleClose = () => setShowFeedbackModel(false);
  const handleShow = () => setShowFeedbackModel(true);

  const [LikeRemark, setLikeRemark] = useState("");
  const [DislikeRemark, setDislikeRemark] = useState("");
  const [ExtraRemark, setExtraRemark] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [selFeedLog, setSelFeedLog] = useState([]);


  const handleRating = (rate,logId,name) => {
   const alreadyAdded = selFeedLog?.filter((log) =>  {return (log.UFeedMId == logId)});
   if(alreadyAdded.length > 0) {
    setSelFeedLog(
      selFeedLog.map(el => (el.UFeedMId === logId ? {...el, Score:rate} : el))
    );
   } else {
    setSelFeedLog([...selFeedLog, ...[{UFeedMId: logId, Score: rate, UFeedMName: name}] ])
   }
  }

  const submitFeedbackForArtist = (e) => {
    e.preventDefault();
    if(selFeedLog.length != userFeedLogs.length) {
      setErrorMessage("Please add all mendatory ratings.")
      return false;
    } else {
      setErrorMessage("");
      let ORating = 0;
      selFeedLog.map((rating) => {
        ORating+=rating.Score;
      })
      const feedbackData = {
        "TransactId": props.data.TransactId,
        LikeRemark,
        DislikeRemark,
        ExtraRemark,
        ORating,
        selFeedLog
      }
      dispatch(addFeedbackForArtist(feedbackData)).then((res) => {
        handleClose();
        setLikeRemark("");
        setDislikeRemark("");
        setExtraRemark("");
        setSelFeedLog([]);
        if(res.data.IsSuccess) {
          Swal.fire('Feedback added successfully.', '', 'success');
        } else {
          Swal.fire('Feedback not added, try again later.', '', 'error');
        }
      }).catch((err) => {
        handleClose();
        Swal.fire('Feedback not added, try again later.', '', 'error');
      });
    }
  }


  return (
    <>
      <div className="cart-details-box cart-move-box">
        <div className="cart-header">
          <Stack direction="horizontal" gap={5}>
            <h4 className="l-sb">Booking ID : {props.data.TransactId}</h4>
            <h4 className="l-sb ms-auto">{moment(props.data.EventDate).format("DD, MMM, YYYY")}</h4>
            <h5 className="l-b red-color text-decoration-underline">
              <Link to={`/cart/${btoa(props.data.TransactId)}`} className="text-reset cursor-pointer">Invoice</Link></h5>
          </Stack>
        </div>
        <div className="d-flex postion-r">
          <div className="img-sec">
            <img src={props.data.ProfileURL != null ? props.data.ProfileURL : Art} alt="" className="w-100" />
          </div>
          <div className="inner-artist-detail">
            <h4 className="l-sb">{props.data.ArtistName}</h4>
            <div className="value-sec l-b">
              <span>{props.data.BillAmt}</span>
            </div>
            <Stack direction="horizontal" gap={2}>
              <div className="red-color"><IoLocationSharp/></div>
              <div className="l-r sub-head">Location :</div>
              <div className="l-r sub-head">{props.data.CityName} , {props.data.StateName}</div>
            </Stack>
            <Stack direction="horizontal" gap={2}>
              <div className="red-color"><IoIosMusicalNotes/></div>
              <div className="l-r sub-head">Event type :</div>
              <div className="l-sb sub-head">{props.data.EventType}</div>
            </Stack>

            <Stack direction="horizontal" gap={2}>
              <div className="red-color"><MdOutlineDateRange/></div>
              <div className="l-r sub-head">Event date :</div>
              <div className="l-sb sub-head">{moment(props.data.EventDate).format("DD, MMM, YYYY")}</div>
            </Stack>

            <Stack direction="horizontal" gap={2}>
              <div className="red-color"><CgToday/></div>
              <div className="l-r sub-head">Event days :</div>
              <div className="l-sb sub-head">{props.data.EventDays} day</div>
            </Stack>
          </div>
        </div>
        <div className="cart-footer">
          <Stack direction="horizontal" gap={3}>
            <div className="d-flex gap-2">
               <Rating 
                  size={27}
                  allowFraction={true}
                  initialValue={props.data?.Rating}
                  fillColor="#fd3743"
                  readonly={true}
                />
            </div>
            {props?.selBookFeedback?.length == 0 && (
              <div className="ms-auto">
                  <h5 className="l-b red-color"><a className="text-reset cursor-pointer"  onClick={handleShow}>Give Feedback</a></h5>
              </div>
            )}
            
          </Stack>
        </div>

        <Modal
            show={showFeedbackModel}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
            size="lg"
            className="give-feedback-sec"
        >
            
            <div className="closeButtonr" onClick={handleClose}>
                <RxCross2/>
            </div>
            <Modal.Body>
                <div className="head-sec">
                    <h4 className="l-sb">Feedback and review</h4>
                </div>
                {userFeedLogs.map((fdLog,index) => {
                  return (
                    <Stack key={`feedLog_${index}`} direction="horizontal" gap={3} className="mb-1">
                        <h5 className="l-r">{fdLog.UFeedMName} <sup className="red-color">*</sup> </h5>
                        <div className="ms-auto">
                          <Rating 
                            size={27}
                            fillColor="#fd3743"
                            iconsCount={fdLog.MaxRating}
                            onClick={(rate) => {handleRating(rate, fdLog.UFeedMId, fdLog.UFeedMName)}}
                            />
                        </div>
                    </Stack>
                  ) 
                })}
                <section>
                    <Form onSubmit={(e) => {submitFeedbackForArtist(e)}} method="post">
                    <Row>
                        <Col lg="6" className="mt-3">
                            <Form.Label className="l-sb"><AiFillLike className="red-color"/> Likes</Form.Label>
                            <Form.Control placeholder="What you liked about the artists?" type="text" value={LikeRemark} onChange={(e) => {setLikeRemark(e.target.value)}} />
                        </Col>
                        <Col lg="6" className="mt-3">
                            <Form.Label className="l-sb"><AiFillDislike className="red-color"/> Dislikes</Form.Label>
                            <Form.Control placeholder="What you Disliked about the artists?" type="text" value={DislikeRemark} onChange={(e) => {setDislikeRemark(e.target.value)}}/>
                        </Col>
                        <Col lg="12" className="mt-3">
                            <Form.Label className="l-sb">Tell us more</Form.Label>
                            <Form.Control as="textarea" placeholder="Type any additional feedback" style={{ height: '100px' }} value={ExtraRemark} onChange={(e) => {setExtraRemark(e.target.value)}} />
                        </Col>
                        <Col>
                          <p className="red-color">{errorMessage}</p>
                        </Col>
                        <p className="text-center m-0">
                            <button
                              type="submit"
                              className="l-b btnn btn btn-primary border-radius-36"
                              disabled={addFeedbackLoading}
                              >
                              {addFeedbackLoading && (
                                <span className="spinner-border spinner-border-sm"></span>
                              )}
                              <span> SUBMIT</span>
                            </button>
                        </p>
                    </Row>
                    </Form>
                </section>
            </Modal.Body>
        </Modal>


      </div>
    </>
  );
};

export default PastBookings;
