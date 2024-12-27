<template>
  <div class="px-4 py-2">
    <form
      @submit.prevent="doCreateForum()"
      class="border px-4 py-2 rounded-lg flex flex-col"
    >
      <div class="flex gap-2 border-b pb-4">
        <div class="w-16">
          <img
            :src="'/storage/profile_picture/' + user.image"
            alt=""
            class="w-12 h-12 rounded-full"
          />
        </div>
        <input
          type="text"
          class="w-full rounded-lg px-4 outline-none"
          placeholder="Bikin forum bre..."
          v-model="forms.title"
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

    <hr class="my-6 lg:my-8" />

    <div class="flex flex-col gap-4">
      <div
        class="border w-full h-max rounded-lg px-4 py-2"
        v-for="forum in forum"
        :key="forum.id"
      >
        <div class="flex">
          <div class="w-16">
            <img
              :src="'/storage/profile_picture/' + forum.image"
              alt=""
              class="w-12 h-12 rounded-full"
            />
          </div>
          <div class="flex flex-col">
            <span>{{ forum.fullname }}</span>
            <span class="text-slate-500 text-sm">@{{ forum.username }}</span>
          </div>
        </div>
        <div class="mt-4">
          {{ forum.title }}
        </div>
        <hr class="my-4 lg:my-6" />
        <div class="flex justify-between">
          <div class="flex gap-4">
            <router-link
              :to="'/post/' + forum.forum_id"
              class="text-slate-500 border px-2 py-2 rounded-lg hover:bg-slate-200 hover:duration-150"
              ><i class="fa-regular fa-comments"></i>
              {{ forum.post_count }}</router-link
            >
            <router-link
              to=""
              class="text-slate-500 border px-4 py-2 rounded-lg hover:bg-slate-200 hover:duration-150"
              ><i class="fa-regular fa-share-from-square"></i
            ></router-link>
            <div class="flex gap-4" v-if="forum.username == user.username">
              <form @submit.prevent="deleteForum(forum.forum_id)">
                <button class="text-slate-500 border px-2 py-2 rounded-lg hover:bg-red-200 hover:text-red-500 hover:duration-150"><i class="fa-regular fa-trash-can"></i></button>
              </form>
              <button @click="togglePopupEditForum(forum.forum_id)" class="text-slate-500 border px-2 py-2 rounded-lg hover:bg-blue-200 hover:text-blue-500 hover:duration-150"><i class="fa-regular fa-pen-to-square"></i></button>
            </div>
          </div>
          <button
            class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 hover:duration-150"
          >
            <i class="fa-solid fa-bullhorn"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-end mt-8 pb-8 px-4">
    <div
      class="border shadow-sm w-full lg:w-max h-max p-3 rounded-lg flex justify-between items-center"
    >
      <!-- Tombol Previous -->
      <div class="px-4">
        <router-link
          :to="'' + (parseInt(route.params.page) - 1)"
          :class="{
            'text-blue-500': parseInt(route.params.page) > 1,
            'text-gray-500 pointer-events-none':
              parseInt(route.params.page) <= 1,
          }"
        >
          <i class="fa-solid fa-circle-chevron-left"></i>
        </router-link>
      </div>

      <!-- Pagination Links -->
      <div class="px-4">
        <ul class="flex gap-4">
          <li v-for="page in totalPage" :key="page">
            <router-link
              :to="'' + page"
              :class="{
                'font-bold text-blue-500': parseInt(route.params.page) === page,
                'text-blue-500': parseInt(route.params.page) !== page,
              }"
            >
              {{ page }}
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Tombol Next -->
      <div class="px-4">
        <router-link
          :to="'' + (parseInt(route.params.page) + 1)"
          :class="{
            'text-blue-500': parseInt(route.params.page) < totalPage,
            'text-gray-500 pointer-events-none':
              parseInt(route.params.page) >= totalPage,
          }"
        >
          <i class="fa-solid fa-circle-chevron-right"></i>
        </router-link>
      </div>
    </div>
  </div>

  <div id="popupEditForum" class="bg-black w-full min-h-screen fixed top-0 left-0 bg-opacity-50 flex items-center justify-center px-4 lg:px-0" :class="{ 'translate-y-0': isPopupEditForum, 'translate-y-full': !isPopupEditForum }">
    <form @submit.prevent="doEditForum()" class="bg-white w-full lg:w-1/4 h-max rounded-lg px-4 py-2">
      <h5 class="text-lg font-medium">Edit Forum</h5>
      <div class="mt-4 px-3 pb-1 border-b">
        <input type="text" placeholder="Edit Forum Euy..." class="outline-none w-full" v-model="formsEdit.title">
      </div>
        <div class="flex justify-between mt-4">
          <button @click="closePopupEditForum()" type="button" class="border border-slate-500 text-slate-500 px-4 py-2 rounded-lg hover:bg-slate-200 hover:duration-150">Gajadi</button>
          <button type="submit" class="bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-700  hover:duration-150">Simpan</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { onMounted, watch, reactive, ref } from 'vue'
import useForum from '../../service/data/forum'
import { useRoute } from 'vue-router'
import useAuth from '../../service/auth'

const isPopupEditForum = ref(false)
const currentForumId = ref(null);

function togglePopupEditForum(forumId) {
  isPopupEditForum.value = !isPopupEditForum.value

  currentForumId.value = forumId
}

function closePopupEditForum() {
  isPopupEditForum.value = false
}

const route = useRoute()
const { forum, getForum, totalPage, createForum, deleteForum, editForum } = useForum()
const { authUser, user } = useAuth()

watch(
    () => route.params.page,
    () => {
        getForum()
    }
)

onMounted(() => {
    getForum()
    authUser()
})

const forms = reactive({
    title: ''
})

const formsEdit = reactive({
  title: ''
})

function doCreateForum() {
    createForum({...forms})
}

function doEditForum() {
  editForum(currentForumId.value, formsEdit)
}
</script>
