import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({ video }) => {
  return (
    <li>
        <Link to={`/video/${video.id.videoId}`}>
            <img src={video.snippet.thumbnails.medium.url} alt="youtube" />
        </Link>
        <Link to={`/video/${video.id.videoId}`}>
            <span>{video.snippet.title}</span>
        </Link>
    </li>
  )
}

export default VideoCard
