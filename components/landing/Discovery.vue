<template>
    <div class="flex-wrap my-40 bg-white md:space-x-6 md:flex">
        <div class="flex flex-col items-center mb-4 md:items-start md:w-1/4 md:mb-0">
            <div class="mb-4 text-[32px] text-black">Discover a World of Events Tailored Just for You.</div>
            <BaseButton>View all events</BaseButton>
        </div>
        <div class="grid flex-1 grid-cols-2 gap-4">
            <LandingSingleDiscovery v-for="(d, i) in discoveries" :key="i" :discovery="d"/>
        </div>
    </div>
</template>
<script setup>
    const discoveries = [
        {
            title: 'Online Events',
            image: 'discovery1'
        },
        {
            title: 'Physical Events',
            image: 'discovery2'
        },
        {
            title: 'Hybrid Events',
            image: 'discovery3'
        },
    ]
</script>