import React, { useState} from 'react';
import { MdDeleteForever } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import AtmCard from './AtmCard';

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

            <AtmCard/>
            
            {val.map((data,i)=>{

            return(

            <div className="card-outer-sec">

                <AtmCard/>
                <p className="text-end l-sb red-color mt-3 cursor-pointer" onClick={()=>handleDelete(i)}><MdDeleteForever size={24}/> Delete this card</p>

            </div>    
            )
            
        })}

            <p className="text-center l-sb red-color mt-5 cursor-pointer fs-5" onClick={()=>handleAdd()}><IoIosAddCircleOutline size={30} className="red-color"/> Add a new card</p>
        </div>
    </>
  )
}

export default PayCard