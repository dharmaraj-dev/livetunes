import React, { useState} from 'react';
import Form from 'react-bootstrap/Form';
import { MdDeleteForever } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";

const SaveAddress = () => {
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
          
            <Form.Control
            as="textarea"
            placeholder=""
            style={{ height: '100px' }}
            />

            {val.map((data,i)=>{

            return(

            <div className="inner-save-address-sec">

                <Form.Control
                as="textarea"
                placeholder=""
                style={{ height: '100px' }}
                />
                <p className="text-end l-sb red-color mt-3 cursor-pointer" onClick={()=>handleDelete(i)}><MdDeleteForever size={24}/> Delete this card</p>

            </div>    
            )

            })}

<p className="text-center l-sb red-color mt-5 cursor-pointer fs-5" onClick={()=>handleAdd()}><IoIosAddCircleOutline size={30} className="red-color"/> Add a new card</p>
        
    </>
  )
}

export default SaveAddress