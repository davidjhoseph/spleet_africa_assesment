<template>
  <div>
    <div class="flex flex-col justify-between pb-12 h-[640px] lg:px-12 md:pt-12 md:px-10 relative">
      <LandingHeader/>
      <div class="z-50 flex items-center justify-between">
        <div class="text-[32px] font-semibold text-white md:w-1/3 lg:w-1/3">Ready to Rock? Discover the Hottest Events Here – Your Calendar's New Best Friend!</div>
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
definePageMeta({
  layout: false
})
</script>