<template>
    <nav class="bg-white text-slate-600 w-full h-16 border-b flex items-center justify-between px-4 lg:h-20">
        <router-link class="font-medium text-xl lg:hidden" to="/">Forum<span class="text-red-500">Aja</span></router-link>
        <div class="lg:hidden">
            <button 
                @click="toggleSidebarMobile" 
                class="text-2xl border px-4 py-2 rounded-lg">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
        <div class="w-full hidden lg:flex justify-end gap-4">
            <div>
                <img :src="'default.jpg'" alt="" class="w-14 h-14 object-cover rounded-full">
            </div>
            <div class="flex flex-col items-center justify-center">
                <span class="text-lg font-medium">Erlang Andriyanputra</span>
                <span>@chilliope</span>
            </div>
        </div>
    </nav>

    <!-- Overlay -->
    <div 
        v-show="isSidebarMobileVisible" 
        id="bg-overlay" 
        class="bg-black fixed w-full min-h-screen bg-opacity-50 z-40"
        @click="closeSidebarMobile">
    </div>

    <!-- Sidebar Mobile -->
    <aside 
        id="sidebarMobile" 
        class="bg-white w-2/3 h-screen fixed right-0 border-r z-50 flex flex-col justify-between transition-transform duration-300"
        :class="{ 'translate-x-0': isSidebarMobileVisible, 'translate-x-full': !isSidebarMobileVisible }">
        <div>
            <div class="h-20 flex items-center gap-4 px-4 border-b">
                <button @click="closeSidebarMobile" class="text-2xl"><i class="fa-solid fa-circle-xmark"></i></button>
                <router-link class="font-medium text-2xl text-center" to="/">Forum<span class="text-red-500">Aja</span></router-link>
            </div>
            <div class="px-4 py-6">
                <h5 class="text-xl text-slate-500 font-medium">Utama</h5>
                <ul class="mt-2 flex flex-col gap-3">
                    <li class="w-full flex" v-for="main in mains" :key="main.name">
                        <router-link :to="main.url" :class="['w-full py-2 text-slate-600 px-2 rounded-lg hover:bg-slate-100 hover:duration-150', isActive(main.name) ? 'bg-slate-800 text-white hover:bg-slate-700 hover:duration-150' : '']">
                            <i :class="main.icon + ' w-10'"></i> {{ main.name }}
                        </router-link>
                    </li>
                </ul>
                <h5 class="text-xl text-slate-500 font-medium mt-6">Dashboard</h5>
                <ul class="mt-2 flex flex-col gap-3">
                    <li class="w-full flex" v-for="dashboard in dashboards" :key="dashboard.name">
                        <router-link :to="dashboard.url" class="w-full py-2 text-slate-600 px-2 rounded-lg hover:bg-slate-100 hover:duration-150">
                            <i :class="dashboard.icon + ' w-10'"></i> {{ dashboard.name }}
                        </router-link>
                    </li>
                </ul>
                <h5 class="text-xl text-slate-500 font-medium mt-6">Pengaturan</h5>
                <ul class="mt-2 flex flex-col gap-3">
                    <li class="w-full flex" v-for="setting in settings" :key="setting.name">
                        <router-link :to="setting.url" class="w-full py-2 text-slate-600 px-2 rounded-lg hover:bg-slate-100 hover:duration-150">
                            <i :class="setting.icon + ' w-10'"></i> {{ setting.name }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="px-4 h-20 flex items-center justify-center">
            <form class="w-full">
                <button class="border border-red-500 w-full py-2 rounded-lg text-red-500 hover:bg-red-500 hover:text-white hover:duration-150">Keluar</button>
            </form>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// State untuk visibilitas sidebar mobile
const isSidebarMobileVisible = ref(false)

function toggleSidebarMobile() {
    isSidebarMobileVisible.value = !isSidebarMobileVisible.value
}

function closeSidebarMobile() {
    isSidebarMobileVisible.value = false
}

// Check apakah link aktif
function isActive(name) {
    return route.name === name
}

const mains = [
    { icon: 'fa-solid fa-house', name: 'Beranda', url: '/' },
    { icon: 'fa-solid fa-bug', name: 'Update', url: '/' },
    { icon: 'fa-solid fa-user-group', name: 'Sirkel', url: '/' },
]

const dashboards = [
    { icon: 'fa-regular fa-envelope', name: 'Postingan Lu', url: '/' },
    { icon: 'fa-solid fa-circle-notch', name: 'Kelola Sirkel', url: '/' },
]

const settings = [
    { icon: 'fa-regular fa-user', name: 'Akun', url: '/' },
    { icon: 'fa-regular fa-bell', name: 'Notifikasi', url: '/' },
    { icon: 'fa-regular fa-envelope-open', name: 'Undangan', url: '/' },
]
</script>
