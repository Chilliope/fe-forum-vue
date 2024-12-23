import axios from './axios'
import useSwal from './swal'
import { useRouter } from 'vue-router'

export default function useAuth() {
    const router = useRouter()
    const { accepted, rejected, confirm } = useSwal()

    async function registration(payload) {
        try {
            const response = await axios.post('/registration', payload)
            router.push('/masuk')        
        } catch (error) {
            rejected('Kayaknya username udah dipake orang deh')
        }
    }

    async function login(payload) {
        try {
            const response = await axios.post('/login', payload)
            setToken(response.data.data.token)
            router.push('/')
        } catch (error) {
            
        }
    }

    function setToken(token) {
        localStorage.setItem('auth_token', token)
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    }

    function removeToken() {
        localStorage.removeItem('auth_token')
        axios.defaults.headers.common.Authorization = `Bearer `
    }

    return {
        registration,
        login
    }
}