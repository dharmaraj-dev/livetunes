import React, { useEffect }  from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import Faq from "../OnBoard/Faq";



const SingleArtist = () => {
  const dispatch = useDispatch();
  
const { artistDetails, artistDetailsLoading } = useSelector(state => state.artist);


  useEffect(()=>{
    window.scrollTo(0, 0);
   // dispatch(fetchArtistDetails(artistId,userId));
  },[]);  
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
                {
                    artistDetailsLoading ? (
                        <>
                            <Skeleton className="l-sb head mb-2" width="160px" count={1}  />
                            <Skeleton className="l-l sub-head mb-2" width="240px" count={1}  />
                            <Skeleton className="l-l sub-head mb-2" width="380px" count={1}  />
                            <Skeleton className="l-l sub-head mb-5" width="500px" count={1}  />
                            <Skeleton className="hello-header" count={1}  />    
                        </>
                    ) : (
                        <Container fluid>
                            <div className="main-artists-list">
                                <section className="main-livetune-details">
                                    <div className="s-heading">
                                        <p className="s-head l-b">Frequently asked questions</p>
                                    </div>
                                    <Faq data={artistDetails?.selQuestLog}/>
                                </section> 
                            </div>
                        </Container>
                    )
                }
            </div>
            </div>
        </div>
    </>
  )
}

export default SingleArtist