import axios, { AxiosInstance } from "axios"

const instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
});

instance.defaults.headers.post["Content-Type"] = "application/json"
instance.defaults.withCredentials = true

export default instance;