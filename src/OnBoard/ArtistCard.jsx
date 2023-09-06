import React from "react";
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

const ArtistCard = () => {
    const { userFilteredArtists } = useSelector(state => state.user);
    const ArtistCards = userFilteredArtists.map((artist) =>
        <Col xs={12} lg={12} xl={6}>
            <div className="inner-artist-card postion-r">
                <div className="avtar-sec">
                    <div className="avtar-img">
                        <img src={artist.ArtistProfileImg} alt="" className="w-100" />
                    </div>
                    <StarRate />
                </div>
                <div className="music-detail">
                    <p className="name l-sb">{artist.ArtistName}</p>
                    <Stack direction="horizontal" gap={2} className="from-select-filter">
                        <div className="inner-from-select-filter">First item</div>
                        <div className="inner-from-select-filter">Second item</div>
                        <div className="inner-from-select-filter">Third item</div>
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
                </div>
                <div className="artist-list-like">
                    <Heartlike props={artist}/>
                </div>
                <div className="book-now-btn">
                    <Link to="/singleartist" state={{ artistId: artist.ArtistId }}>
                        <button type="button" className="l-b wbtnn book-btn btn btn-primary">Book Now</button>
                    </Link>
                </div>
            </div>
        </Col>
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