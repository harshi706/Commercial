// import React from 'react'
// import apple from './components/apple.jpg'

// const Last = () => {
//   return (
//     <div>
//       <div className='relative flex justify-center items-center mr-10 ml-10'>
//       <div className=' text-black z-20 font-bold text-4xl absolute mb-36'>Why Ayatrio is the best<div className='ml-10'>place to buy home</div><div className='ml-32'>farnising</div></div>
//       <div className='text-black z-20 absolute text-lg mt-28'>You can choose a payment option that works for<div className='ml-1'>you, pay less with a trade-in, connect your new</div><div className='ml-2'>iPhone to your carrier, and get set up quickly. </div><div className='ml-3'>You can also chat with a Specialist anytime.</div></div>
//        <div className='text-sky-600 z-20 absolute text-lg' style={{marginTop:'22%'}}><a href='#'>Learn more &gt;</a></div>    
//            <img src={apple} alt="" className="h-100 w-100" />
//            </div>

// <div className='bg-zinc-100 h-40 border border-black ml-10 mr-12'></div>

//     </div>
//   )
// }

// export default Last
import React, { useState } from 'react';
import  room from './room.jpg'

const Last = () => {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getContent = () => {
    switch (activeTab) {
      case 'all':
        return <div>
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover ' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover ' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover ' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover ' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover ' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover ' src={room} alt="Room" />
  </div>
</div>
</div>;
      case 'bedroom':
        return
        <div>
        <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
    <div class="row-span-2 overflow-hidden">
      <img className='h-full w-full object-cover' src={room} alt="Room" />
    </div>
    <div class="overflow-hidden">
      <img className='h-full w-full object-cover' src={room} alt="Room" />
    </div>
    <div class="row-span-2 overflow-hidden">
      <img className='h-full w-full object-cover' src={room} alt="Room" />
    </div>
    <div class="row-span-2 overflow-hidden">
      <img className='h-full w-full object-cover' src={room} alt="Room" />
    </div>
    <div class="overflow-hidden">
      <img className='h-full w-full object-cover' src={room} alt="Room" />
    </div>
    <div class="bg-teal-100 overflow-hidden">
      <img className='h-full w-full object-cover' src={room} alt="Room" />
    </div>
  </div>
  </div>
        ;
      case 'livingroom':
        return <div>
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="bg-teal-100 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
</div>
</div>;
        case 'kitchen':
          return <div>
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="bg-teal-100 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
</div>
</div>;
          case 'workspace':
            return <div >
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="bg-teal-100 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
</div>
</div>;
            case 'outdoor':
              return <div >
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="bg-teal-100 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
</div>
</div>;
              case 'bathroom':
                return <div >
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="bg-teal-100 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
</div>
</div>;
                case 'babychildren':
                  return <div >
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="bg-teal-100 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
</div>
</div>;
                  case 'dining':
                    return <div >
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="bg-teal-100 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
</div>
</div>;
                    case 'hallway':
                      return <div>
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="bg-teal-100 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
</div>
</div>;
                      case 'laundry':
                        return <div>
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="bg-teal-100 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
</div>
</div>;
                        case 'accessories':
                          return <div>
      <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="row-span-2 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
  <div class="bg-teal-100 overflow-hidden">
    <img className='h-full w-full object-cover' src={room} alt="Room" />
  </div>
</div>
</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className='mt-8 ml-10 cursor-pointer'>
        <div className='bloc-tabs flex' style={{marginBottom:'-64px'}}>
          <div className={`${activeTab === 'all' ? 'tabs active-tabs mr-2 border border-black rounded-full w-10 pl-2 pr-2 pt-1 pb-1 bg-gray-100' : 'tabs mr-2 border w-10 border-white rounded-full pl-2 pr-2 pt-1 pb-1 bg-gray-100'}`} onClick={() => handleTabClick('all')}>
            All
          </div>
          <div className={activeTab === 'bedroom' ? 'tabs active-tabs border border-black rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2' : 'tabs border border-white rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2'} onClick={() => handleTabClick('bedroom')}>
            Bedroom
          </div>
          <div className={activeTab === 'livingroom' ? 'tabs active-tabs border border-black rounded-full w-28 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2' : 'tabs  border border-white rounded-full w-28 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2'} onClick={() => handleTabClick('livingroom')}>
            Living Room
          </div>
          <div className={activeTab === 'kitchen' ? 'tabs active-tabs border border-black rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2' : 'tabs border border-white rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2'} onClick={() => handleTabClick('kitchen')}>
            Kitchen
          </div>
          <div className={activeTab === 'workspace' ? 'tabs active-tabs border border-black rounded-full w-28 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2' : 'tabs  border border-white rounded-full w-28 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2'} onClick={() => handleTabClick('workspace')}>
            Workspace
          </div>
          <div className={activeTab === 'outdoor' ? 'tabs active-tabs border border-black rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2' : 'tabs border border-white rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2'} onClick={() => handleTabClick('outdoor')}>
            Outdoor
          </div>
          <div className={activeTab === 'bathroom' ? 'tabs active-tabs border border-black rounded-full w-24 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2' : 'tabs  border border-white rounded-full w-24 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2'} onClick={() => handleTabClick('bathroom')}>
            Bathroom
          </div>
          <div className={activeTab === 'babychildren' ? 'tabs active-tabs border border-black rounded-full w-44 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2' : 'tabs border border-white rounded-full w-44 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2'} onClick={() => handleTabClick('babychildren')}>
            Baby & children room
          </div>
          <div className={activeTab === 'dining' ? 'tabs active-tabs border border-black rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2' : 'tabs border border-white rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2'} onClick={() => handleTabClick('dining')}>
            Dining
          </div>
          <div className={activeTab === 'hallway' ? 'tabs active-tabs border border-black rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2' : 'tabs border border-white rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2'} onClick={() => handleTabClick('hallway')}>
            Hallway
          </div>
          <div className={activeTab === 'laundry' ? 'tabs active-tabs border border-black rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2' : 'tabs border border-white rounded-full w-20 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2'} onClick={() => handleTabClick('laundry')}>
            Laundry
          </div>
          <div className={activeTab === 'accessories' ? 'tabs active-tabs border border-black rounded-full w-24 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2' : 'tabs  border border-white rounded-full w-24 pl-2 pr-2 pt-1 pb-1 bg-gray-100  mr-2'} onClick={() => handleTabClick('accessories')}>
          Accessories
          </div>
        </div>

        <div className='content-tabs'>
          {getContent()}
        </div>
      </div>
    </>
  );
};

export default Last;

