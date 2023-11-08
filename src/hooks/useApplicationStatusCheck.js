import React, { useState, useEffect, useCallback } from "react";
import { Navigate, useNavigate  } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

const useApplicationStatusCheck = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const showApplicationAlert = async (title, desc) =>{
        MySwal.fire({
          title: '<strong>'+title+'</strong>',
          icon: 'warning',
          html: desc,
          showDenyButton: false,
          confirmButtonText: 'Okey',
          denyButtonText: `No`,
          showLoaderOnConfirm: false,
          allowOutsideClick: () => false
        }).then((result) => {
            if(result.isConfirmed) {
                //navigate('/')
            }
        })
    };
  return { showApplicationAlert };
};

export default useApplicationStatusCheck;

