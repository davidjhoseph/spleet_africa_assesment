<template>
  <div>
    <div class="flex flex-col justify-between pb-12 h-[640px] lg:px-12 md:pt-12 md:px-10 relative">
      <LandingHeader/>
      <div class="z-50 items-center justify-between px-4 md:px-0 md:flex">
        <div class="text-[32px] font-semibold text-white md:w-1/3 lg:w-1/3 mb-4 md:mb-0 text-center md:text-left">Ready to Rock? Discover the Hottest Events Here – Your Calendar's New Best Friend!</div>
        <LandingFilterBox/>
      </div>
      <img src="@/assets/images/landing-banner.png" class="absolute inset-0 z-0 object-cover w-full h-full">
    </div>
    <div class="lg:px-12 md:px-10">
      <EventList/>
      <LandingDiscovery/>
    </div>
    <LayoutFooter/>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store'

definePageMeta({
  layout: false
})

const store = useMainStore();
onMounted(() => {
  store.fetchEvents();
})

</script>