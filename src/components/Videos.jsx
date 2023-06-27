import React from 'react';
import { VideoCard } from './'

const Videos = ({ videos }) => {
    return (
        <div className='videos__inner'>
            <ul>
                {videos.map((video, index)=>(
                    <VideoCard key={index} video={video} />
                ))}
            </ul>
        </div>
    );
};

export default Videos;
