<template>
  <header class="px-4 py-6 bg-white md:py-12 md:px-6 lg:px-10">
    <div class="flex flex-wrap items-center justify-between">
      <button class="text-purple">
        <IconsLogo class="w-32 md:w-48 lg:w-52" @click="navigateTo('/')" />
      </button>
      <div
        class="cursor-pointer md:hidden text-purple"
        @click="isMenuOpen = true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>

      <nav
        :class="[
          'items-center justify-center md:space-x-6 lg:space-x-20 font-semibold text-purple hidden md:flex',
        ]">
        <button class="font-semibold select-none hover:opacity-75">Discover</button>
        <button class="font-semibold select-none hover:opacity-75">About us</button>
        <button class="font-semibold select-none hover:opacity-75">FAQs</button>
        <button class="font-semibold select-none hover:opacity-75">Contact us</button>
      </nav>
      <div class="items-center hidden space-x-4 md:flex">
        <button class="font-semibold select-none hover:opacity-75 text-purple">Login</button>
        <BaseButton>Sign up</BaseButton>
      </div>
    </div>
    <div
      class="fixed inset-0 z-50 w-screen h-screen p-6 transition-all duration-200 ease-linear transform bg-white"
      :class="isMenuOpen
          ? 'w-screen h-screen opacity-100'
          : 'h-0 w-0 opacity-0 pointer-events-none'
        ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 ml-auto cursor-pointer"
        @click="isMenuOpen = false">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12" />
      </svg>
      <nav class="space-y-6 font-light text-black">
        <button class="block font-semibold hover:opacity-75">Discover</button>
        <button class="block font-semibold hover:opacity-75">About us</button>
        <button class="block font-semibold hover:opacity-75">FAQs</button>
        <button class="block font-semibold hover:opacity-75">Contact us</button>
        <button class="block font-semibold hover:opacity-75 text-purple">Login</button>
        <BaseButton>Sign up</BaseButton>
      </nav>
    </div>
  </header>
</template>
<script setup lang="ts">
const isMenuOpen = ref(false)
</script>
