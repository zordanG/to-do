import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8800/'
});

export default api