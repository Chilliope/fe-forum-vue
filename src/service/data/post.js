import axios from '../axios'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import useSwal from '../swal'

export default function usePost() {
    const route = useRoute()
    const router = useRouter()
    const { accepted, rejected, confirm } = useSwal()
    const post = ref([]) 
    const forum = ref([])

    async function getAllPost() {
        try {
            const response = await axios.get(`/post/${route.params.forumId}`)
            post.value = response.data.data
            forum.value = response.data.forumData[0]
        } catch (error) {
            
        }    
    }

    async function createPost(payload) {
        try {
            const response = await axios.post(`/post/${route.params.forumId}`, payload)
            accepted('Balasan berhasil terkirim')
            getAllPost()
        } catch (error) {
            rejected('Balasan gagal terkirim')
        }
    }

    return {
        getAllPost,
        post,
        forum,
        createPost
    }
}