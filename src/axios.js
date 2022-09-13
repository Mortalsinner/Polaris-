import axios from "axios";


const instance = axios.create({
    baseURL: "https://api.nasa.gov/planetary/apod?api_key",
});

export default instance;