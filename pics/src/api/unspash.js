import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 98c5a40b3f21a453006b0560e12dd0930d3ed11914ed0bd82ecac9619e0ede9d'
    }
});