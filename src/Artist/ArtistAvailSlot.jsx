import React, {useState, useMemo, useCallback, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton'
import { useDispatch, useSelector } from "react-redux";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../Layout/NavBar'
import SideNavBar from '../Layout/SideNavBar'
import moment from "moment";
import { getSlots, addArtistSlot, updateArtistSlot } from "../redux/artistSlotsSlice";
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import { successToast, errorToast, infoToast } from "../services/toast-service";
import { Modal } from 'react-bootstrap';
import { RxCross2 } from "react-icons/rx";
import Form from 'react-bootstrap/Form';
import ThreeDotLoader from '../Artist/ThreeDotLoader';
const mLocalizer = momentLocalizer(moment)


const ArtistAvailSlot = () => {
  const dispatch = useDispatch();
  const { loading, addUpdateLoading, error, slots } = useSelector(state => state.artistSlots);
  const { ArtistId } = useSelector(state => state.auth);


    const [myEvents, setEvents] = useState(slots)
    const [show, setShow] = useState(false);
    const [slotPrice,setSlotPrice] = useState("");
    const [travelPrice,setTravelPrice] = useState("");
    const [foodPrice,setFoodPrice] = useState("");
    const [startDate,setStartDate] = useState("");
    const [endDate,setEndDate] = useState("");
    const [slotDisabled, setSlotDisabled] = useState(false);
    const [slotBooked, setSlotBooked] = useState(false);
    const [editedSlotId,setEditedSlotId] = useState(0);

    const events = slots.map((slt)=>{
        return {
          id: slt.ASlotId,
          title: "Price: "+slt.PerShowRate,
          start: new Date(slt.StartDate),
          end: new Date(slt.EndDate),
          allDay: false,
          TravelFees: slt.TravelFees,
          PerShowRate: slt.PerShowRate,
          FoodStay: slt.FoodStay,
          isbooked: slt.isbooked,
          ASlotId: slt.ASlotId
        }
      })

    const handleClose = () => {
      setSlotPrice("");
      setTravelPrice("");
      setFoodPrice("");
      setStartDate("");
      setEndDate("");
      setEditedSlotId(0);
      setSlotDisabled(false);
      setSlotBooked(false);
      setShow(false);
    }

    const handleShow = ({start,end}) => {
      setStartDate(start);
      setEndDate(end);
      setShow(true);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      let data = [
        {
          "start": moment(startDate).format("YYYY-MM-DD HH:mm:ss"),
          "end": moment(endDate).format("YYYY-MM-DD HH:mm:ss"),
          "price": slotPrice,
          "travelFees": travelPrice,
          "foodAndStay": foodPrice,
        }
      ]

      
      if(editedSlotId === 0) {
        //add
        dispatch(addArtistSlot(data)).then((res) => {
            if(!addUpdateLoading) {
              handleClose();
              successToast("Slot added.")
            } else if(error) {
              alert('api error');
            }
        });
      } else {
        //update
        data[0].aslotid = editedSlotId;
        dispatch(updateArtistSlot(data)).then((res) => {
            if(!addUpdateLoading) {
              handleClose();
              setEditedSlotId(0);
              successToast("Slot updated.");
            } else if(error) {
              alert('api error');
            }
        });
      }      
    }
    const handleChange = (e) => {
      if(e.target.id === "slotPrice"){
        setSlotPrice(Number(e.target.value));
      }else if(e.target.id === "travelPrice"){
        setTravelPrice(Number(e.target.value));
      }else if(e.target.id === "foodPrice"){
        setFoodPrice(Number(e.target.value));
      }
    }

    const handleSelectSlot = useCallback(
        ({ start, end }) => {
            if ( start.getTime() > new Date().getTime()) {
              // handleShow({start,end });
              setStartDate(moment(start).format("YYYY-MM-DD HH:mm:ss"));
              setEndDate(moment(end).format("YYYY-MM-DD HH:mm:ss"));
              setShow(true);
             } else {
                errorToast("Invalid slot.")
                return false;
             }          
        },
        [setEvents]
      )

      const customHandleSelect = useCallback(
        ({st,en}) => {
          setEvents((prev) => [...prev, { startDate, endDate,  PerShowRate:slotPrice,TravelFees:travelPrice, FoodStay:foodPrice }]);
        },
        [setEvents]
      )
    
      const handleSelectEvent = useCallback(
        (event) => {
          console.log(moment(event.start).isBefore())
          if(moment(event.start).isBefore()) {
            setSlotDisabled(true);
          }
          setStartDate(moment(event.start).format("YYYY-MM-DD HH:mm:ss"));
          setEndDate(moment(event.end).format("YYYY-MM-DD HH:mm:ss"))
          setSlotPrice(event.PerShowRate);
          setTravelPrice(event.TravelFees);
          setFoodPrice(event.FoodStay);
          setEditedSlotId(event.ASlotId);
          setSlotBooked(event.isbooked);
          setShow(true);
        },
      []
      )
    
      const { defaultDate, scrollToTime } = useMemo(
        () => ({
          defaultDate: new Date(),
          scrollToTime: new Date(),
        }),
        []
      )

      const EventComponent = (props) => {
         return (
            <div>
              <div>Price: {props.eventData.event.PerShowRate}/-</div>
            </div>)
      };


       const formats = {
        eventTimeRangeFormat: () => { 
          return "";
        },
      };

      const tileDisabled = ({ activeStartDate, date, view }) => {
        return date < new Date()
     }

     useEffect(()=>{
      window.scrollTo(0, 0)
      dispatch(getSlots(ArtistId));
     },[])
    

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
                {loading ? (
                  <Row>
                    <Col xl={3} lg={3} md={4} sm={12}>
                      <Skeleton className="mr-1" width="32%" inline={true} height="30px" />
                      <Skeleton className="mr-1" width="32%" inline={true} height="30px" />
                      <Skeleton width="32%" inline={true} height="30px" />
                    </Col>
                    <Col xl={6} lg={6} md={4} sm={12}>
                      <div className="text-center">
                        <Skeleton  width="200px" height="30px" />
                      </div>
                    </Col>
                    <Col xl={3} lg={3} md={4} sm={12}>
                      <Skeleton className="mr-1" width="24%" inline={true} height="30px" />
                      <Skeleton className="mr-1" width="24%" inline={true} height="30px" />
                      <Skeleton className="mr-1" width="24%" inline={true} height="30px" />
                      <Skeleton className="" width="24%" inline={true} height="30px" />
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={12}>
                      <Skeleton className="mt-2" height="500px" />
                    </Col>
                  </Row>
                ):(
                  <Calendar
                      defaultDate={defaultDate}
                      defaultView={Views.WEEK}
                      components={{event: (ev) => <EventComponent eventData={ev} />}}
                      formats={formats}
                      events={events}
                      startAccessor="start"
                      endAccessor="end"
                      localizer={mLocalizer}
                      onSelectEvent={handleSelectEvent}
                      onSelectSlot={handleSelectSlot}
                      selectable
                      scrollToTime={scrollToTime}
                      step={60}
                      length={60}
                      dayLayoutAlgorithm="no-overlap"
                      timeslots={1}
                      eventPropGetter={(event) => {
                        let backgroundColor = 'green';
                        backgroundColor = event.background;
                        if(moment(event.start).isBefore()) {
                          backgroundColor = "#d3d4d5";
                        }
                        // if(event.isBooked) {
                        //   backgroundColor = event.background;
                        // }
                        const color = 'white';
                        return { style: { backgroundColor ,color, "border": "0"} }
                      }}
                      onSelecting = {slot => false}
                      minDate={new Date()}
                  />
                )}
              </div>
            </div>
            <Modal
              show={show}
              backdrop="static"
              keyboard={false}
              centered
              size="md"
              className="artist-model-sec"
            >
              <div className="closeButtonr" onClick={handleClose}>
                <RxCross2/>
              </div>
              <Modal.Body>
                  <div className="head-sec text-center white-color">
                      <div>
                        <h2>ADD SLOT</h2>
                      </div>
                  </div>
                  <div className="expert-panel-sec">
                    {addUpdateLoading ? (
                      <ThreeDotLoader />
                    ):(                    
                      <Form onSubmit={handleSubmit}>
                         <div className='slot-input-box'>
                          <Form.Label className='l-sb form-label' htmlFor="slotPrice">Slot Price</Form.Label>
                          <Form.Control className='form-control numberInput' type="number" required min={0} id='slotPrice' value={slotPrice} onChange={handleChange} placeholder="Slot Price"/>
                          <Form.Label htmlFor="travelPrice" className='l-sb form-label'>Travel Expense</Form.Label>
                          <Form.Control className='form-control numberInput' type="number" required min={0} id='travelPrice' value={travelPrice} onChange={handleChange} placeholder="Travel Expense"/>
                          <Form.Label htmlFor="foodPrice" className='l-sb form-label'>Food and Other Expense</Form.Label>
                          <Form.Control className='form-control numberInput' type="number"required  min={0} id='foodPrice' value={foodPrice} placeholder="Food & Other Expense" onChange={handleChange}/>
                          {slotDisabled ? (
                            <button className='mt-4 l-b p-3 btn btn-light' type="button">
                              {slotBooked && (
                                'Booked'
                              )}
                              {slotDisabled && (
                                'Disabled'
                              )}
                            </button>
                          ):(
                            <button className='mt-4 l-b p-3 btnn btn btn-primary' type="submit">
                              {editedSlotId === 0 ? (
                                "Add"
                              ):(
                                "Update"
                              )}
                            </button>
                          )}
                          
                         </div>
                      </Form>
                    )}
                  </div>
              </Modal.Body>
            </Modal>
        </div>
    </>
  )
}

export default ArtistAvailSlot