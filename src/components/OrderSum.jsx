import React from 'react'
import shoe from './shoe.avif';

const OrderSum = () => {
  return (
    <div>
      <h3>Order Summary</h3>
      <br/>
      <div className='grid grid-cols-2'>
        <div className='col-span-1'>
        Subtotal <br/>
       Delivery/Shipping<br/>
      <hr/>
      <h3 className='mt-2 mb-2'>Total</h3>
      <hr/>
        </div>
        <div className='col-span-1'>
        <svg className="h-4 w-4 text-black inline"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M18 6h-11h3a4 4 0 0 1 0 8h-3l6 6" />  <line x1="7" y1="10" x2="18" y2="10" /></svg>
            9195.00<br/>
            <svg className="h-4 w-4 text-black inline"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M18 6h-11h3a4 4 0 0 1 0 8h-3l6 6" />  <line x1="7" y1="10" x2="18" y2="10" /></svg>
            1250.00<br/>
            <svg className="h-4 w-4 text-black inline mt-2 mb-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M18 6h-11h3a4 4 0 0 1 0 8h-3l6 6" />  <line x1="7" y1="10" x2="18" y2="10" /></svg>
            10445.00<br/>
        </div>
      </div>
      <h6 className='text-xs mt-2 mb-6'>(The total reflects the price of your order, including all duties and taxes)</h6>
     <h3 className='font-bold'>Arrives Thu, 13 Dec-Wed, 3 Jan</h3>
     <div className='grid grid-cols-2 gap-2'>
        <div className='col-span-1'>
            <img src={shoe} alt='shoes'/>
        </div>
        <div className='col-span-1'>
            <h5 className='text-sm'>Jordan Nu<br/>Retro 1 Low<br/>Men's Shoes</h5>
            <h6 className='text-sm text-gray-500'>Qty 1</h6>
            <h6 className='text-sm text-gray-500'>Size UK 7.5</h6>
            <h6 className='text-sm text-gray-500'>9195.00</h6>

        </div>
     </div>
    </div>
  )
}

export default OrderSum
