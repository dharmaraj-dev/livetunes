import React, { useEffect }  from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import Faq from "../OnBoard/Faq";
import { getSupportFaqs } from "../redux/commonSlice";



const SingleArtist = () => {
  const dispatch = useDispatch();
  
const { supportFaqs, supportFaqsLoading } = useSelector(state => state.commonStates);


  useEffect(()=>{
    window.scrollTo(0, 0);
   dispatch(getSupportFaqs());
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
                    supportFaqsLoading ? (
                        <>
                            <Skeleton className="l-sb head mb-2" width="100%" height="60px" count={1}  />
                            <Skeleton className="l-sb head mb-2" width="100%" height="50px" count={1}  />
                            <Skeleton className="l-sb head mb-2" width="100%" height="50px" count={1}  />
                            <Skeleton className="l-sb head mb-2" width="100%" height="50px" count={1}  />
                            <Skeleton className="l-sb head mb-2" width="100%" height="50px" count={1}  />
                            <Skeleton className="l-sb head mb-2" width="100%" height="50px" count={1}  />
                            <Skeleton className="l-sb head mb-2" width="100%" height="50px" count={1}  />
                            <Skeleton className="l-sb head mb-2" width="100%" height="50px" count={1}  />
                            <Skeleton className="l-sb head mb-2" width="100%" height="50px" count={1}  />
                            <Skeleton className="l-sb head mb-2" width="100%" height="50px" count={1}  />
                            <Skeleton className="l-sb head mb-2" width="100%" height="50px" count={1}  />
                            <Skeleton className="l-sb head mb-2" width="100%" height="50px" count={1}  />
                            <Skeleton className="l-sb head mb-2" width="100%" height="50px" count={1}  />
                            <Skeleton className="l-sb head mb-2" width="100%" height="50px" count={1}  />
                            <Skeleton className="l-sb head mb-2" width="100%" height="50px" count={1}  />
                        </>
                    ) : (
                        <Container fluid>
                            <div className="main-artists-list">
                                <section className="main-livetune-details mt-2">
                                    <div className="s-heading">
                                        <p className="s-head l-b">Frequently asked questions</p>
                                    </div>
                                    <Faq data={supportFaqs}/>
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