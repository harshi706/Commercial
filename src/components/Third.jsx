import React from 'react'
import Promo from './Promo'
import Top from './Top'

const Third = () => {
  return (
    <div>
    <Top/>
    <div className='grid grid-col-2'>
      <div className='col-span-1 mx-32 mt-32'>
      <Promo/>
        </div>
      </div>
    </div>
  )
}

export default Third
