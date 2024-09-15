import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
    // baseURL: 'https://connections-api.goit.global/docs/#/User/post_users_signup'
})

export const setToken = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`
} 

export const cleanToken = () => instance.defaults.headers.common.Authorization = ''