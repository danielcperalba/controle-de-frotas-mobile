import axios from "axios";

const api = axios.create({
    baseURL: "https://2ca7-177-71-67-7.ngrok-free.app/",
});

export default api;