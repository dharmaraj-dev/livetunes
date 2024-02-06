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
import { getAllArtists, getAllJudges, getAllUsers, sendArtistToJudge, saveTrendingArtists } from '../redux/admin';
import { getTrendingArtists } from '../redux/commonSlice';

import Skeleton from 'react-loading-skeleton'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import Modal from 'react-bootstrap/Modal';
import { Tabs, Tab} from "react-bootstrap";
import DefaultProfile from "../assets/images/default_profile.jpeg";
import { useLocation  } from 'react-router-dom';

const GeneralStuffs = () => {
    const params = useParams();
    let loc = useLocation();
    
    const dispatch = useDispatch();
    const MySwal = withReactContent(Swal);
    const pageName = 'accounts';
    const {
    allArtists,
    allJudges,
    allUsers,
    allArtistsLoading,
    allJudgesLoading,
    allUsersLoading
 } = useSelector((state) => state.admin);

    const [showModel, setShowModel] = useState(false);
    const [newName, setNewName] = useState("");
    const [newDependedSelectName, setNewDependedSelectName] = useState("");
    const [showModelFor, setShowModelFor] = useState("");
    const [selectedTab, setSelectedTab] = useState("artist_list");

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
            // if(type == "artist") {
            //     dispatch(deleteMasterCommon('State/Delete', item, type, {"StateId": item}));
            // } else if(type == "judge") {
            //     dispatch(deleteMasterCommon('City/Delete', item, type, {"CityId": item}));
            // } else if(type == "user") {
            //     dispatch(deleteMasterCommon('Events/Delete', item, type, {"EventsId": item}));
            // }
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


    const onMasterTabChange = (e) => {
        setSelectedTab(e)
        if(e === "artists") {
            dispatch(getAllArtists())
        } else if(e === "judges") {
            dispatch(getAllJudges())
        } else if(e === "organisers") {
            dispatch(getAllUsers())
        } else if(e === "assign_to") {
            dispatch(getAllArtists());
            dispatch(getAllJudges())
        }
    }

    const assignToJudge = (artId, judId) => {
        dispatch(sendArtistToJudge({"RegId": artId,"JudgeId":judId}));
    }

    const makeArtistTrending = (item,value) => {
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
            let alreadyTrendingArtists = [...new Set(allArtists.filter((art) => {return (art.IsTrending)}).map(q => q.ArtistId))]

            if(!alreadyTrendingArtists.includes(item.ArtistId)){          //checking weather array contain the id
                alreadyTrendingArtists.push(item.ArtistId);               //adding to array because value doesnt exists
            }else{
                alreadyTrendingArtists.splice(alreadyTrendingArtists.indexOf(item.ArtistId), 1);  //deleting
            }
            dispatch(saveTrendingArtists(alreadyTrendingArtists))
          }
        })
    }

    useEffect(() => {
        if(pageName == "accounts") {
            setSelectedTab('artist_list')
            dispatch(getAllArtists())
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
                    <>
                    <h4 className="l-b mb-3">All {capitalizeFirstLetter(pageName)}</h4>
                    <Tabs defaultActiveKey={selectedTab} id="uncontrolled-tab-example" className="mb-1 justify-content-start" onSelect={(e) => {onMasterTabChange(e)}}>
                        <Tab eventKey="artist_list" title="Artists" className={`${selectedTab == 'artist_list' ? 'active' : ''}`}>
                        {allArtistsLoading ? (
                            <>
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
                                <div className="table-scroll">
                                    <Table className="table-responsive">
                                        <thead>
                                        <tr>
                                            <th>Profile</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                            <th>State</th>
                                            <th>City</th>
                                            <th>Is Trending</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {allArtists.map((st,indx) => {
                                                return (
                                                    <tr key={`state_${indx}`}>
                                                        <td>
                                                            <img className="img_with_name" src={st.ArtistProfileImg == "" ? DefaultProfile : st.ArtistProfileImg} />
                                                        </td>
                                                        <td>
                                                            <span>{st.ArtistName}</span>
                                                        </td>
                                                        <td>{st.EmailId}</td>
                                                        <td>{st.MobileNo}</td>
                                                        <td>{st.ArtistState}</td>
                                                        <td>{st.ArtistCity}</td>
                                                        <td>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox"
                                                                    checked={st.IsTrending}
                                                                    onChange={(e) => {makeArtistTrending(st, e.target.checked)}}
                                                                 />
                                                            </div>
                                                        </td>
                                                        <td><span className="artist_status">{st.ProfileStatus}</span></td>
                                                        <td>
                                                            <FiTrash className="cursor-pointer" onClick={() => {deleteItem(st.ArtistId, "artist")}}/>
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
                        <Tab eventKey="judges" title="Judges">
                        {allJudgesLoading ? (
                        <>
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
                                <div className="l-m filter-denld-btn red-color cursor-pointer text-small ml-auto" onClick={() => {addAction('judge')}}><FiPlus/> Add New </div>
                                </Stack>
                            </div>
                            <div className="table-scroll">
                                <Table className="table-responsive">
                                    <thead>
                                    <tr>
                                        <th>Profile</th>
                                        <th>Name</th>
                                        <th>Mobile</th>
                                        <th>Total Requests</th>
                                        <th>Approved</th>
                                        <th>Pending</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {allJudges.map((st,indx) => {
                                            return (
                                                <tr key={`state_${indx}`}>
                                                    <td>
                                                        <img className="img_with_name" src={st.JudgeProfileImg == "" ? DefaultProfile : st.JudgeProfileImg} />
                                                    </td>
                                                    <td>{st.JudgeName}</td>
                                                    <td>{st.MobileNo}</td>
                                                    <td>{st.TotalRequests}</td>
                                                    <td>{st.TotalApproved}</td>
                                                    <td>{st.TotalPending}</td>
                                                    <td>
                                                        <FiTrash className="cursor-pointer" onClick={() => {deleteItem(st.JudgeId, "judge")}}/>
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
                        <Tab eventKey="organisers" title="Organisers">
                          {allUsersLoading ? (
                            <>
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
                                <div className="table-scroll">
                                    <Table className="table-responsive">
                                        <thead>
                                        <tr>
                                            <th>Profile</th>
                                            <th>Name</th>
                                            <th>Mobile</th>
                                            <th>Gender</th>
                                            <th>Total Bookings</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {allUsers.map((st,indx) => {
                                                return (
                                                    <tr key={`event_${indx}`}>
                                                        <td>
                                                            <img className="img_with_name" src={st.UserProfileImg == "" ? DefaultProfile : st.UserProfileImg} />
                                                        </td>
                                                        <td>{st.UserName}</td>
                                                        <td>{st.MobileNo}</td>
                                                        <th>{st.Gender}</th>
                                                        <td>{st.TotalBookings}</td>
                                                        <td>
                                                            <FiTrash className="cursor-pointer" onClick={() => {deleteItem(st.UserId, "user")}}/>
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
                        <Tab eventKey="assign_to" title="Assign Artist To Judge">
                        {allArtistsLoading ? (
                            <>
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
                                <div className="table-scroll">
                                    <Table className="table-responsive">
                                        <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Mobile</th>
                                            <th>State</th>
                                            <th>City</th>
                                            <th>Assign To</th>
                                            <th>Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {allArtists.map((st,indx) => {
                                                return (
                                                    <tr key={`state_${indx}`}>
                                                        <td>
                                                            <span>{st.ArtistName}</span>
                                                        </td>
                                                        <td>{st.MobileNo}</td>
                                                        <td>{st.ArtistState}</td>
                                                        <td>{st.ArtistCity}</td>
                                                        <td>
                                                            <Form.Select
                                                                name="judge"
                                                                className="form-control"
                                                                required
                                                                value={st.JudgeId}
                                                                onChange={(e) => {assignToJudge(st.ArtistId, e.target.value)}}
                                                            >
                                                                <option value="">Select Judge</option>
                                                                {allJudges?.filter((key) => !key.IsCancelled).map((judge, index) => {
                                                                    return (<option key={`${judge.JudgeId}'_'${judge.JudgeName}`} value={judge.JudgeId}>{judge.JudgeName}</option>)
                                                                })}
                                                            </Form.Select>
                                                        </td>
                                                        <td><span className="artist_status">{st.ProfileStatus}</span></td>
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