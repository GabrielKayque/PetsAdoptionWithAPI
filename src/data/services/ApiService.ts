import axios from 'axios';

export const ApiService = axios.create({
    // baseURL: 'http://127.0.0.1:8000/api'
    baseURL: 'https://gabrielkayque.pythonanywhere.com/api'
})
