import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers :{
        Authorization :
        'Client-ID 5f1d25014c00ff28271d0ba6cc9fa45855d20fc6cbd94979447e3af76019c67c'
    }
});