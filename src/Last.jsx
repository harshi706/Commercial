import React from 'react'
import { MdOutlineCleanHands } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoKeyOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { IoPricetagOutline } from "react-icons/io5";

const Last = () => {
  const ratingsData = [
    { label: 'Overall rating', value: null, icon: null },
    { label: 'Cleanliness', value: '4.9', icon: <MdOutlineCleanHands  size={32} className='mt-5'/> },
    { label: 'Accuracy', value: '5.0', icon: <IoIosCheckmarkCircleOutline size={32} className='mt-5' /> },
    { label: 'Check-in', value: '4.9', icon: <IoKeyOutline size={32} className='mt-5' /> },
    { label: 'Communication', value: '4.9', icon: <FaRegMessage size={32} className='mt-5' /> },
    { label: 'Location', value: '4.0', icon: <GrMapLocation  size={32} className='mt-5'/> },
    { label: 'Value', value: '5.0', icon: <IoPricetagOutline  size={32} className='mt-5'/> },
  ];
  return (
<>
    <div>
    <div>
    <div className='flex items-center justify-center flex-row'>
        <img src="https://a0.muscache.com/pictures/ec500a26-609d-440f-b5d0-9e5f92afd478.jpg" 
            className='h-28'
            data-original-uri="https://a0.muscache.com/pictures/ec500a26-609d-440f-b5d0-9e5f92afd478.jpg" 
        />    
        <div className='text-[6rem] font-bold text-gray-700 pb-5'>5.0</div>
        <img className='h-28'
            src="https://a0.muscache.com/pictures/65bb2a6c-0bdf-42fc-8e1c-38cec04b2fa5.jpg" 
            data-original-uri="https://a0.muscache.com/pictures/65bb2a6c-0bdf-42fc-8e1c-38cec04b2fa5.jpg"
        />
    </div>
    <div className='flex justify-center items-center flex-col'>
        <div className='text-xl font-bold -mt-5'>Guest favourite</div>
        <div className='text-xl text-gray-500'>One of the most loved homes on Airbnb<br/>based on ratings, reviews, and reliability</div>
    </div>
    <div className='flex flex-row ml-12 mr-12 mt-12'>
      {ratingsData.map((item, index) => (
        <div key={index} className={`basis-1/7 flex-grow  ${index<ratingsData.length-1?'border-r border-gray-400 h-28 ':''}flex-col pl-6`}>
          {item.label}
          <div>{item.value}</div>
          <div>{item.icon}</div>
        </div>
      ))}
    </div>
    <div>
  <div className='border mb-2 border-black bg-black rounded-full w-32 h-1.5 flex flex-row items-center ml-4 justify-start'>
    <span className="-ml-3">5</span>
  </div>
  <div className='border mb-2 bg-gray-300 rounded-full w-32 h-1.5 flex flex-row items-center ml-4 justify-start'>
    <span className="-ml-2">4</span>
  </div>
  <div className='border mb-2 bg-gray-300 rounded-full w-32 h-1.5 flex flex-row items-center ml-4 justify-start'>
    <span className="ml-2">3</span>
  </div>
  <div className='border mb-2 bg-gray-300 rounded-full w-32 h-1.5 flex flex-row items-center ml-4 justify-start'>
    <span className="ml-2">2</span>
  </div>
  <div className='border mb-2 bg-gray-300 rounded-full w-32 h-1.5 flex flex-row items-center ml-4 justify-start'>
    <span className="ml-2">1</span>
  </div>
</div>

</div>

</div>
</>
  )
}

export default Last
