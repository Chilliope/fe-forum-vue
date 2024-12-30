import axios from 'axios'
import useSwal from '../swal'
import { useRoute, useRouter } from 'vue-router'

export default function useCircle() {
    const { accepted, rejected, confirm } = useSwal()
    const router = useRouter()

    async function createCircle(payload) {
        try {
            console.log(payload)
            const circle = await axios.post('/circle', payload)
            accepted('Sirkel berhasil dibikin')
            router.back()
        } catch (error) {
            rejected('Sirkel gagal dibikin')
        }
    } 

    return {
        createCircle
    }
}