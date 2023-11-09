import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const AtmCard = (props) => {

  return (
    <>
        <div className="inner-paycard">
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="">
                    <Form.Label column sm={3} className="l-sb fs-6">
                    Card no.
                    </Form.Label>
                    <Col sm={9}>
                    <Form.Label column sm={9}>
                    <h5 className="l-r">{props?.cardData?.CardNo}</h5>
                    </Form.Label>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 l-sb fs-6" controlId="">
                    <Form.Label column sm={3}>
                    Name
                    </Form.Label>
                    <Col sm={9}>
                    <Form.Label column sm={9}>
                    <h5 className="l-r">{props?.cardData?.CardName}</h5>
                    </Form.Label>
                    </Col>
                </Form.Group>
            
                <Row>
                    <Col sm={6}>
                    <Form.Group as={Row} className="mb-3 l-sb fs-6" controlId="">
                        <Form.Label column sm={5}>
                        Expiry date
                        </Form.Label>
                        <Col sm={7}>
                        <h5 className="l-r mt-2">{props?.cardData?.ExpiryNo}</h5>
                        </Col>
                    </Form.Group>
                    </Col>
                    <Col sm={6}>
                    <Form.Group as={Row} className="mb-3 l-sb fs-6" controlId="">
                        <Form.Label column sm={4} className="text-end">
                        CVV
                        </Form.Label>
                        <Col sm={8}>
                        <h5 className="l-r mt-1">xxx</h5>
                        </Col>
                    </Form.Group>
                    </Col>
                </Row>
            </Form>
        </div>
    </>
  )
}

export default AtmCard