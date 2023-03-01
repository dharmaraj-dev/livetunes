import React from 'react';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import CloseButton from 'react-bootstrap/CloseButton';

const Filter = () => {
  return (
    <>
        <section className="main-filter-sec">
            <Stack direction="horizontal" gap={3} className="head-sec">
                <div className=""><h2 className="">Filter</h2></div>
                <div className=" ms-auto">
                    <Button variant="primary" className="l-b wbtnn view-all-btn">View all</Button>
                </div>
            </Stack>
            
            <div className="filter-option">
                <Form.Select aria-label="Default select example">
                    <option>Categories</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Form.Select aria-label="Default select example">
                    <option>Select Genre</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Form.Select aria-label="Default select example">
                    <option>Select Event</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Form.Select aria-label="Default select example">
                    <option>Budget Range</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </div>
            <div className="filter-selected">
                <Badge className='l-r'>
                    Singer <CloseButton />
                </Badge>
                <Badge className='l-r'>
                    Singer <CloseButton />
                </Badge>
                <Badge className='l-r'>
                    Singer <CloseButton />
                </Badge>
            </div>
        </section>
    </>
  )
}

export default Filter