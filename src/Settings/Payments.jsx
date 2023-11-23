import React, { useState } from 'react';
import Stack from "react-bootstrap/Stack";
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FiEdit } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import Paysvgrepo from '../assets/images/credit-cards-svgrepo-com.png';
import MailBox from '../assets/images/mail-box.png';
import PayCard from './PayCard';
import SaveAddress from './SaveAddress';
import { useDispatch, useSelector } from "react-redux";
import { successToast, errorToast } from "../services/toast-service";
import { addCard, saveAddress } from "../redux/commonSlice";
const Payments = (props) => {
  const dispatch = useDispatch();

  const [cardNo, setCardNo] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpDate, setCardExpDate] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [isCardNoValid, setIsCardNoValid] = useState(true);

  const [addressLine, setAddressLine] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [filteredCities,setFilteredCities] = useState([]);

  const { addCardLoading, addAddressLoading } = useSelector(state => state.commonStates);
  const { cities, states} = useSelector(state => state.common);


  const selectStateAndGetItsCities = (stateId) => {
      if(stateId !== "") {
          const data = cities.filter((cts)=>cts.StateId == stateId.split("_")[0]);
          setFilteredCities(data)
      }
      else{
          setFilteredCities([])
      }
  }

  function validatePIN (pin) {
      return /^(\d{4}|\d{6})$/.test(pin);
  }


  const setAndValidateCardNo = (e) => {
    let ccNum = e.target.value;
    var visaPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var mastPattern = /^(?:5[1-5][0-9]{14})$/;
    var amexPattern = /^(?:3[47][0-9]{13})$/;
    var discPattern = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/; 

    var isVisa = visaPattern.test( ccNum ) === true;
    var isMast = mastPattern.test( ccNum ) === true;
    var isAmex = amexPattern.test( ccNum ) === true;
    var isDisc = discPattern.test( ccNum ) === true;

    setCardNo(ccNum)

    if( isVisa || isMast || isAmex || isDisc ) {
      setIsCardNoValid(true)
    } else {
      setIsCardNoValid(false)
    }
  }


  const saveCard = (e) => {
    e.preventDefault();
    if(!isCardNoValid) {
      errorToast("Invalid or Missing Card No.")
      return false;
    } else if(cardName == "") {
      errorToast("Enter Card Holder Name.")
      return false;
    } else if(cardExpDate == "") {
      errorToast("Enter Card Expiry Date.")
      return false;
    } else if(cardCvv == "") {
      errorToast("Enter Card CVV.")
      return false;
    }

    let dataToSend = {
      "CardNo": cardNo,
      "CardName": cardName,
      "ExpiryNo": cardExpDate,
      "CVV": cardCvv
    }
    dispatch(addCard(dataToSend)).then((res) => {
      console.log(res);
      if(res.data.IsSuccess){
        setCardNo("");
        setCardName("");
        setCardExpDate("");
        setCardCvv("");
      }
    })
  }

  const saveAddressDetails = (e) => {
    e.preventDefault();
    if(!validatePIN(pincode)) {
      errorToast("Invalid Pincode");
      return false;
    }
    let dataToSend = {
      "Address1": addressLine,
      "CityId": city.split('_')[0],
      "CityName": city.split('_')[1],
      "StateId": state.split('_')[0],
      "StateName": state.split('_')[1],
      "PinCode": pincode
    }
    dispatch(saveAddress(dataToSend)).then((res) => {
      console.log(res);
      if(res.data.IsSuccess){
        setAddressLine("");
        setCity("");
        setState("");
        setPincode("");
      }
    })
  }

  return (
    <>
        <div className="cart-details-box  login-setting-cart">
          <div className="cart-header">
            <Stack direction="horizontal" gap={5}>
              <h4 className="l-sb">Payments</h4>
            </Stack>
          </div>
          <div className="d-inline-flex postion-r gap-3" style={{zIndex: "4"}}>
            <div className="ico-img">
                <img src={Paysvgrepo} alt="" />
            </div>
            <div className="">
                <h5 className="l-sb mb-1 head">Saved Cards</h5>
                <Stack direction="horizontal" gap={1}>
                <div className="l-r sub-head fs-6">Saved cards are used for your online transactions</div>
                </Stack>
            </div>
          </div>
            <Accordion className="postion-r">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="acco-header-login-setting"><span className="red-color acco-show"><FiEdit size={24}/> Change/add card</span> <span className="acco-hide red-color"><RxCrossCircled size={24}/> Close</span></Accordion.Header>
                    <Accordion.Body>
                    <div className="main-inner-setting-sec">
                        <Row>
                          <Col lg={6} className="col-sec-1">
                            <div className="inner-setting-sec">
                              <Form.Label column sm={12} className="l-sb fs-6">
                                Current Card:
                              </Form.Label>
                              <PayCard preSavedCard={props?.preSavedCard}/>
                            </div>
                          </Col>
                          <Col lg={6} className="col-sec-2">
                            <div className="inner-setting-sec">
                              <Form onSubmit={(e) => {saveCard(e)}} method="post">
                                <Form.Group as={Row} className="mb-3" controlId="">
                                  <Form.Label column sm={3} className="l-sb fs-6">
                                  Card no.
                                  </Form.Label>
                                  <Col sm={9}>
                                    <Form.Control type="number" value={cardNo} onChange={(e) => {setAndValidateCardNo(e)}} required />
                                    {!isCardNoValid && (
                                    <Form.Label column sm={12} className="red-color status_label">
                                      Invalid Card Number
                                    </Form.Label>
                                    )}
                                  </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3 l-sb fs-6" controlId="">
                                  <Form.Label column sm={3}>
                                  Name
                                  </Form.Label>
                                  <Col sm={9}>
                                    <Form.Control type="text" value={cardName} onChange={(e) => {setCardName(e.target.value)}}  required/>
                                  </Col>
                                </Form.Group>
                          
                                <Row>
                                  <Col sm={6}>
                                    <Form.Group as={Row} className="mb-3 l-sb fs-6" controlId="">
                                      <Form.Label column sm={6}>
                                       Expiry date
                                      </Form.Label>
                                      <Col sm={6}>
                                        <Form.Control type="date" value={cardExpDate} onChange={(e) => {setCardExpDate(e.target.value)}}  required/>
                                      </Col>
                                    </Form.Group>
                                  </Col>
                                  <Col sm={6}>
                                    <Form.Group as={Row} className="mb-3 l-sb fs-6" controlId="">
                                      <Form.Label column sm={6} className="text-end">
                                        CVV
                                      </Form.Label>
                                      <Col sm={6}>
                                        <Form.Control type="password" value={cardCvv} onChange={(e) => {setCardCvv(e.target.value)}} required/>
                                      </Col>
                                    </Form.Group>
                                  </Col>
                                </Row>
                                <Form.Group as={Row} className="text-center inner-setting-button">
                                  <Col>
                                    <button
                                      type="submit"
                                      className="l-b btnn btn btn-primary border-radius-36"
                                      disabled={addCardLoading}
                                    >
                                      {addCardLoading && (
                                          <span className="spinner-border spinner-border-sm"></span> 
                                        )} 
                                       Add New Card</button>
                                  </Col>
                                </Form.Group>
                              </Form>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div className="save-address-sec">
              <div className="d-inline-flex postion-r gap-3" style={{zIndex: "4"}}>
                <div className="ico-img">
                    <img src={MailBox} alt="" />
                </div>
                <div className="">
                    <h5 className="l-sb mb-1 head">Saved address</h5>
                    <Stack direction="horizontal" gap={1}>
                    <div className="l-r sub-head fs-6">Your registered address where we can communicate <br /> with you personally</div>
                    </Stack>
                </div>
              </div>
              <Accordion className="postion-r">
                  <Accordion.Item eventKey="0">
                      <Accordion.Header className="acco-header-login-setting"><span className="red-color acco-show"><FiEdit size={24}/> Edit/Add address</span> <span className="acco-hide red-color"><RxCrossCircled size={24}/> Close</span></Accordion.Header>
                      <Accordion.Body>
                      <div className="main-inner-setting-sec">
                          <Row>
                            <Col lg={6} className="col-sec-1">
                              <div className="inner-setting-sec">
                                <Form>
                                    <Form.Group as={Row} className="mb-3" controlId="">
                                      <Form.Label column sm={12} className="l-sb fs-6">
                                      Current Address:
                                      </Form.Label>
                                      <Col sm={12}>
                                        <SaveAddress preSavedAddress={props?.preSavedAddress}/>
                                      </Col>
                                    </Form.Group>
                                  </Form>
                              </div>
                            </Col>
                            <Col lg={6} className="col-sec-2">
                              <div className="inner-setting-sec">
                                <Form method="post" onSubmit={(e) => {saveAddressDetails(e)}}>
                                  <Form.Group as={Row} className="mb-3" controlId="">
                                    <Form.Label column sm={3} className="l-sb fs-6">
                                    Address line*
                                    </Form.Label>
                                    <Col sm={9}>
                                      <Form.Control type="text" value={addressLine} onChange={(e) => {setAddressLine(e.target.value)}} required/>
                                    </Col>
                                  </Form.Group>
                                  <Form.Group as={Row} className="mb-3 l-sb fs-6" controlId="">
                                    <Form.Label column sm={3}>
                                    State*
                                    </Form.Label>
                                    <Col sm={9}>
                                      <Form.Select 
                                        name="state" 
                                        className="form-control"
                                        value={state}
                                        onChange={(e) => {
                                            selectStateAndGetItsCities(e.target.value);
                                            setState(e.target.value);
                                            setCity("");
                                          }
                                        }
                                        required
                                        >
                                            <option value="">Select state</option>
                                            {states?.filter((key) => !key.IsCancelled).map((state, index) => {
                                                return (
                                                    <option key={`${state.StateId}_${state.StateName}`}
                                                    value={`${state.StateId}_${state.StateName}`}
                                                    >
                                                    {state.StateName}
                                                    </option>)
                                            })}
                                        </Form.Select>
                                    </Col>
                                  </Form.Group>
                                  <Form.Group as={Row} className="mb-3 l-sb fs-6" controlId="">
                                    <Form.Label column sm={3}>
                                    City*
                                    </Form.Label>
                                    <Col sm={9}>
                                      <Form.Select 
                                      className="form-control"
                                      value={city}
                                      onChange={(e) => {setCity(e.target.value)}
                                      }
                                      required
                                      >
                                            <option>Select city</option>
                                            {filteredCities?.filter((key) => !key.IsCancelled).map((city, index) => {
                                                return (
                                                  <option
                                                    key={`${city.CityId}_${city.CityName}`}
                                                    value={`${city.CityId}_${city.CityName}`}
                                                  >
                                                    {city.CityName}
                                                  </option>)
                                            })}
                                        </Form.Select>
                                    </Col>
                                  </Form.Group>
                                  <Form.Group as={Row} className="mb-3 l-sb fs-6" controlId="">
                                    <Form.Label column sm={3}>
                                    Pincode*
                                    </Form.Label>
                                    <Col sm={9}>
                                      <Form.Control type="number" value={pincode} onChange={(e) => {setPincode(e.target.value)}} required />
                                    </Col>
                                  </Form.Group>
                                  <Form.Group as={Row} className="text-center inner-setting-button">
                                    <Col>
                                      <button
                                        type="submit"
                                        className="l-b btnn btn btn-primary border-radius-36"
                                        disabled={addAddressLoading}
                                      >
                                        {addAddressLoading && (
                                          <span className="spinner-border spinner-border-sm"></span> 
                                        )} Save</button>
                                    </Col>
                                  </Form.Group>
                                </Form>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Accordion.Body>
                  </Accordion.Item>
              </Accordion>
            </div>
        </div>
    </>
  )
}

export default Payments