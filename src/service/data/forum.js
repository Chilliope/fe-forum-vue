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
            getForum()
        } catch (error) {
            rejected('Yahh forum gagal dibuat')
        }
    }

    async function editForum(forumId, payload) {
        try {
            const response = await axios.patch(`/forum/${forumId}`, payload)
            accepted('Forum berhasil diedit')
            getForum()
        } catch (error) {
            
        }
    }

    async function deleteForum(id) {
        const response = await confirm('lu yakin mau hapus forum ini?')
        
        if(response.isConfirmed) {
            try {
                const response = await axios.delete(`/forum/${id}`)
                accepted('Forum berhasil dihapus')
                getForum()
            } catch (error) {
                rejected('forum gagal dihapus nih bre, coba lagi')
            }
        }
    }

    return {
        getForum,
        forum,
        totalPage,
        createForum,
        deleteForum,
        editForum
    }
}