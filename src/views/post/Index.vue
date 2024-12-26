<template>
    <div class="px-4 py-2">
        <div class="bg-white w-full border rounded-lg h-max px-4 py-2">
            <div class="flex gap-4">
                <div>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="" class="w-14 h-14 rounded-full">
                </div>
                <div class="flex flex-col">
                    <span class="text-lg font-medium">Erlang Andriyanputra <span class="text text-blue-500">YANG PUNYA FORUM</span></span>
                    <span class="text-slate-500">@chilliope</span>
                </div>
            </div>
            <p class="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, optio!</p>
        </div>
        <form
            class="border px-4 py-2 rounded-lg flex flex-col mt-4"
            >
            <div class="flex gap-2 border-b pb-4">
                <div class="w-16">
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                    alt=""
                    class="w-12 h-12 rounded-full"
                />
                </div>
                <input
                type="text"
                class="w-full rounded-lg px-4 outline-none"
                placeholder="Balas postingan..."
                />
            </div>
            <div class="flex justify-end">
                <button
                class="bg-black hover:bg-slate-700 hover:duration-150 text-white rounded-lg px-6 py-2 mt-4"
                >
                Post
                </button>
            </div>
        </form>
        <div class="flex flex-col gap-4 mt-4">
            <div class="bg-white w-full border rounded-lg h-max px-4 py-2" v-for="post in post" :key="post">
                <div class="flex gap-4">
                    <div>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="" class="w-14 h-14 rounded-full">
                    </div>
                    <div class="flex flex-col">
                        <span class="text-lg font-medium">Erlang Andriyanputra</span>
                        <span class="text-slate-500">@chilliope</span>
                    </div>
                </div>
                <p class="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, optio!</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import usePost from '../../service/data/post'

const { getAllPost, post } = usePost()

onMounted(() => {
    getAllPost()
})
</script>