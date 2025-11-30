import axios from 'axios'

const api = axios.create({
    baseURL: "https://resume-backend-dv8n.onrender.com"
})

export default api
