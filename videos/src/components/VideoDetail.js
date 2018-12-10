import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading...</div>;
    }

    const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;
    return (
        <div className="ui segment">
            <iframe title="video player" width="560" height="315" src={videoSrc}/>
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    );
}

export default VideoDetail;