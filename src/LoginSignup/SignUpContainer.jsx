import React from 'react';
import Sitelogo from '../assets/images/logo.png';
import subtraction from '../assets/images/subtraction.png';



const SignUpContainer = (props) => {
  const { children } = props;
  return (
    <>
      <div className="container-fluid p-0 sign-login-form-sec">
        <div className='row g-0'>
          <div className='col-lg-6 col-sm-6 sign-red-sec'>
            <div className='inner-sign-red-sec vh-100 d-flex align-items-center justify-content-center'>
              <div>
              <div className='livetune-logo text-center'><img src={Sitelogo} alt="" /></div>
              <div className='livetune-bg-img text-center'><img src={subtraction} alt="" /></div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-sm-6 postion-r'>
          { children }
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpContainer