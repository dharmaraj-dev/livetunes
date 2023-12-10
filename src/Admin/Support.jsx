import React, { useEffect, useState }  from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from "../Layout/NavBar";
import SideNavBar from "../Layout/SideNavBar";
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import Faq from "../OnBoard/Faq";
import { getSupportFaqs } from "../redux/commonSlice";
import { Tabs, Tab} from "react-bootstrap";
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';



const SingleArtist = () => {
  const dispatch = useDispatch();
  
    const { supportFaqs, supportFaqsLoading } = useSelector(state => state.commonStates);
    const [selectedTab, setSelectedTab] = useState("General Information");
    const [faqTabs, setFaqTabs] = useState([]);
    const onMasterTabChange = (e) => {
        setSelectedTab(e);
    }

    const saveFaqTabsInArray = (faqs) => {
        
    }

  useEffect(()=>{
    window.scrollTo(0, 0);
   dispatch(getSupportFaqs());
   setFaqTabs([...new Set(supportFaqs.map(q => q.SFaqTypeName))])
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
            <div className="main-content all_masters">
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
                                    <Tabs defaultActiveKey={selectedTab} id="uncontrolled-tab-example-1" className="mb-1 justify-content-start mb-4" onSelect={(e) => {onMasterTabChange(e)}}>
                                        {faqTabs.map((fq,index) => {
                                            return (
                                                <Tab key={`faq_${index}`} eventKey={fq} title={fq}>
                                                <Faq data={supportFaqs.filter((fqs) => {return (fqs.SFaqTypeName == fq)})}/>
                                              </Tab>
                                                  )
                                        })}
                                    </Tabs>
                                    
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