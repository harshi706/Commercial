import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Last = () => {
  const [index, setIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const text = [
    "dsadasdorem ipsum dolor sit amet, consectetur adipissit amet, consect eiusmod tempor incididunt ut labore et dolore magnasit amet, consect eiusmod tempor incididunt ut labore et dolore magnacing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    "orem ipsudolor sit amet, consect eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim v dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisc dolor sit amet, consectetur adipisciieniam,",
    "lorem ipsum dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  ];

  const images = [
    [
      "https://images.unsplash.com/photo-1701293773241-de1a7bff8e3d?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1701293773299-423854fabb0a?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1701295463149-e8ab9a5acc71?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    [
      "https://images.unsplash.com/photo-1701293773241-de1a7bff8e3d?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1701293773299-423854fabb0a?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1701295463149-e8ab9a5acc71?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    [
      "https://images.unsplash.com/photo-1701293773241-de1a7bff8e3d?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1701293773299-423854fabb0a?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1701295463149-e8ab9a5acc71?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  ];

  const Heading = ["Trending Choices", "Trending Choices", "Trending Choices"];

  const toggleIndex = (clickedIndex) => {
    setIndex((prevIndex) => (prevIndex === clickedIndex ? -1 : prevIndex === -1 ? clickedIndex : -1));
    setCarouselIndex(0);
  };

  const handleCarouselClick = (increment) => {
    setCarouselIndex((prevIndex) => (prevIndex + increment + images[index].length) % images[index].length);
  };

  const renderImages = () => {
    if (index === -1) {
      return (
        <img
          src={images[0][0]}
          alt=""
          className={`rounded-[50px] w-[80%] h-[72%]`}
        />
      );
    }

    return images[index].map((src, imgIdx) => (
      <img
        key={imgIdx}
        src={src}
        alt=""
        className={`rounded-[50px] w-[80%] h-[72%] ${imgIdx === carouselIndex ? '' : 'hidden'}`}
      />
    ));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (index !== -1) {
        setCarouselIndex((prevIndex) => (prevIndex + 1) % images[index].length);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [index, images]);

  return (
    <>
      <div className="main w-full h-100 bg-gray-100 rounded-[50px] flex p-2">
        <div className="left text-container flex flex-col items-center justify-center w-1/2 h-full pt-5">
        <div className='text-3xl font-bold mb-2'>Trending adfsdd fjddf dffg <br/>fgdjd vfvdnd</div>
        <div className='text-md font-bold mb-2'>Trending choices description fddg fjd rfhnkf lorem </div>

          {Heading.map((value, idx) => (
            <div key={idx} className='mb-7'>
              {idx === 1 && (
                <>
                  <div className="line-horizontal dark-black-line h-1 w-full bg-gray-300" />
                  <div onClick={() => toggleIndex(idx)} className='flex items-center justify-between'>
                    <h1 className="text-2xl my-4 font-bold text-left cursor-pointer">{value}</h1>
                    {index === idx ? <FaChevronUp className='text-2xl my-4 font-sans text-gray-500 text-left cursor-pointer' /> : <FaChevronDown className='text-2xl my-4 text-gray-500 text-left cursor-pointer' />}
                  </div>
                </>
              )}
              {idx !== 1 && (
                <div onClick={() => toggleIndex(idx)} className='flex items-center justify-between'>
                  <h1 className="text-2xl mb-2 font-bold text-left cursor-pointer">{value}</h1>
                  {index === idx ? <FaChevronUp className='text-2xl my-4 text-gray-500 text-left cursor-pointer' /> : <FaChevronDown className='text-2xl my-4 text-gray-500 text-left cursor-pointer' />}
                </div>
              )}
              <div className='w-[23rem]'>
                <p className={`${idx + 1}text`}>{index === idx ? text[idx] : ""}</p>
                {idx === 1 && <hr className="line-horizontal dark-black-line h-1 w-full bg-gray-300" />}
              </div>
            </div>
          ))}
        </div>
        <div className="right image-container flex w-1/2 h-full p-1">
          <div className="flex w-full h-full justify-center items-center relative">
            {renderImages()}
            <div className='absolute top-0 h-full flex items-center cursor-pointer' onClick={() => handleCarouselClick(-1)}>
              <div className='text-3xl font-bold text-white'></div>
            </div>
            <div className='absolute top-0 right-0 h-full flex items-center cursor-pointer' onClick={() => handleCarouselClick(1)}>
              <div className='text-3xl font-bold text-white'></div>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
    </>
  );
};

export default Last;
