<template>
    <div class="flex items-center justify-between p-6 bg-white rounded-xl">
        <div class="flex items-center pr-3 space-x-2 border-r-2 border-gray-50 text-gray-20">
            <IconsSearch class="w-5 h-5" />
            <input v-model="search"
                class="py-2 font-light text-[16px] border-0 placeholder:text-gray-20 focus:outline-0 focus:ring-0 placeholder:font-light placeholder:text-[16px]"
                placeholder="Search for an event" />
        </div>
        <select v-model="category" class="px-4 font-light focus:outline-0 text-[16px] focus:ring-0 text-gray-20">
            <option :value="null" disabled selected hidden>Categories</option>
            conference others summit musical fundraising fitness meetup others
            <option v-for="(c, i) in categories" :key="i" class="uppercase" :value="c">{{ c }}</option>
            <option class="uppercase" value="others">Others</option>
        </select>
        <BaseButton class="ml-5" @click="setFilter">Search</BaseButton>
    </div>
</template>
<script setup>
import { categories } from '@/helpers/general';
import { useMainStore } from '@/store';

const store = useMainStore();
const category = ref(null);
const search = ref('');
const setFilter = () => {
    store.setFilter({category: category.value, search: search.value})
}

</script>