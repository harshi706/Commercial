import React from 'react'
import Learn from './Learn'
import Form from './Form'
import Top from './Top'

const First = () => {
  return (
    <div>
    <Top />
    <div className='grid grid-col-2'>
      <div className='col-span-1 mx-32 mt-32'>
      <Learn />
    <Form />
      </div>
    </div>
   
    </div>
  )
}

export default First
