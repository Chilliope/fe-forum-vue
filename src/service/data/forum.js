import axios from '../axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default function useForum() {
    const forum = ref([])
    const totalPage = ref([])
    const route = useRoute()

    async function getForum() {
        try {
            const response = await axios.get(`/forum?page=${route.params.page}`)
            totalPage.value = response.data.pagination.totalPage
            forum.value = response.data.data
        } catch (error) {
            
        }
    }

    return {
        getForum,
        forum,
        totalPage
    }
}