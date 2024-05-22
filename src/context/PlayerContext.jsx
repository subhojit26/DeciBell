import { createContext, useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import {songsData} from '../assets/assets'


export const PlayerContext = createContext()
const PlayerContextProvider = (props)=>{
    const audioRef=useRef()
    const seekBg=useRef()
    const seekBar=useRef()
    const [track,setTrack]=useState(songsData[0])
    const [playStatus,setPlayStatus]=useState(false)
    const [time,setTime]=useState({
        currentTime:{
            minutes:0,
            seconds:0
        },
        totalTime:{
            minutes:0,
            seconds:0
        }
        }
    )

    const play=()=>{
        audioRef.current.play()
        setPlayStatus(true)
    }
    const pause=()=>{
        audioRef.current.pause()
        setPlayStatus(false)
    }

    const playWithId=async(id)=>{
        await setTrack(songsData[id])
        await audioRef.current.play()
        await setPlayStatus(true)
    }

    const previous= async()=>{
        if(track.id>0){
            await setTrack(songsData[track.id-1])
            await audioRef.current.play()
            await setPlayStatus(true)
        }
    }

    const next= async()=>{
        if(track.id<songsData.length-1){
            await setTrack(songsData[track.id+1])
            await audioRef.current.play()
            await setPlayStatus(true)
        }
    }

    const seekSong = (e)=>{
        let seekWidth=seekBg.current.offsetWidth
        let seekX=e.nativeEvent.offsetX
        audioRef.current.currentTime=(seekX/seekWidth)*audioRef.current.duration
    }

    useEffect(()=>{
        setTimeout(()=>{
            
            audioRef.current.ontimeupdate=()=>{
                seekBar.current.style.width=(Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+'%'
                setTime({
                    currentTime:{
                        minutes:Math.floor(audioRef.current.currentTime/60),
                        seconds:Math.floor(audioRef.current.currentTime%60)
                    },
                    totalTime:{
                        minutes:Math.floor(audioRef.current.duration/60),
                        seconds:Math.floor(audioRef.current.duration%60)
                    }
                })
            }
        },1000)
    },[audioRef])

    const contextValue={
        audioRef,
        seekBg,
        seekBar,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        previous,
        next,
        seekSong
    }
    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}
export default PlayerContextProvider