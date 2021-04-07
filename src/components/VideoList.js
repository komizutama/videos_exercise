import React from 'react';
import { List } from 'semantic-ui-react'

import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem video={video} />;
    });
    return <List divided relaxed>{renderedList}</List>
};

export default VideoList;