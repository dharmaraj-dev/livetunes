import React, { useState} from 'react';
import { MdDeleteForever } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import AtmCard from './AtmCard';
import { useDispatch, useSelector } from "react-redux";
import { deleteCard } from "../redux/commonSlice";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

const PayCard = (props) => {
    const dispatch = useDispatch();
    const MySwal = withReactContent(Swal);

    const [val,setVal]=useState([]);
    const handleAdd=()=>{
        const abc=[...val,[]]
        setVal(abc)
    }
    const handleDelete=(cardId)=>{
        MySwal.fire({
          title: '<strong>Deletting Card?</strong>',
          icon: 'warning',
          html: "Do you want to delete this card?",
          showDenyButton: true,
          confirmButtonText: 'Yes',
          denyButtonText: `No`,
          showLoaderOnConfirm: false,
          allowOutsideClick: () => false
        }).then((result) => {
            if(result.isConfirmed) {
                let dataToSend = {"ACardDetailsId": cardId}
                dispatch(deleteCard(dataToSend))
            }
        })
        
    }
  return (
    <>
        <div className="main-paycard-sec">
            {props?.preSavedCard?.map((cardData,index) => {
                return (
                    <div key={`card_${index}`}>
                    <AtmCard cardData={cardData}/>
                    <p className="text-end l-sb red-color mt-3 cursor-pointer" onClick={()=>handleDelete(cardData.ACardDetailsId)}><MdDeleteForever size={24}/> Delete this card</p>
                    </div>
                )
            })}

            {props?.preSavedCard?.length == 0 && (
                <p className="text-center mt-4">No card added yet.</p>
            )}             
        </div>
    </>
  )
}

export default PayCard