<script setup>
import Sidebar from '../components/layouts/Sidebar.vue'
import Navbar from '../components/layouts/Navbar.vue'
import Content from '../components/layouts/Content.vue'
import Notification from '../components/layouts/Notification.vue'
import User from '../components/User/User.vue'
</script>
<!-- Pag -->
<template>
    <main class="flex">
        <Sidebar AppName="Memory" />
      <div class="w-full">
        <Navbar AppName="Memory" />
        <User />
      </div>
    </main>
</template>

<style>
</style>
