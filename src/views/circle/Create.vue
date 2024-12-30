<template>
    <div class="px-4 py-2">
        <form @submit.prevent="doCreateCircle()" class="border w-full h-max rounded-lg flex flex-col" enctype="multipart/form-data">
            <div class="px-4 py-2">
                <input required type="text" class="border-b w-full flex pb-4 text-slate-500 text-lg lg:text-xl outline-none" placeholder="Ketik nama sirkel nya..." v-model="forms.circle_name" id="circle_name">
            </div>
            <div class="px-4 py-2">
                <input required type="file" class="border-b w-full flex pb-4 text-slate-500 text-lg lg:text-xl outline-none" @change="handleFileUpload" id="circle_image">
            </div>
            <div class="flex justify-end px-6 py-4">
                <button class="bg-black text-white px-6 py-2 rounded-lg hover:bg-slate-700 hover:duration-150">Bikin Sirkel</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import useCircle from '../../service/data/circle'

const { createCircle } = useCircle()

const forms = ref({
    circle_name: '',
    circle_image: null
})

function handleFileUpload(event) {
    forms.value.circle_image = event.target.files[0]
}

function doCreateCircle() {
    const formData = new FormData()
    console.log(forms.value)
    for (const key in forms.value) {
        formData.append(key, forms.value[key])
    }
    createCircle(formData)
}
</script>