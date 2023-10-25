import React from 'react';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import CloseButton from 'react-bootstrap/CloseButton';
import Multiselect from 'multiselect-react-dropdown';
import { useDispatch, useSelector } from "react-redux";
import { setUserSelectedCategories,setUserSelectedGenres,setUserSelectedEvents,getUserFilteredArtists } from '../actions/user';
import { setSettingsMinBudget, setSettingsMaxBudget } from "../redux/userSettings";

import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton'
import { useLocation } from 'react-router';
import queryString from 'query-string';
import {setBudgetMin,setBudgetMax} from "../actions/user";
import RangeSlider from 'react-range-slider-input';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './slider.css';





const Filter = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { categories,gernes,events } = useSelector(state => state.common );
    const { userSelectedCategories,userSelectedGenres,userSelectedEvents,userSelectedCities,userFilteredArtists } = useSelector(state => state.user);
    const { selectedLanguages, userMinimumBudget, userMaximumBudget} = useSelector(state => state.userSettings);
    
    const selectCategory = (selectedList, selectedItem) => {
      dispatch(setUserSelectedCategories(selectedList));
    }
    const removeCategory = (selectedList, removedItem) => {
        dispatch(setUserSelectedCategories(selectedList));
    }
    const selectGenre = (selectedList, selectedItem) => {
        dispatch(setUserSelectedGenres(selectedList));
    }
    const removeGenre = (selectedList, removedItem) => {
        dispatch(setUserSelectedGenres(selectedList));
    }
    const selectEvent = (selectedList, selectedItem) => {
        dispatch(setUserSelectedEvents(selectedList));
    }
    const removeEvent = (selectedList, removedItem) => {
        dispatch(setUserSelectedEvents(selectedList));
    }
    const handleDrag = (e) => {
        const maxVal = e[1];
        const minVal = e[0];
        dispatch(setSettingsMinBudget(minVal));
        dispatch(setSettingsMaxBudget(maxVal));
        const budgetBox = document.querySelectorAll('.range-slider__thumb');
            if(budgetBox.length > 0){
                budgetBox[0].innerText = minVal;
                budgetBox[1].innerText = maxVal;
            }
    }

    const filterArtists = () => {
        const filteringCriteria = {
            "LanguageId":selectedLanguages?.map(a => a.LanguageId)?.join(","),
            "CategoryId":userSelectedCategories?.map(a => a.CategoryId)?.join(","),
            "GenreId":userSelectedGenres?.map(a => a.GenreId)?.join(","),
            "FromCharge":userMinimumBudget,
            "ToCharge":userMaximumBudget
        }
        dispatch(getUserFilteredArtists(filteringCriteria));
    }

    useEffect(()=>{
        const selectedGenre = new URLSearchParams(location.search).get('genre');
        const selectedEvent = new URLSearchParams(location.search).get('event');

        // setting the minimum and maximum value of budget
        setTimeout(() => {
            const budgetBox = document.querySelectorAll('.range-slider__thumb');
            if(budgetBox.length > 0){
                budgetBox[0].innerText = userMinimumBudget;
                budgetBox[1].innerText = userMaximumBudget;
            }
        }, 500);
        setTimeout(() => {
            const budgetBox = document.querySelectorAll('.range-slider__thumb');
            if(budgetBox.length > 0){
                budgetBox[0].innerText = userMinimumBudget;
                budgetBox[1].innerText = userMaximumBudget;
            }
        }, 3000);

        if(selectedGenre !== null){
            const preSelectedGenres = gernes.filter((genre)=> {return selectedGenre.split(",").includes(genre.GenreId.toString())});
            dispatch(setUserSelectedGenres(preSelectedGenres));
        }
        if(selectedEvent !== null){
            const preSelectedEvents = events.filter((eve)=> {return selectedEvent.split(",").includes(eve.EventsId.toString())});
            dispatch(setUserSelectedEvents(preSelectedEvents));
        }
    },[])
  return (
    <>
        <section className="main-filter-sec">
            {props.isLoading ? (
                <>
                <Stack direction="horizontal" gap={3} className="head-sec">
                    <div className="">
                        <h2 className="">
                            <Skeleton className="" width="100px" count={1}  />
                        </h2>
                    </div>
                    <div className=" ms-auto">
                        <Skeleton width="100px" height="40px" count={1}  />
                    </div>
                </Stack>
                <div className="filter-option">
                    <Skeleton className="mr-4 mb-2" width="200px" height="40px" count={4} inline={true}  />
                </div>
                </>
            ):(
                    <>
                    <Stack direction="horizontal" gap={3} className="head-sec">
                        <div className="">
                            <h2 className="">Filter</h2>
                        </div>
                        <div className=" ms-auto">
                            <Button variant="primary" className="l-b wbtnn view-all-btn" onClick={filterArtists}>View all</Button>
                        </div>
                    </Stack>
                    <Row>
                        <Col md={6} lg={6} xl={6}>
                            <Multiselect
                                isObject={true}
                                options= { categories?.filter((key) => !key.IsCancelled) }
                                showCheckbox
                                showArrow
                                className='l-l mb-3'
                                placeholder="Categories"
                                displayValue="CategoryName"
                                onSelect={selectCategory}
                                onRemove={removeCategory}
                                selectedValues={userSelectedCategories}
                            />
                            <Multiselect
                                isObject={true}
                                options= { gernes?.filter((key) => !key.IsCancelled) }
                                showCheckbox
                                showArrow
                                className='l-l mb-3'
                                placeholder="Genres"
                                displayValue="GenreName"
                                onSelect={selectGenre}
                                onRemove={removeGenre}
                                selectedValues={userSelectedGenres}
                            />
                            
                        </Col>
                        <Col md={6} lg={6} xl={6}>
                            <Multiselect
                                isObject={true}
                                options= { events?.filter((key) => !key.IsCancelled) }
                                showCheckbox
                                showArrow
                                className='l-l'
                                placeholder="Events"
                                displayValue="EventsName"
                                onSelect={selectEvent}
                                onRemove={removeEvent}
                                selectedValues={userSelectedEvents}
                            />
                           <RangeSlider 
                                min={5000}
                                max={250000}
                                step={1000}
                                defaultValue={[userMinimumBudget, userMaximumBudget]}
                                id="range-slider-ab"
                                className=""
                                onInput = {(e)=>{handleDrag(e)}}
                            />
                        </Col>
                    </Row>
                    
                    </>
            )}            
        </section>
    </>
  )
}

export default Filter