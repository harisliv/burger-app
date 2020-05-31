import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-477dd.firebaseio.com/'
});

export default instance;