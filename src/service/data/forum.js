import axios from '../axios'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useSwal from '../swal'

export default function useForum() {
    const forum = ref([])
    const totalPage = ref([])
    const route = useRoute()
    const router = useRouter()
    const { accepted, rejected, confirm } = useSwal()

    async function getForum() {
        try {
            const response = await axios.get(`/forum?page=${route.params.page}`)
            totalPage.value = response.data.pagination.totalPage
            forum.value = response.data.data
        } catch (error) {
            
        }
    }

    async function createForum(payload) {
        try {
            const response = await axios.post('/forum', payload)
            accepted('Forum berhasil dibuat cuy')
            setInterval(() => {
                window.location.reload()
            }, 1500);
        } catch (error) {
            rejected('Yahh forum gagal dibuat')
        }
    }

    return {
        getForum,
        forum,
        totalPage,
        createForum
    }
}