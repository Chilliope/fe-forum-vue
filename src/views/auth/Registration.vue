<template>
    <div class="w-full h-screen flex items-center justify-center px-20 pb-20 lg:px-0 lg:pb-40">
        <div class="w-full h-32 lg:w-1/6">
            <h5 class="text-lg font-medium lg:text-xl">Bikin Akun, Cihuyyy 😂</h5>
            <p class="text-slate-500">Isi yang bener bre buat akun lu soalnya.</p>
            <form @submit.prevent="doRegistration()" class="mt-4 flex flex-col gap-3">
                <input type="text" placeholder="Nama Lengkap...." class="border px-3 py-2 w-full rounded-lg shadow-sm" v-model="forms.fullname">
                <input type="text" placeholder="Username...." class="border px-3 py-2 w-full rounded-lg shadow-sm" v-model="forms.username">
                <input type="password" placeholder="Password...." class="border px-3 py-2 w-full rounded-lg shadow-sm" v-model="forms.password">
                <button class="text-white bg-black w-full py-2 rounded-lg font-medium hover:bg-slate-800 hover:duration-150">Daftar</button>
            </form>
            <hr class="my-8 border">
            <router-link to="/masuk" class="border w-full flex justify-center py-2 rounded-lg font-medium shadow-sm hover:bg-slate-50 hover:duration-150">dah ada akun 🙏</router-link>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import useAuth from '../../service/auth'

const { registration } = useAuth()

const forms = reactive({
    fullname: '',
    username: '',
    password: ''
})

function doRegistration() {
    registration({...forms})
}
</script>