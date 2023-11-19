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
import { getAllStates, getAllCities, addState, addCity, deleteState, deleteCity, updateCity } from '../redux/admin';
import Skeleton from 'react-loading-skeleton'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import Modal from 'react-bootstrap/Modal';

const GeneralStuffs = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const MySwal = withReactContent(Swal);
    const pageName = params.id.split('-')[1];
    const { allStatesLoading, allCitiesLoading, allStates, allCities, addItemLoading } = useSelector((state) => state.admin);
    const { states } = useSelector((state) => state.common);

    const [showModel, setShowModel] = useState(false);
    const [newName, setNewName] = useState("");
    const [newCityState, setNewCityState] = useState("");
    const [showModelFor, setShowModelFor] = useState("");

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
            console.log(result, item, type);
          if (result.isConfirmed && result.value) {
            if(type == "state") {
                dispatch(deleteState(item));
            } else if(type == "city") {
                dispatch(deleteCity(item))
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
        if(showModelFor === "state") {
            dispatch(addState(newName)).then((res) => {
                if(res.data.IsSuccess) {
                    setShowModel(false);
                }
            }).catch((err) => {
                setShowModel(false);
                console.log(err);
            })
        } else if(showModelFor === "city") {
            const dataToSend = {
                "CityName": newName,
                "StateId": newCityState.split("_")[0],
                "StateName": newCityState.split("_")[1]
            }
            dispatch(addCity(dataToSend)).then((res) => {
                if(res.data.IsSuccess) {
                    setShowModel(false);
                }
            }).catch((err) => {
                setShowModel(false);
                console.log(err);
            })
        }
    }

    const makeCityLTActive = (item,value) => {
        console.log(item)
        MySwal.fire({
          title: '<strong>Are you sure!!</strong>',
          icon: 'warning',
          html: 'Do you want to perform this action?',
          showDenyButton: true,
          confirmButtonText: 'Yes',
          denyButtonText: `No`,
          showLoaderOnConfirm: false,
          allowOutsideClick: () => false
        }).then((result) => {
          if (result.isConfirmed && result.value) {
            let dataToSend = {
                "CityId" : item.CityId,
                "CityName": item.CityName,
                "StateId" : item.StateId,
                "StateName": item.StateName,
                "IsLTLive": value
            };
            dispatch(updateCity(dataToSend))
          }
        })
    }

    useEffect(() => {
        if(pageName == "states") {
            dispatch(getAllStates())
        } else if(pageName == "cities") {
            dispatch(getAllCities())
        }
    }, [dispatch, params.id])

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
                        <h4 className="l-b mb-3">All {capitalizeFirstLetter(pageName)}</h4>
                        <Row>
                            <Col sm={12} md={12}>
                                <div className="main-booking-history-sec mt-3">
                                    {pageName === "states" && (
                                        allStatesLoading ? (
                                            <>
                                                <div className="head-top-sec">
                                                    <Stack direction="horizontal" gap={3}>
                                                        <Skeleton count={1} width="140px" height={30} /> 
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
                                                <div className="head-top-sec">
                                                    <Stack direction="horizontal" gap={3}>
                                                    <h2 className="fs-5 mb-0 ">{capitalizeFirstLetter(pageName)}</h2>
                                                    <div className="l-m filter-denld-btn red-color cursor-pointer text-small ml-auto" onClick={() => {addAction('state')}}><FiPlus/> Add New </div>
                                                    </Stack>
                                                </div>
                                                <div className="table-scroll">
                                                    <Table className="table-responsive">
                                                        <thead>
                                                        <tr>
                                                            <th>State Name</th>
                                                            <th>Action</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                            {allStates.map((st,indx) => {
                                                                return (
                                                                    <tr key={`state_${indx}`}>
                                                                        <td>{st.StateName}</td>
                                                                        <td>
                                                                            <FiTrash className="cursor-pointer" onClick={() => {deleteItem(st.StateId, "state")}}/>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })}
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </>
                                        )
                                    )}
                                    {pageName === "cities" && (
                                        allCitiesLoading ? (
                                            <>
                                                <div className="head-top-sec">
                                                    <Stack direction="horizontal" gap={3}>
                                                        <Skeleton count={1} width="140px" height={30} /> 
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
                                                <div className="head-top-sec">
                                                    <Stack direction="horizontal" gap={3}>
                                                    <h2 className="fs-5 mb-0 ">{capitalizeFirstLetter(pageName)}</h2>
                                                    <div className="l-m filter-denld-btn red-color cursor-pointer text-small ml-auto" onClick={() => {addAction('city')}}><FiPlus/> Add New </div>
                                                    </Stack>
                                                </div>
                                                <div className="table-scroll">
                                                    <Table className="table-responsive">
                                                        <thead>
                                                        <tr>
                                                            <th>City Name</th>
                                                            <th>State Name</th>
                                                            <th>Image</th>
                                                            <th>Is LT Active</th>
                                                            <th>Action</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                            {allCities.map((st,indx) => {
                                                                return (
                                                                    <tr key={`state_${indx}`}>
                                                                        <td>{st.CityName}</td>
                                                                        <td>{st.StateName}</td>
                                                                        <td>
                                                                            {st.MImgURL !== "" ? (
                                                                                <img width="100px" src={st.MImgURL} alt="city image"/>
                                                                            ) : (
                                                                                <input style={{width:"150px"}} type="file"/>
                                                                            )}
                                                                            
                                                                        </td>
                                                                        <td>
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox"
                                                                                    checked={st.IsLTLive}
                                                                                    onChange={(e) => {makeCityLTActive(st, e.target.checked)}}
                                                                                 />
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <FiTrash className="cursor-pointer" onClick={() => {deleteItem(st.CityId, "city")}}/>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })}
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </>
                                        )
                                    )}
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Modal
                        show={showModel}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        centered
                        size="lg"
                        className="give-feedback-sec"
                    >
                        
                        <div className="closeButtonr" >
                            <RxCross2 onClick={handleClose}/>
                        </div>
                        <Modal.Body>
                            <div className="head-sec mb-0">
                                {showModelFor === "state" && (
                                    <h4 className="l-sb">Add State</h4>
                                )}
                                {showModelFor === "city" && (
                                    <h4 className="l-sb">Add City</h4>
                                )}
                            </div>
                           
                            <section>
                                <Form method="post" onSubmit={(e) => {addNewEntry(e)}}>
                                <Row>
                                    {showModelFor === "state" && (
                                       <Col lg="6" className="mt-3">
                                            <Form.Control placeholder="State Name" type="text" value={newName} onChange={(e) =>{setNewName(e.target.value)}}  />
                                        </Col>
                                    )}
                                    {showModelFor === "city" && (
                                        <>
                                        <Col lg="6" className="mt-3">
                                            <Form.Label className="l-sb">State<sup className="red-color">*</sup></Form.Label>
                                            <Form.Select
                                                name="state"
                                                className="form-control"
                                                required
                                                value={newCityState}
                                                onChange={(e) => {setNewCityState(e.target.value)}}
                                            >
                                                <option value="">Select state</option>
                                                {states?.filter((key) => !key.IsCancelled).map((state, index) => {
                                                    return (<option key={`${state.StateId}'_'${state.StateName}`} value={`${state.StateId}'_'${state.StateName}`}>{state.StateName}</option>)
                                                })}
                                            </Form.Select>
                                        </Col>
                                        <Col lg="6" className="mt-3">
                                            <Form.Control required placeholder="City Name" type="text" value={newName} onChange={(e) =>{setNewName(e.target.value)}}  />
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

export default GeneralStuffs
