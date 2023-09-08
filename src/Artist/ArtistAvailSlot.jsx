import React, {useState, useMemo, useCallback} from 'react'
import NavBar from '../Layout/NavBar'
import SideNavBar from '../Layout/SideNavBar'
import moment from "moment";
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
const mLocalizer = momentLocalizer(moment)

const ArtistAvailSlot = () => {
    const [myEvents, setEvents] = useState([])

    const handleSelectSlot = useCallback(
        ({ start, end }) => {
          const title = window.prompt('New Event name')
          if (title) {
            setEvents((prev) => [...prev, { start, end, title }])
          }
        },
        [setEvents]
      )
    
      const handleSelectEvent = useCallback(
        (event) => window.alert(event.title),
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
                      const backgroundColor = 'red';
                      const color = 'white';
                      return { style: { backgroundColor ,color} }
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