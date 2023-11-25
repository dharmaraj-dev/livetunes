import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import Sitelogo from './assets/images/wlecome-img.png';
import subtraction from './assets/images/subtraction.png';

const TermsConditions = () => {
	const navigate = useNavigate();


  return (
	 <section id="terms-of-service">
        <div className="logo_img_terms">
            <img src={Sitelogo} />
        </div>
        <div className="card">
        	<p onClick={()=> {navigate('/welcome')}} className="go_back_button"> <BsArrowLeft /> Go back</p>
            <h1 className="primary-heading">Terms & Agreement</h1>
            <p className="paragraph">
                By signing up or logging in to <span className="bold"><a href="https://livetunes.ai" target="_blank">LiveTunes.ai</a></span>, you agree to the following terms and conditions:
                <br /><br /><br />
                1) <span className="bold">User Responsibilities:</span> As a registered user, you are responsible for maintaining the confidentiality of your account information, including your password. Any activity occurring under your account is your sole responsibility.
                <br /><br /><br />
                2) <span className="bold">Age Requirement:</span> Users must be at least 18 years old to sign up and use the services provided by <a href="https://livetunes.ai" target="_blank">LiveTunes.ai</a>. By signing up, you confirm that you meet this age requirement.
                <br /><br /><br />
                3) <span className="bold">Booking and Payments:</span> <a href="https://livetunes.ai" target="_blank">LiveTunes.ai</a> allows users to book music artists for live performances at various events. Payments for bookings are processed securely through the platform. Users are responsible for providing accurate payment information and ensuring sufficient funds are available.
                <br /><br /><br />
                4) <span className="bold">Refund and Cancellation:</span> Users may cancel bookings according to the cancellation policy outlined by <a href="https://livetunes.ai" target="_blank">LiveTunes.ai</a>. Refunds, if applicable, will be processed in accordance with the stated policy.
                <br /><br /><br />
                5) <span className="bold">Artist Profiles:</span> <a href="https://livetunes.ai" target="_blank">LiveTunes.ai</a> provides profiles of music artists, including their genres, ratings, and samples of their work. Users are encouraged to review these profiles carefully before booking to ensure compatibility with their event.
                <br /><br /><br />
                6) <span className="bold">Verification Process:</span> For security and quality assurance, <a href="https://livetunes.ai" target="_blank">LiveTunes.ai</a> may require user verification. This process may include identity verification through Aadhar or passport and other checks to ensure a safe and trustworthy community.
                <br /><br /><br />
                7) <span className="bold">Data Security:</span> <a href="https://livetunes.ai" target="_blank">LiveTunes.ai</a> prioritizes the security of user data. Your personal information is safe and secure and will not be sold to third parties. Refer to our Privacy Policy for detailed information on data protection.
                <br /><br /><br />
                8) <span className="bold">Code of Conduct:</span> Users are expected to adhere to a code of conduct that promotes a positive and respectful community. Any violation of this code may result in the suspension or termination of the user's account.
                <br /><br /><br />
                9) <span className="bold">Privacy Policy:</span> <a href="https://livetunes.ai" target="_blank">LiveTunes.ai</a> respects user privacy. By using our services, you agree to the terms outlined in our Privacy Policy, detailing the collection, use, and protection of your personal information.
                <br /><br /><br />
                10) <span className="bold">Communication:</span> Users may receive notifications, updates, and promotional messages from <a href="https://livetunes.ai" target="_blank">LiveTunes.ai</a>. By signing up, you consent to receiving these communications, but you can manage your communication preferences in your account settings.
                <br /><br /><br />
                11) <span className="bold">Changes to Terms:</span> <a href="https://livetunes.ai" target="_blank">LiveTunes.ai</a> reserves the right to update these terms and conditions. Users will be notified of any significant changes, and continued use of the platform after such changes constitutes acceptance of the updated terms.
                <br /><br /><br />
                12) By signing up or logging in, you acknowledge that you have read, understood, and agree to abide by these terms and conditions outlined by <a href="https://livetunes.ai" target="_blank">LiveTunes.ai</a>.
                <br />
            </p>
        </div>
    </section>
  )
}

export default TermsConditions
