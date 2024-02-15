
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-violet-700 py-4'>
        <span className='text-xl font-bold text-white px-10'>Mytask</span>
        <ul className='flex gap-6 text-white cursor-pointer px-10'>
            <li className='hover:font-bold transition-all hover:underline'>Home</li>
            <li className='hover:font-bold transition-all hover:underline'>New Task</li>
           
        </ul>
    </nav>
  )
}

export default Navbar