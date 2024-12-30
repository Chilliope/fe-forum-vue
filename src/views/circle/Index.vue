<template>
    <div class="px-4 py-2">
        <div v-if="user.circle_id == null" class="border w-full h-max rounded-lg flex flex-col">
            <div class="px-4 py-2">
                <span class="border-b w-full flex pb-4 text-slate-500 text-lg lg:text-xl">Loe gapunya sirkel bro :(</span>
            </div>
            <div class="flex justify-end px-6 py-4">
                <router-link to="/tambah-sirkel" class="bg-black text-white px-6 py-2 rounded-lg hover:bg-slate-700 hover:duration-150">Bikin Sirkel</router-link>
            </div>
        </div>
        <div v-else class="border w-full h-max rounded-lg flex flex-col">
            <div class="px-4 py-2 flex items-center gap-8">
                <img :src="'/storage/circle_image/' + circle.circle_image" :alt="circle.circle_name" class="w-12 h-12 lg:w-20 lg:h-20 rounded-full">
                <span class="border-b w-full flex pb-4 font-medium text-slate-700 text-lg lg:text-xl">{{ circle.circle_name }}</span>
            </div>
            <div class="flex justify-end px-6 py-4">
                <button class="bg-black text-white px-6 py-2 rounded-lg hover:bg-slate-700 hover:duration-150">Invite Orang</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import useAuth from '../../service/auth'
import useCircle from '../../service/data/circle'

const { authUser, user } = useAuth()
const { getCircleByUser, circle } = useCircle()

onMounted(() => {
    authUser()
    getCircleByUser()
})
</script>