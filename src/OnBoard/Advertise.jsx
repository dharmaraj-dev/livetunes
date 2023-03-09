import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Guitar from '../assets/images/guitar.png';
import Gaudio from '../assets/images/gaudio.mp3';


const Advertise = () => {
    const audio = new Audio(Gaudio);
    // audio.loop = false;
  return (
    <>  
        <div className="inner-adsec">
            <Row>
                <Col lg={5}>
                    <img src={Guitar} alt="" className="w-100" />
                </Col>
                <Col lg={7} className="align-center">
                    <div className="inner-adhead-sec">
                        <p className='l-m adhead'>Want to surprise your girlfriend ? We will make this possible</p>
                        <div className="adbutton">
                            <button type="button" className="l-sb btnn  btn btn-primary" onClick={() => {audio.play();}}>Click here</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </>
  )
}

export default Advertise