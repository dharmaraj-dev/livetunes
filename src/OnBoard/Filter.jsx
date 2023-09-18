import React from 'react';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import CloseButton from 'react-bootstrap/CloseButton';
import Multiselect from 'multiselect-react-dropdown';
import { useDispatch, useSelector } from "react-redux";
import { setUserSelectedCategories,setUserSelectedGenres,setUserSelectedEvents,getUserFilteredArtists } from '../actions/user';
import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton'
import { useLocation } from 'react-router';
import queryString from 'query-string';
import {setBudgetMin,setBudgetMax} from "../actions/user";
import RangeSlider from 'react-range-slider-input';
import './slider.css';





const Filter = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    console.log(queryString.parse(location.search));
    const { categories,gernes,events } = useSelector(state => state.common );
    const { userSelectedCategories,userSelectedGenres,userSelectedEvents,userSelectedLanguages,userSelectedCities,userFilteredArtists } = useSelector(state => state.user);
    const {userMinimumBudget,userMaximumBudget} = useSelector(state=>state.user);
    const handleChange = (e) => {
        dispatch(setBudgetMin(e.minValue));
        dispatch(setBudgetMax(e.maxValue));
    };
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
    const handleDrag = () => {
        console.log(document.querySelectorAll('.range-slider__thumb'));
        const thumb = document.querySelectorAll('.range-slider__thumb');
        const maxVal = Number(thumb[0].ariaValueNow) > Number(thumb[1].ariaValueNow) ? Number(thumb[0].ariaValueNow) : Number(thumb[1].ariaValueNow);
        const minVal = Number(thumb[0].ariaValueNow) < Number(thumb[1].ariaValueNow) ? Number(thumb[0].ariaValueNow) : Number(thumb[1].ariaValueNow);
        dispatch(setBudgetMin(minVal));
        dispatch(setBudgetMax(maxVal));
        const budgetBox = document.querySelectorAll('.range-slider__thumb');
            if(budgetBox.length > 0){
                budgetBox[0].innerText = userMinimumBudget;
                budgetBox[1].innerText = userMaximumBudget;
            }
    }
    console.log('userSelectedGenres', userSelectedGenres)

    const filterArtists = () => {
        const filteringCriteria = {
            "LanguageId":userSelectedLanguages?.map(a => a.LanguageId)?.join(","),
            "CategoryId":userSelectedCategories?.map(a => a.CategoryId)?.join(","),
            "GenreId":userSelectedGenres?.map(a => a.GenreId)?.join(","),
            "CityId":userSelectedCities?.map(a => a.CityId)?.join(","),
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
        // if(selectedGenre){
        //     setUserSelectedGenres(gernes.filter((genre)=> {return genre.GenreName === selectedGenre}));
        // }
        // const filteringCriteria = {
        //     "LanguageId":userSelectedLanguages?.map(a => a.LanguageId)?.join(","),
        //     "CategoryId":userSelectedCategories?.map(a => a.CategoryId)?.join(","),
        //     "GenreId":userSelectedGenres?.map(a => a.GenreId)?.join(","),
        //     "CityId":userSelectedCities?.map(a => a.CityId)?.join(","),
        //     "FromCharge":userMinimumBudget,
        //     "ToCharge":userMaximumBudget
        // }
        // dispatch(getUserFilteredArtists(filteringCriteria));
    },[userMinimumBudget,userMaximumBudget,userFilteredArtists])
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
                    <div className="filter-option">
                        <Multiselect
                            isObject={true}
                            options= { categories?.filter((key) => !key.IsCancelled) }
                            showCheckbox
                            showArrow
                            className='l-l'
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
                            className='l-l'
                            placeholder="Genres"
                            displayValue="GenreName"
                            onSelect={selectGenre}
                            onRemove={removeGenre}
                            selectedValues={userSelectedGenres}
                        />
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
                        <div style={{display:"flex",alignItems:"baseline"}}>
                            <div style={{marginRight:"1rem"}}>
                                <h6>Budget : <b>{userMinimumBudget}-{userMaximumBudget}</b></h6>
                            </div>
                            <RangeSlider 
                                min={0}
                                max={250000}
                                step={5000}
                                defaultValue={[25000,75000]}
                                id="range-slider-ab"
                                className="margin-lg"
                                onThumbDragEnd = {()=>{handleDrag()}}
                            />
                        </div>
                    </div>
                    </>
            )}            
        </section>
    </>
  )
}

export default Filter