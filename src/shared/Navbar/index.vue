<template>
  <div class="bg-gray-200">
    <div class="flex justify-between container mx-auto py-2">
      <div class="flex items-center">
        <img src="../../assets/images/logo.png" width="100" alt="logo" />
        <div class="font-bold text-xl">
          Sikuta <br />
          Australia
        </div>
      </div>
      <div class="flex gap-3 items-center font-semibold">
        <router-link to="/home">HOME</router-link>
        |
        <router-link to="/about">ABOUT US</router-link>
        <div
          class="bg-[#dc143c] text-white p-4 rounded-md cursor-pointer hover:bg-[#902c40]"
        >
          Login / Sign up
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigateRouter = (path) => {
  router.push(path);
};
</script>

<style lang="scss" scoped></style>
