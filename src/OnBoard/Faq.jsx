import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = (props) => {
  return (
    <Accordion>
        {props?.data.map((faqData,index) => {
            return (
                <Accordion.Item eventKey={index} key={`faq_${index}`}>
                    <Accordion.Header>{faqData.QuestName}</Accordion.Header>
                    <Accordion.Body>
                    {faqData.QuestAns}
                    </Accordion.Body>
                </Accordion.Item>
            )
        })}
        </Accordion>
  )
}

export default Faq