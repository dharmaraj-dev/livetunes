import React from 'react';
import {FacebookShareButton, WhatsappShareButton,LinkedinShareButton, LinkedinIcon, EmailShareButton, EmailIcon, WhatsappIcon, FacebookIcon } from "react-share";

const SocialIcon = () => {
    const shareUrl = window.location.href;
  return (
    <>  
        <ul className="share-btn-icon">
          <li>
            <WhatsappShareButton url={shareUrl}>
            <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
          </li>
          <li>
            <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
          </li>
          <li>
            <EmailShareButton url={shareUrl}>
            <EmailIcon size={32} round={true} />
            </EmailShareButton>
          </li>
          <li>
            <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
          </li>
        </ul>
    </>
  )
}

export default SocialIcon