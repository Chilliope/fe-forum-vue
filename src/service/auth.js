import { ref } from 'vue'
import axios from './axios'
import useSwal from './swal'
import { useRouter } from 'vue-router'

export default function useAuth() {
    const router = useRouter()
    const { accepted, rejected, confirm } = useSwal()
    const user = ref({})

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
            router.push('/beranda/forum/1')
        } catch (error) {
            rejected('Kayaknya username atau password lu salah deh')
        }
    }

    async function logout() {
        try {
            removeToken()
            router.push('/masuk')
        } catch (error) {
            rejected('Gagal Logout, coba lagi')
        }
    }

    async function authUser() {
        try {
            const response = await axios.post('/authUser')
            user.value = response.data.user
        } catch (error) {
            removeToken()
            router.push('/masuk')
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
        login,
        authUser,
        user,
        logout
    }
}