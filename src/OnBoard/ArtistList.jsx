import React, {useEffect, useState} from "react";
import { useLocation } from 'react-router';
import Skeleton from 'react-loading-skeleton'
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import Filter from "./Filter";
import ArtistCard from "./ArtistCard";
import SlideCard from "./SlideCard";
import Advertise from "./Advertise";
import { useDispatch, useSelector } from "react-redux";
import ThreeDotLoader from '../Artist/ThreeDotLoader'
import queryString from 'query-string';
import { fetchHomeData } from "../redux/userHomeSlice";
import { getArtists } from '../redux/userSlice';
import { setUserSelectedGenres, setUserSelectedEvents } from '../redux/userSettings';

const ArtistList = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { gernes, events } = useSelector(state => state.common );
  const { specialEvents, addBanner, homeLoading } = useSelector(state => state.userHome);
  const { selectedLanguages, userMinimumBudget, userMaximumBudget, userSelectedCategories, userSelectedGenres, userSelectedEvents } = useSelector(state => state.userSettings);
  const [isLoading, setIsLoading] = useState(true);
  const { filteredArtists, artistLoading } = useSelector(state => state.user);


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
      const selectedGenre = new URLSearchParams(location.search).get('genre');
      const selectedEvent = new URLSearchParams(location.search).get('event');
      let preSelectedGenres = null;
      let preSelectedEvents = null;
      if(selectedGenre !== null){
          preSelectedGenres = gernes.filter((genre)=> {return selectedGenre.split(",").includes(genre.GenreId.toString())});
          dispatch(setUserSelectedGenres(preSelectedGenres));
      }
      if(selectedEvent !== null){
          preSelectedEvents = events.filter((eve)=> {return selectedEvent.split(",").includes(eve.EventsId.toString())});
          dispatch(setUserSelectedEvents(preSelectedEvents));
      }

      const filteringCriteria = {
          "LanguageId":selectedLanguages?.map(a => a.LanguageId)?.join(","),
          "CategoryId":userSelectedCategories?.map(a => a.CategoryId)?.join(","),
          "GenreId":preSelectedGenres != null ? preSelectedGenres.map(a => a.GenreId)?.join(",") : userSelectedGenres?.map(a => a.GenreId)?.join(","),
          "EventId":preSelectedEvents != null ? preSelectedEvents.map(a => a.EventsId)?.join(",") : setUserSelectedEvents?.map(a => a.EventsId)?.join(","),
          "FromCharge":userMinimumBudget,
          "ToCharge":userMaximumBudget
      }
      dispatch(getArtists(filteringCriteria));
     dispatch(fetchHomeData());
  }, [dispatch]);
  

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
                    <section>
                      <Filter isLoading={artistLoading}/>
                    </section>
                    <section className="artists-found-card">
                      {artistLoading ? (
                        <div className="found-heading-sec">
                           <Skeleton className="l-sb head mb-2" width="160px" count={1}  />
                           <Skeleton className="l-l sub-head" width="240px" count={1}  />
                        </div>
                      ):(
                        <div className="found-heading-sec">
                          <p className="l-sb head">For You</p>
                          <p className="l-l sub-head"><span>{filteredArtists.length}</span> Artists Found!</p>
                        </div>
                      )}
                      <div className="artists-card-sec">
                        <ArtistCard isLoading={artistLoading} artistListData={filteredArtists}/>
                      </div>
                    </section>
                    <section>
                      <Advertise isLoading={homeLoading} data={addBanner} />
                    </section>
                    <section className="look-something-sec">
                        <div className="heading-sec">
                            {artistLoading ? (
                               <Skeleton className="l-sb head" width="250px" count={1}  />
                            ):(
                              specialEvents.length > 0 && (
                                <p className="l-sb head">People Also Visit</p>
                              )
                            )}
                        </div>
                        <div>
                            <SlideCard isLoading={homeLoading} data={specialEvents}/>
                        </div>
                    </section>
                </Container>
            </div>
            </div>
        </div>
    </>
  )
}

export default ArtistList