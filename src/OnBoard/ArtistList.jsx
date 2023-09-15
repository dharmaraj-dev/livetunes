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
import { setUserSelectedCategories,setUserSelectedGenres,setUserSelectedEvents,getUserFilteredArtists } from '../actions/user';

const ArtistList = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { specialEvents, addBanner, homeLoading } = useSelector(state => state.userHome);

  const [isLoading, setIsLoading] = useState(true);
  const { userSelectedCategories,userSelectedGenres,userSelectedEvents,userSelectedLanguages,userSelectedCities, userMinimumBudget, userMaximumBudget } = useSelector(state => state.user);
  const { userFilteredArtists, userFilteredArtistsLoading } = useSelector(state => state.user);


  useEffect(() => {
    console.log('userFilteredArtistsLoading', userFilteredArtistsLoading)
    const filteringCriteria = {
          "LanguageId":userSelectedLanguages?.map(a => a.LanguageId)?.join(","),
          "CategoryId":userSelectedCategories?.map(a => a.CategoryId)?.join(","),
          "GenreId":userSelectedGenres?.map(a => a.GenreId)?.join(","),
          "FromCharge":userMinimumBudget,
          "ToCharge":userMaximumBudget
      }
      dispatch(getUserFilteredArtists(filteringCriteria));
  }, [])
  //console.log(queryString.parse(location.search));
  

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
                      <Filter isLoading={userFilteredArtistsLoading}/>
                    </section>
                    <section className="artists-found-card">
                      {userFilteredArtistsLoading ? (
                        <div className="found-heading-sec">
                           <Skeleton className="l-sb head mb-2" width="160px" count={1}  />
                           <Skeleton className="l-l sub-head" width="240px" count={1}  />
                        </div>
                      ):(
                        <div className="found-heading-sec">
                          <p className="l-sb head">For You</p>
                          <p className="l-l sub-head"><span>{userFilteredArtists.length}</span> Artists Found!</p>
                        </div>
                      )}
                      <div className="artists-card-sec">
                        <ArtistCard isLoading={userFilteredArtistsLoading} artistListData={userFilteredArtists}/>
                      </div>
                    </section>
                    <section>
                      <Advertise isLoading={homeLoading} data={addBanner} />
                    </section>
                    <section className="look-something-sec">
                        <div className="heading-sec">
                            {userFilteredArtistsLoading ? (
                               <Skeleton className="l-sb head" width="250px" count={1}  />
                            ):(
                              <p className="l-sb head">People Also Visit</p>
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