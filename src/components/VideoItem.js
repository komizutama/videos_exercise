import React from 'react';
import { List } from 'semantic-ui-react';

import './VideoItem.css';

const VideoItem = ({ video }) => {
    return (
        <List.Item className="video-item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} />
            <List.Content>
                <List.Header >{video.snippet.title}</List.Header>
            </List.Content>
        </ List.Item>
        );
};

export default VideoItem;