import axios from 'axios';
import router from '../router';

// 创建 axios 实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 15000
})

// request 拦截器
service.interceptors.request.use(config => {
    // 此处可以放步骤
    // 如：请求携带 token
    // config.headers['Authorization'] = `Bearer${getToken()}`;
    return config;
}, err => {
    return Promise.reject(err)
});

// response 拦截器
service.interceptors.response.use(response => {
    // code 401 -> token 失效
    if (response.data && response.data.code === 401) {
        // 清除 token
        router.push({name : 'login'})
    }
    return response.data;
}, err => {
    return Promise.reject(err)
});

export default service;