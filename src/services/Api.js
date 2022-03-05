import axios from 'axios';

const api = axios.create({
    baseURL:"https://sombra-jade-player-manager-api.herokuapp.com",
});

export default api;