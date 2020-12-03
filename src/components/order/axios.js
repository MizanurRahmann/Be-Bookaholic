import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/br-bookaholic/us-central1/api", // api url
});

export default instance;
