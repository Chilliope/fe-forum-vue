<template>
    <div class="flex">
        <SidebarComponent></SidebarComponent>
        <NavbarComponent></NavbarComponent>
    </div>
    <div class="lg:pl-96 pl-0">
        <div class="px-4 py-2">
            <form action="" class="border px-4 py-2 rounded-lg flex flex-col">
                <div class="flex gap-2 border-b pb-4">
                    <div class="w-16">
                        <img :src="'default.jpg'" alt="" class="w-12 h-12 rounded-full">
                    </div>
                    <input type="text" class="w-full rounded-lg px-4 outline-none" placeholder="Bikin forum bre...">
                </div>
                <div class="flex justify-end">
                    <button class="bg-black hover:bg-slate-700 hover:duration-150 text-white rounded-lg px-6 py-2 mt-4">Post</button>
                </div>
            </form>
    
            <hr class="my-6 lg:my-8">
    
            <div class="flex flex-col gap-4">
                <div class="border w-full h-max rounded-lg px-4 py-2" v-for="forum in forum" :key="forum.id">
                    <div class="flex">
                        <div class="w-16">
                            <img :src="'default.jpg'" alt="" class="w-12 h-12 rounded-full">
                        </div>
                        <div class="flex flex-col">
                            <span>Erlang Andriyanputra</span>
                            <span class="text-slate-500 text-sm">@chilliope</span>
                        </div>
                    </div>
                    <div class="mt-4">
                        {{ forum.title }}
                    </div>
                    <hr class="my-4 lg:my-6">
                    <div class="flex justify-between">
                        <div class="flex gap-4">
                            <router-link to="" class="text-slate-500 border px-2 py-2 rounded-lg"><i class="fa-regular fa-comments"></i> 1</router-link>
                            <router-link to="" class="text-slate-500 border px-4 py-2 rounded-lg"><i class="fa-regular fa-share-from-square"></i></router-link>
                        </div>
                        <button class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 hover:duration-150"><i class="fa-solid fa-bullhorn"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavbarComponent from '../components/NavbarComponent.vue'
import SidebarComponent from '../components/SidebarComponent.vue'
import { onMounted } from 'vue'
import useForum from '../service/data/forum';

const { forum, getForum } = useForum()

onMounted(() => {
    getForum()
})
</script>

