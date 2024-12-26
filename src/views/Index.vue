<template>
    <div class="flex">
        <SidebarComponent></SidebarComponent>
        <NavbarComponent></NavbarComponent>
    </div>
    <div class="lg:pl-96 pl-0">
        <router-view></router-view>
    </div>
</template>

<script setup>
import NavbarComponent from '../components/NavbarComponent.vue'
import SidebarComponent from '../components/SidebarComponent.vue'
</script>

