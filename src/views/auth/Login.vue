<template>
    <div class="w-full h-screen flex items-center justify-center px-20 pb-20 lg:px-0 lg:pb-40">
        <div class="w-full h-32 lg:w-1/6">
            <h5 class="text-lg font-medium lg:text-xl">Login Dulu 🙏</h5>
            <p class="text-slate-500">Wajib login dulu baru bisa ke halaman utama cuy.</p>
            <form class="mt-4 flex flex-col gap-3">
                <input type="text" placeholder="Username...." class="border px-3 py-2 w-full rounded-lg shadow-sm">
                <input type="password" placeholder="Password...." class="border px-3 py-2 w-full rounded-lg shadow-sm">
                <button class="text-white bg-black w-full py-2 rounded-lg font-medium hover:bg-slate-800 hover:duration-150">Masuk</button>
            </form>
            <hr class="my-8 border">
            <router-link to="/daftar" class="border w-full flex justify-center py-2 rounded-lg font-medium shadow-sm hover:bg-slate-50 hover:duration-150">Gak ada akun 😔</router-link>
        </div>
    </div>
</template>