import React from 'react';

const VideoItem = ({video}) => {
    return (
        <div className="ui segment">
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.description}/>
            {video.snippet.title}
        </div>
    );
}

export default VideoItem;

//key={videos.id.videoId} thumb={videos.snippet.thumbnails.default.url}