import axios from "axios";

const api = axios.create({
    baseURL: "https://dc0d-177-71-66-15.ngrok-free.app/",
});

export default api;