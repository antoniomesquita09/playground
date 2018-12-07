import axios from 'axios';

const KEY = "AIzaSyDaQti1yMSxsoJqFIDdDVHc7SpQIT0HLW0";

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});