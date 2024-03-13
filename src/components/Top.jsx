import React from 'react'
import logo from './logo.jpg'

const Top = () => {
    return (
        <div>
           <nav className='mt-8 ml-8 flex justify-between items-center'>
    <ul className='flex items-center'>
        <li className='inline mr-4'><img src={logo} alt='logo' className='h-16 w-16' /></li>
    </ul>
    <ul className='flex items-center'>
    <li className='inline mr-4'>000 800 100 9538</li>
        <li className='inline mr-4'><svg className="h-6 w-6 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg></li>
        <li className='inline mr-4'><svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg></li>
        <li className='inline mr-6'><svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg></li>
    </ul>
</nav>

        </div>
    )
}

export default Top
