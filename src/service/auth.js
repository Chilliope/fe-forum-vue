import axios from './axios'
import { useRouter } from 'vue-router'

export default function useAuth() {
    const router = useRouter()

    async function registration(payload) {
        try {
            const response = await axios.post('/registration', payload)
            router.push('/masuk')        
        } catch (error) {
            alert('error bro')
        }
    }

    return {
        registration
    }
}