<template>
    <aside class="bg-white w-1/5 h-screen hidden border-r fixed lg:flex flex-col justify-between">
        <div>
            <div class="h-20 flex items-center justify-center border-b">
                <router-link class="font-medium text-2xl" to="/">Forum<span class="text-red-500">Aja</span></router-link>
            </div>
            <div class="px-10 py-6">
                <h5 class="text-xl text-slate-500 font-medium">Utama</h5>
                <ul class="mt-2 flex flex-col gap-3">
                    <li class="w-full flex" v-for="main in mains" :key="main.name">
                        <router-link :to="main.url" :class="['w-full py-2 text-slate-600 px-4 rounded-lg hover:bg-slate-100 hover:duration-150', isActive(main.name) ? 'bg-slate-800 text-white' : '']"><i :class="main.icon + ' w-10'"></i> {{ main.name }}</router-link>
                    </li>
                </ul>
                <h5 class="text-xl text-slate-500 font-medium mt-6">Dashboard</h5>
                <ul class="mt-2 flex flex-col gap-3">
                    <li class="w-full flex" v-for="dashboard in dashboards" :key="dashboard.name">
                        <router-link :to="dashboard.url" class="w-full py-2 text-slate-600 px-4 rounded-lg hover:bg-slate-100 hover:duration-150"><i :class="dashboard.icon + ' w-10'"></i> {{ dashboard.name }}</router-link>
                    </li>
                </ul>
                <h5 class="text-xl text-slate-500 font-medium mt-6">Pengaturan</h5>
                <ul class="mt-2 flex flex-col gap-3">
                    <li class="w-full flex" v-for="setting in settings" :key="setting.name">
                        <router-link :to="setting.url" class="w-full py-2 text-slate-600 px-4 rounded-lg hover:bg-slate-100 hover:duration-150"><i :class="setting.icon + ' w-10'"></i> {{ setting.name }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="px-10 h-20 flex items-center justify-center">
            <form class="w-full">
                <button class="border border-red-500 w-full py-2 rounded-lg text-red-500 hover:bg-red-500 hover:text-white hover:duration-150">Keluar</button>
            </form>
        </div>
    </aside>
</template>

<script setup>
    import { useRoute, useRouter } from 'vue-router'

    const route = useRoute()

    function isActive(name) {
        // Memeriksa apakah path saat ini termasuk href
        console.log(name)
        console.log(route.name)
        // return route.name.startsWith(name)
    }

    const mains = [
        {
            icon: 'fa-solid fa-house',
            name: 'Beranda',
            url: '/'
        },
        {
            icon: 'fa-solid fa-bug',
            name: 'Update',
            url: '/'
        },
        {
            icon: 'fa-solid fa-user-group',
            name: 'Sirkel',
            url: '/'
        }
    ]

    const dashboards = [
        {
            icon: 'fa-regular fa-envelope',
            name: 'Postingan Lu',
            url: '/'
        },
        {
            icon: 'fa-solid fa-circle-notch',
            name: 'Kelola Sirkel',
            url: '/'
        }
    ]

    const settings = [
        {
            icon: 'fa-regular fa-user',
            name: 'Akun',
            url: '/'
        },
        {
            icon: 'fa-regular fa-bell',
            name: 'Notifikasi',
            url: '/'
        },
        {
            icon: 'fa-regular fa-envelope-open',
            name: 'Undangan',
            url: '/'
        }
    ]
</script>