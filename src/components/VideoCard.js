import React from 'react'

const VideoCard = ({key,info}) => {
    const {snippet,statistics} = info;
    const {title,thumbnails,channelTitle} = snippet;
    const {likeCount,viewCount} = statistics;
  return (
    <div className='bg-slate-200 w-64 shadow-lg p-2 m-2 rounded-lg cursor-pointer'>
        <img className='rounded-lg' src={thumbnails.medium.url}/>
        <ul>
        <li className='font-bold text-sm'>{title}</li>
        <li className='text-xs'>{channelTitle}</li>
        <li className='text-xs'>LIKE Count : {likeCount}</li>
        <li className='text-xs'>VIEW Count : {viewCount}</li>
        </ul>
    </div>
  )
}

export const AdVideo = ({info}) =>{
  return(
    <div className='bordr border-red-600 bg-slate-900'>
      <VideoCard info={info}/>
    </div>
  )
}
export default VideoCard