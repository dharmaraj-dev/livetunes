import React, {useState, useMemo, useCallback} from 'react'
import NavBar from '../Layout/NavBar'
import SideNavBar from '../Layout/SideNavBar'
import moment from "moment";
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import { successToast, errorToast, infoToast } from "../services/toast-service";
const mLocalizer = momentLocalizer(moment)

const ArtistAvailSlot = () => {
    const [myEvents, setEvents] = useState([])

    const handleSelectSlot = useCallback(
        ({ start, end }) => {
            if ( start.getTime() > new Date().getTime()) {
                const price = window.prompt('This slot price')
                  if (price) {
                    setEvents((prev) => [...prev, { start, end, price }]);
                  }
             } else {
                errorToast("Invalid slot.")
                return false;
             }

          
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

      const tileDisabled = ({ activeStartDate, date, view }) => {
        return date < new Date()
     }
    

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
        </div>
    </>
  )
}

export default ArtistAvailSlot