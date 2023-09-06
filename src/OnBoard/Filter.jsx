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


const Filter = () => {
    const dispatch = useDispatch();
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
    useEffect(()=>{
        const filteringCriteria = {
            "LanguageId":userSelectedLanguages?.map(a => a.LanguageId)?.join(","),
            "CategoryId":userSelectedCategories?.map(a => a.CategoryId)?.join(","),
            "GenreId":userSelectedGenres?.map(a => a.GenreId)?.join(","),
            "CityId":userSelectedCities?.map(a => a.CityId)?.join(","),
            "FromCharge":userMinimumBudget,
            "ToCharge":userMaximumBudget
        }
        dispatch(getUserFilteredArtists(filteringCriteria));
    },[userSelectedCategories,userSelectedGenres,userSelectedEvents])
  return (
    <>
        <section className="main-filter-sec">
            <Stack direction="horizontal" gap={3} className="head-sec">
                <div className=""><h2 className="">Filter</h2></div>
                <div className=" ms-auto">
                    <Button variant="primary" className="l-b wbtnn view-all-btn">View all</Button>
                </div>
            </Stack>
            
            <div className="filter-option">
                {/* <Form.Select aria-label="Default select example">
                    <option>Categories</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select> */}
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
                {/* <Form.Select aria-label="Default select example">
                    <option>Select Genre</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select> */}
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
                {/* <Form.Select aria-label="Default select example">
                    <option>Select Event</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select> */}
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
                {/* <Form.Select aria-label="Default select example">
                    <option>Budget Range</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select> */}
                <div className="budgetRange">
                    <span>Budget</span>&nbsp;&nbsp;&nbsp;
                    <span>₹{userMinimumBudget}-₹{userMaximumBudget}</span>
                </div>
            </div>
            {/* <div className="filter-selected">
                <Badge className='l-r'>
                    Singer <CloseButton />
                </Badge>
                <Badge className='l-r'>
                    Singer <CloseButton />
                </Badge>
                <Badge className='l-r'>
                    Singer <CloseButton />
                </Badge>
            </div> */}
        </section>
    </>
  )
}

export default Filter