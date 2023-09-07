import React, {useState} from 'react';
import { RxCross1 } from "react-icons/rx";
import Img2 from '../assets/images/img2.png';
import Img3 from '../assets/images/img3.png';
import Img4 from '../assets/images/img4.png';
import Img5 from '../assets/images/img5.png';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

const Gallery = () => {
    const {artistInfo} = useSelector(state => state.user);
    let data1 = artistInfo.selLtMedia.filter((photo) => {
       return !photo.LTMediaLogName.endsWith('.mp4');
    });
    let data = data1.map((photo)=>{
        return {
            id:photo.LTMediaLogId,
            imgSrc: photo.LTMediaURL
        }
    });

    console.log(data);

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
            {data.map((item, index)=>{
                return(
                    <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                        <img src={item.imgSrc} className="w-100" alt="img" />
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Gallery