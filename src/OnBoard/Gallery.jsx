import React, {useState} from 'react';
import { RxCross1 } from "react-icons/rx";
import Img2 from '../assets/images/img2.png';
import Img3 from '../assets/images/img3.png';
import Img4 from '../assets/images/img4.png';
import Img5 from '../assets/images/img5.png';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

const Gallery = (props) => {

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc); 
        setModel(true);
    } 

  return (
    <>
        <div className={model? "model open" : "model"}>
            <img src={tempimgSrc} alt="" />
            <RxCross1 onClick={() => setModel(false)} />
        </div>
        <div className="gallery">
            {props.data.selLtMedia.filter((photo) => { return !photo.LTMediaLogName.endsWith('.mp4');}).map((item, index)=>{
                return(
                    <div key={`img_gallary_${index}`} className="pics" key={index} onClick={()=> getImg(item.LTMediaURL)}>
                        <img src={item.LTMediaURL} className="w-100" alt="img" />
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Gallery