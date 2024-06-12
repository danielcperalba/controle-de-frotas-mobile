import axios from "axios";

const api = axios.create({
    baseURL: "https://cca5-177-71-66-15.ngrok-free.app/",
});

export default api;