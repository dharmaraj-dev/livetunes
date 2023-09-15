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


const Filter = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    console.log(queryString.parse(location.search));
    const { categories,gernes,events } = useSelector(state => state.common );
    const { userSelectedCategories,userSelectedGenres,userSelectedEvents,userSelectedLanguages,userSelectedCities } = useSelector(state => state.user);
    const {userMinimumBudget,userMaximumBudget} = useSelector(state=>state.user);
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

        if(selectedGenre !== null){
            const preSelectedGenres = gernes.filter((genre)=> {return selectedGenre.split(",").includes(genre.GenreId.toString())});
            dispatch(setUserSelectedGenres(preSelectedGenres));
        }
        if(selectedEvent !== null){
            const preSelectedEvents = events.filter((eve)=> {return selectedEvent.split(",").includes(eve.EventsId.toString())});
            dispatch(setUserSelectedEvents(preSelectedEvents));
        }
        console.log(selectedGenre.split(","))
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
                        <div className="budgetRange">
                            <span>Budget</span>&nbsp;&nbsp;&nbsp;
                            <span>₹{userMinimumBudget}-₹{userMaximumBudget}</span>
                        </div>
                    </div>
                    </>
            )}            
        </section>
    </>
  )
}

export default Filter