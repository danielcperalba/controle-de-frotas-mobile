import axios from "axios";

const api = axios.create({
    baseURL: "https://c1cc-177-71-67-7.ngrok-free.app/",
});

export default api;