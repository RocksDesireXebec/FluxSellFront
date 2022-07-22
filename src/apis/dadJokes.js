/**
 * C'est ici que l'on va creer une instance axios
 */
import axios from "axios";
const BASE_URL = 'https://localhost:8000';

export default axios.create({  
    baseURL: BASE_URL,
    headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
    }
})