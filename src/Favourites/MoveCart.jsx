import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Art from '../assets/images/art.png';

const MoveCart = () => {
  return (
    <>
        <div className="cart-details-box postion-r cart-move-box">
            <div className="d-flex">
                <div className="img-sec">
                    <img src={Art} alt="" className="w-100"/>
                </div>
                <div className="inner-artist-detail">
                    <h4 className="l-sb">Artist Name, Solo Singer</h4>
                    <div className="value-sec l-b red-color"><span>Rs 40,000</span></div>
                    <Stack direction="horizontal" gap={3}>
                    <div className="l-r sub-head">Location :</div>
                    <div className="l-r sub-head">Mumbai , Maharashtra</div>
                    </Stack>
                    <Stack direction="horizontal" gap={3}>
                    <div className="l-r sub-head">Event type :</div>
                    <div className="l-sb sub-head">
                     House Party
                    </div>
                    </Stack>
                    
                    <Stack direction="horizontal" gap={3}>
                    <div className="l-r sub-head">Event date :</div>
                    <div className="l-sb sub-head">
                     22, Jul, 2022
                    </div>
                    </Stack>

                    <Stack direction="horizontal" gap={3}>
                    <div className="l-r sub-head">Event time :</div>
                    <div className="l-r sub-head">
                        <Form.Control placeholder=" " type="time"/>
                    </div>
                    </Stack>

                    <Stack direction="horizontal" gap={3}>
                    <div className="l-r sub-head">Event days :</div>
                    <div className="l-r sub-head">
                        <Form.Select aria-label="Default select example" className="form-control">
                            <option value="1">1 day</option>
                            <option value="2">2 days</option>
                            <option value="3">3 days</option>
                        </Form.Select>
                    </div>
                    </Stack>
                    <Stack direction="horizontal" gap={3}>
                    <div className="l-r sub-head">Event duration :</div>
                    <div className="l-r sub-head">
                        <Form.Select aria-label="Default select example" className="form-control">
                            <option value="1">1hr</option>
                            <option value="2">2hr</option>
                            <option value="3">3hr</option>
                        </Form.Select>
                    </div>
                    </Stack>
                </div>
            </div>
            <div className="cart-footer">
                <Stack direction="horizontal" gap={3}>
                <div className="ms-auto">
                    <button type="button" className="l-b wbtnn btn btn-primary w-100 red-color">Remove</button>
                </div>
                <div className="">
                    <button type="button" className="l-b wbtnn btn btn-primary w-100">Move to cart</button>
                </div>
                </Stack>
            </div>
        </div>
    </>
  )
}

export default MoveCart