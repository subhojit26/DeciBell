import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({image,name,desc,id}) => {
  const navigate=useNavigate()
  return (
    <div onClick={()=>{navigate(`/album/${id}`)}} className='min-w-[100px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img src={image} alt='album_image' className=' rounded' />
        <p className='text-[14px] font-semibold'>{name}</p>
        <p className='text-[12px] text-gray-400'>{desc}</p>

    </div>
  )
}

export default AlbumItem