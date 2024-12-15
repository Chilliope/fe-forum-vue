<template>
    <div class="px-4 py-2">
        <form action="" class="border px-4 py-2 rounded-lg flex flex-col">
            <div class="flex gap-2">
                <div class="w-16">
                    <img :src="'default.jpg'" alt="" class="w-12 h-12 rounded-full">
                </div>
                <input type="text" class="border w-full h-20 rounded-lg px-4 outline-none" placeholder="Ayo cerita dulu bre...">
            </div>
            <div class="flex justify-end">
                <button class="bg-blue-500 text-white rounded-lg px-6 py-2 mt-4">Post</button>
            </div>
        </form>
    </div>
</template>

