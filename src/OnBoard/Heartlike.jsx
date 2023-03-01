import React, { useState } from "react";
import Heart from "react-heart";

const Heartlike = () => {
    const [active, setActive] = useState(false)
  return (
    <>
        <div className="heart-like-sec">
            <Heart isActive={active} onClick={() => setActive(!active)} animationTrigger = "hover" animationScale = {1.1}/>
        </div>
    </>
  )
}

export default Heartlike