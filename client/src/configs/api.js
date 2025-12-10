import axios from 'axios'

// Prefer environment variable; fall back to existing Render backend
const baseURL = import.meta.env.VITE_API_URL || 'https://resume-backend-dv8n.onrender.com/api'

const api = axios.create({ baseURL })

export default api
