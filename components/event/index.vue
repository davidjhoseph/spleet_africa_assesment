<template>
    <div class="pb-6 border rounded-lg overflow-clip group">
        <div class="h-[300px] bg-black overflow-hidden relative">
            <img :src="event.imageUrl"
                class="object-cover w-full absolute inset-0 h-full duration-300 ease-linear transform group-hover:scale-[1.2]" />
            <div
                class="absolute z-50 px-6 py-1 text-white capitalize bg-blue-800 bg-opacity-75 border border-blue-500 rounded-full top-5 right-5">
                {{ event.category }}</div>
        </div>
        <div class="px-4 py-4">
            <div class="font-semibold text-[16px]">{{ event.title }}</div>
            <div class="flex items-center space-x-2 font-light">
                <div>Sun, Oct 3rd</div>
                <div class="w-1 h-1 bg-black rounded-full"></div>
                <div>6pm</div>
            </div>
            <div class="mt-6 font-light line-clamp-2">{{ event.description }}</div>
            <button class="flex items-center mt-6 space-x-1" @click="goToEvent">
                <div class="text-purple">View details</div>
                <IconsArrowCurve class="w-4 h-4 text-purple" />
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { IEvent } from '@types'
const props = defineProps({
    event: {
        type: Object as PropType<IEvent>,
        required: true,
    }
})
const goToEvent = () => {
    navigateTo(`/event/${props.event.id}`)
}
</script>