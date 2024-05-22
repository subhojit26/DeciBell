import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate=useNavigate();
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div onClick={navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img src={assets.home_icon} alt='home_icon' className='w-6 h-6' />
                <span className='font-bold'>Home</span>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img src={assets.search_icon} alt='search_icon' className='w-6 h-6' />
                <span>Search</span>
            </div>    
        </div>  
        <div className='bg-[#121212] h-[85%] rounded '>
            <div className='flex p-4 items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={assets.stack_icon} alt='stack_icon' className='w-8' />
                    <span className='font-semibold'>Your Library</span>
                </div>
                <div className='flex items-center gap-3'>
                    <img src={assets.arrow_icon} alt='arrow_icon' className='w-4' />
                    <img src={assets.plus_icon} alt='plus_icon' className='w-4' />
                </div>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                <h1>Create your first playlist</h1>
                <p className='font-light'>It&apos;s easy we will help you..</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-3'>
                <h1>Let&apos;s find some podcast to follow</h1>
                <p className='font-light'>We&apos;ll kepp you updated</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcast</button>
            </div>
        </div>      
    </div>
  )
}

export default Sidebar