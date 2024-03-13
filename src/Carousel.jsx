// import React, { useState, useEffect } from 'react';

// const Carousel = () => {
//   const slides = [
//     "https://images.unsplash.com/photo-1701293773241-de1a7bff8e3d?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1701293773299-423854fabb0a?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1701295463149-e8ab9a5acc71?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       nextSlide();
//     }, 1500);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [currentSlide]);

//   return (
//     <div className="relative ml-40 mt-8 mb-10 w-80 rounded-xl">
//       <div className="flex">
//         <button className="absolute inset-y-0 left-0 flex items-center justify-center w-8 bg-opacity-50 text-white" onClick={prevSlide}>
//           &lt;
//         </button>
//         <div className="overflow-hidden w-full">
//           <img src={slides[currentSlide]} alt={`Slide ${currentSlide}`} className="w-full h-full object-cover rounded-xl" />
//         </div>
//         <button className="absolute inset-y-0 right-0 flex items-center justify-center w-8 bg-opacity-50 text-white" onClick={nextSlide}>
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;


// Carousel.jsx
import React, { useState } from "react";
import CardList from "./CardList";
import database from "./database";
import {CiDeliveryTruck} from 'react-icons/ci'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function Carousel() {
  
  const [slide, setSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setSlide((slide) => (slide === database.length - 1 ? 0 : slide + 1));
  };

  const prevSlide = () => {
    setSlide((slide) => (slide === 0 ? database.length - 1 : slide - 1));
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && slide !== 0 && (
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="arrow arrow-left"
        />
      )}
      <div className={isHovered ? "slides-container" : ""}>
        {database.map((item, idx) => (
          <div key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}>
            {slide === idx && (
              <CardList
                id={item.id}
                title={item.title}
                subtitle={item.subtitle}
                content={<CiDeliveryTruck size={52} />}
              />
            )}
          </div>
        ))}
      </div>
      {isHovered && (
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="arrow arrow-right"
        />
      )}
      <span className="indicators">
        {database.map((_, idx) => (
          <button
            key={idx}
            className={slide === idx ? "indicator" : "indicator indicator-inactive"}
            onClick={() => setSlide(idx)}
          ></button>
        ))}
      </span>
    </div>
  );
}

export default Carousel;

