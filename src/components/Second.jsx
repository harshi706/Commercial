import React from 'react'
import Data from './Data'
import Arrive from './Arrive'
import Footer from './Footer'
import Top from './Top'

const Second = () => {
  return (
    <div>
    <Top/>
    <div className='grid grid-col-2'>
      <div className='col-span-1 mx-32 mt-32'>
      <Arrive/>
      </div>
      </div>
    </div>
  )
}

export default Second
