<template>
    <nav class="bg-white text-slate-600 w-full h-16 border-b flex items-center justify-between px-4 lg:h-20">
        <router-link class="font-medium text-xl lg:hidden" to="/">Forum<span class="text-red-500">Aja</span></router-link>
        <div class="lg:hidden">
            <button class="text-2xl border px-4 py-2 rounded-lg"><i class="fa-solid fa-bars"></i></button>
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
</template>