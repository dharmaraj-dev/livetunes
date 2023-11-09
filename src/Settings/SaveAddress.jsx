import React, { useState} from 'react';
import Form from 'react-bootstrap/Form';
import { MdDeleteForever } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { deleteAddress } from "../redux/commonSlice";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

const SaveAddress = (props) => {
    const dispatch = useDispatch();
    const MySwal = withReactContent(Swal);

    const handleDelete=(addId)=>{
        MySwal.fire({
          title: '<strong>Deletting Address?</strong>',
          icon: 'warning',
          html: "Do you want to delete this address?",
          showDenyButton: true,
          confirmButtonText: 'Yes',
          denyButtonText: `No`,
          showLoaderOnConfirm: false,
          allowOutsideClick: () => false
        }).then((result) => {
            if(result.isConfirmed) {
                let dataToSend = {"AAddressProofId": addId}
                dispatch(deleteAddress(dataToSend))
            }
        })
        
    }
  return (
    <>
        {props?.preSavedAddress?.map((addData, index) => {
            return (
                <div key={`address_${index}`}>
                    <div className="address_pre_box">
                        <p><b>Address:</b> {addData.Address1}</p>
                        <p><b>State:</b> {addData.StateName}</p>
                        <p><b>City:</b> {addData.CityName}</p>
                        <p><b>Pincode:</b> {addData.PinCode}</p>
                    </div>
                    <p className="text-end l-sb red-color mt-3 cursor-pointer" onClick={()=>handleDelete(addData.AAddressProofId)}><MdDeleteForever size={24}/> Delete this address</p>
                </div>
            )
        })}
        {props?.preSavedAddress?.length == 0 && (
            <p className="text-center mt-4">No address added yet.</p>
        )}    
    </>
  )
}

export default SaveAddress