import React, {useEffect} from "react";
import Skeleton from 'react-loading-skeleton'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Avtar from '../assets/images/avtar.png';
import StarRate from './StarRate';
import Stack from 'react-bootstrap/Stack';
import { BiTime } from "react-icons/bi";
import { TbMessageLanguage } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { TbCurrencyRupee } from "react-icons/tb";
import { Link } from "react-router-dom";
import Heartlike from "./Heartlike";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from 'react-simple-star-rating'


const ArtistCard = (props) => {
    const { filteredArtists } = useSelector(state => state.user);
    const {user} = useSelector(state => state.userAuth);

    useEffect(() => {

    }, [filteredArtists])
    
    const ArtistCards = props.isLoading ? (
            [...Array(6)].map((e, i) => {
            return (<Col xs={12} lg={12} xl={6} key={`artist_${i}`}>
                        <div className="">
                            <Skeleton className="inner-artist-card postion-r"  height="300px" count={1}  />
                        </div>
                    </Col>)
            })
        ) : (
            filteredArtists.map((artist, index) =>
                <Col className="mb-4" xs={12} lg={12} xl={6} key={`artist_${index}`}>
                    <div className="inner-artist-card postion-r">
                        <div className="avtar-sec">
                            <div className="avtar-img">
                                <img src={artist.ArtistProfileImg} alt="" className="w-100" />
                            </div>
                            <Rating 
                              size={27}
                              initialValue={artist.Rating != "" ? artist.Rating : 0}
                              allowFraction={true}
                              fillColor="#fd3743"
                              readonly={true}
                            />
                        </div>
                        <div className="music-detail">
                            <Link to={`/artist-details/${artist.ArtistName.replace(/ /g,"-")}/${btoa(artist.ArtistId)}/${btoa(user?.RegId)}`}>
                                <p className="name l-sb">{artist.ArtistName}</p>
                                <Stack direction="horizontal" gap={2} className="from-select-filter">
                                    {artist?.MulVariety.split(',').map((mulVar,index) => {
                                        return (<div key={`mulVar_${index}`} className="inner-from-select-filter">{mulVar}</div>)
                                    })}
                                </Stack>
                                <div className="music-short-detail">
                                    <Stack direction="vertical" className="">
                                        <div className="">
                                            <span className="ico-sec"><BiTime className="red-color" /></span> <span>{artist.ArtistTimeDur}</span>
                                        </div>
                                        <div className="">
                                            <span className="ico-sec"><TbMessageLanguage className="red-color" /></span> <span>{artist.ArtistLanguage}</span>
                                        </div>
                                        <div className="">
                                            <span className="ico-sec"><IoLocationOutline className="red-color" /></span> <span>{artist.ArtistCity}</span>
                                        </div>
                                        <div className="">
                                            <span className="ico-sec"><TbCurrencyRupee className="red-color" /></span> <span className="price red-color l-sb">{artist.ArtistCharges}</span>
                                        </div>
                                    </Stack>
                                </div>
                            </Link>
                        </div>
                        <div className="artist-list-like">
                            <Heartlike props={artist}/>
                        </div>
                        <div className="book-now-btn">
                            <Link to={`/artist-details/${artist.ArtistName.replace(/ /g,"-")}/${btoa(artist.ArtistId)}/${btoa(user?.RegId)}`}>
                                <button type="button" className="l-b wbtnn book-btn btn btn-primary">Book Now</button>
                            </Link>
                        </div>
                    </div>
                </Col>
            )
        );
    return (
        <>
            <Row>
                {ArtistCards}
            </Row>
        </>
    )
}

export default ArtistCard