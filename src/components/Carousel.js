import React, { useEffect, useState } from "react";
import "./carousel.css";
import carousel4 from "./assets/carousel4.png"
import carousel5 from "./assets/carousel5.png"
import carousel6 from "./assets/carousel6.png"



const CarouselItem = () => {

const data=[carousel4,carousel5,carousel6]
const [currentIndex,SetCurrentIndex]=useState(0)

const carouselInfiniteScroll=()=>{
  if(currentIndex===data.length-1){
      return SetCurrentIndex(0)
  }
  return SetCurrentIndex(currentIndex+1)
}

useEffect(()=>{
  const interval =setInterval(()=>{carouselInfiniteScroll()},3000)
  // clean up function
  return()=> clearInterval(interval)
})

 useEffect(()=>{
    const interval =setInterval(()=>{carouselInfiniteScroll()},3000)
    // clean up function
    return()=> clearInterval(interval)
 })

  return (
    <>
      <div className="carousel-container">
        {data.map((item,index)=>{
          return<div className="carousel-item"
          style={{transform:`translate(-${currentIndex*100}%)`}}
          key={index}><img src={item} alt="bananer"/></div>
        })}
      </div>
    </>
  );
};

export default CarouselItem;
