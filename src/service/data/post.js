import axios from '../axios'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import useSwal from '../swal'

export default function usePost() {
    const route = useRoute()
    const { accepted, rejected, confirm } = useSwal()
    const post = ref([]) 

    async function getAllPost() {
        try {
            const response = await axios.get(`/post/${route.params.forumId}`)
            console.log(response)
        } catch (error) {
            
        }    
    }

    return {
        getAllPost,
        post
    }
}