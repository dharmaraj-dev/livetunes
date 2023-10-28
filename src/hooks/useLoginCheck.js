import React, { useState, useEffect, useCallback } from "react";
import { Navigate, useNavigate  } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

const useLoginCheck = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const showLoginAlert = async () =>{
        MySwal.fire({
          title: '<strong>Not Logged In!!</strong>',
          icon: 'warning',
          html:
            'Please login to proceed further.',
          showDenyButton: true,
          confirmButtonText: 'Login',
          denyButtonText: `No`,
          showLoaderOnConfirm: false,
          allowOutsideClick: () => false
        }).then((result) => {
            if(result.isConfirmed) {
                navigate('/welcome')
            }
        })
    };
  return { showLoginAlert };


  // useEffect(() =>{
  //   console.log('loginStatus', loginStatus);
  //   if(!loginStatus){
  //      showLoginAlert()
  //   }
  // },[loginStatus])
};

export default useLoginCheck;

