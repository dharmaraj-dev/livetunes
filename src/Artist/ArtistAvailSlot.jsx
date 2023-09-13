import React, {useState, useMemo, useCallback, useEffect} from 'react'
import NavBar from '../Layout/NavBar'
import SideNavBar from '../Layout/SideNavBar'
import moment from "moment";
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import { successToast, errorToast, infoToast } from "../services/toast-service";
import { Modal } from 'react-bootstrap';
import { RxCross2 } from "react-icons/rx";
import Form from 'react-bootstrap/Form';
const mLocalizer = momentLocalizer(moment)

const ArtistAvailSlot = () => {
    const [myEvents, setEvents] = useState([])
    const [show, setShow] = useState(false);
    const [slotPrice,setSlotPrice] = useState(1);
    const [travelPrice,setTravelPrice] = useState(1);
    const [foodPrice,setFoodPrice] = useState(1);
    const [startDate,setStartDate] = useState(new Date());
    const [endDate,setEndDate] = useState(new Date());
    const [isNew, setIsNew] = useState(false);

    const handleClose = () => {
      setSlotPrice(-1);
      setTravelPrice(-1);
      setFoodPrice(-1);
      setStartDate(new Date());
      setEndDate(new Date());
      setShow(false);
    }

    const handleShow = ({start,end}) => {
      setStartDate(start);
      setEndDate(end);
      setShow(true);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setEvents((prev) => [...prev, { start:startDate, end:endDate, slotPrice,travelPrice,foodPrice }]);
      handleClose();
    }
    const handleChange = (e) => {
      console.log(e);
      if(e.target.id === "slotPrice"){
        setSlotPrice(Number(e.target.value));
      }else if(e.target.id === "travelPrice"){
        setTravelPrice(Number(e.target.value));
      }else{
        setFoodPrice(Number(e.target.value));
      }
    }

    // function handleSelectSlot({ start, end }) {
    //   handleShow({start, end});
    // }
  

    const handleSelectSlot = useCallback(
        ({ start, end }) => {
            console.log(start)
            if ( start.getTime() > new Date().getTime()) {
              handleShow({start, end});
             } else {
                errorToast("Invalid slot.")
                return false;
             }          
        },
        [setEvents]
      )

      const customHandleSelect = useCallback(
        ({st,en}) => {
          setEvents((prev) => [...prev, { startDate, endDate,  slotPrice,travelPrice,foodPrice }]);
        },
        [setEvents]
      )
    
      const handleSelectEvent = useCallback(
        (event) => {console.log(myEvents);window.alert(event.price)},
        []
      )
    
      const { defaultDate, scrollToTime } = useMemo(
        () => ({
          defaultDate: new Date(),
          scrollToTime: new Date(),
        }),
        []
      )

      const EventComponent = () => (
        <div>
         <div>hi</div>
        </div>
       );

       const formats = {
        eventTimeRangeFormat: () => { 
          return "";
        },
      };

      const tileDisabled = ({ activeStartDate, date, view }) => {
        return date < new Date()
     }

     useEffect(()=>{
      console.log(myEvents)
     },[myEvents])
    

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
                    <Calendar
                    defaultDate={defaultDate}
                    defaultView={Views.WEEK}
                    components={{
                      event: EventComponent,
                    }}
                    formats={formats}
                    events={myEvents}
                    localizer={mLocalizer}
                    onSelectEvent={handleSelectEvent}
                    onSelectSlot={handleSelectSlot}
                    selectable
                    scrollToTime={scrollToTime}
                    step={60}
                    length={60}
                    dayLayoutAlgorithm="no-overlap"
                    timeslots={1}
                    eventPropGetter={(myEventsList) => {
                      const backgroundColor = '#FD3743';
                      const color = 'white';
                      const border = '#FD3743';
                      return { style: { backgroundColor ,color, border} }
                    }}
                    onSelecting = {slot => false}
                    minDate={new Date()}
                    />
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
                                          <Form onSubmit={handleSubmit}>
                                           <div className='slot-input-box'>
                                            <Form.Label className='l-sb form-label' htmlFor="slotPrice">Slot Price</Form.Label>
                                            <Form.Control className='form-control numberInput' type="number" required min={0} id='slotPrice' onChange={handleChange}/>
                                            <Form.Label htmlFor="travelPrice" className='l-sb form-label'>Travel Expense</Form.Label>
                                            <Form.Control className='form-control numberInput' type="number" required min={0} id='travelPrice' onChange={handleChange}/>
                                            <Form.Label htmlFor="foodPrice" className='l-sb form-label'>Food and Other Expense</Form.Label>
                                            <Form.Control className='form-control numberInput' type="number"required  min={0} id='foodPrice' onChange={handleChange}/>
                                            <button className='mt-4 l-b p-3 btnn btn btn-primary' type="submit">ADD</button>
                                           </div>
                                           </Form>
                                        </div>
                                    </Modal.Body>
                                </Modal>
        </div>
    </>
  )
}

export default ArtistAvailSlot