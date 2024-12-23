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

    return {
        registration
    }
}