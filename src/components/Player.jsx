import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {
    const {track,seekBar,seekBg,playStatus,play,pause,time,previous,next,seekSong}=useContext(PlayerContext)
  return (
    <div className='h-[10%] bg-black flex items-center justify-between text-white px-4'>
        <div className='hidden lg:flex items-center gap-4'>
            <img src={track.image} alt='song_image' className='w-12 h-12 rounded' />
            <div>
                <h1 className='font-bold text-md'>{track.name}</h1>
                <p className='text-xs'>{track.desc.slice(0,12)}</p>
            </div>
        </div>
        <div className='flex flex-col gap-1 items-center m-auto'>
            <div className='flex gap-4'>
                <img src={assets.shuffle_icon} alt='shuffle_icon' className='w-4' />
                <img onClick={previous} src={assets.prev_icon} alt='prev_icon' className='w-4' />
                {!playStatus?<img onClick={play} src={assets.play_icon} alt='play_icon' className='w-4' />:<img onClick={pause} src={assets.pause_icon} alt='pause_icon' className='w-4' />}
                <img onClick={next} src={assets.next_icon} alt='next_icon' className='w-4' />
                <img src={assets.loop_icon} alt='loop_icon' className='w-4' />
            </div>
            <div className='flex items-center gap-5'>
                <p>
                    {time.currentTime.minutes}:{time.currentTime.seconds}
                </p>
                <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-500px bg-gray-300 rounded-full cursor-pointer'>
                    <hr ref={seekBar} className='h-1 bg-green-800 border-none w-0 rounded-full' />
                </div>
                <p>
                    {time.totalTime.minutes}:{time.totalTime.seconds}
                </p>
            </div>
        </div>
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <img src={assets.plays_icon} alt='volume_icon' className='w-4' />
            <img src={assets.mic_icon} alt='volume_icon' className='w-4' />
            <img src={assets.queue_icon} alt='volume_icon' className='w-4' />
            <img src={assets.speaker_icon} alt='volume_icon' className='w-4' />
            <img src={assets.volume_icon} alt='volume_icon' className='w-4' />
            <div className='w-20 bg-slate-50 h-1 rounded'></div>
            <img src={assets.mini_player_icon} alt='volume_icon' className='w-4' />
            <img src={assets.zoom_icon} alt='volume_icon' className='w-4' />
        </div>
    </div>
  )
}

export default Player