import axios from 'axios';


const KEY='AIzaSyDWk_PgJgXJNjWeBm7U4tUQNXOugd3IyFI';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', 
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

