import React, { useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { MdDeleteForever } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";

const PayCard = () => {
    const [val,setVal]=useState([]);
    const handleAdd=()=>{
        const abc=[...val,[]]
        setVal(abc)
    }
    const handleDelete=(i)=>{
        const deleVal=[...val]
        deleVal.splice(i,1)
        setVal(deleVal)
    }
  return (
    <>
        <div className="main-paycard-sec">

            <div className="inner-paycard">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm={3} className="l-sb fs-6">
                        Card no.
                        </Form.Label>
                        <Col sm={9}>
                        <Form.Label column sm={9}>
                        <h5 className="l-r">12345678901233</h5>
                        </Form.Label>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 l-sb fs-6" controlId="">
                        <Form.Label column sm={3}>
                        Name
                        </Form.Label>
                        <Col sm={9}>
                        <Form.Label column sm={9}>
                        <h5 className="l-r">Rahul roy</h5>
                        </Form.Label>
                        </Col>
                    </Form.Group>
                
                    <Row>
                        <Col sm={6}>
                        <Form.Group as={Row} className="mb-3 l-sb fs-6" controlId="">
                            <Form.Label column sm={6}>
                            Expiry date
                            </Form.Label>
                            <Col sm={6}>
                            <h5 className="l-r mt-2">07/34</h5>
                            </Col>
                        </Form.Group>
                        </Col>
                        <Col sm={6}>
                        <Form.Group as={Row} className="mb-3 l-sb fs-6" controlId="">
                            <Form.Label column sm={6} className="text-end">
                            CVV
                            </Form.Label>
                            <Col sm={6}>
                            <h5 className="l-r mt-1">xxx</h5>
                            </Col>
                        </Form.Group>
                        </Col>
                    </Row>

                </Form>
            </div>
            
            {val.map((data,i)=>{

            return(

            <div className="card-outer-sec">

                <div className="inner-paycard">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm={3} className="l-sb fs-6">
                        Card no.
                        </Form.Label>
                        <Col sm={9}>
                        <Form.Label column sm={9}>
                        <h5 className="l-r">12345678901233</h5>
                        </Form.Label>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 l-sb fs-6" controlId="">
                        <Form.Label column sm={3}>
                        Name
                        </Form.Label>
                        <Col sm={9}>
                        <Form.Label column sm={9}>
                        <h5 className="l-r">Rahul roy</h5>
                        </Form.Label>
                        </Col>
                    </Form.Group>
                
                    <Row>
                        <Col sm={6}>
                        <Form.Group as={Row} className="mb-3 l-sb fs-6" controlId="">
                            <Form.Label column sm={6}>
                            Expiry date
                            </Form.Label>
                            <Col sm={6}>
                            <h5 className="l-r mt-2">07/34</h5>
                            </Col>
                        </Form.Group>
                        </Col>
                        <Col sm={6}>
                        <Form.Group as={Row} className="mb-3 l-sb fs-6" controlId="">
                            <Form.Label column sm={6} className="text-end">
                            CVV
                            </Form.Label>
                            <Col sm={6}>
                            <h5 className="l-r mt-1">xxx</h5>
                            </Col>
                        </Form.Group>
                        </Col>
                    </Row>

                </Form>
                </div>
                <p className="text-end l-sb red-color mt-3 cursor-pointer" onClick={()=>handleDelete(i)}><MdDeleteForever size={24}/> Delete this card</p>

            </div>    
            )
            
        })}

            <p className="text-center l-sb red-color mt-5 cursor-pointer" onClick={()=>handleAdd()}><IoIosAddCircleOutline size={24} className="red-color"/> Add a new card</p>
        </div>
    </>
  )
}

export default PayCard