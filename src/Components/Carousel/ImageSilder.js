import { useState ,useEffect} from "react";
import { silderData } from "./silderData";
import {FaAngleLeft,FaAngleRight} from "react-icons/fa" 
import "../../styles/carousel.css"
const ImageSilder = ({sildes}) => {
   const [current,SetCurrent]=useState(0)
   const length=sildes.length

   const nextSlide=()=>{
    SetCurrent(current===length-1 ? 0 : current+1)
   }

   const prevSlide=()=>{
    SetCurrent(current===0? length-1: current-1)
   }

   useEffect(() => {
    const timer = setTimeout(() => {
        SetCurrent(current===length-1 ? 0 : current+1)
    }, 3000);
    return ()=>{clearTimeout(timer)}
  });

   if(!Array.isArray(sildes) || sildes.length<=0){
    return null
   }
    return ( 
        <section className="slider-img">
            <FaAngleLeft className="left-arrow" onClick={prevSlide}/>
            <FaAngleRight className="right-arrow" onClick={nextSlide}/>
            {silderData.map((silde,index)=>{
            return(
                <div key={index}> 
                {index === current && (<img src={silde.Image}  className="image" />)}
                </div>
            )
          })}
        </section>
     );
}
 
export default ImageSilder;