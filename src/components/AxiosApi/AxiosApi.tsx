import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'https://fal-tatyana-home-work-66-default-rtdb.europe-west1.firebasedatabase.app'
})

export default axiosApi
