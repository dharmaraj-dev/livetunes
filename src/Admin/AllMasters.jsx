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
import { getAllStates, getAllCities, addMasterCommon, deleteMasterCommon, updateCity, getAllEvents, getAllEventModes, getAllCategories, getGenre, getLanguages, getBanks, getBranches, getAddressProofs, getEventTypes, getIdProofs, getAllArtists, getAllJudges, getAllUsers, sendArtistToJudge, setImageForMaster } from '../redux/admin';
import Skeleton from 'react-loading-skeleton'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import Modal from 'react-bootstrap/Modal';
import { Tabs, Tab} from "react-bootstrap";
import DefaultProfile from "../assets/images/default_profile.jpeg";
import { useLocation  } from 'react-router-dom';
import DefaultImg from "../assets/images/default.png";

const AllMasters = () => {
    const params = useParams();
    let loc = useLocation();
    
    const dispatch = useDispatch();
    const MySwal = withReactContent(Swal);
    const pageName = loc.pathname.includes("all-accounts") ? 'accounts' : 'masters' ;//params.id.split('-')[1];
    console.log(pageName);
    const { allStatesLoading, allCitiesLoading, allStates, allCities, addItemLoading, allEventsLoading, allEvents, allEventModesLoading, allEventModes, allEventTypesLoading, allEventTypes, allCategoriesLoading, allCategories, allGenreLoading, allGenres, allLanguagesLoading, allLanguages, allBanksLoading, allBanks, allBranchesLoading, allBranches, allAddresProofsLoading, allAddresProofs, allIdProofsLoading, allIdProofs,
    allArtists,
    allJudges,
    allUsers,
    allArtistsLoading,
    allJudgesLoading,
    allUsersLoading
 } = useSelector((state) => state.admin);
    const { states } = useSelector((state) => state.common);

    const [showModel, setShowModel] = useState(false);
    const [newName, setNewName] = useState("");
    const [newDependedSelectName, setNewDependedSelectName] = useState("");
    const [showModelFor, setShowModelFor] = useState("");
    const [selectedTab, setSelectedTab] = useState(pageName == "masters" ? "states" : "artist_list");

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
                dispatch(deleteMasterCommon('State/Delete', item, type, {"StateId": item}));
            } else if(type == "city") {
                dispatch(deleteMasterCommon('City/Delete', item, type, {"CityId": item}));
            } else if(type == "event") {
                dispatch(deleteMasterCommon('Events/Delete', item, type, {"EventsId": item}));
            } else if(type == "eventMode") {
                dispatch(deleteMasterCommon('EventMode/Delete', item, type, {"EventModeId": item}));
            } else if(type == "category") {
                dispatch(deleteMasterCommon('Category/Delete', item, type, {"CategoryId": item}));
            } else if(type == "genre") {
                dispatch(deleteMasterCommon('Genre/Delete', item, type, {"GenreId": item}));
            } else if(type == "languages") {
                dispatch(deleteMasterCommon('Language/Delete', item, type, {"LanguageId": item}));
            } else if(type == "banks") {
                dispatch(deleteMasterCommon('Bank/Delete', item, type, {"BankId": item}));
            } else if(type == "branches") {
                dispatch(deleteMasterCommon('BankBranch/Delete', item, type, {"BankBranchId": item}));
            } else if(type == "addressProofs") {
                dispatch(deleteMasterCommon('AddressProof/Delete', item, type, {"AddressProofId": item}));
            } else if(type == "idProofs") {
                dispatch(deleteMasterCommon('IdProof/Delete', item, type, {"IdProofId": item}));
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
            dispatch(addMasterCommon('State/Insert', {"StateName": newName}, showModelFor)).then((res) => {
                if(res.data.IsSuccess) {
                    setShowModel(false);
                    setNewName("");
                    setNewDependedSelectName("");
                }
            }).catch((err) => {
                setShowModel(false);
                console.log(err);
            })
        } else if(showModelFor === "city") {
            const dataToSend = {
                "CityName": newName,
                "StateId": newDependedSelectName.split("_")[0],
                "StateName": newDependedSelectName.split("_")[1]
            }
            dispatch(addMasterCommon('City/Insert', dataToSend, showModelFor)).then((res) => {
                if(res.data.IsSuccess) {
                    setShowModel(false);
                    setNewName("");
                    setNewDependedSelectName("");
                }
            }).catch((err) => {
                setShowModel(false);
                console.log(err);
            })
        } else if(showModelFor === "event") {
            dispatch(addMasterCommon('Events/Insert', {"EventsName": newName}, showModelFor)).then((res) => {
                if(res.data.IsSuccess) {
                    setShowModel(false);
                    setNewName("");
                    setNewDependedSelectName("");
                }
            }).catch((err) => {
                setShowModel(false);
                console.log(err);
            })
        } else if(showModelFor === "eventMode") {
            dispatch(addMasterCommon('EventMode/Insert', {"EventModeName": newName}, showModelFor)).then((res) => {
                if(res.data.IsSuccess) {
                    setShowModel(false);
                    setNewName("");
                    setNewDependedSelectName("");
                }
            }).catch((err) => {
                setShowModel(false);
                console.log(err);
            })
        } else if(showModelFor === "category") {
            dispatch(addMasterCommon('Category/Insert',  {"CategoryName": newName}, showModelFor)).then((res) => {
                if(res.data.IsSuccess) {
                    setShowModel(false);
                    setNewName("");
                    setNewDependedSelectName("");
                }
            }).catch((err) => {
                setShowModel(false);
                console.log(err);
            })
        } else if(showModelFor === "genre") {
            dispatch(addMasterCommon('genre/Insert',  {"GenreName": newName}, showModelFor)).then((res) => {
                if(res.data.IsSuccess) {
                    setShowModel(false);
                    setNewName("");
                    setNewDependedSelectName("");
                }
            }).catch((err) => {
                setShowModel(false);
                console.log(err);
            })
        } else if(showModelFor === "languages") {
            dispatch(addMasterCommon('language/Insert',  {"LanguageName": newName}, showModelFor)).then((res) => {
                if(res.data.IsSuccess) {
                    setShowModel(false);
                    setNewName("");
                    setNewDependedSelectName("");
                }
            }).catch((err) => {
                setShowModel(false);
                console.log(err);
            })
        } else if(showModelFor === "banks") {
            dispatch(addMasterCommon('Bank/Insert', {"BankName": newName}, showModelFor)).then((res) => {
                if(res.data.IsSuccess) {
                    setShowModel(false);
                    setNewName("");
                    setNewDependedSelectName("");
                }
            }).catch((err) => {
                setShowModel(false);
                console.log(err);
            })
        } else if(showModelFor === "branches") {
            const dataToSend = {
                "BankBranchName": newName,
                "BankId": newDependedSelectName.split("_")[0],
                "Bankame": newDependedSelectName.split("_")[1]
            }
            dispatch(addMasterCommon('BankBranch/Insert', dataToSend, showModelFor)).then((res) => {
                if(res.data.IsSuccess) {
                    setShowModel(false);
                    setNewName("");
                    setNewDependedSelectName("");
                }
            }).catch((err) => {
                setShowModel(false);
                console.log(err);
            })
        } else if(showModelFor === "addressProofs") {
            dispatch(addMasterCommon('AddressProof/Insert', {"AddressProofName": newName}, showModelFor)).then((res) => {
                if(res.data.IsSuccess) {
                    setShowModel(false);
                    setNewName("");
                    setNewDependedSelectName("");
                }
            }).catch((err) => {
                setShowModel(false);
                console.log(err);
            })
        } else if(showModelFor === "idProofs") {
            dispatch(addMasterCommon('IDProof/Insert', {"IdProofName": newName}, showModelFor)).then((res) => {
                if(res.data.IsSuccess) {
                    setShowModel(false);
                    setNewName("");
                    setNewDependedSelectName("");
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

    const onMasterTabChange = (e) => {
        setSelectedTab(e)
        if(e === "states") {
            dispatch(getAllStates())
        } else if(e === "cities") {
            dispatch(getAllCities())
        } else if(e === "events") {
            dispatch(getAllEvents())
        } else if(e === "eventModes") {
            dispatch(getAllEventModes())
        } else if(e === "eventTypes") {
            dispatch(getEventTypes())
        } else if(e === "categories") {
            dispatch(getAllCategories())
        } else if(e === "genre") {
            dispatch(getGenre())
        } else if(e === "languages") {
            dispatch(getLanguages())
        } else if(e === "banks") {
            dispatch(getBanks())
        } else if(e === "branches") {
            dispatch(getBranches());
            dispatch(getBanks())
        } else if(e === "addressProofs") {
            dispatch(getAddressProofs())
        } else if(e === "idProofs") {
            dispatch(getIdProofs())
        } else if(e === "artists") {
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

    const changeCityImage = (e,CityId) => {

        var fData = new FormData();
        fData.append("file", e.target.files[0], e.target.files[0].type);
        console.log(fData)
        //dispatch(setImageForMaster('city', fData, CityId));
    }

    useEffect(() => {
        if(pageName == "masters") {
            setSelectedTab('states')
            dispatch(getAllStates())
        } else
        if(pageName == "accounts") {
            setSelectedTab('artist_list')
            dispatch(getAllArtists())
        }

        setTimeout(() => {
            setSelectedTab(selectedTab)
        }, 2000)
        console.log(params, selectedTab)
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
                    {pageName == "masters" ? (
                    <>
                    <h4 className="l-b mb-3">All {capitalizeFirstLetter(pageName)}</h4>
                    <Tabs defaultActiveKey={selectedTab} id="uncontrolled-tab-example-1" className="mb-1 justify-content-start" onSelect={(e) => {onMasterTabChange(e)}}>
                      <Tab eventKey="states" title="States">
                        {allStatesLoading ? (
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
                        )}
                      </Tab>
                      <Tab eventKey="cities" title="Cities">
                        {allCitiesLoading ? (
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
                                                        <img width="50px" src={st.MImgURL == "" ? DefaultImg : st.MImgURL} alt="city image" className="cursor-pointer" onClick={() => {document.getElementById("city_img_picker").click()}}/>
                                                        <input type="file" className="d-none" id="city_img_picker"  onChange={(e) => {changeCityImage(e, st.CityId)}} />
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
                        )}
                      </Tab>
                      <Tab eventKey="events" title="Events">
                          {allEventsLoading ? (
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
                                    <div className="l-m filter-denld-btn red-color cursor-pointer text-small ml-auto" onClick={() => {addAction('event')}}><FiPlus/> Add New </div>
                                    </Stack>
                                </div>
                                <div className="table-scroll">
                                    <Table className="table-responsive">
                                        <thead>
                                        <tr>
                                            <th>Event Name</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {allEvents.map((st,indx) => {
                                                return (
                                                    <tr key={`event_${indx}`}>
                                                        <td>{st.EventsName}</td>
                                                        <td>
                                                            <FiTrash className="cursor-pointer" onClick={() => {deleteItem(st.EventsId, "event")}}/>
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
                      <Tab eventKey="eventModes" title="Event Modes">
                          {allEventModesLoading ? (
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
                                    <div className="l-m filter-denld-btn red-color cursor-pointer text-small ml-auto" onClick={() => {addAction('eventMode')}}><FiPlus/> Add New </div>
                                    </Stack>
                                </div>
                                <div className="table-scroll">
                                    <Table className="table-responsive">
                                        <thead>
                                        <tr>
                                            <th>Event Mode Name</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {allEventModes.map((st,indx) => {
                                                return (
                                                    <tr key={`event_mode_${indx}`}>
                                                        <td>{st.EventModeName}</td>
                                                        <td>
                                                            <FiTrash className="cursor-pointer" onClick={() => {deleteItem(st.EventModeId, "eventMode")}}/>
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
                      <Tab eventKey="categories" title="Categories">
                          {allCategoriesLoading ? (
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
                                    <div className="l-m filter-denld-btn red-color cursor-pointer text-small ml-auto" onClick={() => {addAction('category')}}><FiPlus/> Add New </div>
                                    </Stack>
                                </div>
                                <div className="table-scroll">
                                    <Table className="table-responsive">
                                        <thead>
                                        <tr>
                                            <th>Category Name</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {allCategories.map((st,indx) => {
                                                return (
                                                    <tr key={`category_${indx}`}>
                                                        <td>{st.CategoryName}</td>
                                                        <td>
                                                            <FiTrash className="cursor-pointer" onClick={() => {deleteItem(st.CategoryId, "category")}}/>
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
                      <Tab eventKey="genre" title="Genre">
                          {allGenreLoading ? (
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
                                    <div className="l-m filter-denld-btn red-color cursor-pointer text-small ml-auto" onClick={() => {addAction('genre')}}><FiPlus/> Add New </div>
                                    </Stack>
                                </div>
                                <div className="table-scroll">
                                    <Table className="table-responsive">
                                        <thead>
                                        <tr>
                                            <th>Category Name</th>
                                           <th>Image</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {allGenres.map((st,indx) => {
                                                return (
                                                    <tr key={`genre_${indx}`}>
                                                        <td>{st.GenreName}</td>
                                                        <td>
                                                            {st.MImgURL !== "" ? (
                                                                <img width="100px" src={st.MImgURL == "" ? DefaultProfile : st.MImgURL} alt="city image"/>
                                                            ) : (
                                                                <input style={{width:"150px"}} type="file"/>
                                                            )}
                                                        </td>
                                                        <td>
                                                            <FiTrash className="cursor-pointer" onClick={() => {deleteItem(st.GenreId, "genre")}}/>
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
                      <Tab eventKey="languages" title="Languages">
                          {allLanguagesLoading ? (
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
                                    <div className="l-m filter-denld-btn red-color cursor-pointer text-small ml-auto" onClick={() => {addAction('languages')}}><FiPlus/> Add New </div>
                                    </Stack>
                                </div>
                                <div className="table-scroll">
                                    <Table className="table-responsive">
                                        <thead>
                                        <tr>
                                            <th>Language Name</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {allLanguages.map((st,indx) => {
                                                return (
                                                    <tr key={`languages_${indx}`}>
                                                        <td>{st.LanguageName}</td>
                                                        <td>
                                                            <FiTrash className="cursor-pointer" onClick={() => {deleteItem(st.LanguageId, "languages")}}/>
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
                      <Tab eventKey="banks" title="Banks">
                          {allBanksLoading ? (
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
                                    <div className="l-m filter-denld-btn red-color cursor-pointer text-small ml-auto" onClick={() => {addAction('banks')}}><FiPlus/> Add New </div>
                                    </Stack>
                                </div>
                                <div className="table-scroll">
                                    <Table className="table-responsive">
                                        <thead>
                                        <tr>
                                            <th>Bank Name</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {allBanks.map((st,indx) => {
                                                return (
                                                    <tr key={`banks_${indx}`}>
                                                        <td>{st.BankName}</td>
                                                        <td>
                                                            <FiTrash className="cursor-pointer" onClick={() => {deleteItem(st.BankId, "banks")}}/>
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
                      <Tab eventKey="branches" title="Branches">
                          {allBranchesLoading ? (
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
                                    <div className="l-m filter-denld-btn red-color cursor-pointer text-small ml-auto" onClick={() => {addAction('branches')}}><FiPlus/> Add New </div>
                                    </Stack>
                                </div>
                                <div className="table-scroll">
                                    <Table className="table-responsive">
                                        <thead>
                                        <tr>
                                            <th>Bank Name</th>
                                            <th>Branch Name</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {allBranches.map((st,indx) => {
                                                return (
                                                    <tr key={`branches_${indx}`}>
                                                        <td>{st.BankName}</td>
                                                        <td>{st.BankBranchName}</td>
                                                        <td>
                                                            <FiTrash className="cursor-pointer" onClick={() => {deleteItem(st.BankBranchId, "branches")}}/>
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
                      <Tab eventKey="addressProofs" title="Address Proofs">
                          {allAddresProofsLoading ? (
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
                                    <div className="l-m filter-denld-btn red-color cursor-pointer text-small ml-auto" onClick={() => {addAction('addressProofs')}}><FiPlus/> Add New </div>
                                    </Stack>
                                </div>
                                <div className="table-scroll">
                                    <Table className="table-responsive">
                                        <thead>
                                        <tr>
                                            <th>Address Proof Name</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {allAddresProofs.map((st,indx) => {
                                                return (
                                                    <tr key={`addressProof_${indx}`}>
                                                        <td>{st.AddressProofName}</td>
                                                        <td>
                                                            <FiTrash className="cursor-pointer" onClick={() => {deleteItem(st.AddressProofId, "addressProofs")}}/>
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
                      <Tab eventKey="idProofs" title="ID Proofs">
                          {allIdProofsLoading ? (
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
                                    <div className="l-m filter-denld-btn red-color cursor-pointer text-small ml-auto" onClick={() => {addAction('idProofs')}}><FiPlus/> Add New </div>
                                    </Stack>
                                </div>
                                <div className="table-scroll">
                                    <Table className="table-responsive">
                                        <thead>
                                        <tr>
                                            <th>ID Proof Name</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {allIdProofs.map((st,indx) => {
                                                return (
                                                    <tr key={`idProof_${indx}`}>
                                                        <td>{st.IdProofName}</td>
                                                        <td>
                                                            <FiTrash className="cursor-pointer" onClick={() => {deleteItem(st.IdProofId, "idProofs")}}/>
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
                    ):(
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
                                                        <td>{"NA"}</td>
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
                                                                //value={newDependedSelectName}
                                                                onChange={(e) => {assignToJudge(st.ArtistId, e.target.value)}}
                                                            >
                                                                <option value="">Select Judge</option>
                                                                {allJudges?.filter((key) => !key.IsCancelled).map((judge, index) => {
                                                                    return (<option key={`${judge.JudgeId}'_'${judge.JudgeName}`} value={judge.JudgeId}>{judge.JudgeName}</option>)
                                                                })}
                                                            </Form.Select>
                                                        </td>
                                                        <td>{"NA"}</td>
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
                                {showModelFor === "state" && (
                                    <h4 className="l-sb">Add State</h4>
                                )}
                                {showModelFor === "city" && (
                                    <h4 className="l-sb">Add City</h4>
                                )}
                                {showModelFor === "event" && (
                                    <h4 className="l-sb">Add Event</h4>
                                )}
                                {showModelFor === "eventMode" && (
                                    <h4 className="l-sb">Add Event Mode</h4>
                                )}
                                {showModelFor === "category" && (
                                    <h4 className="l-sb">Add Category</h4>
                                )}
                                {showModelFor === "genre" && (
                                    <h4 className="l-sb">Add Genre</h4>
                                )}
                                {showModelFor === "languages" && (
                                    <h4 className="l-sb">Add Language</h4>
                                )}
                                {showModelFor === "banks" && (
                                    <h4 className="l-sb">Add Bank</h4>
                                )}
                                {showModelFor === "branches" && (
                                    <h4 className="l-sb">Add Branch</h4>
                                )}
                                {showModelFor === "addressProofs" && (
                                    <h4 className="l-sb">Add Address Proof</h4>
                                )}
                                {showModelFor === "idProofs" && (
                                    <h4 className="l-sb">Add ID Proof</h4>
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
                                                value={newDependedSelectName}
                                                onChange={(e) => {setNewDependedSelectName(e.target.value)}}
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
                                    {showModelFor === "event" && (
                                       <Col lg="6" className="mt-3">
                                            <Form.Control placeholder="Event Name" type="text" value={newName} onChange={(e) =>{setNewName(e.target.value)}}  />
                                        </Col>
                                    )}
                                    {showModelFor === "eventMode" && (
                                       <Col lg="6" className="mt-3">
                                            <Form.Control placeholder="Event Mode Name" type="text" value={newName} onChange={(e) =>{setNewName(e.target.value)}}  />
                                        </Col>
                                    )}
                                    {showModelFor === "category" && (
                                       <Col lg="6" className="mt-3">
                                            <Form.Control placeholder="Event Category" type="text" value={newName} onChange={(e) =>{setNewName(e.target.value)}}  />
                                        </Col>
                                    )}
                                    {showModelFor === "genre" && (
                                       <Col lg="6" className="mt-3">
                                            <Form.Control placeholder="Genre Name" type="text" value={newName} onChange={(e) =>{setNewName(e.target.value)}}  />
                                        </Col>
                                    )}
                                    {showModelFor === "languages" && (
                                       <Col lg="6" className="mt-3">
                                            <Form.Control placeholder="Language Name" type="text" value={newName} onChange={(e) =>{setNewName(e.target.value)}}  />
                                        </Col>
                                    )}
                                    {showModelFor === "banks" && (
                                       <Col lg="6" className="mt-3">
                                            <Form.Control placeholder="Bank Name" type="text" value={newName} onChange={(e) =>{setNewName(e.target.value)}}  />
                                        </Col>
                                    )}
                                    {showModelFor === "branches" && (
                                        <>
                                        <Col lg="6" className="mt-3">
                                            <Form.Select
                                                name="bank"
                                                className="form-control"
                                                required
                                                value={newDependedSelectName}
                                                onChange={(e) => {setNewDependedSelectName(e.target.value)}}
                                            >
                                                <option value="">Select bank</option>
                                                {allBanks?.filter((key) => !key.IsCancelled).map((bank, index) => {
                                                    return (<option key={`${bank.BankId}'_'${bank.BankName}`} value={`${bank.BankId}'_'${bank.BankName}`}>{bank.BankName}</option>)
                                                })}
                                            </Form.Select>
                                        </Col>
                                        <Col lg="6" className="mt-3">
                                            <Form.Control placeholder="Branch Name" type="text" value={newName} onChange={(e) =>{setNewName(e.target.value)}}  />
                                        </Col>
                                        </>
                                    )}
                                    {showModelFor === "addressProofs" && (
                                       <Col lg="6" className="mt-3">
                                            <Form.Control placeholder="Address Proof Name" type="text" value={newName} onChange={(e) =>{setNewName(e.target.value)}}  />
                                        </Col>
                                    )}
                                    {showModelFor === "idProofs" && (
                                       <Col lg="6" className="mt-3">
                                            <Form.Control placeholder="ID Proof Name" type="text" value={newName} onChange={(e) =>{setNewName(e.target.value)}}  />
                                        </Col>
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

export default AllMasters
