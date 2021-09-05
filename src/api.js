import axios from 'axios'

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: '[API KEY]',
    },
})

export default request;