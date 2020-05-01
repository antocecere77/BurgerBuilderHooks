import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-3238d.firebaseio.com/'
});

export default instance;