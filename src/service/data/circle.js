import { ref } from 'vue'
import axios from 'axios'
import useSwal from '../swal'
import { useRoute, useRouter } from 'vue-router'

export default function useCircle() {
    const { accepted, rejected, confirm } = useSwal()
    const router = useRouter()
    const circle = ref({})

    async function getCircleByUser() {
        try {
            const response = await axios.get('/circle')
            circle.value = response.data.data
        } catch (error) {
            
        }
    }

    async function createCircle(payload) {
        try {
            console.log(payload)
            await axios.post('/circle', payload)
            accepted('Sirkel berhasil dibikin')
            router.back()
        } catch (error) {
            rejected('Sirkel gagal dibikin')
        }
    } 

    return {
        getCircleByUser,
        circle,
        createCircle
    }
}