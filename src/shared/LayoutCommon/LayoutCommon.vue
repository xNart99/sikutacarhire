<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
  <Footer />
</template>

<script setup>
import Navbar from "../Navbar/index.vue";
import Footer from "../Footer/index.vue";
</script>

<style lang="scss" scoped></style>
