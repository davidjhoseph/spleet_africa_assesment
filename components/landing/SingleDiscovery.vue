<template>
    <div class="h-[240px] rounded-lg relative group overflow-hidden cursor-pointer">
        <div class="absolute inset-0 z-10 flex items-center justify-center w-full h-full text-white bg-black bg-opacity-50">
            {{discovery.title}}</div>
        <img :src="images[discovery.image]"
            class="absolute w-full h-full z-0 inset-0 object-cover duration-300 ease-linear transform group-hover:scale-[1.5]" />
    </div>
</template>
<script setup>
import { filename } from 'pathe/utils';
const props = defineProps({
    discovery: {
        type: Object,
        required: true,
    },
})

const glob = import.meta.glob('~/assets/images/*.png', { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);
</script>