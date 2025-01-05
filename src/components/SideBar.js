import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'

const SideBar = () => {
  const isNavOpen = useSelector(store=>store.app.isMenuOpen);

  if(!isNavOpen) return null;
  return (
    <div className='w-48 text-center'>
      <ul className='font-bold shadow-lg'>
        <li className='p-2'>Home</li>
        <li className='p-2'>Shorts</li>
        <li className='p-2'>Subscription</li>
      </ul>
      <ul className='font-bold shadow-lg'>
        <li className='p-2'>History</li>
        <li className='p-2'>PlayList</li>
        <li className='p-2'>Your Videos</li>
      </ul>
      <ul className='font-bold shadow-lg'>
        <li className='p-2'>Home</li>
        <li className='p-2'>Shorts</li>
        <li className='p-2'>Subscription</li>
      </ul>
    </div>
  )
}

export default SideBar