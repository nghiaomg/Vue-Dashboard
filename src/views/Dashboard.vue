<script setup>
import Sidebar from '../components/layouts/Sidebar.vue'
import Navbar from '../components/layouts/Navbar.vue'
import Content from '../components/layouts/Content.vue'
import Notification from '../components/layouts/Notification.vue'
import Home from '../components/Home/Home.vue'
</script>
<!-- Pag -->
<template>
    <main class="flex">
        <Sidebar AppName="Memory" />
      <div class="w-full">
        <Navbar AppName="Memory" />
        <Home />
      </div>
    </main>
</template>

<style>
</style>
