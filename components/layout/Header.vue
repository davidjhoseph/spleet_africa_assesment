<template>
  <header class=" md:px-6 lg:px-10 px-4 py-4 bg-white">
    <div class="flex flex-wrap items-center justify-between">
      <button class="text-purple" >
        <IconsLogo class="w-52" @click="navigateTo('/')"/>
      </button>
      <div
        class="cursor-pointer md:hidden text-purple"
        @click="isMenuOpen = true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <nav
        :class="[
          'items-center justify-center space-x-20 font-semibold text-purple hidden md:flex',
        ]"
      >
        <button class="hover:opacity-75 font-semibold">Discover</button>
        <button class="hover:opacity-75 font-semibold">About us</button>
        <button class="hover:opacity-75 font-semibold">FAQs</button>
        <button class="hover:opacity-75 font-semibold">Contact us</button>
      </nav>
      <div class="items-center space-x-4 hidden md:flex">
        <button class="hover:opacity-75 font-semibold text-purple">Login</button>
        <button class="bg-purple-10 rounded-lg text-white font-semibold px-6 py-2">Sign up</button>
      </div>
    </div>
    <div
      class="fixed inset-0 z-50 w-screen h-screen p-6 transition-all duration-200 ease-linear transform bg-white"
      :class="
        isMenuOpen
          ? 'w-screen h-screen opacity-100'
          : 'h-0 w-0 opacity-0 pointer-events-none'
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 ml-auto cursor-pointer"
        @click="isMenuOpen = false"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <nav class="space-y-6 font-light text-black">
        <button class="hover:opacity-75 block font-semibold">Discover</button>
        <button class="hover:opacity-75 block font-semibold">About us</button>
        <button class="hover:opacity-75 block font-semibold">FAQs</button>
        <button class="hover:opacity-75 block font-semibold">Contact us</button>
        <button class="hover:opacity-75 block font-semibold text-purple">Login</button>
        <button class="bg-purple-10 block rounded-lg text-white font-semibold px-6 py-2">Sign up</button>
      </nav>
    </div>
  </header>
</template>
<script setup lang="ts">
const isMenuOpen = ref(false)
</script>
