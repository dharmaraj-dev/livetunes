import React, {useEffect, useState} from 'react';
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineFilter } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { FiDownload, FiFilePlus, FiPlus, FiTrash } from "react-icons/fi";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAllSpecialEvents, deleteMasterCommon, getAllEvents, getGenre, addSpecialEvent } from '../redux/admin';
import Skeleton from 'react-loading-skeleton'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import Modal from 'react-bootstrap/Modal';
import { Tabs, Tab} from "react-bootstrap";
import DefaultProfile from "../assets/images/default_profile.jpeg";
import { useLocation  } from 'react-router-dom';
import moment from 'moment';
import DatePicker from "react-datepicker";
import Multiselect from 'multiselect-react-dropdown';

const GeneralSettings = () => {
    const params = useParams();
    let loc = useLocation();
    
    const dispatch = useDispatch();
    const MySwal = withReactContent(Swal);
    const pageName = 'settings';
    const { addItemLoading, allSpecialEventLoading, allSpecialEvent, allGenres, allEvents } = useSelector((state) => state.admin);

    const [showModel, setShowModel] = useState(false);
    const [newName, setNewName] = useState("");
    const [showModelFor, setShowModelFor] = useState("");
    const [selectedTab, setSelectedTab] = useState("allEvents");

    const [specialEventImage, setSpecialEventImage] = useState([]);
    const [specialEventType, setSpecialEventType] = useState("headerBanner");
    const [specialEventHeadText, setSpecialEventHeadText] = useState("");
    const [specialEventSubText, setSpecialEventSubText] = useState("");
    const [specialEventSubText2, setSpecialEventSubText2] = useState("");
    const [specialEventGenres, setSpecialEventGenres] = useState("");
    const [specialEventEvents, setSpecialEventEvents] = useState("");
    const [specialEventStartDate, setSpecialEventStartDate] = useState("");
    const [specialEventEndDate, setSpecialEventEndDate] = useState("");

    function capitalizeFirstLetter(stringName) {
        return stringName.charAt(0).toUpperCase() + stringName.slice(1);
    }

    const deleteItem = (item, type) => {
        MySwal.fire({
          title: '<strong>Are you sure!!</strong>',
          icon: 'warning',
          html: 'Do you want to delete this item?',
          showDenyButton: true,
          confirmButtonText: 'Yes',
          denyButtonText: `No`,
          showLoaderOnConfirm: false,
          allowOutsideClick: () => false
        }).then((result) => {
          if (result.isConfirmed && result.value) {
            if(type == "specialEvent") {
                dispatch(deleteMasterCommon('SpecialEvents/Delete', item, type, {"SpecialEventsId": item}));
            }
          }
        })
    }

    const addAction = (from) => {
        setShowModelFor(from);
        setShowModel(true);
    }

    const handleClose = () => {
        setShowModel(false);
    }

    const addNewEntry = (e) => {
        e.preventDefault();
        if(showModelFor === "specialEvent") {
            let paramsData = {
                IsHeadBanner: specialEventType === "headerBanner" ? true : false,
                IsSBanner: specialEventType === "addBanner" ? true : false,
                HeadText: specialEventHeadText,
                SubText: specialEventSubText,
                SubText1: specialEventSubText2,
                GenreId: specialEventGenres.length > 0 ? specialEventGenres?.map(a => a.GenreId)?.join(",") : "",
                GenreName: specialEventGenres.length > 0 ? specialEventGenres?.map(a => a.GenreName)?.join(",") : "",
                EventsId: specialEventEvents.length > 0 ? specialEventEvents?.map(a => a.EventsId)?.join(",") : "",
                EventsName: specialEventEvents.length > 0 ? specialEventEvents?.map(a => a.EventsName)?.join(",") : "",
                StartDate: moment(specialEventStartDate).format("YYYY-MM-DD hh:mm:ss"),
                EndDate: moment(specialEventEndDate).format("YYYY-MM-DD hh:mm:ss"),
            };
            dispatch(addSpecialEvent(specialEventImage, paramsData)).then((res) => {
                console.log(res);
                if(res.data.IsSuccess) {
                    setShowModel(false);
                }
            }).catch((err) => {
                setShowModel(false);
            })
        } 
    }

    

    const onMasterTabChange = (e) => {
        setSelectedTab(e)
    }

    const selectGenre = (selectedList, selectedItem) => {
        setSpecialEventGenres(selectedList);
    }
    const removeGenre = (selectedList, removedItem) => {
        setSpecialEventGenres(selectedList);
    }
    const selectEvent = (selectedList, selectedItem) => {
        setSpecialEventEvents(selectedList);
    }
    const removeEvent = (selectedList, removedItem) => {
        setSpecialEventEvents(selectedList);
    }

    const specialEventImageChange = (e) => {
        setSpecialEventImage(e.target.files[0])
    }



    useEffect(() => {
        if(pageName == "settings") {
            setSelectedTab('allEvents')
            dispatch(getAllSpecialEvents())
            dispatch(getGenre())
            dispatch(getAllEvents())
        }
    }, [pageName])

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
            <div className="main-content all_masters">
                <Container fluid>
                    {pageName == "settings" && (
                    <>
                    <h4 className="l-b mb-3">All {capitalizeFirstLetter(pageName)}</h4>
                    <Tabs defaultActiveKey={selectedTab} id="uncontrolled-tab-example-1" className="mb-1 justify-content-start" onSelect={(e) => {onMasterTabChange(e)}}>
                      <Tab eventKey="allEvents" title="All Events">
                        {allSpecialEventLoading ? (
                            <>
                                <div className="head-top-sec p-3">
                                    <Stack direction="horizontal" gap={3}>
                                        <div className="l-m red-color cursor-pointer text-small ml-auto">
                                            <Skeleton count={1} width="140px" height={30} /> 
                                        </div>
                                    </Stack>
                                </div>
                                <div className="table-scroll">
                                    <Table className="table-responsive">
                                        <thead>
                                        <tr>
                                            <th colSpan={5}>
                                                <Skeleton count={1} width={"100%"} height={30} /> 
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                [...Array(5)].map((e, i) => {
                                                  return (
                                                    <tr key={`skeleton_table_${i}`}>
                                                        <td colSpan={5}>
                                                            <Skeleton count={1} width={"100%"} height={30} /> 
                                                        </td>
                                                    </tr>
                                                  )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </>
                        ):(
                            <>
                                <div className="head-top-sec p-3">
                                    <Stack direction="horizontal" gap={3}>
                                    <div className="l-m filter-denld-btn red-color cursor-pointer text-small ml-auto" onClick={() => {addAction('specialEvent')}}><FiPlus/> Add New Event</div>
                                    </Stack>
                                </div>
                                <div className="table-scroll">
                                    <Table className="table-responsive">
                                        <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Event Type</th>
                                            <th>Head Text</th>
                                            <th>SubText</th>
                                            <th>SubText 2</th>
                                            <th>Genre Name</th>
                                            <th>Events Name</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {allSpecialEvent.map((st,indx) => {
                                                return (
                                                    <tr key={`state_${indx}`}>
                                                        <td>
                                                            {st.SEImgURL !== "" ? (
                                                                <img width="100px" src={st.SEImgURL == "" ? DefaultProfile : st.SEImgURL} alt="city image"/>
                                                            ) : (
                                                                <input style={{width:"150px"}} type="file"/>
                                                            )}
                                                        </td>

                                                        <td>
                                                            {st.IsHeadBanner && (
                                                                'Header Banner'
                                                            )}
                                                            {st.IsSBanner && (
                                                                'Add Banner'
                                                            )}
                                                            {!st.IsHeadBanner && !st.IsSBanner && (
                                                                'Special Banner'
                                                            )}
                                                        </td>
                                                        <td>{st.HeadText}</td>
                                                        <td>{st.SubText}</td>
                                                        <td>{st.SubText1}</td>
                                                        <td>{st.GenreName}</td>
                                                        <td>{st.EventsName === null ? 'NA' : st.EventsName}</td>
                                                        <td>{moment(st.StartDate).format('DD-MM-yyyy')}</td>
                                                        <td>{moment(st.EndDate).format('DD-MM-yyyy')}</td>
                                                        <td>
                                                            <FiTrash className="cursor-pointer" onClick={() => {deleteItem(st.SpecialEventsId, "specialEvent")}}/>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </Table>
                                </div>
                            </>
                        )}
                      </Tab>
                    </Tabs>
                    </>
                    )}
                    <Modal
                        show={showModel}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        centered
                        size="lg"
                        className="give-feedback-sec">
                        <div className="closeButtonr" >
                            <RxCross2 onClick={handleClose}/>
                        </div>
                        <Modal.Body>
                            <div className="head-sec mb-0">
                                {showModelFor === "specialEvent" && (
                                    <h4 className="l-sb">Add New Event</h4>
                                )}
                            </div>
                           
                            <section>
                                <Form method="post" onSubmit={(e) => {addNewEntry(e)}}>
                                <Row>
                                    {showModelFor === "specialEvent" && (
                                        <>
                                       <Col lg="6" className="mt-3">
                                            <Form.Label className="artist_status">Image</Form.Label>
                                            <br />
                                            <Form.Control placeholder="Event Image" type="file" onChange={(e) => {specialEventImageChange(e)}} required />
                                        </Col>
                                        <Col lg="6" className="mt-3">
                                            <Form.Label className="artist_status">Event Type</Form.Label>
                                            <br />
                                            <Form.Select
                                                name="eventType"
                                                className="form-control"
                                                required
                                                defaultValue="headerBanner"
                                                required
                                                onChange={(e) => {setSpecialEventType(e.target.value)}}
                                            >
                                                <option value="headerBanner">Header Banner</option>
                                                <option value="specialBanner">Special Banner</option>
                                                <option value="addBanner">Add Banner</option>
                                            </Form.Select>
                                        </Col>
                                        <Col lg="6" className="mt-3">
                                            <Form.Label className="artist_status">Head Text</Form.Label>
                                            <br />
                                            <Form.Control placeholder="Head Text" type="text" value={specialEventHeadText} onChange={(e) =>{setSpecialEventHeadText(e.target.value)}}  />
                                        </Col>
                                        <Col lg="6" className="mt-3">
                                            <Form.Label className="artist_status">Sub Text</Form.Label>
                                            <br />
                                            <Form.Control placeholder="Sub Text" type="text" value={specialEventSubText} onChange={(e) =>{setSpecialEventSubText(e.target.value)}}  />
                                        </Col>
                                        <Col lg="6" className="mt-3">
                                            <Form.Label className="artist_status">Sub Text 2</Form.Label>
                                            <br />
                                            <Form.Control placeholder="Sub Text 2" type="text" value={specialEventSubText2} onChange={(e) =>{setSpecialEventSubText2(e.target.value)}}  />
                                        </Col>
                                        <Col lg="6" className="mt-3"></Col>
                                        <Col lg="6" className="mt-3">
                                            <Form.Label className="artist_status">Genres Filter</Form.Label>
                                            <br />
                                            <Multiselect
                                                isObject={true}
                                                options= { allGenres?.filter((key) => !key.IsCancelled) }
                                                showCheckbox
                                                showArrow
                                                className='l-l mb-3'
                                                placeholder="Genres"
                                                displayValue="GenreName"
                                                onSelect={selectGenre}
                                                onRemove={removeGenre}
                                                selectedValues={specialEventGenres}
                                            />
                                        </Col>
                                        <Col lg="6" className="mt-3">
                                            <Form.Label className="artist_status">Events Filter</Form.Label>
                                            <br />
                                            <Multiselect
                                                isObject={true}
                                                options= { allEvents?.filter((key) => !key.IsCancelled) }
                                                showCheckbox
                                                showArrow
                                                className='l-l'
                                                placeholder="Events"
                                                displayValue="EventsName"
                                                onSelect={selectEvent}
                                                onRemove={removeEvent}
                                                selectedValues={specialEventEvents}
                                            />
                                        </Col>
                                        <Col lg="6" className="mt-3">
                                            <Form.Label className="artist_status">Start Date</Form.Label>
                                            <br />
                                            <DatePicker className="form-control"  dateFormat="dd-MM-yyyy" onChange={(date) => setSpecialEventStartDate(date)} selected={specialEventStartDate} required/>
                                        </Col>
                                        <Col lg="6" className="mt-3">
                                            <Form.Label className="artist_status">End Date</Form.Label> <br />
                                            <DatePicker placeholder="DD-MM-YY" className="form-control" dateFormat="dd-MM-yyyy" onChange={(date) => setSpecialEventEndDate(date)} selected={specialEventEndDate} required/>
                                        </Col>
                                        </>
                                    )}
                                    
                                    <p className="text-center m-0">
                                        <button
                                          type="submit"
                                          className="l-b btnn btn btn-primary border-radius-36"
                                          disabled={addItemLoading}
                                          >
                                            {addItemLoading && (
                                                <span className="spinner-border spinner-border-sm"></span>
                                            )}
                                          <span> Add</span>
                                        </button>
                                    </p>
                                </Row>
                                </Form>
                            </section>
                        </Modal.Body>
                    </Modal>
                </Container>
            </div>
            </div>
        </div>

    </>
  )
}

export default GeneralSettings
