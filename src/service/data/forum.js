import axios from '../axios'
import { ref } from 'vue'

export default function useForum() {
    const forum = ref([])

    async function getForum() {
        try {
            const response = await axios.get('/forum')
            console.log(response.data)
            forum.value = response.data.data
        } catch (error) {
            
        }
    }

    return {
        getForum,
        forum
    }
}