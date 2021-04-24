import React from 'react';
import { List } from 'semantic-ui-react';

import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <List.Item onClick={ ()=> onVideoSelect(video) } className="video-item">
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
            <List.Content>
                <List.Header >{video.snippet.title}</List.Header>
            </List.Content>
        </ List.Item>
        );
};

export default VideoItem;