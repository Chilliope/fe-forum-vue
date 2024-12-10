<template>
  <div class="flex">
    <SidebarComponent></SidebarComponent>
    <NavbarComponent></NavbarComponent>
  </div>
  <router-view></router-view>
</template>

<script setup>
import NavbarComponent from './components/NavbarComponent.vue'
import SidebarComponent from './components/SidebarComponent.vue'

</script>