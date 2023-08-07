import React from 'react';
import Avtar from '../assets/images/like-img.png';
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";

const RecentOrderList = () => {
  return (
    <>
        <div className="main-artist-transacation mt-0">
            <div className="header-sec">
                <Stack direction="horizontal" gap={3}>
                    <div>
                        <h2 className="head">Recent Orders</h2>
                    </div>
                    <div className="ms-auto see-all-text l-sb">
                        <Link to="/recentorders">
                        <span className="red-color">See all</span>
                        </Link>
                    </div>
                </Stack>
            </div>
            <div className="main-inner-transactions-sec">
                <div className="inner-transactions-sec">
                <Stack direction="horizontal" gap={3}>
                <div className="img-sec">
                    <img src={Avtar} alt="" className="w-100" />
                </div>
                <div className="l-sb">
                    <span className="name-head l-b">Radhika Shah</span><br>
                    </br>
                    <span className="l-sb sub-head">Wedding Sangeet</span><br>
                    </br>
                    <span className="l-r sub-head">Date: 22/Jul/2022</span>
                    </div>
                <div className="name-head ms-auto red-color l-b">₹ 20,000/-</div>
                </Stack>
            </div>

            <div className="inner-transactions-sec">
                <Stack direction="horizontal" gap={3}>
                <div className="img-sec">
                    <img src={Avtar} alt="" className="w-100" />
                </div>
                <div className="l-sb">
                    <span className="name-head l-b">Radhika Shah</span><br>
                    </br>
                    <span className="l-sb sub-head">Wedding Sangeet</span><br>
                    </br>
                    <span className="l-r sub-head">Date: 22/Jul/2022</span>
                    </div>
                <div className="name-head ms-auto red-color l-b">₹ 20,000/-</div>
                </Stack>
            </div>

            <div className="inner-transactions-sec">
                <Stack direction="horizontal" gap={3}>
                <div className="img-sec">
                    <img src={Avtar} alt="" className="w-100" />
                </div>
                <div className="l-sb">
                    <span className="name-head l-b">Radhika Shah</span><br>
                    </br>
                    <span className="l-sb sub-head">Wedding Sangeet</span><br>
                    </br>
                    <span className="l-r sub-head">Date: 22/Jul/2022</span>
                    </div>
                <div className="name-head ms-auto red-color l-b">₹ 20,000/-</div>
                </Stack>
            </div>

            <div className="inner-transactions-sec">
                <Stack direction="horizontal" gap={3}>
                <div className="img-sec">
                    <img src={Avtar} alt="" className="w-100" />
                </div>
                <div className="l-sb">
                    <span className="name-head l-b">Radhika Shah</span><br>
                    </br>
                    <span className="l-sb sub-head">Wedding Sangeet</span><br>
                    </br>
                    <span className="l-r sub-head">Date: 22/Jul/2022</span>
                    </div>
                <div className="name-head ms-auto red-color l-b">₹ 20,000/-</div>
                </Stack>
            </div>

            <div className="inner-transactions-sec">
                <Stack direction="horizontal" gap={3}>
                <div className="img-sec">
                    <img src={Avtar} alt="" className="w-100" />
                </div>
                <div className="l-sb">
                    <span className="name-head l-b">Radhika Shah</span><br>
                    </br>
                    <span className="l-sb sub-head">Wedding Sangeet</span><br>
                    </br>
                    <span className="l-r sub-head">Date: 22/Jul/2022</span>
                    </div>
                <div className="name-head ms-auto red-color l-b">₹ 20,000/-</div>
                </Stack>
            </div>

            <div className="inner-transactions-sec">
                <Stack direction="horizontal" gap={3}>
                <div className="img-sec">
                    <img src={Avtar} alt="" className="w-100" />
                </div>
                <div className="l-sb">
                    <span className="name-head l-b">Radhika Shah</span><br>
                    </br>
                    <span className="l-sb sub-head">Wedding Sangeet</span><br>
                    </br>
                    <span className="l-r sub-head">Date: 22/Jul/2022</span>
                    </div>
                <div className="name-head ms-auto red-color l-b">₹ 20,000/-</div>
                </Stack>
            </div>
            </div>
        </div>
    </>
  )
}

export default RecentOrderList