import React, {useState} from 'react';
import { RxCross1 } from "react-icons/rx";
import Img2 from '../assets/images/img2.png';
import Img3 from '../assets/images/img3.png';
import Img4 from '../assets/images/img4.png';
import Img5 from '../assets/images/img5.png';

const Gallery = () => {
    let data =[
       
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img3,
        },
        {
            id: 7,
            imgSrc: Img4,
        },
        {
            id: 8,
            imgSrc: Img5,
        }
    ]

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
                        <img src={item.imgSrc} className="w-100" />
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Gallery